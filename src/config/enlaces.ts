/** Todas las URL externas del sitio viven aquí, y solo aquí. `enlaces.yml` las comprueba cada semana. */
export const ENLACES = {
  coleccion: 'https://dataverse.harvard.edu/dataverse/parlaibero',
  explorador: 'https://rodrodr.github.io/parlaibero-explorer/',
  repositorio: 'https://github.com/rodrodr/parlaibero',
  erratas: 'https://github.com/rodrodr/parlaibero/issues',
  licencia: 'https://creativecommons.org/licenses/by/4.0/',
  aei: 'https://www.aei.gob.es/',
  instituto: 'https://iberoame.usal.es',
  doi: (doi: string) => `https://doi.org/${doi}`,
} as const;

/**
 * Datos que solo puede dar el investigador (anexo C del copy). Mientras valgan `null`, el sitio los
 * pinta como «pendiente» en la vista previa y el build de publicación (STRICT=1) FALLA.
 *
 * El MOTIVO del formulario (duda 5) NO va aquí: es una frase para el lector y se traduce, así que se escribe en el
 * copy, en la clave `comun.fija.formulario.motivo` de las tres lenguas, en lugar de su `{{PENDIENTE: …}}`. Una
 * entrada en esta lista no desbloqueaba nada, porque ningún marcador del copy la nombra.
 */
export const PENDIENTES_DEL_INVESTIGADOR: Record<string, string | null> = {
  contacto: 'rodrodr@usal.es',    // duda 5 · la dio el investigador el 2026-09-21: el correo institucional, para [Escribirnos]
  // duda 3 · opción (a), decidida el 2026-09-21: colección y figuras se citan con su nombre y el año de la edición de datos.
  // Los conjuntos de cada país conservan su propia cita, con sus coautores y su DOI (la pinta la ficha).
  'cita.autoria': 'Rodrigues-Silveira, Rodrigo (2026)',
  'coleccion.cita': 'Rodrigues-Silveira, Rodrigo (2026). ParlaIbero. Harvard Dataverse. https://dataverse.harvard.edu/dataverse/parlaibero',
  // duda 4 · búsqueda rehecha el 2026-09-21 por seis vías (169 recursos, 6 verificados en su fuente): ningún contraejemplo.
  // Informe: docs/04_BUSQUEDA_corpus_equivalentes_2026-09-21.md. La fecha se cambia SOLO rehaciendo la búsqueda.
  fecha_busqueda: '2026-09-21',
  edicion_pagina: '0.1',          // se sube con cada publicación (CHANGELOG.md)
};

/** La vía de contacto como `href`, o `null` si aún no la hay (o no es ni una URL ni un correo). */
export function hrefContacto(): string | null {
  const via = PENDIENTES_DEL_INVESTIGADOR.contacto;
  if (!via) return null;
  return /^https?:/.test(via) ? via : /^[^@\s]+@[^@\s]+$/.test(via) ? `mailto:${via}` : null;
}
