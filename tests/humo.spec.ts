import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

/**
 * Humo: las seis plantillas —y una ficha, que es la séptima ruta y la que más datos mueve— en las tres lenguas.
 * Cada página responde, tiene UN solo h1, no deja errores en la consola y cabe en 360 px de ancho.
 */
const LANGS = ['es', 'en', 'pt'] as const;
const HTML_LANG = { es: 'es', en: 'en', pt: 'pt-BR' } as const;
const paises = JSON.parse(readFileSync(new URL('../src/data/paises.json', import.meta.url), 'utf8')) as { iso: string }[];
// La ficha de prueba es la primera de los datos: si cambia el orden, sigue habiendo una.
const RUTAS = ['', 'paises/', `paises/${paises[0].iso}/`, 'metodologia/', 'usar/', 'instituciones/', 'explorador/'];

test.use({ viewport: { width: 360, height: 740 } });

for (const lang of LANGS) {
  for (const ruta of RUTAS) {
    test(`humo · /${lang}/${ruta}`, async ({ page }) => {
      const errores: string[] = [];
      page.on('console', (m) => { if (m.type() === 'error') errores.push(m.text()); });
      page.on('pageerror', (e) => errores.push(String(e)));

      const respuesta = await page.goto(`${lang}/${ruta}`);
      expect(respuesta?.status(), 'la página responde').toBe(200);
      await page.evaluate(() => document.fonts.ready);

      await expect(page.locator('html')).toHaveAttribute('lang', HTML_LANG[lang]);
      await expect(page.locator('h1'), 'un solo h1 por página').toHaveCount(1);
      await expect(page.locator('main')).toHaveCount(1);

      // Sin scroll horizontal de PÁGINA. `body` recorta el desbordamiento (overflow-x: clip), así que además
      // de medir el documento se busca lo que quedaría cortado: cualquier cosa que asome por la derecha sin
      // estar dentro de un contenedor con su propio scroll (una tabla ancha, un bloque de código).
      const ancho = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const contenido = (e: Element) => {
          for (let p = e.parentElement; p && p !== document.body; p = p.parentElement) {
            if (/(auto|scroll|hidden|clip)/.test(getComputedStyle(p).overflowX)) return true;
          }
          return false;
        };
        const fuera = [...document.body.querySelectorAll('*')]
          .filter((e) => !e.closest('svg') || e.tagName.toLowerCase() === 'svg')
          .filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.right > vw + 1; })
          .filter((e) => !contenido(e))
          .slice(0, 5)
          .map((e) => `<${e.tagName.toLowerCase()} class="${e.getAttribute('class') ?? ''}"> llega a ${Math.round(e.getBoundingClientRect().right)} px`);
        return { documento: document.documentElement.scrollWidth, vw, fuera };
      });
      expect(ancho.documento, 'el documento no es más ancho que la pantalla').toBeLessThanOrEqual(ancho.vw);
      expect(ancho.fuera, 'nada asoma por la derecha a 360 px').toEqual([]);

      expect(errores, 'sin errores en la consola').toEqual([]);
    });
  }
}
