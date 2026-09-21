/**
 * La figura de la voz como IMAGEN que se lleva alguien: un SVG autónomo, con su título, su salvedad, su cita y la
 * mención de la financiación dentro del propio dibujo (una imagen pegada en un informe pierde la página que la rodeaba).
 *
 *  · MISMA geometría que la figura del sitio (`viz/geom/voz.ts`): mismo eje compartido, mismas décadas, mismos rótulos
 *    de primera y última década, mismo orden fijo de las cámaras. Aquí no se calcula ninguna cifra.
 *  · Solo la medida pública, PALABRAS. Las otras dos están en el CSV que la acompaña.
 *  · Tema claro siempre: es para papel y para diapositivas. Los colores salen de los tokens de `base.css`.
 *  · Todo texto viene del copy aprobado. El texto va con familias genéricas: al rasterizar (PNG) se usan las fuentes
 *    del equipo que compila, como en la tarjeta social. No es idéntica byte a byte entre equipos, y no importa.
 */
import css from '../styles/base.css?raw';
import { PAISES, fmt } from '../lib/cifras';
import { plano } from '../lib/i18n';
import { url } from '../lib/rutas';
import { paginaDe } from '../lib/figuras';
import type { Lang } from '../lib/idiomas';
import { LIENZO, decadas, maximoRedondeado, marcasX, escalaY, serie, type MedidaVoz, type RotuloGeom } from './geom/voz';

const raiz = css.slice(css.indexOf(':root {'), css.indexOf('}', css.indexOf(':root {')));
const token = (nombre: string): string => {
  const m = raiz.match(new RegExp(`--${nombre}:\\s*([^;]+);`));
  if (!m) throw new Error(`figuraVoz: no encuentro el token --${nombre} en src/styles/base.css`);
  return m[1].trim();
};
const C = { bg: token('bg'), ink: token('ink'), ink2: token('ink-2'), mute: token('mute'), dato: token('dato'), sinAuditar: token('dato-sin-auditar') };
const F = { sans: "'Helvetica Neue', Arial, sans-serif", serif: "Georgia, 'Times New Roman', serif", mono: 'Menlo, Consolas, monospace' };

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Parte un texto en líneas por anchura ESTIMADA (no hay DOM que mida): `factor` es la anchura media de un carácter, en em. */
function lineas(texto: string, anchoPx: number, cuerpo: number, factor: number): string[] {
  const tope = Math.max(12, Math.floor(anchoPx / (cuerpo * factor)));
  const out: string[] = [];
  let linea = '';
  for (const palabra of texto.split(/\s+/).filter(Boolean)) {
    if (linea && (linea + ' ' + palabra).length > tope) { out.push(linea); linea = palabra; } else linea = linea ? `${linea} ${palabra}` : palabra;
  }
  if (linea) out.push(linea);
  return out;
}
const parrafo = (ls: string[], x: number, y: number, cuerpo: number, interlinea: number, attrs: string) =>
  ls.map((l, i) => `<text x="${x}" y="${y + i * interlinea}" font-size="${cuerpo}" ${attrs}>${xml(l)}</text>`).join('');

export const ANCHO_FIGURA = 1600;

export function figuraVozSvg(lang: Lang, sitio: URL | undefined): string {
  const MEDIDA: MedidaVoz = 'palabras';
  const entrada = PAISES.map((p) => ({ iso: p.iso, puntos: Object.entries(p.voz).map(([decada, d]) => ({ decada, ...d[MEDIDA] })) }));
  const DECS = decadas(entrada);
  // El techo es el de la figura del sitio (las TRES medidas), para que la imagen y la página se lean con la misma escala.
  const medidas = Object.keys(Object.values(PAISES[0].voz)[0]) as MedidaVoz[];
  const TECHO = maximoRedondeado(PAISES.flatMap((p) => Object.values(p.voz).flatMap((d) => medidas.map((m) => d[m].v))));
  const MARCAS = marcasX(DECS);
  const L = LIENZO;
  const yBase = escalaY(0, TECHO), MITAD = 0.5, yMitad = MITAD < TECHO ? escalaY(MITAD, TECHO) : null;

  // ── retícula: cuatro columnas ──
  const W = ANCHO_FIGURA, M = 72, COLS = 4, HUECO_X = 44, HUECO_Y = 40;
  const pw = (W - 2 * M - (COLS - 1) * HUECO_X) / COLS, k = pw / L.ancho, ph = L.alto * k;
  const NOMBRE = 30, EJE = 28, celdaAlto = NOMBRE + ph + EJE;
  const filasN = Math.ceil(PAISES.length / COLS);

  // ── cabecera ──
  const titulo = lineas(plano(lang, 'fig.voz.titulo'), W - 2 * M, 40, 0.54);
  const bajada = lineas(plano(lang, 'inicio.apertura.figura.titulo'), W - 2 * M, 23, 0.47);
  let y = M + 34;
  let svg = parrafo(titulo, M, y, 40, 46, `font-family="${F.sans}" font-weight="800" fill="${C.ink}" letter-spacing="-0.6"`);
  y += titulo.length * 46 - 6;
  svg += parrafo(bajada, M, y + 8, 23, 31, `font-family="${F.serif}" fill="${C.ink2}"`);
  y += 8 + bajada.length * 31 + 26;
  const y0 = y;

  // ── paneles ──
  const rotulo = (r: RotuloGeom, texto: string): string => {
    const cuerpo = 7.4, aire = 4.2;
    const ancla = r.lado === 'izquierda' || r.ancla === 'fin' ? 'end' : 'start';
    const dx = r.lado === 'izquierda' ? -5.2 : r.ancla === 'fin' ? 3 : -3;
    const yy = r.lado === 'sobre' ? r.y - aire - 1.5 : r.lado === 'bajo' ? r.y + aire + cuerpo : r.y + cuerpo * 0.36;
    // Un halo del color del papel, para que la línea no tache la cifra si pasa por detrás.
    return `<text x="${r.x + dx}" y="${yy}" font-size="${cuerpo}" text-anchor="${ancla}" font-family="${F.mono}" font-weight="600" fill="${C.ink}" stroke="${C.bg}" stroke-width="2.2" paint-order="stroke" stroke-linejoin="round">${xml(texto)}</text>`;
  };
  PAISES.forEach((p, i) => {
    const col = i % COLS, fila = Math.floor(i / COLS);
    const px = M + col * (pw + HUECO_X), py = y0 + fila * (celdaAlto + HUECO_Y);
    const g = serie(entrada[i], DECS, TECHO);
    const auditado = p.sexo.auditado;
    const color = auditado ? C.dato : C.sinAuditar;
    svg += `<text x="${px}" y="${py + 19}" font-size="19" font-family="${F.sans}" font-weight="700" fill="${C.ink}">${xml(p.nombre[lang])}</text>`;
    svg += `<g transform="translate(${px},${py + NOMBRE}) scale(${k})">`;
    if (yMitad !== null) svg += `<line x1="0" x2="${L.ancho}" y1="${yMitad}" y2="${yMitad}" stroke="${C.mute}" stroke-width="0.45" stroke-dasharray="1.5 2.5" />`;
    svg += `<line x1="0" x2="${L.ancho}" y1="${yBase}" y2="${yBase}" stroke="${C.ink}" stroke-width="0.6" />`;
    svg += `<path d="${MARCAS.map((mx) => `M${mx.x},${yBase}v3`).join('')}" stroke="${C.ink}" stroke-width="0.5" fill="none" />`;
    if (g.ruta) svg += `<path d="${g.ruta}" fill="none" stroke="${color}" stroke-width="1.35" stroke-linejoin="round" ${auditado ? 'stroke-linecap="round"' : 'stroke-dasharray="3 2.4"'} />`;
    for (const pt of g.puntos) svg += `<circle cx="${pt.x}" cy="${pt.y}" r="2.6" fill="${auditado ? color : C.bg}" stroke="${auditado ? C.bg : color}" stroke-width="${auditado ? 0.9 : 1.1}" />`;
    if (yMitad !== null && col === 0) svg += `<text x="0" y="${yMitad - 2.4}" font-size="6.4" font-family="${F.mono}" fill="${C.mute}">${xml(fmt.porcentaje(MITAD, lang, 0))}</text>`;
    if (g.primera) svg += rotulo(g.primera, fmt.porcentaje(g.primera.punto.v, lang));
    if (g.ultima) svg += rotulo(g.ultima, fmt.porcentaje(g.ultima.punto.v, lang));
    svg += '</g>';
    const ini = MARCAS[0], fin = MARCAS[MARCAS.length - 1];
    svg += `<text x="${px}" y="${py + NOMBRE + ph + 17}" font-size="13" font-family="${F.mono}" fill="${C.mute}">${ini.ano}</text>`;
    svg += `<text x="${px + pw}" y="${py + NOMBRE + ph + 17}" font-size="13" text-anchor="end" font-family="${F.mono}" fill="${C.mute}">${fin.ano}</text>`;
  });
  y = y0 + filasN * (celdaAlto + HUECO_Y) - HUECO_Y + 44;

  // ── leyenda de los dos trazos ──
  const muestra = (x: number, yy: number, auditado: boolean) => {
    const color = auditado ? C.dato : C.sinAuditar;
    return `<path d="M${x},${yy}h52" stroke="${color}" stroke-width="2.8" fill="none" ${auditado ? '' : 'stroke-dasharray="7 5"'} /><circle cx="${x + 26}" cy="${yy}" r="5.4" fill="${auditado ? color : C.bg}" stroke="${auditado ? C.bg : color}" stroke-width="2" />`;
  };
  const leyA = plano(lang, 'comun.fig.voz.leyenda.auditado'), leyB = plano(lang, 'comun.fig.voz.leyenda.sin_auditar');
  svg += muestra(M, y - 6, true) + `<text x="${M + 64}" y="${y}" font-size="18" font-family="${F.sans}" font-weight="600" fill="${C.ink2}">${xml(leyA)}</text>`;
  const xB = M + 64 + leyA.length * 18 * 0.56 + 48;
  svg += muestra(xB, y - 6, false) + `<text x="${xB + 64}" y="${y}" font-size="18" font-family="${F.sans}" font-weight="600" fill="${C.ink2}">${xml(leyB)}</text>`;
  y += 40;

  // ── salvedad, cita, licencia y financiación ──
  const salvedad = lineas(plano(lang, 'inicio.apertura.figura.salvedad'), W - 2 * M, 19, 0.47);
  svg += parrafo(salvedad, M, y, 19, 27, `font-family="${F.serif}" fill="${C.ink}"`);
  y += salvedad.length * 27 + 16;
  svg += `<line x1="${M}" x2="${W - M}" y1="${y - 14}" y2="${y - 14}" stroke="${C.ink}" stroke-width="1" />`;
  y += 12;

  // La cita es el modelo aprobado; la fecha de consulta es de quien la usa, así que aquí la frase que la lleva no entra.
  const CENTINELA = '§§';
  const paginaFigura = sitio ? new URL(url(lang, paginaDe('voz')), sitio).href : url(lang, paginaDe('voz'));
  const cita = plano(lang, 'instituciones.organismo.citar.modelo', { vars: { 'fig.titulo': plano(lang, 'fig.voz.titulo'), 'fig.url': paginaFigura, 'fig.fecha_consulta': CENTINELA } })
    .replace(new RegExp(`\\s*[^.]*${CENTINELA}[^.]*\\.?\\s*$`), '');
  const pie = [cita, `${plano(lang, 'instituciones.cierre.licencia')} ${plano(lang, 'comun.aei.texto')}`];
  for (const texto of pie) {
    const ls = lineas(texto, W - 2 * M, 15.5, 0.5);
    svg += parrafo(ls, M, y, 15.5, 22, `font-family="${F.sans}" fill="${C.mute}"`);
    y += ls.length * 22 + 8;
  }
  const H = Math.ceil(y + M - 30);

  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${xml(plano(lang, 'comun.alt.voz.corto'))}"><title>${xml(plano(lang, 'fig.voz.titulo'))}</title><rect width="${W}" height="${H}" fill="${C.bg}" />${svg}</svg>\n`;
}
