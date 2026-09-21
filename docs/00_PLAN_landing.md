# Plan — Sitio de presentación (landing) de ParlaIbero

> **Estado (2026-09-21).** Plan aprobado por el investigador. Etapa 0 hecha (repositorio con solo `docs/`).
> **✅ Puerta 1 SUPERADA el 2026-09-21** (`01_NARRATIVA_landing.md`, con sus cuatro decisiones en cabecera).
> **✅ Puerta 2 SUPERADA el 2026-09-21** (español CONGELADO): `02_COPY_es.md` (el copy íntegro, con marcadores)
> y `02_COPY_es.lectura.md` (GENERADO: el mismo texto con las cifras de hoy ya puestas). Cifras: `02a_MARCADORES.md`.
> Abiertas las dudas 3-5 del anexo C (bloquean publicar, no construir).
> **✅ Puerta 3 SUPERADA el 2026-09-21**, en los términos del investigador: `03_COPY_en.md` y `03_COPY_pt.md` van
> revisados por máquina (traductor, revisor independiente y contraste por retrotraducción ciega) y lo que suene raro
> se corrige A POSTERIORI, en esos dos archivos. Glosario vinculante: `03a_GLOSARIO_es-en-pt.md`. Las tres lenguas
> tienen las mismas 496 claves y los mismos marcadores (`check-i18n`).
> **Añadido el mismo día, con su aprobación:** la sexta plantilla, **«Explorador»** (copy §8; quinta pestaña, a la
> derecha de «Parlamentos y organismos»; bibliotecas como recurso de foco, Coocurrencias y Menciones con siete
> capturas reales), y los **rótulos** que el sitio echaba en falta (copy §1.11; cuatro los decidió él). Ya no queda
> ningún texto pendiente del copy.
> **✅ SITIO CONCLUIDO el 2026-09-21** (Puerta 4 en curso: el investigador lo revisó en la vista previa y sus cambios están
> aplicados). 68 páginas · 502 claves × 3 lenguas · `STRICT=1` pasa · auditoría de cifras, AEI y 71 pruebas en verde.
> Queda la Puerta 5, que es suya: repositorio, Pages, subida y enlaces entrantes. Sin commits todavía (no los ha pedido).
> Logotipo oficial de la AEI recibido: `docs/logo_proyectos_AEI.jpg` (original de imprenta, 15.237 × 2.953 px; al
> montar Astro se MUEVE a `src/assets/` y las versiones web se GENERAN en el build, nunca a mano).
>
> ⚠ **Cambio de diseño decidido por el investigador al ver la vista previa (2026-09-21):** los gráficos van EN GRANATE
> (colores de la Universidad de Salamanca). Deja sin efecto la regla de «Diseño visual» que reservaba el granate para lo
> que no es dato; la rampa nueva conserva la escalera de contraste de la anterior (`src/styles/base.css`).
>
> ⚠ **La Puerta 1 corrigió tres puntos de este plan**, tras una lectura adversarial de cuatro lectores. **Prevalece la
> narrativa aprobada** sobre lo que digan más abajo las secciones «Argumento y arquitectura» y el movimiento 1:
> 1. **Tesis:** «…costaba una carrera académica por país. Ese coste ya está pagado», con el remate de su escena 20
>    («Tres años de trabajo. Una descarga.»), en lugar de «lo convierte en una consulta», que sobreafirmaba.
> 2. **Apertura:** la pregunta sola y una figura **cámara por cámara, en palabras**, en lugar del fragmento + la cifra
>    agrupada del panel EC+ES+PT (ibérico en dos tercios, Ecuador sin auditar, y contrario al §9.9 de la monografía).
> 3. **Arco de Inicio como seis preguntas**, con los ausentes redactados como en su escena 8 y la rampa por destreza
>    de su escena 21.

## Contexto

ParlaIbero está publicado: **16 datasets en Harvard Dataverse** (colección `parlaibero`, 272 ficheros, CC BY 4.0; 15
en v2.0 y PE en v1.0, comprobado en vivo el 2026-09-21) y un **explorador** en `rodrodr.github.io/parlaibero-explorer/`.
Falta la puerta de entrada: quien llega a Dataverse ve dieciséis fichas técnicas, y quien llega al explorador ve un
cuadro que le pide un CSV que todavía no tiene. Ningún sitio dice *qué es esto, por qué es nuevo y qué puedo hacer
con ello*.

Objetivo: que la base sea **conocida y usada** por academia, servicios de investigación de los parlamentos y
organismos internacionales. El plan web de julio esperaba dos condiciones (16/16 y los 16 DOI publicados): **ambas se
cumplen**. Su fichero ya no existe; este plan lo sustituye.

Dos hallazgos de la exploración gobiernan todo lo demás:

1. **No hay que medir nada nuevo para empezar.** `docs/_scrollytelling/parlaibero.data.json` ya trae los 16 países,
   la serie país×año y 308 cifras con procedencia (valor · fórmula · fuente · fecha).
2. **El embudo real es landing → Dataverse → explorador**, y tiene fricción: guestbook, CSV de 98 MB a 1,6 GB y un
   explorador solo en español. Un organismo internacional no descarga el corpus: **cita una figura**. Hace falta un
   peldaño sin descarga.

## Decisiones del investigador (2026-09-21)

| decisión | elegido |
|---|---|
| Alcance | Landing ahora, **ampliable**: Inicio + Países + Metodología + Usar los datos + Instituciones. Data stories y buscador tipo Ngram después, sin rehacer nada |
| Idiomas | **ES + EN + pt-BR**, publicadas **a la vez**; el español se congela antes de traducir |
| Identidad | **Data-journalism tipo The Pudding**: display sans 800 + serif de lectura + mono, un acento granate, categórica apta para daltonismo, micro-animación sutil, claro/oscuro |
| Alojamiento | **GitHub Pages junto al explorador**: repositorio nuevo `rodrodr/parlaibero` → `https://rodrodr.github.io/parlaibero/` |
| Metodología | **Página media** (≈1.500-1.800 palabras) que **además conduce a descargar los datos y a abrir el explorador** |
| Camino ligero | **Datos de las figuras** (sin guestbook) + **El Salvador como país de prueba**; muestra multipaís en Dataverse, en una edición posterior |
| Instituciones | **Página propia breve** «Para parlamentos y organismos»; Inicio sigue siendo único para todos |
| Financiación | Mención AEI obligatoria en todas las páginas y en el primer pantallazo de Inicio (sección siguiente) |

Heredado del plan de julio: **Astro estático + i18n**, sin backend; todo parametrizado por el set de países presente;
el build **falla** si a un país le falta el DOI.

## Reglas que gobiernan el trabajo

- **Narrativa primero**, con puerta de aprobación explícita entre etapas. La pieza anterior se rechazó entera por
  «presentación burocrática de la base de datos»: la primera pregunta llegaba en la pantalla 44 de 75 y el 28 % eran
  límites antes del primer hallazgo. **Nada se construye antes de la Puerta 1.**
- Reglas editoriales ya fijadas (`NARRATIVA_parlaibero.md`, guion §0 y §5): el fragmento es el argumento, no el
  número · la escala no es portada · **ninguna cifra sin su denominador**, y el límite va en la misma frase · el método
  aparece pegado a un hecho · la novedad se afirma fechada y verificable («no hemos localizado…», con lo que sí existe
  al lado) · prohibido «innovador» · no comparar por tamaño · Europa no es vara de medir · **ningún nombre de
  parlamentario en pantalla** · nunca prometer tema, tono, posición ni voto: eso son «cajas vacías con nombre».
- **Mide, no cites**: ninguna cifra se teclea; sale de fichero vigente en el build.
- **Una cosa, un archivo**: no hay segundo pipeline de medición. El sitio vive en su propio repositorio, como el
  explorador; de `diaries` solo sale un exportador.
- ⛔ Nada se toca en Dataverse. ⛔ Nunca se escribe en `dataverse/paquetes/`. El acto I del scrollytelling
  (degradación del debate) **no está medido ni verificado**: no se usa.

## Identificación del proyecto financiado (obligación AEI)

Fuente vigente: *Guía recopilatoria de obligaciones de comunicación y publicidad de las ayudas a la I+D+i concedidas
por la AEI*, **5-feb-2026** (v09, leída; sustituye a las instrucciones de 2023). Anexo 1, p. 10, fila **Proyectos de
«Generación de Conocimiento», convocatorias 2021-2025**: texto «Proyecto *[ref.]* financiado por
MICIU/AEI/10.13039/501100011033 y por FEDER, UE»; logotipos **MICIU · Cofinanciado por la Unión Europea · AEI**, que
es exactamente la banda aportada por el investigador. Obligaciones web: §3, p. 8. Tamaño y lugar preferente: p. 3.

**Texto de la mención** (el del investigador, ajustado a la guía: MCIN → **MICIU** y se añade **«y por FEDER, UE»**,
para que texto y logotipo digan lo mismo; se confirma en la Puerta 2):

- **ES, completo:** «Esta página web es parte del proyecto de I+D+i PID2022-141706NB-C22, "Comportamiento legislativo
  y erosión democrática en América Latina" (PELA Comportamiento), financiado por MICIU/AEI/10.13039/501100011033 y por
  FEDER, UE.» · **junto a los logotipos:** «Proyecto PID2022-141706NB-C22 financiado por:» + banda.
- **EN** (fórmula oficial): «…funded by MICIU/AEI/10.13039/501100011033 and by ERDF/EU.» · «Grant
  PID2022-141706NB-C22 funded by:». **PT:** frase traducida; nombres y acrónimos del Ministerio y la AEI, en español.
- **Logotipo:** el **fichero original** de la AEI («Descargar archivo» de esa fila; lo aporta el investigador o se
  descarga con su permiso). La imagen pegada en el chat no es un activo.

| obligación | cómo se cumple |
|---|---|
| Mención **en todas las páginas**, texto **y** logotipos | componente único `FundingNotice` en el layout base → pie de todas las páginas |
| En **Inicio**, en el **primer pantallazo, sin scroll** | franja sobria **bajo la cabecera**, en una línea, dentro del primer viewport en todos los anchos; no compite con el hero |
| **Referencia siempre junto a los logotipos** | referencia y banda son un bloque indivisible |
| Nombres y acrónimos **en español**; el logo **no se traduce** | un único fichero de logotipo para las tres lenguas |
| Solo la **combinación del Anexo** | banda entera, sin recortar, recolorear ni invertir; en tema oscuro, **sobre placa clara**; `alt` con la mención completa |
| **Lugar preferente**; otros logos **nunca mayores** | USAL e Instituto de Iberoamérica van después, separados, a altura igual o menor |

Además: `funder` en el JSON-LD con `10.13039/501100011033` y la referencia. El incumplimiento puede minorar la ayuda,
así que entra en la verificación automática. La regla del guion «sin financiadores hasta el cierre» era del
scrollytelling; aquí manda la obligación. *Fuera de alcance, señalado:* el explorador es resultado del mismo proyecto
y hoy no lleva la mención.

## Argumento y arquitectura (propuesta que va a la Puerta 1, no copy final)

**Tesis:** «Comparar democracias iberoamericanas por lo que se dijo en sus cámaras costaba una carrera académica por
país. ParlaIbero lo convierte en una consulta.» El subtítulo nombra los tres costes: el semestre de quien investiga,
la tarde de quien responde a un diputado, el informe regional de un organismo. La «consulta» que se ve es la del
explorador (buscar, filtrar, exportar con cita), no código.

**Páginas** (×3 lenguas): `/[lang]/` Inicio · `/[lang]/paises/` (la figura de cobertura es el índice) + 16 fichas ·
`/[lang]/metodologia/` · `/[lang]/usar/` · `/[lang]/instituciones/`. `/` es un selector de lengua estático.
Reservadas y ocultas mientras estén vacías: `historias/`, `terminos/` y el enlace al scrollytelling.

**Inicio — seis movimientos, ≤ 700 palabras, ≤ 120 de límites, siempre en la frase de su cifra:**

| # | movimiento | hecho medido (bloque del JSON) | salvedad en la misma frase | llamada |
|---|---|---|---|---|
| 0 | Cabecera + **franja AEI** + línea-credencial en mono («16 cámaras · 1976–2025 · CC BY 4.0 · 16 DOI · Universidad de Salamanca · Harvard Dataverse») | `dois`, `paises` | — | — |
| 1 | **Hero**: la tesis (H1) → un fragmento real aprobado, **sin nombre** (partido, cámara, fecha) → la pregunta → la curva del panel fijo EC+ES+PT con **tres medidas juntas**: turnos 2,17→34,97 %, palabras 3,27→38,90 %, oradoras 5,23→40,36 % | `citas`, `decada.fija_ec_es_pt` | sexo derivado; error 5,6× más probable en mujeres; exactitud medida en 11 padrones que no incluyen EC; los turnos incluyen a quien preside. **Sin selector de país y sin ranking** | Descargar · «datos de esta figura» · «busque su cámara» |
| 2 | **Cobertura**: la rejilla país×año | `anual[].hab/ses`, `paises[].huecos`, `ausentes` | huecos dibujados; faltan 5 Estados, y no al azar | fila → ficha |
| 3 | **Sesiones que usted conoce**: seis sesiones-hito presentes en la base | `historicas.eventos` | la presencia no valida el contenido; PY 2012 cae en un hueco declarado | «ábrala en el explorador» |
| 4 | **Qué es una fila · quién ocupa el pleno**: PA 30,68 %, CO 28,35 %, EC 27,46 % del habla no es de diputados | `filas_ejemplo` (sin nombres), `linkage[]` | primero el 87,05 % bruto, glosado en llano; el 98,12 % efectivo con su definición a un clic | Metodología |
| 5 | **Dos comparaciones y tres cajas vacías** | `longitud[].mediana` (11 UY → 92 SV), fundacionales n = 7, `usos[].falta` | se comparan tasas, nunca volúmenes; la base no trae tema, tono, posición ni voto | Diccionario |
| 6 | **Tómelo**: escalera de tres peldaños + cita copiable | `dois.conjuntos[]` | PE en v1.0; identificadores estables solo dentro de una edición | (0) datos de figuras · (1) El Salvador · (2) país completo |

**La escalera** (primer CTA secundario de todo el sitio): **(0)** CSV y XLSX de cada figura y tabla país×década con
LÉAME y cita, **sin guestbook** porque son agregados · **(1)** El Salvador, 98 MB, «empiece por aquí», avisando de
que cubre 2018-2025 · **(2)** país completo. El guestbook se anuncia **antes** del clic (sus cinco campos y por qué);
junto a cada botón, el peso del fichero. Garantía visible: «se abre en su navegador; nada sale de su equipo».

**Metodología** (≈1.500-1.800 palabras; índice pegajoso; **banda fija «Descargar los datos · Abrir el explorador»** y
un «pruébelo» al cierre de cada apartado): qué es una fila · de dieciséis tradiciones tipográficas a una tabla (esquema
de **5 pasos**, no 13) · habla y no habla (Prolegomena conservados) · quién habla: vinculación bruta y efectiva ·
el sexo como variable derivada y la auditoría de género · OCR: lo que falló y cómo se declara · validación y revisión
humana · qué **no** afirma el corpus · versiones e identificadores · documentación completa (monografía EN, registro
de decisiones ES, cinco documentos por país en tres lenguas). La validación se rotula con exactitud: «fuga del filtro
PASS/FLAG: 0,5 % [0,09–2,78], 1 de 200; ejecutada el 31-07-2026, antes del reproceso de la v2.0 y sin Ecuador».
Fuera: diagrama de 13 etapas, tabla de decisiones y su recuento (se enlazan).

**Fichas por país**, generadas solo con campos ya trilingües (`limitations`, `i18n`, `columnas`): tres tareas
(buscar entre inicio y fin · abrir una sesión-hito si la hay · exportar con cita), cobertura anual, serie intrapaís de
las tres medidas, fuente y diario, coautores, DOI y versión, cita, limitaciones, los 17 ficheros, peso del CSV.

**Usar los datos**: el embudo en tres pasos, diccionario de las 16 columnas (`columnas[16]`, ya trilingüe), el padrón y
su unión correcta (por `id_dep` **y** legislatura o fecha; unir por menos multiplica filas), fragmentos R/Python, cita
en texto/BibTeX/RIS. **Instituciones**: dos columnas (parlamento · organismo) con pregunta tipo, camino de tres pasos
sin programar, qué **no** es («edición derivada para investigación; el registro oficial es el diario de su cámara»),
cómo citar una figura, y la tabla de indicadores país×década.

## La figura de cobertura (requisito central del encargo)

- **Escritorio:** SVG emitido en el build; una fila por país × 50 columnas (1976-2025); orden fijo por década de
  entrada y año de inicio. El tono codifica turnos de habla en 5 clases por cuantiles, con umbrales impresos en la
  leyenda («cuánto material hay, no cuánto se debate»). Tres estados de celda: con sesión · **hueco declarado** (papel
  con contorno y etiqueta, «AR 1991–2000») · anterior al arranque (vacía). **La ausencia nunca es un color de dato.**
  Al margen, sesiones y turnos por país (edición depositada). Bajo un filete, los cinco Estados ausentes: nombre y
  motivo, sin celdas. Máximo cuatro anotaciones. Hover/foco = cifra con denominador; clic en la fila = ficha; teclado
  con una parada por país y flechas para los años.
- **Móvil:** la misma rejilla con columnas de 5 px y etiqueta ISO; el detalle está en la tabla.
- **Accesible y sin JS:** pestañas Gráfico · Tabla · Descargar; `<table>` real (país, cámara, diario, inicio–fin, años
  con sesión, huecos, sesiones, turnos, DOI, más las filas de ausentes) y `cobertura.csv` generado.
- **Imagen social** 1200×630 por lengua, con la misma geometría. Referencia de codificación: `escenas/franjas.js`.

## Datos: de dónde sale cada cifra

Fuente única: `docs/_scrollytelling/parlaibero.data.json` (330 KB; 2026-09-07; `gen_parlaibero_data.py`, siete
puertas, sha256 contra los 16 canónicos). Cada valor lleva `v` · `f` · `clave` (C canónico · P depositado · L linkage ·
M monografía · D dois · CALC · REGLA) · `d`.

| necesidad | bloque |
|---|---|
| Cabecera y márgenes de la rejilla | `totales` en **clave P**: 10.091.060 filas · 52.718 sesiones · 1976-06-03 → 2026-01-14 |
| Rejilla país×año | `anual[16]` + `paises[].huecos` |
| Tabla y fichas | `paises[16]` (nombre ES/EN/PT, cámara, diario, inicio, fin, sesiones, filas, asteriscos) |
| DOI, versión, cita, coautores | `dois.conjuntos[16]` + `diaries_explorer/explorer_src/datos/fuentes_parlaibero.json` |
| Vinculación | `linkage[16]` (espejo de `docs/{iso}/corpus_info.json → linkage`) |
| Tres medidas de voz femenina | `decada` (con `n_corpus: [3,7,11,15,16,16]`) |
| Ausentes · columnas · usos · sesiones-hito | `ausentes` · `columnas[16]` · `usos[6]` · `historicas` |
| Anexo público «¿de dónde sale este número?» | `procedencia[308]` |

**Un solo script nuevo en `diaries`:** `scripts/exportar_sitio.py` (VIVO; se indexa en `scripts/README.md`). **No
mide: proyecta y une.** Lee `parlaibero.data.json` + `dataverse/dois.json` + `docs/{iso}/corpus_info.json` +
`docs/{iso}/dataset.jsonld` + `fuentes_parlaibero.json` y escribe en el repositorio del sitio `src/data/*.json`,
`provenance.json` y los CSV/XLSX de figuras, con sello de edición. Puertas (fallan el export):

DOI ausente o que no coincide entre `dois.json`, `corpus_info` y `jsonld` · cifra sin `f`/`clave`/`d` · suma de los
16 ≠ total · algún `corpus_info.json` más nuevo que `parlaibero.data.json` o sha256 de un canónico que no cuadra ·
cifra de cabecera que no sea clave P · **cualquier campo `speaker_*` a la salida** · más de una clave de edición en un
mismo bloque · salvedad de sexo por país no generada desde `sex_variable`. Avisa si `cobertura_temporal.md` es más
viejo que los paquetes (`tr-0167`).

**Mediciones nuevas: solo las que exija el copy aprobado en la Puerta 2**, siempre **ampliando
`gen_parlaibero_data.py`**, nunca en el sitio, y con permiso del investigador (re-leer 13 GB; el intermedio
`perfil_parlaibero.json` ya no está en disco). Candidatas: series medidas sobre el paquete **depositado** (hoy las
series son clave C, 150 filas de EC de diferencia; mientras tanto se rotulan así) · cuota femenina sin la presidencia.
Toda medida nueva que se publique se registra con `/diaries-decide`.

**Discrepancias que se cierran antes de escribir cifras en el copy:**

| cifra | versiones | qué se usa |
|---|---|---|
| Decisiones registradas | 628 · 632 · 471 | **no se publica el recuento**; se enlaza el registro |
| Filas | 10.091.060 depositadas · 10.091.210 canónicas | depositadas (P) |
| Turnos de habla | 9.868.235 (C) · 9.868.087 (Σ linkage) | la de Σ linkage, con su edición |
| Palabras | 1.634 M de habla · 1.805 M totales | la de habla, diciéndolo |
| Tamaños de otros corpus (ParlSpeech 6,3 / 7,6 M) | — | **no se publican**: se nombra lo que existe, sin comparar tamaños |
| Oradores | 24.868 · 24.874 · 24.876 | no viaja a Inicio hasta conciliarla |
| Cobertura de sexo GT y PA | local (`tr-0174`) ≠ publicada v2.0 | la publicada |
| Validación por muestreo | 15 países, sin Ecuador, previa al reproceso | rotulada así; nunca «los 16 validados» |

## Diseño visual

**Tipografía** (OFL, autoalojada en woff2; el build comprueba los glifos ñ ã õ ç « » ¿ ¡ – —): **Archivo 800** en
titulares (de la fundidora argentina Omnibus-Type; eje de anchura 80–88 en móvil y en nombres largos), 600-700 en
rótulos · **Source Serif 4** para lectura, con la itálica reservada a lo que alguien dijo · **JetBrains Mono** para
toda cifra, año, ISO y DOI (`tabular-nums`).

| token | claro | oscuro |
|---|---|---|
| fondo / fondo-2 | `#f7f6f3` / `#efede8` | `#17171a` / `#1e1e22` |
| tinta / tinta-2 / mute | `#1d1b18` / `#45413a` / `#6b655b` | `#e9e7e3` / `#c4c0b8` / `#a5a19a` |
| **acento granate** | `#6a1a24` | `#e89aa5` |
| foco | `#1558d6` | `#9ec1ff` |
| rampa de volumen (petróleo, 0→4) | `#6c8a95 #4f7583 #345f6f #1c4654 #0c2f3c` | `#557b89 #6f98a6 #93bac6 #bcdbe4 #e4f3f7` |
| categórica (azul·naranja·verde·oliva·violeta·pizarra) | `#2a78c2 #d96a08 #0a755c #665800 #5a2d91 #6e7882` | `#4f8fd8 #f08a3c #35b890 #f0dc6a #cdb0f2 #8a949e` |

El granate y el papel son **los del explorador**, para que ambos se lean como un solo proyecto; el granate va en
wordmark, enlaces, CTA y una fila resaltada, **nunca como color de dato**. Ausencias: transparente con filete. Radio
2 px; sin sombras. **Movimiento:** solo CSS y Web Animations, activo únicamente con
`prefers-reduced-motion: no-preference`; 120 ms hover, 240 ms cambio de estado, una entrada única ≤ 900 ms.
**Identidad mínima** (hoy no existe ninguna): wordmark «Escalera» — 16 barras con el arco temporal de cada corpus,
generadas desde `paises[]` —, favicon de 4 peldaños, imagen social por lengua. Los contrastes AA se verifican con axe,
no se dan por buenos.

## Arquitectura técnica

```
/Users/rodrodr/Dropbox/Apps/parlaibero_site/     (hermano de diaries_explorer · git propio · node_modules fuera de la sincronía de Dropbox)
├── docs/            01_NARRATIVA_landing.md · 02_COPY_es.md · 03_GLOSARIO_es-en-pt.md      ← Puertas 1-3
├── public/          fuentes woff2 · logotipo AEI (fichero oficial) · og-{es,en,pt}.png (generadas)
├── src/
│   ├── data/        GENERADO por diaries/scripts/exportar_sitio.py · se commitea · nunca se edita a mano
│   ├── i18n/        {es,en,pt}.json — copy con marcadores {{clave}}; ningún número tecleado
│   ├── content/     metodologia/{es,en,pt}.mdx · historias/ (vacía, reservada)
│   ├── config/      enlaces.ts (todas las URL externas) · rutas.ts
│   ├── lib/         datos.ts (zod) · cifras.ts (Intl, una sola vez) · cita.ts (texto · BibTeX · RIS)
│   ├── viz/geom/    rejilla.ts · curva.ts · barra.ts — geometría pura compartida por build y cliente
│   ├── components/  FundingNotice · Cifra · Limite · Rejilla · TablaCobertura · Curva · BarraPleno · Escalera ·
│   │                Cita · Hueco · SeoHead · JsonLd · LangSwitch · ThemeToggle
│   ├── layouts/Base.astro
│   └── pages/       index.astro · [lang]/{index, paises/index, paises/[iso], metodologia, usar, instituciones}.astro
├── scripts/         check-i18n.mjs · audit-cifras.mjs · check-funding.mjs · og.mjs
├── tests/           Playwright
├── .github/workflows/  deploy.yml (check → build → auditorías → Pages, solo en main) · enlaces.yml (semanal)
└── .claude/launch.json astro dev / preview
```

- **Visualizaciones:** SVG y tabla emitidos en el build (módulos d3 solo en Node); **sin d3 ni GSAP en el cliente**;
  una isla mínima para tooltip y teclado. Presupuesto: JS ≤ 35 KB gz; Inicio ≤ 300 KB. Todo funciona sin JS.
- **i18n:** las tres lenguas con prefijo; `check-i18n` falla por claves desiguales, valor vacío, marcadores distintos
  o inexistentes, **número tecleado en el copy** o palabra vetada («innovador», «innovative», «inovador»,
  «próximamente»). `<Cifra tipo="pct">` exige denominador.
- **SEO y cita:** `hreflang` recíproco + `x-default`; Open Graph; sitemap; JSON-LD `DataCatalog` en Inicio y `Dataset`
  por ficha reutilizando el `dataset.jsonld` depositado; `cite-as`; `CITATION.cff`. Analítica: ninguna al lanzar.
- **Versionado:** pie «Página ed. N · Datos ed. M» + `CHANGELOG.md`. Código MIT; contenidos CC BY 4.0.

**Se reutiliza, no se rehace:** `parlaibero.data.json` y su procedencia · `gen_parlaibero_data.py` (se amplía) · el
patrón de build que falla por clave de lengua ausente (`scripts/scrollytelling/build_parlaibero.py`) · la codificación
de `escenas/franjas.js`, `mujeres.js`, `vinculacion.js` como referencia · `fuentes_parlaibero.json` · `dataset.jsonld` ·
los campos trilingües de `corpus_info.json` · papel y granate del explorador · su receta de GitHub Pages.

**Ficheros que se tocan en `diaries`:** `scripts/exportar_sitio.py` (nuevo) · `scripts/README.md` (una entrada) ·
`scripts/scrollytelling/gen_parlaibero_data.py` (solo si la Puerta 2 lo exige) · memoria `website_plan.md` (hoy
obsoleta: apunta a un plan que ya no existe). Todo lo demás vive en el repositorio nuevo.

## Etapas y puertas de aprobación

| etapa | qué se hace | qué se entrega en la puerta |
|---|---|---|
| **0** | `git init` del repositorio con **solo `docs/`**; actualizar la memoria | — |
| **Puerta 1 · Narrativa** | `docs/01_NARRATIVA_landing.md` (≤ 1.500 palabras): tesis y alternativas descartadas, **ocho lectores** (los seis académicos + servicio parlamentario + organismo), el arco con hecho y salvedad, lo que no se dice | **Dos aperturas en texto plano** (A: fragmento → pregunta → curva, recomendada · B: solo la curva · y si no acepta «turnos con la mesa incluida», «oradoras» sube a medida principal) · redacción de los ausentes como hecho de fuente · vía de contacto (propuesta: correo institucional + Issues para erratas) |
| **Puerta 2 · Copy ES** | `docs/02_COPY_es.md`: las cinco plantillas íntegras, con marcadores y sin diseño; texto AEI | Tests de rechazo: primera pregunta en la pantalla 1 · 0 % de límites antes del primer hallazgo · ≤ 120 palabras de límites en Inicio. Lista de mediciones nuevas que el copy exige, si alguna |
| **3 · Datos y andamiaje** (tras la Puerta 2; en paralelo) | exportador + mediciones autorizadas · Astro, sistema de diseño, componentes, rejilla, fichas | — |
| **Puerta 3 · EN y pt-BR** | glosario trilingüe primero; se traduce antes «Usar», fichas e Instituciones; después Inicio y Metodología. ES congelado | Revisor nativo de EN y de pt-BR **designado por el investigador** |
| **Puerta 4 · Datos y visuales** | vista previa local | Inicio, Países y una ficha a 375 y 1440 px, claro y oscuro, tres lenguas; diff de `src/data` |
| **Puerta 5 · Publicación** | informe de verificación; prueba del embudo con tres personas ajenas | Acciones **solo del investigador**: crear el repositorio y activar Pages · autorizar el `push` · enlazar desde la descripción de Dataverse · enlace de vuelta y `<meta>` en el explorador · Search Console · diez enlaces entrantes |

Durante la ejecución: tareas largas en subagentes en segundo plano, y lotes de más de diez ficheros en paralelo.

## Verificación

**Automática (en `deploy.yml` y en local):** `astro check` + build · `check-i18n` · `audit-cifras` sobre `dist/`
(todo número en `<data data-k>` con clave en `provenance.json`; emite `procedencia.csv` público) · ningún
`speaker_name` en `dist/` · enlaces internos al 100 % y **los 16 DOI, la colección y el explorador resolviendo** ·
`hreflang` recíproco y JSON-LD válido · axe en las cinco plantillas × dos temas · peso de página.

**`check-funding` (obligación AEI):** todas las páginas de `dist/` contienen la referencia `PID2022-141706NB-C22`, el
texto de la mención y la imagen de la banda con su `alt`; y con Playwright, en Inicio, el bloque queda **entero dentro
del primer viewport con `scrollY = 0`** a 375×667, 390×844, 768×1024, 1366×768 y 1440×900, en las tres lenguas y los
dos temas; ningún otro logotipo lo supera en altura.

**Playwright:** 12 capturas en ES, humo en EN y PT, una pasada sin JS y otra con `reduced-motion`.
**Manual:** embudo real (guestbook → descarga de SV → apertura en el explorador) · Safari 17 · lector de pantalla
sobre la rejilla · Rich Results Test · revisión nativa de EN y pt-BR.
**En `diaries`, tras tocar `scripts/`:** `python3 scripts/verificar_proyecto.py` en verde.

## Fuera de esta versión, con el gancho puesto

Selector de país en el hero · banda de cifras · muro de seis tarjetas · diagrama de 13 etapas y tabla de decisiones ·
segundo logo y tokens compartidos con el explorador · cronología de hitos en las fichas · PDF de dos páginas ·
página de cambios · guía con capturas del explorador (caduca con cada reconstrucción) · cuota de **escaños** por sexo
(exige una medición pendiente). **Ganchos sin construir:** colección `historias` y `<Hueco id="scrolly">`, que solo se
pintan si existen (nunca «próximamente») · ruta `terminos/` para el buscador tipo Ngram, que pedirá una medición
país×año×término exportada en fragmentos estáticos.

## Riesgos principales

| riesgo | mitigación |
|---|---|
| El investigador rechaza la portada | dos aperturas en la Puerta 1; fragmento antes que cifra; tres medidas juntas; nada construido antes |
| El embudo muere en la descarga | escalera con peldaño 0 sin guestbook; guestbook anunciado; peso junto a cada botón; página Instituciones |
| Cifras no reproducibles desde el DOI | clave P en cabecera; una sola edición por bloque; series rotuladas C hasta medirlas sobre el depósito |
| Desincronía cuando salga una v3 de datos | el exportador falla por frescura y por sha256; pie con edición de página y de datos |
| Incumplir la publicidad de la AEI | `check-funding` bloquea el despliegue |
| Coste del trilingüe | ES congelado antes de traducir; fichas solo con campos ya trilingües; glosario previo |
| Nadie llega a la página | diez enlaces entrantes como entregable; enlace de vuelta desde el explorador y Dataverse |
