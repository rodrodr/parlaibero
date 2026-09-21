/**
 * Textos del sitio. Los diccionarios `src/i18n/<lang>.json` se GENERAN desde `docs/0*_COPY_<lang>.md`
 * (`npm run i18n`) y no se editan a mano. Las claves son las del copy aprobado.
 */
import { escapa, resuelve, type Contexto } from './cifras';
import type { Lang } from './idiomas';

const modulos = import.meta.glob<{ default: Record<string, string> }>('../i18n/*.json', { eager: true });
const DIC: Partial<Record<Lang, Record<string, string>>> = {};
for (const [ruta, mod] of Object.entries(modulos)) DIC[ruta.match(/(\w+)\.json$/)![1] as Lang] = mod.default;

const ESTRICTO = process.env.STRICT === '1';
/** Claves pedidas que no existen en la lengua (en vista previa caen al español, marcadas). */
export const sinTraducir = new Set<string>();

function crudo(lang: Lang, clave: string): { texto: string; prestado: boolean } {
  const propio = DIC[lang]?.[clave];
  if (propio !== undefined) return { texto: propio, prestado: false };
  const es = DIC.es?.[clave];
  if (es === undefined) throw new Error(`La clave «${clave}» no existe en el copy (docs/02_COPY_es.md).`);
  sinTraducir.add(`${lang}:${clave}`);
  if (ESTRICTO) throw new Error(`Falta «${clave}» en ${lang}.`);
  return { texto: es, prestado: true };
}

/** Marcas mínimas del copy: **negrita**, *cursiva*, `código`. El texto se escapa ANTES. */
function marcas(s: string): string {
  return s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
}

/**
 * `{{evento.<iso>-<fecha>.que_paso}}` NO es un dato: lo que pasó aquel día es TEXTO del copy, la clave `eventos.<id>`,
 * que cuenta el hecho por cargo, país y fecha y no nombra a nadie (directiva del 2026-09-21; el campo `que_paso` de los
 * datos llevaba nombres propios y ya no se exporta). Se atiende aquí y no en `cifras.ts`: aquel no conoce los
 * diccionarios, e importarlos desde allí cerraría un círculo. Si la clave falta en el copy, `crudo()` para el build.
 */
const RE_QUE_PASO = /^evento\.([a-z]{2}-\d{4}-\d{2}-\d{2})\.que_paso$/;
function quePaso(marcador: string, lang: Lang, ctx: Contexto): string | null {
  // La misma lectura de la clave que hace `resuelve()`: sin `NUEVO:`, sin formato, desescapada y con el evento del contexto.
  const clave = (marcador.split('|')[0] ?? '').trim().replace(/^NUEVO:/, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const id = (ctx.evento ? clave.replace('<iso>-<fecha>', ctx.evento) : clave).match(RE_QUE_PASO)?.[1];
  return id ? t(lang, `eventos.${id}`) : null;
}

function cifras(s: string, lang: Lang, ctx: Contexto): string {
  // `|letra` a principio de frase se escribe con mayúscula inicial. Tras dos puntos NO: la frase sigue
  // («Rejilla de cobertura: dieciséis cámaras…»), y en inglés y portugués tampoco corresponde.
  return s.replace(/\{\{([^{}]+)\}\}/g, (_todo, m: string, pos: number) => {
    let html = quePaso(m, lang, ctx) ?? resuelve(m, lang, ctx);
    const antes = s.slice(0, pos).replace(/(\*\*|<[^>]+>|\s)+$/g, '');
    if (/\|\s*letra/.test(m) && (antes === '' || /[.!?¿¡]$/.test(antes))) html = html.replace(/(>|^)(\p{L})/u, (_x, a, b) => a + b.toUpperCase());
    return html;
  });
}

/** Texto EN LÍNEA de una clave, como HTML. Úsese con `set:html`. */
export function t(lang: Lang, clave: string, ctx: Contexto = {}): string {
  const { texto, prestado } = crudo(lang, clave);
  const html = cifras(marcas(escapa(texto)), lang, ctx).replace(/\n/g, ' ');
  return prestado ? `<span lang="es" data-sin-traducir>${html}</span>` : html;
}

/** Texto plano (para `<title>`, `alt`, `aria-label`, metadatos): sin etiquetas ni corchetes. */
export function plano(lang: Lang, clave: string, ctx: Contexto = {}): string {
  return t(lang, clave, ctx).replace(/<[^>]+>/g, '').replace(/[\[\]]/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
}

/**
 * Rótulo de un botón o enlace: el copy lo escribe entre corchetes, `[Descargar los datos]`.
 * Un rótulo aún sin traducir llega envuelto en su <span data-sin-traducir>: los corchetes se quitan también por dentro,
 * o la pestaña nueva se leería «[Explorador]» en todas las páginas de EN y PT mientras llega su traducción.
 */
export const rotulo = (lang: Lang, clave: string, ctx: Contexto = {}) =>
  t(lang, clave, ctx).replace(/^(\s*<span [^>]*data-sin-traducir>)?\s*\[/, '$1').replace(/\]\s*(<\/span>)?\s*$/, '$1');

/**
 * Texto con enlaces. El copy marca cada enlace entre corchetes; aquí se le da destino POR ORDEN.
 * `tEnlaces('es', 'inicio.empezar.salida1', [recurso('datos/'), url('es','paises/sv'), ENLACES.explorador])`
 */
export function tEnlaces(lang: Lang, clave: string, destinos: string[], ctx: Contexto = {}): string {
  let i = 0;
  return t(lang, clave, ctx).replace(/\[([^\]]+)\]/g, (_todo, etiqueta: string) => {
    const href = destinos[i++];
    // Un corchete sin destino no se queda como texto muerto (así se perdió [Escribirnos] en el pie de todas las
    // páginas sin que ningún control lo viera): en vista previa se marca como pendiente; en publicación, falla.
    if (!href) {
      if (ESTRICTO) throw new Error(`«${clave}» (${lang}): el enlace [${etiqueta}] no tiene destino.`);
      return `<mark class="pendiente">${etiqueta}</mark>`;
    }
    const externo = /^https?:/.test(href);
    return `<a href="${escapa(href)}"${externo ? ' rel="noopener external"' : ''}>${etiqueta}</a>`;
  });
}

/** Parte un texto por líneas en blanco, SALVO dentro de un bloque de código: un fragmento con líneas en blanco es un solo bloque. */
function partesDe(texto: string): string[] {
  const out: string[] = [];
  let buf: string[] = [], enCodigo = false;
  const cierra = () => { if (buf.length) out.push(buf.join('\n')); buf = []; };
  for (const l of texto.split('\n')) {
    if (/^\s*```/.test(l)) {
      if (!enCodigo) cierra();
      buf.push(l.trimStart());
      enCodigo = !enCodigo;
      if (!enCodigo) cierra();
    } else if (!enCodigo && l.trim() === '') cierra();
    else buf.push(l);
  }
  cierra();
  return out;
}

/** Texto EN BLOQUES: párrafos, listas `- ` y bloques de código. Para unidades largas (Metodología, Usar). */
export function tBloques(lang: Lang, clave: string, ctx: Contexto = {}): string {
  const { texto } = crudo(lang, clave);
  return partesDe(texto).map((parte) => {
    const cod = parte.match(/^```(\w*)\n([\s\S]*?)\n```$/);
    if (cod) return `<pre><code class="language-${cod[1] || 'text'}">${escapa(cod[2])}</code></pre>`;
    const lineas = parte.split('\n');
    if (lineas.every((l) => /^\s*[-*] /.test(l)))
      return '<ul>' + lineas.map((l) => `<li>${cifras(marcas(escapa(l.replace(/^\s*[-*] /, ''))), lang, ctx)}</li>`).join('') + '</ul>';
    return `<p>${cifras(marcas(escapa(parte)), lang, ctx).replace(/\n/g, ' ')}</p>`;
  }).join('\n');
}

/** ¿Existe la clave? (para textos opcionales, p. ej. la novedad fechada mientras no tenga fecha). */
export const existe = (clave: string) => DIC.es?.[clave] !== undefined;
/** Todas las claves de una familia, en orden: `claves('metodologia.4.')`. */
export const claves = (prefijo: string) => Object.keys(DIC.es ?? {}).filter((k) => k.startsWith(prefijo)).sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
