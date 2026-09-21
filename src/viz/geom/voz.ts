/**
 * Geometría de la figura de la voz: pequeños múltiplos, una serie por cámara y una cifra por década.
 * Funciones PURAS y tipadas, sin DOM: el componente solo pinta lo que sale de aquí.
 *
 * Dos decisiones que no son de estilo:
 *  · el eje X es de POSICIONES (las décadas de la unión de todas las cámaras), no de valores: una década sin
 *    datos se queda vacía, nunca a cero, y dos décadas no contiguas no se unen con una línea;
 *  · el eje Y es el MISMO en los dieciséis paneles y en las tres medidas, para que cambiar de medida no
 *    cambie la escala con la que se lee.
 */

export type MedidaVoz = 'palabras' | 'turnos' | 'oradoras';

export interface PuntoEntrada { decada: string; v: number; n: number; den: number }
export interface SerieEntrada { iso: string; puntos: PuntoEntrada[] }

/** Lienzo de UN panel, en unidades de viewBox. El SVG escala entero; los rótulos van fuera, en HTML. */
export interface Lienzo { ancho: number; alto: number; izq: number; der: number; arriba: number; abajo: number }
/**
 * `arriba` y `abajo` no son aire: son los carriles donde cabe un rótulo sobre el punto más alto y bajo un
 * punto pegado a la línea de base. A 136 px de panel (320 px de pantalla) siguen midiendo más que el rótulo.
 */
export const LIENZO: Lienzo = { ancho: 160, alto: 118, izq: 8, der: 8, arriba: 24, abajo: 20 };
/** Caja prudente de un rótulo de valor, en unidades de viewBox, con el panel más estrecho (el rótulo HTML no encoge). */
export const CAJA_ROTULO = { w: 56, h: 15, aire: 4 };
/** Cuánto puede apartarse un rótulo de su punto, en unidades de viewBox, sin dejar de leerse como suyo. */
const APARTE_TOLERABLE = 13;

export interface PuntoGeom extends PuntoEntrada { i: number; x: number; y: number }
/** Dónde va un rótulo respecto de su punto. `izquierda` = acaba en el punto, centrado en altura. */
export type Lado = 'sobre' | 'bajo' | 'izquierda';
/**
 * `x`,`y` son el ANCLA del rótulo, que no siempre es el punto: un rótulo `bajo` nunca se queda a caballo de la
 * línea de base (la taparía con su fondo de papel): baja entero al carril que hay debajo de ella.
 */
export interface RotuloGeom { punto: PuntoGeom; lado: Lado; ancla: 'inicio' | 'fin'; x: number; y: number }
export interface SerieGeom {
  iso: string;
  puntos: PuntoGeom[];
  /** Un tramo por racha de décadas contiguas: `M…L…`. Un punto suelto no genera tramo. */
  ruta: string;
  primera: RotuloGeom | null;
  ultima: RotuloGeom | null;
}
export interface MarcaX { decada: string; ano: number; i: number; x: number }

const r2 = (x: number) => Math.round(x * 100) / 100;

/** Décadas presentes en alguna serie, ordenadas. El eje compartido sale de los datos, no de una lista tecleada. */
export function decadas(series: SerieEntrada[]): string[] {
  return [...new Set(series.flatMap((s) => s.puntos.map((p) => p.decada)))].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

/** Techo del eje Y: el máximo subido al siguiente múltiplo de `paso` (0,649 → 0,7). */
export function maximoRedondeado(valores: number[], paso = 0.1): number {
  // Un valor ausente (null, NaN) no es un cero ni puede dejar el eje sin techo: no cuenta.
  const pasos = Math.ceil(Math.max(0, ...valores.filter((v) => Number.isFinite(v))) / paso - 1e-9);
  // Se redondea el producto: 7 × 0,1 no es 0,7 en coma flotante, y ese techo acaba impreso.
  return r2(Math.max(pasos, 1) * paso);
}

export const escalaX = (i: number, n: number, l: Lienzo = LIENZO) => r2(l.izq + (n > 1 ? (i * (l.ancho - l.izq - l.der)) / (n - 1) : (l.ancho - l.izq - l.der) / 2));
export const escalaY = (v: number, max: number, l: Lienzo = LIENZO) => r2(l.alto - l.abajo - (v / max) * (l.alto - l.arriba - l.abajo));

/** Marcas del eje X: una por década del eje compartido, con el año en que empieza. */
export const marcasX = (decs: string[], l: Lienzo = LIENZO): MarcaX[] =>
  decs.map((decada, i) => ({ decada, ano: parseInt(decada, 10), i, x: escalaX(i, decs.length, l) }));

/** Altura de la polilínea en una abscisa, por interpolación dentro de su tramo; `null` fuera de la serie. */
function alturaEn(x: number, pts: PuntoGeom[]): number | null {
  for (let k = 0; k < pts.length - 1; k++) {
    const a = pts[k], b = pts[k + 1];
    if (x >= a.x && x <= b.x) return a.y + ((b.y - a.y) * (x - a.x)) / (b.x - a.x || 1);
  }
  return null;
}

/** Alturas extremas de la línea bajo la caja de un rótulo que nace en `p` y se extiende hacia `sentido`. */
function extremos(p: PuntoGeom, pts: PuntoGeom[], sentido: 1 | -1): { alta: number; baja: number } {
  const hasta = p.x + sentido * CAJA_ROTULO.w;
  const dentro = (x: number) => (sentido === 1 ? x >= p.x && x <= hasta : x <= p.x && x >= hasta);
  const alturas = [p.y, ...pts.filter((q) => dentro(q.x)).map((q) => q.y)];
  const borde = alturaEn(hasta, pts);
  if (borde !== null) alturas.push(borde);
  // La pantalla crece hacia abajo: la más «alta» es la y menor.
  return { alta: Math.min(...alturas), baja: Math.max(...alturas) };
}

/**
 * Ancla vertical de un rótulo (ver `RotuloGeom`). El rótulo no se queda donde la línea lo cruzaría: `sobre` sube
 * hasta librar el tramo más alto que tiene debajo, y `bajo` baja hasta librar el más bajo; si con eso quedara a
 * caballo de la línea de base, baja entero a su carril.
 */
function anclaY(p: PuntoGeom, pts: PuntoGeom[], lado: Lado, sentido: 1 | -1, l: Lienzo): number {
  const base = l.alto - l.abajo;
  const { h, aire } = CAJA_ROTULO;
  // A la izquierda va centrado en el punto (ahí no pasa la línea), salvo que eso lo siente sobre la línea de base.
  if (lado === 'izquierda') return r2(Math.min(p.y, base - h / 2 - 1.5));
  const { alta, baja } = extremos(p, pts, sentido);
  if (lado === 'sobre') return r2(alta);
  return r2(baja + aire + h + 4 > base ? Math.max(baja, base - 3) : baja);
}

/**
 * Coloca los dos rótulos de una serie sin que la línea los cruce.
 *  · El PRIMERO va a la izquierda del punto si hay dos décadas vacías delante (ahí nunca pasa la línea y no
 *    choca con el último en las series cortas); si no, sobre o bajo el punto.
 *  · El ÚLTIMO acaba en su punto, sobre él o bajo él.
 *  · Entre «sobre» y «bajo» manda el lado contrario al punto vecino, mientras no aleje demasiado el rótulo.
 */
export function colocaRotulos(pts: PuntoGeom[], l: Lienzo = LIENZO): { primera: RotuloGeom | null; ultima: RotuloGeom | null } {
  if (!pts.length) return { primera: null, ultima: null };
  const p0 = pts[0], pf = pts[pts.length - 1];
  const rotulo = (p: PuntoGeom, lado: Lado, ancla: 'inicio' | 'fin', sentido: 1 | -1): RotuloGeom => ({ punto: p, lado, ancla, x: p.x, y: anclaY(p, pts, lado, sentido, l) });
  const elige = (p: PuntoGeom, ancla: 'inicio' | 'fin', sentido: 1 | -1): RotuloGeom => {
    const sobre = rotulo(p, 'sobre', ancla, sentido), bajo = rotulo(p, 'bajo', ancla, sentido);
    // Se prefiere el lado del que NO viene la línea: ahí el rótulo no se confunde con el del punto vecino. Solo se
    // cambia de lado si para librar la línea hubiera que apartarlo demasiado de su punto y el otro lado queda más cerca.
    const vecino = pts[pts.indexOf(p) + sentido];
    const [preferido, otro] = vecino && vecino.y < p.y ? [bajo, sobre] : [sobre, bajo];
    const aparta = (r: RotuloGeom) => Math.abs(r.y - p.y);
    return aparta(preferido) <= APARTE_TOLERABLE || aparta(preferido) <= aparta(otro) ? preferido : otro;
  };
  const primera = p0.i >= 2 ? rotulo(p0, 'izquierda', 'fin', -1) : elige(p0, 'inicio', 1);
  if (pts.length === 1) return { primera, ultima: null };
  return { primera, ultima: elige(pf, 'fin', -1) };
}

/**
 * ¿Hay dato? Una década sin valor o con el denominador a cero NO vale cero: no se dibuja, no se rotula y parte la
 * línea, igual que una década que no existe. La ausencia nunca se pinta como un 0 %.
 */
export const conDato = (p: { v: unknown; den: unknown }): boolean => typeof p.v === 'number' && Number.isFinite(p.v) && typeof p.den === 'number' && p.den > 0;

/** Geometría completa de una serie sobre el eje compartido. */
export function serie(entrada: SerieEntrada, decs: string[], max: number, l: Lienzo = LIENZO): SerieGeom {
  const puntos: PuntoGeom[] = entrada.puntos
    .filter(conDato)
    .map((p) => ({ ...p, i: decs.indexOf(p.decada) }))
    .filter((p) => p.i >= 0)
    .sort((a, b) => a.i - b.i)
    .map((p) => ({ ...p, x: escalaX(p.i, decs.length, l), y: escalaY(p.v, max, l) }));
  let ruta = '';
  puntos.forEach((p, k) => {
    const contigua = k > 0 && puntos[k - 1].i === p.i - 1;
    const sigue = k < puntos.length - 1 && puntos[k + 1].i === p.i + 1;
    if (contigua) ruta += `L${p.x},${p.y}`;
    else if (sigue) ruta += `M${p.x},${p.y}`;
  });
  return { iso: entrada.iso, puntos, ruta, ...colocaRotulos(puntos, l) };
}

/** La década recortada a la ventana de la cámara: los ochenta de Uruguay empiezan en 1985, no en 1980. */
export function ventanaDecada(decada: string, inicio: number, fin: number): [number, number] {
  const d = parseInt(decada, 10);
  return [Math.max(d, inicio), Math.min(d + 9, fin)];
}

/** Posición de un punto como porcentaje del lienzo, para colgar de él un rótulo HTML que no escala con el SVG. */
export const enPorcentaje = (p: { x: number; y: number }, l: Lienzo = LIENZO) => ({ izq: r2((100 * p.x) / l.ancho), arriba: r2((100 * p.y) / l.alto) });
