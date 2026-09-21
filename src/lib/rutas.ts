import type { Lang } from './idiomas';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** URL interna con la base del despliegue y barra final. `url('es', 'paises/uy')` → `/parlaibero/es/paises/uy/` */
export function url(lang: Lang, ruta = ''): string {
  const limpia = ruta.replace(/^\/|\/$/g, '');
  const [camino, ancla] = limpia.split('#');
  return `${BASE}/${lang}/${camino ? camino + '/' : ''}${ancla ? '#' + ancla : ''}`;
}

/** Recurso estático de `public/`. `recurso('datos/cobertura.csv')` */
export const recurso = (ruta: string) => `${BASE}/${ruta.replace(/^\//, '')}`;

/** Las seis plantillas. Las rutas son iguales en las tres lenguas: solo cambia el prefijo. */
export const PAGINAS = {
  inicio: '',
  paises: 'paises',
  metodologia: 'metodologia',
  usar: 'usar',
  instituciones: 'instituciones',
  explorador: 'explorador',
} as const;
