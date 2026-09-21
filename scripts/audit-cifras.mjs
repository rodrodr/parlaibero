#!/usr/bin/env node
/**
 * Auditoría de `dist/`: NINGÚN número sin procedencia llega al lector.
 *
 *   node scripts/audit-cifras.mjs            (informa de los pendientes; no fallan)
 *   STRICT=1 node scripts/audit-cifras.mjs   (puerta de publicación: los pendientes también fallan)
 *   node scripts/audit-cifras.mjs --dist=DIR --vetados=LISTA.json   (otro build, u otra lista de nombres: para probarlos)
 *   node scripts/audit-cifras.mjs --vetados=/no/existe.json          (sin lista: así corre en el CI, donde el padrón no está)
 *
 * Qué comprueba, página por página:
 *  0. que `dist/` esté ENTERO: con menos páginas de las que el sitio tiene, un ✓ no diría nada;
 *  1. el texto visible de <body> —cabecera y pie incluidos— no lleva dígitos fuera de un envoltorio con procedencia
 *     (`data-k`), de <code>, <pre>, <time>, de los atributos y de la lista blanca de abajo;
 *  2. todo <data> trae `data-k`; la clave es de una familia CONOCIDA; su `value` es el del dato, que aquí se vuelve
 *     a calcular desde `src/data/` (cifras, países, series anuales, eventos) sin pasar por el código del sitio; y el
 *     TEXTO que ve el lector dice lo que dice `value` (una clave verdadera no blanquea un número tecleado, y un
 *     `value` verdadero tampoco blanquea un texto que diga otra cosa);
 *  3. ningún CAMPO `speaker_name` / `speaker_raw` llega a `dist/` (el NOMBRE de la columna sí puede
 *     aparecer: el diccionario de columnas de «Usar» lo lista, y no es un dato de nadie). Y ningún NOMBRE de quien
 *     figura en los datos (directiva del 2026-09-21: en divulgación los hechos se cuentan por cargo, país y fecha).
 *     Como un control no puede adivinar qué es un apellido, la lista la entrega el exportador en
 *     `.cache/nombres_vetados.json`: las formas «nombre apellido» y «apellido nombre» de los dieciséis padrones, ya
 *     normalizadas. Ni se versiona ni se publica. El texto que LEE u OYE el lector se normaliza igual y se buscan en
 *     él todos los n-gramas. Un nombre hallado FALLA SIEMPRE, no solo en publicación. Quedan exentos los bloques
 *     `data-autoria` (autoría y citas de los conjuntos: son los investigadores), las referencias bibliográficas del
 *     copy y los `alt`. Sin la lista el control NO PUEDE VER, y lo dice: avisa; en publicación falla, SALVO que
 *     `src/data/sello.json` acredite `puertas >= 8` (el exportador ya pasó su propia puerta de nombres sobre los
 *     datos; es el caso del CI, donde el padrón no existe);
 *  4. los `mark.pendiente` (datos que solo puede dar el investigador) y los `data-todo-copy` (textos que el copy aún
 *     no trae y que el sitio suple con un identificador) se listan; en publicación, fallan;
 *  5. la descripción de cada página cabe en 155 caracteres (nota de diseño del copy, §2). Como los pendientes:
 *     en vista previa se lista y en publicación (STRICT) falla, porque cuando la descripción es una clave del
 *     copy APROBADO solo el investigador puede acortarla. Inicio y las fichas, además, fallan ya en el build;
 *  6. no se carga ningún recurso de terceros: es lo que hace cierta la línea de privacidad (copy, §1.5).
 *
 * Por qué la lista blanca sale de los DATOS y no de una lista escrita a mano: `resuelve()` emite sin
 * envoltorio los valores de tipo texto (DOI, versión, cita del conjunto, huecos, fuente y transformación
 * depositadas). Tienen procedencia —están literalmente en `src/data/`—, así que la auditoría los reconoce
 * por eso mismo: una cadena con dígitos es legítima si existe tal cual en los datos.
 *
 * Node puro, sin dependencias. Las utilidades de HTML se exportan: las reutiliza `check-funding.mjs`.
 */
import { readFileSync, readdirSync, existsSync, realpathSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = fileURLToPath(new URL('../', import.meta.url));

// ── HTML mínimo: un árbol suficiente para auditar la salida (bien formada) de Astro ──────────────
const VACIOS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const CRUDOS = new Set(['script', 'style', 'textarea', 'title']);
/** Etiquetas que NO separan palabras: fuera de ellas, cada frontera de elemento cuenta como un espacio. */
const EN_LINEA = new Set(['a', 'abbr', 'b', 'cite', 'code', 'data', 'em', 'i', 'mark', 'q', 's', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'tspan', 'u']);
const RE_ETIQUETA = /<(\/?)([a-zA-Z][^\s/>]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/y;
const RE_ATRIBUTO = /([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;

const ENTIDADES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', ndash: '–', mdash: '—', laquo: '«', raquo: '»', middot: '·', hellip: '…' };
export const decodifica = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (todo, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTIDADES[e.toLowerCase()] ?? todo;
  });

/** Un solo espacio: el copy llega con saltos de línea y el build los aplana; los datos traen espacios duros. */
export const norm = (s) => s.replace(/[\s\u00a0\u202f]+/g, ' ').trim();

function atributos(crudo) {
  const attrs = {};
  for (const m of crudo.matchAll(RE_ATRIBUTO)) attrs[m[1].toLowerCase()] = decodifica(m[2] ?? m[3] ?? m[4] ?? '');
  return attrs;
}

/** HTML → árbol `{ tag, attrs, hijos, pos, padre }`; los textos son `{ tag: '#texto', texto }`. */
export function analiza(html) {
  const raiz = { tag: '#raiz', attrs: {}, hijos: [], pos: 0, padre: null };
  let actual = raiz;
  let i = 0;
  const texto = (s, pos) => { if (s) actual.hijos.push({ tag: '#texto', texto: decodifica(s), pos, padre: actual }); };
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt < 0) { texto(html.slice(i), i); break; }
    texto(html.slice(i, lt), i);
    if (html.startsWith('<!--', lt)) { const f = html.indexOf('-->', lt + 4); i = f < 0 ? html.length : f + 3; continue; }
    if (html[lt + 1] === '!' || html[lt + 1] === '?') { const f = html.indexOf('>', lt); i = f < 0 ? html.length : f + 1; continue; }
    RE_ETIQUETA.lastIndex = lt;
    const m = RE_ETIQUETA.exec(html);
    if (!m) { texto('<', lt); i = lt + 1; continue; }
    i = lt + m[0].length;
    const tag = m[2].toLowerCase();
    if (m[1]) {
      // Cierre: sube hasta la etiqueta que cierra. Si nadie la abrió, se ignora.
      let n = actual;
      while (n && n.tag !== tag) n = n.padre;
      if (n && n.padre) actual = n.padre;
      continue;
    }
    const nodo = { tag, attrs: atributos(m[3]), hijos: [], pos: lt, padre: actual };
    actual.hijos.push(nodo);
    if (VACIOS.has(tag) || /\/\s*$/.test(m[3])) continue;
    if (CRUDOS.has(tag)) {
      // El contenido de <script> y <style> no es HTML: un «a<b» dentro no abre ninguna etiqueta.
      const fin = html.toLowerCase().indexOf(`</${tag}`, i);
      const hasta = fin < 0 ? html.length : fin;
      nodo.hijos.push({ tag: '#texto', texto: html.slice(i, hasta), pos: i, padre: nodo });
      const cierre = html.indexOf('>', hasta);
      i = cierre < 0 ? html.length : cierre + 1;
      continue;
    }
    actual = nodo;
  }
  return raiz;
}

/** Todos los nodos (elementos) que cumplen el predicado, en orden de documento. */
export function busca(nodo, pred, out = []) {
  for (const h of nodo.hijos ?? []) {
    if (h.tag === '#texto') continue;
    if (pred(h)) out.push(h);
    busca(h, pred, out);
  }
  return out;
}

/**
 * Texto de un nodo. `omite(n)` deja fuera un elemento entero con todo lo que lleva dentro; en su lugar queda `hueco`
 * (un espacio, o una marca si a quien llama le importa que lo de antes y lo de después no se lean seguidos).
 */
export function textoDe(nodo, omite = () => false, hueco = ' ') {
  let s = '';
  const baja = (n) => {
    if (n.tag === '#texto') { s += n.texto; return; }
    if (n.tag === 'script' || n.tag === 'style' || n.tag === 'template') { s += ' '; return; }
    if (omite(n)) { s += hueco; return; }
    const separa = !EN_LINEA.has(n.tag);
    if (separa) s += ' ';
    n.hijos.forEach(baja);
    if (separa) s += ' ';
  };
  baja(nodo);
  return norm(s);
}

export const tieneClase = (n, c) => (n.attrs.class ?? '').split(/\s+/).includes(c);
export const dentroDe = (n, pred) => { for (let p = n.padre; p; p = p.padre) if (pred(p)) return true; return false; };

/** Todas las páginas HTML de `dist/`, con su ruta relativa en forma de URL. */
export function paginasHtml(dist) {
  const out = [];
  const anda = (dir) => {
    for (const f of readdirSync(dir)) {
      const ruta = join(dir, f);
      if (statSync(ruta).isDirectory()) anda(ruta);
      // El archivo de verificación de Google Search Console (`google<código>.html`) no es una página del sitio: es una línea de
      // texto que Google exige en la raíz. No se audita ni cuenta como página (check-funding usa esta misma lista).
      else if (f.endsWith('.html') && !/^google[0-9a-f]+\.html$/.test(f)) out.push({ ruta, rel: relative(dist, ruta).split(sep).join('/') });
    }
  };
  anda(dist);
  return out.sort((a, b) => a.rel.localeCompare(b.rel));
}

export function dirDist() {
  const arg = process.argv.find((a) => a.startsWith('--dist='));
  const dist = resolve(RAIZ, arg ? arg.slice(7) : 'dist');
  if (!existsSync(dist)) { console.error(`✗ No existe ${relative(RAIZ, dist) || dist}/. Compile primero: npm run build`); process.exit(1); }
  return dist;
}

const leeJson = (rel) => JSON.parse(readFileSync(join(RAIZ, rel), 'utf8'));

// ── lista blanca ─────────────────────────────────────────────────────────────────────────────────
const escapaRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Hoja de estilo §0.2: cadenas con dígitos que no son cifras del corpus. La lista del copy AMPLÍA esta; nunca la recorta. */
const BLANCA_FIJA = ['PID2022-141706NB-C22', '10.13039/501100011033', 'CC BY 4.0', 'UTF-8'];
/**
 * La cita bibliográfica es un LITERAL, no una forma: una expresión genérica «(Autor, año)» dejaba pasar cualquier año
 * tecleado entre paréntesis —«(Ecuador, desde 1979)»—. La forma española está en la lista del copy; la inglesa y la
 * portuguesa las declararon sus traductores (docs/03_COPY_en.md y docs/03_COPY_pt.md, nota a `inicio.apertura.literatura`).
 */
const CITAS_TRADUCIDAS = ['(Bäck and Debus, 2019)', '(Bäck e Debus, 2019)'];

/** Entradas literales de la lista blanca escritas en el copy (§0.2): las viñetas que EMPIEZAN por un literal. */
export function blancaDelCopy() {
  const f = join(RAIZ, 'docs/02_COPY_es.md');
  if (!existsSync(f)) return [];
  const lineas = readFileSync(f, 'utf8').split('\n');
  const i = lineas.findIndex((l) => /^- Lista blanca de `check-i18n`/.test(l));
  if (i < 0) return [];
  const out = [];
  for (const l of lineas.slice(i + 1)) {
    const m = l.match(/^\s+- `([^`]+)`\s*$/);
    if (m) out.push(m[1]);
    else if (!/^\s+- /.test(l)) break;
  }
  return out;
}

/** Los literales de la lista blanca, UNA sola vez para las dos puertas (`check-i18n` sobre el copy, esta sobre `dist/`). */
export const literalesBlancos = () => [...new Set([...BLANCA_FIJA, ...CITAS_TRADUCIDAS, ...blancaDelCopy()])];

/** Formas que llevan su propia procedencia. Los literales de arriba se les suman en `main()`. */
const BLANCA = [
  /https?:\/\/[^\s<>"']+/g,                                  // una URL no es una cifra; su origen lo vigila src/config/enlaces.ts
  /\b10\.\d{4,9}\/[^\s<>"',;]+/g,                            // DOI, y con él el identificador del financiador
  /\bHarvard Dataverse, V\d+\b/g,                            // cola de la cita de un conjunto
  /[\w.-]*\w\.(?:csv|xlsx|txt|json|jsonld|md|pdf|zip|tab|ris|bib|png|svg|html|cff|py|r|yml|yaml|parquet)\b/gi, // nombres de archivo
];

/** Páginas que el sitio tiene como mínimo: seis plantillas (la sexta, «Explorador») y una ficha por cámara, en tres lenguas, más la raíz y el 404. */
export const paginasMinimas = () => 3 * (6 + leeJson('src/data/paises.json').length) + 2;

/** Toda cadena con dígitos que exista tal cual en `src/data/` (valores y claves), más las que el build deriva. */
function cadenasDeLosDatos() {
  const set = new Set();
  const mete = (s) => {
    const n = norm(String(s));
    if (!/\d/.test(n)) return;
    set.add(n);
    // Los textos depositados traen las marcas mínimas del copy, y los componentes las pintan: el `código`
    // pasa a <code> (que aquí no se lee) y la **negrita** pierde los asteriscos. Se reconoce también así.
    if (/[`*]/.test(n)) {
      const pintado = norm(n.replace(/`[^`]+`/g, ' ').replace(/\*\*/g, '').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2'));
      if (/\d/.test(pintado)) set.add(pintado);
    }
  };
  const baja = (x) => {
    if (typeof x === 'string') mete(x);
    else if (Array.isArray(x)) x.forEach(baja);
    else if (x && typeof x === 'object') for (const [k, v] of Object.entries(x)) { mete(k); baja(v); }
  };
  const paises = leeJson('src/data/paises.json');
  for (const f of ['paises', 'eventos', 'fragmento', 'columnas', 'ausentes', 'sello', 'fila_ejemplo']) {
    if (existsSync(join(RAIZ, `src/data/${f}.json`))) baja(leeJson(`src/data/${f}.json`));
  }
  // De cifras.json solo los valores de texto (sueltos o por lengua, «Perú (v1.0)»): los numéricos SIEMPRE salen envueltos.
  for (const c of Object.values(leeJson('src/data/cifras.json'))) {
    if (typeof c.v === 'string') mete(c.v);
    else if (c.v && typeof c.v === 'object') Object.values(c.v).forEach((x) => typeof x === 'string' && mete(x));
  }
  // Derivadas en src/lib/cifras.ts, de tipo texto: versión con su «v» y huecos como rangos.
  for (const p of paises) {
    mete('v' + p.version);
    const rangos = (p.huecos ?? []).map(([a, b]) => (a === b ? String(a) : `${a}–${b}`));
    rangos.forEach(mete);
    if (rangos.length) mete(rangos.join(', '));
  }
  // Datos del investigador ya resueltos (edición de la página…): viven en enlaces.ts, que es TypeScript.
  const enlaces = readFileSync(join(RAIZ, 'src/config/enlaces.ts'), 'utf8');
  const bloque = enlaces.slice(enlaces.indexOf('PENDIENTES_DEL_INVESTIGADOR'));
  for (const m of bloque.matchAll(/^\s*'?[\w.]+'?\s*:\s*'([^']*)'/gm)) mete(m[1]);
  // De la más larga a la más corta, y siempre como pieza entera: «2.0» no blanquea un «12.05».
  return [...set].sort((a, b) => b.length - a.length).map((s) => ({ s, re: new RegExp(`(?<![\\p{L}\\p{N}])${escapaRe(s)}(?![\\p{L}\\p{N}])`, 'gu') }));
}

// ── el valor que DEBE llevar cada clave, recalculado desde los datos ─────────────────────────────
/**
 * Devuelve `esperado(clave)`: `{ v, t }` (valor y tipo) para las claves que salen de un dato, `{ valida(value, texto) }`
 * para las de componente (ejes, décadas, umbrales: no hay UN valor, hay una regla), o `null` si la clave no es de
 * ninguna familia conocida. A propósito NO importa nada de `src/lib/`: un control que comparte el código con lo que
 * vigila solo puede darle la razón.
 */
function esperados() {
  const cifras = leeJson('src/data/cifras.json');
  const paises = Object.fromEntries(leeJson('src/data/paises.json').map((p) => [p.iso, p]));
  const anual = Object.fromEntries(leeJson('src/data/anual.json').map((a) => [a.iso, a]));
  const eventos = Object.fromEntries(leeJson('src/data/eventos.json').map((e) => [`${e.iso}-${e.date}`, e]));
  const columnas = Object.fromEntries(leeJson('src/data/columnas.json').map((c) => [c.nombre, c]));
  const fFila = join(RAIZ, 'src/data/fila_ejemplo.json');
  // `{ iso, texto_truncado, celdas: [{ columna, valor }] }` → columna → valor.
  const fila = existsSync(fFila) ? Object.fromEntries((leeJson('src/data/fila_ejemplo.json').celdas ?? []).map((c) => [c.columna, c.valor])) : null;
  const DESDE = cifras['rejilla.desde']?.v, HASTA = cifras['rejilla.hasta']?.v;

  const entero = (x) => /^\d+$/.test(String(x));
  const conDato = (m) => m && Number.isFinite(m.v) && m.den > 0;
  const deSerie = (iso, campo, ano) => { const a = anual[iso]; const i = a ? ano - a.y0 : -1; return a && i >= 0 && i < a[campo].length ? a[campo][i] ?? 0 : 0; };
  // Los cortes y los extremos de la escala son valores OBSERVADOS: turnos de habla de alguna celda con sesión de la ventana.
  const observados = new Set();
  for (const p of Object.values(paises)) for (let a = DESDE; a <= HASTA; a++) if (deSerie(p.iso, 'ses', a) > 0) observados.add(deSerie(p.iso, 'hab', a));
  const anoMin = Math.min(DESDE, ...Object.values(paises).map((p) => p.inicio)), anoMax = Math.max(HASTA, ...Object.values(paises).map((p) => p.fin));

  function dePais(p, campo) {
    const simple = {
      inicio: [p.inicio, 'year'], fin: [p.fin, 'year'], sesiones: [p.sesiones, 'int'], 'sesiones.P': [p.sesiones, 'int'],
      filas: [p.filas, 'int'], 'filas.P': [p.filas, 'int'], 'habla.L': [p.habla, 'int'], sesiones_sin_habla: [p.sesiones_sin_habla, 'int'],
      anos_con_sesion: [p.anos_con_sesion, 'int'], anos_periodo: [p.anos_periodo, 'int'], n_limitaciones: [p.n_limitaciones, 'int'],
      bruta: [p.vinculados / p.habla, 'pct'], efectiva: [p.vinculados / p.den_efectivo, 'pct'], noescano: [p.no_escano / p.habla, 'pct'],
      'disp.session_number': [p.disp_session_number, 'pct'], mediana: [p.mediana_palabras, 'int'], csv: [p.csv_bytes, 'bytes'],
    };
    if (campo in simple) return { v: simple[campo][0], t: simple[campo][1] };
    let m = campo.match(/^palF\.(\d{4}s|primera|ultima)\.(pct|n|den)$/) ?? campo.match(/^voz\.(\d{4}s)\.(\w+)\.(pct|n|den)$/);
    if (m) {
      const medida = m.length === 4 ? m[2] : 'palabras', sub = m[m.length - 1];
      const decs = Object.keys(p.voz).sort().filter((d) => conDato(p.voz[d].palabras));
      const dec = m[1] === 'primera' ? decs[0] : m[1] === 'ultima' ? decs[decs.length - 1] : m[1];
      const b = p.voz[dec]?.[medida];
      if (!conDato(b)) return null;
      return sub === 'pct' ? { v: b.v, t: 'pct' } : { v: sub === 'n' ? b.n : b.den, t: 'int' };
    }
    if (campo === 'huecos_rangos') return {
      // `value` es el año en que empieza el primer rango; el texto, uno o varios huecos DECLARADOS (enteros o recortados a la rejilla).
      valida(value, texto) {
        const rangos = [...texto.matchAll(/(\d{4})(?:–(\d{4}))?/g)].map((r) => [Number(r[1]), Number(r[2] ?? r[1])]);
        if (!rangos.length || texto.replace(/\d{4}|[–, ]/g, '') !== '') return `«${texto}» no es una lista de rangos de años`;
        const declarado = ([a, b]) => (p.huecos ?? []).some(([h0, h1]) => (a === h0 || a === Math.max(h0, DESDE)) && (b === h1 || b === Math.min(h1, HASTA)));
        const ajeno = rangos.find((r) => !declarado(r));
        if (ajeno) return `el hueco ${ajeno.join('–')} no está declarado en paises.json`;
        return Number(value) === rangos[0][0] ? null : `value="${value}" y el primer rango empieza en ${rangos[0][0]}`;
      },
    };
    return null;
  }

  const DE_COMPONENTE = {
    'eje.ano': (value, texto) => (entero(value) && texto === String(value) && Number(value) >= anoMin && Number(value) <= anoMax ? null : `«${texto}» no es un año del eje (${anoMin}–${anoMax}) igual a su value="${value}"`),
    // Marcas del eje de porcentajes: décimas entre 0 y 1. Lo que diga el texto lo coteja después `textoDice()`.
    'eje.pct': (value) => { const x = Number(value); return x >= 0 && x <= 1 && Math.abs(x * 10 - Math.round(x * 10)) < 1e-9 ? null : `value="${value}" no es una décima entre 0 y 1`; },
    'rejilla.umbrales': (value) => (observados.has(Number(value)) ? null : `value="${value}" no es el número de turnos de habla de ninguna celda con sesión`),
  };

  return function esperado(k) {
    if (k in cifras) return typeof cifras[k].v === 'object' ? { libre: true } : { v: cifras[k].v, t: cifras[k].t, dec: cifras[k].dec };
    let m;
    if ((m = k.match(/^pais\.([a-z]{2})\.(.+)$/))) return paises[m[1]] ? dePais(paises[m[1]], m[2]) : null;
    if ((m = k.match(/^anual\.([a-z]{2})\.(\d{4})\.(ses|hab)$/))) return anual[m[1]] ? { v: deSerie(m[1], m[3], Number(m[2])), t: 'int' } : null;
    if ((m = k.match(/^anual\.([a-z]{2})\.hab\.max$/))) {
      const p = paises[m[1]];
      if (!p || !anual[m[1]]) return null;
      const anos = Array.from({ length: p.fin - p.inicio + 1 }, (_, i) => p.inicio + i);
      return { v: Math.max(1, ...anos.map((a) => deSerie(m[1], 'hab', a))), t: 'int' };
    }
    // Lo que pasó aquel día ya no es un dato (es la clave `eventos.<id>` del copy): de un evento solo salen dos cifras.
    if ((m = k.match(/^evento\.([a-z]{2}-\d{4}-\d{2}-\d{2})\.(filas|fecha)$/))) {
      const e = eventos[m[1]];
      if (!e) return null;
      return m[2] === 'filas' ? { v: e.filas, t: 'int' } : { v: e.date, t: 'date' };
    }
    if ((m = k.match(/^decada\.(\d{4})s$/))) {
      const d = Number(m[1]);
      return {
        // «1985–89»: el año en que la década empieza PARA ESA CÁMARA y, si lo hay, las dos últimas cifras del año en que acaba.
        valida(value, texto) {
          const r = texto.match(/^(\d{4})(?:–(\d{2}))?$/);
          if (!r || r[1] !== String(value)) return `«${texto}» no empieza por su value="${value}"`;
          const desde = Number(r[1]), hasta = r[2] === undefined ? desde : Number(String(d).slice(0, 2) + r[2]);
          return desde >= d && desde <= hasta && hasta <= d + 9 ? null : `«${texto}» no cabe en la década de ${d}`;
        },
      };
    }
    // La fecha de la búsqueda de corpus equivalentes la da el investigador: su procedencia es `src/config/enlaces.ts`.
    if (k === 'fecha_busqueda') {
      const dada = readFileSync(join(RAIZ, 'src/config/enlaces.ts'), 'utf8').match(/^\s*fecha_busqueda:\s*'(\d{4}-\d{2}-\d{2})'/m)?.[1];
      return dada ? { v: dada, t: 'date' } : null;
    }
    // La tira de «Usar los datos»: cuánto se pudo llenar cada columna en cada cámara (medido; `columnas.json`).
    if ((m = k.match(/^columna\.(\w+)\.disp\.([a-z]{2})$/))) {
      const v = columnas[m[1]]?.disponibilidad?.[m[2]];
      if (typeof v !== 'number') return null;
      // Regla propia: el texto redondea, SALVO en los bordes, donde trunca: una columna al 99,9999 % no puede leerse
      // «100 %» ni una al 0,0001 % «0 %». «100» exige que esté completa y «0», que esté vacía.
      return { valida(value, texto) {
        if (Number(value) !== v) return `lleva value="${value}" y el dato es ${v}`;
        const dec = decimalesDe(texto), dice = aNumero(texto, dec), x = 100 * v, f = 10 ** dec;
        if (dice === 100 && v < 1) return `dice 100 % y la columna no está completa (${x})`;
        if (dice === 0 && v > 0) return `dice 0 % y la columna no está vacía (${x})`;
        const admite = [x.toFixed(dec), ...(v < 1 ? [(Math.floor(x * f) / f).toFixed(dec)] : []), ...(v > 0 ? [(Math.ceil(x * f) / f).toFixed(dec)] : [])];
        return admite.includes(dice.toFixed(dec)) ? null : `el texto «${texto}» no dice ${x.toFixed(dec)}`;
      } };
    }
    if ((m = k.match(/^fila_ejemplo\.(\w+)$/))) {
      if (!fila) return null;
      // Un `null` (las dos columnas del orador, a propósito) no es un valor que se pueda pintar: si alguien lo envuelve, falla.
      return { valida: (value, texto) => (fila[m[1]] != null && String(fila[m[1]]) === String(value) && texto === String(value) ? null : `no coincide con src/data/fila_ejemplo.json (${fila[m[1]]})`) };
    }
    return DE_COMPONENTE[k] ? { valida: DE_COMPONENTE[k] } : null;
  };
}

const digitos = (s) => s.replace(/\D/g, '');
/** Número escrito con coma o con punto decimal y, como mucho, separadores de millar: «1.234,56» · «1,234.56» · «12,3». */
function aNumero(s, decimales) {
  const limpio = s.replace(/[^\d.,]/g, '');
  if (!decimales) return Number(digitos(limpio));
  return Number(digitos(limpio.slice(0, -decimales - 1)) + '.' + limpio.slice(-decimales));
}
const decimalesDe = (s) => { const m = s.replace(/[^\d.,]/g, '').match(/[.,](\d{1,2})$/); return m ? m[1].length : 0; };

/**
 * ¿Dice el TEXTO lo que dice `value`? Devuelve el motivo si no. Un `<data value="…">` correcto con otro número a la
 * vista engaña igual que un número tecleado: «fmt.dato(999, '999', 'pais.uy.sesiones')» pasaba, y también un 50 % pintado
 * sobre un 0,4. Los números escritos en letra (`data-fmt="letra"`) no se cotejan: son prosa.
 */
function textoDice(v, t, texto, enLetra) {
  if (enLetra) return null;
  switch (t) {
    case 'int': case 'year':
      return digitos(texto) === String(v) ? null : `el texto «${texto}» no dice ${v}`;
    case 'pct': case 'ratio': {
      // Un porcentaje no llega a mil: la coma o el punto que lleve es el decimal. La razón va con un decimal.
      const dec = decimalesDe(texto), x = t === 'pct' ? 100 * Number(v) : Number(v);
      return aNumero(texto, dec).toFixed(dec) === x.toFixed(dec) ? null : `el texto «${texto}» no dice ${x.toFixed(dec)}`;
    }
    case 'seg': {
      // Segundos: el número, con el decimal que traiga, y su unidad («3,7 s» · «82 s»).
      const dec = decimalesDe(texto);
      return aNumero(texto, dec).toFixed(dec) === Number(v).toFixed(dec) && /\ss$/.test(texto) ? null : `el texto «${texto}» no dice ${v} s`;
    }
    case 'bytes': {
      // La unidad de Harvard Dataverse: divide por 1.024 y rotula MB/GB (src/lib/cifras.ts, `peso`).
      const mb = Number(v) / 1048576;
      const [cifra, unidad] = mb >= 1024 ? [(mb / 1024).toFixed(1), 'GB'] : [String(Math.round(mb)), 'MB'];
      return digitos(texto) === digitos(cifra) && texto.includes(unidad) ? null : `el texto «${texto}» no dice ${cifra} ${unidad}`;
    }
    case 'date': {
      // Tal cual (AAAA-MM-DD) o en fecha larga, que en las tres lenguas deja a la vista el día y el año.
      const [a, , d] = String(v).split('-');
      return digitos(texto) === digitos(String(v)) || digitos(texto) === String(Number(d)) + a ? null : `el texto «${texto}» no es la fecha ${v}`;
    }
    default:
      // Texto (un intervalo, una versión): las mismas cifras, en el mismo orden.
      return digitos(texto) === digitos(String(v)) ? null : `el texto «${texto}» no lleva las cifras de «${v}»`;
  }
}

// ── nombres de quien figura en los datos ─────────────────────────────────────────────────────────
/**
 * La MISMA normalización con que el exportador escribe la lista (`llano()` de diaries/scripts/exportar_sitio.py):
 * sin tildes, en minúsculas, solo letras y cifras, un espacio. Si las dos orillas no normalizan igual, el control no ve.
 */
export const llano = (s) => s.normalize('NFKD').replace(/[^\x00-\x7f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
/**
 * `llano()` BORRA la puntuación que no es ASCII sin dejar hueco: «García—dijo» queda «garciadijo» y un nombre pegado a
 * una raya o a unas comillas latinas dejaría de verse. El texto se lee también así, con un espacio en su lugar.
 */
const llanoSeparado = (s) => llano(s.replace(/[^\p{L}\p{N}\p{M}]+/gu, ' '));

/** Corta el texto: lo de un lado y lo del otro no se leen seguidos (un bloque exento no puede fabricar un nombre con sus vecinos). */
const CORTE = '\u0001';
/**
 * Atributos que el lector LEE u OYE: nombre accesible, nota emergente, descripción para buscadores y redes, y los
 * `data-*`, que es por donde los scripts reciben lo que enseñan. `alt` queda fuera A PROPÓSITO: la directiva exime las
 * imágenes de vistas agregadas de una herramienta, y con ellas su texto alternativo.
 */
const ATRIBUTOS_LEIDOS = new Set(['aria-label', 'aria-description', 'title', 'placeholder', 'content', 'label', 'summary']);
/** Campos de un JSON-LD que son AUTORÍA: exentos, como los bloques `data-autoria`. */
const AUTORIA_JSONLD = new Set(['creator', 'author', 'contributor', 'citation']);

/**
 * FALSOS POSITIVOS conocidos. Cada uno es una frase CONCRETA donde la coincidencia no nombra a nadie (un topónimo, dos
 * palabras corrientes que juntas son también «nombre apellido» de algún padrón). La excepción vale SOLO dentro de esa
 * frase, no para el nombre en general, y el informe la enseña cada vez que se usa. No se amplía para que pase un build:
 * se añade una línea, con su motivo, cuando alguien ha leído la frase.
 *   { nombre: 'forma de la lista', frase: 'la frase donde aparece, tal como se lee', motivo: 'por qué no es una persona' }
 */
const EXCEPCIONES_DE_NOMBRE = [];

/** Las referencias bibliográficas del copy: los literales de la lista blanca con forma de cita, «(Autoría, año)». */
const referencias = () => literalesBlancos().filter((l) => /^\(.+,\s*\d{4}\)$/.test(l));

/** Todo lo que el lector lee u oye en una página, en trozos que no se leen seguidos. */
function textosLeidos(doc, refs) {
  const autoria = (n) => 'data-autoria' in n.attrs;
  const trozos = [];
  const mete = (s) => { let t = s; for (const r of refs) t = t.split(r).join(CORTE); trozos.push(...t.split(CORTE)); };
  const body = busca(doc, (n) => n.tag === 'body')[0];
  if (body) mete(textoDe(body, autoria, CORTE));
  const titulo = busca(doc, (n) => n.tag === 'title' && !dentroDe(n, (p) => p.tag === 'svg'))[0];
  if (titulo) mete(textoDe(titulo));
  for (const n of busca(doc, (x) => !autoria(x) && !dentroDe(x, autoria))) {
    for (const [a, v] of Object.entries(n.attrs)) if (v && (ATRIBUTOS_LEIDOS.has(a) || a.startsWith('data-'))) mete(v);
    if (n.tag === 'script' && /ld\+json/i.test(n.attrs.type ?? '')) {
      const baja = (x, clave) => {
        if (AUTORIA_JSONLD.has(clave)) return;
        if (typeof x === 'string') mete(x);
        else if (Array.isArray(x)) x.forEach((y) => baja(y, clave));
        else if (x && typeof x === 'object') for (const [k, y] of Object.entries(x)) baja(y, k);
      };
      try { baja(JSON.parse(n.hijos[0]?.texto ?? 'null'), ''); } catch { mete(n.hijos[0]?.texto ?? ''); }
    }
  }
  return trozos;
}

/** Nombres de la lista que aparecen en un texto, cada uno con la frase donde está. `nMax`: las palabras del nombre más largo. */
function nombresEn(texto, vetados, nMax) {
  const hallados = new Map();
  for (const pal of new Set([llano(texto), llanoSeparado(texto)])) {
    const p = pal.split(' ');
    for (let i = 0; i < p.length; i++) {
      for (let n = 2; n <= nMax && i + n <= p.length; n++) {
        const nombre = p.slice(i, i + n).join(' ');
        if (vetados.has(nombre) && !hallados.has(nombre)) hallados.set(nombre, p.slice(Math.max(0, i - 6), i + n + 6).join(' '));
      }
    }
  }
  return hallados;
}

// ── la auditoría ─────────────────────────────────────────────────────────────────────────────────
const RE_SPEAKER = /speaker[_-](?:name|raw)/i;
/** `speaker_name` como CAMPO: clave de JSON u objeto, o asignación. Como valor entre comillas no lo es. */
const RE_SPEAKER_CAMPO = /["']?speaker[_-](?:name|raw)["']?\s*[:=]/i;
const RECURSO = { script: ['src'], img: ['src', 'srcset'], source: ['src', 'srcset'], video: ['src', 'poster'], audio: ['src'], iframe: ['src'], embed: ['src'], object: ['data'], use: ['href', 'xlink:href'], image: ['href', 'xlink:href'] };
const REL_QUE_CARGA = /\b(stylesheet|preload|modulepreload|prefetch|preconnect|dns-prefetch|icon|manifest)\b/i;
const EXTERNA = /^(?:https?:)?\/\//i;

function main() {
  const ESTRICTO = process.env.STRICT === '1' || process.argv.includes('--strict');
  const dist = dirDist();
  const cifras = leeJson('src/data/cifras.json');
  const blancaDatos = cadenasDeLosDatos();
  const blanca = [...literalesBlancos().map((l) => new RegExp(escapaRe(l), 'g')), ...BLANCA];
  const esperado = esperados();
  const errores = [];
  const avisos = [];
  const pendientes = new Map();   // clave → páginas
  const sinCopy = new Map();      // clave de copy que falta → páginas
  const exentos = [];             // bloques que alguien declaró exentos: se enseñan siempre
  const familias = new Map();     // procedencia de las claves vistas
  const largas = [];              // descripciones que pasan de 155 caracteres: decisión de copy
  let nDatos = 0, sinTraducir = 0;
  const falla = (rel, msg) => errores.push(`${rel}: ${msg}`);

  // 3 (ter) · la lista de nombres que no pueden llegar al sitio la entrega el exportador, fuera de lo versionado
  const argVetados = process.argv.find((a) => a.startsWith('--vetados='));
  const fVetados = argVetados ? resolve(RAIZ, argVetados.slice(10)) : join(RAIZ, '.cache/nombres_vetados.json');
  let vetados = null, nMax = 0;
  const excepcionesUsadas = [];
  const refs = referencias();
  if (existsSync(fVetados)) {
    const j = JSON.parse(readFileSync(fVetados, 'utf8'));
    // Un nombre es de DOS palabras o más: una sola («rosa», «cruz») vetaría el idioma entero.
    vetados = new Set((Array.isArray(j) ? j : j.nombres ?? []).map((x) => llano(String(x))).filter((x) => x.includes(' ')));
    for (const v of vetados) nMax = Math.max(nMax, v.split(' ').length);
    if (!vetados.size) errores.push(`${relative(RAIZ, fVetados)} no trae ningún nombre: con la lista vacía el control de nombres no ve nada`);
  } else {
    // Sin el padrón (el CI, otra máquina) este control no puede ver. Lo único que lo suple es que el exportador haya
    // pasado SU puerta de nombres sobre los datos, y eso lo acredita el sello. No cubre el copy: por eso se avisa siempre.
    const puertas = existsSync(join(RAIZ, 'src/data/sello.json')) ? Number(leeJson('src/data/sello.json').puertas) : NaN;
    const acreditado = puertas >= 8;
    const msg = `no existe ${relative(RAIZ, fVetados)}: NO se comprueba aquí que ningún nombre de quien figura en los datos llega al sitio. La lista la escribe diaries/scripts/exportar_sitio.py, en local.`
      + (acreditado ? ` El sello acredita ${puertas} puertas del exportador, la de nombres entre ellas: cubre los DATOS, no el copy.` : ` Y el sello no acredita la puerta de nombres del exportador (puertas = ${puertas || '—'}, hacen falta 8).`);
    (ESTRICTO && !acreditado ? errores : avisos).push(msg);
  }

  /** Ningún nombre de la lista en estos textos. Falla SIEMPRE, también en vista previa: no es un pendiente. */
  const sinNombres = (rel, trozos) => {
    if (!vetados) return;
    const vistos = new Set();
    for (const trozo of trozos) {
      for (const [nombre, frase] of nombresEn(trozo, vetados, nMax)) {
        if (vistos.has(nombre)) continue;
        vistos.add(nombre);
        const exc = EXCEPCIONES_DE_NOMBRE.find((e) => llano(e.nombre) === nombre && frase.includes(llano(e.frase)));
        if (exc) excepcionesUsadas.push(`${rel} · «${nombre}» en «${exc.frase}» · ${exc.motivo}`);
        else falla(rel, `aparece «${nombre}» en «…${frase}…»: en divulgación no se nombra a nadie que figure en los datos`);
      }
    }
  };

  // 0 · dist/ entero: con la mitad de las páginas, todo lo demás pasaría igual
  const paginas = paginasHtml(dist);
  if (paginas.length < paginasMinimas()) errores.push(`dist/ tiene ${paginas.length} páginas y el sitio son al menos ${paginasMinimas()}: el build está vacío o a medias`);

  for (const { ruta, rel } of paginas) {
    const html = readFileSync(ruta, 'utf8');
    const doc = analiza(html);

    // 2 · todo <data> con su clave, de una familia conocida; el valor, el del dato; y el texto, el del valor
    for (const d of busca(doc, (n) => n.tag === 'data')) {
      nDatos++;
      const k = d.attrs['data-k'];
      if (!k) { falla(rel, `<data> sin data-k: «${textoDe(d)}»`); continue; }
      const familia = k in cifras ? 'cifras.json' : /^pais\./.test(k) ? 'paises.json' : /^anual\./.test(k) ? 'anual.json' : /^evento\./.test(k) ? 'eventos.json' : /^columna\./.test(k) ? 'columnas.json' : 'de componente';
      familias.set(familia, (familias.get(familia) ?? 0) + 1);
      const e = esperado(k), visto = d.attrs.value ?? '', texto = textoDe(d);
      if (!e) { falla(rel, `<data data-k="${k}">: clave sin procedencia conocida («${texto}»)`); continue; }
      if (e.libre) continue;
      if (e.valida) {
        const motivo = e.valida(visto, texto);
        if (motivo) { falla(rel, `<data data-k="${k}">: ${motivo}`); continue; }
        // Las marcas de un eje de porcentajes son décimas: además, el texto tiene que decir esa décima.
        if (k === 'eje.pct') { const dice = textoDice(Number(visto), 'pct', texto, false); if (dice) falla(rel, `<data data-k="${k}">: ${dice}`); }
        continue;
      }
      const igual = typeof e.v === 'number' ? Number(visto) === e.v : String(visto) === String(e.v);
      if (!igual) { falla(rel, `<data data-k="${k}"> lleva value="${visto}" y el dato es ${e.v}`); continue; }
      const dice = textoDice(e.v, e.t, texto, d.attrs['data-fmt'] === 'letra');
      if (dice) falla(rel, `<data data-k="${k}">: ${dice}`);
    }

    // 4 · pendientes del investigador, textos que el copy aún no trae y textos sin traducir
    for (const m of busca(doc, (n) => n.tag === 'mark' && tieneClase(n, 'pendiente'))) {
      const k = textoDe(m).replace(/[⟦⟧]/g, '');
      if (!pendientes.has(k)) pendientes.set(k, new Set());
      pendientes.get(k).add(rel);
    }
    for (const n of busca(doc, (x) => 'data-todo-copy' in x.attrs)) {
      for (const k of n.attrs['data-todo-copy'].split(/\s+/).filter(Boolean)) {
        if (!sinCopy.has(k)) sinCopy.set(k, new Set());
        sinCopy.get(k).add(rel);
      }
    }
    sinTraducir += busca(doc, (n) => 'data-sin-traducir' in n.attrs).length;

    // 3 (ter) · ningún nombre de la lista en lo que el lector lee u oye
    sinNombres(rel, textosLeidos(doc, refs));

    // 3 · ningún campo speaker_* (atributos, datos incrustados en scripts)
    for (const n of busca(doc, () => true)) {
      for (const [a, v] of Object.entries(n.attrs)) {
        if (RE_SPEAKER.test(a)) falla(rel, `atributo «${a}» en <${n.tag}>: ningún campo speaker_* llega a dist/`);
        else if (RE_SPEAKER_CAMPO.test(v)) falla(rel, `el atributo «${a}» de <${n.tag}> lleva un campo speaker_*`);
      }
      if (n.tag === 'script' && RE_SPEAKER_CAMPO.test(n.hijos[0]?.texto ?? '')) falla(rel, '<script> con un campo speaker_*');
    }

    // 5 · descripción
    const desc = busca(doc, (n) => n.tag === 'meta' && n.attrs.name === 'description')[0]?.attrs.content;
    if (desc !== undefined && [...desc].length > 155) largas.push(`${rel}: la descripción tiene ${[...desc].length} caracteres (máximo 155)`);

    // 6 · recursos de terceros
    for (const n of busca(doc, (x) => x.tag in RECURSO || x.tag === 'link')) {
      const attrs = n.tag === 'link' ? (REL_QUE_CARGA.test(n.attrs.rel ?? '') ? ['href'] : []) : RECURSO[n.tag];
      for (const a of attrs) {
        const externas = (n.attrs[a] ?? '').split(',').map((u) => u.trim().split(/\s+/)[0]).filter((u) => EXTERNA.test(u));
        if (externas.length) falla(rel, `recurso de terceros en <${n.tag} ${a}>: ${externas[0]} (la línea de privacidad dejaría de ser cierta)`);
      }
    }
    for (const s of busca(doc, (n) => n.tag === 'style')) {
      if (/(?:@import|url\()\s*['"]?(?:https?:)?\/\//i.test(s.hijos[0]?.texto ?? '')) falla(rel, '<style> carga un recurso de terceros');
    }

    // 1 · dígitos en el texto visible de <body>: también la cabecera y el pie, que van en TODAS las páginas
    if (!busca(doc, (n) => n.tag === 'main')[0]) { falla(rel, 'la página no tiene <main>'); continue; }
    const main = busca(doc, (n) => n.tag === 'body')[0];
    if (!main) { falla(rel, 'la página no tiene <body>'); continue; }
    for (const e of busca(main, (n) => 'data-audit-exento' in n.attrs)) {
      const motivo = e.attrs['data-audit-exento'].trim();
      if (!motivo) falla(rel, `<${e.tag} data-audit-exento> sin motivo: la exención se declara con su porqué`);
      exentos.push(`${rel} · <${e.tag}> · ${motivo || '—'} · «${textoDe(e).slice(0, 60)}…»`);
    }
    const exento = (n) =>
      'data-k' in n.attrs || 'data-audit-exento' in n.attrs || n.tag === 'code' || n.tag === 'pre' || n.tag === 'time' ||
      (n.tag === 'mark' && tieneClase(n, 'pendiente')) ||
      ((n.tag === 'title' || n.tag === 'desc') && dentroDe(n, (p) => p.tag === 'svg')); // nombre accesible del SVG: como un atributo
    let visible = textoDe(main, exento);
    // Primero las cadenas de los datos, ENTERAS: una cita depositada lleva dentro una URL y un año, y si
    // las formas sueltas pasaran antes la romperían y dejaría de reconocerse.
    for (const { s, re } of blancaDatos) if (visible.includes(s)) visible = visible.replace(re, ' ');
    for (const re of blanca) visible = visible.replace(re, ' ');
    const sueltos = [...visible.matchAll(/\S*\d\S*/g)];
    for (const m of sueltos.slice(0, 6)) {
      const desde = Math.max(0, m.index - 40);
      falla(rel, `número sin procedencia «${m[0]}» en «…${visible.slice(desde, m.index + m[0].length + 25).trim()}…»`);
    }
    if (sueltos.length > 6) falla(rel, `…y ${sueltos.length - 6} números más sin procedencia`);
  }

  // 3 (bis) · el resto de dist/: un JSON, un JS o la cabecera de un CSV con el campo
  const anda = (dir) => {
    for (const f of readdirSync(dir)) {
      const ruta = join(dir, f);
      if (statSync(ruta).isDirectory()) { anda(ruta); continue; }
      const rel = relative(dist, ruta).split(sep).join('/');
      if (/\.(json|js|mjs)$/.test(f) && RE_SPEAKER_CAMPO.test(readFileSync(ruta, 'utf8'))) falla(rel, 'lleva un campo speaker_*');
      if (/\.(csv|tsv|tab)$/.test(f) && RE_SPEAKER.test(readFileSync(ruta, 'utf8').split('\n', 1)[0])) falla(rel, 'la cabecera lleva una columna speaker_*');
      if (f.endsWith('.css') && /(?:@import|url\()\s*['"]?(?:https?:)?\/\//i.test(readFileSync(ruta, 'utf8'))) falla(rel, 'la hoja de estilo carga un recurso de terceros');
      // 3 (ter, bis) · lo que se descarga también se lee: los LÉAME y los datos de las figuras, línea a línea
      if (/\.(txt|csv|tsv|tab|md|json|xml|svg)$/.test(f)) sinNombres(rel, readFileSync(ruta, 'utf8').split('\n'));
    }
  };
  anda(dist);

  // ── informe ──
  console.log(`audit-cifras · ${paginas.length} páginas · ${nDatos} cifras envueltas (${[...familias].map(([f, n]) => `${f}: ${n}`).join(' · ') || 'ninguna'})`);
  if (exentos.length) { console.log(`\nBloques declarados exentos (data-audit-exento), para que alguien los mire:`); exentos.forEach((e) => console.log('  · ' + e)); }
  if (excepcionesUsadas.length) { console.log(`\nCoincidencias con la lista de nombres admitidas como falsos positivos (EXCEPCIONES_DE_NOMBRE), para que alguien las mire:`); excepcionesUsadas.forEach((e) => console.log('  · ' + e)); }
  avisos.forEach((a) => console.log(`\n⚠ ${a}`));
  if (sinTraducir) console.log(`\n⚠ ${sinTraducir} textos prestados del español (data-sin-traducir).`);
  if (sinCopy.size) {
    console.log(`\n${ESTRICTO ? '✗' : '⚠'} Textos que el copy aún no trae (TODO-COPY): el sitio enseña en su lugar un identificador o nada.`);
    for (const [k, pags] of [...sinCopy].sort()) console.log(`  · ${k} — ${pags.size} página${pags.size > 1 ? 's' : ''} (p. ej. ${[...pags][0]})`);
    if (ESTRICTO) errores.push(`${sinCopy.size} textos pendientes del copy (data-todo-copy) bloquean la publicación`);
  }
  if (pendientes.size) {
    console.log(`\n${ESTRICTO ? '✗' : '⚠'} Pendientes del investigador (src/config/enlaces.ts):`);
    for (const [k, pags] of pendientes) console.log(`  · ${k} — ${pags.size} página${pags.size > 1 ? 's' : ''} (p. ej. ${[...pags][0]})`);
    if (ESTRICTO) errores.push(`${pendientes.size} datos pendientes del investigador bloquean la publicación`);
  }
  if (largas.length) {
    console.log(`\n${ESTRICTO ? '✗' : '⚠'} Descripciones demasiado largas (las acorta el copy, no el código):`);
    largas.forEach((l) => console.log('  · ' + l));
    if (ESTRICTO) errores.push(...largas);
  }
  if (ESTRICTO && sinTraducir) errores.push(`${sinTraducir} textos sin traducir bloquean la publicación`);
  if (errores.length) {
    console.error(`\n✗ ${errores.length} problemas:`);
    errores.forEach((e) => console.error('  ✗ ' + e));
    process.exit(1);
  }
  console.log(`\n✓ Ninguna cifra sin procedencia; cada valor y cada texto, los de su dato; ningún campo speaker_*${vetados ? ` ni nombre de la lista (${vetados.size} formas, de 2 a ${nMax} palabras)` : ''}; ningún recurso de terceros.`);
}

// Solo se ejecuta si se le llama a él: check-funding.mjs lo importa por sus utilidades.
if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();
