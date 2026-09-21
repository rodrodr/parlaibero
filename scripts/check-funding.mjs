#!/usr/bin/env node
/**
 * OBLIGACIÓN LEGAL. Publicidad de la ayuda de la AEI (guía del 5-feb-2026, §2 y §3; plan, sección
 * «Identificación del proyecto financiado»). Incumplirla puede minorar la ayuda, así que bloquea el despliegue.
 *
 *   node scripts/check-funding.mjs           (sobre dist/)
 *
 * Sobre TODA página HTML de `dist/` —sin excepciones: ni la raíz que elige idioma ni el 404—:
 *  1. está la referencia del proyecto;
 *  2. está el texto completo de la mención (`comun.aei.completa`) en la lengua de la página;
 *  3. está la banda oficial de logotipos, con `alt`;
 *  4. referencia y banda van JUNTAS, en un mismo bloque `[data-aei]`, y el texto completo también;
 *  5. la referencia no aparece suelta en ningún otro sitio del cuerpo: sin los logotipos al lado, incumple.
 * Antes de nada, comprueba que `dist/` esté entero: sin páginas que mirar, este control también diría ✓.
 * Y en las páginas de inicio (/es/, /en/, /pt/), además:
 *  6. la franja `data-aei="franja"` va ANTES de <main>, que es lo que la pone en el primer pantallazo.
 *     (Que quepa entera sin scroll lo mide Playwright: tests/aei.spec.ts.)
 *
 * Node puro. Reutiliza el HTML mínimo de audit-cifras.mjs.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { analiza, busca, textoDe, dentroDe, norm, paginasHtml, dirDist, paginasMinimas } from './audit-cifras.mjs';

const RAIZ = fileURLToPath(new URL('../', import.meta.url));
const REFERENCIA = 'PID2022-141706NB-C22';
const CLAVE = 'comun.aei.completa';
/** La banda es el fichero oficial de la AEI; Astro conserva su nombre delante del hash. */
const BANDA = /logo_proyectos_AEI/i;
const LANGS = ['es', 'en', 'pt'];
const ESTRICTO = process.env.STRICT === '1' || process.argv.includes('--strict');

const dic = (l) => { const f = join(RAIZ, `src/i18n/${l}.json`); return existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : null; };
/** El texto tal como lo ve el lector: sin las marcas de negrita, cursiva y código del copy. */
const sinMarcas = (s) => norm(s.replace(/\*\*|`/g, '').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2'));

const avisos = [];
const MENCION = {};
for (const l of LANGS) {
  const propio = dic(l)?.[CLAVE];
  if (propio) { MENCION[l] = sinMarcas(propio); continue; }
  // Sin traducción, el sitio pinta el texto español (vista previa). En publicación no vale.
  const es = dic('es')?.[CLAVE];
  if (!es) { console.error(`✗ Falta «${CLAVE}» en src/i18n/es.json: no hay mención que comprobar.`); process.exit(1); }
  MENCION[l] = sinMarcas(es);
  avisos.push(`«${CLAVE}» no está en ${l}: se comprueba contra el texto español`);
}
if (!MENCION.es.includes(REFERENCIA)) { console.error(`✗ «${CLAVE}» (es) no contiene la referencia ${REFERENCIA}.`); process.exit(1); }

const dist = dirDist();
const errores = [];
const paginas = paginasHtml(dist);
if (paginas.length < paginasMinimas()) errores.push(`dist/: tiene ${paginas.length} páginas y el sitio son al menos ${paginasMinimas()}; el build está vacío o a medias`);

for (const { ruta, rel } of paginas) {
  const falla = (msg) => errores.push(`${rel}: ${msg}`);
  const doc = analiza(readFileSync(ruta, 'utf8'));
  const html = busca(doc, (n) => n.tag === 'html')[0];
  const body = busca(doc, (n) => n.tag === 'body')[0];
  if (!html || !body) { falla('no es una página HTML completa'); continue; }
  const lang = (html.attrs.lang ?? '').slice(0, 2).toLowerCase();
  if (!LANGS.includes(lang)) { falla(`<html lang="${html.attrs.lang ?? ''}"> no es una lengua del sitio`); continue; }

  const bloques = busca(body, (n) => 'data-aei' in n.attrs);
  if (!bloques.length) {
    falla(`no lleva la mención de la AEI (ningún bloque [data-aei]; falta la referencia ${REFERENCIA} con su banda de logotipos)`);
    continue;
  }

  // 1, 3 y 4 · cada bloque es indivisible: referencia + banda con alt
  for (const b of bloques) {
    const cual = `[data-aei="${b.attrs['data-aei']}"]`;
    if (!textoDe(b).includes(REFERENCIA)) falla(`${cual} no lleva la referencia ${REFERENCIA}`);
    const bandas = busca(b, (n) => n.tag === 'img' && BANDA.test(n.attrs.src ?? ''));
    if (!bandas.length) { falla(`${cual} no lleva la banda oficial de logotipos (<img> de logo_proyectos_AEI)`); continue; }
    for (const img of bandas) {
      const alt = (img.attrs.alt ?? '').trim();
      if (!alt) falla(`${cual}: la banda de logotipos no tiene alt`);
      else if (!alt.includes(REFERENCIA)) avisos.push(`${rel}: el alt de la banda no repite la referencia del proyecto`);
    }
  }

  // 2 y 4 · el texto completo, en la lengua de la página y dentro de un bloque
  if (!bloques.some((b) => textoDe(b).includes(MENCION[lang]))) {
    falla(textoDe(body).includes(MENCION[lang])
      ? `el texto completo de la mención está FUERA del bloque [data-aei]: texto y logotipos van juntos`
      : `falta el texto completo de la mención («${CLAVE}», ${lang})`);
  }

  // 5 · la referencia, nunca sin los logotipos al lado
  const fuera = textoDe(body, (n) => 'data-aei' in n.attrs);
  if (fuera.includes(REFERENCIA)) {
    const i = fuera.indexOf(REFERENCIA);
    falla(`la referencia aparece fuera del bloque [data-aei], sin los logotipos: «…${fuera.slice(Math.max(0, i - 50), i + REFERENCIA.length + 20)}…»`);
  }

  // 6 · inicio: la franja, antes de <main>
  if (/^(es|en|pt)\/index\.html$/.test(rel)) {
    const franja = bloques.find((b) => b.attrs['data-aei'] === 'franja');
    const main = busca(body, (n) => n.tag === 'main')[0];
    if (!franja) falla('es una página de inicio y no lleva la franja [data-aei="franja"] del primer pantallazo');
    else if (!main) falla('no tiene <main>');
    else if (franja.pos > main.pos || dentroDe(franja, (p) => p === main)) falla('la franja [data-aei="franja"] debe ir ANTES de <main>, bajo la cabecera');
  }
}

console.log(`check-funding · ${paginas.length} páginas · referencia ${REFERENCIA}`);
for (const a of [...new Set(avisos)]) console.log(`  ⚠ ${a}`);
if (ESTRICTO && avisos.some((a) => a.includes('se comprueba contra el texto español'))) errores.push('la mención de la AEI no está traducida en todas las lenguas');
if (errores.length) {
  console.error(`\n✗ La mención de la AEI incumple en ${new Set(errores.map((e) => e.split(':')[0])).size} páginas:`);
  errores.forEach((e) => console.error('  ✗ ' + e));
  console.error('\nLa mención la pinta src/components/FundingNotice.astro, y Base.astro la pone en todas las páginas.');
  process.exit(1);
}
console.log('✓ Todas las páginas llevan la mención completa, con la referencia junto a los logotipos.');
