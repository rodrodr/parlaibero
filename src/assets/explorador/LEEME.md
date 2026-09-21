# Imágenes de la página «Explorador»

Capturas reales del **Explorador de Diarios de Sesiones** de ParlaIbero, hechas el **2026-09-21**
con Playwright sobre la copia local de la herramienta. Ninguna está retocada: solo se han
recortado (los recortes se declaran abajo, imagen por imagen).

## Con qué se hicieron

| | |
|---|---|
| Fecha | 2026-09-21 |
| URL | `http://localhost:8831/` (la carpeta `diaries_explorer/docs/`, servida en solo lectura) |
| Versión | La interfaz **no muestra** número de versión. Huella embebida en la página: `version_web` `2d2d955803278efe`, `build_id` `4637a466ed28b439`. Repositorio en el commit `1ce2811` (2026-09-20, «Coocurrencias: una biblioteca nueva a partir de un tema»). |
| País | El Salvador (SV) |
| Archivo | `diaries/source/sv/standardize/SV_interventions.csv` · 103.092.395 bytes · sha256 `732818fb213966ee3cd4c1e19070e345d5a436651670fc5ce3c7e5ebb9c2c2da`. La cabecera de la herramienta lo resume así: «El Salvador · 49.077 intervenciones · 423 sesiones · 2018–2025». |
| Ventana | 1440 × 900 px, densidad 1× (píxeles CSS) |
| Tema y estilo | Tema **Claro**, estilo **Editorial** (los de por defecto; comprobados en ⚙ Ajustes) |

## La búsqueda y la biblioteca

- Búsqueda: `agua` (la herramienta busca sin acentos ni mayúsculas).
- Filtros: **«Solo lo que se habla»** activado y **Mín. palabras = 100** (atajo «≥100»). Ningún otro filtro.
- Resultado: **1.265 intervenciones**. Era la primera de las tres búsquedas previstas
  (agua · pensiones · presupuesto) y cayó dentro del intervalo pedido de 300 a 6.000, así que las
  otras dos no se probaron.
- «Guardar todo» → biblioteca nueva **«El debate sobre el agua»**, 1.265 intervenciones, creada el 2026-09-21.
- Nota de la biblioteca: «Discursos de más de 100 palabras que mencionan el agua, 2018-2025.»
  (En el diálogo de «Guardar todo» la nota se pega a cada intervención, no a la biblioteca; la nota
  de la biblioteca se escribe con el lápiz ✎ de su ficha. Se usaron las dos.)

## Parámetros de cada vista

| vista | parámetros |
|---|---|
| Léxico | «Solo discurso» activado. 1.103.848 palabras analizadas de 1.114.375; 30.195 términos distintos; TTR 0,027; G² máximo +18.588,3 («agua»). Incluye expresiones de varias palabras. |
| Coocurrencias | Los de por defecto: unidad **Intervención**, **250** términos, **10** vecinos, temas **normal**, **expresiones** activadas, «Solo discurso» activado. Resultado: **11 temas** (comunidades de Leiden), 250 términos de 2.000 del léxico, 1.543 conexiones de 3.166 significativas, modularidad 0,6682, 4,3 % del texto sin tema. Orden de los temas: «más característico». |
| Menciones | Mostrar **Todas**, focos **normal**; red agrupada por **Partido**, menciones **Todas**, mínimo de menciones **1**, encuadre por defecto. Resultado: 439 intervenciones con menciones (35 % de 1.265), 395 personas mencionadas (288 externas a la Cámara), 1.124 menciones de 122 oradores, 14 focos (modularidad 0,554). |
| Tendencia | Término `agua` (3.950 apariciones), **/10.000 palabras**, por **Año**, periodo **Todo**, suavizado **no**, **hitos** activados («los que quepan»: 18 hitos numerados), «variantes» y «aplicar filtros» desactivados → la serie es del corpus completo (14.120.326 palabras), no de la biblioteca. |

## Qué muestra cada imagen

| archivo | px | qué muestra |
|---|---|---|
| `bibliotecas.png` | 1440 × 900 | Vista «Mis bibliotecas» con la biblioteca abierta: a la izquierda su ficha (nombre, «1.265 intervenciones · 2026-09-21» y la nota); arriba las pestañas Intervenciones (1.265) · Léxico · Coocurrencias · Menciones. La pestaña visible es **Léxico**, no Intervenciones, para no enseñar texto junto a su orador. Ventana completa, sin recortar. |
| `lexico.png` | 1440 × 880 | Pestaña Léxico con el panel lateral plegado, para que quepan las siete columnas (término · frec. · ‰ biblioteca · ‰ resto corpus · keyness G² · log-ratio · distintividad). Primeras quince filas: agua, anda, *agua potable*, potable, asa, aguas, hídricos, *medio ambiente*, *recursos hídricos*, ambiente, acueductos, saneamiento, alcantarillados, *presidente de anda*, ambiental. Recortados 20 px por abajo para acabar en borde de fila. |
| `coocurrencias-resumen.png` | 1440 × 484 | Cabecera de la pestaña Coocurrencias: controles y las cinco cifras (11 temas · 250 términos · 1.543 conexiones · modularidad 0,6682 · 4,3 % sin tema) con el párrafo que explica el método. Recortada por abajo, justo antes del bloque «Leer primero», que lista oradores con sus palabras. **Sustituye a `coocurrencias-red.png`, que no existe: ver abajo.** |
| `coocurrencias-temas.png` | 1440 × 558 | Bloque «Temas»: el párrafo que explica el eje de partidos y el **tema 1** completo («potabilizadora · algas · olor», 37 términos, 1.027 intervenciones, 81,2 %), con sus términos en píldoras y el eje «un punto por partido»: Nuevas Ideas 0,5× · VAMOS 0,6× · FMLN 1,2× · GANA 1,3× · PDC 1,6× · PCN 2,0× (el punto sin rótulo junto a FMLN es ARENA, 1,2×; la herramienta calla el rótulo para que no se pisen). Recortada por abajo, justo antes de la línea «Leer primero: …» de la tarjeta, que nombra oradores; por eso cabe un solo tema. |
| `menciones-red.png` | 1360 × 726 | La red de menciones tal como la dibuja la herramienta, agrupada por partido y con sus etiquetas: sectores Nuevas Ideas, ARENA, GANA, FMLN, PCN, PDC y «Personas externas» (cuadrados); anillos por número de conexiones distintas (≥1, ≥2, ≥3, ≥8, núcleo ≥19). Captura del marco de la red, sin recortar. |
| `menciones-partidos.png` | 1360 × 356 | Matriz «Entre partidos»: menciones a miembros de la Cámara por cada 10.000 palabras del partido que habla. Filas y columnas: Nuevas Ideas, ARENA, PCN, FMLN, GANA, PDC, VAMOS; más las columnas «Propio» (%) y «Todas». Captura de la sección, sin recortar. |
| `tendencia.png` | 1138 × 385 | Panel «📈 Tendencia» del término `agua`, por año, 2018-2025, con los 18 hitos numerados sobre el gráfico. Captura del panel solo: deja fuera la lista de resultados que hay debajo. La leyenda textual de los hitos está plegada, así que no nombra a nadie. |

## Lo que no se pudo hacer

**`coocurrencias-red.png` no existe porque esta versión de la herramienta no dibuja la red de
coocurrencias.** La pestaña calcula la red (250 nodos, 1.543 conexiones, comunidades de Leiden) y la
**exporta** como GEXF, pero en pantalla solo enseña las cifras, el bloque «Leer primero» y las
tarjetas de tema. En `docs/app.js` solo se dibujan dos gráficos SVG: el de Tendencia y la red de
Menciones (`#menRed`); el eje de partidos de cada tema es HTML. No se ha fabricado una red por fuera de la herramienta, porque dejaría de ser una vista
real. `coocurrencias-resumen.png` ocupa su lugar.

## Regla de nombres

Las vistas de Menciones muestran nombres tal como los dibuja la herramienta: el investigador lo autorizó el 2026-09-21 porque no es una cita textual. Ninguna imagen enseña el texto de una intervención junto al nombre de quien la dijo.

Cada imagen se abrió y se revisó contra esa regla antes de darla por buena. Quedaron fuera a
propósito: la lista de resultados, la pestaña Intervenciones, el bloque «Leer primero», la línea
«Leer primero: …» de cada tarjeta de tema y el panel «Menciones de …» con sus citas.
