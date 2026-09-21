/**
 * PUENTE TEMPORAL — bórrese cuando se corrijan los cimientos (basta entonces `{ iso }` y `{ evento }`).
 *
 * `t()` escapa el texto ANTES de resolver los marcadores, así que `{{pais.<iso>.fin}}` llega a `resuelve()` como
 * `pais.&lt;iso&gt;.fin`, y la sustitución de `<iso>` (y la de `<iso>-<fecha>`) nunca casa: la ficha entera saldría
 * como «dato pendiente» y el build estricto fallaría. Aquí esos marcadores se atienden por `ctx.vars`, que
 * `resuelve()` consulta primero, llamando AL MISMO `resuelve()` con la clave ya concreta: mismas cifras, mismo
 * formato, mismo envoltorio auditable. No hay lista de campos que mantener: se atiende cualquier clave de la familia.
 *
 * Cuando el cimiento se corrija, las claves dejarán de llegar escapadas y este puente no hará nada.
 */
import { resuelve, type Contexto } from '../../lib/cifras';
import type { Lang } from '../../lib/idiomas';

const ISO = '&lt;iso&gt;';
const EVENTO = '&lt;iso&gt;-&lt;fecha&gt;';

/** `vars` perezoso: responde solo a las claves que `concreta` reconoce, y las resuelve por la vía normal. */
function puente(lang: Lang, concreta: (clave: string) => string | null): Record<string, string> {
  const valor = (k: string | symbol) => (typeof k === 'string' ? concreta(k) : null);
  return new Proxy({} as Record<string, string>, {
    has: (_o, k) => valor(k) !== null,
    get: (_o, k) => { const clave = valor(k); return clave === null ? undefined : resuelve(clave, lang); },
  });
}

/** Contexto de un país: resuelve todo `pais.<iso>.*`. */
export const ctxPais = (iso: string, lang: Lang): Contexto => ({
  iso,
  vars: puente(lang, (k) => (k.includes(ISO) && !k.includes(EVENTO) ? k.replace(ISO, iso) : null)),
});

/**
 * Contexto de un evento (`<iso>-<fecha>`). Lleva SOLO el evento: `resuelve()` sustituye antes `<iso>`, y con los
 * dos a la vez dejaría `<iso>-<fecha>` a medias. La fecha pierde su `|fecha_larga` por la vía de `vars`: se repone.
 */
export const ctxEvento = (id: string, lang: Lang): Contexto => ({
  evento: id,
  vars: puente(lang, (k) => (k.includes(EVENTO) ? k.replace(EVENTO, id) + (k.endsWith('.fecha') ? '|fecha_larga' : '') : null)),
});
