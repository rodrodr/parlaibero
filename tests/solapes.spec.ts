import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

/**
 * Ningún bloque pegajoso (`position: sticky`) monta sobre otro texto al desplazarse.
 *
 * Existe porque pasó (2026-09-21, «Para parlamentos y organismos»): un bloque de la columna del organismo acompañaba
 * la lectura con `sticky` dentro de una subrejilla, y al bajar se quedaba encima de los dos bloques siguientes. Ninguna
 * puerta lo veía: en reposo, con `scrollY = 0`, la página estaba bien. Por eso aquí se RECORRE la página.
 *
 * Se prueba en los dos anchos donde el sitio va a dos columnas (justo por encima del corte y en escritorio).
 */
const paises = JSON.parse(readFileSync(new URL('../src/data/paises.json', import.meta.url), 'utf8')) as { iso: string }[];
const RUTAS = ['', 'paises/', `paises/${paises[0].iso}/`, 'metodologia/', 'usar/', 'instituciones/', 'explorador/'];
const ANCHOS = [{ width: 1000, height: 700 }, { width: 1366, height: 768 }];

for (const viewport of ANCHOS) {
  for (const ruta of RUTAS) {
    test(`sin solapes al desplazarse · /es/${ruta} · ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(`es/${ruta}`);
      await page.evaluate(() => document.fonts.ready);
      // Control positivo: `CONTROL_SOLAPE=1 npm test -- solapes` reintroduce el defecto (un bloque pegajoso en la columna
      // del organismo) y la prueba de «instituciones» TIENE que fallar. Un control que nunca se ha visto fallar no vigila nada.
      if (process.env.CONTROL_SOLAPE) await page.addStyleTag({ content: '.camino:last-of-type .resto .bloque:first-child { position: sticky; top: 1.5rem; }' });

      const solapes = await page.evaluate(async () => {
        // Pegajosos en VERTICAL (los que llevan `top`): las celdas de tabla fijadas a la izquierda no cuentan.
        const pegajosos = [...document.querySelectorAll<HTMLElement>('main *')].filter((e) => {
          const s = getComputedStyle(e);
          return s.position === 'sticky' && s.top !== 'auto' && !/^(TH|TD)$/.test(e.tagName);
        });
        if (!pegajosos.length) return [];
        // Lo que va FIJO a la ventana (la banda de Metodología) no cuenta: todo el contenido pasa por debajo de ella al
        // desplazarse, también el índice mientras aún no se ha pegado. Eso no es un solape entre bloques.
        const fijo = (e: Element | null): boolean => !!e && e !== document.body && (getComputedStyle(e).position === 'fixed' || fijo(e.parentElement));
        const textos = [...document.querySelectorAll<HTMLElement>('main :is(h2, h3, h4, p, li, figure, table, pre, dt, dd)')].filter((e) => !fijo(e));
        const hallados = new Set<string>();
        const alto = document.documentElement.scrollHeight;
        for (let y = 0; y < alto; y += 250) {
          // `instant`: el sitio desplaza con suavidad (`scroll-behavior: smooth`) y, animado, un fotograma después la página apenas se ha movido.
          window.scrollTo({ top: y, behavior: 'instant' });
          await new Promise((r) => requestAnimationFrame(() => r(null)));
          for (const p of pegajosos) {
            const a = p.getBoundingClientRect();
            if (a.bottom <= 0 || a.top >= innerHeight || a.width === 0) continue;
            for (const o of textos) {
              if (p.contains(o) || o.contains(p)) continue;
              const b = o.getBoundingClientRect();
              if (b.width === 0 || b.height === 0) continue;
              // Solo cuenta lo que se VE: la intersección, recortada a la ventana (la banda fija de Metodología espera
              // fuera de la pantalla hasta que se baja, y ahí no monta sobre nada).
              const ancho = Math.min(a.right, b.right, innerWidth) - Math.max(a.left, b.left, 0);
              const altura = Math.min(a.bottom, b.bottom, innerHeight) - Math.max(a.top, b.top, 0);
              if (ancho > 4 && altura > 4 && getComputedStyle(o).visibility !== 'hidden') {
                hallados.add(`«${(p.textContent ?? '').trim().slice(0, 40)}» monta sobre «${(o.textContent ?? '').trim().slice(0, 40)}» (scrollY=${y})`);
              }
            }
          }
        }
        return [...hallados].slice(0, 5);
      });
      expect(solapes, 'ningún bloque pegajoso encima de otro texto').toEqual([]);
    });
  }
}
