/**
 * Maquetación de los textos grandes de Inicio, sin tocar una letra del copy: aquí solo se envuelve en <span>
 * lo que `t()` ya ha resuelto, para que el CSS pueda apilarlo o impedir que se parta.
 *  · `frases`: la tesis, su remate y los dos titulares que lo repiten son frases cortas y secas («Tres años de
 *    trabajo. Una descarga.»), y el golpe está en que cada una ocupe su línea.
 *  · `piezas`: la línea-credencial, que salta entre datos y nunca por dentro de uno.
 */

// `t()` envuelve en un <span> de aviso lo que aún no está traducido; hay que devolvérselo a cada frase
// o el HTML quedaría mal anidado.
const SIN_TRADUCIR = /^<span lang="es" data-sin-traducir>([\s\S]*)<\/span>$/;

function trocea(html: string, corte: RegExp, clase: string, junta: string): string {
  const m = html.match(SIN_TRADUCIR);
  const envuelve = (s: string) => (m ? `<span lang="es" data-sin-traducir>${s}</span>` : s);
  return (m ? m[1] : html).split(corte).map((f) => `<span class="${clase}">${envuelve(f)}</span>`).join(junta);
}

/** Una frase por <span class="frase">. Corta tras el punto y ante texto: nunca dentro de una etiqueta. */
export const frases = (html: string) => trocea(html, /(?<=[.?!…])\s+(?=[^\s<])/, 'frase', ' ');

/**
 * Las piezas de una línea de datos separada por « · » (la credencial), cada una en un <span class="pieza"> que
 * no se parte: en el móvil la línea salta ENTRE piezas, y «CC BY 4.0» no queda nunca a caballo de dos renglones.
 */
export const piezas = (html: string) => trocea(html, / · /, 'pieza', ' · ');
