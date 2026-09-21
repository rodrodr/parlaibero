/**
 * La misma figura, rasterizada: `/datos/voz_por_camara-<lang>.png`, a 2.400 px de ancho (para un informe o una
 * diapositiva). Sale del MISMO SVG que el archivo vectorial; el texto se pinta con las fuentes del equipo que compila.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { LANGS, type Lang } from '../../lib/idiomas';
import { figuraVozSvg, ANCHO_FIGURA } from '../../viz/figuraVoz';

const ANCHO_PNG = 2400;

export const getStaticPaths: GetStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = async ({ params, site }) => {
  const svg = figuraVozSvg(params.lang as Lang, site);
  const png = await sharp(Buffer.from(svg), { density: (72 * ANCHO_PNG) / ANCHO_FIGURA }).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
