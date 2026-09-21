/**
 * Remates de un HTML con enlaces (el que devuelve `tEnlaces`), iguales en todas las páginas:
 *  · el explorador abre SIEMPRE en otra pestaña, y lo dice. La frase que lo dice (`comun.enlace.explorador`) vive
 *    UNA vez por página, oculta, en el pie de `Base.astro`; cada enlace la señala con `aria-describedby`;
 *  · un enlace que todavía no tiene destino NO se pinta como enlace muerto: en la vista previa queda marcado como
 *    pendiente, para que se vea lo que falta, y en publicación (STRICT=1) el build FALLA. Solo se suprime en
 *    silencio lo que el copy declara opcional (los dos primeros botones del apartado 10 de Metodología).
 */
import { escapa } from './cifras';
import { ENLACES } from '../config/enlaces';

const ESTRICTO = process.env.STRICT === '1';

/** Destino provisional de un corchete del copy que aún no tiene URL. */
export const SIN_DESTINO = '#sin-destino';
/** id de la nota «Se abre el explorador, en otra pestaña.» que pinta `Base.astro`. */
export const ID_NOTA_EXPLORADOR = 'nota-explorador';

const escapaRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Solo los enlaces que aún no llevan `target`: pasar dos veces por aquí no duplica atributos.
const AL_EXPLORADOR = new RegExp(`<a\\b(?![^>]*\\btarget=)([^>]*?)href="${escapaRe(escapa(ENLACES.explorador))}"`, 'g');

export const enOtraPestana = (html: string) =>
  html.replace(AL_EXPLORADOR, (_todo, antes: string) => `<a${antes}href="${escapa(ENLACES.explorador)}" target="_blank" aria-describedby="${ID_NOTA_EXPLORADOR}"`);

export function sinDestino(html: string, opcional = false): string {
  return html.replace(/\s*<a [^>]*href="#sin-destino"[^>]*>([^<]*)<\/a>/g, (_todo, etiqueta: string) => {
    if (!ESTRICTO) return ` <mark class="pendiente">${etiqueta}</mark>`;
    if (opcional) return '';
    throw new Error(`El enlace «${etiqueta}» no tiene destino y el copy lo exige: no se publica sin él.`);
  });
}

export const remata = (html: string, opcional = false) => sinDestino(enOtraPestana(html), opcional);
