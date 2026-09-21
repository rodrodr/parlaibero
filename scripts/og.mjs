#!/usr/bin/env node
/**
 * Imagen social por lengua: `public/og-{es,en,pt}.png`, 1200×630.
 *
 *   node scripts/og.mjs
 *
 * A la izquierda, la rejilla de cobertura simplificada —una fila por cámara, una columna por año, con el
 * mismo orden y la misma codificación que la figura del sitio—; a la derecha, el nombre del sitio y la tesis.
 * Nada se teclea: la rejilla sale de `src/data/`, los textos de los diccionarios (`comun.cabecera.nombre`,
 * `inicio.tesis`; si la lengua aún no está traducida, cae al español) y los colores de los tokens de
 * `src/styles/base.css`. Hay que volver a ejecutarlo cuando cambien los datos, la tesis o la paleta.
 *
 * El texto va en SVG con familias genéricas: la imagen se rasteriza con las fuentes del equipo que la
 * genera, así que no es idéntica byte a byte entre macOS y el servidor de integración. No importa: es
 * una tarjeta para redes, no un dato.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RAIZ = fileURLToPath(new URL('../', import.meta.url));
const LANGS = ['es', 'en', 'pt'];
const W = 1200, H = 630;

const lee = (rel) => readFileSync(join(RAIZ, rel), 'utf8');
const json = (rel) => JSON.parse(lee(rel));
const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ── tokens del tema claro: el primer bloque `:root { … }` de la hoja de estilo ───────────────────
const css = lee('src/styles/base.css');
const raizCss = css.slice(css.indexOf(':root {'), css.indexOf('}', css.indexOf(':root {')));
const token = (nombre) => {
  const m = raizCss.match(new RegExp(`--${nombre}:\\s*([^;]+);`));
  if (!m) throw new Error(`og.mjs: no encuentro el token --${nombre} en src/styles/base.css`);
  return m[1].trim();
};
const C = { bg: token('bg'), ink: token('ink'), ink2: token('ink-2'), mute: token('mute'), accent: token('accent'), ausencia: token('ausencia'), rampa: [0, 1, 2, 3, 4].map((i) => token(`rampa-${i}`)) };

// ── datos ────────────────────────────────────────────────────────────────────────────────────────
const cifras = json('src/data/cifras.json');
const paises = json('src/data/paises.json');   // ya viene en el orden de la figura: década de entrada y año de inicio
const anual = Object.fromEntries(json('src/data/anual.json').map((s) => [s.iso, s]));
const DESDE = cifras['rejilla.desde'].v, HASTA = cifras['rejilla.hasta'].v;
const ANOS = HASTA - DESDE + 1;

/**
 * Cinco clases por cuantiles de los turnos de habla: el tono dice cuánto material hay. MISMA regla que la figura del
 * sitio (src/viz/geom/rejilla.ts), para que la tarjeta y la rejilla pinten cada celda con el mismo tono: celdas CON
 * SESIÓN, corte en el rango ⌈q·n⌉ (un valor observado, el máximo de la clase de abajo), cortes empatados fundidos,
 * y clase = cuántos cortes supera.
 */
const K = 5;
const conSesion = [];
for (const p of paises) anual[p.iso].ses.forEach((s, i) => { const a = anual[p.iso].y0 + i; if (s > 0 && a >= DESDE && a <= HASTA) conSesion.push(anual[p.iso].hab[i] ?? 0); });
conSesion.sort((a, b) => a - b);
const cortes = [...new Set(Array.from({ length: K - 1 }, (_, j) => conSesion[Math.max(0, Math.ceil(((j + 1) * conSesion.length) / K) - 1)]))];
const clase = (h) => cortes.filter((c) => h > c).length;

// ── geometría ────────────────────────────────────────────────────────────────────────────────────
const X0 = 104, Y0 = 96, PASO_X = 10.4, CELDA_X = 9, PASO_Y = 27, CELDA_Y = 21;

function rejilla() {
  let s = '';
  paises.forEach((p, fila) => {
    const y = Y0 + fila * PASO_Y;
    const serie = anual[p.iso];
    s += `<text x="${X0 - 14}" y="${y + CELDA_Y - 5}" text-anchor="end" font-family="Menlo, Consolas, 'DejaVu Sans Mono', monospace" font-size="15" font-weight="600" fill="${C.ink2}">${xml(p.iso.toUpperCase())}</text>`;
    for (let a = DESDE; a <= HASTA; a++) {
      const x = X0 + (a - DESDE) * PASO_X;
      const i = a - serie.y0;
      const ses = i >= 0 && i < serie.ses.length ? serie.ses[i] : 0;
      if (ses > 0) s += `<rect x="${x.toFixed(1)}" y="${y}" width="${CELDA_X}" height="${CELDA_Y}" fill="${C.rampa[clase(serie.hab[i])]}"/>`;
      // La ausencia nunca es un color: el hueco declarado es papel con contorno. Antes del arranque, nada.
      else if ((p.huecos ?? []).some(([d, h]) => a >= d && a <= h)) s += `<rect x="${(x + 0.5).toFixed(1)}" y="${y + 0.5}" width="${CELDA_X - 1}" height="${CELDA_Y - 1}" fill="none" stroke="${C.ausencia}" stroke-width="1"/>`;
    }
  });
  const yEje = Y0 + paises.length * PASO_Y + 18;
  const mono = `font-family="Menlo, Consolas, 'DejaVu Sans Mono', monospace" font-size="15" fill="${C.mute}"`;
  s += `<text x="${X0}" y="${yEje}" ${mono}>${DESDE}</text>`;
  s += `<text x="${(X0 + (ANOS - 1) * PASO_X + CELDA_X).toFixed(1)}" y="${yEje}" text-anchor="end" ${mono}>${HASTA}</text>`;
  return s;
}

/** SVG no parte líneas: se parte aquí, por anchura estimada (la serif ronda medio cuadratín por carácter). */
function parte(texto, maxCaracteres) {
  const lineas = [];
  let actual = '';
  for (const palabra of texto.split(/\s+/)) {
    if (actual && (actual + ' ' + palabra).length > maxCaracteres) { lineas.push(actual); actual = palabra; }
    else actual = actual ? actual + ' ' + palabra : palabra;
  }
  if (actual) lineas.push(actual);
  return lineas;
}

function textoDe(dic, es, clave, lang) {
  const crudo = dic?.[clave] ?? es[clave];
  if (!crudo) throw new Error(`og.mjs: la clave «${clave}» no existe en el copy`);
  if (/\{\{/.test(crudo)) throw new Error(`og.mjs: «${clave}» (${lang}) lleva un marcador y este script no resuelve cifras: la imagen social solo admite texto`);
  return crudo.replace(/\*\*|`/g, '').replace(/\*([^*]+)\*/g, '$1').replace(/\s+/g, ' ').trim();
}

function svg(lang, es) {
  const f = join(RAIZ, `src/i18n/${lang}.json`);
  const dic = existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : null;
  if (!dic) console.log(`  ⚠ ${lang}: sin diccionario; la imagen sale con el texto español`);
  const nombre = textoDe(dic, es, 'comun.cabecera.nombre', lang);
  const tesis = textoDe(dic, es, 'inicio.tesis', lang);
  const XT = 690, ANCHO = W - XT - 64;
  const cuerpo = 31, interlinea = 42;
  const lineas = parte(tesis, Math.floor(ANCHO / (cuerpo * 0.49)));
  // El bloque de texto se centra en vertical contra la rejilla, tenga la tesis las líneas que tenga.
  const altoRejilla = paises.length * PASO_Y, altoTexto = 86 + 74 + (lineas.length - 1) * interlinea;
  const yNombre = Math.round(Y0 + Math.max(0, (altoRejilla - altoTexto) / 2) + 86);
  const yTesis = yNombre + 74;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  ${rejilla()}
  <rect x="${XT}" y="${yNombre - 86}" width="56" height="6" fill="${C.accent}"/>
  <text x="${XT}" y="${yNombre}" font-family="'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="900" font-size="70" letter-spacing="-2.5" fill="${C.ink}">${xml(nombre)}</text>
  ${lineas.map((l, i) => `<text x="${XT}" y="${yTesis + i * interlinea}" font-family="Georgia, 'Times New Roman', 'DejaVu Serif', serif" font-size="${cuerpo}" fill="${C.ink}">${xml(l)}</text>`).join('\n  ')}
</svg>`;
}

const es = json('src/i18n/es.json');
for (const lang of LANGS) {
  const destino = join(RAIZ, `public/og-${lang}.png`);
  const png = await sharp(Buffer.from(svg(lang, es))).resize(W, H).png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(destino, png);
  console.log(`✓ public/og-${lang}.png · ${Math.round(png.length / 1024)} KB`);
}
