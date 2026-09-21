import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El sitio vive hoy en una subruta de GitHub Pages. Con dominio propio basta cambiar estas dos
// variables en el despliegue; ningún enlace interno lleva la ruta escrita a mano (src/lib/rutas.ts).
const SITE = process.env.SITE_URL ?? 'https://rodrodr.github.io';
const BASE = process.env.BASE_PATH ?? '/parlaibero';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en', pt: 'pt-BR' } } }),
  ],
});
