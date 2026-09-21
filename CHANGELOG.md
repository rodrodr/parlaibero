# Registro de cambios

El pie de cada página dice dos ediciones, y son independientes:

- **Edición de la página** — la de este registro. Se sube en `src/config/enlaces.ts` (`edicion_pagina`) con cada
  publicación, y aquí se anota qué cambió.
- **Edición de los datos** — la fecha de la versión depositada en Harvard Dataverse. No se escribe a mano: la trae
  el exportador de `diaries` (`src/data/sello.json`) y cambia cuando se regeneran los datos.

Un cambio de datos sin cambio de página no sube la edición de la página, pero sí se anota aquí.

## 0.1 — en preparación, sin publicar

Primera edición.

- Seis plantillas en español, inglés y portugués: Inicio, Países (índice y ficha por país), Metodología, Usar los
  datos, Para parlamentos y organismos, y Explorador.
- **Explorador (copy §8, aprobada el 2026-09-21).** Quinta pestaña de la navegación. Presenta la herramienta con siete
  capturas reales (`src/assets/explorador/`, con su LÉAME), cada una enlazada a su tamaño real para ampliarla sin
  JavaScript. Con cinco pestañas la cabecera va en una fila desde 72rem —con el nombre completo de los idiomas desde
  86rem— y, por debajo, en dos filas a propósito: marca e idiomas arriba, navegación debajo.
- **Rótulos decididos (copy §1.11, 2026-09-21).** Las tres medidas de la figura de la voz y su leyenda («Lista de
  diputados revisada a mano» · «Sin revisión a mano»), las partes de la barra de «Quién habla» (…«Laguna nuestra»),
  las notas de la fila de ejemplo, «Ficha anterior / siguiente» y el directorio de cámaras de pantallas estrechas.
  No queda ningún `data-todo-copy`.
- **Usar los datos · la tabla de columnas pinta su disponibilidad.** Una tira de dieciséis celdas por columna, una
  por cámara, que codifica por LLENADO (vale igual en tema claro y oscuro). Cada tira dice su base —todas las filas,
  los turnos de habla o los turnos vinculados—, que el exportador proyecta desde hoy (`columnas.json → base`). En
  los bordes la cifra TRUNCA: una columna al 99,9999 % no se lee «100 %». `audit-cifras` conoce la familia
  `columna.<nombre>.disp.<iso>` y exige esa misma regla con código propio.
- **EN y pt-BR completos** (496 claves × 3): las 85 claves nuevas pasaron por traductor, revisor independiente y
  retrotraducción ciega. La revisión destapó un error del ESPAÑOL, ya corregido: el copy citaba entre comillas un
  rótulo, «Quién habla de cada tema», que el explorador no enseña en pantalla (solo está en su README).
- **«Infraestructura de datos», subrayada** (pedido del investigador, 2026-09-21). Inicio: la analogía del laboratorio
  y la familia (PELA-USAL · Latinobarómetro · ParlaMint · Manifesto Project, en su orden) entre la tesis y su remate.
  Metodología: la familia en la cabecera, cada proyecto con su verbo, y el apartado de ediciones abierto por la pregunta
  de quien construye encima. «Parlamentos y organismos»: qué es, antes de quién lo hace. Pie y descripción de Inicio.
- **Ya no queda ningún pendiente a la vista**, y el build de publicación (`STRICT=1`) PASA: fecha de la búsqueda de corpus
  equivalentes (rehecha hoy; `docs/04_BUSQUEDA_…md`), contacto, autoría de las citas, motivo del formulario e imagen de la
  figura. La monografía y el registro de decisiones no se pintan mientras no tengan destino público.
- **Los gráficos, en granate** (decisión del investigador, 2026-09-21: los colores de la Universidad de Salamanca). La rampa
  de la rejilla y de la tira de columnas, la línea de la figura de la voz y la barra de «Quién habla» pasan de petróleo a
  granate, con la MISMA escalera de contraste clase a clase. Lo interactivo se distingue por la forma (subrayado, caja,
  foco azul), no por el color. Cambia una regla del plan, que reservaba el granate para lo que no es dato.
- **Pregunta de apertura:** «…lo que dicen los **representantes**…» (decisión suya: «los diputados», como genérico,
  chocaba con «diputadas»). El denominador no cambia. El portugués cambia igual; el inglés no lo necesitaba.
- **[Descargar la imagen]** de «Parlamentos y organismos»: la figura de la voz como PNG y SVG por lengua, compuesta en
  el build (`src/viz/figuraVoz.ts`) con la geometría y los textos del sitio, su cita y la mención de la AEI en el pie.
- **Para parlamentos y organismos · maquetación corregida** (la vio el investigador en la vista previa). Un bloque de la
  columna del organismo iba «pegajoso» dentro de una subrejilla y, al bajar, montaba sobre los dos siguientes. Ahora solo
  la primera fila va emparejada (rótulo y pregunta de cada público) y cada columna fluye por su cuenta. El peso de cada
  archivo («archivo de 98 MB») pasa a su propia línea: al lado del nombre partía «Costa Rica» o «República Dominicana».
- **Prueba nueva, `tests/solapes.spec.ts`:** recorre las siete plantillas desplazándose, a 1000 y 1366 px, y falla si un
  bloque pegajoso monta sobre otro texto. Con `CONTROL_SOLAPE=1` reintroduce el defecto y TIENE que fallar (visto).
- Dados por el investigador (anexo C): el motivo del formulario, la vía de contacto y la autoría de las citas de
  colección y figuras.
- Pruebas: `PW_CHANNEL=chrome npm test` usa el Chrome del equipo, sin descargar el Chromium de Playwright.
- Dos figuras con sus datos descargables sin formulario (CSV, Excel y LÉAME): la voz de las diputadas por cámara y
  década, y la rejilla de cobertura por cámara y año.
- Todas las cifras resueltas en el build desde `src/data/`, con su procedencia (`public/datos/procedencia.csv`).
- Mención de la financiación de la AEI en todas las páginas y, en Inicio, en el primer pantallazo.
- Puertas de calidad: diccionarios, cifras sin procedencia, mención de la AEI, humo, sin JavaScript.
- **Sin nombres propios (directiva del investigador, 2026-09-21).** En el sitio no aparece el nombre de nadie que
  figure en los datos, tampoco el de un jefe de Estado: las sesiones reconocibles se cuentan por cargo, país y fecha
  (claves `eventos.*`), y la ficha ya no reproduce las limitaciones ni la transformación depositadas, que nombran a
  parlamentarios: dice cuántas limitaciones declara el corpus y enlaza los dos documentos en Harvard Dataverse, con
  el aviso del formulario encima. `audit-cifras` busca en `dist/` los nombres de los dieciséis padrones
  (`.cache/nombres_vetados.json`, local) y falla siempre que halla uno; la autoría y las citas quedan exentas
  (`data-autoria`).
- Metodología: la fila real del apartado 1 (con las dos columnas del orador en blanco, a propósito) y los datos
  descargables de la vinculación por cámara (CSV y Excel).

Pendiente para publicar (detalle en el README, «Qué bloquea hoy la publicación»): los datos que solo puede dar el
investigador (`PENDIENTES_DEL_INVESTIGADOR`), los textos que el copy aún no trae (`data-todo-copy`), lo que tiene que
entregar el exportador (la imagen de la figura) y la revisión nativa de las traducciones.
