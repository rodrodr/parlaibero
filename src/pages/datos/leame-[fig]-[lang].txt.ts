/**
 * LÉAME de los datos de cada figura: `/datos/leame-<figura>-<lang>.txt`, texto plano en UTF-8.
 *
 * Se compone en el build con el LÉAME tipo del copy (§1.9, claves `comun.leame.*`), cuyos huecos `{{fig.*}}`
 * se rellenan con las claves de cada figura (`fig.voz.*`, `fig.cobertura.*`). Aquí no se redacta nada.
 *  · Las cifras las resuelve `resuelve()`, como en todo el sitio; aquí solo se les quita el envoltorio HTML.
 *  · Los nombres de las columnas se LEEN de la cabecera del CSV que acompaña: no pueden desincronizarse.
 *  · Por qué no se usa `plano()`: aplana los saltos de línea —y un LÉAME es una lista de líneas— y quita los
 *    corchetes de «[fecha de su consulta]», que aquí son el hueco que rellena quien cita.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import sello from '../../data/sello.json';
import { resuelve, fmt, type Contexto } from '../../lib/cifras';
import { LANGS, type Lang } from '../../lib/idiomas';
import { url } from '../../lib/rutas';
import { FIGURAS as FIGURAS_DEL_SITIO, paginaDe, type Figura as FiguraDelSitio } from '../../lib/figuras';

/**
 * Cada figura: la familia de sus claves, los archivos que descarga (sin extensión) y la página donde vive, con su
 * ancla. Todo sale de `lib/figuras.ts`, que comparten los componentes y las citas; aquí solo cambia la clave, que es
 * el nombre del LÉAME en la URL: el de su primer archivo (`leame-voz_por_camara-es.txt`).
 */
const FIGURAS = Object.fromEntries(
  (Object.keys(FIGURAS_DEL_SITIO) as FiguraDelSitio[]).map((f) => [FIGURAS_DEL_SITIO[f].archivos[0], { ...FIGURAS_DEL_SITIO[f], pagina: paginaDe(f) }]),
) as Record<string, { familia: string; archivos: readonly string[]; pagina: string }>;
type Figura = string;

const SECCIONES = ['que_mide', 'denominador', 'archivos', 'columnas', 'salvedad', 'fuente', 'licencia', 'citar', 'contacto'] as const;
const ANCHO = 78;

// ── texto crudo de una clave, con la misma caída al español que `t()` ─────────────────────────────
const modulos = import.meta.glob<{ default: Record<string, string> }>('../../i18n/*.json', { eager: true });
const DIC: Partial<Record<Lang, Record<string, string>>> = {};
for (const [ruta, mod] of Object.entries(modulos)) DIC[ruta.match(/(\w+)\.json$/)![1] as Lang] = mod.default;
const ESTRICTO = process.env.STRICT === '1';

const existe = (clave: string) => DIC.es?.[clave] !== undefined;

function crudo(lang: Lang, clave: string): string {
  const propio = DIC[lang]?.[clave];
  const texto = propio ?? DIC.es?.[clave];
  if (texto === undefined) throw new Error(`La clave «${clave}» no existe en el copy (docs/02_COPY_es.md).`);
  if (propio === undefined && ESTRICTO) throw new Error(`Falta «${clave}» en ${lang}.`);
  // El copy separa sus bloques con una línea en negrita («**Huecos rellenos · …**») y copy2i18n.py no corta
  // la unidad ahí: el rótulo se cuela al final de la clave anterior. No es texto para el lector.
  return texto.replace(/\n\s*\n\*\*[^*\n]+\*\*\s*$/, '');
}

const sinHtml = (s: string) =>
  s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');

/** Un texto del copy, línea a línea, con sus marcadores resueltos. Las `vars` entran tal cual: ya son texto plano. */
function resuelveLineas(lang: Lang, texto: string, vars: Record<string, string> = {}): string[] {
  const ctx: Contexto = {};
  return texto
    .replace(/\*\*|`/g, '')
    .split('\n')
    .flatMap((linea) =>
      linea
        .replace(/\{\{([^{}]+)\}\}/g, (_todo, m: string, pos: number) => {
          const nombre = m.split('|')[0].replace(/^\s*NUEVO:/, '').trim();
          const propia = vars[nombre];
          if (propia !== undefined) return propia;
          let resuelto = sinHtml(resuelve(m, lang, ctx));
          // Como en `t()`: un número en letra que abre frase va con mayúscula. Tras dos puntos NO: la salvedad
          // de la voz dice «…difieren de lo depositado: dos sesiones», y ahí la frase sigue.
          const antes = linea.slice(0, pos).trimEnd();
          if (/\|\s*letra/.test(m) && (antes === '' || /[.!?¿¡]$/.test(antes))) resuelto = resuelto.charAt(0).toUpperCase() + resuelto.slice(1);
          return resuelto;
        })
        .split('\n'),
    );
}
const lineas = (lang: Lang, clave: string, vars: Record<string, string> = {}) => resuelveLineas(lang, crudo(lang, clave), vars);

/** Corta por palabras a 78 columnas. Una URL es una sola palabra y nunca se parte; la sangría se conserva. */
function ajusta(linea: string): string[] {
  if (linea.length <= ANCHO) return [linea];
  const sangria = linea.match(/^\s*/)![0];
  const out: string[] = [];
  let actual = '';
  for (const palabra of linea.trim().split(/ +/)) {
    if (actual && (sangria + actual + ' ' + palabra).length > ANCHO) { out.push(sangria + actual); actual = palabra; }
    else actual = actual ? actual + ' ' + palabra : palabra;
  }
  if (actual) out.push(sangria + actual);
  return out;
}

/** Cabecera real de un CSV de `public/datos/`. El build corre desde la raíz del proyecto. */
function cabecera(archivo: string): string[] {
  const csv = readFileSync(join(process.cwd(), 'public', 'datos', `${archivo}.csv`), 'utf8');
  return csv.replace(/^\uFEFF/, '').split(/\r?\n/, 1)[0].split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
}

function leame(fig: Figura, lang: Lang, sitio: URL | undefined): string {
  const figura = FIGURAS[fig];
  if (!figura) throw new Error(`No hay figura «${fig}» en src/lib/figuras.ts.`);
  const { familia, archivos, pagina } = figura;
  const de = (campo: string) => lineas(lang, `${familia}.${campo}`).join('\n');

  // TODO-COPY: el copy promete que «el LÉAME dice qué mide cada columna» (instituciones.organismo.sellleva),
  // pero no trae ese texto. Cuando exista `fig.<figura>.columnas`, se pinta; mientras, van los nombres reales.
  const columnas = existe(`${familia}.columnas`)
    ? de('columnas')
    : archivos.map((a) => `${a}.csv\n  ${cabecera(a).join(', ')}`).join('\n');

  const pagUrl = url(lang, pagina);
  const vars: Record<string, string> = {
    'fig.titulo': de('titulo'),
    'fig.que_mide': de('que_mide'),
    'fig.denominador': de('denominador'),
    'fig.salvedad': de('salvedad'),
    'fig.columnas': columnas,
    'fig.url': sitio ? new URL(pagUrl, sitio).href : pagUrl,
    // La fecha del exportador, no la del reloj: dos builds de los mismos datos dan el mismo archivo.
    'fig.fecha_generacion': fmt.fechaLarga(sello.exportado, lang),
  };

  const bloques: string[][] = [lineas(lang, 'comun.leame.cabecera', vars)];
  for (const s of SECCIONES) {
    let cuerpo: string[];
    if (s === 'archivos') {
      // La plantilla nombra UN archivo y la figura de cobertura descarga dos: las líneas que llevan
      // `{{fig.archivo}}` se repiten, juntas, por cada archivo; las demás (el propio LÉAME) salen una vez.
      const plantilla = crudo(lang, 'comun.leame.archivos').split('\n');
      const deArchivo = (l: string) => l.includes('{{fig.archivo}}');
      cuerpo = [
        ...archivos.flatMap((a) => resuelveLineas(lang, plantilla.filter(deArchivo).join('\n'), { ...vars, 'fig.archivo': a })),
        ...resuelveLineas(lang, plantilla.filter((l) => !deArchivo(l)).join('\n'), vars),
      ];
    } else {
      cuerpo = lineas(lang, `comun.leame.${s}`, vars);
    }
    bloques.push([...lineas(lang, `comun.leame.${s}.titulo`, vars), ...cuerpo]);
  }
  return bloques.map((b) => b.flatMap(ajusta).join('\n')).join('\n\n') + '\n';
}

export const getStaticPaths = (() =>
  Object.keys(FIGURAS).flatMap((fig) => LANGS.map((lang) => ({ params: { fig, lang } })))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params, site }) =>
  new Response(leame(params.fig as Figura, params.lang as Lang, site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
