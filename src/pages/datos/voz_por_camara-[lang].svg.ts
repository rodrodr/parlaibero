/**
 * La figura de la voz como imagen vectorial: `/datos/voz_por_camara-<lang>.svg`. Se compone en el build
 * (`viz/figuraVoz.ts`) con la geometría y los textos del sitio: no puede desincronizarse de la figura ni del copy.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { LANGS, type Lang } from '../../lib/idiomas';
import { figuraVozSvg } from '../../viz/figuraVoz';

export const getStaticPaths: GetStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params, site }) =>
  new Response(figuraVozSvg(params.lang as Lang, site), { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
