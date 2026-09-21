# ParlaIbero · sitio de presentación

La página que presenta **ParlaIbero**: lo que se dijo en el pleno de las cámaras bajas o únicas de América Latina,
España y Portugal, turno por turno, con un conjunto de datos y un DOI por país en
[Harvard Dataverse](https://dataverse.harvard.edu/dataverse/parlaibero) y un
[explorador](https://rodrodr.github.io/parlaibero-explorer/) que funciona en el navegador.

El sitio **no mide nada**. Proyecta cifras que ya están medidas en el proyecto `diaries` y las pinta con su
procedencia. Es estático (Astro, TypeScript estricto, sin framework de cliente), trilingüe (`/es/`, `/en/`, `/pt/`)
y se publica en GitHub Pages bajo la base `/parlaibero`.

## Tres reglas que explican casi todo el código

1. **Ningún texto para el lector se escribe en el código.** Todos salen del copy aprobado (`docs/02_COPY_es.md` y sus
   traducciones) por su clave, con `t()`, `tEnlaces()`, `tBloques()`, `rotulo()` y `plano()` de `src/lib/i18n.ts`.
2. **Ningún número se teclea.** El copy lleva marcadores `{{clave|formato}}`; `src/lib/cifras.ts` los resuelve contra
   `src/data/` y emite cada cifra como `<data class="cifra" data-k="clave">`. Las que pinta una figura o una tabla
   se envuelven con `fmt.dato()`. `scripts/audit-cifras.mjs` recorre `dist/` y falla si encuentra un dígito sin ese
   envoltorio.
3. **En el sitio no aparece el nombre de nadie que figure en los datos** —ni parlamentarios ni jefes de Estado—, y
   ningún campo `speaker_*` llega a `dist/` (directiva del investigador, 2026-09-21). Los hechos se cuentan por cargo,
   país y fecha (claves `eventos.*` del copy). Los textos depositados que nombran a personas —limitaciones e informe
   del proceso— **no se reproducen: se enlazan** en Harvard Dataverse, con el aviso del formulario encima. Quedan
   exentas la autoría y las citas de los conjuntos (los investigadores) y las referencias bibliográficas. La
   identificación completa queda a un clic, en el conjunto de Dataverse.

Los enlaces internos se hacen con `url(lang, ruta)` y `recurso()` (`src/lib/rutas.ts`); los externos viven todos en
`src/config/enlaces.ts`.

## Cómo se actualizan los DATOS

`src/data/*.json` y `public/datos/*.{csv,xlsx}` los escribe un exportador que vive en el proyecto `diaries`. **No se
editan a mano**: se regeneran.

```bash
cd ../diaries
python3 scripts/exportar_sitio.py --sitio ../parlaibero_site
```

El exportador no mide: proyecta y une archivos vigentes, y tiene sus propias puertas (DOI que no coinciden, cifra sin
fuente, suma de los países distinta del total, cualquier campo `speaker_*` a la salida, cualquier nombre del padrón en
un texto). Deja su sello en `src/data/sello.json` y, **solo en local**, la lista de nombres de los dieciséis padrones en
`.cache/nombres_vetados.json`, que `audit-cifras` usa y que ni se versiona ni se publica. Después, en este repositorio:

```bash
node scripts/og.mjs     # las imágenes sociales llevan la rejilla: se rehacen con los datos
git diff src/data       # lo que ha cambiado, a la vista antes de publicarlo
```

## Cómo se actualizan los TEXTOS

La fuente editable es el Markdown del copy; los diccionarios `src/i18n/*.json` son **generados**.

| lengua | fuente | diccionario |
|---|---|---|
| español | `docs/02_COPY_es.md` | `src/i18n/es.json` |
| inglés | `docs/03_COPY_en.md` | `src/i18n/en.json` |
| portugués | `docs/03_COPY_pt.md` | `src/i18n/pt.json` |

```bash
npm run i18n      # regenera los tres diccionarios desde el copy
npm run check     # tipos + puerta de los diccionarios
```

El español está **congelado** desde que se aprobó: solo se toca por una errata o por una decisión del investigador,
y cada cambio se propaga a las otras dos lenguas. `scripts/check-i18n.mjs` falla si las claves de las tres lenguas
difieren, si hay un valor vacío, si una traducción pierde o cambia un marcador, si un texto lleva un número tecleado
o si aparece una palabra vetada. Mientras una lengua no tenga diccionario, el sitio la pinta con el texto español,
marcado, y la puerta solo avisa; con `--strict` falla.

## Previsualizar

```bash
npm install
npm run dev                  # http://localhost:4321/parlaibero/
```

En la vista previa, lo que falta **se ve**: un dato pendiente del investigador sale como una etiqueta amarilla
`⟦clave⟧`, y un texto sin traducir, con contorno discontinuo. No se oculta nada a propósito.

## Verificar antes de publicar

```bash
npm run check                          # astro check + check-i18n
node scripts/check-i18n.mjs --strict   # las tres lenguas, completas
node scripts/og.mjs                    # public/og-{es,en,pt}.png
STRICT=1 npm run build                 # build de PUBLICACIÓN: falla con cualquier pendiente
npm run audit                          # audit-cifras + check-funding, sobre dist/
npx playwright install chromium        # solo la primera vez
PW_CHANNEL=chrome npm test             # o, sin descargar nada: con el Chrome ya instalado en el equipo
                                       # si dice «webServer exited early», repita: `astro preview` se fue a segundo plano y ya
                                       # está arriba; al acabar, `npx astro preview stop`
npm test                               # Playwright contra `astro preview` (necesita dist/)
```

| puerta | qué vigila |
|---|---|
| `scripts/check-i18n.mjs` | claves, marcadores, números tecleados y palabras vetadas en los diccionarios |
| `scripts/audit-cifras.mjs` | sobre `dist/`: cifras sin procedencia, `<data>` sin `data-k` o con un valor que no es el del dato, campos `speaker_*`, **nombres de quien figura en los datos** (falla siempre, no solo en publicación), descripciones de más de 155 caracteres, recursos de terceros; lista los pendientes |
| `scripts/check-funding.mjs` | la mención de la AEI en **todas** las páginas (abajo) |
| `tests/aei.spec.ts` | la franja de la AEI, entera en el primer pantallazo, en cinco tamaños, tres lenguas y dos temas |
| `tests/humo.spec.ts` | cada plantilla responde, tiene un solo `h1`, no da errores de consola y cabe en 360 px |
| `tests/sinjs.spec.ts` | Inicio y Países sin JavaScript: la tabla de cobertura existe y se llega a ella |

Convenciones que la auditoría reconoce, por si alguien escribe un componente nuevo:

- cualquier elemento con `data-k="clave"` cuenta como cifra con procedencia (sirve para `<text>` dentro de un SVG,
  donde no cabe un `<data>`);
- `data-audit-exento="motivo"` exime un bloque entero. El motivo es obligatorio y la auditoría **lista** cada
  bloque exento en su informe: es una excepción a la vista, no un atajo;
- `data-autoria` marca un bloque de autoría o de cita de un conjunto (`<Cita>`, el crédito de la ficha, BibTeX y RIS):
  el control de nombres lo salta entero, porque ahí se nombra a los investigadores y no a quien figura en los datos.
  Tampoco lee los `alt` ni las referencias bibliográficas del copy. Un falso positivo no se resuelve aflojando el
  control: se añade, con su frase y su motivo, a `EXCEPCIONES_DE_NOMBRE` en el propio script, y el informe lo enseña;
- `data-todo-copy="clave"` declara un texto que el copy aún no trae y que el sitio suple con un identificador (o con
  nada). Va en las TRES lenguas —en español el identificador parece texto bueno—; la auditoría lista cada clave y,
  en publicación, falla.

La auditoría no se fía del `data-k`: vuelve a calcular desde `src/data/` el valor de cada clave, rechaza las claves
de familia desconocida y comprueba que el TEXTO a la vista dice lo que dice `value`.

El despliegue (`.github/workflows/deploy.yml`) repite todo lo anterior y publica solo desde `main`.
`.github/workflows/enlaces.yml` comprueba cada semana que responden los DOI, la colección y el explorador.

## Qué bloquea hoy la publicación

**Nada en el código** (2026-09-21): `STRICT=1 npm run build` pasa, no queda ningún pendiente a la vista y todas las puertas
están en verde. Falta solo lo que hace el investigador fuera del código: crear el repositorio `rodrodr/parlaibero`, activar
Pages, autorizar la subida, y enlazar el sitio desde Dataverse y desde el explorador.

Dos cosas que aparecen solas cuando existan: la monografía y el registro de decisiones (`ENLACES.monografia`, `.registro` en
`src/config/enlaces.ts`; sin URL no se pintan). La fecha de la búsqueda de corpus equivalentes (`fecha_busqueda`) solo se
cambia rehaciendo la búsqueda (`docs/04_BUSQUEDA_…md`). En el CI no existe la lista local de nombres: tras tocar el copy, la
auditoría se pasa en local antes de subir.

Con cada publicación se sube `edicion_pagina` en ese mismo archivo y se anota en `CHANGELOG.md`.

## Obligaciones de la AEI

El sitio es resultado de un proyecto financiado, y la *Guía de obligaciones de comunicación y publicidad de las
ayudas a la I+D+i concedidas por la AEI* (5-feb-2026) exige:

- la mención —**texto y logotipos**— en **todas las páginas**: `src/components/FundingNotice.astro`, que
  `src/layouts/Base.astro` pone en el pie;
- en **Inicio**, además, en el **primer pantallazo, sin scroll**: la franja bajo la cabecera (`franjaAEI`);
- la **referencia siempre junto a los logotipos**: texto y banda son un bloque indivisible (`[data-aei]`), y la
  referencia no aparece suelta en ningún otro lugar de la página;
- la banda es el **fichero oficial**, entero: no se recorta, no se recolorea y no se traduce; en tema oscuro va
  sobre placa clara; los nombres y acrónimos del Ministerio y de la Agencia van en español en las tres lenguas;
- **ningún otro logotipo** del sitio puede ser más alto que la banda.

Incumplirlo puede minorar la ayuda, así que `scripts/check-funding.mjs` y `tests/aei.spec.ts` **bloquean el
despliegue**. Una página nueva que no use `Base.astro` —la raíz que elige idioma, el 404— tiene que llevar la
mención igualmente.

> Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.

## Licencias y cita

- Código: MIT (`LICENSE`).
- Textos, figuras y datos de figura: CC BY 4.0 (`LICENSE-CONTENT.md`). Los logotipos institucionales no entran.
- Cómo citar el sitio: `CITATION.cff`. Para los **datos**, cite el conjunto de cada país con su DOI; la cita está
  en su ficha.
