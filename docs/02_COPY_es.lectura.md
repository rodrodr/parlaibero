> ⚠ **VERSIÓN DE LECTURA — GENERADA, NO SE EDITA** (`python3 scripts/copy_lectura.py`). Es `02_COPY_es.md` con las cifras de hoy ya puestas (medidas el 2026-09-07). Lo que sigue entre ⟦corchetes dobles⟧ aún no tiene valor: lo da usted, o es un comodín de plantilla. Las correcciones se hacen en `02_COPY_es.md`.

# 02 · COPY ES · documento único (Puerta 2)

> **✅ PUERTAS 2 Y 3 SUPERADAS — 2026-09-21.** Las traducciones se aceptan como están («si veo algo raro luego, cambiamos a posteriori»). Añadida la §8 «Explorador», aprobada el mismo día.
> **✅ PUERTA 2 SUPERADA — 2026-09-21.** El investigador aprobó el copy («Apruebo el copy; mantén los dos términos»).
> **El español queda CONGELADO**: desde ahora solo se toca por una errata o por una decisión suya, y cada cambio se
> propaga a EN y PT. Siguen abiertas las dudas 3, 4 y 5 del anexo C; mientras no las cierre, sus textos salen como
> «pendiente» en la vista previa y BLOQUEAN la publicación. Narrativa aprobada: `01_NARRATIVA_landing.md`. Cifras: `02a_MARCADORES.md`.
>
> **Cambio posterior a la aprobación, por DECISIÓN DEL INVESTIGADOR (2026-09-21): en divulgación no se nombra a nadie que figure en los datos.**
> Se reescribieron `inicio.sesiones.lista` e `inicio.sesiones.ausentes` (nombraban a tres jefes de Estado), se añadieron las ocho claves `eventos.*` (§1.10),
> y la ficha ENLAZA las limitaciones y el informe del proceso depositados (`ficha.antes.intro`, `ficha.fuente.texto`) en vez de reproducirlos, porque nombran a parlamentarios.
> Inicio pasa de 698 a unas 704 palabras: cuatro por encima del tope de 700, a cambio de no tocar ninguna otra frase aprobada.
>
> **Cómo se hizo.** Cinco redactores, uno por plantilla; cuatro lectores independientes sobre el conjunto —un
> verificador de marcadores, cifras y código; un escéptico con los criterios de rechazo del investigador; una lectora
> institucional; una editora de estilo—; y un editor que fundió todo en una sola voz. Después, un control automático:
> ninguna palabra vetada, ninguna cifra tecleada fuera de los dos ejemplos resueltos de ficha, ningún nombre de
> parlamentario.
>
> **Cómo se lee.** Ninguna cifra está tecleada: van como `⟦marcador⟧` y las resuelve el build. Para leerlo con las
> cifras de hoy ya puestas, use **`02_COPY_es.lectura.md`**, que se GENERA de este archivo y no se edita. Las claves
> `<!-- así -->` son los identificadores de cada texto en los diccionarios de idioma. `↺` marca una frase fija que se
> repite idéntica en varias páginas. Las citas que empiezan por «[nota de diseño]» no son texto para el lector.
>
> **Tests de rechazo (anexo A):** Inicio, 698 palabras de 700 · la pregunta, en la primera pantalla · 0 % de límites
> antes del primer hallazgo · 115 palabras de límites de 120.
>
> **Siguen abiertas (anexo C):** la autoría de las citas · la fecha y el lugar de la novedad · contacto, motivo del
> formulario y publicación de la monografía.

Los cinco borradores están fundidos en un solo documento, con un término por concepto y una redacción por frase obligatoria. Inicio pasa los cuatro tests de rechazo, con los recuentos reales en el anexo A.

Ninguna clave nueva exige medir nada en `diaries`: todas se proyectan de archivos que ya existen (anexo B). Quedan cuatro dudas que solo usted puede resolver (anexo C, puntos 2 a 5).

## 0. Hoja de estilo y glosario

### 0.1 Hoja de estilo

1. Usted siempre. El proyecto dice «nosotros», nunca «el investigador».
2. Una idea por unidad. Ninguna frase pasa de treinta palabras.
3. Frases obligatorias: una clave `comun.fija.*`, una redacción. Las páginas la reutilizan; aquí se marca con `↺` y el texto se repite idéntico solo para que usted lo lea en su sitio.
4. En prosa, marcadores atómicos (`.n`, `.pct`, `.den`, `.pais`). Los compuestos van solo en tablas.
5. Porcentaje con artículo: «el ⟦x⟧», «del ⟦x⟧ al ⟦y⟧». El signo y el espacio indivisible los pone el build.
6. Género:
   - masculino plural para el conjunto;
   - femenino cuando ellas son el sujeto;
   - se desdobla una vez por página, al definir el denominador («diputados y diputadas con sexo conocido»);
   - se prefiere «quien preside»;
   - nunca barra, @ ni -e.
7. «Diario», con mayúscula, para el registro oficial de cualquier cámara. «Acta» queda solo en la redacción fija de los ausentes y en la frase del tono («actas escaneadas»), que no se toca. Los cargos van en minúscula.
8. Comillas «» y, dentro, “”. Las rectas van solo en código y en el texto fijo de la AEI.
9. Raya de inciso pegada, un inciso por frase. Con espacios, solo en los ausentes.
10. Léxico neutro:
    - archivo, no fichero;
    - «equipo» es el aparato, y las personas son «grupo»;
    - fuera de la tesis, el verbo «costar», ni «coste» ni «costo».
11. Sin jerga de taller: reproceso, mobiliario, canónico, rampa, escalón, guestbook, dataset.
12. Anglicismos admitidos: embeddings, CSV, DOI, BibTeX, RIS. README → LÉAME, con el nombre real del archivo entre paréntesis la primera vez.
13. Rótulos:
    - botones: infinitivo + objeto;
    - pestañas y navegación: sustantivos;
    - imperativo de usted, solo en prosa;
    - un rótulo por destino (tabla de abajo).
14. Un solo espacio de claves. Idiomas con nombre completo.
15. Para traducir: sin modismos ni elipsis que dependan del posesivo o del género.

| destino | rótulo único |
|---|---|
| `/usar/`, las tres salidas | [Descargar los datos] |
| DOI de un país en Harvard Dataverse | [Descargar en Dataverse] |
| explorador | [Abrir el explorador] |
| CSV, XLSX y LÉAME de una figura | [Descargar los datos de la figura] |
| índice de países | [Ver los países] |
| ficha de un país | [Ver la ficha de ⟦pais.<iso>.nombre⟧] |
| diccionario (`/usar/#columnas`) | [Leer el diccionario] |
| contacto · erratas | [Escribirnos] · [Avisar de una errata] |
| cita | [Copiar la cita] |

### 0.2 Convenciones de marcadores

- `⟦clave⟧`: número escrito y concordado por lengua. Lo uso solo con valores pequeños: `corpus.n`, `dois.n`, `dois.n_v2`, `ausentes.n`, `sexo.padrones_auditados`, `sexo.padrones_sin_auditar`, `eventos.n_presentes`, `voz.n_sube`, `decada.n_corpus.<década>`, `validacion.paises`, `ocr.do.sesiones`, `desfase_ec.sesiones`.
- `universo.n`, `paquete.ficheros` y `columnas.n` van en cifra.
- `|fecha_larga`: «17 de abril de 2016». `|peso`: tamaño con su unidad, fijada una sola vez (anexo B, nota 2).
- Subcampos: `.n` · `.pct` · `.den` · `.pais` · `.ic`. Ejemplos: `962.878`, `75,35 %`, `11`, `Uruguay`, `5,6`.
- Voz femenina: `⟦pais.<iso>.palF.<década>.pct⟧`, con `.n` y `.den` **en palabras**, no en oradores. Alias: `.palF.primera` y `.palF.ultima`, la primera y la última década con datos.
- Las palabras de década («los ochenta», «los noventa», «esta década») van atadas a la clave de su marcador. `check-i18n` comprueba el par.
- Lista blanca de `check-i18n`, cadenas con dígitos que no son cifras del corpus:
  - `PID2022-141706NB-C22`
  - `10.13039/501100011033`
  - `CC BY 4.0`
  - `UTF-8`
  - `(Bäck y Debus, 2019)`
  - los literales de código (`dm_speech = 0`)
  - los nombres de archivo

### 0.3 Glosario

> [nota de diseño] Una línea por término. Es la referencia para que todas las páginas digan lo mismo, la fuente de las definiciones emergentes y la base del glosario trilingüe de la Puerta 3.
>
> Para portugués:
> - «padrón» nunca es «padrão»;
> - «hueco declarado» es «lacuna declarada»;
> - «laguna nuestra» es «falha nossa».

<!-- glosario.camara -->
**Cámara.** La cámara baja o única de cada país, que es la que cubre la base. Decimos «cámara» para las dieciséis, se llamen congreso, asamblea o cámara de diputados. El Senado no entra.

<!-- glosario.pais -->
**País.** La unidad de descarga y de ficha: un país, una cámara, un archivo, un DOI.

<!-- glosario.pleno -->
**Pleno.** La reunión de toda la cámara. Las comisiones no entran.

<!-- glosario.diario -->
**Diario.** El registro oficial y literal de lo dicho en el pleno, se llame Diario de Sesiones, Diario de los Debates, Gaceta, acta o versión taquigráfica. Va con mayúscula y siempre manda sobre la base.

<!-- glosario.sesion -->
**Sesión.** Una reunión del pleno, con su fecha y, donde el Diario lo imprime, su número.

<!-- glosario.turno -->
**Turno de palabra.** La unidad de la base: lo que dice una persona desde que el Diario le da la palabra hasta que se la da a otra. Un discurso interrumpido son varios turnos.

<!-- glosario.fila -->
**Fila.** Una línea del archivo de un país: o un turno de palabra, o un bloque de no habla. Es lo que se cuenta cuando se dice «filas».

<!-- glosario.turnos_habla -->
**Turnos de habla.** Los turnos de palabra, cuando se cuentan: las filas que no están marcadas como no habla. Son el denominador de la vinculación: 9.868.087.

<!-- glosario.intervencion -->
**Intervención.** El nombre corriente de lo que alguien dice en el pleno, y el que usan los archivos y el explorador para cada fila. Sirve para leer y buscar. Cuando se cuenta, se dice «turnos» o «filas».

<!-- glosario.habla -->
**Habla y no habla.** Toda fila es una cosa o la otra. No habla es lo que el Diario trae y nadie pronuncia como orador —carátulas, sumarios, pases de lista, votaciones nominales, documentos leídos—. Se conserva en su sitio y se marca, y solo donde está probado.

<!-- glosario.diputado -->
**Diputado, diputada.** Quien ocupa un escaño en la cámara, se llame en su país diputado, representante, asambleísta, congresista o deputado.

<!-- glosario.escano -->
**Escaño.** El puesto de un diputado en la cámara. En otros países, curul o banca.

<!-- glosario.noescano -->
**Quien no puede ocupar escaño.** Quien habla en el pleno sin ser diputado: ministros, secretarios, relatores, invitados. No decimos «sin escaño».

<!-- glosario.padron -->
**Padrón.** La lista de quienes ocuparon un escaño en una cámara, con nombre, sexo, partido, distrito y fechas. No es el padrón electoral. La construye el proyecto y va en un archivo aparte. El Diario dice quién habló; el padrón, quién tenía escaño.

<!-- glosario.vinculacion -->
**Vinculación.** Unir cada turno de palabra con la persona del padrón que lo dijo.

<!-- glosario.vinculacion.bruta -->
**Vinculación bruta.** De todos los turnos de habla, los que llevan un diputado identificado: 8.590.210 de 9.868.087, el 87,05 %.

<!-- glosario.vinculacion.efectiva -->
**Vinculación efectiva.** La misma parte, sin contar en el denominador los turnos de quien no puede ocupar escaño ni las voces colectivas o anónimas: el 98,12 %. Una presidencia sin nombre no se descuenta, porque quien preside es diputado.

<!-- glosario.laguna -->
**Laguna nuestra.** Un turno de un diputado que no logramos vincular. Es una falta nuestra, y se dice así. No es un hueco.

<!-- glosario.hueco -->
**Hueco declarado.** Años dentro de la serie de una cámara que su repositorio no tiene. Están dichos en su ficha y dibujados en la rejilla con contorno y etiqueta. Hoy son Argentina (1991–2000) y Paraguay (2001–2002, 2006–2007, 2011–2012). Los años anteriores al inicio de una serie no son huecos.

<!-- glosario.ausente -->
**Ausente.** Un país del universo de 21 sin corpus, siempre con su motivo y con la redacción fija.

<!-- glosario.edicion -->
**Edición.** El estado publicado de los datos de un país, con su número y su DOI. Una edición publicada no cambia. La página tiene su propia edición.

<!-- glosario.identificador -->
**Identificador.** El código de una sesión, una fila o un diputado. Es estable dentro de una edición, no entre ediciones. Para citar un pasaje se dan la fecha y el número de sesión.

<!-- glosario.voz -->
**Voz y presencia.** Presencia es ocupar escaños. Voz es lo que se dice en el pleno. La base mide voz.

<!-- glosario.palabras -->
**Palabras (la medida).** La medida pública de la voz es la parte de las palabras dichas. Turnos y oradoras están a un clic.

<!-- glosario.sexo -->
**Sexo (variable derivada).** No lo da el Diario. Lo asignamos nosotros a cada persona del padrón, con su procedencia anotada. Tiene más error en mujeres que en hombres.

<!-- glosario.padron.auditado -->
**Padrón auditado.** Aquel cuyo sexo se revisó a mano, fila por fila: once de dieciséis. Los demás se marcan y se dibujan distinto.

<!-- glosario.archivo -->
**Archivo y conjunto de datos.** El archivo es el CSV de un país. El conjunto es todo lo depositado para ese país en Harvard Dataverse, con su documentación y su DOI.

<!-- glosario.explorador -->
**Explorador.** La página que abre en su navegador el archivo de un país para buscar, filtrar y exportar. Abre un país cada vez.

<!-- glosario.formulario -->
**Formulario de descarga.** Lo que Harvard Dataverse pide antes de descargar: nombre, correo, institución, cargo y uso previsto.

<!-- glosario.datos_figura -->
**Datos de la figura.** El CSV, el Excel y el LÉAME de una figura. Son agregados y se descargan sin formulario.

<!-- glosario.sin_dueno -->
**Pregunta sin dueño.** Lo que la base no trae anotado y alguien tendría que construir: tema, tono, posición, voto.

---

## 1. Texto común del sitio

### 1.1 Cabecera y navegación

<!-- comun.nav.saltar --> [Saltar al contenido]
<!-- comun.cabecera.nombre --> ParlaIbero
<!-- comun.cabecera.descriptor --> Los debates del pleno, turno por turno
<!-- comun.nav.aria --> Navegación principal
<!-- comun.nav.inicio --> [Inicio]
<!-- comun.nav.paises --> [Países]
<!-- comun.nav.metodologia --> [Metodología]
<!-- comun.nav.usar --> [Usar los datos]
<!-- comun.nav.instituciones --> [Para parlamentos y organismos]
<!-- comun.nav.instituciones.corto --> [Parlamentos y organismos]
<!-- comun.nav.cta.descargar --> [Descargar los datos]
<!-- comun.nav.cta.explorador --> [Abrir el explorador]
<!-- comun.nav.menu.abrir --> [Menú]
<!-- comun.nav.menu.cerrar --> [Cerrar]
<!-- comun.nav.tema.oscuro --> [Tema oscuro]
<!-- comun.nav.tema.claro --> [Tema claro]

> [nota de diseño] El descriptor va en cuerpo pequeño junto al nombre. Dice qué es el sitio en el primer pantallazo sin quitarle la pantalla a la pregunta. No lleva cifra.
>
> La versión corta del rótulo de instituciones es solo para anchos estrechos.

### 1.2 Frases fijas (idénticas donde aparezcan)

<!-- comun.fija.local -->
Se abre en su navegador; nada sale de su equipo.

<!-- comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

<!-- comun.fija.formulario -->
Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.

<!-- comun.fija.formulario.motivo -->
Nos gustaría conocer a quienes usan los datos, saber para qué les sirven y poder seguir en contacto.

> [nota de diseño] El aviso va SIEMPRE encima del botón que lleva a Dataverse, nunca en una nota emergente. Si la clave del motivo está vacía, no se pinta nada.

<!-- comun.fija.diario -->
Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

<!-- comun.fija.identificadores -->
Los identificadores son estables dentro de una edición, no entre ediciones.

<!-- comun.fija.citar_pasaje -->
Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.

<!-- comun.fija.voz -->
Mide voz, no presencia.

<!-- comun.fija.sexo -->
El sexo lo asignamos nosotros, con más error en mujeres que en hombres.

<!-- comun.fija.no_ordena -->
No ordena países.

<!-- comun.fija.tono -->
El tono dice cuánto material hay, no cuánto se debate.

<!-- comun.fija.novalida -->
Que estén no valida su contenido.

<!-- comun.fija.sin_formulario -->
Sin formulario: son datos agregados.

<!-- comun.ausentes.entrada -->
Faltan cinco países. Conviene decir por qué.
<!-- comun.ausentes.regimen -->
**Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
<!-- comun.ausentes.bolivia -->
**Bolivia** — las publica sin digitalizar.
<!-- comun.ausentes.honduras -->
**Honduras** — publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.ausentes.cierre -->
Un solo criterio: que exista registro del debate plenario en forma de discursos. Donde existe, está aquí.

<!-- comun.ausentes.prosa -->
Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.

<!-- comun.fig.pestanas --> [Gráfico] [Tabla] [Datos]
<!-- comun.fig.datos --> [Descargar los datos de la figura]
<!-- comun.fig.datos.nota --> CSV y Excel, con su LÉAME. Sin formulario: son datos agregados.
<!-- comun.fig.imagen --> [Descargar la imagen]
<!-- comun.fig.voz.hover --> ⟦pct⟧ · ⟦n⟧ de ⟦den⟧ palabras
<!-- comun.fig.rejilla.hover --> ⟦pais⟧ · ⟦año⟧ · ⟦ses⟧ sesiones · ⟦hab⟧ turnos de habla
<!-- comun.fig.rejilla.hover.hueco --> ⟦pais⟧ · ⟦huecos_rangos⟧ · hueco declarado
<!-- comun.cita.copiar --> [Copiar la cita]
<!-- comun.cita.copiada --> Cita copiada.
<!-- comun.enlace.dataverse --> Se abre en Harvard Dataverse.
<!-- comun.enlace.explorador --> Se abre el explorador, en otra pestaña.
<!-- comun.doc.en --> Documento en inglés.
<!-- comun.doc.es --> Documento en español.

> [nota de diseño] El denominador de la nota emergente son PALABRAS (`pct_F_palabras.n` y `.den`, que ya están en el JSON), no oradores. Las oradoras viven en «Ver turnos y oradoras».

### 1.3 Mención de la AEI

<!-- comun.aei.corta -->
Proyecto PID2022-141706NB-C22 financiado por:

<!-- comun.aei.completa -->
Esta página web es parte del proyecto de I+D+i PID2022-141706NB-C22, "Comportamiento legislativo y erosión democrática en América Latina" (PELA Comportamiento), financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.

<!-- comun.aei.texto -->
Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.

> [nota de diseño] La mención en TEXTO, con la fórmula literal de la guía de la AEI, para lo que sale del sitio sin sus logotipos: el pie de la imagen descargable de la figura. Donde hay logotipos manda `comun.aei.corta`.

<!-- comun.aei.logos.alt -->
Logotipos del Ministerio de Ciencia, Innovación y Universidades; de la Unión Europea, con el lema «Cofinanciado por la Unión Europea»; y de la Agencia Estatal de Investigación. Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.

> [nota de diseño] En Inicio, la mención corta y la banda forman un bloque indivisible bajo la cabecera, dentro del primer pantallazo. En el pie de TODAS las páginas van la mención completa y la banda.
>
> La referencia nunca aparece sin los logotipos. Por eso se suprime la línea de financiación que el borrador de instituciones repetía en su cierre.
>
> En EN y PT, los nombres del Ministerio y de la Agencia quedan en español, también dentro del `alt`.

### 1.4 Pie

<!-- comun.pie.quien -->
ParlaIbero · Infraestructura de datos para las ciencias sociales y humanas · Instituto de Iberoamérica, Universidad de Salamanca

<!-- comun.pie.deposito -->
Los datos están en Harvard Dataverse: dieciséis conjuntos, cada uno con su DOI.

<!-- ↺ comun.fija.diario -->
Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

<!-- comun.pie.licencia -->
Datos y contenidos, CC BY 4.0. Código de la página, MIT.

<!-- comun.pie.edicion -->
Página, edición ⟦edicion_pagina⟧ · Datos, edición del 7 de septiembre de 2026

<!-- comun.pie.enlaces -->
[Colección en Harvard Dataverse] [Abrir el explorador] [Cómo citar] [De dónde sale cada cifra] [Avisar de una errata] [Escribirnos]

<!-- comun.pie.logos.usal.alt --> Universidad de Salamanca
<!-- comun.pie.logos.instituto.alt --> Instituto de Iberoamérica

> [nota de diseño] Orden del pie: bloque AEI · quién · depósito y Diario · licencia · edición · privacidad · enlaces. Los logotipos de la USAL y del Instituto van después de la banda y nunca más altos que ella. «De dónde sale cada cifra» enlaza a `procedencia.csv`.

### 1.5 Privacidad

<!-- comun.privacidad.linea -->
Este sitio no usa cookies ni analítica.

<!-- comun.privacidad.ampliada -->
El explorador tampoco recibe su archivo: no sale de su equipo. La descarga en Harvard Dataverse sí pide sus datos, y se lo avisamos antes del clic.

> [nota de diseño] Solo es cierto si las fuentes se alojan en el propio sitio y no hay ningún recurso de terceros. El build debe comprobarlo.

### 1.6 Idioma

<!-- comun.idioma.etiqueta --> Idioma
<!-- comun.idioma.aria --> Cambiar de idioma
<!-- comun.idioma.es --> [Español]
<!-- comun.idioma.en --> [English]
<!-- comun.idioma.pt --> [Português (Brasil)]
<!-- comun.idioma.raiz.titulo --> Elija idioma · Choose a language · Escolha o idioma

<!-- comun.idioma.aviso.es_fuente -->
La interfaz del explorador está hoy solo en español. La búsqueda trabaja sobre el texto original de cada cámara, en español o en portugués.
<!-- comun.idioma.aviso.en -->
The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.
<!-- comun.idioma.aviso.pt -->
A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.

> [nota de diseño] El aviso se pinta en EN y PT junto a cada [Abrir el explorador] y, en la raíz, bajo el selector. En ES no se pinta. Los dos textos pasan por los revisores nativos en la Puerta 3.

### 1.7 Página no encontrada

<!-- comun.404.titulo -->
Esta página no está.
<!-- comun.404.texto -->
El enlace puede ser antiguo o tener una errata. Los datos no se han movido: cada país sigue en su DOI.
<!-- comun.404.salidas -->
[Ir a Inicio] [Ver los países] [Descargar los datos]
<!-- comun.404.errata -->
Si llegó aquí desde un enlace de este mismo sitio, avísenos. [Avisar de una errata]

> [nota de diseño] GitHub Pages sirve un solo `404.html`, que no sabe en qué lengua venía el lector. Por eso lleva las tres lenguas apiladas, con el español primero, y también la mención de la AEI.

### 1.8 Textos alternativos de las dos figuras principales

> [nota de diseño] Cada figura lleva un `alt` corto y una descripción larga enlazada con `aria-describedby`. Las frases por cámara las genera el build. Digo «series», no «paneles», para no presuponer la forma del gráfico.

<!-- comun.alt.voz.corto -->
Figura con dieciséis series, una por cámara. Cada serie muestra, década a década, qué parte de las palabras de diputados y diputadas con sexo conocido dijeron ellas. Cada cámara se compara consigo misma: la figura no ordena países. Los valores están en la pestaña «Tabla».

<!-- comun.alt.voz.largo.intro -->
En quince de dieciséis cámaras, la última década con datos está por encima de la primera. No en todas sube: en República Dominicana pasa del 18,32 % al 11,58 %, y en Guatemala baja antes de volver a subir.

<!-- comun.alt.voz.largo.fila -->
⟦pais.<iso>.nombre⟧: el ⟦pais.<iso>.palF.primera.pct⟧ en su primera década con datos; el ⟦pais.<iso>.palF.ultima.pct⟧ en la última.

<!-- comun.alt.voz.largo.fila.sin_auditar -->
⟦pais.<iso>.nombre⟧: el ⟦pais.<iso>.palF.primera.pct⟧ en su primera década con datos; el ⟦pais.<iso>.palF.ultima.pct⟧ en la última. Padrón sin auditar.

<!-- comun.alt.voz.largo.salvedad -->
Mide voz, no presencia. El denominador son las palabras de diputados y diputadas con sexo conocido. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Las cinco cámaras con padrón sin auditar —Argentina, Brasil, Chile, Ecuador y Perú— se dibujan con otro trazo.

<!-- comun.alt.rejilla.corto -->
Rejilla de cobertura: dieciséis cámaras en filas y los años de 1976 a 2025 en columnas. 527 de 800 celdas tienen al menos una sesión. Los mismos datos están en la pestaña «Tabla».

<!-- comun.alt.rejilla.largo.intro -->
Cada fila es una cámara; cada columna, un año. Una celda llena quiere decir que la base tiene al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Las series empiezan en años distintos: antes del inicio la celda está vacía, y no es un hueco.

<!-- comun.alt.rejilla.largo.fila -->
⟦pais.<iso>.nombre⟧, ⟦pais.<iso>.camara⟧: de ⟦pais.<iso>.inicio⟧ a ⟦pais.<iso>.fin⟧.

<!-- comun.alt.rejilla.largo.fila.hueco -->
⟦pais.<iso>.nombre⟧, ⟦pais.<iso>.camara⟧: de ⟦pais.<iso>.inicio⟧ a ⟦pais.<iso>.fin⟧, con hueco declarado en ⟦pais.<iso>.huecos_rangos⟧.

<!-- comun.alt.rejilla.largo.ausentes -->
Debajo de la rejilla, sin celdas, los cinco países de un universo de 21 que no tienen corpus. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.

<!-- comun.alt.rejilla.teclado -->
Con el teclado: una parada por cámara; las flechas recorren los años.

### 1.9 LÉAME tipo (acompaña a los datos de cada figura)

> [nota de diseño] Texto plano, UTF-8. Los huecos `⟦fig.*⟧` se rellenan por figura. Debajo van rellenos los de las dos figuras principales.

<!-- comun.leame.cabecera -->
LÉAME · ⟦fig.titulo⟧
ParlaIbero · Datos, edición del 7 de septiembre de 2026 · Página, edición ⟦edicion_pagina⟧ · generado el ⟦fig.fecha_generacion⟧

<!-- comun.leame.que_mide.titulo --> QUÉ MIDE
<!-- comun.leame.que_mide --> ⟦fig.que_mide⟧

<!-- comun.leame.denominador.titulo --> DENOMINADOR
<!-- comun.leame.denominador -->
⟦fig.denominador⟧
Cada fila trae su n y su denominador. Una celda vacía quiere decir que esa cámara no tiene sesiones en ese periodo. No quiere decir cero.

<!-- comun.leame.archivos.titulo --> ARCHIVOS
<!-- comun.leame.archivos -->
⟦fig.archivo⟧.csv: UTF-8, separado por comas, con punto decimal.
⟦fig.archivo⟧.xlsx: lo mismo, para Excel. Si su Excel usa coma decimal, abra este.
LEAME.txt: este archivo.

<!-- comun.leame.columnas.titulo --> COLUMNAS
<!-- comun.leame.columnas --> ⟦fig.columnas⟧

<!-- comun.leame.salvedad.titulo --> SALVEDAD
<!-- comun.leame.salvedad --> ⟦fig.salvedad⟧

<!-- comun.leame.fuente.titulo --> FUENTE
<!-- comun.leame.fuente -->
Calculado sobre los dieciséis conjuntos de ParlaIbero depositados en Harvard Dataverse: https://dataverse.harvard.edu/dataverse/parlaibero. La procedencia de cada cifra está en procedencia.csv. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de cada cámara.

<!-- comun.leame.licencia.titulo --> LICENCIA
<!-- comun.leame.licencia -->
CC BY 4.0. Puede copiar, adaptar y redistribuir estos datos si cita la fuente.

<!-- comun.leame.citar.titulo --> CÓMO CITAR
<!-- comun.leame.citar -->
⟦cita.autoria⟧. «⟦fig.titulo⟧». ParlaIbero, datos de figura, edición del 7 de septiembre de 2026. Instituto de Iberoamérica, Universidad de Salamanca. ⟦fig.url⟧. Consultado el [fecha de su consulta].
Si usa los datos de un país, cite además su conjunto, con su DOI. La cita está en la ficha del país.

<!-- comun.leame.contacto.titulo --> ERRATAS Y CONTACTO
<!-- comun.leame.contacto --> ⟦contacto⟧

**Huecos rellenos · figura de la voz**

<!-- fig.voz.titulo -->
Voz de las diputadas en el pleno, por cámara y década

<!-- fig.voz.que_mide -->
De las palabras dichas en el pleno por diputados y diputadas, la parte que dicen ellas. Una serie por cámara y una cifra por década. El archivo trae también la misma parte en turnos de habla y en oradoras.

<!-- fig.voz.denominador -->
Las palabras de diputados y diputadas con sexo conocido, en esa cámara y esa década. No entran quienes no pueden ocupar escaño, las voces colectivas ni las filas de no habla.

<!-- fig.voz.salvedad -->
Mide voz, no presencia: léala junto a la serie de escaños. No es un indicador oficial ni ordena países.
El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el 99,54 % de los hombres y en el 97,43 % de las mujeres, sobre 38.372 filas revisadas a mano en once padrones.
En cinco cámaras —Argentina, Brasil, Chile, Ecuador y Perú— el padrón no está auditado, y una columna lo marca.
Los turnos incluyen a quien preside; por eso la medida pública son las palabras.
La serie se midió el 7 de septiembre de 2026 sobre nuestros archivos de trabajo, que solo en Ecuador difieren de lo depositado: dos sesiones y 150 filas posteriores al corte de la edición. Si recalcula la última década de Ecuador desde su descarga, puede no coincidir exactamente.

**Huecos rellenos · rejilla de cobertura**

<!-- fig.cobertura.titulo -->
Cobertura: qué hay de cada cámara, año por año

<!-- fig.cobertura.que_mide -->
Para cada cámara y cada año entre 1976 y 2025: si la base tiene al menos una sesión, cuántas sesiones y cuántos turnos de habla.

<!-- fig.cobertura.denominador -->
800 celdas, una por cámara y año. 527 tienen al menos una sesión.

<!-- fig.cobertura.salvedad -->
Una celda llena quiere decir que hay al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Antes del inicio de una serie la celda está vacía y no es un hueco. Un hueco declarado son años dentro de la serie que el repositorio de la cámara no tiene, y lleva su etiqueta.
Faltan cinco países de un universo de 21. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.

---

### 1.10 Sesiones que el lector reconoce, SIN NOMBRES

> [nota de diseño] Directiva del investigador (2026-09-21): en divulgación no se nombra a nadie que figure en los datos. Cada hecho se cuenta por cargo, país y fecha. Estas claves sustituyen al campo `que_paso` de los datos, que llevaba nombre propio y YA NO SE EXPORTA; el marcador `⟦evento.<id>.que_paso⟧` se resuelve contra ellas.

<!-- eventos.br-2016-04-17 -->
La Cámara admite el proceso de destitución de la presidenta de la República.

<!-- eventos.ec-1997-02-06 -->
El Congreso cesa al presidente de la República.

<!-- eventos.ec-2005-04-20 -->
El Congreso cesa al presidente de la República.

<!-- eventos.pe-2020-11-09 -->
El Congreso declara la vacancia de la Presidencia de la República.

<!-- eventos.ar-2001-12-21 -->
Asamblea Legislativa tras la renuncia del presidente de la Nación.

<!-- eventos.es-1981-02-23 -->
La sesión de investidura interrumpida por el asalto al Congreso.

<!-- eventos.py-2012-06-21 -->
Juicio político al presidente de la República: cae dentro de un hueco declarado.

<!-- eventos.py-2012-06-22 -->
Destitución del presidente de la República: cae dentro de un hueco declarado.

### 1.11 Rótulos de figuras, tablas y navegación — decididos con el investigador el 2026-09-21

> [nota de diseño] Son los textos que los constructores echaron en falta (el sitio los marcaba como pendientes en vez de inventarlos). Cuatro eran decisiones y las tomó el investigador: la leyenda «Sin revisión a mano»; la nota de la fila de ejemplo; «Laguna nuestra»; y el directorio de cámaras que aparece SOLO en pantallas estrechas, que se queda con título propio. En la tabla de la voz, «De diputadas» y «De diputados y diputadas…» valen para las tres medidas. `usar.columnas.col.*` son las cabeceras de la tabla de columnas con su tira de dieciséis celdas de disponibilidad. La tira codifica por LLENADO y no por tono: «más oscura» sería falso en el tema oscuro, donde la rampa se invierte, y una proporción se lee mejor como longitud.

<!-- comun.fig.voz.medida.palabras -->
palabras

<!-- comun.fig.voz.medida.turnos -->
turnos

<!-- comun.fig.voz.medida.oradoras -->
oradoras

<!-- comun.fig.voz.hover.turnos -->
⟦pct⟧ · ⟦n⟧ de ⟦den⟧ turnos

<!-- comun.fig.voz.hover.oradoras -->
⟦pct⟧ · ⟦n⟧ de ⟦den⟧ oradores

<!-- comun.fig.voz.tabla.col.n -->
De diputadas

<!-- comun.fig.voz.tabla.col.den -->
De diputados y diputadas con sexo conocido

<!-- comun.fig.voz.leyenda.auditado -->
Lista de diputados revisada a mano

<!-- comun.fig.voz.leyenda.sin_auditar -->
Sin revisión a mano

<!-- ficha.voz.col.palabras -->
Palabras

<!-- ficha.voz.col.turnos -->
Turnos

<!-- ficha.voz.col.oradoras -->
Oradoras

<!-- ficha.vecinas.anterior -->
Ficha anterior

<!-- ficha.vecinas.siguiente -->
Ficha siguiente

<!-- comun.enlace.dataverse.pestana -->
Se abre en Harvard Dataverse, en otra pestaña.

<!-- metodologia.1.fila.sin_orador -->
Quién habla está en los datos. Aquí no se muestra.

<!-- metodologia.1.fila.truncado -->
El texto sigue: aquí va solo el comienzo.

<!-- metodologia.4.barra.noescano -->
No puede ocupar escaño

<!-- metodologia.4.barra.colectiva -->
Voz colectiva o anónima

<!-- metodologia.4.barra.laguna -->
Laguna nuestra

<!-- metodologia.4.tabla -->
La vinculación, cámara por cámara

<!-- instituciones.parlamento.peso -->
archivo de ⟦pais.<iso>.csv⟧

<!-- paises.directorio.titulo -->
Las dieciséis cámaras

<!-- usar.columnas.col.columna -->
Columna

<!-- usar.columnas.col.tipo -->
Tipo

<!-- usar.columnas.col.definicion -->
Qué es

<!-- usar.columnas.col.disponibilidad -->
Cuánto se pudo llenar, cámara por cámara

<!-- usar.columnas.col.leyenda -->
Cada celda es una cámara, en el orden de la rejilla: cuanto más llena, más completa está la columna. Una celda vacía es una columna que esa cámara no trae.

> [nota de diseño] La disponibilidad no se mide siempre sobre lo mismo, y ninguna cifra va sin su denominador: las columnas de la sesión, sobre todas las filas; `speaker_raw` e `id_dep`, sobre los turnos de habla; las que se deducen del diputado (`speaker_name`, `sex`, `party`, `district`), sobre los turnos ya vinculados. La base va escrita junto a cada tira, y en la nota de cada celda.

<!-- usar.columnas.base.filas -->
de todas las filas

<!-- usar.columnas.base.habla -->
de los turnos de habla

<!-- usar.columnas.base.vinculadas -->
de los turnos vinculados a un diputado o diputada

<!-- usar.columnas.celda -->
⟦camara⟧: ⟦pct⟧ ⟦base⟧

## 2. Inicio (`/[lang]/`)

<!-- inicio.meta.titulo -->
ParlaIbero · Lo que se dijo en dieciséis cámaras iberoamericanas

<!-- inicio.meta.descripcion -->
Infraestructura de datos abierta: lo que se dijo en el pleno de 16 cámaras de América Latina, España y Portugal, 1976–2025. Con DOI y explorador.

> [nota de diseño] El build falla si la descripción resuelta supera 155 caracteres.

### 2.0 Franja de la AEI

<!-- ↺ comun.aei.corta -->
Proyecto PID2022-141706NB-C22 financiado por:

> [nota de diseño] Va seguida de la banda MICIU · Cofinanciado por la Unión Europea · AEI, como bloque indivisible bajo la cabecera y dentro del primer pantallazo.

### 2.1 La apertura

<!-- inicio.apertura.pregunta -->
¿Cuánto de lo que dicen los representantes en el pleno lo dicen diputadas?

> [nota de diseño] La pregunta va sola; la figura, debajo. Encima no hay línea-credencial, que baja tras la tesis.
>
> La figura tiene 16 series, una por cámara, con las décadas en el eje. El orden es fijo por década de entrada, nunca por valor. No hay selector de país ni ranking.
>
> Las cámaras con padrón sin auditar (AR, BR, CL, EC, PE) llevan otro trazo, rotulado en la leyenda. La nota emergente es `comun.fig.voz.hover`, en palabras.

<!-- inicio.apertura.figura.titulo -->
dieciséis cámaras, cada una contra sí misma, por década, en palabras.

<!-- inicio.apertura.figura.ejemplos -->
En Uruguay, el 0,25 % de las palabras en los ochenta; el 23,41 % en esta década. En Costa Rica, del 11,81 % en los noventa al 43,42 %. Siempre sobre palabras de diputados y diputadas con sexo conocido. No en todas sube, y la figura no lo esconde.

<!-- inicio.apertura.figura.salvedad -->
Mide voz, no presencia. El sexo lo asignamos nosotros, con más error en mujeres que en hombres; cinco cámaras sin revisión a mano se dibujan distinto. No ordena países.

<!-- ↺ comun.fig.datos --> [Descargar los datos de la figura]
<!-- inicio.apertura.figura.medidas --> [Ver turnos y oradoras]

> [nota de diseño] Los datos, en CSV y XLSX con su LÉAME, se descargan sin formulario. «Ver turnos y oradoras» abre las otras dos medidas sobre la misma figura. La exactitud por sexo y los padrones auditados van en Metodología, con su denominador.

<!-- inicio.tesis -->
Comparar democracias iberoamericanas por lo que se dijo en sus cámaras costaba una carrera académica por país. Ese coste ya está pagado.

> [nota de diseño] **«Infraestructura», subrayada (decisión del investigador, 2026-09-21).** Entre la tesis y su remate va la analogía del laboratorio, para que el remate CIERRE; y la familia, en el orden que él fijó: PELA-USAL, Latinobarómetro, ParlaMint y los demás. Siempre «infraestructura de datos», nunca «de investigación» (eso es una categoría administrativa). Sin tamaños y sin frecuencias de los proyectos ajenos. ⚠ La frase sobre PELA-USAL de Metodología sigue a su web (oir.org.es/pela): la revisa el investigador, que es de su instituto.

<!-- inicio.tesis.laboratorio -->
En las ciencias exactas, la infraestructura suele ser un laboratorio: nadie construye uno para cada experimento. En las ciencias sociales y humanas, son datos comparables: alguien los reúne y los armoniza una vez, y los demás parten de ahí.

<!-- inicio.tesis.familia -->
De esa familia son PELA-USAL, Latinobarómetro, ParlaMint y el Manifesto Project.

<!-- inicio.tesis.remate -->
Tres años de trabajo. Una descarga. Eso es lo que significa infraestructura.

<!-- inicio.credencial -->
16 cámaras · 1976–2025 · CC BY 4.0 · 16 DOI · Universidad de Salamanca · Harvard Dataverse

<!-- inicio.apertura.literatura -->
La pregunta tiene literatura (Bäck y Debus, 2019). Faltaba material para hacerla en dieciséis cámaras iberoamericanas con la misma unidad.

> [nota de diseño] La tesis está aprobada con «coste» y no se toca. La frase de la literatura va bajo la tesis, no entre la figura y la tesis, y no opone «Europa» a «aquí», porque España y Portugal están dentro del corpus.

### 2.2 ¿Qué hay, y desde cuándo?

<!-- inicio.cobertura.titulo -->
¿Qué hay, y desde cuándo?

<!-- inicio.cobertura.censal -->
Todo lo que había. No una muestra de lo que había.

> [nota de diseño] Rejilla de país por año, de 1976 a 2025. Cada fila enlaza a su ficha. Los huecos declarados se dibujan como papel con contorno y etiqueta. La ausencia nunca es un color de dato.

<!-- inicio.cobertura.rejilla -->
Tienen sesión 527 de las 800 celdas de cámara y año; el resto son años anteriores a cada serie o huecos declarados.

<!-- ↺ comun.fija.tono -->
El tono dice cuánto material hay, no cuánto se debate.

<!-- inicio.cobertura.busque -->
Busque su cámara.

<!-- ↺ comun.ausentes.entrada -->
Faltan cinco países. Conviene decir por qué.
<!-- ↺ comun.ausentes.regimen -->
**Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
<!-- ↺ comun.ausentes.bolivia -->
**Bolivia** — las publica sin digitalizar.
<!-- ↺ comun.ausentes.honduras -->
**Honduras** — publica resúmenes de lo discutido, no las intervenciones.
<!-- ↺ comun.ausentes.cierre -->
Un solo criterio: que exista registro del debate plenario en forma de discursos. Donde existe, está aquí.

### 2.3 ¿Quién ocupa el tiempo del pleno?

<!-- inicio.pleno.titulo -->
¿Quién ocupa el tiempo del pleno?

<!-- inicio.pleno.unidad -->
La unidad es el turno de palabra, tal como lo marca el propio Diario.

<!-- inicio.pleno.fragmento -->
«Sí, si es urgente hay que demostrarlo, porque ahí también viene el dinero para compra de frijol y la época de siembra no espera a que la Asamblea quiera o no quiera, así que ojala que la próxima semana cumplamos lo que nos corresponde como diputados.»

<!-- inicio.pleno.fragmento.pie -->
PCN · Asamblea Legislativa de El Salvador · 10 de agosto de 2018

> [nota de diseño] El fragmento es literal de `citas[SV]`, que usted aprobó. No se traduce en EN ni en PT, y «ojala» va sin tilde, como en el Diario.
>
> Se dibuja como cita con su pie; no lleva nombre. `citas[SV]` no trae las 16 columnas: la fila desplegada entera va en Metodología, desde `filas_ejemplo[SV]`, que es otra fila.
>
> Ningún campo `speaker_*` llega a `dist/`. La identificación completa queda a un clic, en el conjunto de Dataverse.

<!-- inicio.pleno.vinculacion -->
De 9.868.087 turnos de habla, en el 87,05 % sabemos qué diputado habla. Del resto, el 75,35 % es de quien no puede ocupar escaño —ministros, secretarios, invitados—; el 11,79 %, voz colectiva; el 12,86 %, laguna nuestra. Sin contar los dos primeros, el 98,12 %.

<!-- inicio.pleno.panama -->
En Panamá, el 30,68 % de los turnos de habla es de quien no puede ocupar escaño. Compare [por país], nunca desde la cifra agrupada.

> [nota de diseño] «por país» enlaza a la tabla de Metodología, apartado 4. Las etiquetas «bruta» y «efectiva» no aparecen en Inicio; viven en Metodología y en el glosario.

### 2.4 ¿Qué se dijo aquel día?

<!-- inicio.sesiones.titulo -->
¿Qué se dijo aquel día?

<!-- inicio.sesiones.entrada -->
seis sesiones que usted reconoce están aquí.

<!-- inicio.sesiones.lista -->
La admisión del juicio político a la presidenta de Brasil, con 1.780 filas. La investidura interrumpida por el asalto al Congreso español, con 28. La vacancia presidencial en Perú, con 481.

<!-- ↺ comun.fija.novalida -->
Que estén no valida su contenido.

<!-- inicio.sesiones.ausentes -->
Las dos del juicio político al presidente de Paraguay, no: caen en un hueco declarado.

> [nota de diseño] El componente lista los ocho eventos de `historicas.eventos`, con su país, su `⟦evento.*.fecha⟧`, su `que_paso` y sus `⟦evento.*.filas⟧`. Los dos de Paraguay se dibujan como hueco, no como error.
>
> SIN NOMBRES (directiva del 2026-09-21): los hechos se cuentan por cargo, país y fecha. La descripción de cada evento sale de las claves `eventos.*` (§1.10), ya en las tres lenguas.

<!-- inicio.sesiones.invitacion -->
Abra una: descargue ese país y búsquela por fecha [en el explorador].

<!-- ↺ comun.fija.citar_pasaje -->
Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.

### 2.5 Cuatro preguntas sin dueño

<!-- inicio.sindueno.titulo -->
Cuatro preguntas sin dueño

<!-- inicio.sindueno.entrada -->
La base no trae anotación. Aquí entra usted.

<!-- inicio.sindueno.tema -->
**Tema.** Existe el esquema del Comparative Agendas Project; falta un clasificador validado en dos lenguas.

<!-- inicio.sindueno.tono -->
**Tono.** Faltan clasificadores validados; en actas escaneadas, medir tono puede ser medir el escáner.

<!-- inicio.sindueno.posicion -->
**Posición.** Están el texto y el partido; falta el escalado y su validación humana.

<!-- inicio.sindueno.voto -->
**Voto.** Los recuentos del Diario son texto; las votaciones vienen de fuera.

> [nota de diseño] Cuatro cajas vacías con nombre. Sin iconos de funcionalidad. Contenido de `usos[].falta` y `_aportes.usos.cajas_vacias`.

### 2.6 Tres años de trabajo. Una descarga.

<!-- inicio.empezar.titulo -->
Tres años de trabajo. Una descarga.

<!-- inicio.empezar.entrada -->
Aquí las variables hay que construirlas.

<!-- ↺ comun.fija.formulario -->
Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.

<!-- inicio.empezar.salida1 -->
**Sin programar.** [Los datos de cada figura], sin formulario. O [El Salvador] en [el explorador]: 98 MB, de 2018 a 2025, con formulario.

<!-- inicio.empezar.salida2 -->
**Con R o Python básico.** [Un país], de 98 MB a 1,5 GB: filtros, conteos, series.

<!-- inicio.empezar.salida3 -->
**Con métodos de texto.** [Los dieciséis], 12,3 GB: embeddings, clasificación, grafos. Es donde hay que aprender, y es aprendible.

> [nota de diseño] Decidido por el investigador el 2026-09-21: las tres salidas se titulan por lo que la persona sabe hacer, como su escena 21; el tamaño del archivo va dentro de cada una.
>
> El aviso del formulario va ENCIMA de los tres enlaces. El título repite a propósito el remate de la tesis, como en el arco aprobado.

<!-- ↺ comun.fija.local -->
Se abre en su navegador; nada sale de su equipo.

<!-- ↺ comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

<!-- ↺ comun.fija.identificadores -->
Los identificadores son estables dentro de una edición, no entre ediciones.

<!-- inicio.empezar.cita -->
⟦coleccion.cita⟧
<!-- ↺ comun.cita.copiar --> [Copiar la cita]

> [nota de diseño] La licencia ya va en la línea-credencial y en el pie. Se suprime el cierre «Su próxima comparación empieza…», que era un eslogan. Las versiones mínimas de navegador van en «Usar los datos».

---

## 3. Países · índice (`/[lang]/paises/`)

<!-- paises.meta.titulo --> Países · ParlaIbero
<!-- paises.meta.descripcion --> Qué hay de cada cámara, año por año: cobertura, huecos declarados, sesiones, filas y DOI de los 16 corpus de ParlaIbero.

<!-- paises.titulo -->
¿Qué hay, y desde cuándo?

<!-- paises.entradilla -->
Una fila por cámara y una columna por año, de 1976 a 2025: de 800 celdas, 527 tienen al menos una sesión. Cada fila abre la ficha de su país.

<!-- paises.leyenda.titulo -->
Cómo leer la rejilla

<!-- paises.leyenda.con_sesion -->
Con tono: ese año hay al menos una sesión en la base. No quiere decir que estén todas.

<!-- paises.leyenda.hueco -->
Con contorno y etiqueta: hueco declarado. Son años dentro de la serie que el repositorio de la cámara no tiene.

<!-- paises.leyenda.anterior -->
Vacía: año anterior al inicio de la serie de esa cámara.

<!-- paises.leyenda.tono -->
El tono dice cuántos turnos de habla hay ese año. Los cortes van impresos junto a la escala.

> [nota de diseño] Los cortes los imprime el build con ⟦rejilla.umbrales⟧.

<!-- paises.leyenda.no_significa -->
El tono dice cuánto material hay, no cuánto se debate. La ausencia nunca lleva color.

<!-- ↺ comun.fig.pestanas --> [Gráfico] [Tabla] [Datos]

<!-- paises.tabla.pie -->
Edición depositada: lo que devuelve cada DOI. No todas las filas son habla; por eso van las dos columnas.

<!-- paises.tabla.col.pais --> País
<!-- paises.tabla.col.camara --> Cámara
<!-- paises.tabla.col.diario --> Diario
<!-- paises.tabla.col.periodo --> Periodo
<!-- paises.tabla.col.anos --> Años con sesión
<!-- paises.tabla.col.huecos --> Huecos declarados
<!-- paises.tabla.col.sesiones --> Sesiones
<!-- paises.tabla.col.filas --> Filas
<!-- paises.tabla.col.habla --> Turnos de habla
<!-- paises.tabla.col.doi --> DOI

> [nota de diseño] Celdas de la tabla: `⟦pais.<iso>.nombre⟧` · `.camara` · `⟦pais.<iso>.diario⟧` · `.inicio`–`.fin` · `⟦pais.<iso>.anos_con_sesion⟧` · `⟦pais.<iso>.huecos_rangos⟧` · `.sesiones.P` · `.filas.P` · `⟦pais.<iso>.habla.L⟧` · `.doi`.
>
> La columna «Turnos de habla» hace falta porque en República Dominicana más de la mitad de las filas no son habla.
>
> Las filas de los ausentes van bajo un filete, con nombre y motivo y sin cifras.

<!-- ↺ comun.ausentes.entrada -->
Faltan cinco países. Conviene decir por qué.
<!-- ↺ comun.ausentes.regimen -->
**Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
<!-- ↺ comun.ausentes.bolivia -->
**Bolivia** — las publica sin digitalizar.
<!-- ↺ comun.ausentes.honduras -->
**Honduras** — publica resúmenes de lo discutido, no las intervenciones.
<!-- ↺ comun.ausentes.cierre -->
Un solo criterio: que exista registro del debate plenario en forma de discursos. Donde existe, está aquí.

<!-- paises.descarga.boton -->
[Descargar los datos de la figura]
<!-- ↺ comun.fija.sin_formulario -->
Sin formulario: son datos agregados.

<!-- paises.aviso.titulo -->
Antes de comparar países
<!-- paises.aviso.comparabilidad -->
La legislatura no significa lo mismo en dos países. Se comparan tasas dentro de un país, a lo largo del tiempo. Entre países, solo con el denominador a la vista.

---

## 4. Ficha de país · plantilla única (`/[lang]/paises/[iso]/`)

> [nota de diseño] Decisiones para que la frase concuerde sin auditar:
> - No hay artículo delante de `⟦camara⟧`.
> - Ningún rótulo lleva recuento.
> - «Autoría» vale para un autor o para varios.
> - Las frases de huecos y de sesiones sin habla sirven en singular y en plural.
> - «Cifras» es una lista tipográfica, con la cifra en mono abriendo la línea; no es prosa corrida.

<!-- ficha.meta.titulo --> ⟦pais.<iso>.nombre⟧ · ParlaIbero
<!-- ficha.titulo --> ⟦pais.<iso>.nombre⟧
<!-- ficha.subtitulo --> ⟦pais.<iso>.camara⟧ · ⟦pais.<iso>.inicio⟧–⟦pais.<iso>.fin⟧

<!-- ficha.tareas.titulo -->
Hoy puede

<!-- ficha.tareas.buscar -->
**Buscar** en este pleno, de ⟦pais.<iso>.inicio⟧ a ⟦pais.<iso>.fin⟧, por texto, fecha, partido, legislatura y diputado.
<!-- ficha.tareas.buscar.huecos -->
(salvo ⟦pais.<iso>.huecos_rangos⟧)

> [nota de diseño] La salvedad se pinta solo si hay huecos y se inserta tras el año final. Filtros comprobados en el código del explorador: Legislatura, Tipo de sesión, Sexo, Partido, Diputado/a y Distrito.

<!-- ficha.tareas.sesion -->
**Abrir una sesión que reconoce:** ⟦evento.<iso>-<fecha>.fecha⟧. ⟦evento.<iso>-<fecha>.que_paso⟧ Que esté no valida su contenido.

> [nota de diseño] Una línea por evento con `presente = sí` (Ecuador tiene dos). Si el país no tiene evento, la tarea no se pinta: hoy, diez de las dieciséis fichas.

<!-- ficha.tareas.sesion_ausente -->
**Una sesión que no encontrará:** ⟦evento.<iso>-<fecha>.fecha⟧. ⟦evento.<iso>-<fecha>.que_paso⟧

> [nota de diseño] Solo para eventos con `presente = no`: hoy, Paraguay.

<!-- ficha.tareas.exportar -->
**Exportar con su cita.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.

<!-- ficha.tareas.exportar.sin_numero -->
En este archivo, solo el ⟦pais.<iso>.disp.session_number⟧ de las filas lleva número de sesión: aquí el pasaje se localiza por fecha.

> [nota de diseño] Se pinta si la disponibilidad de `session_number` en ese país (`columnas[].disponibilidad`) queda por debajo del umbral que fije el build. Hoy afectaría a Panamá y Paraguay.
>
> Corrige el borrador, que decía que Panamá «no imprime» número: lo imprime en pocas filas.

<!-- ↺ comun.fija.local -->
Se abre en su navegador; nada sale de su equipo.
<!-- ↺ comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

<!-- ficha.que_es.titulo -->
Qué es
<!-- ficha.que_es.texto -->
El pleno de esta cámara, turno por turno, según su registro oficial: ⟦pais.<iso>.diario⟧.
<!-- ficha.que_es.sin_huecos -->
Hay sesión todos los años, de ⟦pais.<iso>.inicio⟧ a ⟦pais.<iso>.fin⟧.
<!-- ficha.que_es.con_huecos -->
De ⟦pais.<iso>.inicio⟧ a ⟦pais.<iso>.fin⟧, faltan ⟦pais.<iso>.huecos_rangos⟧: el repositorio de la cámara no los tiene.
<!-- ↺ comun.fija.diario -->
Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

<!-- ficha.fuente.titulo -->
De dónde sale
<!-- ficha.fuente.texto -->
⟦pais.<iso>.fuente⟧
Cómo se transformó, paso a paso, lo cuenta el informe del proceso que acompaña al conjunto. [Leer el informe en Dataverse]

> [nota de diseño] Directiva del 2026-09-21: la ficha NO reproduce los textos depositados (nombran a personas como evidencia). Los ENLAZA en la página del conjunto en Dataverse, con el aviso del formulario encima.
>
> Como `limitations`, trae cifras dentro del texto depositado, así que `audit-cifras` necesita la misma exención.

<!-- ficha.cifras.titulo -->
Cifras
<!-- ficha.cifras.sesiones -->
⟦pais.<iso>.sesiones.P⟧ sesiones, en ⟦pais.<iso>.anos_con_sesion⟧ de ⟦pais.<iso>.anos_periodo⟧ años.
<!-- ficha.cifras.sin_habla -->
Sin ningún turno de habla, ⟦pais.<iso>.sesiones_sin_habla⟧.

> [nota de diseño] Solo si el valor es mayor que cero.

<!-- ficha.cifras.filas -->
⟦pais.<iso>.filas.P⟧ filas; ⟦pais.<iso>.habla.L⟧ son turnos de habla.
<!-- ficha.cifras.vinculacion -->
En el ⟦pais.<iso>.bruta⟧ de esos turnos sabemos qué diputado habla; otro ⟦pais.<iso>.noescano⟧ es de quien no puede ocupar escaño. Sin contar estos ni las voces colectivas, el ⟦pais.<iso>.efectiva⟧.
<!-- ficha.cifras.enlace --> [Ver cómo se calcula]

<!-- ficha.voz.titulo -->
Voz femenina, en palabras
<!-- ficha.voz.texto -->
Palabras de diputadas por cada cien de diputados y diputadas con sexo conocido, por década. Mide voz, no escaños.

> [nota de diseño] La serie se pinta con `⟦pais.<iso>.palF.<década>.pct⟧`, y la nota emergente con `.n` de `.den` palabras. Las décadas sin dato no se dibujan. La serie es clave C, y el rótulo de procedencia lo genera el build.

<!-- ficha.voz.salvedad.auditado -->
El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el 97,43 % de las mujeres y en el 99,54 % de los hombres, medido en conjunto sobre once padrones —las listas de diputados— revisados a mano. Este es uno de ellos.
<!-- ficha.voz.salvedad.sin_auditar -->
El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Ese error se midió en once padrones —las listas de diputados— revisados a mano. Este no está entre ellos, y su serie se dibuja distinto.

> [nota de diseño] La variante se elige con `⟦pais.<iso>.sexo_auditado⟧`. Sin auditar: AR, BR, CL, EC y PE.

<!-- ficha.voz.enlace --> [Ver turnos y oradoras]

<!-- ficha.antes.titulo -->
Antes de usarlo
<!-- ficha.antes.intro -->
Este corpus declara ⟦pais.<iso>.n_limitaciones⟧ limitaciones, medidas una a una. Están en el documento «Limitaciones conocidas» del conjunto, en inglés, español y portugués. [Leer las limitaciones en Dataverse]

> [nota de diseño] Directiva del 2026-09-21: la ficha NO reproduce los textos depositados (nombran a personas como evidencia). Los ENLAZA en la página del conjunto en Dataverse, con el aviso del formulario encima.

<!-- ficha.paquete.titulo -->
El conjunto de datos
<!-- ficha.paquete.texto -->
17 archivos: las intervenciones; el padrón; LÉAME, diccionario de datos, limitaciones conocidas e informe del proceso, en inglés, español y portugués; y, para programas, cifras del corpus, metadatos y métodos de vinculación.
<!-- ficha.paquete.peso -->
Las intervenciones pesan ⟦pais.<iso>.csv⟧. No las abra en una hoja de cálculo: puede cortar filas y textos. Al elegir el archivo, el explorador le dice cuánta memoria necesita.

> [nota de diseño] Se suprime «el explorador pide esa misma memoria libre», que se deducía de una medida en Node sobre tres países. Lo que queda está comprobado en el código del explorador: al elegir el archivo muestra «Memoria necesaria: unos…».

<!-- ↺ comun.fija.formulario -->
Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.
<!-- ficha.descarga.boton --> [Descargar en Dataverse]
<!-- ficha.descarga.explorador --> [Abrir el explorador]

<!-- ficha.credito -->
Autoría: ⟦pais.<iso>.autores⟧. DOI: ⟦pais.<iso>.doi⟧. Edición ⟦pais.<iso>.version⟧. Licencia ⟦pais.<iso>.licencia⟧.
<!-- ↺ comun.fija.identificadores -->
Los identificadores son estables dentro de una edición, no entre ediciones.
<!-- ficha.cita.titulo -->
Cómo citar
<!-- ficha.cita.texto -->
⟦pais.<iso>.cita⟧
<!-- ↺ comun.cita.copiar --> [Copiar la cita]

### Ejemplo resuelto · Uruguay

> [nota de diseño] Solo sirve para comprobar la concordancia; no es copy. Los valores son los de hoy, leídos en `parlaibero.data.json` y `fuentes_parlaibero.json`.

- Uruguay / Cámara de Representantes · 1985–2025.
- **Buscar** en este pleno, de 1985 a 2025, por texto, fecha, partido, legislatura y diputado.
- No tiene sesión reconocible, así que quedan dos tareas bajo «Hoy puede».
- El pleno de esta cámara, turno por turno, según su registro oficial: Diario de Sesiones. Hay sesión todos los años, de 1985 a 2025.
- De dónde sale: «Diarios de Sesiones de la Cámara de Representantes, Parlamento del Uruguay. […] Legislaturas XLII-L (1985-2025). PDF.»
- 2.813 sesiones, en 41 de 41 años. Sin ningún turno de habla, 4.
- 424.097 filas; 421.284 son turnos de habla.
- En el 96,41 % de esos turnos sabemos qué diputado habla; otro 0,81 % es de quien no puede ocupar escaño. Sin contar estos ni las voces colectivas, el 97,68 %.
- Serie, ochenta: 0,25 % · 31.342 de 12.733.594 palabras. Esta década: 23,41 % · 4.441.241 de 18.967.908 palabras.
- Salvedad auditada: «…Acertamos en el 97,43 % de las mujeres y en el 99,54 % de los hombres, medido en conjunto sobre once padrones —las listas de diputados— revisados a mano. Este es uno de ellos.»
- Las intervenciones pesan 929 MB (unidad por fijar; anexo B, nota 2).
- Autoría: Rodrigues-Silveira, Rodrigo; Gutiérrez Oria, Óscar. DOI: 10.7910/DVN/KI1AOC. Edición v2.0. Licencia CC BY 4.0.

### Ejemplo resuelto · Brasil

- Brasil / Câmara dos Deputados · 2003–2025.
- **Abrir una sesión que reconoce:** 17 de abril de 2016. La Cámara admite el proceso de destitución de la presidenta de la República. Que esté no valida su contenido.
- …según su registro oficial: Notas taquigráficas (Íntegra das sessões). Hay sesión todos los años, de 2003 a 2025.
- 7.731 sesiones, en 23 de 23 años. Sin ningún turno de habla, 898.
- 1.657.113 filas; 1.649.698 son turnos de habla.
- En el 98,04 % de esos turnos sabemos qué diputado habla; otro 1,07 % es de quien no puede ocupar escaño. Sin contar estos ni las voces colectivas, el 99,10 %.
- Serie, dos mil: 8,16 % · 6.122.269 de 75.060.136 palabras. Esta década: 20,73 % · 6.696.176 de 32.303.978 palabras.
- Salvedad sin auditar: «…Ese error se midió en once padrones —las listas de diputados— revisados a mano. Este no está entre ellos, y su serie se dibuja distinto.»
- Las intervenciones pesan 1457 MB.
- Autoría: Rodrigues-Silveira, Rodrigo. DOI: 10.7910/DVN/VTXNW3. Edición v2.0. Licencia CC BY 4.0.

> [nota de diseño] Trampas de concordancia vistas al resolver:
> 1. `version` trae «v2.0». Por eso la plantilla dice «Edición ⟦version⟧» y no «Versión v…».
> 2. Guatemala: `fin` es 2026 y la rejilla cierra en 2025. `anos_con_sesion` es 26 y `span` es 27. El par «años con sesión de años del periodo» debe salir de la MISMA ventana.
> 3. Ecuador, al revés: `anos_con_sesion_todos` es 48 y `span` es 47.
> 4. Ecuador: `paises[].habla` es 1.280.970 (clave C) y `linkage.speech_rows` es 1.280.822 (clave L). La ficha usa L, que corresponde a lo depositado.
> 5. República Dominicana: 101.381 de 229.325 filas son habla. De ahí «filas… son turnos de habla», nunca «intervenciones».
> 6. Ecuador y Panamá: `⟦camara⟧` trae la sucesión de nombres de la cámara. «Esta cámara» sigue valiendo.

---

## 5. Metodología (`/[lang]/metodologia/`)

> [nota de diseño] Índice lateral pegajoso. Banda fija con los dos botones y sus dos avisos siempre visibles, para que el formulario quede anunciado antes de cualquier clic.
>
> Extensión: unas 1.800 palabras de texto para el lector. El recuento de decisiones no aparece en ningún lugar de la página.

<!-- metodologia.meta.titulo -->
Metodología · ParlaIbero
<!-- metodologia.meta.descripcion -->
Qué es una fila, quién habla, cuánto falla la variable de sexo y qué no afirman los 16 corpus. Cada apartado lleva a los datos y al explorador.

### Índice lateral

<!-- metodologia.indice.titulo --> En esta página
<!-- metodologia.indice.1 --> Qué es una fila
<!-- metodologia.indice.2 --> De la fuente a la tabla
<!-- metodologia.indice.3 --> Habla y no habla
<!-- metodologia.indice.4 --> Quién habla
<!-- metodologia.indice.5 --> Sexo y auditoría de género
<!-- metodologia.indice.6 --> Páginas escaneadas
<!-- metodologia.indice.7 --> Validación y revisión
<!-- metodologia.indice.8 --> Lo que no afirma
<!-- metodologia.indice.9 --> Ediciones y reproducibilidad
<!-- metodologia.indice.10 --> Documentación completa

### Banda fija

<!-- ↺ comun.nav.cta.descargar --> [Descargar los datos]
<!-- ↺ comun.fija.formulario -->
Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.
<!-- ↺ comun.nav.cta.explorador --> [Abrir el explorador]
<!-- ↺ comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

> [nota de diseño] [Descargar los datos] lleva a las tres salidas de `/[lang]/usar/`, no directamente a Dataverse. [Abrir el explorador] abre `rodrodr.github.io/parlaibero-explorer/` en otra pestaña.

### Cabecera

<!-- metodologia.titulo -->
Metodología

<!-- metodologia.subtitulo -->
Qué hay en cada fila, qué se midió y qué no se afirma.

<!-- metodologia.entradilla.1 -->
Esta página no recorre el proceso etapa por etapa. Responde lo que preguntaría un revisor, con cada límite en la misma frase que su cifra.

<!-- metodologia.entradilla.2 -->
Cada apartado termina en algo que usted puede comprobar con sus manos.

<!-- metodologia.familia -->
ParlaIbero es una infraestructura de datos para las ciencias sociales y humanas. PELA-USAL encuesta a parlamentarios de países de América Latina con un cuestionario estándar, adaptado a cada país. Latinobarómetro aplica un mismo estudio de opinión pública en los países de la región. ParlaMint publica, con una misma codificación, debates de parlamentos de Europa. El Manifesto Project codifica con un mismo esquema los programas electorales de los partidos. Aquí el material es lo que se dijo en el pleno: la misma fila y las mismas columnas en las dieciséis cámaras.

<!-- metodologia.novedad -->
A ⟦fecha_busqueda⟧ no hemos localizado otro corpus de varios países de América Latina con el texto íntegro y cada orador identificado como diputado. Existen ParlaMint, que cubre España y Portugal; ParlSpeech, que cubre España; y ParlEE. En la región, padrones sin texto, discursos presidenciales y corpus nacionales.

> [nota de diseño] La novedad fechada vive aquí porque no cabe en las 700 palabras de Inicio (anexo A y duda 4). Sin la fecha, el bloque no se pinta.

### 1

<!-- metodologia.1.titulo -->
Qué es una fila

<!-- metodologia.1.p1 -->
La unidad es el turno de palabra, tal como lo marca el propio Diario. Cada turno es una fila.

<!-- metodologia.1.p2 -->
Lleva la designación del orador exactamente como se imprimió, el texto íntegro, la sesión y su posición en ella. Si el orador pudo identificarse, lleva además su identificador en el padrón, con nombre, sexo, partido y distrito. Son 16 columnas, las mismas en las dieciséis cámaras.

<!-- metodologia.1.p3 -->
El texto no está resumido ni lematizado. El orden se conserva. Y el orden es información.

<!-- metodologia.1.p4 -->
El Diario no es la sesión: es lo que cada cámara publicó de ella. La mediana va de 11 palabras por turno en Uruguay a 92 en El Salvador. Esa distancia mide cómo transcribe cada cámara, no cuánto se debate.

> [nota de diseño] Junto al texto va una fila real desplegada en sus 16 columnas: `filas_ejemplo[SV]` (SV001005800070), aprobada. NO es la fila del frijol, que está en `citas[SV]` y no trae todas las columnas.
>
> Se ven partido, cámara y fecha. `speaker_name` y `speaker_raw` no llegan a `dist/`; la identificación completa queda a un clic, en Dataverse.

<!-- metodologia.1.pruebelo -->
Pruébelo. Descargue El Salvador, el archivo más pequeño (98 MB; cubre de 2018 a 2025), y ábralo en el explorador. [Descargar los datos] · [Abrir el explorador]

### 2

<!-- metodologia.2.titulo -->
De dieciséis tradiciones tipográficas a una tabla

<!-- metodologia.2.p1 -->
Cada cámara imprime a su manera quién toma la palabra: «El señor APELLIDO:» en una, «O SR. NOME (partido - estado) –» en otra. Cinco pasos las llevan a una sola tabla.

<!-- metodologia.2.paso1 -->
**De la fuente al texto fiel.** PDF digital, página escaneada, HTML, XML o Word: primero se extrae el texto sin tocar nada. Después se limpian cabeceras, folios y palabras cortadas.

<!-- metodologia.2.paso2 -->
**Del texto a los turnos.** Cada marcador de orador se localiza con las fórmulas de esa cámara y de esa época. Un marcador sin reconocer entierra un turno dentro del anterior, y ningún recuento lo ve. Por eso uno solo detiene el etiquetado de esa sesión.

<!-- metodologia.2.paso3 -->
**De los oradores a los diputados.** Cada designación impresa se coteja con el padrón: 37.523 personas en 70.570 tramos de mandato, en las dieciséis cámaras.

<!-- metodologia.2.paso4 -->
**Del padrón al esquema común.** La fila recibe partido, distrito y sexo según el tramo que cubre su fecha.

<!-- metodologia.2.paso5 -->
**Del esquema al depósito.** Cada país se publica con 17 archivos —datos, padrón y documentación—, generados por un solo programa, nunca a mano.

<!-- metodologia.2.p2 -->
Las filas las produce código determinista. El modelo de lenguaje escribió ese código y reconoció las páginas escaneadas más antiguas.

> [nota de diseño] Los cinco pasos van como esquema horizontal numerado (vertical en móvil), sin iconos. No hay diagrama de trece etapas. La frase del paso 2 está comprobada en la monografía, §5.3: un solo marcador residual detiene el etiquetado.

<!-- metodologia.2.pruebelo -->
Pruébelo. En la ficha de su país, vea de qué fuente y de qué formato salió su texto. [Ver los países]

### 3

<!-- metodologia.3.titulo -->
Habla y no habla

<!-- metodologia.3.p1 -->
Nada se borra del Diario.

<!-- metodologia.3.p2 -->
La carátula, el sumario y el pase de lista se conservan en su lugar, como primera fila de la sesión: 51.741 filas en las dieciséis cámaras.

<!-- metodologia.3.p3 -->
Llevan la marca `dm_speech = 0`. También la llevan los recuentos de votación nominal, la narración y los documentos leídos, donde el propio Diario demuestra que no son habla: 222.975 filas en total.

<!-- metodologia.3.p4 -->
La marca es asimétrica, a propósito. Un `0` se pone solo donde está probado. Un `1` no significa «habla verificada»: significa «no está demostrado que no sea habla».

<!-- metodologia.3.p5 -->
La consecuencia se declara. En Argentina, Uruguay, México, Costa Rica, Ecuador, República Dominicana y Guatemala, parte de lo leído en voz alta sigue dentro del turno de quien lo lee. Allí, el recuento de palabras de quien preside queda inflado.

<!-- metodologia.3.p6 -->
Filtrar le corresponde a usted. Decidir por usted, no.

<!-- metodologia.3.pruebelo -->
Pruébelo. En el explorador, la primera entrada de cada sesión es «Encabezado y sumario de la sesión». Ahí está el pase de lista. [Abrir el explorador]

### 4

<!-- metodologia.4.titulo -->
Quién habla

<!-- metodologia.4.p1 -->
El 87,05 % de los turnos de habla lleva un diputado identificado: 8.590.210 de 9.868.087. Es la vinculación bruta.

<!-- metodologia.4.p2 -->
La efectiva es el 98,12 %. Descuenta del denominador dos clases de turnos, y solo dos. Los de quien no puede ocupar escaño: ministros, secretarios administrativos, relatores, invitados. Y los que el Diario hace inatribuibles, como «Varios señores diputados».

<!-- metodologia.4.p3 -->
No descuenta a quien preside sin nombre. Quien preside es diputado: si su identidad no se recuperó, es laguna nuestra.

<!-- metodologia.4.p4 -->
Quedan sin diputado 1.277.877 turnos de habla. 962.878, el 75,35 %, son de quien no puede ocupar escaño. 150.714, el 11,79 %, voz colectiva o anónima. 164.285, el 12,86 %, laguna nuestra.

<!-- metodologia.4.p5 -->
La distancia entre las dos tasas es propiedad del Diario, no del procesamiento. En Panamá, el 30,68 % de los turnos de habla es de quien no puede ocupar escaño, sobre todo la Secretaría, que lee; en Uruguay, el 0,81 %. Por eso la comparación entre países parte de la tabla por cámara, no de la cifra agrupada.

> [nota de diseño] Bajo p4 va una barra apilada de las tres partes (`BarraPleno`). Bajo p5 va una tabla de 16 filas con bruta, efectiva y «no pueden ocupar escaño» por cámara (`linkage[]`), sin orden de mérito: se mantiene el orden fijo de la rejilla.

<!-- metodologia.4.pruebelo -->
Pruébelo. Busque su cámara: las dos tasas, y lo que descuenta cada una. [Descargar los datos de la figura]

### 5

<!-- metodologia.5.titulo -->
El sexo es una variable derivada

<!-- metodologia.5.p1 -->
Ningún Diario declara el sexo de quien habla. La columna `sex` se deriva en el padrón: de un registro oficial donde existe; si no, del nombre de pila o del tratamiento. Cada valor lleva su procedencia en `sex_source`.

<!-- metodologia.5.p2 -->
Su exactitud es del 98,98 %, medida contra la revisión humana exhaustiva de once padrones completos, 38.372 filas. En hombres, el 99,54 %; en mujeres, el 97,43 %. El error es 5,6 veces más probable en mujeres. La cifra caracteriza el procedimiento, no cada corpus.

<!-- metodologia.5.p3 -->
Los otros cinco —Argentina, Brasil, Chile, Ecuador y Perú— no están auditados, y en las figuras se dibujan distinto. No son iguales entre sí. Brasil, Chile y Perú toman el sexo de un registro oficial; en Ecuador, todo valor se infiere del nombre o del tratamiento. Quien necesite precisión restringe `sex_source` a `manual`, `official_registry` y `given_name`; eso deja fuera a Ecuador entero.

<!-- metodologia.5.subtitulo -->
La auditoría de género

<!-- metodologia.5.p4 -->
Los defectos de extracción no son neutrales. Cuando un patrón falla, quien desaparece es, con más frecuencia, una mujer.

<!-- metodologia.5.p5 -->
En Costa Rica, el patrón reconocía «PRESIDENTE» y no «PRESIDENTA». El verificador había heredado el mismo léxico e informaba cero residuos. Los totales cuadraban. Los turnos de las mujeres que presidían quedaban dentro del turno anterior.

<!-- metodologia.5.p6 -->
En Brasil se pudo medir al corregir el patrón, antes de volver a procesar el corpus. Las mujeres eran el 8,7 % de los turnos y el 47,8 % de los turnos recuperados.

<!-- metodologia.5.p7 -->
El patrón se escribe primero en masculino. Las formas femeninas son más variadas y se rompen más con el salto de línea. El genérico «Presidente» esconde a quien preside. De ahí la regla: «PRESIDENTA» no puede ser un hombre; «PRESIDENTE» no dice nada.

<!-- metodologia.5.p8 -->
No todo fue en la misma dirección, y se dice: en Argentina, una corrección movió filas de mujeres a hombres. La afirmación que queda no depende de la dirección: cada corrección acercó el corpus al Diario.

> [nota de diseño] La codificación gráfica de «padrón sin auditar» es la de la figura de apertura. No aparecen nombres de personas, aunque la monografía los traiga. Si no quiere publicar las dos cifras de Brasil, medidas sobre una edición de trabajo, p6 se elimina sin dañar el apartado.

<!-- metodologia.5.pruebelo -->
Pruébelo. Descargue los datos de la figura de apertura: palabras, turnos y oradoras, por cámara y década. Sin formulario. [Descargar los datos de la figura]

### 6

<!-- metodologia.6.titulo -->
El reconocimiento óptico: lo que falló

<!-- metodologia.6.p1 -->
Ecuador entero es papel escaneado. También los años más antiguos de Uruguay, Panamá y Paraguay, y siete sesiones dominicanas.

<!-- metodologia.6.p2 -->
Parte de esas páginas las leyó un modelo de visión, que a veces escribió texto propio dentro del Diario: su instrucción, comentarios y, lo peor, líneas en español traducidas al inglés.

<!-- metodologia.6.p3 -->
Se retiraron 1.949 fragmentos en Uruguay, Ecuador, Panamá y República Dominicana. La clase está acotada, no cerrada: el modelo improvisa una redacción distinta cada vez, y lo que tradujo no se repara borrando.

<!-- metodologia.6.p4 -->
Donde el escaneado cortó el margen, no se reconstruyó nada. Lo que no está en el píxel no se inventa.

<!-- metodologia.6.pruebelo -->
Pruébelo. Lea las limitaciones declaradas de Ecuador, el único corpus escaneado de principio a fin. [Ver la ficha de Ecuador]

### 7

<!-- metodologia.7.titulo -->
Validación y revisión humana

<!-- metodologia.7.p1 -->
Aquí hay dos cosas distintas, y cada una lleva su rótulo entero.

<!-- metodologia.7.rotulo -->
Fuga del filtro PASS/FLAG: 0,5 % 0,09–2,78.

<!-- metodologia.7.p2 -->
La muestra: 300 filas al azar en cada uno de quince países. Un filtro determinista separa las filas trivialmente correctas —PASS— del resto —FLAG—, que pasa a revisión humana. La fuga es lo que el filtro aprueba y no debía: 1 de 200 filas aprobadas y releídas a mano.

<!-- metodologia.7.p3 -->
Se ejecutó el 31 de julio de 2026, antes de volver a procesar el corpus del que sale la edición publicada, y sin Ecuador. No es la tasa de error del archivo que usted descarga. No sostiene la frase «los dieciséis validados».

<!-- metodologia.7.p4 -->
Lo segundo: leímos los dieciséis archivos fila a fila, antes y después de volver a procesarlos. Esa lectura encontró lo que ningún control había visto: cabeceras y folios incrustados en mitad de las frases, marcadores de orador partidos una palabra por línea.

<!-- metodologia.7.p5 -->
«Revisado» no significa «sin defectos conocidos». Los conocidos están medidos y declarados, país por país.

> [nota de diseño] El rótulo va como ficha destacada en mono. El componente `Cifra` de `validacion.fuga.ic` imprime dentro del marcador que el intervalo es de Wilson y su nivel de confianza; el copy no lo teclea. Rótulo, p2 y p3 son un bloque indivisible: la cifra nunca se reutiliza sin ellos.

<!-- metodologia.7.pruebelo -->
Pruébelo. Abra las limitaciones conocidas de su cámara. [Ver los países]

### 8

<!-- metodologia.8.titulo -->
Lo que el corpus no afirma, y cómo comparar

<!-- metodologia.8.p1 -->
Esta edición entrega la evidencia material: lo dicho, estructurado, atribuido y medido. No trae tema, tono, posición ideológica ni voto.

<!-- metodologia.8.p2 -->
No afirma que un `dm_speech = 1` sea habla verificada, ni que quien preside esté identificado en cada fila, ni que las décadas escaneadas estén libres de errores.

<!-- metodologia.8.p3 -->
La columna `legislature` no es comparable entre países: es lo que imprime cada Diario, sea un período constitucional, un año o un semestre. Las claves comparables son `id_session` y la fecha.

<!-- metodologia.8.p4 -->
Cómo comparar: tasas dentro de un país, contra sí mismo, en el tiempo. Nunca volúmenes entre países. Y el denominador, a la vista.

<!-- metodologia.8.p5 -->
La cobertura es un censo de lo que cada cámara publicó, con los huecos nombrados: 527 de 800 celdas de cámara y año entre 1976 y 2025. De 21 países faltan cinco, y no al azar.
<!-- ↺ comun.ausentes.prosa -->
Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.

<!-- metodologia.8.pruebelo -->
Pruébelo. Lea el diccionario de datos: dice, columna por columna, qué es comparable y qué no. [Leer el diccionario]

### 9

<!-- metodologia.9.titulo -->
Ediciones, identificadores y reproducibilidad

<!-- metodologia.9.p0 -->
Quien construye sobre datos ajenos necesita saber qué se mueve y qué no. Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número.

<!-- metodologia.9.p1 -->
quince de los dieciséis conjuntos van por la edición v2.0; Perú (v1.0).

> [nota de diseño] `dois.rezagados` lo genera el build desde `dois.conjuntos[].version`. Hoy diría «Perú, por la v1.0». Así la frase no se rompe el día que Perú cambie de edición.

<!-- metodologia.9.p2 -->
Los identificadores `id_session` e `id_int` son estables dentro de una edición, no entre ediciones. Se derivan de la posición, y añadir una sesión desplaza los que vienen después. Cite la edición.

<!-- metodologia.9.p3 -->
Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

<!-- metodologia.9.p4 -->
La reproducibilidad tiene una frontera, y está medida. Desde el texto etiquetado en adelante —vinculación, fusión, esquema y documentación— todo es determinista. Se comprobó ejecutando dos veces las dieciséis cadenas y comparando los archivos.

<!-- metodologia.9.p5 -->
Lo anterior —reconocimiento óptico, extracción, limpieza, etiquetado— queda fuera de esa garantía. Las páginas reconocidas y las decisiones humanas de vinculación se guardan congeladas, como entrada. Quien cite la reproducibilidad de este corpus debe decir desde dónde.

<!-- metodologia.9.pruebelo -->
Pruébelo. Elija su país y copie su cita, con su edición y su DOI. [Ver los países]

### 10

<!-- metodologia.10.titulo -->
La documentación completa

<!-- metodologia.10.p1 -->
Esta página resume. Lo completo:

<!-- metodologia.10.monografia -->
La monografía, en inglés: fuentes, padrones, proceso, problemas etapa por etapa, auditoría de género y tablas por país. [Leer la monografía (en inglés)]

<!-- metodologia.10.registro -->
El registro de decisiones, en español: lo que se hizo, la alternativa descartada, la evidencia medida y la consecuencia. Una decisión superada se marca y se enlaza; no se borra. [Abrir el registro de decisiones]

<!-- metodologia.10.pais -->
Con cada país, en inglés, español y portugués: el LÉAME, el diccionario de datos, las limitaciones conocidas y el informe del proceso. [Ver los países]

<!-- metodologia.10.pruebelo -->
Pruébelo. Empiece por el diccionario de datos, aquí mismo, y siga con el archivo de El Salvador. [Leer el diccionario] · [Descargar los datos]

> [nota de diseño] El diccionario y las limitaciones se leen en el sitio, generados desde `columnas[]` y `limitations`. No se enlazan a Dataverse, porque allí pasarían por el formulario. Los dos primeros botones no tienen hoy destino público (duda 5): sin URL, no se pintan.

---

## 6. Usar los datos (`/[lang]/usar/`)

<!-- usar.meta.titulo --> Usar los datos · ParlaIbero
<!-- usar.meta.descripcion --> Por dónde empezar, qué hay en cada descarga, las columnas, el padrón, dos fragmentos de código y cómo citar los 16 corpus de ParlaIbero.

<!-- usar.titulo -->
Usar los datos

### 6.1 Por dónde empezar

<!-- usar.empezar.titulo -->
Por dónde empezar

<!-- usar.empezar.entrada -->
No es una matriz de encuesta. Elija por lo que ya sabe hacer.

<!-- usar.empezar.s1.titulo -->
Sin programar

<!-- usar.empezar.s1.texto -->
Abra El Salvador en el explorador. Busque en el texto completo; filtre por fecha, partido, legislatura o diputado; exporte con su cita. Es el país de prueba: 98 MB, y cubre solo de 2018 a 2025. O llévese los datos de una figura, en CSV y Excel, sin formulario.

[Abrir el explorador] [Descargar los datos de la figura]

<!-- usar.empezar.s2.titulo -->
Con R o Python básico

<!-- usar.empezar.s2.texto -->
El CSV de un país: de 98 MB a 1,5 GB. Filtros, conteos, series por año. Los dos fragmentos de abajo son esto y nada más.

[Ver los países]

<!-- usar.empezar.s3.titulo -->
Con métodos de texto

<!-- usar.empezar.s3.texto -->
El corpus completo: dieciséis descargas, una por país, 12,3 GB en total. La base no trae tema, tono, posición ni voto: aquí las variables hay que construirlas. Es donde hay que aprender, y es aprendible.

[Ver los dieciséis DOI]

<!-- usar.empezar.cierre -->
Dos grupos con la misma base pueden llegar a resultados distintos sin que ninguno se haya equivocado. No es un defecto: es lo que ocurre cuando las decisiones de análisis son suyas.

### 6.2 El camino, paso a paso

<!-- usar.camino.titulo -->
El camino, paso a paso

<!-- usar.camino.p1 -->
**Elija un país.** Si duda, El Salvador: es el archivo más pequeño.

> [nota de diseño] Debajo va la lista de las 16 cámaras, cada una con su peso (`⟦pais.<iso>.csv⟧`) y su enlace al DOI.

<!-- usar.camino.p2 -->
**Antes del clic.** Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. Los datos de las figuras no lo piden.

<!-- usar.camino.p3 -->
**Descargue un archivo, no los 17.** Para el explorador basta el que termina en `_interventions.csv`. No lo abra con doble clic ni en una hoja de cálculo: puede cortar filas y textos.

[Descargar en Dataverse]

<!-- usar.camino.p4 -->
**Ábralo en el explorador.** Pulse «Elegir archivo…» y selecciónelo. Se abre en su navegador; nada sale de su equipo.

<!-- usar.camino.requisitos -->
Pide un navegador reciente: Chrome/Edge 112+, Firefox 116+, Safari 17+. Al elegir el archivo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, cierre otras pestañas o pruebe antes con El Salvador. Hoy el explorador está solo en español y abre un país cada vez.

<!-- usar.camino.tiempos -->
En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en 3,7 s. Brasil, el mayor de los medidos, en 82 s. En su equipo puede tardar más.

> [nota de diseño] «Elegir archivo…» es el rótulo real del botón del explorador (`page/09_arranque__carga.js`). El README mide en Node la construcción de SV, ES y BR. No hay ninguna medida de carga en navegador, y México, el archivo más pesado, no está medido. Si prefiere no publicar tiempos medidos fuera del navegador, `usar.camino.tiempos` se suprime sin tocar nada más.

### 6.3 Qué hay en cada descarga

<!-- usar.paquete.titulo -->
Qué hay en cada descarga

<!-- usar.paquete.texto -->
17 archivos por país. `XX` son las dos letras del país: `SV`, `BR`. Dos son los datos: `XX_interventions.csv`, con una fila por turno de palabra o bloque de no habla, y `XX_deputies.csv`, el padrón. Cuatro documentos, cada uno en inglés, español y portugués: LÉAME (`README`), diccionario de datos, limitaciones conocidas e informe del proceso. Y tres archivos para programas: cifras del corpus, metadatos y método de vinculación de cada orador. Lea las limitaciones antes de contar nada.

> [nota de diseño] Comprobado en `dataverse/paquetes/SV/`: son 17 archivos, 2 de datos más 4 documentos en 3 lenguas más 3 para programas (`corpus_info.json`, `dataset.jsonld`, `match_methods.json`). Los documentos son CUATRO, no cinco; el «five documents» de la monografía §10.2 es una errata suya.
>
> El build debe comprobar que 2 + 4×3 + 3 coincide con `paquete.ficheros`.

### 6.4 Las columnas

<!-- usar.columnas.titulo -->
Las 16 columnas

<!-- usar.columnas.entradilla -->
Las mismas 16, con el mismo nombre, en las dieciséis cámaras. Cambia cuánto se pudo llenar cada una, y la tabla lo dice.

> [nota de diseño] La tabla se genera desde `columnas[16]`: nombre, tipo, `definicion_es/en/pt`, `disponibilidad` por país y `nota`. Aquí no se redacta ninguna definición.

<!-- usar.columnas.aviso.sex -->
**`sex` es derivada.** No viene del Diario; la procedencia de cada valor está en `sex_source`, en el padrón. Exactitud: el 98,98 % sobre 38.372 filas revisadas a mano en once padrones, con más error en mujeres que en hombres. En los otros cinco no está medida.

<!-- usar.columnas.aviso.dm_speech -->
**`dm_speech` es asimétrica.** El `0` está demostrado. El `1` no: significa «no está demostrado que no sea habla».

<!-- usar.columnas.aviso.legislature -->
**`legislature` no es comparable entre países:** es el texto que imprime cada Diario. Para comparar en el tiempo, use `date`.

<!-- usar.columnas.aviso.ids -->
**Los identificadores son estables dentro de una edición, no entre ediciones.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

### 6.5 El padrón

<!-- usar.padron.titulo -->
El padrón y su unión correcta

<!-- usar.padron.texto -->
El padrón es la lista de quienes ocuparon un escaño. Casi nunca hace falta unir nada: sexo, partido y distrito ya vienen en cada fila. No tiene una fila por persona, sino por tramo de mandato: 70.570 tramos para 37.523 personas. Se une por `id_dep` y por legislatura o fecha, según el diccionario del país. Unir por menos multiplica filas. Léalo por nombre de columna, nunca por posición: el orden cambia de un padrón a otro.

<!-- usar.padron.brasil -->
En Brasil hay 5.523 filas para 3.772 pares de persona y legislatura: son cambios de partido, y ahí se une por fecha, entre `start_date` y `end_date`.

> [nota de diseño] La línea de Brasil es opcional. Muestra antes de afirmar, y sus dos cifras ya están en el JSON.

### 6.6 Dos fragmentos

<!-- usar.codigo.titulo -->
Dos fragmentos

<!-- usar.codigo.entradilla -->
Cargar un país, filtrar el habla, contar palabras por década y sexo. Con El Salvador, ambos reproducen su serie de la figura de apertura.

> [nota de diseño] Los dos fragmentos están corregidos y vueltos a ejecutar en memoria hoy, 2026-09-21, sobre el `SV_interventions.csv` depositado. Dan recuentos idénticos entre sí y con `paises[sv].d2010` y `.d2020.pct_F_palabras`:
> - años diez: 600.875 de 2.591.452 palabras, el 23,19 %;
> - años veinte: 3.971.087 de 11.146.865 palabras, el 35,63 %.
>
> Hay tres correcciones:
> - los comentarios dicen «diputados y diputadas», no «parlamentarios»;
> - Python usa `.assign` sobre la selección, y corre limpio con los avisos elevados a error;
> - R termina en `as.data.frame()`, porque un tibble muestra 23.2 donde el valor es 23.19.
>
> Los comentarios se traducen; el código, no.

<!-- usar.codigo.r -->
```r
library(readr); library(dplyr); library(stringr)

# Solo cuatro columnas. na = character(): las celdas vacías se leen como "", no como NA.
df <- read_csv("SV_interventions.csv",
               col_select = c(date, sex, dm_speech, text),
               col_types  = cols(.default = col_character()),
               na = character())

# SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en
# mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla;
# no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados
# y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera.
# Cada cámara se compara consigo misma: esto no ordena países.
df |>
  filter(dm_speech == "1", sex %in% c("F", "M"), date != "") |>
  mutate(decada   = paste0(str_sub(date, 1, 3), "0"),
         palabras = str_count(text, "\\S+")) |>
  count(decada, sex, wt = palabras, name = "palabras") |>
  group_by(decada) |>
  mutate(pct = round(100 * palabras / sum(palabras), 2)) |>
  ungroup() |>
  as.data.frame()   # un tibble redondea en pantalla; así se ven los dos decimales
```

<!-- usar.codigo.python -->
```python
import pandas as pd

# Solo cuatro columnas. keep_default_na=False: las celdas vacías se leen como "", no como NaN.
cols = ["date", "sex", "dm_speech", "text"]
df = pd.read_csv("SV_interventions.csv", usecols=cols, dtype=str, keep_default_na=False)

# SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en
# mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla;
# no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados
# y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera.
# Cada cámara se compara consigo misma: esto no ordena países.
habla = df[(df["dm_speech"] == "1") & df["sex"].isin(["F", "M"]) & (df["date"] != "")]
habla = habla.assign(decada=habla["date"].str[:3] + "0",
                     palabras=habla["text"].str.split().str.len())

t = habla.pivot_table(index="decada", columns="sex", values="palabras",
                      aggfunc="sum", fill_value=0)
t["pct_F"] = (100 * t["F"] / (t["F"] + t["M"])).round(2)
print(t)
```

### 6.7 Cómo citar

<!-- usar.cita.titulo -->
Cómo citar

<!-- usar.cita.entradilla -->
Cite lo que usó y su edición: no todos los conjuntos van por la misma. La cita de una figura lleva edición de datos y fecha.

<!-- usar.cita.rotulos -->
[Un conjunto de datos] [La colección] [Una figura] · [Texto] [BibTeX] [RIS] · [Copiar la cita]

> [nota de diseño] Las citas las genera `lib/cita.ts` desde `dois.conjuntos[]` y `fuentes_parlaibero.json`. Aquí no se teclea ninguna. La de la colección y la de figura dependen de la duda 3.

<!-- usar.cita.licencia -->
CC BY 4.0: puede usar, adaptar y redistribuir, si cita la fuente.

### 6.8 Contacto y erratas

<!-- usar.contacto.titulo -->
Contacto y erratas

<!-- usar.contacto.texto -->
Si encuentra un error, díganos dónde: país, fecha, número de sesión y lo que dice el Diario oficial. Si no sabe por dónde empezar, escriba también. ⟦contacto⟧

[Avisar de una errata] [Escribirnos]

---

## 7. Para parlamentos y organismos (`/[lang]/instituciones/`)

> [nota de diseño] Dos columnas paralelas con cuatro bloques cada una, a la misma altura: pregunta · lo que se lleva · cómo usarlo bien · cómo citar. En móvil se apilan, con el congreso primero. El cierre ocupa el ancho completo.

<!-- instituciones.meta.titulo --> Para parlamentos y organismos · ParlaIbero
<!-- instituciones.meta.descripcion --> Dos caminos sin programar: buscar en el pleno de su cámara, o llevarse una tabla de indicadores de voz con su cita.

<!-- instituciones.titulo -->
Para parlamentos y organismos

<!-- instituciones.entradilla -->
Dos caminos. Ninguno exige programar.

### Columna 1

<!-- instituciones.parlamento.rotulo -->
La biblioteca o el servicio de investigación de un congreso

<!-- instituciones.parlamento.pregunta -->
«¿Qué se dijo aquí sobre esto, quién lo dijo y de qué partido o bancada?»

<!-- instituciones.parlamento.entrada -->
Si su Diario está en un PDF por sesión, responder cuesta una tarde. Aquí está en una tabla: el pleno de su cámara, texto completo, desde que empieza su serie. Y, con el mismo formato, el de las otras cámaras, una por una.

<!-- instituciones.parlamento.pasos.titulo -->
Tres pasos, sin programar

<!-- instituciones.parlamento.paso1 -->
Elija su cámara. Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. De los 17 archivos necesita uno: el que termina en `_interventions.csv`.

> [nota de diseño] Bajo el paso 1 va la lista de las 16 cámaras, cada una enlazada a su DOI, con su peso a la vista como texto para el lector: «Pesa ⟦pais.<iso>.csv⟧». El botón es [Descargar en Dataverse], sin rodeo por «Usar los datos».

<!-- instituciones.parlamento.paso2 -->
No lo abra con doble clic. Vaya al explorador, pulse «Elegir archivo…» y selecciónelo. Al elegirlo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, pruebe antes con El Salvador (98 MB). [Abrir el explorador]

<!-- ↺ comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

<!-- instituciones.parlamento.paso3 -->
Busque una palabra o una frase; filtre por fecha, partido, legislatura y diputado; exporte el resultado con su cita.

<!-- instituciones.parlamento.garantia -->
Nada sale de su equipo: el archivo se abre en su navegador, no en un servidor.

<!-- instituciones.parlamento.noes.titulo -->
Lo que no es

<!-- instituciones.parlamento.noes -->
Ni registro oficial ni sustituto del Diario. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara. Antes de citar un pasaje, localícelo allí por fecha y número de sesión.

<!-- instituciones.parlamento.nocubre -->
No cubre comisiones ni Senado, no trae las votaciones como dato y no llega al año en curso. Su ficha dice dónde termina la serie y qué años faltan. [Ver los países]

### Columna 2

<!-- instituciones.organismo.rotulo -->
El organismo internacional

<!-- instituciones.organismo.pregunta -->
«Tenemos los escaños por sexo. ¿Cuánto de lo que se dice en el pleno lo dicen mujeres?»

<!-- instituciones.organismo.sellleva.titulo -->
Lo que se lleva, sin descargar el corpus

<!-- instituciones.organismo.sellleva -->
Una tabla de indicadores por cámara y década, en CSV y Excel, sin formulario. Cada valor trae su n y su denominador, en palabras. Cada década dice cuántas cámaras hay: de tres en la primera a dieciséis en la última. El LÉAME dice qué mide cada columna. [Descargar la tabla] [Descargar la imagen]

<!-- instituciones.organismo.leer.titulo -->
Cómo leerla

<!-- instituciones.organismo.leer -->
Mide voz, no presencia: léala junto a su serie de escaños. No es un indicador oficial ni ordena países. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. La tabla marca las cinco cámaras cuya lista de diputados no se revisó a mano.

<!-- instituciones.organismo.citar.titulo -->
Cómo citar una figura

<!-- instituciones.organismo.citar -->
Con autoría, año, edición y fecha. Cada figura trae su cita lista:

<!-- instituciones.organismo.citar.modelo -->
⟦cita.autoria⟧. «⟦fig.titulo⟧». ParlaIbero, datos de figura, edición del 7 de septiembre de 2026. Instituto de Iberoamérica, Universidad de Salamanca. ⟦fig.url⟧. Consultado el ⟦fig.fecha_consulta⟧.

### Cierre (ancho completo)

<!-- instituciones.cierre.titulo -->
Quién lo hace

<!-- instituciones.cierre.que -->
Una infraestructura de datos para las ciencias sociales y humanas: las mismas 16 columnas en las dieciséis cámaras, un DOI por país y ediciones que no cambian.

<!-- instituciones.cierre.quien -->
El Instituto de Iberoamérica de la Universidad de Salamanca, con los coautores de cada ficha.

<!-- instituciones.cierre.licencia -->
Licencia CC BY 4.0: reutilice datos, tablas y figuras citando la fuente.

<!-- instituciones.cierre.estabilidad -->
Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número. Los identificadores son estables dentro de una edición, no entre ediciones.

<!-- instituciones.cierre.contacto -->
¿No sabe por dónde empezar? [Escribirnos]

> [nota de diseño] Se suprime la línea de financiación del cierre, que ponía la referencia del proyecto sin la banda de logotipos y rompía el bloque indivisible. La mención ya va en el pie.

---

## 8. Explorador (`/[lang]/explorador/`)

> ✅ **Aprobada por el investigador el 2026-09-21** («apruebo el borrador v2»). La pidió él: una quinta pestaña, a la derecha de «Parlamentos y organismos». Todo lo que afirma sale de un inventario del código y de la interfaz del explorador. Las imágenes están en `src/assets/explorador/`, con su LÉAME. La red de menciones entra tal como la dibuja la herramienta: «no es una cita textual».

<!-- explorador.meta.titulo -->
El explorador · ParlaIbero

<!-- explorador.meta.descripcion -->
Busque, lea y cite lo que se dijo en una cámara, y siga un debate de principio a fin. Sin programar; nada sale de su equipo.

<!-- comun.nav.explorador -->
[Explorador]

> [nota de diseño] Quinta pestaña de la navegación, a la derecha de «Parlamentos y organismos». Banda fija [Abrir el explorador] · [Descargar en Dataverse], como en Metodología.

### 8.1 Cabecera

<!-- explorador.titulo -->
Busque, lea y cite lo que se dijo. Sin programar.

<!-- explorador.entrada -->
El explorador es una aplicación que se abre en su navegador. Usted elige el archivo de un país y la base se construye en su equipo. No hay cuenta, ni instalación, ni servidor.

<!-- ↺ comun.fija.local -->
Se abre en su navegador; nada sale de su equipo.

<!-- explorador.abrir --> [Abrir el explorador]

### 8.2 Primero, encontrar

<!-- explorador.encontrar.titulo -->
Primero, encontrar

<!-- explorador.p1.pregunta -->
¿Qué se dijo sobre esto?

<!-- explorador.p1.texto -->
Busca en el texto completo de todas las intervenciones: una palabra, una frase exacta entre comillas, o varias combinadas. No distingue tildes ni mayúsculas.

<!-- explorador.p2.pregunta -->
¿Quién, cuándo, de qué grupo?

<!-- explorador.p2.texto -->
Filtra por fecha, legislatura, tipo de sesión, partido, sexo, distrito y longitud de la intervención. «Solo lo que se habla» deja fuera las carátulas, los sumarios y las listas de votación.

<!-- explorador.p3.pregunta -->
¿En qué momento del debate?

<!-- explorador.p3.texto -->
Cada intervención se lee como una página del Diario, con las que la preceden y la siguen, o con la sesión entera. Los aplausos, los rumores y las llamadas al orden que anotó el Diario van señalados.

<!-- explorador.p4.pregunta -->
¿Cuándo se habló de esto?

<!-- explorador.p4.texto -->
Dibuja la frecuencia de varios términos mes a mes o año a año, con los hitos históricos del país sobre el gráfico: 751 en las dieciséis cámaras, cada uno con su fuente.

> [nota de diseño] Cuatro preguntas a dos columnas: la pregunta en la grotesca pesada, la respuesta en serif. Sin iconos. Imagen: `tendencia.png`, bajo la cuarta.

### 8.3 Después, enfocar: las bibliotecas

<!-- explorador.bibliotecas.titulo -->
Después, enfocar: las bibliotecas

<!-- explorador.bibliotecas.entrada -->
Un corpus entero no es una pregunta. Una biblioteca sí.

<!-- explorador.bibliotecas.que_es -->
Una biblioteca es su propia selección de intervenciones sobre un asunto: todo lo que se dijo en el pleno sobre una ley, una crisis o una política. La reúne con una búsqueda, la afina leyendo, y la guarda con sus notas y sus etiquetas.

<!-- explorador.bibliotecas.para_que -->
Sirve para dos trabajos. Para quien investiga, es el recorte de su tema: el material sobre el que medir. Para quien sigue la agenda de una cámara, es el expediente de un debate: quién intervino, cuándo, y en qué términos.

<!-- explorador.bibliotecas.unidad -->
Desde ese momento, la biblioteca es la unidad de análisis. Se busca dentro de ella, se lee de corrido, y sobre ella se calculan el vocabulario que la distingue del resto del corpus, los temas que contiene y quién menciona a quién.

<!-- explorador.bibliotecas.guardar -->
Se guarda en su navegador, aparte de la base: actualizar los datos no borra su trabajo. Para compartirla con un colega o tener una copia, se exporta a un archivo.

> [nota de diseño] Es la sección central de la página: más aire y el titular más grande después del h1. Imagen: `bibliotecas.png` (o `lexico.png` si aquella enseña texto con orador). «Un corpus entero no es una pregunta. Una biblioteca sí.» va como frase destacada.

### 8.4 Coocurrencias: de qué se habla dentro de un debate

<!-- explorador.coocurrencias.titulo -->
Coocurrencias: de qué se habla dentro de un debate

<!-- explorador.coocurrencias.que_es -->
¿Qué palabras aparecen juntas? El explorador toma el vocabulario característico de la biblioteca y calcula qué términos se repiten en las mismas intervenciones. Donde esa red se agrupa, propone un tema.

<!-- explorador.coocurrencias.temas -->
Cada tema trae sus términos, las intervenciones donde aparece y la parte del texto que ocupa. Son candidatos: usted los revisa, quita los términos que sobran y, si uno merece estudio propio, lo convierte en una biblioteca nueva.

<!-- explorador.coocurrencias.partidos -->
Dentro de cada tema, un eje sitúa a cada partido según cuánto usa ese vocabulario, por encima o por debajo de la media. Es un eje de temas, no un eje ideológico.

<!-- explorador.coocurrencias.metodo -->
El método está a la vista, con sus parámetros, y es reproducible: los mismos parámetros dan el mismo resultado. La red de términos no se dibuja en pantalla: se exporta, para dibujarla y analizarla fuera.

> [nota de diseño] Imágenes: `coocurrencias-temas.png` a ancho completo (un tema con sus términos y el eje de partidos) y `coocurrencias-resumen.png` (los parámetros y las cifras de la pestaña). ⚠ Esta versión del explorador NO dibuja la red de coocurrencias: la calcula y la exporta. No hay, ni se fabrica, una imagen de esa red.

### 8.5 Menciones: quién habla de quién

<!-- explorador.menciones.titulo -->
Menciones: quién habla de quién

<!-- explorador.menciones.que_es -->
En un debate, los oradores se nombran unos a otros. El explorador reconoce esas menciones y dibuja la red: quién menciona a quién, y cuánto. Se puede agrupar por partido o por los focos de conversación que la propia red forma.

<!-- explorador.menciones.vistas -->
De ahí salen varias lecturas: a quién se nombra más, quién nombra, los diálogos que se cruzan, y una tabla entre partidos que dice cuánto se menciona cada uno por cada diez mil palabras.

<!-- explorador.menciones.limites -->
Dice quién habla de quién, no si lo hace a favor o en contra. Los focos no son coaliciones. Revisadas a mano, acierta 87,5 % de las menciones que reconoce; las que se le escapan —«su señoría», «quien me ha precedido»— no están contadas.

> [nota de diseño] Imágenes: `menciones-red.png` a ancho completo y `menciones-partidos.png`. La red va tal como la dibuja la herramienta (decisión del investigador, 2026-09-21: no es una cita textual). Ninguna imagen de la página enseña el texto de una intervención junto al nombre de quien la dijo.

### 8.6 Y llevárselo, citado

<!-- explorador.llevar.titulo -->
Y llevárselo, citado

<!-- explorador.llevar.texto -->
Exporta a CSV, a un documento legible, a JSON y a una lista de referencias. Todo lleva la cita del conjunto y su DOI. Hasta un pasaje copiado con el teclado se lleva su fuente.

### 8.7 Cómo empezar

<!-- explorador.empezar.titulo -->
Cómo empezar

<!-- explorador.empezar.paso1 -->
**Descargue el archivo de un país.** Para probar, El Salvador: 98 MB. Los mayores llegan a 1,5 GB.

<!-- ↺ comun.fija.formulario -->
Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.

<!-- explorador.empezar.paso2 -->
**Abra el explorador y arrastre el archivo.** No hace falta descomprimir ni convertir nada.

<!-- explorador.empezar.paso3 -->
**Espere a que se construya la base.** El explorador le dice cuánta memoria necesita y cuánto falta. Si su navegador lo permite, la recuerda: la próxima vez se abre sola.

<!-- explorador.empezar.tiempos -->
En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en 3,7 s. Brasil, el mayor de los medidos, en 82 s. En su equipo puede tardar más.

<!-- explorador.empezar.botones --> [Descargar en Dataverse] [Ver los países] [Abrir el explorador]

> [nota de diseño] Tres pasos numerados, en fila en escritorio y en columna en móvil. El aviso del formulario va ENCIMA del botón que lleva a Dataverse, como en todo el sitio.

### 8.8 Lo que pide, y lo que no hace

<!-- explorador.limites.titulo -->
Lo que pide, y lo que no hace

<!-- explorador.limites.equipo -->
Pide un ordenador, no un teléfono, y un navegador reciente: Chrome/Edge 112+, Firefox 116+, Safari 17+.

<!-- ↺ comun.fija.explorador -->
El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.

<!-- explorador.limites.no_hace -->
No compara países en una misma pantalla. No clasifica por una lista de temas fijada de antemano ni mide el tono: cuenta palabras, no intenciones. Y busca la palabra tal como la escribe: para sus variantes, únalas.

<!-- explorador.limites.texto -->
El texto sale de la extracción automática de los Diarios, y puede traer errores de reconocimiento.

<!-- ↺ comun.fija.diario -->
Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.

<!-- explorador.privacidad.titulo -->
Lo que se queda en su equipo

<!-- explorador.privacidad.texto -->
El archivo se lee en su equipo y no se sube a ningún sitio. Sus bibliotecas y la base se guardan en su navegador, no en un servidor.

### 8.9 Pies y textos alternativos de las imágenes

> [nota de diseño] Las imágenes son capturas reales del explorador (2026-09-21), con El Salvador y la biblioteca «El debate sobre el agua»: la búsqueda «agua», solo lo que se habla, intervenciones de cien palabras o más. Están en `src/assets/explorador/`, con un LÉAME que dice cómo se hicieron. Se añadió `lexico.png` (la tabla del vocabulario característico), que acompaña a la sección de bibliotecas.

<!-- explorador.img.ampliar -->
Se abre la imagen ampliada, en otra pestaña.

<!-- explorador.img.ejemplo -->
Las imágenes son del explorador con El Salvador y una biblioteca sobre el debate del agua.

<!-- explorador.img.bibliotecas.pie -->
Una biblioteca abierta: su nota, sus intervenciones y las vistas que se calculan sobre ella.

<!-- explorador.img.coocurrencias.pie -->
El resumen de la pestaña: los temas encontrados, con qué términos y conexiones, y el método.

<!-- explorador.img.temas.pie -->
Un tema candidato, con sus términos, y los partidos situados según cuánto usan ese vocabulario.

<!-- explorador.img.menciones.pie -->
La red de menciones de la biblioteca, agrupada por partido.

<!-- explorador.img.partidos.pie -->
Menciones entre partidos, por cada diez mil palabras.

<!-- explorador.img.lexico.pie -->
El vocabulario que distingue a la biblioteca del resto del corpus.

<!-- explorador.img.tendencia.pie -->
La frecuencia de un término año a año, con los hitos del país numerados sobre el gráfico.

## Anexo A · Tests de rechazo (recuento real de esta versión)

**Regla de recuento.**
- Cuentan títulos, cuerpo, leyendas, fragmento, pie del fragmento, línea-credencial, enlaces en prosa y botones.
- Cada marcador cuenta como una palabra, salvo la cita de la colección, que cuenta a su longitud real de hoy (12 palabras).
- Quedan fuera el nombre del sitio, el descriptor de cabecera, la navegación, el texto fijo de la AEI y los metadatos.
- El recuento se hizo con un contador en memoria sobre el texto exacto de la sección 2.

| test | umbral | esta versión | resultado |
|---|---|---|---|
| Palabras de Inicio | ≤ 700 | **698** | pasa, con dos palabras de margen |
| Pantalla de la primera pregunta | 1 | **1** | pasa |
| Límites antes del primer hallazgo | 0 % | **0 %** | pasa |
| Palabras de límites (salvedades de cifra y de base) | ≤ 120 | **115** | pasa |

- **Pantalla de la primera pregunta.** Encima de la pregunta solo van la cabecera y la franja obligatoria de la AEI.
- **Primer hallazgo.** Es Uruguay, y antes de él solo hay la pregunta y el título de la figura.
- **Las 115 palabras de límites** cuentan ocho elementos:
  - el denominador de la figura;
  - su salvedad;
  - «el resto son años anteriores… huecos declarados»;
  - la frase del tono;
  - «Compare por país…»;
  - «Que estén no valida…»;
  - las dos sesiones del juicio político en Paraguay;
  - la frase de citar un pasaje y la de los identificadores.

**Lo que NO está en los 115, para que usted lo juzgue.**
- Avisos de uso: el formulario y los límites del explorador suman 31 palabras. Con ellos serían 146.
- El bloque de los ausentes: 48 palabras. Lo cuento como contenido del movimiento 2 (su escena 8, principio 2), no como salvedad.

Si quiere que el tope de 120 incluya los avisos de uso, no veo 26 palabras que quitar sin tocar una salvedad de cifra.

**Coste del presupuesto de 700.**
- Salieron de Inicio la novedad fechada (47 palabras, ahora en Metodología), el contraste con Uruguay en el movimiento 3, la fecha del asalto al Congreso (la da el componente), la línea de licencia y el cierre-eslogan.
- Con la novedad dentro, Inicio tendría 745 palabras.

## Anexo B · Marcadores nuevos necesarios

**Ninguno exige MEDIR nada nuevo en `diaries`.** Todos se proyectan de archivos que ya existen. Las únicas mediciones posibles son opcionales y van señaladas.

| clave | qué mide | de qué archivo saldría | ¿medir o proyectar? |
|---|---|---|---|
| `pais.<iso>.palF.<década>.{pct,n,den}` · `.primera` · `.ultima` | voz femenina con n y den EN PALABRAS | `parlaibero.data.json → paises[].d*.pct_F_palabras.{v,n,den}` | proyectar; el catálogo imprime «n de N oradores» y hay que corregirlo |
| `voz.n_sube` | cámaras cuya última década supera a la primera (hoy quince) | CALC sobre lo anterior | proyectar |
| `decada.n_corpus.<década>` | cámaras presentes por década | `decada.n_corpus[]` | proyectar; hoy es una lista sin subclaves |
| subcampos `.n/.pct` de `novinc.*` · `.n/.pais` de `turno.mediana_*` · `.n` de `sexo.razon_error` | partir marcadores compuestos | mismos campos | proyectar |
| `eventos.n_presentes` | sesiones reconocibles presentes (hoy seis) | CALC sobre `historicas.eventos[presente]` | proyectar |
| `evento.*.que_paso` en EN y PT | descripción del evento | `historicas.eventos[].que_paso`, hoy solo en ES | traducir en la Puerta 3 |
| `cita.sv.fecha` | fecha del fragmento | `citas[iso=SV].date` | proyectar |
| `csv.min` · `csv.max` · `csv.total` | archivo menor, mayor y suma de los dieciséis | `fuentes_parlaibero.json → fuentes[].archivo.bytes` (depositado) | proyectar |
| `coleccion.cita` · `coleccion.url` · `cita.autoria` | cita y URL de la colección; autoría de figura | `fuentes_parlaibero.json → coleccion`; la autoría, de usted (duda 3) | proyectar |
| `fecha_busqueda` | fecha de la búsqueda de corpus equivalentes | la da usted; se registra en `externas[]` con `consultado_el` | exige HACER y fechar la búsqueda; no mide en `diaries` |
| `pais.<iso>.diario` · `.fuente` · `.transformacion` | nombre del registro; fuente y formato | `paises[].diario`; `docs/<iso>/corpus_info.json → i18n.diary_source, i18n.transformation` | proyectar |
| `pais.<iso>.huecos_rangos` | huecos como rangos legibles | CALC sobre `paises[].huecos` | proyectar |
| `pais.<iso>.anos_con_sesion` · `.anos_periodo` | años con sesión y años del periodo, MISMA ventana | `paises[].anos_con_sesion_todos`, `primera`, `ultima` | proyectar, corrigiendo la incoherencia de GT y EC |
| `pais.<iso>.sesiones_sin_habla` | sesiones sin turno de habla | `paises[].sesiones_sin_habla` | proyectar |
| `pais.<iso>.habla.L` | turnos de habla por país | `linkage[].speech_rows` | proyectar |
| `pais.<iso>.disp.session_number` | filas con número de sesión | `columnas[nombre=session_number].disponibilidad` | proyectar |
| `pais.<iso>.autores` · `.cita` · `.licencia` | autoría, cita, licencia | `fuentes_parlaibero.json`, cotejado con `dois.json` y `corpus_info.json` | proyectar |
| `rejilla.umbrales` | cortes del tono | CALC sobre `anual[].hab` | proyectar |
| `sexo.base_filas` | filas revisadas a mano; UNA sola clave para las tres que circulaban | `sex_source.base_filas` | proyectar |
| `validacion.filas_pais` · `.paises` · `.fuga.{pct,ic,n,den}` · `.fecha` | muestra, fuga y fecha, partidas | monografía §7.4; hoy viven en la nota de `validacion.fuga` | proyectar, ampliando `gen_parlaibero_data.py` con clave M |
| `genero.br.pct_turnos` · `.pct_recuperados` | mujeres en los turnos y en los recuperados de Brasil | monografía §8.1 y §8.3 | proyectar con clave M |
| `ocr.do.sesiones` | sesiones dominicanas escaneadas (hoy siete) | monografía §9.7 | proyectar |
| `dois.version_mayoritaria` · `dois.rezagados` | edición común y excepciones | `dois.conjuntos[].version` | proyectar |
| `explorador.navegadores` | versiones mínimas | `explorer_src/README.md`, l. 4 | proyectar |
| `explorador.construccion.sv` · `.br` | construcción de la base, medida en Node | mismo README, tabla «Medido en Node» | proyectar; una cifra en navegador exigiría MEDIR en `diaries_explorer` (opcional) |
| `padron.br.filas` · `.pares` | filas y pares del padrón de Brasil | `padron.br_filas.v`, `padron.br_pares_distintos` | proyectar |
| `edicion_pagina` · `edicion_datos` | ediciones de página y de datos | `CHANGELOG.md`; máximo de `fuentes[].fecha_version` | proyectar |
| `medido_el` · `desfase_ec.filas` · `.sesiones` | fecha de las series; diferencia de Ecuador | `meta.medido_el`; `meta.nota_ec` (150 filas, 2 sesiones) | proyectar; medir las series sobre lo depositado sigue siendo la candidata opcional del plan |
| `contacto` | vía de contacto | `src/config/enlaces.ts`; la decide usted | — |

**Notas sobre cifras y claves.**
1. **Peso total.** La suma DEPOSITADA de los dieciséis CSV es de 13.163.208.991 bytes; lo comprobé sumando `fuentes[].archivo.bytes`.
   - `meta.fuentes[C].bytes` da 13.163.483.288: son los archivos de trabajo, con las dos sesiones de Ecuador de más.
   - El sitio usa la primera cifra.
   - `deposito.peso_total`, el de los paquetes enteros, no se usa: una sola magnitud por frase.
2. **Unidad.** El catálogo rotula «MB» lo que son MiB. El archivo de El Salvador tiene 103.092.395 bytes, que el catálogo da como «98 MB» y el README como 103 MB.
   - ✅ RESUELTO el 2026-09-21, comprobado en Dataverse: muestra `corpus_info.json` (17.645 bytes) como «17.2 KB», luego divide por 1.024 y rotula KB/MB/GB.
   - El sitio usa ESA unidad, la que el lector ve junto al archivo antes de descargar: El Salvador, 98 MB; a partir de 1.024 MB, en GB con un decimal. Se fija una sola vez en `cifras.ts`.
3. **Edición de datos.** `meta.edicion_depositada` dice 2026-09-04, que es la primera edición. Los dieciséis conjuntos tienen `fecha_version` 2026-09-07. `edicion_datos` NO debe salir de `meta`.
4. **Claves de la tabla de países y la ficha.** Mezclan clave P (filas, sesiones) y clave L (turnos de habla).
   - Las dos describen lo depositado: L excluye las dos sesiones de Ecuador posteriores al corte.
   - La puerta del exportador «una sola clave de edición por bloque» debe admitir el par P+L, o la columna se cae.
5. **Marcadores suprimidos.** `figuras.peso`, porque esos archivos aún no existen. `externas.back_debus_2019.paises`, porque la frase ya no da el número de países.

## Anexo C · Dudas que solo usted puede resolver

1. ✅ **Cómo se titulan las tres salidas de «Por dónde empezar».** DECIDIDA el 2026-09-21: por lo que la persona sabe hacer (opción A), como su escena 21. El copy ya está escrito así.

2. ✅ **«Turno de palabra» y «turnos de habla».** DECIDIDA el 2026-09-21: se mantienen los dos, con papeles distintos —«turno de palabra» nombra la unidad; «turnos de habla» la cuenta—. Así está escrito.

3. **Las citas.**
   - La cita de la colección en Dataverse no lleva autor, año ni edición, y el modelo de cita de figura necesita autoría.
   - (a) Colección y figuras con «Rodrigues-Silveira, Rodrigo (año)». ✅ **ELEGIDA el 2026-09-21** (dio su nombre para la cita). Sin DOI propio para los datos de figuras, por ahora: URL, edición de datos y fecha de consulta. Los conjuntos de cada país conservan su cita con sus coautores y su DOI.
   - (b) Autoría colectiva, «ParlaIbero (año)».
   - (c) La cita de Dataverse tal cual.
   - ¿Llevan DOI propio los datos de las figuras? Solo usted puede crearlo.
   - *Recomiendo (a), y sin DOI propio por ahora:* URL, edición de datos y fecha de consulta.

4. **La novedad fechada.** Falta la fecha de la búsqueda, y falta decidir dónde vive.
   - (a) En Metodología, bajo la entradilla, como está.
   - (b) En Inicio, bajo la frase de la literatura. Cuesta 47 palabras que habría que quitar del fragmento o de las cuatro preguntas sin dueño.
   - *Recomiendo (a)* con la búsqueda rehecha y fechada. Sin fecha, el bloque no se pinta.

5. **Tres destinos sin dirección.**
   - **Contacto.** ✅ RESUELTO el 2026-09-21: [Escribirnos] va a su correo institucional y [Avisar de una errata], a los Issues del repositorio (los dos, como se recomendaba). Texto original: Correo institucional, Issues del repositorio, o los dos. *Recomiendo los dos:* correo para «no sé por dónde empezar» e Issues para erratas.
   - **Formulario.** ✅ MOTIVO RESUELTO el 2026-09-21, con su línea («Queremos conocer nuestros usuarios y los usos de los datos. Así como poder estar en contacto»), escrita en tono amable como pidió: «Nos gustaría conocer a quienes usan los datos, saber para qué les sirven y poder seguir en contacto.» (`comun.fija.formulario.motivo`). Sigue abierto lo demás de este punto. Texto original de la duda: El plan pide anunciar los cinco campos «y por qué». El motivo no consta en ningún documento y no lo invento. Falta una línea suya; falta también decir quién recibe las respuestas y si Dataverse exige crear una cuenta.
   - **Monografía y registro de decisiones.** Hoy solo existen en local. *Recomiendo publicarlos junto al sitio.* La monografía compara tamaños con ParlaMint y ParlSpeech (§2.4) e imprime el recuento de decisiones, dos cosas que el sitio no dice.

## Anexo D · Correcciones de los lectores que NO he aplicado, y por qué

Todas las correcciones de hecho del verificador están aplicadas. De los otros tres lectores, no apliqué o apliqué de otro modo estas:

1. **Lectora, n.º 2: «el explorador necesita aproximadamente esa memoria libre».** No aplicada.
   - Contradice al verificador: es una medida en Node sobre tres países, con unidades mezcladas.
   - La sustituí por algo comprobado en el código del explorador: al elegir el archivo, informa de la memoria que necesita.
   - El peso sí va como texto para el lector.
2. **Criterios, n.º 5: «dejar solo El Salvador, que es lo medido en navegador».** No aplicada tal cual.
   - El verificador demuestra que NADA está medido en navegador.
   - Apliqué su versión: los tiempos se declaran «fuera del navegador», con Brasil como «el mayor de los medidos».
   - El bloque es suprimible de una pieza.
3. **Editora, glosario: «No: turno de habla».** No aplicada.
   - Cambia el término de la narrativa aprobada y del catálogo, y el lector de criterios lo señaló como defecto.
   - Queda como duda 2.
4. **Editora: «Diario, no acta».** Aplicada en todo el sitio salvo en dos lugares:
   - la redacción fija de los ausentes, que es literal de su escena 8;
   - «en actas escaneadas, medir tono puede ser medir el escáner», una de las tres frases que el lector de criterios pidió no tocar.
5. **Criterios, n.º 6: «con lo ahorrado cabe la novedad en Inicio».** No cabe: con ella Inicio tendría 745 palabras. El resto del punto sí está aplicado: una sola frase de cita, sin duplicar lo que ya dice el pie, y sin el cierre-eslogan.
6. **Lectora, n.º 4: abrir la credencial con «Los debates del pleno, turno por turno».**
   - Aplicada de otro modo, porque el lector de criterios pidió bajar la credencial tras la tesis.
   - La frase va como descriptor de cabecera, y el primer pantallazo dice qué es el sitio sin quitarle la pantalla a la pregunta.
7. **Lectora, n.º 5: sustituir «padrón».**
   - Aplicada en Inicio y en instituciones, donde digo «lista de diputados» y «sin revisión a mano».
   - En las páginas técnicas conservo «padrón», glosado la primera vez y en el glosario, como pide la editora.
8. **Criterios, n.º 1: marcador `huecos_motivo` por país.**
   - Usé una frase fija, «el repositorio de la cámara no los tiene», que la monografía (§2.2 y §3.3) sostiene para Argentina y para Paraguay.
   - Si aparece un hueco con otra causa, entonces hará falta el marcador.
9. **Lectora, n.º 3: decir si el formulario exige crear una cuenta.** No puedo comprobarlo en los documentos; va en la duda 5.
