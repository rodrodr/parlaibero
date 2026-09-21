import { test, expect, type Locator, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';

/**
 * TODO funciona sin JavaScript: el JS del sitio solo añade (nota emergente, teclado, copiar). Se repiten Inicio
 * y Países con el JavaScript desactivado y se comprueba lo que más se juega en ello: que la TABLA de cobertura
 * —la versión accesible de la rejilla— existe, es una tabla de verdad y se puede llegar a ella.
 */
const LANGS = ['es', 'en', 'pt'] as const;
const RUTAS = ['', 'paises/'];
const ISOS = (JSON.parse(readFileSync(new URL('../src/data/paises.json', import.meta.url), 'utf8')) as { iso: string }[]).map((p) => p.iso);

test.use({ javaScriptEnabled: false });

/** La tabla de cobertura se reconoce por su contrato: <caption> y una fila por cámara, enlazada a su ficha. */
async function tablaDeCobertura(page: Page): Promise<Locator | null> {
  const tablas = page.locator('table:has(caption)');
  for (let i = 0; i < (await tablas.count()); i++) {
    const tabla = tablas.nth(i);
    const hrefs = await tabla.locator('a[href*="/paises/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href') ?? ''));
    const enlazadas = new Set(hrefs.map((h) => h.match(/\/paises\/([a-z]{2})\/?(?:[#?]|$)/)?.[1]));
    if (ISOS.every((iso) => enlazadas.has(iso))) return tabla;
  }
  return null;
}

/**
 * Sin JS las pestañas solo pueden ser HTML y CSS: o todo a la vista, o un <details>, un <label> de radio o un
 * ancla `:target`. Si la tabla no se ve de entrada, se prueba cada control de su figura hasta que aparezca.
 */
async function seLlegaA(tabla: Locator): Promise<boolean> {
  if (await tabla.isVisible()) return true;
  const controles = tabla.locator('xpath=ancestor::*[self::figure or self::section][1]').locator('summary, label[for], a[href^="#"]');
  for (let i = 0; i < (await controles.count()); i++) {
    const control = controles.nth(i);
    if (!(await control.isVisible())) continue;
    // Las pestañas son un radio invisible TENDIDO SOBRE su <label>: el clic de una persona cae en el radio y funciona,
    // pero Playwright espera a que el clic llegue al propio <label>, y eso no ocurre nunca (agotaba el tiempo). Si el
    // control es un <label for>, se marca su radio, que es lo que hace de verdad quien pulsa ahí.
    const para = await control.getAttribute('for');
    if (para) await tabla.page().locator(`[id="${para}"]`).check({ force: true });
    else await control.click();
    if (await tabla.isVisible()) return true;
  }
  return false;
}

for (const lang of LANGS) {
  for (const ruta of RUTAS) {
    test(`sin JavaScript · /${lang}/${ruta}`, async ({ page }) => {
      const respuesta = await page.goto(`${lang}/${ruta}`);
      expect(respuesta?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();

      const tabla = await tablaDeCobertura(page);
      expect(tabla, 'hay una tabla con <caption> y todas las cámaras enlazadas a su ficha').not.toBeNull();
      expect(await tabla!.locator('th[scope]').count(), 'las cabeceras de la tabla llevan scope').toBeGreaterThan(0);
      expect(await seLlegaA(tabla!), 'sin JavaScript se puede llegar a ver la tabla').toBe(true);

      // La mención de la AEI tampoco depende del JS.
      await expect(page.locator('[data-aei] img').first()).toHaveAttribute('alt', /\S/);
    });
  }
}
