import { defineConfig, devices } from '@playwright/test';

/**
 * Las pruebas corren contra `astro preview`, es decir, contra `dist/` tal como se va a publicar:
 * antes hay que compilar (`npm run build && npm test`). La primera vez: `npx playwright install chromium`.
 *
 * El puerto NO es el de `astro dev` (4321): con un servidor de desarrollo abierto, Playwright lo
 * reutilizaría y las pruebas medirían otra cosa (JS de Vite, sin minificar, sin las imágenes optimizadas).
 *
 * `baseURL` incluye la base del despliegue y acaba en barra, así que las pruebas navegan con rutas
 * relativas —`es/`, `pt/paises/`— y ninguna lleva `/parlaibero` escrito a mano.
 */
const PUERTO = Number(process.env.PUERTO_PRUEBAS ?? 4322);
const BASE = (process.env.BASE_PATH ?? '/parlaibero').replace(/\/$/, '');
const RAIZ = `http://localhost:${PUERTO}${BASE}/`;

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: RAIZ, trace: 'retain-on-failure' },
  // `PW_CHANNEL=chrome npm test` usa el Chrome ya instalado en el equipo, sin descargar el Chromium de Playwright.
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], ...(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {}) } }],
  webServer: {
    command: `npm run preview -- --port ${PUERTO}`,
    url: RAIZ,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
