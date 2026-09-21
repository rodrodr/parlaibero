export const LANGS = ['es', 'en', 'pt'] as const;
export type Lang = (typeof LANGS)[number];

/** Configuración regional para Intl: números, porcentajes y fechas se formatean UNA vez, aquí. */
export const LOCALE: Record<Lang, string> = { es: 'es-ES', en: 'en-US', pt: 'pt-BR' };
/** Valor del atributo `lang` y de hreflang. */
export const HTML_LANG: Record<Lang, string> = { es: 'es', en: 'en', pt: 'pt-BR' };
// El nombre completo de cada idioma (hoja de estilo, regla 14) es TEXTO y sale del copy: `comun.idioma.<lang>`.

export const esLang = (x: string | undefined): x is Lang => LANGS.includes(x as Lang);

/** Rutas estáticas para las páginas `[lang]`. */
export const rutasPorIdioma = () => LANGS.map((lang) => ({ params: { lang } }));
