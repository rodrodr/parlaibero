/**
 * Las dos figuras con datos descargables: dónde viven y con qué ancla. UNA sola fuente para el `id` con que cada
 * componente monta su figura, la URL que imprime su LÉAME y la cita de la figura en «Usar» e «Instituciones»:
 * si cada uno escribiera la suya, la cita y el LÉAME acabarían dando direcciones distintas.
 */
import { PAGINAS } from './rutas';

export const FIGURAS = {
  voz: { ancla: 'voz', ruta: PAGINAS.inicio, familia: 'fig.voz', archivos: ['voz_por_camara'] },
  cobertura: { ancla: 'rejilla', ruta: PAGINAS.paises, familia: 'fig.cobertura', archivos: ['cobertura', 'cobertura_por_ano'] },
} as const;
export type Figura = keyof typeof FIGURAS;

/** Ruta de la página de una figura, con su ancla: lista para `url(lang, …)`. */
export const paginaDe = (f: Figura) => `${FIGURAS[f].ruta}#${FIGURAS[f].ancla}`;
