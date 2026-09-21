#!/usr/bin/env node
/**
 * Puerta de los diccionarios `src/i18n/{es,en,pt}.json` (que se GENERAN del copy: `npm run i18n`).
 *
 *   node scripts/check-i18n.mjs            (si aún no hay en.json o pt.json, avisa)
 *   node scripts/check-i18n.mjs --strict   (puerta de publicación: las tres lenguas, completas)
 *   node scripts/check-i18n.mjs --i18n=DIR  (otros diccionarios: para probar una traducción antes de instalarla)
 *
 * Falla si:
 *  · las claves de es, en y pt no son las mismas, o hay un valor vacío;
 *  · los marcadores `{{…}}` de una clave no son los mismos en las tres lenguas (una cifra que se pierde al
 *    traducir no da error en ningún otro sitio: la frase sigue leyéndose bien);
 *  · un texto para el lector lleva un NÚMERO TECLEADO: dígitos fuera de un marcador, de código y de la lista
 *    blanca de la hoja de estilo del copy (§0.2);
 *  · aparece una palabra vetada;
 *  · una palabra de década («los ochenta», «esta década») no va con el marcador de esa década (§0.2);
 *  · a un texto se le ha colado un rótulo editorial del copy (una línea final toda en negrita).
 *
 * Node puro, sin dependencias. La lista blanca de literales es la MISMA que usa audit-cifras.mjs sobre `dist/`.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { literalesBlancos } from './audit-cifras.mjs';

const RAIZ = fileURLToPath(new URL('../', import.meta.url));
const LANGS = ['es', 'en', 'pt'];
const ESTRICTO = process.argv.includes('--strict');
const DIR = resolve(RAIZ, process.argv.find((a) => a.startsWith('--i18n='))?.slice(7) ?? 'src/i18n');

const VETADAS = /(?<![\p{L}])(innovador(?:a|es|as)?|innovative|inovador(?:a|es|as)?|próximamente|coming soon|em breve)(?![\p{L}])/giu;

/**
 * La única FORMA admitida son los nombres de archivo. La cita bibliográfica dejó de serlo: «(Mayúscula… año)» dejaba
 * pasar cualquier año tecleado entre paréntesis —«(Ecuador, desde 1979)»—. Ahora cada cita es un LITERAL de la lista
 * blanca (§0.2 del copy, más sus formas inglesa y portuguesa), que vive en audit-cifras.mjs para las dos puertas.
 */
const BLANCA_FORMAS = [
  /[\w.-]*\w\.(?:csv|xlsx|txt|json|jsonld|md|pdf|zip|tab|ris|bib|png|svg|html|cff|py|r|yml|yaml|parquet)\b/gi, // nombres de archivo
];

/** Palabras de década atadas a su marcador. «Esta década» es la de la edición de los datos. */
function decadas() {
  const sello = join(RAIZ, 'src/data/sello.json');
  const ano = existsSync(sello) ? Number(JSON.parse(readFileSync(sello, 'utf8')).edicion_datos?.slice(0, 4)) : NaN;
  const esta = Number.isFinite(ano) ? `${Math.floor(ano / 10) * 10}s` : '2020s';
  return {
    es: [[/\blos setenta\b/i, '1970s'], [/\blos ochenta\b/i, '1980s'], [/\blos noventa\b/i, '1990s'], [/\besta década\b/i, esta]],
    en: [[/\bseventies\b/i, '1970s'], [/\beighties\b/i, '1980s'], [/\bnineties\b/i, '1990s'], [/\bthis decade\b/i, esta]],
    pt: [[/\banos setenta\b/i, '1970s'], [/\banos oitenta\b/i, '1980s'], [/\banos noventa\b/i, '1990s'], [/\bn?esta década\b/i, esta]],
  };
}

const marcadores = (s) => [...s.matchAll(/\{\{([^{}]+)\}\}/g)].map((m) => {
  const [clave, fmt = ''] = m[1].replace(/^\s*NUEVO:/, '').split('|').map((x) => x.trim());
  return { clave, fmt };
});
const sinCodigo = (s) => s.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`\n]*`/g, ' ');
const escapaRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// ── carga ────────────────────────────────────────────────────────────────────────────────────────
const errores = [];
const avisos = [];
const DIC = {};
for (const l of LANGS) {
  const f = join(DIR, `${l}.json`);
  if (existsSync(f)) { DIC[l] = JSON.parse(readFileSync(f, 'utf8')); continue; }
  const msg = `no existe ${relative(RAIZ, f)} (genérelo con: python3 scripts/copy2i18n.py ${l})`;
  if (l === 'es' || ESTRICTO) errores.push(msg); else avisos.push(msg + ' — esa lengua se pinta con el texto español, marcado');
}
if (!DIC.es) { console.error('✗ ' + errores.join('\n✗ ')); process.exit(1); }

const BLANCA = literalesBlancos().map((s) => new RegExp(escapaRe(s), 'g'));
const DECADAS = decadas();
const clavesEs = Object.keys(DIC.es);

// ── 1 · mismas claves ────────────────────────────────────────────────────────────────────────────
for (const l of LANGS.filter((x) => x !== 'es' && DIC[x])) {
  const faltan = clavesEs.filter((k) => !(k in DIC[l]));
  const sobran = Object.keys(DIC[l]).filter((k) => !(k in DIC.es));
  if (faltan.length) errores.push(`${l}: faltan ${faltan.length} claves: ${faltan.slice(0, 12).join(', ')}${faltan.length > 12 ? '…' : ''}`);
  if (sobran.length) errores.push(`${l}: sobran ${sobran.length} claves que no están en es: ${sobran.slice(0, 12).join(', ')}${sobran.length > 12 ? '…' : ''}`);
}

// ── 2 a 6 · clave por clave, lengua por lengua ───────────────────────────────────────────────────
for (const l of LANGS.filter((x) => DIC[x])) {
  for (const [k, v] of Object.entries(DIC[l])) {
    const aqui = `${l}:${k}`;
    if (typeof v !== 'string' || !v.trim()) { errores.push(`${aqui}: valor vacío`); continue; }

    if ((v.match(/\{\{/g) ?? []).length !== (v.match(/\}\}/g) ?? []).length) errores.push(`${aqui}: llaves de marcador sin cerrar`);

    // número tecleado
    let resto = sinCodigo(v).replace(/\{\{[^{}]*\}\}/g, ' ');
    for (const re of [...BLANCA, ...BLANCA_FORMAS]) resto = resto.replace(re, ' ');
    const tecleados = resto.match(/\S*\d\S*/g);
    if (tecleados) errores.push(`${aqui}: número tecleado «${tecleados.slice(0, 4).join('» «')}» — va como {{marcador}}, o en la lista blanca del copy (§0.2) si no es una cifra`);

    // palabra vetada
    const vetada = v.match(VETADAS);
    if (vetada) errores.push(`${aqui}: palabra vetada «${vetada[0]}»`);

    // década ↔ marcador
    const ms = marcadores(v);
    for (const [re, dec] of DECADAS[l]) {
      if (re.test(v) && !ms.some((m) => m.clave.includes(dec))) errores.push(`${aqui}: dice «${v.match(re)[0]}» y ningún marcador es de ${dec}`);
    }

    // rótulo editorial colado: el copy separa bloques con una línea en negrita y copy2i18n no corta ahí
    const parrafos = v.split(/\n{2,}/);
    const ultimo = parrafos[parrafos.length - 1].trim();
    if (parrafos.length > 1 && /^\*\*[^*\n]+\*\*$/.test(ultimo)) {
      (ESTRICTO ? errores : avisos).push(`${aqui}: termina con un rótulo editorial del copy, «${ultimo}», que el lector vería (copy2i18n.py debe cortar la unidad ahí)`);
    }
  }
}

// ── 3 · mismos marcadores en las tres lenguas ────────────────────────────────────────────────────
for (const l of LANGS.filter((x) => x !== 'es' && DIC[x])) {
  for (const k of clavesEs) {
    if (typeof DIC[l][k] !== 'string') continue;
    const es = marcadores(DIC.es[k]), otra = marcadores(DIC[l][k]);
    const soloEs = [...new Set(es.map((m) => m.clave))].filter((c) => !otra.some((m) => m.clave === c));
    const soloOtra = [...new Set(otra.map((m) => m.clave))].filter((c) => !es.some((m) => m.clave === c));
    if (soloEs.length || soloOtra.length) {
      errores.push(`${l}:${k}: marcadores distintos de es` + (soloEs.length ? ` · faltan {{${soloEs.join('}} {{')}}}` : '') + (soloOtra.length ? ` · sobran {{${soloOtra.join('}} {{')}}}` : ''));
      continue;
    }
    // Misma clave con otro formato (|letra, |fecha_larga, |peso): la cifra está, pero se pinta distinto.
    const fmts = (lista) => [...new Set(lista.map((m) => `${m.clave}|${m.fmt}`))].sort().join(' ');
    if (fmts(es) !== fmts(otra)) (ESTRICTO ? errores : avisos).push(`${l}:${k}: mismos marcadores que es, con otro formato (${fmts(otra)} ≠ ${fmts(es)})`);
  }
}

// ── informe ──────────────────────────────────────────────────────────────────────────────────────
console.log(`check-i18n · ${LANGS.map((l) => `${l}: ${DIC[l] ? Object.keys(DIC[l]).length + ' claves' : 'sin diccionario'}`).join(' · ')}${ESTRICTO ? ' · estricto' : ''}`);
avisos.forEach((a) => console.log('  ⚠ ' + a));
if (errores.length) {
  console.error(`\n✗ ${errores.length} problemas:`);
  errores.forEach((e) => console.error('  ✗ ' + e));
  console.error('\nLos diccionarios no se editan: se corrige el copy (docs/0*_COPY_*.md) y se regeneran con «npm run i18n».');
  process.exit(1);
}
console.log('✓ Mismas claves y mismos marcadores; ningún número tecleado ni palabra vetada.');
