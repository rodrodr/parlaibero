# 03 · COPY EN · traducción al INGLÉS (internacional, ortografía estadounidense) (Puerta 3)

> **Estado (2026-09-21): REVISADO POR MÁQUINA y ACEPTADO así por el investigador; lo que suene raro se corrige a posteriori, aquí.**
> Fuente: `02_COPY_es.md`, aprobado y CONGELADO. Glosario vinculante: `03a_GLOSARIO_es-en-pt.md`.
> **Cómo se revisa:** corrija el texto que va DEBAJO de cada clave `<!-- así -->`. La línea `> [es]` de encima es el
> original y no se toca. Los marcadores `{{…}}` se copian EXACTOS (se pueden mover dentro de la frase). Las etiquetas
> entre [corchetes] son enlaces o botones. Después: `npm run i18n` regenera `src/i18n/en.json`, que no se edita a mano.
> Comprobado (`npm run i18n`): 496 claves de 496, ninguna falta ni sobra; marcadores idénticos al original clave por clave.
> Un revisor automático independiente aplicó 18 correcciones sobre la primera traducción.

## Puntos que debe decidir el revisor nativo

1. Cita de El Salvador (inicio.pleno.fragmento): la traducción entre paréntesis es fiel, pero dos giros dependen de oído: «the money to buy beans also comes in there» (por «ahí también viene el dinero») y «we do what is ours to do as deputies» (por «cumplamos lo que nos corresponde»), que suena algo más literario que el original oral. Alternativas llanas: «…is also in there» y «we do what falls to us as deputies». Decida el revisor nativo sin pulir el registro.
2. inicio.empezar.salida3: «grafos» se tradujo «graphs». Para un lector no especialista «graphs» son gráficos (charts); en métodos de texto lo inequívoco es «networks». Depende de qué quiso decir el investigador con «grafos» (redes de coocurrencia, grafos de conocimiento).
3. inicio.sesiones.lista y eventos.*: reescritas SIN NOMBRES por directiva del investigador (2026-09-21). «Vacancy» sola no se entiende fuera de Perú: se escribe «removal … by declaration of vacancy». Conviene que alguien confirme «investiture» para la sesión del 23 de febrero de 1981 y «admission of the impeachment proceedings» para la de Brasil.
4. Glosas de primera mención. (a) «legislature (the term each Record prints)» aparece ya en cuatro páginas (ficha, instituciones, países y, con mi corrección, usar): valore si pesa demasiado en listas de filtros; nótese que «term» se lee a la vez como «palabra» y como «mandato», ambigüedad que aquí ayuda. (b) En Inicio, «the Record» aparece por primera vez sin glosa (inicio.pleno.unidad); la base permite «the Record, each chamber's official verbatim record», pero esa frase es idéntica a la de metodologia.1.p1. Decidir si basta la definición emergente del glosario.
5. Build, no traducción: src/lib/i18n.ts (línea 39) pone mayúscula a un marcador |letra también detrás de dos puntos. En inglés saldrá «row by row: Eleven of sixteen» (glosario.padron.auditado), «The full corpus: Sixteen downloads» (usar.empezar.s3.texto), «Harvard Dataverse: Sixteen datasets» (comun.pie.deposito), «only for Ecuador: Three sessions» (fig.voz.salvedad). Afecta igual al español y al portugués. O se quita «:» de esa expresión regular o habrá que recolocar esas frases en las tres lenguas.
6. Rótulos editoriales colados en la fuente: es.json trae «**Huecos rellenos · figura de la voz**» al final de comun.leame.contacto y «**Huecos rellenos · rejilla de cobertura**» al final de fig.voz.salvedad (son títulos de docs/02_COPY_es.md, líneas 456 y 474, que scripts/copy2i18n.py no corta). Los he retirado del inglés; hay que retirarlos también del español y del portugués, o check-i18n --strict bloqueará la publicación.
7. Dos decisiones menores de forma: (a) comun.leame.archivos dice «LEAME.txt: this file.» porque los nombres de archivo no se traducen; si el build genera un README.txt para la descarga en inglés, la clave debe seguirlo. (b) Todos los apóstrofos van rectos (chamber's), como en el aviso ya aprobado comun.idioma.aviso.en, mientras que las comillas son curvas; decidir si el build los convierte a ’ o se dejan.
8. Frases donde manda el gusto: comun.fija.novalida «That they are here does not validate their content.» es correcta y seca, pero de sintaxis formal (alternativa: «Their being here does not validate their content.»; evítese «presence», que es término de la base). inicio.pleno.titulo «Who occupies the plenary's time?» frente a «Who takes up the plenary's time?» (más natural, pero verbo con partícula, que la regla desaconseja). inicio.sindueno.voto «the votes come from outside» frente a «…come from elsewhere».

## Dudas que dejaron los traductores

- Recuento: 142 claves leídas (comun 103, glosario 31, fig 8) y 142 devueltas; marcadores, corchetes, negritas y saltos de línea comprobados clave a clave contra es.json. AVISO DE ORIGEN: `comun.leame.contacto` y `fig.voz.salvedad` terminan en «**Huecos rellenos · …**», que no es texto para el lector sino un rótulo interno de 02_COPY_es.md que copy2i18n.py arrastra porque no corta la unidad en un párrafo en negrita; lo he reproducido traducido («**Placeholders filled in · voice figure / coverage grid**», sin «gap», que queda reservado al hueco declarado) solo para mantener la paridad, y debe quitarse en origen para las tres lenguas.
- `glosario.intervencion`: «El nombre corriente» pasa a «The common name», pero en inglés «intervention» no es palabra corriente para esto (es uso de la UIP y del Parlamento Europeo), de modo que la definición afirma algo que en inglés no es del todo cierto; alternativa para el revisor: «The name the files and the explorer use for what someone says in the plenary».
- `glosario.diputado`: el encabezado queda «**Deputy.**», sin desdoblar (regla EN 9: el inglés no desdobla), aunque la base da el par «deputy · woman deputy»; «Deputy, woman deputy.» convertiría al varón en el caso por defecto. Por lo mismo, «diputados y diputadas… ellas» es «deputies… women» en `fig.voz.que_mide` y en `comun.alt.voz.corto`: el revisor debe confirmar que «women» se lee sin ambigüedad como «women deputies».
- Frases que en español abren con un marcador numérico o |letra se han recolocado y ganan palabras que el original no tiene: «There are {{ausentes.n|letra}} countries missing» (comun.ausentes.entrada y fig.cobertura.salvedad), «Of {{rejilla.total}} cells, {{rejilla.llenas}} have…» (comun.alt.rejilla.corto) y «A total of {{rejilla.total}} cells… Of these, {{rejilla.llenas}}…» (fig.cobertura.denominador); si el build pone mayúscula inicial al |letra, «Five countries are missing.» sería más seco y más fiel.
- `comun.pie.quien` dice «Instituto de Iberoamérica, University of Salamanca» (regla: inglés fuera de citas y logotipos), mientras la cita del LÉAME y los alt de los logotipos conservan «Universidad de Salamanca»: debe coincidir con la franja de credenciales de Inicio, que traduce otra persona. Además, `comun.idioma.aviso.es_fuente` lleva el texto inglés ya aprobado (idéntico a `.aviso.en`), `.aviso.pt` y el título trilingüe de la raíz se dejan tal cual, y `LEAME.txt` se conserva como nombre de archivo dentro del README inglés: si el build genera otro nombre para EN, esa línea debe seguirlo.
- inicio.pleno.fragmento — La glosa entre paréntesis del fragmento de El Salvador conserva la frase única y el registro oral, pero tres giros piden ojo nativo: «ahí también viene el dinero» → "the money to buy beans also comes in there", «ojala que» → "let us hope that" y «cumplamos lo que nos corresponde» → "we do what is ours to do"; conviene comprobar que no pule ni añade.
- ficha.tareas.sesion — «Que esté no valida su contenido.» es la variante en singular de comun.fija.novalida, que traduce otra persona; he puesto "That it is here does not validate its content." y hay que armonizarla con el plural (mi propuesta: "That they are here does not validate their content."), porque el script no detecta divergencias dentro de un párrafo.
- inicio.apertura.literatura — En inglés la cita pasa a "(Bäck and Debus, 2019)"; la lista blanca de check-i18n solo contiene la cadena española «(Bäck y Debus, 2019)», así que habrá que añadir la forma inglesa o el control marcará «2019» como cifra tecleada.
- «legislatura» — Siguiendo la base, he añadido la glosa "legislature (the term each Record prints)" en las tres claves donde aparece (paises.aviso.comparabilidad, instituciones.parlamento.paso3, ficha.tareas.buscar), porque en una lista de filtros el contexto no aclara que es el periodo; en las fichas con huecos (Argentina, Paraguay) la frase de «Buscar» queda con dos paréntesis seguidos de cerca, y el revisor debería decidir si en la ficha la glosa sobra.
- inicio.sesiones.lista — Se mantiene "Spain's Congreso de los Diputados" (nombre propio sin traducir, en vez de "Spanish Congress"). Las descripciones de los hechos ya no llevan nombres propios y coinciden con las claves eventos.*.
- metodologia.4.p4 y 4.p1: para que ninguna frase empiece por una cifra he recolocado con «Of these… Another… The remaining…» y «Of the speech turns, …»; se conservan las cuatro frases, pero entran conectores que el original, más seco, no tiene.
- metodologia.4.p5: «la Secretaría, que lee» queda como «the Secretaría, which reads aloud» (nombre propio en español, como en la monografía inglesa); un revisor puede preferir «the clerk's office», coherente con «clerks» de la base.
- usar.camino.tiempos: «el mayor de los medidos» pasa a «the heaviest of those measured» para no escribir el vetado «largest»; «the smallest file» (El Salvador) sí se mantiene porque es la indicación práctica del original, no una comparación de mérito.
- metodologia.7: «fuga» = «leakage» (la monografía inglesa alterna «leaks»/«leakage») y «los dieciséis validados» = “all {{corpus.n|letra}} validated”, sin sustantivo, para no teclear la cadena vetada «validated corpus» ni siquiera negada; «marca» = «mark» y no «flag», para no chocar con el literal FLAG.
- Tipografía y literales: uso apóstrofo recto (chamber's, speaker's) porque así están la frase fija de la base y el aviso aprobado comun.idioma.aviso.en; en usar.paquete.texto «LÉAME (`README`)» queda en «README» a secas, con lo que el inglés tiene un literal de código menos que el español; y en metodologia.2.p2 «reconoció las páginas» se explicita como «recognized the text of».


## Glosario

> [es] **Cámara.** La cámara baja o única de cada país, que es la que cubre la base. Decimos «cámara» para las {{corpus.n|letra}}, se llamen congreso, asamblea o cámara de diputados. El Senado no entra.
<!-- glosario.camara -->
**Chamber.** The lower or single chamber of each country, which is the one the database covers. We say “chamber” for all {{corpus.n|letra}}, whether they are called congress, assembly, or chamber of deputies. The Senate is not included.

> [es] **País.** La unidad de descarga y de ficha: un país, una cámara, un archivo, un DOI.
<!-- glosario.pais -->
**Country.** The unit for downloads and for country pages: one country, one chamber, one file, one DOI.

> [es] **Pleno.** La reunión de toda la cámara. Las comisiones no entran.
<!-- glosario.pleno -->
**Plenary.** The meeting of the whole chamber. Committees are not included.

> [es] **Diario.** El registro oficial y literal de lo dicho en el pleno, se llame Diario de Sesiones, Diario de los Debates, Gaceta, acta o versión taquigráfica. Va con mayúscula y siempre manda sobre la base.
<!-- glosario.diario -->
**Record.** The official verbatim record of what is said in the plenary, whether it is called Diario de Sesiones, Diario de los Debates, Gaceta, acta, or versión taquigráfica. It is capitalized and always prevails over the database.

> [es] **Sesión.** Una reunión del pleno, con su fecha y, donde el Diario lo imprime, su número.
<!-- glosario.sesion -->
**Session.** One meeting of the plenary, with its date and, where the Record prints it, its number.

> [es] **Turno de palabra.** La unidad de la base: lo que dice una persona desde que el Diario le da la palabra hasta que se la da a otra. Un discurso interrumpido son varios turnos.
<!-- glosario.turno -->
**Speaking turn.** The unit of the database: what one person says from the moment the Record gives them the floor until it gives the floor to someone else. An interrupted speech is several turns.

> [es] **Fila.** Una línea del archivo de un país: o un turno de palabra, o un bloque de no habla. Es lo que se cuenta cuando se dice «filas».
<!-- glosario.fila -->
**Row.** One line of a country's file: either a speaking turn or a non-speech block. It is what is counted when we say “rows.”

> [es] **Turnos de habla.** Los turnos de palabra, cuando se cuentan: las filas que no están marcadas como no habla. Son el denominador de la vinculación: {{habla.L}}.
<!-- glosario.turnos_habla -->
**Speech turns.** Speaking turns, when they are counted: the rows that are not marked as non-speech. They are the denominator of linkage: {{habla.L}}.

> [es] **Intervención.** El nombre corriente de lo que alguien dice en el pleno, y el que usan los archivos y el explorador para cada fila. Sirve para leer y buscar. Cuando se cuenta, se dice «turnos» o «filas».
<!-- glosario.intervencion -->
**Intervention.** The common name for what someone says in the plenary, and the one the files and the explorer use for each row. It is used for reading and searching. When we count, we say “turns” or “rows.”

> [es] **Habla y no habla.** Toda fila es una cosa o la otra. No habla es lo que el Diario trae y nadie pronuncia como orador —carátulas, sumarios, pases de lista, votaciones nominales, documentos leídos—. Se conserva en su sitio y se marca, y solo donde está probado.
<!-- glosario.habla -->
**Speech and non-speech.** Every row is one or the other. Non-speech is what the Record carries and nobody delivers as a speaker—cover pages, tables of contents, roll calls, roll-call votes, documents read aloud. It is kept in its place and marked, and only where this is proven.

> [es] **Diputado, diputada.** Quien ocupa un escaño en la cámara, se llame en su país diputado, representante, asambleísta, congresista o deputado.
<!-- glosario.diputado -->
**Deputy.** Whoever holds a seat in the chamber, whether the title in their country is diputado, representante, asambleísta, congresista, or deputado.

> [es] **Escaño.** El puesto de un diputado en la cámara. En otros países, curul o banca.
<!-- glosario.escano -->
**Seat.** A deputy's place in the chamber. In other countries, curul or banca.

> [es] **Quien no puede ocupar escaño.** Quien habla en el pleno sin ser diputado: ministros, secretarios, relatores, invitados. No decimos «sin escaño».
<!-- glosario.noescano -->
**Those who cannot hold a seat.** Those who speak in the plenary without being deputies: ministers, clerks, reading clerks, guests. We do not say “without a seat.”

> [es] **Padrón.** La lista de quienes ocuparon un escaño en una cámara, con nombre, sexo, partido, distrito y fechas. No es el padrón electoral. La construye el proyecto y va en un archivo aparte. El Diario dice quién habló; el padrón, quién tenía escaño.
<!-- glosario.padron -->
**Roster.** The list of those who held a seat in a chamber, with name, sex, party, district, and dates. It is not the electoral roll. The project builds it, and it comes in a separate file. The Record says who spoke; the roster, who held a seat.

> [es] **Vinculación.** Unir cada turno de palabra con la persona del padrón que lo dijo.
<!-- glosario.vinculacion -->
**Linkage.** Joining each speaking turn with the person on the roster who said it.

> [es] **Vinculación bruta.** De todos los turnos de habla, los que llevan un diputado identificado: {{vinculados.L}} de {{habla.L}}, el {{vinc.bruta}}.
<!-- glosario.vinculacion.bruta -->
**Gross linkage.** Of all speech turns, those that carry an identified deputy: {{vinculados.L}} of {{habla.L}}, or {{vinc.bruta}}.

> [es] **Vinculación efectiva.** La misma parte, sin contar en el denominador los turnos de quien no puede ocupar escaño ni las voces colectivas o anónimas: el {{vinc.efectiva}}. Una presidencia sin nombre no se descuenta, porque quien preside es diputado.
<!-- glosario.vinculacion.efectiva -->
**Effective linkage.** The same share, leaving out of the denominator the turns of those who cannot hold a seat and the collective or anonymous voices: {{vinc.efectiva}}. An unnamed chair is not left out, because whoever chairs is a deputy.

> [es] **Laguna nuestra.** Un turno de un diputado que no logramos vincular. Es una falta nuestra, y se dice así. No es un hueco.
<!-- glosario.laguna -->
**Our missed link.** A deputy's turn that we did not manage to link. The fault is ours, and we say so. It is not a gap.

> [es] **Hueco declarado.** Años dentro de la serie de una cámara que su repositorio no tiene. Están dichos en su ficha y dibujados en la rejilla con contorno y etiqueta. Hoy son Argentina ({{pais.ar.huecos_rangos}}) y Paraguay ({{pais.py.huecos_rangos}}). Los años anteriores al inicio de una serie no son huecos.
<!-- glosario.hueco -->
**Declared gap.** Years within a chamber's series that its repository does not have. They are stated on its country page and drawn in the grid with an outline and a label. Today they are Argentina ({{pais.ar.huecos_rangos}}) and Paraguay ({{pais.py.huecos_rangos}}). The years before the start of a series are not gaps.

> [es] **Ausente.** Un país del universo de {{universo.n}} sin corpus, siempre con su motivo y con la redacción fija.
<!-- glosario.ausente -->
**Absent.** A country in the universe of {{universo.n}} with no corpus, always with its reason and in the fixed wording.

> [es] **Edición.** El estado publicado de los datos de un país, con su número y su DOI. Una edición publicada no cambia. La página tiene su propia edición.
<!-- glosario.edicion -->
**Edition.** The published state of a country's data, with its number and its DOI. A published edition does not change. The website has its own edition.

> [es] **Identificador.** El código de una sesión, una fila o un diputado. Es estable dentro de una edición, no entre ediciones. Para citar un pasaje se dan la fecha y el número de sesión.
<!-- glosario.identificador -->
**Identifier.** The code of a session, a row, or a deputy. It is stable within an edition, not across editions. To cite a passage, give the date and the session number.

> [es] **Voz y presencia.** Presencia es ocupar escaños. Voz es lo que se dice en el pleno. La base mide voz.
<!-- glosario.voz -->
**Voice and presence.** Presence is holding seats. Voice is what is said in the plenary. The database measures voice.

> [es] **Palabras (la medida).** La medida pública de la voz es la parte de las palabras dichas. Turnos y oradoras están a un clic.
<!-- glosario.palabras -->
**Words (the measure).** The public measure of voice is the share of words spoken. Speech turns and women speakers are one click away.

> [es] **Sexo (variable derivada).** No lo da el Diario. Lo asignamos nosotros a cada persona del padrón, con su procedencia anotada. Tiene más error en mujeres que en hombres.
<!-- glosario.sexo -->
**Sex (derived variable).** The Record does not give it. It is assigned by us to each person on the roster, with its provenance noted. It has more error for women than for men.

> [es] **Padrón auditado.** Aquel cuyo sexo se revisó a mano, fila por fila: {{sexo.padrones_auditados|letra}} de {{corpus.n|letra}}. Los demás se marcan y se dibujan distinto.
<!-- glosario.padron.auditado -->
**Audited roster.** A roster whose sex assignment was reviewed by hand, row by row: {{sexo.padrones_auditados|letra}} of {{corpus.n|letra}}. The others are marked and drawn differently.

> [es] **Archivo y conjunto de datos.** El archivo es el CSV de un país. El conjunto es todo lo depositado para ese país en Harvard Dataverse, con su documentación y su DOI.
<!-- glosario.archivo -->
**File and dataset.** The file is a country's CSV. The dataset is everything deposited for that country in Harvard Dataverse, with its documentation and its DOI.

> [es] **Explorador.** La página que abre en su navegador el archivo de un país para buscar, filtrar y exportar. Abre un país cada vez.
<!-- glosario.explorador -->
**Explorer.** The page that opens a country's file in your browser so that you can search, filter, and export. It opens one country at a time.

> [es] **Formulario de descarga.** Lo que Harvard Dataverse pide antes de descargar: nombre, correo, institución, cargo y uso previsto.
<!-- glosario.formulario -->
**Download form.** What Harvard Dataverse asks for before you download: name, email, institution, position, and intended use.

> [es] **Datos de la figura.** El CSV, el Excel y el LÉAME de una figura. Son agregados y se descargan sin formulario.
<!-- glosario.datos_figura -->
**Figure data.** The CSV, the Excel file, and the README of a figure. These are aggregate data and are downloaded with no form.

> [es] **Pregunta sin dueño.** Lo que la base no trae anotado y alguien tendría que construir: tema, tono, posición, voto.
<!-- glosario.sin_dueno -->
**Unclaimed question.** What the database does not carry as annotation and someone would have to build: topic, tone, position, vote.


## Texto común del sitio

> [es] [Saltar al contenido]
<!-- comun.nav.saltar -->
[Skip to content]

> [es] ParlaIbero
<!-- comun.cabecera.nombre -->
ParlaIbero

> [es] Los debates del pleno, turno por turno
<!-- comun.cabecera.descriptor -->
Plenary debates, turn by turn

> [es] Navegación principal
<!-- comun.nav.aria -->
Main navigation

> [es] [Inicio]
<!-- comun.nav.inicio -->
[Home]

> [es] [Países]
<!-- comun.nav.paises -->
[Countries]

> [es] [Metodología]
<!-- comun.nav.metodologia -->
[Methodology]

> [es] [Usar los datos]
<!-- comun.nav.usar -->
[Use the data]

> [es] [Para parlamentos y organismos]
<!-- comun.nav.instituciones -->
[For parliaments and organizations]

> [es] [Parlamentos y organismos]
<!-- comun.nav.instituciones.corto -->
[Parliaments and organizations]

> [es] [Descargar los datos]
<!-- comun.nav.cta.descargar -->
[Download the data]

> [es] [Abrir el explorador]
<!-- comun.nav.cta.explorador -->
[Open the explorer]

> [es] [Menú]
<!-- comun.nav.menu.abrir -->
[Menu]

> [es] [Cerrar]
<!-- comun.nav.menu.cerrar -->
[Close]

> [es] [Tema oscuro]
<!-- comun.nav.tema.oscuro -->
[Dark theme]

> [es] [Tema claro]
<!-- comun.nav.tema.claro -->
[Light theme]

> [es] Se abre en su navegador; nada sale de su equipo.
<!-- comun.fija.local -->
It opens in your browser; nothing leaves your computer.

> [es] El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.
<!-- comun.fija.explorador -->
The explorer opens one country at a time, is in Spanish only today, and requires a recent browser.

> [es] Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.
<!-- comun.fija.formulario -->
Before you download, Harvard Dataverse will ask for your name, email, institution, position, and intended use.

> [es] Nos gustaría conocer a quienes usan los datos, saber para qué les sirven y poder seguir en contacto.
<!-- comun.fija.formulario.motivo -->
We would like to know who uses the data and what for, and to stay in touch.

> [es] Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- comun.fija.diario -->
Derived edition for research: in case of any discrepancy, your chamber's Record prevails.

> [es] Los identificadores son estables dentro de una edición, no entre ediciones.
<!-- comun.fija.identificadores -->
Identifiers are stable within an edition, not across editions.

> [es] Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.
<!-- comun.fija.citar_pasaje -->
To cite a passage, give the date and the session number, and check it against the official Record.

> [es] Mide voz, no presencia.
<!-- comun.fija.voz -->
It measures voice, not presence.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres.
<!-- comun.fija.sexo -->
Sex is assigned by us, with more error for women than for men.

> [es] No ordena países.
<!-- comun.fija.no_ordena -->
It does not rank countries.

> [es] El tono dice cuánto material hay, no cuánto se debate.
<!-- comun.fija.tono -->
The shade shows how much material there is, not how much debate.

> [es] Que estén no valida su contenido.
<!-- comun.fija.novalida -->
That they are here does not validate their content.

> [es] Sin formulario: son datos agregados.
<!-- comun.fija.sin_formulario -->
No form: these are aggregate data.

> [es] Faltan {{ausentes.n|letra}} países. Conviene decir por qué.
<!-- comun.ausentes.entrada -->
There are {{ausentes.n|letra}} countries missing. It is worth saying why.

> [es] **Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
<!-- comun.ausentes.regimen -->
**Venezuela, Cuba, Nicaragua** — do not publish the records of their debates.

> [es] **Bolivia** — las publica sin digitalizar.
<!-- comun.ausentes.bolivia -->
**Bolivia** — publishes them without digitizing them.

> [es] **Honduras** — publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.ausentes.honduras -->
**Honduras** — publishes summaries of what was discussed, not the interventions.

> [es] Un solo criterio: que exista registro del debate plenario en forma de discursos. Donde existe, está aquí.
<!-- comun.ausentes.cierre -->
A single criterion: that a record of the plenary debate exists in the form of speeches. Where it exists, it is here.

> [es] Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.ausentes.prosa -->
Venezuela, Cuba, and Nicaragua do not publish the records of their debates. Bolivia publishes them without digitizing them. Honduras publishes summaries of what was discussed, not the interventions.

> [es] [Gráfico] [Tabla] [Datos]
<!-- comun.fig.pestanas -->
[Chart] [Table] [Data]

> [es] [Descargar los datos de la figura]
<!-- comun.fig.datos -->
[Download the figure data]

> [es] CSV y Excel, con su LÉAME. Sin formulario: son datos agregados.
<!-- comun.fig.datos.nota -->
CSV and Excel, with their README. No form: these are aggregate data.

> [es] [Descargar la imagen]
<!-- comun.fig.imagen -->
[Download the image]

> [es] {{pct}} · {{n}} de {{den}} palabras
<!-- comun.fig.voz.hover -->
{{pct}} · {{n}} of {{den}} words

> [es] {{pais}} · {{año}} · {{ses}} sesiones · {{hab}} turnos de habla
<!-- comun.fig.rejilla.hover -->
{{pais}} · {{año}} · {{ses}} sessions · {{hab}} speech turns

> [es] {{pais}} · {{huecos_rangos}} · hueco declarado
<!-- comun.fig.rejilla.hover.hueco -->
{{pais}} · {{huecos_rangos}} · declared gap

> [es] [Copiar la cita]
<!-- comun.cita.copiar -->
[Copy the citation]

> [es] Cita copiada.
<!-- comun.cita.copiada -->
Citation copied.

> [es] Se abre en Harvard Dataverse.
<!-- comun.enlace.dataverse -->
Opens in Harvard Dataverse.

> [es] Se abre el explorador, en otra pestaña.
<!-- comun.enlace.explorador -->
Opens the explorer, in another tab.

> [es] Documento en inglés.
<!-- comun.doc.en -->
Document in English.

> [es] Documento en español.
<!-- comun.doc.es -->
Document in Spanish.

> [es] Proyecto PID2022-141706NB-C22 financiado por:
<!-- comun.aei.corta -->
Grant PID2022-141706NB-C22 funded by:

> [es] Esta página web es parte del proyecto de I+D+i PID2022-141706NB-C22, "Comportamiento legislativo y erosión democrática en América Latina" (PELA Comportamiento), financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.completa -->
This website is part of the R&D&I project PID2022-141706NB-C22, "Legislative Behavior and Democratic Erosion in Latin America" (PELA Comportamiento), funded by MICIU/AEI/10.13039/501100011033 and by ERDF/EU.

> [es] Logotipos del Ministerio de Ciencia, Innovación y Universidades; de la Unión Europea, con el lema «Cofinanciado por la Unión Europea»; y de la Agencia Estatal de Investigación. Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.logos.alt -->
Logos: Ministerio de Ciencia, Innovación y Universidades; European Union, with the motto “Cofinanciado por la Unión Europea” (Co-funded by the European Union); and Agencia Estatal de Investigación. Grant PID2022-141706NB-C22 funded by MICIU/AEI/10.13039/501100011033 and by ERDF/EU.

> [es] ParlaIbero · Infraestructura de datos para las ciencias sociales y humanas · Instituto de Iberoamérica, Universidad de Salamanca
<!-- comun.pie.quien -->
ParlaIbero · Data infrastructure for the social sciences and humanities · Instituto de Iberoamérica, University of Salamanca

> [es] Los datos están en Harvard Dataverse: {{dois.n|letra}} conjuntos, cada uno con su DOI.
<!-- comun.pie.deposito -->
The data are in Harvard Dataverse: {{dois.n|letra}} datasets, each with its DOI.

> [es] Datos y contenidos, CC BY 4.0. Código de la página, MIT.
<!-- comun.pie.licencia -->
Data and content, CC BY 4.0. Website code, MIT.

> [es] Página, edición {{NUEVO:edicion_pagina}} · Datos, edición del {{NUEVO:edicion_datos|fecha_larga}}
<!-- comun.pie.edicion -->
Website, edition {{NUEVO:edicion_pagina}} · Data, edition of {{NUEVO:edicion_datos|fecha_larga}}

> [es] [Colección en Harvard Dataverse] [Abrir el explorador] [Cómo citar] [De dónde sale cada cifra] [Avisar de una errata] [Escribirnos]
<!-- comun.pie.enlaces -->
[Collection in Harvard Dataverse] [Open the explorer] [How to cite] [Where each number comes from] [Report an error] [Write to us]

> [es] Universidad de Salamanca
<!-- comun.pie.logos.usal.alt -->
Universidad de Salamanca

> [es] Instituto de Iberoamérica
<!-- comun.pie.logos.instituto.alt -->
Instituto de Iberoamérica

> [es] Este sitio no usa cookies ni analítica.
<!-- comun.privacidad.linea -->
This website does not use cookies or analytics.

> [es] El explorador tampoco recibe su archivo: no sale de su equipo. La descarga en Harvard Dataverse sí pide sus datos, y se lo avisamos antes del clic.
<!-- comun.privacidad.ampliada -->
The explorer does not receive your file either: the file does not leave your computer. The download from Harvard Dataverse does ask for your details, and we tell you so before you click.

> [es] Idioma
<!-- comun.idioma.etiqueta -->
Language

> [es] Cambiar de idioma
<!-- comun.idioma.aria -->
Change language

> [es] [Español]
<!-- comun.idioma.es -->
[Español]

> [es] [English]
<!-- comun.idioma.en -->
[English]

> [es] [Português (Brasil)]
<!-- comun.idioma.pt -->
[Português (Brasil)]

> [es] Elija idioma · Choose a language · Escolha o idioma
<!-- comun.idioma.raiz.titulo -->
Elija idioma · Choose a language · Escolha o idioma

> [es] La interfaz del explorador está hoy solo en español. La búsqueda trabaja sobre el texto original de cada cámara, en español o en portugués.
<!-- comun.idioma.aviso.es_fuente -->
The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.

> [es] The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.
<!-- comun.idioma.aviso.en -->
The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.

> [es] A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.
<!-- comun.idioma.aviso.pt -->
A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.

> [es] Esta página no está.
<!-- comun.404.titulo -->
This page is not here.

> [es] El enlace puede ser antiguo o tener una errata. Los datos no se han movido: cada país sigue en su DOI.
<!-- comun.404.texto -->
The link may be old or contain an error. The data have not moved: each country is still at its DOI.

> [es] [Ir a Inicio] [Ver los países] [Descargar los datos]
<!-- comun.404.salidas -->
[Go to Home] [View the countries] [Download the data]

> [es] Si llegó aquí desde un enlace de este mismo sitio, avísenos. [Avisar de una errata]
<!-- comun.404.errata -->
If you arrived here from a link on this website, tell us. [Report an error]

> [es] Figura con {{corpus.n|letra}} series, una por cámara. Cada serie muestra, década a década, qué parte de las palabras de diputados y diputadas con sexo conocido dijeron ellas. Cada cámara se compara consigo misma: la figura no ordena países. Los valores están en la pestaña «Tabla».
<!-- comun.alt.voz.corto -->
Figure with {{corpus.n|letra}} series, one per chamber. Each series shows, decade by decade, what share of the words of deputies of known sex were spoken by women. Each chamber is compared with itself: the figure does not rank countries. The values are in the “Table” tab.

> [es] En {{NUEVO:voz.n_sube|letra}} de {{corpus.n|letra}} cámaras, la última década con datos está por encima de la primera. No en todas sube: en República Dominicana pasa del {{pais.do.palF.primera.pct}} al {{pais.do.palF.ultima.pct}}, y en Guatemala baja antes de volver a subir.
<!-- comun.alt.voz.largo.intro -->
In {{NUEVO:voz.n_sube|letra}} of the {{corpus.n|letra}} chambers, the last decade with data is above the first. It does not rise in all of them: in the Dominican Republic it goes from {{pais.do.palF.primera.pct}} to {{pais.do.palF.ultima.pct}}, and in Guatemala it falls before rising again.

> [es] {{pais.<iso>.nombre}}: el {{pais.<iso>.palF.primera.pct}} en su primera década con datos; el {{pais.<iso>.palF.ultima.pct}} en la última.
<!-- comun.alt.voz.largo.fila -->
{{pais.<iso>.nombre}}: {{pais.<iso>.palF.primera.pct}} in its first decade with data; {{pais.<iso>.palF.ultima.pct}} in the last.

> [es] {{pais.<iso>.nombre}}: el {{pais.<iso>.palF.primera.pct}} en su primera década con datos; el {{pais.<iso>.palF.ultima.pct}} en la última. Padrón sin auditar.
<!-- comun.alt.voz.largo.fila.sin_auditar -->
{{pais.<iso>.nombre}}: {{pais.<iso>.palF.primera.pct}} in its first decade with data; {{pais.<iso>.palF.ultima.pct}} in the last. Unaudited roster.

> [es] Mide voz, no presencia. El denominador son las palabras de diputados y diputadas con sexo conocido. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Las {{sexo.padrones_sin_auditar|letra}} cámaras con padrón sin auditar —Argentina, Brasil, Chile, Ecuador y Perú— se dibujan con otro trazo.
<!-- comun.alt.voz.largo.salvedad -->
It measures voice, not presence. The denominator is the words of deputies of known sex. Sex is assigned by us, with more error for women than for men. The {{sexo.padrones_sin_auditar|letra}} chambers with an unaudited roster—Argentina, Brazil, Chile, Ecuador, and Peru—are drawn with a different line style.

> [es] Rejilla de cobertura: {{corpus.n|letra}} cámaras en filas y los años de {{rejilla.desde}} a {{rejilla.hasta}} en columnas. {{rejilla.llenas}} de {{rejilla.total}} celdas tienen al menos una sesión. Los mismos datos están en la pestaña «Tabla».
<!-- comun.alt.rejilla.corto -->
Coverage grid: {{corpus.n|letra}} chambers in rows and the years from {{rejilla.desde}} to {{rejilla.hasta}} in columns. Of {{rejilla.total}} cells, {{rejilla.llenas}} have at least one session. The same data are in the “Table” tab.

> [es] Cada fila es una cámara; cada columna, un año. Una celda llena quiere decir que la base tiene al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Las series empiezan en años distintos: antes del inicio la celda está vacía, y no es un hueco.
<!-- comun.alt.rejilla.largo.intro -->
Each row is a chamber; each column, a year. A filled cell means that the database has at least one session from that year, not that all of them are there. The shade shows how much material there is, not how much debate. The series start in different years: before the start the cell is empty, and it is not a gap.

> [es] {{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.
<!-- comun.alt.rejilla.largo.fila -->
{{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: from {{pais.<iso>.inicio}} to {{pais.<iso>.fin}}.

> [es] {{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, con hueco declarado en {{NUEVO:pais.<iso>.huecos_rangos}}.
<!-- comun.alt.rejilla.largo.fila.hueco -->
{{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: from {{pais.<iso>.inicio}} to {{pais.<iso>.fin}}, with a declared gap in {{NUEVO:pais.<iso>.huecos_rangos}}.

> [es] Debajo de la rejilla, sin celdas, los {{ausentes.n|letra}} países de un universo de {{universo.n}} que no tienen corpus. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.alt.rejilla.largo.ausentes -->
Below the grid, without cells, the {{ausentes.n|letra}} countries from a universe of {{universo.n}} that have no corpus. Venezuela, Cuba, and Nicaragua do not publish the records of their debates. Bolivia publishes them without digitizing them. Honduras publishes summaries of what was discussed, not the interventions.

> [es] Con el teclado: una parada por cámara; las flechas recorren los años.
<!-- comun.alt.rejilla.teclado -->
With the keyboard: one tab stop per chamber; the arrow keys move through the years.

> [es] LÉAME · {{fig.titulo}} ⏎ ParlaIbero · Datos, edición del {{NUEVO:edicion_datos|fecha_larga}} · Página, edición {{NUEVO:edicion_pagina}} · generado el {{fig.fecha_generacion}}
<!-- comun.leame.cabecera -->
README · {{fig.titulo}}
ParlaIbero · Data, edition of {{NUEVO:edicion_datos|fecha_larga}} · Website, edition {{NUEVO:edicion_pagina}} · generated on {{fig.fecha_generacion}}

> [es] QUÉ MIDE
<!-- comun.leame.que_mide.titulo -->
WHAT IT MEASURES

> [es] {{fig.que_mide}}
<!-- comun.leame.que_mide -->
{{fig.que_mide}}

> [es] DENOMINADOR
<!-- comun.leame.denominador.titulo -->
DENOMINATOR

> [es] {{fig.denominador}} ⏎ Cada fila trae su n y su denominador. Una celda vacía quiere decir que esa cámara no tiene sesiones en ese periodo. No quiere decir cero.
<!-- comun.leame.denominador -->
{{fig.denominador}}
Each row carries its n and its denominator. An empty cell means that the chamber has no sessions in that period. It does not mean zero.

> [es] ARCHIVOS
<!-- comun.leame.archivos.titulo -->
FILES

> [es] {{fig.archivo}}.csv: UTF-8, separado por comas, con punto decimal. ⏎ {{fig.archivo}}.xlsx: lo mismo, para Excel. Si su Excel usa coma decimal, abra este. ⏎ LEAME.txt: este archivo.
<!-- comun.leame.archivos -->
{{fig.archivo}}.csv: UTF-8, comma-separated, with a decimal point.
{{fig.archivo}}.xlsx: the same, for Excel. If your Excel uses a decimal comma, open this one.
LEAME.txt: this file.

> [es] COLUMNAS
<!-- comun.leame.columnas.titulo -->
COLUMNS

> [es] {{fig.columnas}}
<!-- comun.leame.columnas -->
{{fig.columnas}}

> [es] SALVEDAD
<!-- comun.leame.salvedad.titulo -->
CAVEAT

> [es] {{fig.salvedad}}
<!-- comun.leame.salvedad -->
{{fig.salvedad}}

> [es] FUENTE
<!-- comun.leame.fuente.titulo -->
SOURCE

> [es] Calculado sobre los {{dois.n|letra}} conjuntos de ParlaIbero depositados en Harvard Dataverse: {{NUEVO:coleccion.url}}. La procedencia de cada cifra está en procedencia.csv. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de cada cámara.
<!-- comun.leame.fuente -->
Calculated from the {{dois.n|letra}} ParlaIbero datasets deposited in Harvard Dataverse: {{NUEVO:coleccion.url}}. The provenance of each number is in procedencia.csv. Derived edition for research: in case of any discrepancy, each chamber's Record prevails.

> [es] LICENCIA
<!-- comun.leame.licencia.titulo -->
LICENSE

> [es] CC BY 4.0. Puede copiar, adaptar y redistribuir estos datos si cita la fuente.
<!-- comun.leame.licencia -->
CC BY 4.0. You may copy, adapt, and redistribute these data if you cite the source.

> [es] CÓMO CITAR
<!-- comun.leame.citar.titulo -->
HOW TO CITE

> [es] {{NUEVO:cita.autoria}}. «{{fig.titulo}}». ParlaIbero, datos de figura, edición del {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Consultado el [fecha de su consulta]. ⏎ Si usa los datos de un país, cite además su conjunto, con su DOI. La cita está en la ficha del país.
<!-- comun.leame.citar -->
{{NUEVO:cita.autoria}}. “{{fig.titulo}}.” ParlaIbero, figure data, edition of {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Accessed [date of your access].
If you use a country's data, also cite its dataset, with its DOI. The citation is on the country page.

> [es] ERRATAS Y CONTACTO
<!-- comun.leame.contacto.titulo -->
ERRORS AND CONTACT

> [es] {{NUEVO:contacto}} ⏎  ⏎ **Huecos rellenos · figura de la voz**
<!-- comun.leame.contacto -->
{{NUEVO:contacto}}


## Figuras

> [es] Voz de las diputadas en el pleno, por cámara y década
<!-- fig.voz.titulo -->
Women deputies' voice in the plenary, by chamber and decade

> [es] De las palabras dichas en el pleno por diputados y diputadas, la parte que dicen ellas. Una serie por cámara y una cifra por década. El archivo trae también la misma parte en turnos de habla y en oradoras.
<!-- fig.voz.que_mide -->
Of the words spoken in the plenary by deputies, the share spoken by women. One series per chamber and one number per decade. The file also gives the same share in speech turns and in women speakers.

> [es] Las palabras de diputados y diputadas con sexo conocido, en esa cámara y esa década. No entran quienes no pueden ocupar escaño, las voces colectivas ni las filas de no habla.
<!-- fig.voz.denominador -->
The words of deputies of known sex, in that chamber and that decade. Those who cannot hold a seat, collective voices, and non-speech rows are not included.

> [es] Mide voz, no presencia: léala junto a la serie de escaños. No es un indicador oficial ni ordena países. ⏎ El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el {{sexo.exactitud_h}} de los hombres y en el {{sexo.exactitud_m}} de las mujeres, sobre {{NUEVO:sexo.base_filas}} filas revisadas a mano en {{sexo.padrones_auditados|letra}} padrones. ⏎ En {{sexo.padrones_sin_auditar|letra}} cámaras —Argentina, Brasil, Chile, Ecuador y Perú— el padrón no está auditado, y una columna lo marca. ⏎ Los turnos incluyen a quien preside; por eso la medida pública son las palabras. ⏎ La serie se midió el {{NUEVO:medido_el|fecha_larga}} sobre nuestros archivos de trabajo, que solo en Ecuador difieren de lo depositado: {{NUEVO:desfase_ec.sesiones|letra}} sesiones y {{NUEVO:desfase_ec.filas}} filas posteriores al corte de la edición. Si recalcula la última década de Ecuador desde su descarga, puede no coincidir exactamente. ⏎  ⏎ **Huecos rellenos · rejilla de cobertura**
<!-- fig.voz.salvedad -->
It measures voice, not presence: read it alongside the series on seats. It is not an official indicator, and it does not rank countries.
Sex is assigned by us, with more error for women than for men. We assign it correctly for {{sexo.exactitud_h}} of men and for {{sexo.exactitud_m}} of women, on {{NUEVO:sexo.base_filas}} rows reviewed by hand in {{sexo.padrones_auditados|letra}} rosters.
In {{sexo.padrones_sin_auditar|letra}} chambers—Argentina, Brazil, Chile, Ecuador, and Peru—the roster is unaudited, and a column marks it.
Turns include the chair; that is why the public measure is words.
The series was measured on {{NUEVO:medido_el|fecha_larga}} from our working files, which differ from the deposited files only for Ecuador: {{NUEVO:desfase_ec.sesiones|letra}} sessions and {{NUEVO:desfase_ec.filas}} rows after the edition's cutoff. If you recalculate the last decade for Ecuador from your download, it may not match exactly.

> [es] Cobertura: qué hay de cada cámara, año por año
<!-- fig.cobertura.titulo -->
Coverage: what there is for each chamber, year by year

> [es] Para cada cámara y cada año entre {{rejilla.desde}} y {{rejilla.hasta}}: si la base tiene al menos una sesión, cuántas sesiones y cuántos turnos de habla.
<!-- fig.cobertura.que_mide -->
For each chamber and each year between {{rejilla.desde}} and {{rejilla.hasta}}: whether the database has at least one session, how many sessions, and how many speech turns.

> [es] {{rejilla.total}} celdas, una por cámara y año. {{rejilla.llenas}} tienen al menos una sesión.
<!-- fig.cobertura.denominador -->
A total of {{rejilla.total}} cells, one per chamber and year. Of these, {{rejilla.llenas}} have at least one session.

> [es] Una celda llena quiere decir que hay al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Antes del inicio de una serie la celda está vacía y no es un hueco. Un hueco declarado son años dentro de la serie que el repositorio de la cámara no tiene, y lleva su etiqueta. ⏎ Faltan {{ausentes.n|letra}} países de un universo de {{universo.n}}. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- fig.cobertura.salvedad -->
A filled cell means that there is at least one session from that year, not that all of them are there. The shade shows how much material there is, not how much debate. Before the start of a series the cell is empty, and it is not a gap. A declared gap is a span of years within the series that the chamber's repository does not have, and it carries its label.
There are {{ausentes.n|letra}} countries missing from a universe of {{universo.n}}. Venezuela, Cuba, and Nicaragua do not publish the records of their debates. Bolivia publishes them without digitizing them. Honduras publishes summaries of what was discussed, not the interventions.


## Inicio

> [es] ParlaIbero · Lo que se dijo en {{corpus.n|letra}} cámaras iberoamericanas
<!-- inicio.meta.titulo -->
ParlaIbero · What was said in {{corpus.n|letra}} Ibero-American chambers

> [es] Infraestructura de datos abierta: lo que se dijo en el pleno de {{corpus.n}} cámaras de América Latina, España y Portugal, {{rejilla.desde}}–{{rejilla.hasta}}. Con DOI y explorador.
<!-- inicio.meta.descripcion -->
Open data infrastructure: what was said in the plenary of {{corpus.n}} chambers in Latin America, Spain, and Portugal, {{rejilla.desde}}–{{rejilla.hasta}}. With DOIs and an explorer.

> [es] ¿Cuánto de lo que dicen los representantes en el pleno lo dicen diputadas?
<!-- inicio.apertura.pregunta -->
How much of what deputies say in the plenary is said by women deputies?

> [es] {{corpus.n|letra}} cámaras, cada una contra sí misma, por década, en palabras.
<!-- inicio.apertura.figura.titulo -->
{{corpus.n|letra}} chambers, each against itself, by decade, in words.

> [es] En Uruguay, el {{pais.uy.palF.1980s.pct}} de las palabras en los ochenta; el {{pais.uy.palF.2020s.pct}} en esta década. En Costa Rica, del {{pais.cr.palF.1990s.pct}} en los noventa al {{pais.cr.palF.2020s.pct}}. Siempre sobre palabras de diputados y diputadas con sexo conocido. No en todas sube, y la figura no lo esconde.
<!-- inicio.apertura.figura.ejemplos -->
In Uruguay, {{pais.uy.palF.1980s.pct}} of the words in the eighties; {{pais.uy.palF.2020s.pct}} in this decade. In Costa Rica, from {{pais.cr.palF.1990s.pct}} in the nineties to {{pais.cr.palF.2020s.pct}}. Always as a share of the words of deputies of known sex. It does not rise in every chamber, and the figure does not hide it.

> [es] Mide voz, no presencia. El sexo lo asignamos nosotros, con más error en mujeres que en hombres; {{sexo.padrones_sin_auditar|letra}} cámaras sin revisión a mano se dibujan distinto. No ordena países.
<!-- inicio.apertura.figura.salvedad -->
It measures voice, not presence. Sex is assigned by us, with more error for women than for men; {{sexo.padrones_sin_auditar|letra}} chambers not reviewed by hand are drawn differently. It does not rank countries.

> [es] [Ver turnos y oradoras]
<!-- inicio.apertura.figura.medidas -->
[View speech turns and women speakers]

> [es] Comparar democracias iberoamericanas por lo que se dijo en sus cámaras costaba una carrera académica por país. Ese coste ya está pagado.
<!-- inicio.tesis -->
Comparing Ibero-American democracies by what was said in their chambers used to cost one academic career per country. That cost is already paid.

> [es] Tres años de trabajo. Una descarga. Eso es lo que significa infraestructura.
<!-- inicio.tesis.remate -->
Three years of work. One download. That is what infrastructure means.

> [es] {{corpus.n}} cámaras · {{rejilla.desde}}–{{rejilla.hasta}} · CC BY 4.0 · {{dois.n}} DOI · Universidad de Salamanca · Harvard Dataverse
<!-- inicio.credencial -->
{{corpus.n}} chambers · {{rejilla.desde}}–{{rejilla.hasta}} · CC BY 4.0 · {{dois.n}} DOIs · University of Salamanca · Harvard Dataverse

> [es] La pregunta tiene literatura (Bäck y Debus, 2019). Faltaba material para hacerla en {{corpus.n|letra}} cámaras iberoamericanas con la misma unidad.
<!-- inicio.apertura.literatura -->
The question has a literature (Bäck and Debus, 2019). What was missing was the material to ask it in {{corpus.n|letra}} Ibero-American chambers with the same unit.

> [es] ¿Qué hay, y desde cuándo?
<!-- inicio.cobertura.titulo -->
What is there, and since when?

> [es] Todo lo que había. No una muestra de lo que había.
<!-- inicio.cobertura.censal -->
Everything there was. Not a sample of what there was.

> [es] Tienen sesión {{rejilla.llenas}} de las {{rejilla.total}} celdas de cámara y año; el resto son años anteriores a cada serie o huecos declarados.
<!-- inicio.cobertura.rejilla -->
Of the {{rejilla.total}} chamber-year cells, {{rejilla.llenas}} have a session; the rest are years before each series or declared gaps.

> [es] Busque su cámara.
<!-- inicio.cobertura.busque -->
Find your chamber.

> [es] ¿Quién ocupa el tiempo del pleno?
<!-- inicio.pleno.titulo -->
Who occupies the plenary's time?

> [es] La unidad es el turno de palabra, tal como lo marca el propio Diario.
<!-- inicio.pleno.unidad -->
The unit is the speaking turn, as the Record itself marks it.

> [es] «Sí, si es urgente hay que demostrarlo, porque ahí también viene el dinero para compra de frijol y la época de siembra no espera a que la Asamblea quiera o no quiera, así que ojala que la próxima semana cumplamos lo que nos corresponde como diputados.»
<!-- inicio.pleno.fragmento -->
“Sí, si es urgente hay que demostrarlo, porque ahí también viene el dinero para compra de frijol y la época de siembra no espera a que la Asamblea quiera o no quiera, así que ojala que la próxima semana cumplamos lo que nos corresponde como diputados.” (Yes, if it is urgent, it has to be demonstrated, because the money to buy beans also comes in there, and the planting season does not wait for the Assembly to want to or not want to, so let us hope that next week we do what is ours to do as deputies.)

> [es] PCN · Asamblea Legislativa de El Salvador · {{NUEVO:cita.sv.fecha|fecha_larga}}
<!-- inicio.pleno.fragmento.pie -->
PCN · Asamblea Legislativa de El Salvador · {{NUEVO:cita.sv.fecha|fecha_larga}}

> [es] De {{habla.L}} turnos de habla, en el {{vinc.bruta}} sabemos qué diputado habla. Del resto, el {{novinc.noescano.pct}} es de quien no puede ocupar escaño —ministros, secretarios, invitados—; el {{novinc.colectiva.pct}}, voz colectiva; el {{novinc.laguna.pct}}, laguna nuestra. Sin contar los dos primeros, el {{vinc.efectiva}}.
<!-- inicio.pleno.vinculacion -->
Of {{habla.L}} speech turns, in {{vinc.bruta}} we know which deputy is speaking. Of the rest, those who cannot hold a seat—ministers, clerks, guests—account for {{novinc.noescano.pct}}; collective voice, {{novinc.colectiva.pct}}; our missed link, {{novinc.laguna.pct}}. Not counting the first two, {{vinc.efectiva}}.

> [es] En Panamá, el {{pais.pa.noescano}} de los turnos de habla es de quien no puede ocupar escaño. Compare [por país], nunca desde la cifra agrupada.
<!-- inicio.pleno.panama -->
In Panama, {{pais.pa.noescano}} of the speech turns belong to those who cannot hold a seat. Compare [by country], never from the pooled number.

> [es] ¿Qué se dijo aquel día?
<!-- inicio.sesiones.titulo -->
What was said that day?

> [es] {{NUEVO:eventos.n_presentes|letra}} sesiones que usted reconoce están aquí.
<!-- inicio.sesiones.entrada -->
{{NUEVO:eventos.n_presentes|letra}} sessions that you recognize are here.

> [es] La admisión del juicio político a la presidenta de Brasil, con {{evento.br-2016-04-17.filas}} filas. La investidura interrumpida por el asalto al Congreso español, con {{evento.es-1981-02-23.filas}}. La vacancia presidencial en Perú, con {{evento.pe-2020-11-09.filas}}.
<!-- inicio.sesiones.lista -->
The admission of the impeachment proceedings against Brazil's president, with {{evento.br-2016-04-17.filas}} rows. The investiture interrupted by the assault on Spain's Congreso de los Diputados, with {{evento.es-1981-02-23.filas}}. The removal of Peru's president by declaration of vacancy, with {{evento.pe-2020-11-09.filas}}.

> [es] Las dos del juicio político al presidente de Paraguay, no: caen en un hueco declarado.
<!-- inicio.sesiones.ausentes -->
The two from the impeachment trial of Paraguay's president are not here: they fall in a declared gap.

> [es] Abra una: descargue ese país y búsquela por fecha [en el explorador].
<!-- inicio.sesiones.invitacion -->
Open one: download that country and find it by date [in the explorer].

> [es] Cuatro preguntas sin dueño
<!-- inicio.sindueno.titulo -->
Four unclaimed questions

> [es] La base no trae anotación. Aquí entra usted.
<!-- inicio.sindueno.entrada -->
The database carries no annotation. This is where you come in.

> [es] **Tema.** Existe el esquema del Comparative Agendas Project; falta un clasificador validado en dos lenguas.
<!-- inicio.sindueno.tema -->
**Topic.** The Comparative Agendas Project coding scheme exists; a classifier validated in two languages is missing.

> [es] **Tono.** Faltan clasificadores validados; en actas escaneadas, medir tono puede ser medir el escáner.
<!-- inicio.sindueno.tono -->
**Tone.** Validated classifiers are missing; in scanned records, measuring tone can be measuring the scanner.

> [es] **Posición.** Están el texto y el partido; falta el escalado y su validación humana.
<!-- inicio.sindueno.posicion -->
**Position.** The text and the party are there; the scaling and its human validation are missing.

> [es] **Voto.** Los recuentos del Diario son texto; las votaciones vienen de fuera.
<!-- inicio.sindueno.voto -->
**Vote.** The tallies in the Record are text; the votes come from outside.

> [es] Tres años de trabajo. Una descarga.
<!-- inicio.empezar.titulo -->
Three years of work. One download.

> [es] Aquí las variables hay que construirlas.
<!-- inicio.empezar.entrada -->
Here, the variables have to be built.

> [es] **Sin programar.** [Los datos de cada figura], sin formulario. O [El Salvador] en [el explorador]: {{pais.sv.csv}}, de {{pais.sv.inicio}} a {{pais.sv.fin}}, con formulario.
<!-- inicio.empezar.salida1 -->
**No coding.** [The data for each figure], no form. Or [El Salvador] in [the explorer]: {{pais.sv.csv}}, from {{pais.sv.inicio}} to {{pais.sv.fin}}, with a form.

> [es] **Con R o Python básico.** [Un país], de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}: filtros, conteos, series.
<!-- inicio.empezar.salida2 -->
**With basic R or Python.** [One country], from {{NUEVO:csv.min}} to {{NUEVO:csv.max}}: filters, counts, series.

> [es] **Con métodos de texto.** [Los {{corpus.n|letra}}], {{NUEVO:csv.total}}: embeddings, clasificación, grafos. Es donde hay que aprender, y es aprendible.
<!-- inicio.empezar.salida3 -->
**With text analysis methods.** [All {{corpus.n|letra}}], {{NUEVO:csv.total}}: embeddings, classification, graphs. This is where you have to learn, and it can be learned.

> [es] {{NUEVO:coleccion.cita}}
<!-- inicio.empezar.cita -->
{{NUEVO:coleccion.cita}}


## Países · índice

> [es] Países · ParlaIbero
<!-- paises.meta.titulo -->
Countries · ParlaIbero

> [es] Qué hay de cada cámara, año por año: cobertura, huecos declarados, sesiones, filas y DOI de los {{corpus.n}} corpus de ParlaIbero.
<!-- paises.meta.descripcion -->
What there is for each chamber, year by year: coverage, declared gaps, sessions, rows, and DOIs of the {{corpus.n}} ParlaIbero corpora.

> [es] ¿Qué hay, y desde cuándo?
<!-- paises.titulo -->
What is there, and since when?

> [es] Una fila por cámara y una columna por año, de {{rejilla.desde}} a {{rejilla.hasta}}: de {{rejilla.total}} celdas, {{rejilla.llenas}} tienen al menos una sesión. Cada fila abre la ficha de su país.
<!-- paises.entradilla -->
One row per chamber and one column per year, from {{rejilla.desde}} to {{rejilla.hasta}}: of {{rejilla.total}} cells, {{rejilla.llenas}} have at least one session. Each row opens its country page.

> [es] Cómo leer la rejilla
<!-- paises.leyenda.titulo -->
How to read the grid

> [es] Con tono: ese año hay al menos una sesión en la base. No quiere decir que estén todas.
<!-- paises.leyenda.con_sesion -->
Shaded: that year there is at least one session in the database. It does not mean that all of them are there.

> [es] Con contorno y etiqueta: hueco declarado. Son años dentro de la serie que el repositorio de la cámara no tiene.
<!-- paises.leyenda.hueco -->
Outlined and labeled: declared gap. These are years within the series that the chamber's repository does not have.

> [es] Vacía: año anterior al inicio de la serie de esa cámara.
<!-- paises.leyenda.anterior -->
Empty: a year before the start of that chamber's series.

> [es] El tono dice cuántos turnos de habla hay ese año. Los cortes van impresos junto a la escala.
<!-- paises.leyenda.tono -->
The shade shows how many speech turns there are that year. The cut points are printed next to the scale.

> [es] El tono dice cuánto material hay, no cuánto se debate. La ausencia nunca lleva color.
<!-- paises.leyenda.no_significa -->
The shade shows how much material there is, not how much debate. Absence never carries color.

> [es] Edición depositada: lo que devuelve cada DOI. No todas las filas son habla; por eso van las dos columnas.
<!-- paises.tabla.pie -->
Deposited edition: what each DOI returns. Not all rows are speech; that is why both columns are shown.

> [es] País
<!-- paises.tabla.col.pais -->
Country

> [es] Cámara
<!-- paises.tabla.col.camara -->
Chamber

> [es] Diario
<!-- paises.tabla.col.diario -->
Record

> [es] Periodo
<!-- paises.tabla.col.periodo -->
Period

> [es] Años con sesión
<!-- paises.tabla.col.anos -->
Years with a session

> [es] Huecos declarados
<!-- paises.tabla.col.huecos -->
Declared gaps

> [es] Sesiones
<!-- paises.tabla.col.sesiones -->
Sessions

> [es] Filas
<!-- paises.tabla.col.filas -->
Rows

> [es] Turnos de habla
<!-- paises.tabla.col.habla -->
Speech turns

> [es] DOI
<!-- paises.tabla.col.doi -->
DOI

> [es] [Descargar los datos de la figura]
<!-- paises.descarga.boton -->
[Download the figure data]

> [es] Antes de comparar países
<!-- paises.aviso.titulo -->
Before comparing countries

> [es] La legislatura no significa lo mismo en dos países. Se comparan tasas dentro de un país, a lo largo del tiempo. Entre países, solo con el denominador a la vista.
<!-- paises.aviso.comparabilidad -->
The legislature (the term each Record prints) does not mean the same thing in two countries. Rates are compared within a country, over time. Between countries, only with the denominator in plain view.


## Ficha de país

> [es] {{pais.<iso>.nombre}} · ParlaIbero
<!-- ficha.meta.titulo -->
{{pais.<iso>.nombre}} · ParlaIbero

> [es] {{pais.<iso>.nombre}}
<!-- ficha.titulo -->
{{pais.<iso>.nombre}}

> [es] {{pais.<iso>.camara}} · {{pais.<iso>.inicio}}–{{pais.<iso>.fin}}
<!-- ficha.subtitulo -->
{{pais.<iso>.camara}} · {{pais.<iso>.inicio}}–{{pais.<iso>.fin}}

> [es] Hoy puede
<!-- ficha.tareas.titulo -->
Today you can

> [es] **Buscar** en este pleno, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, por texto, fecha, partido, legislatura y diputado.
<!-- ficha.tareas.buscar -->
**Search** this plenary, from {{pais.<iso>.inicio}} to {{pais.<iso>.fin}}, by text, date, party, legislature (the term each Record prints), and deputy.

> [es] (salvo {{NUEVO:pais.<iso>.huecos_rangos}})
<!-- ficha.tareas.buscar.huecos -->
(except {{NUEVO:pais.<iso>.huecos_rangos}})

> [es] **Abrir una sesión que reconoce:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}} Que esté no valida su contenido.
<!-- ficha.tareas.sesion -->
**Open a session that you recognize:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}} That it is here does not validate its content.

> [es] **Una sesión que no encontrará:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}}
<!-- ficha.tareas.sesion_ausente -->
**A session that you will not find:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}}

> [es] **Exportar con su cita.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.
<!-- ficha.tareas.exportar -->
**Export with its citation.** To cite a passage, give the date and the session number, and check it against the official Record.

> [es] En este archivo, solo el {{NUEVO:pais.<iso>.disp.session_number}} de las filas lleva número de sesión: aquí el pasaje se localiza por fecha.
<!-- ficha.tareas.exportar.sin_numero -->
In this file, only {{NUEVO:pais.<iso>.disp.session_number}} of the rows carry a session number: here a passage is found by date.

> [es] Qué es
<!-- ficha.que_es.titulo -->
What it is

> [es] El pleno de esta cámara, turno por turno, según su registro oficial: {{NUEVO:pais.<iso>.diario}}.
<!-- ficha.que_es.texto -->
The plenary of this chamber, turn by turn, according to its official record: {{NUEVO:pais.<iso>.diario}}.

> [es] Hay sesión todos los años, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.
<!-- ficha.que_es.sin_huecos -->
Every year has a session, from {{pais.<iso>.inicio}} to {{pais.<iso>.fin}}.

> [es] De {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, faltan {{NUEVO:pais.<iso>.huecos_rangos}}: el repositorio de la cámara no los tiene.
<!-- ficha.que_es.con_huecos -->
From {{pais.<iso>.inicio}} to {{pais.<iso>.fin}}, the years {{NUEVO:pais.<iso>.huecos_rangos}} are missing: the chamber's repository does not have them.

> [es] De dónde sale
<!-- ficha.fuente.titulo -->
Where it comes from

> [es] {{NUEVO:pais.<iso>.fuente}} ⏎ Cómo se transformó, paso a paso, lo cuenta el informe del proceso que acompaña al conjunto. [Leer el informe en Dataverse]
<!-- ficha.fuente.texto -->
{{NUEVO:pais.<iso>.fuente}}
How it was transformed, step by step, is told in the process report that comes with the dataset. [Read the report on Dataverse]

> [es] Cifras
<!-- ficha.cifras.titulo -->
Numbers

> [es] {{pais.<iso>.sesiones.P}} sesiones, en {{NUEVO:pais.<iso>.anos_con_sesion}} de {{NUEVO:pais.<iso>.anos_periodo}} años.
<!-- ficha.cifras.sesiones -->
{{pais.<iso>.sesiones.P}} sessions, in {{NUEVO:pais.<iso>.anos_con_sesion}} of {{NUEVO:pais.<iso>.anos_periodo}} years.

> [es] Sin ningún turno de habla, {{NUEVO:pais.<iso>.sesiones_sin_habla}}.
<!-- ficha.cifras.sin_habla -->
With no speech turns, {{NUEVO:pais.<iso>.sesiones_sin_habla}}.

> [es] {{pais.<iso>.filas.P}} filas; {{NUEVO:pais.<iso>.habla.L}} son turnos de habla.
<!-- ficha.cifras.filas -->
{{pais.<iso>.filas.P}} rows; {{NUEVO:pais.<iso>.habla.L}} are speech turns.

> [es] En el {{pais.<iso>.bruta}} de esos turnos sabemos qué diputado habla; otro {{pais.<iso>.noescano}} es de quien no puede ocupar escaño. Sin contar estos ni las voces colectivas, el {{pais.<iso>.efectiva}}.
<!-- ficha.cifras.vinculacion -->
In {{pais.<iso>.bruta}} of those speech turns, we know which deputy is speaking; another {{pais.<iso>.noescano}} belong to those who cannot hold a seat. Not counting these or collective voices, {{pais.<iso>.efectiva}}.

> [es] [Ver cómo se calcula]
<!-- ficha.cifras.enlace -->
[View how it is calculated]

> [es] Voz femenina, en palabras
<!-- ficha.voz.titulo -->
Women's voice, in words

> [es] Palabras de diputadas por cada cien de diputados y diputadas con sexo conocido, por década. Mide voz, no escaños.
<!-- ficha.voz.texto -->
Words of women deputies for every hundred words of deputies of known sex, by decade. It measures voice, not seats.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el {{sexo.exactitud_m}} de las mujeres y en el {{sexo.exactitud_h}} de los hombres, medido en conjunto sobre {{sexo.padrones_auditados|letra}} padrones —las listas de diputados— revisados a mano. Este es uno de ellos.
<!-- ficha.voz.salvedad.auditado -->
Sex is assigned by us, with more error for women than for men. We assign it correctly for {{sexo.exactitud_m}} of women and for {{sexo.exactitud_h}} of men, measured together across {{sexo.padrones_auditados|letra}} rosters—the lists of deputies—reviewed by hand. This is one of them.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Ese error se midió en {{sexo.padrones_auditados|letra}} padrones —las listas de diputados— revisados a mano. Este no está entre ellos, y su serie se dibuja distinto.
<!-- ficha.voz.salvedad.sin_auditar -->
Sex is assigned by us, with more error for women than for men. That error was measured in {{sexo.padrones_auditados|letra}} rosters—the lists of deputies—reviewed by hand. This one is not among them, and its series is drawn differently.

> [es] [Ver turnos y oradoras]
<!-- ficha.voz.enlace -->
[View speech turns and women speakers]

> [es] Antes de usarlo
<!-- ficha.antes.titulo -->
Before using it

> [es] Este corpus declara {{NUEVO:pais.<iso>.n_limitaciones|letra}} limitaciones, medidas una a una. Están en el documento «Limitaciones conocidas» del conjunto, en inglés, español y portugués. [Leer las limitaciones en Dataverse]
<!-- ficha.antes.intro -->
This corpus declares {{NUEVO:pais.<iso>.n_limitaciones|letra}} limitations, each one measured. They are in the dataset's "Known limitations" document, in English, Spanish and Portuguese. [Read the limitations on Dataverse]

> [es] El conjunto de datos
<!-- ficha.paquete.titulo -->
The dataset

> [es] {{paquete.ficheros}} archivos: las intervenciones; el padrón; LÉAME, diccionario de datos, limitaciones conocidas e informe del proceso, en inglés, español y portugués; y, para programas, cifras del corpus, metadatos y métodos de vinculación.
<!-- ficha.paquete.texto -->
There are {{paquete.ficheros}} files: the interventions; the roster; README, data dictionary, known limitations, and processing report, in English, Spanish, and Portuguese; and, for software, corpus numbers, metadata, and linkage methods.

> [es] Las intervenciones pesan {{pais.<iso>.csv}}. No las abra en una hoja de cálculo: puede cortar filas y textos. Al elegir el archivo, el explorador le dice cuánta memoria necesita.
<!-- ficha.paquete.peso -->
The interventions file is {{pais.<iso>.csv}}. Do not open it in a spreadsheet: it can truncate rows and text. When you choose the file, the explorer tells you how much memory it needs.

> [es] [Descargar en Dataverse]
<!-- ficha.descarga.boton -->
[Download from Dataverse]

> [es] [Abrir el explorador]
<!-- ficha.descarga.explorador -->
[Open the explorer]

> [es] Autoría: {{NUEVO:pais.<iso>.autores}}. DOI: {{pais.<iso>.doi}}. Edición {{pais.<iso>.version}}. Licencia {{NUEVO:pais.<iso>.licencia}}.
<!-- ficha.credito -->
Authorship: {{NUEVO:pais.<iso>.autores}}. DOI: {{pais.<iso>.doi}}. Edition {{pais.<iso>.version}}. License {{NUEVO:pais.<iso>.licencia}}.

> [es] Cómo citar
<!-- ficha.cita.titulo -->
How to cite

> [es] {{NUEVO:pais.<iso>.cita}}
<!-- ficha.cita.texto -->
{{NUEVO:pais.<iso>.cita}}


## Metodología

> [es] Metodología · ParlaIbero
<!-- metodologia.meta.titulo -->
Methodology · ParlaIbero

> [es] Qué es una fila, quién habla, cuánto falla la variable de sexo y qué no afirman los {{corpus.n}} corpus. Cada apartado lleva a los datos y al explorador.
<!-- metodologia.meta.descripcion -->
What a row is, who speaks, how often the sex variable fails, and what the {{corpus.n}} corpora do not claim. Each section leads to the data and the explorer.

> [es] En esta página
<!-- metodologia.indice.titulo -->
On this page

> [es] Qué es una fila
<!-- metodologia.indice.1 -->
What a row is

> [es] De la fuente a la tabla
<!-- metodologia.indice.2 -->
From the source to the table

> [es] Habla y no habla
<!-- metodologia.indice.3 -->
Speech and non-speech

> [es] Quién habla
<!-- metodologia.indice.4 -->
Who speaks

> [es] Sexo y auditoría de género
<!-- metodologia.indice.5 -->
Sex and the gender audit

> [es] Páginas escaneadas
<!-- metodologia.indice.6 -->
Scanned pages

> [es] Validación y revisión
<!-- metodologia.indice.7 -->
Validation and review

> [es] Lo que no afirma
<!-- metodologia.indice.8 -->
What it does not claim

> [es] Ediciones y reproducibilidad
<!-- metodologia.indice.9 -->
Editions and reproducibility

> [es] Documentación completa
<!-- metodologia.indice.10 -->
Full documentation

> [es] Metodología
<!-- metodologia.titulo -->
Methodology

> [es] Qué hay en cada fila, qué se midió y qué no se afirma.
<!-- metodologia.subtitulo -->
What is in each row, what was measured, and what is not claimed.

> [es] Esta página no recorre el proceso etapa por etapa. Responde lo que preguntaría un revisor, con cada límite en la misma frase que su cifra.
<!-- metodologia.entradilla.1 -->
This page does not follow the process stage by stage. It answers what a reviewer would ask, with each limit in the same sentence as its number.

> [es] Cada apartado termina en algo que usted puede comprobar con sus manos.
<!-- metodologia.entradilla.2 -->
Each section ends with something you can check for yourself.

> [es] A {{NUEVO:fecha_busqueda|fecha_larga}} no hemos localizado otro corpus de varios países de América Latina con el texto íntegro y cada orador identificado como diputado. Existen ParlaMint, que cubre España y Portugal; ParlSpeech, que cubre España; y ParlEE. En la región, padrones sin texto, discursos presidenciales y corpus nacionales.
<!-- metodologia.novedad -->
As of {{NUEVO:fecha_busqueda|fecha_larga}}, we have not located another corpus covering several Latin American countries with the full text and each speaker identified as a deputy. There are ParlaMint, which covers Spain and Portugal; ParlSpeech, which covers Spain; and ParlEE. In the region, rosters without text, presidential speeches, and national corpora.

> [es] Qué es una fila
<!-- metodologia.1.titulo -->
What a row is

> [es] La unidad es el turno de palabra, tal como lo marca el propio Diario. Cada turno es una fila.
<!-- metodologia.1.p1 -->
The unit is the speaking turn, as the Record itself marks it. Each turn is a row.

> [es] Lleva la designación del orador exactamente como se imprimió, el texto íntegro, la sesión y su posición en ella. Si el orador pudo identificarse, lleva además su identificador en el padrón, con nombre, sexo, partido y distrito. Son {{columnas.n}} columnas, las mismas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.1.p2 -->
Each row carries the speaker's designation exactly as printed, the full text, the session, and its position within it. If the speaker could be identified, it also carries their identifier in the roster, with name, sex, party, and district. There are {{columnas.n}} columns, the same in all {{corpus.n|letra}} chambers.

> [es] El texto no está resumido ni lematizado. El orden se conserva. Y el orden es información.
<!-- metodologia.1.p3 -->
The text is neither summarized nor lemmatized. The order is preserved. And the order is information.

> [es] El Diario no es la sesión: es lo que cada cámara publicó de ella. La mediana va de {{turno.mediana_min.n}} palabras por turno en {{turno.mediana_min.pais}} a {{turno.mediana_max.n}} en {{turno.mediana_max.pais}}. Esa distancia mide cómo transcribe cada cámara, no cuánto se debate.
<!-- metodologia.1.p4 -->
The Record is not the session: it is what each chamber published of it. The median ranges from {{turno.mediana_min.n}} words per turn in {{turno.mediana_min.pais}} to {{turno.mediana_max.n}} in {{turno.mediana_max.pais}}. That distance measures how each chamber transcribes, not how much debate there is.

> [es] Pruébelo. Descargue El Salvador, el archivo más pequeño ({{pais.sv.csv}}; cubre de {{pais.sv.inicio}} a {{pais.sv.fin}}), y ábralo en el explorador. [Descargar los datos] · [Abrir el explorador]
<!-- metodologia.1.pruebelo -->
Try it. Download El Salvador, the smallest file ({{pais.sv.csv}}; it covers {{pais.sv.inicio}} to {{pais.sv.fin}}), and open it in the explorer. [Download the data] · [Open the explorer]

> [es] De {{corpus.n|letra}} tradiciones tipográficas a una tabla
<!-- metodologia.2.titulo -->
From {{corpus.n|letra}} typographic traditions to one table

> [es] Cada cámara imprime a su manera quién toma la palabra: «El señor APELLIDO:» en una, «O SR. NOME (partido - estado) –» en otra. Cinco pasos las llevan a una sola tabla.
<!-- metodologia.2.p1 -->
Each chamber prints in its own way who takes the floor: “El señor APELLIDO:” in one, “O SR. NOME (partido - estado) –” in another. Five steps bring them into a single table.

> [es] **De la fuente al texto fiel.** PDF digital, página escaneada, HTML, XML o Word: primero se extrae el texto sin tocar nada. Después se limpian cabeceras, folios y palabras cortadas.
<!-- metodologia.2.paso1 -->
**From the source to the faithful text.** Digital PDF, scanned page, HTML, XML, or Word: first the text is extracted without touching anything. Then page headers, page numbers, and words split across lines are cleaned.

> [es] **Del texto a los turnos.** Cada marcador de orador se localiza con las fórmulas de esa cámara y de esa época. Un marcador sin reconocer entierra un turno dentro del anterior, y ningún recuento lo ve. Por eso uno solo detiene el etiquetado de esa sesión.
<!-- metodologia.2.paso2 -->
**From the text to the turns.** Each speaker marker is located with the formulas of that chamber and that period. An unrecognized marker buries a turn inside the previous one, and no count sees it. That is why a single one stops the tagging of that session.

> [es] **De los oradores a los diputados.** Cada designación impresa se coteja con el padrón: {{padron.personas}} personas en {{padron.tramos}} tramos de mandato, en las {{corpus.n|letra}} cámaras.
<!-- metodologia.2.paso3 -->
**From the speakers to the deputies.** Each printed designation is checked against the roster: {{padron.personas}} people in {{padron.tramos}} term segments, across the {{corpus.n|letra}} chambers.

> [es] **Del padrón al esquema común.** La fila recibe partido, distrito y sexo según el tramo que cubre su fecha.
<!-- metodologia.2.paso4 -->
**From the roster to the common schema.** The row receives party, district, and sex according to the term segment that covers its date.

> [es] **Del esquema al depósito.** Cada país se publica con {{paquete.ficheros}} archivos —datos, padrón y documentación—, generados por un solo programa, nunca a mano.
<!-- metodologia.2.paso5 -->
**From the schema to the deposit.** Each country is published with {{paquete.ficheros}} files—data, roster, and documentation—generated by a single program, never by hand.

> [es] Las filas las produce código determinista. El modelo de lenguaje escribió ese código y reconoció las páginas escaneadas más antiguas.
<!-- metodologia.2.p2 -->
The rows are produced by deterministic code. The language model wrote that code and recognized the text of the oldest scanned pages.

> [es] Pruébelo. En la ficha de su país, vea de qué fuente y de qué formato salió su texto. [Ver los países]
<!-- metodologia.2.pruebelo -->
Try it. On your country page, see which source and which format its text came from. [View the countries]

> [es] Habla y no habla
<!-- metodologia.3.titulo -->
Speech and non-speech

> [es] Nada se borra del Diario.
<!-- metodologia.3.p1 -->
Nothing is deleted from the Record.

> [es] La carátula, el sumario y el pase de lista se conservan en su lugar, como primera fila de la sesión: {{prolegomena.C}} filas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.3.p2 -->
The cover page, the table of contents, and the roll call are kept in place, as the first row of the session: {{prolegomena.C}} rows across the {{corpus.n|letra}} chambers.

> [es] Llevan la marca `dm_speech = 0`. También la llevan los recuentos de votación nominal, la narración y los documentos leídos, donde el propio Diario demuestra que no son habla: {{nohabla.C}} filas en total.
<!-- metodologia.3.p3 -->
They carry the mark `dm_speech = 0`. So do the roll-call vote tallies, the narration, and the documents read aloud, where the Record itself proves that they are not speech: {{nohabla.C}} rows in total.

> [es] La marca es asimétrica, a propósito. Un `0` se pone solo donde está probado. Un `1` no significa «habla verificada»: significa «no está demostrado que no sea habla».
<!-- metodologia.3.p4 -->
The mark is asymmetric, on purpose. A `0` is set only where it is proven. A `1` does not mean “verified speech”: it means “not proven to be non-speech.”

> [es] La consecuencia se declara. En Argentina, Uruguay, México, Costa Rica, Ecuador, República Dominicana y Guatemala, parte de lo leído en voz alta sigue dentro del turno de quien lo lee. Allí, el recuento de palabras de quien preside queda inflado.
<!-- metodologia.3.p5 -->
The consequence is declared. In Argentina, Uruguay, Mexico, Costa Rica, Ecuador, the Dominican Republic, and Guatemala, part of what is read aloud remains inside the turn of whoever reads it. There, the word count of the chair is inflated.

> [es] Filtrar le corresponde a usted. Decidir por usted, no.
<!-- metodologia.3.p6 -->
Filtering is up to you. Deciding for you is not up to us.

> [es] Pruébelo. En el explorador, la primera entrada de cada sesión es «Encabezado y sumario de la sesión». Ahí está el pase de lista. [Abrir el explorador]
<!-- metodologia.3.pruebelo -->
Try it. In the explorer, the first entry of each session is “Encabezado y sumario de la sesión” (Session heading and table of contents). The roll call is there. [Open the explorer]

> [es] Quién habla
<!-- metodologia.4.titulo -->
Who speaks

> [es] El {{vinc.bruta}} de los turnos de habla lleva un diputado identificado: {{vinculados.L}} de {{habla.L}}. Es la vinculación bruta.
<!-- metodologia.4.p1 -->
Of the speech turns, {{vinc.bruta}} carry an identified deputy: {{vinculados.L}} of {{habla.L}}. This is gross linkage.

> [es] La efectiva es el {{vinc.efectiva}}. Descuenta del denominador dos clases de turnos, y solo dos. Los de quien no puede ocupar escaño: ministros, secretarios administrativos, relatores, invitados. Y los que el Diario hace inatribuibles, como «Varios señores diputados».
<!-- metodologia.4.p2 -->
Effective linkage is {{vinc.efectiva}}. It excludes two kinds of turns from the denominator, and only two. The turns of those who cannot hold a seat: ministers, administrative clerks, reading clerks, guests. And those the Record makes unattributable, such as “Varios señores diputados”.

> [es] No descuenta a quien preside sin nombre. Quien preside es diputado: si su identidad no se recuperó, es laguna nuestra.
<!-- metodologia.4.p3 -->
It does not exclude an unnamed chair. Whoever chairs is a deputy: if their identity was not recovered, that is our missed link.

> [es] Quedan sin diputado {{novinc.n}} turnos de habla. {{novinc.noescano.n}}, el {{novinc.noescano.pct}}, son de quien no puede ocupar escaño. {{novinc.colectiva.n}}, el {{novinc.colectiva.pct}}, voz colectiva o anónima. {{novinc.laguna.n}}, el {{novinc.laguna.pct}}, laguna nuestra.
<!-- metodologia.4.p4 -->
That leaves {{novinc.n}} speech turns without a deputy. Of these, {{novinc.noescano.n}}, or {{novinc.noescano.pct}}, belong to those who cannot hold a seat. Another {{novinc.colectiva.n}}, or {{novinc.colectiva.pct}}, are collective or anonymous voices. The remaining {{novinc.laguna.n}}, or {{novinc.laguna.pct}}, are our missed links.

> [es] La distancia entre las dos tasas es propiedad del Diario, no del procesamiento. En Panamá, el {{pais.pa.noescano}} de los turnos de habla es de quien no puede ocupar escaño, sobre todo la Secretaría, que lee; en Uruguay, el {{pais.uy.noescano}}. Por eso la comparación entre países parte de la tabla por cámara, no de la cifra agrupada.
<!-- metodologia.4.p5 -->
The distance between the two rates is a property of the Record, not of the processing. In Panama, {{pais.pa.noescano}} of the speech turns belong to those who cannot hold a seat, above all the Secretaría, which reads aloud; in Uruguay, {{pais.uy.noescano}}. That is why comparison between countries starts from the table by chamber, not from the pooled number.

> [es] Pruébelo. Busque su cámara: las dos tasas, y lo que descuenta cada una. [Descargar los datos de la figura]
<!-- metodologia.4.pruebelo -->
Try it. Find your chamber: the two rates, and what each one excludes. [Download the figure data]

> [es] El sexo es una variable derivada
<!-- metodologia.5.titulo -->
Sex is a derived variable

> [es] Ningún Diario declara el sexo de quien habla. La columna `sex` se deriva en el padrón: de un registro oficial donde existe; si no, del nombre de pila o del tratamiento. Cada valor lleva su procedencia en `sex_source`.
<!-- metodologia.5.p1 -->
No Record states the sex of whoever speaks. The `sex` column is derived in the roster: from an official registry where one exists; otherwise, from the given name or the form of address. Each value carries its provenance in `sex_source`.

> [es] Su exactitud es del {{sexo.exactitud}}, medida contra la revisión humana exhaustiva de {{sexo.padrones_auditados|letra}} padrones completos, {{NUEVO:sexo.base_filas}} filas. En hombres, el {{sexo.exactitud_h}}; en mujeres, el {{sexo.exactitud_m}}. El error es {{sexo.razon_error.n}} veces más probable en mujeres. La cifra caracteriza el procedimiento, no cada corpus.
<!-- metodologia.5.p2 -->
Its accuracy is {{sexo.exactitud}}, measured against the exhaustive human review of {{sexo.padrones_auditados|letra}} complete rosters, {{NUEVO:sexo.base_filas}} rows. For men, {{sexo.exactitud_h}}; for women, {{sexo.exactitud_m}}. Error is {{sexo.razon_error.n}} times more likely for women. The number characterizes the procedure, not each corpus.

> [es] Los otros {{sexo.padrones_sin_auditar|letra}} —Argentina, Brasil, Chile, Ecuador y Perú— no están auditados, y en las figuras se dibujan distinto. No son iguales entre sí. Brasil, Chile y Perú toman el sexo de un registro oficial; en Ecuador, todo valor se infiere del nombre o del tratamiento. Quien necesite precisión restringe `sex_source` a `manual`, `official_registry` y `given_name`; eso deja fuera a Ecuador entero.
<!-- metodologia.5.p3 -->
The other {{sexo.padrones_sin_auditar|letra}}—Argentina, Brazil, Chile, Ecuador, and Peru—are not audited, and they are drawn differently in the figures. They are not alike. Brazil, Chile, and Peru take sex from an official registry; in Ecuador, every value is inferred from the name or the form of address. Anyone who needs precision restricts `sex_source` to `manual`, `official_registry`, and `given_name`; that excludes all of Ecuador.

> [es] La auditoría de género
<!-- metodologia.5.subtitulo -->
The gender audit

> [es] Los defectos de extracción no son neutrales. Cuando un patrón falla, quien desaparece es, con más frecuencia, una mujer.
<!-- metodologia.5.p4 -->
Extraction defects are not neutral. When a pattern fails, the person who disappears is, more often, a woman.

> [es] En Costa Rica, el patrón reconocía «PRESIDENTE» y no «PRESIDENTA». El verificador había heredado el mismo léxico e informaba cero residuos. Los totales cuadraban. Los turnos de las mujeres que presidían quedaban dentro del turno anterior.
<!-- metodologia.5.p5 -->
In Costa Rica, the pattern recognized “PRESIDENTE” and not “PRESIDENTA”. The checker had inherited the same lexicon and reported zero residual markers. The totals matched. The turns of the women who chaired were left inside the previous turn.

> [es] En Brasil se pudo medir al corregir el patrón, antes de volver a procesar el corpus. Las mujeres eran el {{NUEVO:genero.br.pct_turnos}} de los turnos y el {{NUEVO:genero.br.pct_recuperados}} de los turnos recuperados.
<!-- metodologia.5.p6 -->
In Brazil it could be measured when the pattern was corrected, before the corpus was processed again. Women accounted for {{NUEVO:genero.br.pct_turnos}} of the turns and {{NUEVO:genero.br.pct_recuperados}} of the recovered turns.

> [es] El patrón se escribe primero en masculino. Las formas femeninas son más variadas y se rompen más con el salto de línea. El genérico «Presidente» esconde a quien preside. De ahí la regla: «PRESIDENTA» no puede ser un hombre; «PRESIDENTE» no dice nada.
<!-- metodologia.5.p7 -->
The pattern is written first in the masculine. The feminine forms are more varied, and the line break splits them more often. The generic “Presidente” hides whoever chairs. Hence the rule: “PRESIDENTA” cannot be a man; “PRESIDENTE” says nothing.

> [es] No todo fue en la misma dirección, y se dice: en Argentina, una corrección movió filas de mujeres a hombres. La afirmación que queda no depende de la dirección: cada corrección acercó el corpus al Diario.
<!-- metodologia.5.p8 -->
Not everything went in the same direction, and we say so: in Argentina, one correction moved rows from women to men. The claim that stands does not depend on direction: each correction brought the corpus closer to the Record.

> [es] Pruébelo. Descargue los datos de la figura de apertura: palabras, turnos y oradoras, por cámara y década. Sin formulario. [Descargar los datos de la figura]
<!-- metodologia.5.pruebelo -->
Try it. Download the data for the opening figure: words, turns, and women speakers, by chamber and decade. No form. [Download the figure data]

> [es] El reconocimiento óptico: lo que falló
<!-- metodologia.6.titulo -->
Optical character recognition (OCR): what failed

> [es] Ecuador entero es papel escaneado. También los años más antiguos de Uruguay, Panamá y Paraguay, y {{NUEVO:ocr.do.sesiones|letra}} sesiones dominicanas.
<!-- metodologia.6.p1 -->
All of Ecuador is scanned paper. So are the earliest years of Uruguay, Panama, and Paraguay, and {{NUEVO:ocr.do.sesiones|letra}} Dominican sessions.

> [es] Parte de esas páginas las leyó un modelo de visión, que a veces escribió texto propio dentro del Diario: su instrucción, comentarios y, lo peor, líneas en español traducidas al inglés.
<!-- metodologia.6.p2 -->
A vision model read some of those pages and sometimes wrote its own text inside the Record: its instructions, comments, and, worst of all, Spanish lines translated into English.

> [es] Se retiraron {{ocr.fragmentos_retirados}} fragmentos en Uruguay, Ecuador, Panamá y República Dominicana. La clase está acotada, no cerrada: el modelo improvisa una redacción distinta cada vez, y lo que tradujo no se repara borrando.
<!-- metodologia.6.p3 -->
We removed {{ocr.fragmentos_retirados}} fragments in Uruguay, Ecuador, Panama, and the Dominican Republic. The class is bounded, not closed: the model improvises a different wording each time, and what it translated cannot be repaired by deleting.

> [es] Donde el escaneado cortó el margen, no se reconstruyó nada. Lo que no está en el píxel no se inventa.
<!-- metodologia.6.p4 -->
Where the scan cropped the margin, nothing was reconstructed. What is not in the pixels is not invented.

> [es] Pruébelo. Lea las limitaciones declaradas de Ecuador, el único corpus escaneado de principio a fin. [Ver la ficha de Ecuador]
<!-- metodologia.6.pruebelo -->
Try it. Read the declared limitations of Ecuador, the only corpus scanned from beginning to end. [View the page for Ecuador]

> [es] Validación y revisión humana
<!-- metodologia.7.titulo -->
Validation and human review

> [es] Aquí hay dos cosas distintas, y cada una lleva su rótulo entero.
<!-- metodologia.7.p1 -->
There are two different things here, and each carries its full label.

> [es] Fuga del filtro PASS/FLAG: {{validacion.fuga.pct}} {{validacion.fuga.ic}}.
<!-- metodologia.7.rotulo -->
Leakage of the PASS/FLAG filter: {{validacion.fuga.pct}} {{validacion.fuga.ic}}.

> [es] La muestra: {{NUEVO:validacion.filas_pais}} filas al azar en cada uno de {{NUEVO:validacion.paises|letra}} países. Un filtro determinista separa las filas trivialmente correctas —PASS— del resto —FLAG—, que pasa a revisión humana. La fuga es lo que el filtro aprueba y no debía: {{NUEVO:validacion.fuga.n}} de {{NUEVO:validacion.fuga.den}} filas aprobadas y releídas a mano.
<!-- metodologia.7.p2 -->
The sample: {{NUEVO:validacion.filas_pais}} random rows in each of {{NUEVO:validacion.paises|letra}} countries. A deterministic filter separates the trivially correct rows—PASS—from the rest—FLAG—which goes to human review. Leakage is what the filter passes and should not: {{NUEVO:validacion.fuga.n}} of {{NUEVO:validacion.fuga.den}} rows passed and reread by hand.

> [es] Se ejecutó el {{NUEVO:validacion.fecha|fecha_larga}}, antes de volver a procesar el corpus del que sale la edición publicada, y sin Ecuador. No es la tasa de error del archivo que usted descarga. No sostiene la frase «los {{corpus.n|letra}} validados».
<!-- metodologia.7.p3 -->
It was run on {{NUEVO:validacion.fecha|fecha_larga}}, before the corpus was processed again to produce the published edition, and without Ecuador. It is not the error rate of the file you download. It does not support the phrase “all {{corpus.n|letra}} validated.”

> [es] Lo segundo: leímos los {{corpus.n|letra}} archivos fila a fila, antes y después de volver a procesarlos. Esa lectura encontró lo que ningún control había visto: cabeceras y folios incrustados en mitad de las frases, marcadores de orador partidos una palabra por línea.
<!-- metodologia.7.p4 -->
The second thing: we read the {{corpus.n|letra}} files row by row, before and after processing them again. That reading found what no check had seen: page headers and page numbers embedded in the middle of sentences, speaker markers split one word per line.

> [es] «Revisado» no significa «sin defectos conocidos». Los conocidos están medidos y declarados, país por país.
<!-- metodologia.7.p5 -->
“Reviewed” does not mean “free of known defects.” The known ones are measured and declared, country by country.

> [es] Pruébelo. Abra las limitaciones conocidas de su cámara. [Ver los países]
<!-- metodologia.7.pruebelo -->
Try it. Open the known limitations of your chamber. [View the countries]

> [es] Lo que el corpus no afirma, y cómo comparar
<!-- metodologia.8.titulo -->
What the corpus does not claim, and how to compare

> [es] Esta edición entrega la evidencia material: lo dicho, estructurado, atribuido y medido. No trae tema, tono, posición ideológica ni voto.
<!-- metodologia.8.p1 -->
This edition delivers the material evidence: what was said, structured, attributed, and measured. It does not include topic, tone, ideological position, or vote.

> [es] No afirma que un `dm_speech = 1` sea habla verificada, ni que quien preside esté identificado en cada fila, ni que las décadas escaneadas estén libres de errores.
<!-- metodologia.8.p2 -->
It does not claim that a `dm_speech = 1` is verified speech, nor that the chair is identified in every row, nor that the scanned decades are free of errors.

> [es] La columna `legislature` no es comparable entre países: es lo que imprime cada Diario, sea un período constitucional, un año o un semestre. Las claves comparables son `id_session` y la fecha.
<!-- metodologia.8.p3 -->
The `legislature` column is not comparable across countries: it is what each Record prints, whether a constitutional term, a year, or a half-year. The comparable keys are `id_session` and the date.

> [es] Cómo comparar: tasas dentro de un país, contra sí mismo, en el tiempo. Nunca volúmenes entre países. Y el denominador, a la vista.
<!-- metodologia.8.p4 -->
How to compare: rates within a country, against itself, over time. Never volumes across countries. And the denominator, in plain view.

> [es] La cobertura es un censo de lo que cada cámara publicó, con los huecos nombrados: {{rejilla.llenas}} de {{rejilla.total}} celdas de cámara y año entre {{rejilla.desde}} y {{rejilla.hasta}}. De {{universo.n}} países faltan {{ausentes.n|letra}}, y no al azar.
<!-- metodologia.8.p5 -->
Coverage is a census of what each chamber published, with the gaps named: {{rejilla.llenas}} of {{rejilla.total}} chamber-year cells between {{rejilla.desde}} and {{rejilla.hasta}}. Of {{universo.n}} countries, {{ausentes.n|letra}} are missing, and not at random.

> [es] Pruébelo. Lea el diccionario de datos: dice, columna por columna, qué es comparable y qué no. [Leer el diccionario]
<!-- metodologia.8.pruebelo -->
Try it. Read the data dictionary: it says, column by column, what is comparable and what is not. [Read the dictionary]

> [es] Ediciones, identificadores y reproducibilidad
<!-- metodologia.9.titulo -->
Editions, identifiers, and reproducibility

> [es] {{dois.n_v2|letra}} de los {{dois.n|letra}} conjuntos van por la edición {{NUEVO:dois.version_mayoritaria}}; {{NUEVO:dois.rezagados}}.
<!-- metodologia.9.p1 -->
Of the {{dois.n|letra}} datasets, {{dois.n_v2|letra}} are at edition {{NUEVO:dois.version_mayoritaria}}; {{NUEVO:dois.rezagados}}.

> [es] Los identificadores `id_session` e `id_int` son estables dentro de una edición, no entre ediciones. Se derivan de la posición, y añadir una sesión desplaza los que vienen después. Cite la edición.
<!-- metodologia.9.p2 -->
The identifiers `id_session` and `id_int` are stable within an edition, not across editions. They are derived from position, and adding a session shifts those that come after. Cite the edition.

> [es] Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- metodologia.9.p3 -->
To cite a passage, give the date and the session number, and check it against the official Record. Derived edition for research: in case of any discrepancy, your chamber's Record prevails.

> [es] La reproducibilidad tiene una frontera, y está medida. Desde el texto etiquetado en adelante —vinculación, fusión, esquema y documentación— todo es determinista. Se comprobó ejecutando dos veces las {{corpus.n|letra}} cadenas y comparando los archivos.
<!-- metodologia.9.p4 -->
Reproducibility has a boundary, and it is measured. From the tagged text onward—linkage, merge, schema, and documentation—everything is deterministic. This was checked by running the {{corpus.n|letra}} processing chains twice and comparing the files.

> [es] Lo anterior —reconocimiento óptico, extracción, limpieza, etiquetado— queda fuera de esa garantía. Las páginas reconocidas y las decisiones humanas de vinculación se guardan congeladas, como entrada. Quien cite la reproducibilidad de este corpus debe decir desde dónde.
<!-- metodologia.9.p5 -->
What comes before—OCR, extraction, cleaning, tagging—falls outside that guarantee. The recognized pages and the human linkage decisions are stored frozen, as input. Anyone who cites the reproducibility of this corpus must say from where.

> [es] Pruébelo. Elija su país y copie su cita, con su edición y su DOI. [Ver los países]
<!-- metodologia.9.pruebelo -->
Try it. Choose your country and copy its citation, with its edition and its DOI. [View the countries]

> [es] La documentación completa
<!-- metodologia.10.titulo -->
The full documentation

> [es] Esta página resume. Lo completo:
<!-- metodologia.10.p1 -->
This page summarizes. In full:

> [es] La monografía, en inglés: fuentes, padrones, proceso, problemas etapa por etapa, auditoría de género y tablas por país. [Leer la monografía (en inglés)]
<!-- metodologia.10.monografia -->
The monograph, in English: sources, rosters, processing, problems stage by stage, gender audit, and tables by country. [Read the monograph (in English)]

> [es] El registro de decisiones, en español: lo que se hizo, la alternativa descartada, la evidencia medida y la consecuencia. Una decisión superada se marca y se enlaza; no se borra. [Abrir el registro de decisiones]
<!-- metodologia.10.registro -->
The decision log, in Spanish: what was done, the alternative discarded, the evidence measured, and the consequence. A superseded decision is marked and linked; it is not deleted. [Open the decision log]

> [es] Con cada país, en inglés, español y portugués: el LÉAME, el diccionario de datos, las limitaciones conocidas y el informe del proceso. [Ver los países]
<!-- metodologia.10.pais -->
With each country, in English, Spanish, and Portuguese: the README, the data dictionary, the known limitations, and the processing report. [View the countries]

> [es] Pruébelo. Empiece por el diccionario de datos, aquí mismo, y siga con el archivo de El Salvador. [Leer el diccionario] · [Descargar los datos]
<!-- metodologia.10.pruebelo -->
Try it. Start with the data dictionary, right here, and continue with the El Salvador file. [Read the dictionary] · [Download the data]


## Usar los datos

> [es] Usar los datos · ParlaIbero
<!-- usar.meta.titulo -->
Use the data · ParlaIbero

> [es] Por dónde empezar, qué hay en cada descarga, las columnas, el padrón, dos fragmentos de código y cómo citar los {{corpus.n}} corpus de ParlaIbero.
<!-- usar.meta.descripcion -->
Where to start, what is in each download, the columns, the roster, two code snippets, and how to cite the {{corpus.n}} ParlaIbero corpora.

> [es] Usar los datos
<!-- usar.titulo -->
Use the data

> [es] Por dónde empezar
<!-- usar.empezar.titulo -->
Where to start

> [es] No es una matriz de encuesta. Elija por lo que ya sabe hacer.
<!-- usar.empezar.entrada -->
It is not a survey data matrix. Choose by what you already know how to do.

> [es] Sin programar
<!-- usar.empezar.s1.titulo -->
No coding

> [es] Abra El Salvador en el explorador. Busque en el texto completo; filtre por fecha, partido, legislatura o diputado; exporte con su cita. Es el país de prueba: {{pais.sv.csv}}, y cubre solo de {{pais.sv.inicio}} a {{pais.sv.fin}}. O llévese los datos de una figura, en CSV y Excel, sin formulario. ⏎  ⏎ [Abrir el explorador] [Descargar los datos de la figura]
<!-- usar.empezar.s1.texto -->
Open El Salvador in the explorer. Search the full text; filter by date, party, legislature (the term each Record prints), or deputy; export with its citation. It is the test country: {{pais.sv.csv}}, and it covers only {{pais.sv.inicio}} to {{pais.sv.fin}}. Or take the data for a figure, in CSV and Excel, with no form.

[Open the explorer] [Download the figure data]

> [es] Con R o Python básico
<!-- usar.empezar.s2.titulo -->
With basic R or Python

> [es] El CSV de un país: de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}. Filtros, conteos, series por año. Los dos fragmentos de abajo son esto y nada más. ⏎  ⏎ [Ver los países]
<!-- usar.empezar.s2.texto -->
The CSV of one country: from {{NUEVO:csv.min}} to {{NUEVO:csv.max}}. Filters, counts, series by year. The two snippets below are this and nothing more.

[View the countries]

> [es] Con métodos de texto
<!-- usar.empezar.s3.titulo -->
With text analysis methods

> [es] El corpus completo: {{dois.n|letra}} descargas, una por país, {{NUEVO:csv.total}} en total. La base no trae tema, tono, posición ni voto: aquí las variables hay que construirlas. Es donde hay que aprender, y es aprendible. ⏎  ⏎ [Ver los {{dois.n|letra}} DOI]
<!-- usar.empezar.s3.texto -->
The full corpus: {{dois.n|letra}} downloads, one per country, {{NUEVO:csv.total}} in total. The database does not include topic, tone, position, or vote: here the variables have to be built. This is where you have to learn, and it can be learned.

[View the {{dois.n|letra}} DOIs]

> [es] Dos grupos con la misma base pueden llegar a resultados distintos sin que ninguno se haya equivocado. No es un defecto: es lo que ocurre cuando las decisiones de análisis son suyas.
<!-- usar.empezar.cierre -->
Two groups with the same database can reach different results without either one having made a mistake. It is not a defect: it is what happens when the analysis decisions are yours.

> [es] El camino, paso a paso
<!-- usar.camino.titulo -->
The path, step by step

> [es] **Elija un país.** Si duda, El Salvador: es el archivo más pequeño.
<!-- usar.camino.p1 -->
**Choose a country.** If in doubt, El Salvador: it is the smallest file.

> [es] **Antes del clic.** Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. Los datos de las figuras no lo piden.
<!-- usar.camino.p2 -->
**Before you click.** Before you download, Harvard Dataverse will ask for your name, email, institution, position, and intended use. The figure data do not require it.

> [es] **Descargue un archivo, no los {{paquete.ficheros}}.** Para el explorador basta el que termina en `_interventions.csv`. No lo abra con doble clic ni en una hoja de cálculo: puede cortar filas y textos. ⏎  ⏎ [Descargar en Dataverse]
<!-- usar.camino.p3 -->
**Download one file, not all {{paquete.ficheros}}.** For the explorer, the one ending in `_interventions.csv` is enough. Do not open it with a double click or in a spreadsheet: that can truncate rows and text.

[Download from Dataverse]

> [es] **Ábralo en el explorador.** Pulse «Elegir archivo…» y selecciónelo. Se abre en su navegador; nada sale de su equipo.
<!-- usar.camino.p4 -->
**Open it in the explorer.** Click “Elegir archivo…” (Choose file…) and select it. It opens in your browser; nothing leaves your computer.

> [es] Pide un navegador reciente: {{NUEVO:explorador.navegadores}}. Al elegir el archivo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, cierre otras pestañas o pruebe antes con El Salvador. Hoy el explorador está solo en español y abre un país cada vez.
<!-- usar.camino.requisitos -->
It requires a recent browser: {{NUEVO:explorador.navegadores}}. When you choose the file, the explorer tells you how much memory it needs. On a modest computer, close other tabs or try El Salvador first. Today the explorer is in Spanish only and opens one country at a time.

> [es] En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en {{NUEVO:explorador.construccion.sv}}. Brasil, el mayor de los medidos, en {{NUEVO:explorador.construccion.br}}. En su equipo puede tardar más.
<!-- usar.camino.tiempos -->
In our tests, run outside the browser with the same engine, El Salvador was ready in {{NUEVO:explorador.construccion.sv}}. Brazil, the heaviest of those measured, in {{NUEVO:explorador.construccion.br}}. On your computer it can take longer.

> [es] Qué hay en cada descarga
<!-- usar.paquete.titulo -->
What is in each download

> [es] {{paquete.ficheros}} archivos por país. `XX` son las dos letras del país: `SV`, `BR`. Dos son los datos: `XX_interventions.csv`, con una fila por turno de palabra o bloque de no habla, y `XX_deputies.csv`, el padrón. Cuatro documentos, cada uno en inglés, español y portugués: LÉAME (`README`), diccionario de datos, limitaciones conocidas e informe del proceso. Y tres archivos para programas: cifras del corpus, metadatos y método de vinculación de cada orador. Lea las limitaciones antes de contar nada.
<!-- usar.paquete.texto -->
There are {{paquete.ficheros}} files per country. `XX` is the country's two letters: `SV`, `BR`. Two are the data: `XX_interventions.csv`, with one row per speaking turn or non-speech block, and `XX_deputies.csv`, the roster. Four documents, each in English, Spanish, and Portuguese: README, data dictionary, known limitations, and processing report. And three files for software: corpus numbers, metadata, and the linkage method for each speaker. Read the limitations before you count anything.

> [es] Las {{columnas.n}} columnas
<!-- usar.columnas.titulo -->
The {{columnas.n}} columns

> [es] Las mismas {{columnas.n}}, con el mismo nombre, en las {{corpus.n|letra}} cámaras. Cambia cuánto se pudo llenar cada una, y la tabla lo dice.
<!-- usar.columnas.entradilla -->
The same {{columnas.n}}, with the same names, in all {{corpus.n|letra}} chambers. What changes is how much of each could be filled, and the table says so.

> [es] **`sex` es derivada.** No viene del Diario; la procedencia de cada valor está en `sex_source`, en el padrón. Exactitud: el {{sexo.exactitud}} sobre {{NUEVO:sexo.base_filas}} filas revisadas a mano en {{sexo.padrones_auditados|letra}} padrones, con más error en mujeres que en hombres. En los otros {{sexo.padrones_sin_auditar|letra}} no está medida.
<!-- usar.columnas.aviso.sex -->
**`sex` is derived.** It does not come from the Record; the provenance of each value is in `sex_source`, in the roster. Accuracy: {{sexo.exactitud}} on {{NUEVO:sexo.base_filas}} rows reviewed by hand in {{sexo.padrones_auditados|letra}} rosters, with more error for women than for men. In the other {{sexo.padrones_sin_auditar|letra}} it is not measured.

> [es] **`dm_speech` es asimétrica.** El `0` está demostrado. El `1` no: significa «no está demostrado que no sea habla».
<!-- usar.columnas.aviso.dm_speech -->
**`dm_speech` is asymmetric.** The `0` is proven. The `1` is not: it means “not proven to be non-speech.”

> [es] **`legislature` no es comparable entre países:** es el texto que imprime cada Diario. Para comparar en el tiempo, use `date`.
<!-- usar.columnas.aviso.legislature -->
**`legislature` is not comparable across countries:** it is the text each Record prints. To compare over time, use `date`.

> [es] **Los identificadores son estables dentro de una edición, no entre ediciones.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- usar.columnas.aviso.ids -->
**Identifiers are stable within an edition, not across editions.** To cite a passage, give the date and the session number, and check it against the official Record. Derived edition for research: in case of any discrepancy, your chamber's Record prevails.

> [es] El padrón y su unión correcta
<!-- usar.padron.titulo -->
The roster and its correct join

> [es] El padrón es la lista de quienes ocuparon un escaño. Casi nunca hace falta unir nada: sexo, partido y distrito ya vienen en cada fila. No tiene una fila por persona, sino por tramo de mandato: {{padron.tramos}} tramos para {{padron.personas}} personas. Se une por `id_dep` y por legislatura o fecha, según el diccionario del país. Unir por menos multiplica filas. Léalo por nombre de columna, nunca por posición: el orden cambia de un padrón a otro.
<!-- usar.padron.texto -->
The roster is the list of those who held a seat. You almost never need to join anything: sex, party, and district already come in each row. It does not have one row per person, but one per term segment: {{padron.tramos}} segments for {{padron.personas}} people. Join on `id_dep` and on legislature or date, according to the country's dictionary. Joining on less multiplies rows. Read it by column name, never by position: the order changes from one roster to another.

> [es] En Brasil hay {{NUEVO:padron.br.filas}} filas para {{NUEVO:padron.br.pares}} pares de persona y legislatura: son cambios de partido, y ahí se une por fecha, entre `start_date` y `end_date`.
<!-- usar.padron.brasil -->
In Brazil there are {{NUEVO:padron.br.filas}} rows for {{NUEVO:padron.br.pares}} pairs of person and legislature: these are party switches, and there you join on date, between `start_date` and `end_date`.

> [es] Dos fragmentos
<!-- usar.codigo.titulo -->
Two snippets

> [es] Cargar un país, filtrar el habla, contar palabras por década y sexo. Con El Salvador, ambos reproducen su serie de la figura de apertura.
<!-- usar.codigo.entradilla -->
Load a country, filter the speech, count words by decade and sex. With El Salvador, both reproduce its series in the opening figure.

> [es] ```r ⏎ library(readr); library(dplyr); library(stringr) ⏎  ⏎ # Solo cuatro columnas. na = character(): las celdas vacías se leen como "", no como NA. ⏎ df <- read_csv("SV_interventions.csv", ⏎                col_select = c(date, sex, dm_speech, text), ⏎                col_types  = cols(.default = col_character()), ⏎                na = character()) ⏎  ⏎ # SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en ⏎ # mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla; ⏎ # no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados ⏎ # y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera. ⏎ # Cada cámara se compara consigo misma: esto no ordena países. ⏎ df |> ⏎   filter(dm_speech == "1", sex %in% c("F", "M"), date != "") |> ⏎   mutate(decada   = paste0(str_sub(date, 1, 3), "0"), ⏎          palabras = str_count(text, "\\S+")) |> ⏎   count(decada, sex, wt = palabras, name = "palabras") |> ⏎   group_by(decada) |> ⏎   mutate(pct = round(100 * palabras / sum(palabras), 2)) |> ⏎   ungroup() |> ⏎   as.data.frame()   # un tibble redondea en pantalla; así se ven los dos decimales ⏎ ```
<!-- usar.codigo.r -->
```r
library(readr); library(dplyr); library(stringr)

# Only four columns. na = character(): empty cells are read as "", not as NA.
df <- read_csv("SV_interventions.csv",
               col_select = c(date, sex, dm_speech, text),
               col_types  = cols(.default = col_character()),
               na = character())

# CAVEAT. This measures voice, not presence. `sex` is a derived variable, with more error for
# women than for men. dm_speech == "1" removes what is proven not to be speech;
# it does not prove that everything that remains is speech. The denominator is the words of
# deputies of known sex: rows without a deputy or without sex are excluded.
# Each chamber is compared with itself: this does not rank countries.
df |>
  filter(dm_speech == "1", sex %in% c("F", "M"), date != "") |>
  mutate(decada   = paste0(str_sub(date, 1, 3), "0"),
         palabras = str_count(text, "\\S+")) |>
  count(decada, sex, wt = palabras, name = "palabras") |>
  group_by(decada) |>
  mutate(pct = round(100 * palabras / sum(palabras), 2)) |>
  ungroup() |>
  as.data.frame()   # a tibble rounds on screen; this way both decimals are shown
```

> [es] ```python ⏎ import pandas as pd ⏎  ⏎ # Solo cuatro columnas. keep_default_na=False: las celdas vacías se leen como "", no como NaN. ⏎ cols = ["date", "sex", "dm_speech", "text"] ⏎ df = pd.read_csv("SV_interventions.csv", usecols=cols, dtype=str, keep_default_na=False) ⏎  ⏎ # SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en ⏎ # mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla; ⏎ # no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados ⏎ # y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera. ⏎ # Cada cámara se compara consigo misma: esto no ordena países. ⏎ habla = df[(df["dm_speech"] == "1") & df["sex"].isin(["F", "M"]) & (df["date"] != "")] ⏎ habla = habla.assign(decada=habla["date"].str[:3] + "0", ⏎                      palabras=habla["text"].str.split().str.len()) ⏎  ⏎ t = habla.pivot_table(index="decada", columns="sex", values="palabras", ⏎                       aggfunc="sum", fill_value=0) ⏎ t["pct_F"] = (100 * t["F"] / (t["F"] + t["M"])).round(2) ⏎ print(t) ⏎ ```
<!-- usar.codigo.python -->
```python
import pandas as pd

# Only four columns. keep_default_na=False: empty cells are read as "", not as NaN.
cols = ["date", "sex", "dm_speech", "text"]
df = pd.read_csv("SV_interventions.csv", usecols=cols, dtype=str, keep_default_na=False)

# CAVEAT. This measures voice, not presence. `sex` is a derived variable, with more error for
# women than for men. dm_speech == "1" removes what is proven not to be speech;
# it does not prove that everything that remains is speech. The denominator is the words of
# deputies of known sex: rows without a deputy or without sex are excluded.
# Each chamber is compared with itself: this does not rank countries.
habla = df[(df["dm_speech"] == "1") & df["sex"].isin(["F", "M"]) & (df["date"] != "")]
habla = habla.assign(decada=habla["date"].str[:3] + "0",
                     palabras=habla["text"].str.split().str.len())

t = habla.pivot_table(index="decada", columns="sex", values="palabras",
                      aggfunc="sum", fill_value=0)
t["pct_F"] = (100 * t["F"] / (t["F"] + t["M"])).round(2)
print(t)
```

> [es] Cómo citar
<!-- usar.cita.titulo -->
How to cite

> [es] Cite lo que usó y su edición: no todos los conjuntos van por la misma. La cita de una figura lleva edición de datos y fecha.
<!-- usar.cita.entradilla -->
Cite what you used and its edition: not all datasets are at the same edition. The citation for a figure carries the data edition and the date.

> [es] [Un conjunto de datos] [La colección] [Una figura] · [Texto] [BibTeX] [RIS] · [Copiar la cita]
<!-- usar.cita.rotulos -->
[A dataset] [The collection] [A figure] · [Text] [BibTeX] [RIS] · [Copy the citation]

> [es] CC BY 4.0: puede usar, adaptar y redistribuir, si cita la fuente.
<!-- usar.cita.licencia -->
CC BY 4.0: you may use, adapt, and redistribute, if you cite the source.

> [es] Contacto y erratas
<!-- usar.contacto.titulo -->
Contact and errors

> [es] Si encuentra un error, díganos dónde: país, fecha, número de sesión y lo que dice el Diario oficial. Si no sabe por dónde empezar, escriba también. {{NUEVO:contacto}} ⏎  ⏎ [Avisar de una errata] [Escribirnos]
<!-- usar.contacto.texto -->
If you find an error, tell us where: country, date, session number, and what the official Record says. If you are not sure where to start, write to us too. {{NUEVO:contacto}}

[Report an error] [Write to us]


## Para parlamentos y organismos

> [es] Para parlamentos y organismos · ParlaIbero
<!-- instituciones.meta.titulo -->
For parliaments and organizations · ParlaIbero

> [es] Dos caminos sin programar: buscar en el pleno de su cámara, o llevarse una tabla de indicadores de voz con su cita.
<!-- instituciones.meta.descripcion -->
Two paths, no coding: search the plenary of your chamber, or take a table of voice indicators with its citation.

> [es] Para parlamentos y organismos
<!-- instituciones.titulo -->
For parliaments and organizations

> [es] Dos caminos. Ninguno exige programar.
<!-- instituciones.entradilla -->
Two paths. Neither requires coding.

> [es] La biblioteca o el servicio de investigación de un congreso
<!-- instituciones.parlamento.rotulo -->
The library or research service of a parliament

> [es] «¿Qué se dijo aquí sobre esto, quién lo dijo y de qué partido o bancada?»
<!-- instituciones.parlamento.pregunta -->
“What was said here about this, who said it, and from which party or parliamentary group?”

> [es] Si su Diario está en un PDF por sesión, responder cuesta una tarde. Aquí está en una tabla: el pleno de su cámara, texto completo, desde que empieza su serie. Y, con el mismo formato, el de las otras cámaras, una por una.
<!-- instituciones.parlamento.entrada -->
If your Record is in one PDF per session, answering costs an afternoon. Here it is in one table: the plenary of your chamber, full text, from the start of its series. And, in the same format, the plenary of the other chambers, one by one.

> [es] Tres pasos, sin programar
<!-- instituciones.parlamento.pasos.titulo -->
Three steps, no coding

> [es] Elija su cámara. Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. De los {{paquete.ficheros}} archivos necesita uno: el que termina en `_interventions.csv`.
<!-- instituciones.parlamento.paso1 -->
Choose your chamber. Before you download, Harvard Dataverse will ask for your name, email, institution, position, and intended use. Of the {{paquete.ficheros}} files, you need one: the one that ends in `_interventions.csv`.

> [es] No lo abra con doble clic. Vaya al explorador, pulse «Elegir archivo…» y selecciónelo. Al elegirlo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, pruebe antes con El Salvador ({{pais.sv.csv}}). [Abrir el explorador]
<!-- instituciones.parlamento.paso2 -->
Do not open it with a double click. Go to the explorer, click “Elegir archivo…” (Choose file…), and select it. When you choose it, the explorer tells you how much memory it needs. On a modest computer, try El Salvador first ({{pais.sv.csv}}). [Open the explorer]

> [es] Busque una palabra o una frase; filtre por fecha, partido, legislatura y diputado; exporte el resultado con su cita.
<!-- instituciones.parlamento.paso3 -->
Search for a word or a phrase; filter by date, party, legislature (the term each Record prints), and deputy; export the result with its citation.

> [es] Nada sale de su equipo: el archivo se abre en su navegador, no en un servidor.
<!-- instituciones.parlamento.garantia -->
Nothing leaves your computer: the file opens in your browser, not on a server.

> [es] Lo que no es
<!-- instituciones.parlamento.noes.titulo -->
What it is not

> [es] Ni registro oficial ni sustituto del Diario. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara. Antes de citar un pasaje, localícelo allí por fecha y número de sesión.
<!-- instituciones.parlamento.noes -->
Neither an official record nor a substitute for the Record. Derived edition for research: in case of any discrepancy, your chamber's Record prevails. Before citing a passage, find it there by date and session number.

> [es] No cubre comisiones ni Senado, no trae las votaciones como dato y no llega al año en curso. Su ficha dice dónde termina la serie y qué años faltan. [Ver los países]
<!-- instituciones.parlamento.nocubre -->
It does not cover committees or the Senate, it does not include votes as data, and it does not reach the current year. Your country page says where the series ends and which years are missing. [View the countries]

> [es] El organismo internacional
<!-- instituciones.organismo.rotulo -->
The international organization

> [es] «Tenemos los escaños por sexo. ¿Cuánto de lo que se dice en el pleno lo dicen mujeres?»
<!-- instituciones.organismo.pregunta -->
“We have seats by sex. How much of what is said in the plenary is said by women?”

> [es] Lo que se lleva, sin descargar el corpus
<!-- instituciones.organismo.sellleva.titulo -->
What you take, without downloading the corpus

> [es] Una tabla de indicadores por cámara y década, en CSV y Excel, sin formulario. Cada valor trae su n y su denominador, en palabras. Cada década dice cuántas cámaras hay: de {{decada.n_corpus.1970s|letra}} en la primera a {{decada.n_corpus.2020s|letra}} en la última. El LÉAME dice qué mide cada columna. [Descargar la tabla] [Descargar la imagen]
<!-- instituciones.organismo.sellleva -->
A table of indicators by chamber and decade, in CSV and Excel, no form. Each value carries its n and its denominator, in words. Each decade states how many chambers there are: from {{decada.n_corpus.1970s|letra}} in the first to {{decada.n_corpus.2020s|letra}} in the last. The README says what each column measures. [Download the table] [Download the image]

> [es] Cómo leerla
<!-- instituciones.organismo.leer.titulo -->
How to read it

> [es] Mide voz, no presencia: léala junto a su serie de escaños. No es un indicador oficial ni ordena países. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. La tabla marca las {{sexo.padrones_sin_auditar|letra}} cámaras cuya lista de diputados no se revisó a mano.
<!-- instituciones.organismo.leer -->
It measures voice, not presence: read it alongside your series on seats. It is not an official indicator, and it does not rank countries. Sex is assigned by us, with more error for women than for men. The table marks the {{sexo.padrones_sin_auditar|letra}} chambers whose list of deputies was not reviewed by hand.

> [es] Cómo citar una figura
<!-- instituciones.organismo.citar.titulo -->
How to cite a figure

> [es] Con autoría, año, edición y fecha. Cada figura trae su cita lista:
<!-- instituciones.organismo.citar -->
With authorship, year, edition, and date. Each figure has its citation ready:

> [es] {{NUEVO:cita.autoria}}. «{{fig.titulo}}». ParlaIbero, datos de figura, edición del {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Consultado el {{fig.fecha_consulta}}.
<!-- instituciones.organismo.citar.modelo -->
{{NUEVO:cita.autoria}}. “{{fig.titulo}}.” ParlaIbero, figure data, edition of {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Accessed {{fig.fecha_consulta}}.

> [es] Quién lo hace
<!-- instituciones.cierre.titulo -->
Who makes it

> [es] El Instituto de Iberoamérica de la Universidad de Salamanca, con los coautores de cada ficha.
<!-- instituciones.cierre.quien -->
The Instituto de Iberoamérica of the University of Salamanca, with the coauthors of each country page.

> [es] Licencia CC BY 4.0: reutilice datos, tablas y figuras citando la fuente.
<!-- instituciones.cierre.licencia -->
CC BY 4.0 license: reuse data, tables, and figures, citing the source.

> [es] Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número. Los identificadores son estables dentro de una edición, no entre ediciones.
<!-- instituciones.cierre.estabilidad -->
Each country has its DOI in Harvard Dataverse. A published edition does not change: anything new is published under another number. Identifiers are stable within an edition, not across editions.

> [es] ¿No sabe por dónde empezar? [Escribirnos]
<!-- instituciones.cierre.contacto -->
Not sure where to start? [Write to us]


## Sesiones que el lector reconoce, sin nombres (directiva del 2026-09-21)

> [es] La Cámara admite el proceso de destitución de la presidenta de la República.
<!-- eventos.br-2016-04-17 -->
The chamber admits the impeachment proceedings against the president of the Republic.

> [es] El Congreso cesa al presidente de la República.
<!-- eventos.ec-1997-02-06 -->
Congress removes the president of the Republic from office.

> [es] El Congreso cesa al presidente de la República.
<!-- eventos.ec-2005-04-20 -->
Congress removes the president of the Republic from office.

> [es] El Congreso declara la vacancia de la Presidencia de la República.
<!-- eventos.pe-2020-11-09 -->
Congress removes the president of the Republic by declaring the office vacant.

> [es] Asamblea Legislativa tras la renuncia del presidente de la Nación.
<!-- eventos.ar-2001-12-21 -->
Legislative Assembly after the resignation of the president of the Nation.

> [es] La sesión de investidura interrumpida por el asalto al Congreso.
<!-- eventos.es-1981-02-23 -->
The investiture session interrupted by the assault on the Congreso.

> [es] Juicio político al presidente de la República: cae dentro de un hueco declarado.
<!-- eventos.py-2012-06-21 -->
Impeachment trial of the president of the Republic: it falls within a declared gap.

> [es] Destitución del presidente de la República: cae dentro de un hueco declarado.
<!-- eventos.py-2012-06-22 -->
Removal of the president of the Republic: it falls within a declared gap.

---

> **Añadido el 2026-09-21.** Las dos secciones que siguen (80 claves) se tradujeron después del resto, cuando el investigador aprobó la página
> «Explorador» y decidió los rótulos. Traducción + revisor independiente + contraste por retrotraducción ciega. Mismo régimen que lo demás:
> revisión por máquina, a corregir a posteriori si algo suena raro.

## Explorador

> [es] El explorador · ParlaIbero
<!-- explorador.meta.titulo -->
The explorer · ParlaIbero

> [es] Busque, lea y cite lo que se dijo en una cámara, y siga un debate de principio a fin. Sin programar; nada sale de su equipo.
<!-- explorador.meta.descripcion -->
Search, read, and cite what was said in a chamber, and follow a debate from beginning to end. No coding; nothing leaves your computer.

> [es] [Explorador]
<!-- comun.nav.explorador -->
[Explorer]

> [es] Busque, lea y cite lo que se dijo. Sin programar.
<!-- explorador.titulo -->
Search, read, and cite what was said. No coding.

> [es] El explorador es una aplicación que se abre en su navegador. Usted elige el archivo de un país y la base se construye en su equipo. No hay cuenta, ni instalación, ni servidor.
<!-- explorador.entrada -->
The explorer is an application that opens in your browser. You choose a country's file, and the database is built on your computer. There is no account, no installation, and no server.

> [es] [Abrir el explorador]
<!-- explorador.abrir -->
[Open the explorer]

> [es] Primero, encontrar
<!-- explorador.encontrar.titulo -->
First, find

> [es] ¿Qué se dijo sobre esto?
<!-- explorador.p1.pregunta -->
What was said about this?

> [es] Busca en el texto completo de todas las intervenciones: una palabra, una frase exacta entre comillas, o varias combinadas. No distingue tildes ni mayúsculas.
<!-- explorador.p1.texto -->
It searches the full text of all interventions: a word, an exact phrase in quotation marks, or several combined. It does not distinguish accents or capital letters.

> [es] ¿Quién, cuándo, de qué grupo?
<!-- explorador.p2.pregunta -->
Who, when, from which group?

> [es] Filtra por fecha, legislatura, tipo de sesión, partido, sexo, distrito y longitud de la intervención. «Solo lo que se habla» deja fuera las carátulas, los sumarios y las listas de votación.
<!-- explorador.p2.texto -->
It filters by date, legislature (the term each Record prints), session type, party, sex, district, and length of the intervention. “Solo lo que se habla” (Speech only) leaves out cover pages, tables of contents, and roll-call vote lists.

> [es] ¿En qué momento del debate?
<!-- explorador.p3.pregunta -->
At what point in the debate?

> [es] Cada intervención se lee como una página del Diario, con las que la preceden y la siguen, o con la sesión entera. Los aplausos, los rumores y las llamadas al orden que anotó el Diario van señalados.
<!-- explorador.p3.texto -->
Each intervention is read as a page of the Record, with those that precede and follow it, or with the whole session. The applause, the murmurs, and the calls to order that the Record noted are marked.

> [es] ¿Cuándo se habló de esto?
<!-- explorador.p4.pregunta -->
When was this discussed?

> [es] Dibuja la frecuencia de varios términos mes a mes o año a año, con los hitos históricos del país sobre el gráfico: {{NUEVO:explorador.hitos.n}} en las {{corpus.n|letra}} cámaras, cada uno con su fuente.
<!-- explorador.p4.texto -->
It draws the frequency of several terms by month or by year, with the country's historical milestones on the chart: {{NUEVO:explorador.hitos.n}} across the {{corpus.n|letra}} chambers, each with its source.

> [es] Después, enfocar: las bibliotecas
<!-- explorador.bibliotecas.titulo -->
Then, focus: “Bibliotecas” (Libraries)

> [es] Un corpus entero no es una pregunta. Una biblioteca sí.
<!-- explorador.bibliotecas.entrada -->
A whole corpus is not a question. A library is.

> [es] Una biblioteca es su propia selección de intervenciones sobre un asunto: todo lo que se dijo en el pleno sobre una ley, una crisis o una política. La reúne con una búsqueda, la afina leyendo, y la guarda con sus notas y sus etiquetas.
<!-- explorador.bibliotecas.que_es -->
A library is your own selection of interventions on an issue: everything that was said in the plenary about a law, a crisis, or a policy. You gather it with a search, refine it by reading, and save it with your notes and your tags.

> [es] Sirve para dos trabajos. Para quien investiga, es el recorte de su tema: el material sobre el que medir. Para quien sigue la agenda de una cámara, es el expediente de un debate: quién intervino, cuándo, y en qué términos.
<!-- explorador.bibliotecas.para_que -->
It serves two kinds of work. For those who do research, it is the subset for their topic: the material on which to measure. For those who follow a chamber's agenda, it is the dossier on a debate: who spoke, when, and in what terms.

> [es] Desde ese momento, la biblioteca es la unidad de análisis. Se busca dentro de ella, se lee de corrido, y sobre ella se calculan el vocabulario que la distingue del resto del corpus, los temas que contiene y quién menciona a quién.
<!-- explorador.bibliotecas.unidad -->
From that moment on, the library is the unit of analysis. You search within it, read it straight through, and calculate on it the vocabulary that distinguishes it from the rest of the corpus, its topics, and who mentions whom.

> [es] Se guarda en su navegador, aparte de la base: actualizar los datos no borra su trabajo. Para compartirla con un colega o tener una copia, se exporta a un archivo.
<!-- explorador.bibliotecas.guardar -->
It is saved in your browser, separately from the database: updating the data does not delete your work. To share it with a colleague or keep a copy, export it to a file.

> [es] Coocurrencias: de qué se habla dentro de un debate
<!-- explorador.coocurrencias.titulo -->
“Coocurrencias” (Co-occurrences): what is discussed within a debate

> [es] ¿Qué palabras aparecen juntas? El explorador toma el vocabulario característico de la biblioteca y calcula qué términos se repiten en las mismas intervenciones. Donde esa red se agrupa, propone un tema.
<!-- explorador.coocurrencias.que_es -->
Which words appear together? The explorer takes the library's characteristic vocabulary and calculates which terms recur in the same interventions. Where that network clusters, it proposes a topic.

> [es] Cada tema trae sus términos, las intervenciones donde aparece y la parte del texto que ocupa. Son candidatos: usted los revisa, quita los términos que sobran y, si uno merece estudio propio, lo convierte en una biblioteca nueva.
<!-- explorador.coocurrencias.temas -->
Each topic comes with its terms, the interventions where it appears, and the share of the text it occupies. They are candidates: you review them, remove the terms that do not belong, and, if one deserves its own study, turn it into a new library.

> [es] Dentro de cada tema, un eje sitúa a cada partido según cuánto usa ese vocabulario, por encima o por debajo de la media. Es un eje de temas, no un eje ideológico.
<!-- explorador.coocurrencias.partidos -->
Within each topic, an axis places each party according to how much it uses that vocabulary, above or below the average. It is an axis of topics, not an ideological axis.

> [es] El método está a la vista, con sus parámetros, y es reproducible: los mismos parámetros dan el mismo resultado. La red de términos no se dibuja en pantalla: se exporta, para dibujarla y analizarla fuera.
<!-- explorador.coocurrencias.metodo -->
The method is in plain view, with its parameters, and it is reproducible: the same parameters give the same result. The network of terms is not drawn on screen: it is exported, to be drawn and analyzed elsewhere.

> [es] Menciones: quién habla de quién
<!-- explorador.menciones.titulo -->
“Menciones” (Mentions): who talks about whom

> [es] En un debate, los oradores se nombran unos a otros. El explorador reconoce esas menciones y dibuja la red: quién menciona a quién, y cuánto. Se puede agrupar por partido o por los focos de conversación que la propia red forma.
<!-- explorador.menciones.que_es -->
In a debate, speakers name one another. The explorer recognizes those mentions and draws the network: who mentions whom, and how much. It can be grouped by party or by the conversation clusters that the network itself forms.

> [es] De ahí salen varias lecturas: a quién se nombra más, quién nombra, los diálogos que se cruzan, y una tabla entre partidos que dice cuánto se menciona cada uno por cada diez mil palabras.
<!-- explorador.menciones.vistas -->
Several readings follow: who is named most, who does the naming, the two-way dialogues, and a table between parties showing how much each party mentions each party per ten thousand words.

> [es] Dice quién habla de quién, no si lo hace a favor o en contra. Los focos no son coaliciones. Revisadas a mano, acierta {{NUEVO:explorador.menciones.precision.pct}} de las menciones que reconoce; las que se le escapan —«su señoría», «quien me ha precedido»— no están contadas.
<!-- explorador.menciones.limites -->
It says who talks about whom, not whether they speak for or against them. The clusters are not coalitions. Reviewed by hand, {{NUEVO:explorador.menciones.precision.pct}} of the mentions it recognizes are correct; those it misses—“su señoría” (the honorable deputy), “quien me ha precedido” (the previous speaker)—are not counted.

> [es] Y llevárselo, citado
<!-- explorador.llevar.titulo -->
And take it with you, cited

> [es] Exporta a CSV, a un documento legible, a JSON y a una lista de referencias. Todo lleva la cita del conjunto y su DOI. Hasta un pasaje copiado con el teclado se lleva su fuente.
<!-- explorador.llevar.texto -->
It exports to CSV, to a readable document, to JSON, and to a list of references. Everything carries the dataset's citation and its DOI. Even a passage copied with the keyboard takes its source with it.

> [es] Cómo empezar
<!-- explorador.empezar.titulo -->
How to start

> [es] **Descargue el archivo de un país.** Para probar, El Salvador: {{pais.sv.csv}}. Los mayores llegan a {{NUEVO:csv.max}}.
<!-- explorador.empezar.paso1 -->
**Download a country's file.** To try it, El Salvador: {{pais.sv.csv}}. The heaviest reach {{NUEVO:csv.max}}.

> [es] **Abra el explorador y arrastre el archivo.** No hace falta descomprimir ni convertir nada.
<!-- explorador.empezar.paso2 -->
**Open the explorer and drag the file into it.** There is no need to decompress or convert anything.

> [es] **Espere a que se construya la base.** El explorador le dice cuánta memoria necesita y cuánto falta. Si su navegador lo permite, la recuerda: la próxima vez se abre sola.
<!-- explorador.empezar.paso3 -->
**Wait for the database to be built.** The explorer tells you how much memory it needs and how much time is left. If your browser allows it, the explorer remembers the database: next time, it opens by itself.

> [es] En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en {{NUEVO:explorador.construccion.sv}}. Brasil, el mayor de los medidos, en {{NUEVO:explorador.construccion.br}}. En su equipo puede tardar más.
<!-- explorador.empezar.tiempos -->
In our tests, run outside the browser with the same engine, El Salvador was ready in {{NUEVO:explorador.construccion.sv}}. Brazil, the heaviest of those measured, in {{NUEVO:explorador.construccion.br}}. On your computer it can take longer.

> [es] [Descargar en Dataverse] [Ver los países] [Abrir el explorador]
<!-- explorador.empezar.botones -->
[Download from Dataverse] [View the countries] [Open the explorer]

> [es] Lo que pide, y lo que no hace
<!-- explorador.limites.titulo -->
What it requires, and what it does not do

> [es] Pide un ordenador, no un teléfono, y un navegador reciente: {{NUEVO:explorador.navegadores}}.
<!-- explorador.limites.equipo -->
It requires a computer, not a phone, and a recent browser: {{NUEVO:explorador.navegadores}}.

> [es] No compara países en una misma pantalla. No clasifica por una lista de temas fijada de antemano ni mide el tono: cuenta palabras, no intenciones. Y busca la palabra tal como la escribe: para sus variantes, únalas.
<!-- explorador.limites.no_hace -->
It does not compare countries on a single screen. It does not classify by a list of topics fixed in advance, and it does not measure tone: it counts words, not intentions. And it searches for the word exactly as you type it: for its variants, combine them.

> [es] El texto sale de la extracción automática de los Diarios, y puede traer errores de reconocimiento.
<!-- explorador.limites.texto -->
The text comes from the automatic extraction of the Records, and it can carry errors from optical character recognition (OCR).

> [es] Lo que se queda en su equipo
<!-- explorador.privacidad.titulo -->
What stays on your computer

> [es] El archivo se lee en su equipo y no se sube a ningún sitio. Sus bibliotecas y la base se guardan en su navegador, no en un servidor.
<!-- explorador.privacidad.texto -->
The file is read on your computer and is not uploaded anywhere. Your libraries and the database are saved in your browser, not on a server.

> [es] Se abre la imagen ampliada, en otra pestaña.
<!-- explorador.img.ampliar -->
Opens the enlarged image, in another tab.

> [es] Las imágenes son del explorador con El Salvador y una biblioteca sobre el debate del agua.
<!-- explorador.img.ejemplo -->
The images show the explorer with El Salvador and a library on the water debate.

> [es] Una biblioteca abierta: su nota, sus intervenciones y las vistas que se calculan sobre ella.
<!-- explorador.img.bibliotecas.pie -->
An open library: its note, its interventions, and the views calculated on it.

> [es] El resumen de la pestaña: los temas encontrados, con qué términos y conexiones, y el método.
<!-- explorador.img.coocurrencias.pie -->
The tab's summary: the topics found, with what terms and connections, and the method.

> [es] Un tema candidato, con sus términos, y los partidos situados según cuánto usan ese vocabulario.
<!-- explorador.img.temas.pie -->
A candidate topic, with its terms, and the parties placed according to how much they use that vocabulary.

> [es] La red de menciones de la biblioteca, agrupada por partido.
<!-- explorador.img.menciones.pie -->
The library's network of mentions, grouped by party.

> [es] Menciones entre partidos, por cada diez mil palabras.
<!-- explorador.img.partidos.pie -->
Mentions between parties, per ten thousand words.

> [es] El vocabulario que distingue a la biblioteca del resto del corpus.
<!-- explorador.img.lexico.pie -->
The vocabulary that distinguishes the library from the rest of the corpus.

> [es] La frecuencia de un término año a año, con los hitos del país numerados sobre el gráfico.
<!-- explorador.img.tendencia.pie -->
The frequency of a term year by year, with the country's milestones numbered on the chart.

## Rótulos de figuras, tablas y navegación (decididos con el investigador el 2026-09-21)

> [es] palabras
<!-- comun.fig.voz.medida.palabras -->
words

> [es] turnos
<!-- comun.fig.voz.medida.turnos -->
speech turns

> [es] oradoras
<!-- comun.fig.voz.medida.oradoras -->
women speakers

> [es] {{pct}} · {{n}} de {{den}} turnos
<!-- comun.fig.voz.hover.turnos -->
{{pct}} · {{n}} of {{den}} speech turns

> [es] {{pct}} · {{n}} de {{den}} oradores
<!-- comun.fig.voz.hover.oradoras -->
{{pct}} · {{n}} of {{den}} speakers

> [es] De diputadas
<!-- comun.fig.voz.tabla.col.n -->
Of women deputies

> [es] De diputados y diputadas con sexo conocido
<!-- comun.fig.voz.tabla.col.den -->
Of deputies of known sex

> [es] Lista de diputados revisada a mano
<!-- comun.fig.voz.leyenda.auditado -->
List of deputies reviewed by hand

> [es] Sin revisión a mano
<!-- comun.fig.voz.leyenda.sin_auditar -->
Not reviewed by hand

> [es] Palabras
<!-- ficha.voz.col.palabras -->
Words

> [es] Turnos
<!-- ficha.voz.col.turnos -->
Speech turns

> [es] Oradoras
<!-- ficha.voz.col.oradoras -->
Women speakers

> [es] Ficha anterior
<!-- ficha.vecinas.anterior -->
Previous country page

> [es] Ficha siguiente
<!-- ficha.vecinas.siguiente -->
Next country page

> [es] Se abre en Harvard Dataverse, en otra pestaña.
<!-- comun.enlace.dataverse.pestana -->
Opens in Harvard Dataverse, in another tab.

> [es] Quién habla está en los datos. Aquí no se muestra.
<!-- metodologia.1.fila.sin_orador -->
Who speaks is in the data. It is not shown here.

> [es] El texto sigue: aquí va solo el comienzo.
<!-- metodologia.1.fila.truncado -->
The text continues: only the beginning is shown here.

> [es] No puede ocupar escaño
<!-- metodologia.4.barra.noescano -->
Cannot hold a seat

> [es] Voz colectiva o anónima
<!-- metodologia.4.barra.colectiva -->
Collective or anonymous voice

> [es] Laguna nuestra
<!-- metodologia.4.barra.laguna -->
Our missed link

> [es] La vinculación, cámara por cámara
<!-- metodologia.4.tabla -->
Linkage, chamber by chamber

> [es] archivo de {{pais.<iso>.csv}}
<!-- instituciones.parlamento.peso -->
{{pais.<iso>.csv}} file

> [es] Las {{corpus.n|letra}} cámaras
<!-- paises.directorio.titulo -->
The {{corpus.n|letra}} chambers

> [es] Columna
<!-- usar.columnas.col.columna -->
Column

> [es] Tipo
<!-- usar.columnas.col.tipo -->
Type

> [es] Qué es
<!-- usar.columnas.col.definicion -->
What it is

> [es] Cuánto se pudo llenar, cámara por cámara
<!-- usar.columnas.col.disponibilidad -->
How much could be filled, chamber by chamber

> [es] Cada celda es una cámara, en el orden de la rejilla: cuanto más llena, más completa está la columna. Una celda vacía es una columna que esa cámara no trae.
<!-- usar.columnas.col.leyenda -->
Each cell is a chamber, in the order of the grid: the fuller the cell, the more complete the column. An empty cell is a column that the chamber does not carry.

> [es] de todas las filas
<!-- usar.columnas.base.filas -->
of all rows

> [es] de los turnos de habla
<!-- usar.columnas.base.habla -->
of speech turns

> [es] de los turnos vinculados a un diputado o diputada
<!-- usar.columnas.base.vinculadas -->
of speech turns linked to a deputy

> [es] {{camara}}: {{pct}} {{base}}
<!-- usar.columnas.celda -->
{{camara}}: {{pct}} {{base}}

> [es] Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.texto -->
Grant PID2022-141706NB-C22 funded by MICIU/AEI/10.13039/501100011033 and by ERDF/EU.

## «Infraestructura», subrayada (decisión del investigador, 2026-09-21)

> [es] En las ciencias exactas, la infraestructura suele ser un laboratorio: nadie construye uno para cada experimento. En las ciencias sociales y humanas, son datos comparables: alguien los reúne y los armoniza una vez, y los demás parten de ahí.
<!-- inicio.tesis.laboratorio -->
In the natural sciences, infrastructure is usually a laboratory: nobody builds one for each experiment. In the social sciences and humanities, it is comparable data: someone gathers and harmonizes them once, and everyone else starts from there.

> [es] De esa familia son PELA-USAL, Latinobarómetro, ParlaMint y el Manifesto Project.
<!-- inicio.tesis.familia -->
PELA-USAL, Latinobarómetro, ParlaMint, and the Manifesto Project belong to that family.

> [es] ParlaIbero es una infraestructura de datos para las ciencias sociales y humanas. PELA-USAL encuesta a parlamentarios de países de América Latina con un cuestionario estándar, adaptado a cada país. Latinobarómetro aplica un mismo estudio de opinión pública en los países de la región. ParlaMint publica, con una misma codificación, debates de parlamentos de Europa. El Manifesto Project codifica con un mismo esquema los programas electorales de los partidos. Aquí el material es lo que se dijo en el pleno: la misma fila y las mismas columnas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.familia -->
ParlaIbero is a data infrastructure for the social sciences and humanities. PELA-USAL surveys parliamentarians in Latin American countries with a standard questionnaire, adapted to each country. Latinobarómetro applies the same public opinion study across the countries of the region. ParlaMint publishes debates of European parliaments with a common encoding. The Manifesto Project codes parties' election programs with a common scheme. Here the material is what was said in the plenary: the same row and the same columns in all {{corpus.n|letra}} chambers.

> [es] Quien construye sobre datos ajenos necesita saber qué se mueve y qué no. Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número.
<!-- metodologia.9.p0 -->
Anyone who builds on someone else's data needs to know what moves and what does not. Each country has its DOI in Harvard Dataverse. A published edition does not change: anything new comes out under another number.

> [es] Una infraestructura de datos para las ciencias sociales y humanas: las mismas {{columnas.n}} columnas en las {{corpus.n|letra}} cámaras, un DOI por país y ediciones que no cambian.
<!-- instituciones.cierre.que -->
A data infrastructure for the social sciences and humanities: the same {{columnas.n}} columns in all {{corpus.n|letra}} chambers, one DOI per country, and editions that do not change.

