/**
 * Resolutor de marcadores `{{clave|formato}}`. NINGUNA cifra del sitio se teclea: todas pasan por aquí,
 * salen de `src/data/` (que escribe `diaries/scripts/exportar_sitio.py`) y se formatean UNA sola vez.
 *
 * Toda cifra se emite como `<data class="cifra" value="…" data-k="clave">texto</data>`, de modo que
 * `scripts/audit-cifras.mjs` puede comprobar sobre `dist/` que no hay ningún número sin procedencia.
 */
import cifrasJson from '../data/cifras.json';
import paisesJson from '../data/paises.json';
import eventosJson from '../data/eventos.json';
import { PENDIENTES_DEL_INVESTIGADOR } from '../config/enlaces';
import { LOCALE, type Lang } from './idiomas';

type Tipo = 'int' | 'pct' | 'year' | 'date' | 'bytes' | 'ratio' | 'seg' | 'text' | 'i18n';
interface Cifra { v: unknown; t: Tipo; clave: string; f: string; d: string; dec?: number; n?: number; den?: number }
export interface Contexto { iso?: string; evento?: string; vars?: Record<string, string | number> }

const CIFRAS = cifrasJson as unknown as Record<string, Cifra>;
export const PAISES = paisesJson as unknown as Pais[];
const EVENTOS = eventosJson as unknown as Evento[];
const ESTRICTO = process.env.STRICT === '1';

export interface Medida { v: number; n: number; den: number }
export interface Pais {
  iso: string; nombre: Record<Lang, string>; camara: string; tipo_camara: string; diario: string; decada_entrada: string;
  inicio: number; fin: number; primera: string; ultima: string; anos_periodo: number; anos_con_sesion: number; huecos: [number, number][];
  sesiones: number; filas: number; sesiones_sin_habla: number; habla: number; vinculados: number; den_efectivo: number;
  no_escano: number; voz_colectiva: number; mediana_palabras: number; disp_session_number: number;
  voz: Record<string, Record<'palabras' | 'turnos' | 'oradoras', Medida>>;
  sexo: { auditado: boolean; cobertura: number | null; fuentes?: string[] };
  // Las limitaciones y la transformación depositadas nombran a personas: no se exportan. Llega cuántas son; el texto se enlaza en Dataverse.
  fuente: Record<Lang, string>; n_limitaciones: number;
  csv_bytes: number; doi: string; url: string; version: string; fecha_version: string;
  autores: string[]; cita: string; licencia: string; licencia_url: string; lenguas: string[];
}
/** Lo que pasó aquel día NO es un dato: es la clave `eventos.<iso>-<fecha>` del copy, sin nombres propios (la resuelve `i18n.ts`). */
export interface Evento { iso: string; date: string; filas: number; id_session: string | null; presente: boolean }

export const pais = (iso: string) => PAISES.find((p) => p.iso === iso);
export const eventosDe = (iso: string) => EVENTOS.filter((e) => e.iso === iso && e.presente);
export const EVENTOS_TODOS = EVENTOS;

/** Marcadores que no se pudieron resolver en este build (los lee check-i18n y los pinta la vista previa). */
export const sinResolver = new Set<string>();

// ── formato ───────────────────────────────────────────────────────────────────────────────
const NBSP = ' ';
const LETRA: Record<Lang, string[]> = {
  es: ['cero', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuna'],
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one'],
  pt: ['zero', 'uma', 'duas', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte', 'vinte e uma'],
};

const entero = (x: number, lang: Lang) => new Intl.NumberFormat(LOCALE[lang], { useGrouping: 'always', maximumFractionDigits: 0 }).format(x);
const decimal = (x: number, lang: Lang, dec: number) =>
  new Intl.NumberFormat(LOCALE[lang], { useGrouping: 'always', minimumFractionDigits: dec, maximumFractionDigits: dec }).format(x);
const porcentaje = (x: number, lang: Lang, dec = 2) => decimal(100 * x, lang, dec) + (lang === 'es' ? NBSP + '%' : '%');
export const fechaLarga = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
/** La unidad de Harvard Dataverse: divide por 1.024 y rotula MB/GB. Es la que el lector ve antes de descargar. */
export function peso(bytes: number, lang: Lang): string {
  const mb = bytes / 1048576;
  return mb >= 1024 ? decimal(mb / 1024, lang, 1) + NBSP + 'GB' : entero(Math.round(mb), lang) + NBSP + 'MB';
}
const rangos = (h: [number, number][]) => h.map(([a, b]) => (a === b ? String(a) : `${a}–${b}`)).join(', ');

function formatea(c: { v: unknown; t: Tipo; dec?: number }, lang: Lang, fmt: string): string {
  const v = c.v as any;
  if (fmt === 'letra' && typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < LETRA[lang].length) return LETRA[lang][v];
  if (fmt === 'fecha_larga') return fechaLarga(String(v), lang);
  if (fmt === 'peso' || c.t === 'bytes') return peso(Number(v), lang);
  switch (c.t) {
    case 'int': return entero(Number(v), lang);
    case 'pct': return porcentaje(Number(v), lang, c.dec ?? 2);
    case 'ratio': return decimal(Number(v), lang, 1);
    // Segundos: el decimal solo si el dato lo trae («3,7 s», «82 s»); un «82,0 s» afirmaría una precisión que nadie midió.
    case 'seg': return (Number.isInteger(Number(v)) ? entero(Number(v), lang) : decimal(Number(v), lang, 1)) + NBSP + 's';
    case 'i18n': return String(v[lang] ?? v.es);
    default: return String(v);
  }
}

// ── por país y por evento ─────────────────────────────────────────────────────────────────
function dePais(p: Pais, campo: string, lang: Lang): { v: unknown; t: Tipo } | null {
  const simple: Record<string, { v: unknown; t: Tipo }> = {
    nombre: { v: p.nombre, t: 'i18n' }, camara: { v: p.camara, t: 'text' }, diario: { v: p.diario, t: 'text' },
    inicio: { v: p.inicio, t: 'year' }, fin: { v: p.fin, t: 'year' },
    sesiones: { v: p.sesiones, t: 'int' }, 'sesiones.P': { v: p.sesiones, t: 'int' }, filas: { v: p.filas, t: 'int' }, 'filas.P': { v: p.filas, t: 'int' },
    'habla.L': { v: p.habla, t: 'int' }, sesiones_sin_habla: { v: p.sesiones_sin_habla, t: 'int' },
    anos_con_sesion: { v: p.anos_con_sesion, t: 'int' }, anos_periodo: { v: p.anos_periodo, t: 'int' },
    bruta: { v: p.vinculados / p.habla, t: 'pct' }, efectiva: { v: p.vinculados / p.den_efectivo, t: 'pct' }, noescano: { v: p.no_escano / p.habla, t: 'pct' },
    'disp.session_number': { v: p.disp_session_number, t: 'pct' }, mediana: { v: p.mediana_palabras, t: 'int' },
    csv: { v: p.csv_bytes, t: 'bytes' }, doi: { v: p.doi, t: 'text' }, version: { v: 'v' + p.version, t: 'text' },
    autores: { v: p.autores.join('; '), t: 'text' }, cita: { v: p.cita, t: 'text' }, licencia: { v: p.licencia, t: 'text' },
    fuente: { v: p.fuente, t: 'i18n' }, n_limitaciones: { v: p.n_limitaciones, t: 'int' },
    huecos_rangos: { v: rangos(p.huecos), t: 'text' },
  };
  if (campo in simple) return simple[campo];
  const m = campo.match(/^palF\.(\d{4}s|primera|ultima)\.(pct|n|den)$/);
  if (m) {
    // «Primera» y «última» década CON DATOS, por orden de calendario: ni el orden de las claves del JSON ni una
    // década sin denominador deciden qué cifra abre o cierra la serie.
    const decs = Object.keys(p.voz).sort().filter((d) => Number.isFinite(p.voz[d]?.palabras?.v) && p.voz[d].palabras.den > 0);
    const dec = m[1] === 'primera' ? decs[0] : m[1] === 'ultima' ? decs[decs.length - 1] : m[1];
    const b = p.voz[dec]?.palabras;
    if (!b) return null;
    return m[2] === 'pct' ? { v: b.v, t: 'pct' } : { v: m[2] === 'n' ? b.n : b.den, t: 'int' };
  }
  return null;
}

function deEvento(id: string, campo: string): { v: unknown; t: Tipo } | null {
  const e = EVENTOS.find((x) => `${x.iso}-${x.date}` === id);
  if (!e) return null;
  const mapa: Record<string, { v: unknown; t: Tipo }> = {
    filas: { v: e.filas, t: 'int' }, fecha: { v: e.date, t: 'date' }, id_session: { v: e.id_session ?? '', t: 'text' },
  };
  return mapa[campo] ?? null;
}

/** Resuelve UN marcador (el contenido entre llaves dobles) y devuelve HTML. */
export function resuelve(marcador: string, lang: Lang, ctx: Contexto = {}): string {
  let [clave, fmt = ''] = marcador.split('|').map((s) => s.trim());
  clave = clave.replace(/^NUEVO:/, '');
  // `t()` escapa el texto ANTES de resolver los marcadores: `<iso>` llega aquí como `&lt;iso&gt;`.
  clave = clave.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  // El evento va PRIMERO: si se sustituye antes `<iso>`, `<iso>-<fecha>` queda a medias y ya no casa.
  if (ctx.evento) clave = clave.replace('<iso>-<fecha>', ctx.evento);
  if (ctx.iso) clave = clave.replace('<iso>', ctx.iso);

  if (ctx.vars && clave in ctx.vars) return String(ctx.vars[clave]);

  let c: { v: unknown; t: Tipo; dec?: number } | null = CIFRAS[clave] ?? null;
  let m: RegExpMatchArray | null;
  if (!c && (m = clave.match(/^pais\.([a-z]{2})\.(.+)$/))) { const p = pais(m[1]); c = p ? dePais(p, m[2], lang) : null; }
  if (!c && (m = clave.match(/^evento\.([a-z]{2}-\d{4}-\d{2}-\d{2})\.(\w+)$/))) c = deEvento(m[1], m[2]);
  // Lo que da el investigador es texto, salvo una FECHA (AAAA-MM-DD): esa lleva su envoltorio auditable, como toda cifra.
  if (!c && PENDIENTES_DEL_INVESTIGADOR[clave]) { const dado = PENDIENTES_DEL_INVESTIGADOR[clave]!; c = { v: dado, t: /^\d{4}-\d{2}-\d{2}$/.test(dado) ? 'date' : 'text' }; }

  if (!c) {
    sinResolver.add(clave);
    if (ESTRICTO) throw new Error(`Marcador sin resolver: {{${marcador}}}. O falta en src/data/ (exportar_sitio.py) o es un dato pendiente del investigador (src/config/enlaces.ts).`);
    return `<mark class="pendiente" title="dato pendiente">⟦${clave}⟧</mark>`;
  }
  const texto = formatea(c, lang, fmt);
  if (c.t === 'text' || c.t === 'i18n') return escapa(texto);
  // Un número escrito en letra («dieciséis») es prosa: conserva el envoltorio auditable, pero `base.css` lo exime de la mono.
  const enLetra = fmt === 'letra' && !/\d/.test(texto) ? ' data-fmt="letra"' : '';
  return `<data class="cifra"${enLetra} value="${escapa(String(typeof c.v === 'object' ? '' : c.v))}" data-k="${escapa(clave)}">${escapa(texto)}</data>`;
}

export const escapa = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Formato suelto para componentes que pintan cifras fuera del copy (ejes, tablas, leyendas). */
export const fmt = {
  entero, porcentaje, peso, fechaLarga, rangos,
  /** Cifra con su envoltorio auditable. */
  dato: (v: number, texto: string, clave: string) => `<data class="cifra" value="${v}" data-k="${escapa(clave)}">${escapa(texto)}</data>`,
};
