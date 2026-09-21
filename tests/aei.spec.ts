import { test, expect } from '@playwright/test';

/**
 * OBLIGACIÓN LEGAL (guía de la AEI del 5-feb-2026, §3): en la página de inicio, la mención de la ayuda —texto
 * Y logotipos— va en el PRIMER PANTALLAZO, sin scroll; y ningún otro logotipo puede ser mayor que la banda.
 * `scripts/check-funding.mjs` comprueba sobre el HTML que la franja existe y va antes de <main>; que de verdad
 * QUEPA en pantalla solo se puede medir con un navegador. Se mide en los cinco tamaños del plan, las tres
 * lenguas y los dos temas.
 */
const REFERENCIA = 'PID2022-141706NB-C22';
const LANGS = ['es', 'en', 'pt'] as const;
const PANTALLAS = [
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
];
const TEMAS = ['light', 'dark'] as const;

for (const lang of LANGS) {
  for (const pantalla of PANTALLAS) {
    for (const tema of TEMAS) {
      test(`AEI en el primer pantallazo · ${lang} · ${pantalla.width}×${pantalla.height} · ${tema}`, async ({ page }) => {
        await page.setViewportSize(pantalla);
        await page.emulateMedia({ colorScheme: tema });
        await page.goto(`${lang}/`);
        await page.evaluate(() => document.fonts.ready);

        expect(await page.evaluate(() => window.scrollY), 'la medida se toma sin haber hecho scroll').toBe(0);

        const franja = page.locator('[data-aei="franja"]');
        await expect(franja, 'una sola franja en la página de inicio').toHaveCount(1);
        await expect(franja).toBeVisible();
        await expect(franja, 'la referencia va junto a los logotipos').toContainText(REFERENCIA);

        // El bloque ENTERO —texto y banda— dentro del primer pantallazo.
        const caja = await franja.boundingBox();
        expect(caja).not.toBeNull();
        expect(caja!.y, 'la franja empieza dentro de la pantalla').toBeGreaterThanOrEqual(0);
        expect(caja!.y + caja!.height, 'la franja acaba dentro de la pantalla').toBeLessThanOrEqual(pantalla.height);
        expect(caja!.x).toBeGreaterThanOrEqual(0);
        expect(caja!.x + caja!.width, 'la franja no se sale por la derecha').toBeLessThanOrEqual(pantalla.width);

        // La banda está cargada, entera y a la vista: un <img> roto también cabría en pantalla.
        const banda = franja.locator('img');
        await expect(banda).toHaveCount(1);
        await expect(banda).toHaveAttribute('alt', /\S/);
        expect(await banda.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0), 'la banda se ha cargado').toBe(true);
        const cajaBanda = await banda.boundingBox();
        expect(cajaBanda!.y + cajaBanda!.height).toBeLessThanOrEqual(pantalla.height);
        expect(cajaBanda!.x + cajaBanda!.width).toBeLessThanOrEqual(pantalla.width);
        // …y sin deformar: es el fichero oficial, que no se recorta ni se estira.
        const proporcion = await banda.evaluate((img: HTMLImageElement) => (img.naturalWidth / img.naturalHeight) / (img.clientWidth / img.clientHeight));
        expect(Math.abs(proporcion - 1), 'la banda conserva su proporción').toBeLessThan(0.03);

        // La banda no se recolorea ni se invierte: en tema oscuro va sobre placa clara.
        const luminancia = await banda.evaluate((img) => {
          for (let n: Element | null = img.parentElement; n; n = n.parentElement) {
            const m = getComputedStyle(n).backgroundColor.match(/[\d.]+/g)?.map(Number);
            if (!m || (m.length === 4 && m[3] === 0)) continue;
            const [r, g, b] = m.map((c) => { const x = c / 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
          }
          return 1; // sin fondo propio: el papel del navegador
        });
        expect(luminancia, 'la banda va sobre fondo claro').toBeGreaterThan(0.7);

        // Ningún otro logotipo de la página es más alto que la banda (la menor de las que haya).
        const alturas = await page.evaluate(() => {
          const alto = (e: Element) => e.getBoundingClientRect().height;
          const bandas = [...document.querySelectorAll('[data-aei] img')].map(alto).filter((h) => h > 0);
          const otros = [...document.querySelectorAll('header img, header svg, footer img, footer svg, img[src*="logo" i], img[class*="logo" i], img[alt*="logo" i], [class*="logo" i] svg')]
            .filter((e) => !e.closest('[data-aei]'))
            .map((e) => ({ que: (e.getAttribute('alt') ?? e.getAttribute('class') ?? e.tagName).slice(0, 60), alto: alto(e) }))
            .filter((o) => o.alto > 0);
          return { banda: Math.min(...bandas), otros };
        });
        for (const otro of alturas.otros) {
          expect(otro.alto, `«${otro.que}» no puede ser más alto que la banda de la AEI`).toBeLessThanOrEqual(alturas.banda + 0.5);
        }
      });
    }
  }
}
