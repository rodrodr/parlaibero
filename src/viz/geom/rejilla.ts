/**
 * Geometría de la rejilla de cobertura: una fila por cámara, una columna por año. Funciones PURAS, sin DOM.
 *
 * Tres estados de celda, y solo el primero lleva color:
 *  · `sesion`   — hay al menos una sesión ese año; el tono es la clase de sus turnos de habla;
 *  · `hueco`    — año DENTRO de la serie que el repositorio de la cámara no tiene: papel con contorno y rótulo;
 *  · `fuera`    — año anterior al arranque de la serie (o posterior a su fin): no se dibuja nada. La ausencia
 *                 nunca es un color.
 * `sin_sesion` es un año dentro de la serie, sin sesiones y SIN declarar: no debería existir, y por eso se
 * cuenta aparte en vez de confundirse con los otros dos (el componente falla el build si aparece alguno).
 *
 * Cada fila es una tira de `años × 1` unidades que se estira al ancho disponible: por eso todo trazo lleva
 * `vector-effect: non-scaling-stroke` y ningún texto vive dentro del SVG.
 */

export interface AnualEntrada { iso: string; y0: number; ses: number[]; hab: number[] }
export interface PaisEntrada { iso: string; inicio: number; fin: number; huecos: [number, number][] }

export type Estado = 'sesion' | 'hueco' | 'fuera' | 'sin_sesion';
export interface Celda { ano: number; x: number; estado: Estado; ses: number; hab: number; clase: number }
export interface HuecoGeom {
  desde: number; hasta: number; x: number; ancho: number;
  /** ¿Cabe el rótulo del rango DENTRO del contorno? Si no, va en un carril bajo la tira. */
  rotuloDentro: boolean;
}
export interface FilaGeom {
  iso: string;
  celdas: Celda[];
  huecos: HuecoGeom[];
  /** Separadores de papel entre dos celdas llenas contiguas (nunca sobre el vacío: taparían las guías de década). */
  separadores: string;
  /** Carril de los huecos estrechos: dónde se ancla su rótulo conjunto, en % del ancho de la tira. */
  carril: { rangos: [number, number][]; ancla: 'inicio' | 'centro' | 'fin'; pos: number } | null;
  llenas: number;
  sinDeclarar: number[];
}
export interface RejillaGeom {
  desde: number; hasta: number; columnas: number;
  filas: FilaGeom[];
  /** Hasta k − 1 cortes (menos si hay empates); la clase de un valor es cuántos cortes supera. */
  cortes: number[];
  extremos: [number, number];
  llenas: number; total: number;
  /** Años redondos del eje, con la posición del borde izquierdo de su columna en % del ancho: ahí cae también su guía. */
  marcas: { ano: number; pos: number }[];
  /** Guías verticales de década, comunes a todas las filas. */
  guias: string;
}

/** Un hueco tan ancho como este número de columnas lleva su rótulo dentro; a 5,7 px por columna caben nueve caracteres. */
const COLUMNAS_PARA_ROTULO = 9;

const r2 = (x: number) => Math.round(x * 100) / 100;

/**
 * Cortes por cuantiles SIN interpolar: cada corte es un valor observado (rango ⌈q·n⌉), porque se imprime en la
 * leyenda y un lector debe poder encontrarlo en `cobertura_por_ano.csv`. El corte es, por tanto, el MÁXIMO de la
 * clase de abajo. Con valores empatados dos cuantiles pueden coincidir: se funden, y hay una clase menos, en vez de
 * repetir el mismo número en la leyenda. `scripts/og.mjs` calcula los suyos con esta misma regla.
 */
export function cuantiles(valores: number[], k = 5): number[] {
  const orden = [...valores].sort((a, b) => a - b);
  if (!orden.length) return [];
  return [...new Set(Array.from({ length: k - 1 }, (_, j) => orden[Math.max(0, Math.ceil(((j + 1) * orden.length) / k) - 1)]))];
}

/**
 * Clase de un valor: cuántos cortes SUPERA (0 … k − 1). Estricto, porque el corte pertenece a la clase de abajo:
 * con `>=`, el mínimo de una serie de valores empatados se pintaba con el tono más oscuro.
 */
export const clase = (v: number, cortes: number[]) => cortes.reduce((c, corte) => c + (v > corte ? 1 : 0), 0);

const enHueco = (ano: number, huecos: [number, number][]) => huecos.some(([a, b]) => ano >= a && ano <= b);

/** Estado, sesiones y turnos de un año de una cámara. Lo que cae fuera de la ventana de `anual` cuenta como cero. */
function lee(anual: AnualEntrada | undefined, ano: number): { ses: number; hab: number } {
  const i = anual ? ano - anual.y0 : -1;
  return anual && i >= 0 && i < anual.ses.length ? { ses: anual.ses[i] ?? 0, hab: anual.hab[i] ?? 0 } : { ses: 0, hab: 0 };
}

/**
 * La rejilla entera. `paises` fija el ORDEN de las filas (década de entrada y año de inicio): nunca se ordena
 * por valor. Los años de `anual` posteriores a `hasta` se ignoran: la rejilla es la ventana que declara el copy.
 */
export function rejilla(paises: PaisEntrada[], anual: AnualEntrada[], desde: number, hasta: number, k = 5): RejillaGeom {
  const columnas = hasta - desde + 1;
  const anos = Array.from({ length: columnas }, (_, i) => desde + i);
  const porIso = new Map(anual.map((a) => [a.iso, a]));

  // Los cuantiles se calculan sobre las celdas CON sesión de la ventana, todas las cámaras juntas.
  const conSesion = paises.flatMap((p) => anos.map((ano) => lee(porIso.get(p.iso), ano)).filter((c) => c.ses > 0).map((c) => c.hab));
  const cortes = cuantiles(conSesion, k);

  const filas = paises.map((p): FilaGeom => {
    const a = porIso.get(p.iso);
    const celdas = anos.map((ano): Celda => {
      const { ses, hab } = lee(a, ano);
      const estado: Estado = ses > 0 ? 'sesion' : enHueco(ano, p.huecos) ? 'hueco' : ano < p.inicio || ano > p.fin ? 'fuera' : 'sin_sesion';
      return { ano, x: ano - desde, estado, ses, hab, clase: ses > 0 ? clase(hab, cortes) : -1 };
    });
    const huecos = p.huecos
      .map(([h0, h1]) => [Math.max(h0, desde), Math.min(h1, hasta)] as [number, number])
      .filter(([h0, h1]) => h1 >= h0)
      .map(([h0, h1]): HuecoGeom => ({ desde: h0, hasta: h1, x: h0 - desde, ancho: h1 - h0 + 1, rotuloDentro: h1 - h0 + 1 >= COLUMNAS_PARA_ROTULO }));
    const separadores = celdas
      .filter((c, i) => i > 0 && c.estado === 'sesion' && celdas[i - 1].estado === 'sesion')
      .map((c) => `M${c.x},0V1`)
      .join('');
    const estrechos = huecos.filter((h) => !h.rotuloDentro);
    let carril: FilaGeom['carril'] = null;
    if (estrechos.length) {
      const ini = estrechos[0].x, fin = estrechos[estrechos.length - 1].x + estrechos[estrechos.length - 1].ancho;
      const centro = (100 * (ini + fin)) / 2 / columnas;
      // Cerca de un borde, el rótulo centrado se saldría de la tira: se ancla al borde del hueco.
      carril = centro < 25 ? { rangos: estrechos.map((h) => [h.desde, h.hasta]), ancla: 'inicio', pos: r2((100 * ini) / columnas) }
        : centro > 75 ? { rangos: estrechos.map((h) => [h.desde, h.hasta]), ancla: 'fin', pos: r2((100 * fin) / columnas) }
        : { rangos: estrechos.map((h) => [h.desde, h.hasta]), ancla: 'centro', pos: r2(centro) };
    }
    return {
      iso: p.iso, celdas, huecos, separadores, carril,
      llenas: celdas.filter((c) => c.estado === 'sesion').length,
      sinDeclarar: celdas.filter((c) => c.estado === 'sin_sesion').map((c) => c.ano),
    };
  });

  const redondos = anos.filter((ano) => ano % 10 === 0);
  return {
    desde, hasta, columnas, filas, cortes,
    extremos: conSesion.length ? [Math.min(...conSesion), Math.max(...conSesion)] : [0, 0],
    llenas: filas.reduce((s, f) => s + f.llenas, 0),
    total: filas.length * columnas,
    marcas: redondos.map((ano) => ({ ano, pos: r2((100 * (ano - desde)) / columnas) })),
    guias: redondos.map((ano) => `M${ano - desde},0V1`).join(''),
  };
}

/** Posición y ancho de un tramo de columnas, en % del ancho de la tira (para los rótulos HTML superpuestos). */
export const tramo = (x: number, ancho: number, columnas: number) => ({ izq: r2((100 * x) / columnas), ancho: r2((100 * ancho) / columnas) });
