# 03 · COPY PT · traducción al PORTUGUÉS DE BRASIL (pt-BR) (Puerta 3)

> **Estado (2026-09-21): REVISADO POR MÁQUINA y ACEPTADO así por el investigador; lo que suene raro se corrige a posteriori, aquí.**
> Fuente: `02_COPY_es.md`, aprobado y CONGELADO. Glosario vinculante: `03a_GLOSARIO_es-en-pt.md`.
> **Cómo se revisa:** corrija el texto que va DEBAJO de cada clave `<!-- así -->`. La línea `> [es]` de encima es el
> original y no se toca. Los marcadores `{{…}}` se copian EXACTOS (se pueden mover dentro de la frase). Las etiquetas
> entre [corchetes] son enlaces o botones. Después: `npm run i18n` regenera `src/i18n/pt.json`, que no se edita a mano.
> Comprobado (`npm run i18n`): 496 claves de 496, ninguna falta ni sobra; marcadores idénticos al original clave por clave.
> Un revisor automático independiente aplicó 16 correcciones sobre la primera traducción.

## Puntos que debe decidir el revisor nativo

1. glosario.escano y glosario.fila: he reescrito las dos definiciones («O lugar de um deputado na câmara. Em espanhol, escaño; em alguns países, curul ou banca.» y «Cada entrada do arquivo de um país…»). Añaden una palabra que el original no tiene («Em espanhol», «entrada»); confirme que acepta esa adaptación o prefiere otra salida. De paso, confirme «cadeira» como término único (yo la confirmo).
2. «Não ordena países» (7 apariciones, incluidos los dos bloques de código): en Brasil «ordenar» es también «mandar». En contexto se entiende, pero un lector apresurado puede tropezar. Alternativas: «Não classifica países» o «Não põe os países em ordem». Si se cambia, debe cambiarse en todas a la vez.
3. inicio.sesiones.lista, inicio.sesiones.ausentes y eventos.*: reescritas SIN NOMBRES por directiva del investigador (2026-09-21); los hechos se cuentan por cargo, país y fecha. Se adoptó «admissibilidade do impeachment», el término jurídico brasileño de aquella votación. Revisar si «vacância da Presidência», «julgamento político» e «investidura» son como la prensa brasileña nombró esos hechos.
4. «intervenção» (glosario.intervencion): en Brasil la palabra evoca primero «intervenção federal» o «militar», y la Câmara dice «pronunciamento» o «discurso»; la definición afirma que es «o nome corrente», cosa que en Brasil no es del todo cierta (la misma duda tiene el inglés). El término está fijado por los archivos; valorar si la definición debe decir «o nome que os arquivos e o explorador usam» en vez de «o nome corrente».
5. glosario.laguna, «É uma falta nossa, e assim se diz» (fijada por la base): en Brasil «falta» es sobre todo ausencia o infracción deportiva; como «culpa o fallo» suena a español. Alternativas secas: «O erro é nosso, e assim se diz» o «A falha é nossa, e assim se diz» (esta repite la cabecera «Falha nossa», lo que puede ser una virtud).
6. «Es donde hay que aprender, y es aprendible»: he unificado en «e é possível aprender» (neutro). Las otras dos opciones son «e dá para aprender» (más brasileño y cercano, un punto más coloquial) y «e isso se aprende» (la más seca y, a mi oído, la mejor). Es cuestión de gusto; la que se elija va en inicio.empezar.salida3 y en usar.empezar.s3.texto.
7. Léxico de gremio que conviene que vea un politólogo brasileño: «matriz de pesquisa de opinião» por «matriz de encuesta» (en el gremio se dice «survey», anglicismo no admitido); «Vazamento do filtro» por «fuga»; «parecerista» por «revisor»; «escalonamento» por «escalado»; «chamada» por «pase de lista» (en la Câmara se habla de «lista de presença» y «verificação de quórum»); y la glosa «relatores (funcionários que leem)».
8. Redacción fija de los ausentes: «Venezuela, Cuba e Nicarágua não publicam…» va sin artículos, aunque la regla de países pide «a Venezuela» y «a Nicarágua» (Cuba no lleva). En enumeración el portugués de Brasil admite omitirlos y la frase queda más seca; la alternativa normativa sería «A Venezuela, Cuba e a Nicarágua…». Si se cambia, son cuatro claves (comun.ausentes.prosa, comun.ausentes.regimen, comun.alt.rejilla.largo.ausentes, fig.cobertura.salvedad).

## Dudas que dejaron los traductores

- Concordancia de |letra en el build: en fig.voz.salvedad, «{{NUEVO:desfase_ec.sesiones|letra}} sessões» vale hoy 2 y en portugués tiene que salir «duas» (femenino), no «dois»; lo mismo le pasaría a cualquier |letra ante «câmaras» o «séries» si el valor terminara en 1 o 2, así que el build necesita el género por aparición y formas brasileñas (dezesseis).
- comun.leame.contacto y fig.voz.salvedad arrastran en es.json los subtítulos editoriales «**Huecos rellenos · …**» (artefacto de scripts/copy2i18n.py, que no corta la unidad ante una línea en negrita): los he traducido como «**Campos preenchidos · …**» para conservar la estructura y no gastar «lacuna», pero no son texto para el lector y convendría quitarlos en el origen.
- Como se mantienen los dos términos y «turno» a secas no puede usarse en portugués, donde el español dice solo «turnos» he tenido que elegir: «turnos de fala» cuando se cuenta (glosario.intervencion, glosario.palabras, glosario.vinculacion.efectiva y fig.voz.salvedad: «Os turnos de fala incluem quem preside») y «turno(s) de palavra» cuando es la unidad (glosario.turno, glosario.laguna); el investigador debería confirmar cada elección.
- glosario.fila queda circular («**Linha.** Uma linha do arquivo…») porque «fila» y «línea» caen las dos en «linha», y glosario.escano («Em outros países, curul ou banca») pierde el ancla «escaño» que en español da sentido a «otros países», además de usar «posto» para «puesto» porque «lugar» y «vaga» están vetados como término.
- Fuera de la base terminológica he fijado «célula preenchida» (celda llena), «rótulo» (etiqueta de la rejilla), «estatísticas de acesso» (analítica) y «Universidade de Salamanca» en comun.pie.quien (regla de prosa) junto a «Instituto de Iberoamérica» en español, que deben coincidir con lo que hagan las otras familias; además, en comun.aei.logos.alt omití la traducción entre paréntesis del lema por ser casi idéntica en portugués, dejé comun.idioma.aviso.en en inglés e igualé comun.idioma.aviso.es_fuente al aviso .pt ya aprobado.
- «Você» explícito: en inicio.sesiones.entrada, inicio.sindueno.entrada («Aqui entra você.»), ficha.tareas.titulo («Hoje você pode»), ficha.tareas.sesion y ficha.tareas.sesion_ausente el portugués de Brasil no admite sujeto nulo sin ambigüedad y escribí «você», pese a la regla del «você implícito»; en cambio «necesita uno» pasó a impersonal («basta um») y «Su ficha dice» a «A ficha da sua câmara diz», porque «Sua ficha» se lee en Brasil como expediente personal.
- ficha.tareas.sesion: «Que esté no valida su contenido» quedó en «Estar aqui não valida seu conteúdo.» (añade «aqui», que el portugués exige) y debe casar con lo que reciba el plural comun.fija.novalida («Estarem aqui não valida seu conteúdo.»); también conviene alinear con la familia glosario «se dibuja(n) distinto» = «desenhada(s) de forma diferente» y «etiqueta» = «rótulo» (paises.leyenda.hueco frente a glosario.hueco).
- inicio.apertura.literatura: traduje «(Bäck e Debus, 2019)», pero la lista blanca de check-i18n solo contiene la forma española «(Bäck y Debus, 2019)» y habrá que añadir la portuguesa; en inicio.credencial puse «DOIs» (plural brasileño de sigla) y «Universidade de Salamanca», por entender que la línea-credencial es prosa y no cita ni logotipo.
- inicio.sesiones.lista: «asalto al Congreso español» pasó a «invasão do Congresso espanhol», porque «assalto» en Brasil es ante todo un atraco. Las descripciones de los hechos ya no llevan nombres propios.
- Concordancia y enlaces: en ficha.cifras.vinculacion reestructuré «otro {{x}} es de quien…» como «em mais {{x}}, fala quem não pode ocupar cadeira» para no depender de si el porcentaje resuelto pide «é» o «são»; en inicio.empezar.salida1 la contracción obliga a meter la preposición dentro del enlace («[no explorador]»); ficha.paquete.texto abre con «São» para no empezar por cifra (33 palabras, el original ya tiene 32); y «es aprendible» → «dá para aprender» pierde el juego de palabras y baja un punto el registro.
- «Fuga del filtro PASS/FLAG» pasa a «Vazamento do filtro» (metodologia.7.rotulo y 7.p2), porque en Brasil «fuga» se lee como huida y la filtración es «vazamento»; si el revisor prefiere el calco «fuga», hay que cambiar las dos claves a la vez.
- «linha» traduce «fila» y es también la línea de texto: en metodologia.7.p4 añadí «de texto» («uma palavra por linha de texto»), pero en 6.p2 («linhas em espanhol traduzidas para o inglês», frase que además pasé a voz activa para no superar las treinta palabras) y en 5.p7 («quebra de linha») quedó sin glosa y un lector puede entender «filas».
- «No es una matriz de encuesta» pasa a «matriz de pesquisa de opinião», porque «pesquisa» a secas ya es «investigación» en todo el sitio; «de opinião» estrecha algo el sentido y la alternativa del gremio en Brasil sería «matriz de survey», un anglicismo que la hoja de estilo no admite.
- Reestructuras obligadas por los artículos de los países y por los marcadores: metodologia.3.p5 abre con la lista y dos puntos («… e Guatemala: nessas câmaras, …») para no repetir siete contracciones ni pasar de treinta palabras; metodologia.1.p4 lleva los países de los marcadores entre paréntesis; metodologia.4.p4 pone los porcentajes entre paréntesis porque «962.878, 75,35%» se leería mal con la coma decimal; y metodologia.9.p1 se recolocó («Dos … conjuntos, … estão na edição …; {{NUEVO:dois.rezagados}}»), lo que exige que el build genere ese marcador en portugués con artículo y preposición («o Peru, na v1.0»).
- Decisiones menores que conviene confirmar: «el mayor de los medidos» es «o mais pesado dos medidos» para no escribir el vetado «o maior»; «revisor» es «parecerista»; «[Ver la ficha de Ecuador]» es «[Ver a ficha: Equador]» por coherencia con el rótulo único con marcador; el plural «los … DOI» es «DOIs»; «cadenas» es «cadeias de processamento» porque «cadeia» sola es cárcel en Brasil; y «(OCR)» va una sola vez, en el título de Metodología 6.


## Glosario

> [es] **Cámara.** La cámara baja o única de cada país, que es la que cubre la base. Decimos «cámara» para las {{corpus.n|letra}}, se llamen congreso, asamblea o cámara de diputados. El Senado no entra.
<!-- glosario.camara -->
**Câmara.** A câmara baixa ou única de cada país, que é a que a base cobre. Dizemos “câmara” para as {{corpus.n|letra}}, chamem-se congresso, assembleia ou câmara de deputados. O Senado não entra.

> [es] **País.** La unidad de descarga y de ficha: un país, una cámara, un archivo, un DOI.
<!-- glosario.pais -->
**País.** A unidade de download e de ficha: um país, uma câmara, um arquivo, um DOI.

> [es] **Pleno.** La reunión de toda la cámara. Las comisiones no entran.
<!-- glosario.pleno -->
**Plenário.** A reunião de toda a câmara. As comissões não entram.

> [es] **Diario.** El registro oficial y literal de lo dicho en el pleno, se llame Diario de Sesiones, Diario de los Debates, Gaceta, acta o versión taquigráfica. Va con mayúscula y siempre manda sobre la base.
<!-- glosario.diario -->
**Diário.** O registro oficial e literal do que foi dito no plenário, chame-se Diario de Sesiones, Diario de los Debates, Gaceta, ata ou versão taquigráfica. Escreve-se com maiúscula e sempre prevalece sobre a base.

> [es] **Sesión.** Una reunión del pleno, con su fecha y, donde el Diario lo imprime, su número.
<!-- glosario.sesion -->
**Sessão.** Uma reunião do plenário, com sua data e, onde o Diário o imprime, seu número.

> [es] **Turno de palabra.** La unidad de la base: lo que dice una persona desde que el Diario le da la palabra hasta que se la da a otra. Un discurso interrumpido son varios turnos.
<!-- glosario.turno -->
**Turno de palavra.** A unidade da base: o que uma pessoa diz desde que o Diário lhe dá a palavra até que a dá a outra. Um discurso interrompido são vários turnos de palavra.

> [es] **Fila.** Una línea del archivo de un país: o un turno de palabra, o un bloque de no habla. Es lo que se cuenta cuando se dice «filas».
<!-- glosario.fila -->
**Linha.** Cada entrada do arquivo de um país: ou um turno de palavra, ou um bloco de não fala. É o que se conta quando se diz “linhas”.

> [es] **Turnos de habla.** Los turnos de palabra, cuando se cuentan: las filas que no están marcadas como no habla. Son el denominador de la vinculación: {{habla.L}}.
<!-- glosario.turnos_habla -->
**Turnos de fala.** Os turnos de palavra, quando são contados: as linhas que não estão marcadas como não fala. São o denominador da vinculação: {{habla.L}}.

> [es] **Intervención.** El nombre corriente de lo que alguien dice en el pleno, y el que usan los archivos y el explorador para cada fila. Sirve para leer y buscar. Cuando se cuenta, se dice «turnos» o «filas».
<!-- glosario.intervencion -->
**Intervenção.** O nome corrente do que alguém diz no plenário, e o que os arquivos e o explorador usam para cada linha. Serve para ler e buscar. Quando se conta, diz-se “turnos de fala” ou “linhas”.

> [es] **Habla y no habla.** Toda fila es una cosa o la otra. No habla es lo que el Diario trae y nadie pronuncia como orador —carátulas, sumarios, pases de lista, votaciones nominales, documentos leídos—. Se conserva en su sitio y se marca, y solo donde está probado.
<!-- glosario.habla -->
**Fala e não fala.** Toda linha é uma coisa ou a outra. Não fala é o que o Diário traz e ninguém pronuncia como orador — capas, sumários, chamadas, votações nominais, documentos lidos. É mantido em seu lugar e marcado, e só onde está provado.

> [es] **Diputado, diputada.** Quien ocupa un escaño en la cámara, se llame en su país diputado, representante, asambleísta, congresista o deputado.
<!-- glosario.diputado -->
**Deputado, deputada.** Quem ocupa uma cadeira na câmara, chame-se em seu país diputado, representante, asambleísta, congresista ou deputado.

> [es] **Escaño.** El puesto de un diputado en la cámara. En otros países, curul o banca.
<!-- glosario.escano -->
**Cadeira.** O lugar de um deputado na câmara. Em espanhol, escaño; em alguns países, curul ou banca.

> [es] **Quien no puede ocupar escaño.** Quien habla en el pleno sin ser diputado: ministros, secretarios, relatores, invitados. No decimos «sin escaño».
<!-- glosario.noescano -->
**Quem não pode ocupar cadeira.** Quem fala no plenário sem ser deputado: ministros, secretários, relatores (funcionários que leem), convidados. Não dizemos “sem cadeira”.

> [es] **Padrón.** La lista de quienes ocuparon un escaño en una cámara, con nombre, sexo, partido, distrito y fechas. No es el padrón electoral. La construye el proyecto y va en un archivo aparte. El Diario dice quién habló; el padrón, quién tenía escaño.
<!-- glosario.padron -->
**Cadastro.** A lista de quem ocupou uma cadeira em uma câmara, com nome, sexo, partido, distrito e datas. Não é o cadastro eleitoral. É construído pelo projeto e vai em um arquivo à parte. O Diário diz quem falou; o cadastro, quem tinha cadeira.

> [es] **Vinculación.** Unir cada turno de palabra con la persona del padrón que lo dijo.
<!-- glosario.vinculacion -->
**Vinculação.** Unir cada turno de palavra à pessoa do cadastro que o disse.

> [es] **Vinculación bruta.** De todos los turnos de habla, los que llevan un diputado identificado: {{vinculados.L}} de {{habla.L}}, el {{vinc.bruta}}.
<!-- glosario.vinculacion.bruta -->
**Vinculação bruta.** De todos os turnos de fala, os que têm um deputado identificado: {{vinculados.L}} de {{habla.L}}, {{vinc.bruta}}.

> [es] **Vinculación efectiva.** La misma parte, sin contar en el denominador los turnos de quien no puede ocupar escaño ni las voces colectivas o anónimas: el {{vinc.efectiva}}. Una presidencia sin nombre no se descuenta, porque quien preside es diputado.
<!-- glosario.vinculacion.efectiva -->
**Vinculação efetiva.** A mesma parte, sem contar no denominador os turnos de fala de quem não pode ocupar cadeira nem as vozes coletivas ou anônimas: {{vinc.efectiva}}. Uma presidência sem nome não é descontada, porque quem preside é deputado.

> [es] **Laguna nuestra.** Un turno de un diputado que no logramos vincular. Es una falta nuestra, y se dice así. No es un hueco.
<!-- glosario.laguna -->
**Falha nossa.** Um turno de palavra de um deputado que não conseguimos vincular. É uma falta nossa, e assim se diz. Não é uma lacuna.

> [es] **Hueco declarado.** Años dentro de la serie de una cámara que su repositorio no tiene. Están dichos en su ficha y dibujados en la rejilla con contorno y etiqueta. Hoy son Argentina ({{pais.ar.huecos_rangos}}) y Paraguay ({{pais.py.huecos_rangos}}). Los años anteriores al inicio de una serie no son huecos.
<!-- glosario.hueco -->
**Lacuna declarada.** Anos dentro da série de uma câmara que o repositório dela não tem. Constam em sua ficha e são desenhados na grade com contorno e rótulo. Hoje são a Argentina ({{pais.ar.huecos_rangos}}) e o Paraguai ({{pais.py.huecos_rangos}}). Os anos anteriores ao início de uma série não são lacunas.

> [es] **Ausente.** Un país del universo de {{universo.n}} sin corpus, siempre con su motivo y con la redacción fija.
<!-- glosario.ausente -->
**Ausente.** Um país do universo de {{universo.n}} sem corpus, sempre com seu motivo e com a redação fixa.

> [es] **Edición.** El estado publicado de los datos de un país, con su número y su DOI. Una edición publicada no cambia. La página tiene su propia edición.
<!-- glosario.edicion -->
**Edição.** O estado publicado dos dados de um país, com seu número e seu DOI. Uma edição publicada não muda. O site tem sua própria edição.

> [es] **Identificador.** El código de una sesión, una fila o un diputado. Es estable dentro de una edición, no entre ediciones. Para citar un pasaje se dan la fecha y el número de sesión.
<!-- glosario.identificador -->
**Identificador.** O código de uma sessão, uma linha ou um deputado. É estável dentro de uma edição, não entre edições. Para citar uma passagem, informam-se a data e o número da sessão.

> [es] **Voz y presencia.** Presencia es ocupar escaños. Voz es lo que se dice en el pleno. La base mide voz.
<!-- glosario.voz -->
**Voz e presença.** Presença é ocupar cadeiras. Voz é o que se diz no plenário. A base mede voz.

> [es] **Palabras (la medida).** La medida pública de la voz es la parte de las palabras dichas. Turnos y oradoras están a un clic.
<!-- glosario.palabras -->
**Palavras (a medida).** A medida pública da voz é a parte das palavras ditas. Turnos de fala e oradoras estão a um clique.

> [es] **Sexo (variable derivada).** No lo da el Diario. Lo asignamos nosotros a cada persona del padrón, con su procedencia anotada. Tiene más error en mujeres que en hombres.
<!-- glosario.sexo -->
**Sexo (variável derivada).** Não é dado pelo Diário. É atribuído por nós a cada pessoa do cadastro, com sua procedência anotada. Tem mais erro em mulheres do que em homens.

> [es] **Padrón auditado.** Aquel cuyo sexo se revisó a mano, fila por fila: {{sexo.padrones_auditados|letra}} de {{corpus.n|letra}}. Los demás se marcan y se dibujan distinto.
<!-- glosario.padron.auditado -->
**Cadastro auditado.** Aquele cujo sexo foi revisado à mão, linha por linha: {{sexo.padrones_auditados|letra}} de {{corpus.n|letra}}. Os demais são marcados e desenhados de forma diferente.

> [es] **Archivo y conjunto de datos.** El archivo es el CSV de un país. El conjunto es todo lo depositado para ese país en Harvard Dataverse, con su documentación y su DOI.
<!-- glosario.archivo -->
**Arquivo e conjunto de dados.** O arquivo é o CSV de um país. O conjunto é tudo o que foi depositado para esse país no Harvard Dataverse, com sua documentação e seu DOI.

> [es] **Explorador.** La página que abre en su navegador el archivo de un país para buscar, filtrar y exportar. Abre un país cada vez.
<!-- glosario.explorador -->
**Explorador.** A página que abre no seu navegador o arquivo de um país para buscar, filtrar e exportar. Abre um país por vez.

> [es] **Formulario de descarga.** Lo que Harvard Dataverse pide antes de descargar: nombre, correo, institución, cargo y uso previsto.
<!-- glosario.formulario -->
**Formulário de download.** O que o Harvard Dataverse pede antes de baixar: nome, e-mail, instituição, cargo e uso previsto.

> [es] **Datos de la figura.** El CSV, el Excel y el LÉAME de una figura. Son agregados y se descargan sin formulario.
<!-- glosario.datos_figura -->
**Dados da figura.** O CSV, o Excel e o LEIA-ME de uma figura. São agregados e se baixam sem formulário.

> [es] **Pregunta sin dueño.** Lo que la base no trae anotado y alguien tendría que construir: tema, tono, posición, voto.
<!-- glosario.sin_dueno -->
**Pergunta sem dono.** O que a base não traz anotado e alguém teria de construir: tema, tom, posição, voto.


## Texto común del sitio

> [es] [Saltar al contenido]
<!-- comun.nav.saltar -->
[Ir para o conteúdo]

> [es] ParlaIbero
<!-- comun.cabecera.nombre -->
ParlaIbero

> [es] Los debates del pleno, turno por turno
<!-- comun.cabecera.descriptor -->
Os debates do plenário, fala por fala

> [es] Navegación principal
<!-- comun.nav.aria -->
Navegação principal

> [es] [Inicio]
<!-- comun.nav.inicio -->
[Início]

> [es] [Países]
<!-- comun.nav.paises -->
[Países]

> [es] [Metodología]
<!-- comun.nav.metodologia -->
[Metodologia]

> [es] [Usar los datos]
<!-- comun.nav.usar -->
[Usar os dados]

> [es] [Para parlamentos y organismos]
<!-- comun.nav.instituciones -->
[Para parlamentos e organismos]

> [es] [Parlamentos y organismos]
<!-- comun.nav.instituciones.corto -->
[Parlamentos e organismos]

> [es] [Descargar los datos]
<!-- comun.nav.cta.descargar -->
[Baixar os dados]

> [es] [Abrir el explorador]
<!-- comun.nav.cta.explorador -->
[Abrir o explorador]

> [es] [Menú]
<!-- comun.nav.menu.abrir -->
[Menu]

> [es] [Cerrar]
<!-- comun.nav.menu.cerrar -->
[Fechar]

> [es] [Tema oscuro]
<!-- comun.nav.tema.oscuro -->
[Tema escuro]

> [es] [Tema claro]
<!-- comun.nav.tema.claro -->
[Tema claro]

> [es] Se abre en su navegador; nada sale de su equipo.
<!-- comun.fija.local -->
Abre no seu navegador; nada sai do seu computador.

> [es] El explorador abre un país cada vez, hoy está solo en español y pide un navegador reciente.
<!-- comun.fija.explorador -->
O explorador abre um país por vez, hoje está apenas em espanhol e pede um navegador recente.

> [es] Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto.
<!-- comun.fija.formulario -->
Antes de baixar, o Harvard Dataverse pedirá nome, e-mail, instituição, cargo e uso previsto.

> [es] Nos gustaría conocer a quienes usan los datos, saber para qué les sirven y poder seguir en contacto.
<!-- comun.fija.formulario.motivo -->
Gostaríamos de conhecer quem usa os dados, saber para que eles servem e poder manter contato.

> [es] Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- comun.fija.diario -->
Edição derivada para pesquisa: diante de qualquer divergência, vale o Diário da sua câmara.

> [es] Los identificadores son estables dentro de una edición, no entre ediciones.
<!-- comun.fija.identificadores -->
Os identificadores são estáveis dentro de uma edição, não entre edições.

> [es] Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.
<!-- comun.fija.citar_pasaje -->
Para citar uma passagem, informe a data e o número da sessão e confira-a no Diário oficial da câmara.

> [es] Mide voz, no presencia.
<!-- comun.fija.voz -->
Mede voz, não presença.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres.
<!-- comun.fija.sexo -->
O sexo é atribuído por nós, com mais erro em mulheres do que em homens.

> [es] No ordena países.
<!-- comun.fija.no_ordena -->
Não ordena países.

> [es] El tono dice cuánto material hay, no cuánto se debate.
<!-- comun.fija.tono -->
O tom indica quanto material há, não quanto se debate.

> [es] Que estén no valida su contenido.
<!-- comun.fija.novalida -->
Estarem aqui não valida seu conteúdo.

> [es] Sin formulario: son datos agregados.
<!-- comun.fija.sin_formulario -->
Sem formulário: são dados agregados.

> [es] Faltan {{ausentes.n|letra}} países. Conviene decir por qué.
<!-- comun.ausentes.entrada -->
Faltam {{ausentes.n|letra}} países. Convém dizer por quê.

> [es] **Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
<!-- comun.ausentes.regimen -->
**Venezuela, Cuba, Nicarágua** — não publicam as atas de seus debates.

> [es] **Bolivia** — las publica sin digitalizar.
<!-- comun.ausentes.bolivia -->
**Bolívia** — publica-as sem digitalizar.

> [es] **Honduras** — publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.ausentes.honduras -->
**Honduras** — publica resumos do que foi discutido, não as intervenções.

> [es] Un solo criterio: que exista registro del debate plenario en forma de discursos. Donde existe, está aquí.
<!-- comun.ausentes.cierre -->
Um só critério: que exista registro do debate em plenário na forma de discursos. Onde existe, está aqui.

> [es] Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.ausentes.prosa -->
Venezuela, Cuba e Nicarágua não publicam as atas de seus debates. A Bolívia as publica sem digitalizar. Honduras publica resumos do que foi discutido, não as intervenções.

> [es] [Gráfico] [Tabla] [Datos]
<!-- comun.fig.pestanas -->
[Gráfico] [Tabela] [Dados]

> [es] [Descargar los datos de la figura]
<!-- comun.fig.datos -->
[Baixar os dados da figura]

> [es] CSV y Excel, con su LÉAME. Sin formulario: son datos agregados.
<!-- comun.fig.datos.nota -->
CSV e Excel, com seu LEIA-ME. Sem formulário: são dados agregados.

> [es] [Descargar la imagen]
<!-- comun.fig.imagen -->
[Baixar a imagem]

> [es] {{pct}} · {{n}} de {{den}} palabras
<!-- comun.fig.voz.hover -->
{{pct}} · {{n}} de {{den}} palavras

> [es] {{pais}} · {{año}} · {{ses}} sesiones · {{hab}} turnos de habla
<!-- comun.fig.rejilla.hover -->
{{pais}} · {{año}} · {{ses}} sessões · {{hab}} turnos de fala

> [es] {{pais}} · {{huecos_rangos}} · hueco declarado
<!-- comun.fig.rejilla.hover.hueco -->
{{pais}} · {{huecos_rangos}} · lacuna declarada

> [es] [Copiar la cita]
<!-- comun.cita.copiar -->
[Copiar a citação]

> [es] Cita copiada.
<!-- comun.cita.copiada -->
Citação copiada.

> [es] Se abre en Harvard Dataverse.
<!-- comun.enlace.dataverse -->
Abre no Harvard Dataverse.

> [es] Se abre el explorador, en otra pestaña.
<!-- comun.enlace.explorador -->
Abre o explorador, em outra aba.

> [es] Documento en inglés.
<!-- comun.doc.en -->
Documento em inglês.

> [es] Documento en español.
<!-- comun.doc.es -->
Documento em espanhol.

> [es] Proyecto PID2022-141706NB-C22 financiado por:
<!-- comun.aei.corta -->
Projeto PID2022-141706NB-C22 financiado por:

> [es] Esta página web es parte del proyecto de I+D+i PID2022-141706NB-C22, "Comportamiento legislativo y erosión democrática en América Latina" (PELA Comportamiento), financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.completa -->
Este site é parte do projeto de PD&I PID2022-141706NB-C22, "Comportamiento legislativo y erosión democrática en América Latina" (PELA Comportamiento), financiado por MICIU/AEI/10.13039/501100011033 e por FEDER, UE.

> [es] Logotipos del Ministerio de Ciencia, Innovación y Universidades; de la Unión Europea, con el lema «Cofinanciado por la Unión Europea»; y de la Agencia Estatal de Investigación. Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.logos.alt -->
Logotipos do Ministerio de Ciencia, Innovación y Universidades; da União Europeia, com o lema “Cofinanciado por la Unión Europea”; e da Agencia Estatal de Investigación. Projeto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 e por FEDER, UE.

> [es] ParlaIbero · Infraestructura de datos para las ciencias sociales y humanas · Instituto de Iberoamérica, Universidad de Salamanca
<!-- comun.pie.quien -->
ParlaIbero · Infraestrutura de dados para as ciências sociais e humanas · Instituto de Iberoamérica, Universidade de Salamanca

> [es] Los datos están en Harvard Dataverse: {{dois.n|letra}} conjuntos, cada uno con su DOI.
<!-- comun.pie.deposito -->
Os dados estão no Harvard Dataverse: {{dois.n|letra}} conjuntos, cada um com seu DOI.

> [es] Datos y contenidos, CC BY 4.0. Código de la página, MIT.
<!-- comun.pie.licencia -->
Dados e conteúdos, CC BY 4.0. Código do site, MIT.

> [es] Página, edición {{NUEVO:edicion_pagina}} · Datos, edición del {{NUEVO:edicion_datos|fecha_larga}}
<!-- comun.pie.edicion -->
Site, edição {{NUEVO:edicion_pagina}} · Dados, edição de {{NUEVO:edicion_datos|fecha_larga}}

> [es] [Colección en Harvard Dataverse] [Abrir el explorador] [Cómo citar] [De dónde sale cada cifra] [Avisar de una errata] [Escribirnos]
<!-- comun.pie.enlaces -->
[Coleção no Harvard Dataverse] [Abrir o explorador] [Como citar] [De onde vem cada número] [Informar um erro] [Escrever para nós]

> [es] Universidad de Salamanca
<!-- comun.pie.logos.usal.alt -->
Universidad de Salamanca

> [es] Instituto de Iberoamérica
<!-- comun.pie.logos.instituto.alt -->
Instituto de Iberoamérica

> [es] Este sitio no usa cookies ni analítica.
<!-- comun.privacidad.linea -->
Este site não usa cookies nem estatísticas de acesso.

> [es] El explorador tampoco recibe su archivo: no sale de su equipo. La descarga en Harvard Dataverse sí pide sus datos, y se lo avisamos antes del clic.
<!-- comun.privacidad.ampliada -->
O explorador também não recebe seu arquivo: ele não sai do seu computador. O download no Harvard Dataverse, sim, pede seus dados, e avisamos antes do clique.

> [es] Idioma
<!-- comun.idioma.etiqueta -->
Idioma

> [es] Cambiar de idioma
<!-- comun.idioma.aria -->
Mudar de idioma

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
A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.

> [es] The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.
<!-- comun.idioma.aviso.en -->
The explorer's interface is in Spanish only today. Search runs on each chamber's original text, in Spanish or Portuguese.

> [es] A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.
<!-- comun.idioma.aviso.pt -->
A interface do explorador está hoje apenas em espanhol. A busca funciona sobre o texto original de cada câmara, em espanhol ou em português.

> [es] Esta página no está.
<!-- comun.404.titulo -->
Esta página não está aqui.

> [es] El enlace puede ser antiguo o tener una errata. Los datos no se han movido: cada país sigue en su DOI.
<!-- comun.404.texto -->
O link pode ser antigo ou ter um erro. Os dados não mudaram de lugar: cada país continua em seu DOI.

> [es] [Ir a Inicio] [Ver los países] [Descargar los datos]
<!-- comun.404.salidas -->
[Ir para o Início] [Ver os países] [Baixar os dados]

> [es] Si llegó aquí desde un enlace de este mismo sitio, avísenos. [Avisar de una errata]
<!-- comun.404.errata -->
Se chegou aqui por um link deste mesmo site, avise-nos. [Informar um erro]

> [es] Figura con {{corpus.n|letra}} series, una por cámara. Cada serie muestra, década a década, qué parte de las palabras de diputados y diputadas con sexo conocido dijeron ellas. Cada cámara se compara consigo misma: la figura no ordena países. Los valores están en la pestaña «Tabla».
<!-- comun.alt.voz.corto -->
Figura com {{corpus.n|letra}} séries, uma por câmara. Cada série mostra, década a década, que parte das palavras de deputados e deputadas com sexo conhecido foi dita por elas. Cada câmara é comparada consigo mesma: a figura não ordena países. Os valores estão na aba “Tabela”.

> [es] En {{NUEVO:voz.n_sube|letra}} de {{corpus.n|letra}} cámaras, la última década con datos está por encima de la primera. No en todas sube: en República Dominicana pasa del {{pais.do.palF.primera.pct}} al {{pais.do.palF.ultima.pct}}, y en Guatemala baja antes de volver a subir.
<!-- comun.alt.voz.largo.intro -->
Em {{NUEVO:voz.n_sube|letra}} de {{corpus.n|letra}} câmaras, a última década com dados está acima da primeira. Não sobe em todas: na República Dominicana passa de {{pais.do.palF.primera.pct}} a {{pais.do.palF.ultima.pct}}, e na Guatemala cai antes de voltar a subir.

> [es] {{pais.<iso>.nombre}}: el {{pais.<iso>.palF.primera.pct}} en su primera década con datos; el {{pais.<iso>.palF.ultima.pct}} en la última.
<!-- comun.alt.voz.largo.fila -->
{{pais.<iso>.nombre}}: {{pais.<iso>.palF.primera.pct}} em sua primeira década com dados; {{pais.<iso>.palF.ultima.pct}} na última.

> [es] {{pais.<iso>.nombre}}: el {{pais.<iso>.palF.primera.pct}} en su primera década con datos; el {{pais.<iso>.palF.ultima.pct}} en la última. Padrón sin auditar.
<!-- comun.alt.voz.largo.fila.sin_auditar -->
{{pais.<iso>.nombre}}: {{pais.<iso>.palF.primera.pct}} em sua primeira década com dados; {{pais.<iso>.palF.ultima.pct}} na última. Cadastro não auditado.

> [es] Mide voz, no presencia. El denominador son las palabras de diputados y diputadas con sexo conocido. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Las {{sexo.padrones_sin_auditar|letra}} cámaras con padrón sin auditar —Argentina, Brasil, Chile, Ecuador y Perú— se dibujan con otro trazo.
<!-- comun.alt.voz.largo.salvedad -->
Mede voz, não presença. O denominador são as palavras de deputados e deputadas com sexo conhecido. O sexo é atribuído por nós, com mais erro em mulheres do que em homens. As {{sexo.padrones_sin_auditar|letra}} câmaras com cadastro não auditado — Argentina, Brasil, Chile, Equador e Peru — são desenhadas com outro traço.

> [es] Rejilla de cobertura: {{corpus.n|letra}} cámaras en filas y los años de {{rejilla.desde}} a {{rejilla.hasta}} en columnas. {{rejilla.llenas}} de {{rejilla.total}} celdas tienen al menos una sesión. Los mismos datos están en la pestaña «Tabla».
<!-- comun.alt.rejilla.corto -->
Grade de cobertura: {{corpus.n|letra}} câmaras nas linhas e os anos de {{rejilla.desde}} a {{rejilla.hasta}} nas colunas. Das {{rejilla.total}} células, {{rejilla.llenas}} têm ao menos uma sessão. Os mesmos dados estão na aba “Tabela”.

> [es] Cada fila es una cámara; cada columna, un año. Una celda llena quiere decir que la base tiene al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Las series empiezan en años distintos: antes del inicio la celda está vacía, y no es un hueco.
<!-- comun.alt.rejilla.largo.intro -->
Cada linha é uma câmara; cada coluna, um ano. Uma célula preenchida quer dizer que a base tem ao menos uma sessão desse ano, não que estejam todas. O tom indica quanto material há, não quanto se debate. As séries começam em anos diferentes: antes do início a célula está vazia, e não é uma lacuna.

> [es] {{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.
<!-- comun.alt.rejilla.largo.fila -->
{{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.

> [es] {{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, con hueco declarado en {{NUEVO:pais.<iso>.huecos_rangos}}.
<!-- comun.alt.rejilla.largo.fila.hueco -->
{{pais.<iso>.nombre}}, {{pais.<iso>.camara}}: de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, com lacuna declarada em {{NUEVO:pais.<iso>.huecos_rangos}}.

> [es] Debajo de la rejilla, sin celdas, los {{ausentes.n|letra}} países de un universo de {{universo.n}} que no tienen corpus. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- comun.alt.rejilla.largo.ausentes -->
Abaixo da grade, sem células, os {{ausentes.n|letra}} países de um universo de {{universo.n}} que não têm corpus. Venezuela, Cuba e Nicarágua não publicam as atas de seus debates. A Bolívia as publica sem digitalizar. Honduras publica resumos do que foi discutido, não as intervenções.

> [es] Con el teclado: una parada por cámara; las flechas recorren los años.
<!-- comun.alt.rejilla.teclado -->
Com o teclado: uma parada por câmara; as setas percorrem os anos.

> [es] LÉAME · {{fig.titulo}} ⏎ ParlaIbero · Datos, edición del {{NUEVO:edicion_datos|fecha_larga}} · Página, edición {{NUEVO:edicion_pagina}} · generado el {{fig.fecha_generacion}}
<!-- comun.leame.cabecera -->
LEIA-ME · {{fig.titulo}}
ParlaIbero · Dados, edição de {{NUEVO:edicion_datos|fecha_larga}} · Site, edição {{NUEVO:edicion_pagina}} · gerado em {{fig.fecha_generacion}}

> [es] QUÉ MIDE
<!-- comun.leame.que_mide.titulo -->
O QUE MEDE

> [es] {{fig.que_mide}}
<!-- comun.leame.que_mide -->
{{fig.que_mide}}

> [es] DENOMINADOR
<!-- comun.leame.denominador.titulo -->
DENOMINADOR

> [es] {{fig.denominador}} ⏎ Cada fila trae su n y su denominador. Una celda vacía quiere decir que esa cámara no tiene sesiones en ese periodo. No quiere decir cero.
<!-- comun.leame.denominador -->
{{fig.denominador}}
Cada linha traz seu n e seu denominador. Uma célula vazia quer dizer que essa câmara não tem sessões nesse período. Não quer dizer zero.

> [es] ARCHIVOS
<!-- comun.leame.archivos.titulo -->
ARQUIVOS

> [es] {{fig.archivo}}.csv: UTF-8, separado por comas, con punto decimal. ⏎ {{fig.archivo}}.xlsx: lo mismo, para Excel. Si su Excel usa coma decimal, abra este. ⏎ LEAME.txt: este archivo.
<!-- comun.leame.archivos -->
{{fig.archivo}}.csv: UTF-8, separado por vírgulas, com ponto decimal.
{{fig.archivo}}.xlsx: o mesmo, para Excel. Se o seu Excel usa vírgula decimal, abra este.
LEAME.txt: este arquivo.

> [es] COLUMNAS
<!-- comun.leame.columnas.titulo -->
COLUNAS

> [es] {{fig.columnas}}
<!-- comun.leame.columnas -->
{{fig.columnas}}

> [es] SALVEDAD
<!-- comun.leame.salvedad.titulo -->
RESSALVA

> [es] {{fig.salvedad}}
<!-- comun.leame.salvedad -->
{{fig.salvedad}}

> [es] FUENTE
<!-- comun.leame.fuente.titulo -->
FONTE

> [es] Calculado sobre los {{dois.n|letra}} conjuntos de ParlaIbero depositados en Harvard Dataverse: {{NUEVO:coleccion.url}}. La procedencia de cada cifra está en procedencia.csv. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de cada cámara.
<!-- comun.leame.fuente -->
Calculado sobre os {{dois.n|letra}} conjuntos do ParlaIbero depositados no Harvard Dataverse: {{NUEVO:coleccion.url}}. A procedência de cada número está em procedencia.csv. Edição derivada para pesquisa: diante de qualquer divergência, vale o Diário de cada câmara.

> [es] LICENCIA
<!-- comun.leame.licencia.titulo -->
LICENÇA

> [es] CC BY 4.0. Puede copiar, adaptar y redistribuir estos datos si cita la fuente.
<!-- comun.leame.licencia -->
CC BY 4.0. Pode copiar, adaptar e redistribuir estes dados, desde que cite a fonte.

> [es] CÓMO CITAR
<!-- comun.leame.citar.titulo -->
COMO CITAR

> [es] {{NUEVO:cita.autoria}}. «{{fig.titulo}}». ParlaIbero, datos de figura, edición del {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Consultado el [fecha de su consulta]. ⏎ Si usa los datos de un país, cite además su conjunto, con su DOI. La cita está en la ficha del país.
<!-- comun.leame.citar -->
{{NUEVO:cita.autoria}}. “{{fig.titulo}}”. ParlaIbero, dados de figura, edição de {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Acesso em [data da sua consulta].
Se usar os dados de um país, cite também o conjunto desse país, com seu DOI. A citação está na ficha do país.

> [es] ERRATAS Y CONTACTO
<!-- comun.leame.contacto.titulo -->
ERROS E CONTATO

> [es] {{NUEVO:contacto}} ⏎  ⏎ **Huecos rellenos · figura de la voz**
<!-- comun.leame.contacto -->
{{NUEVO:contacto}}

**Campos preenchidos · figura da voz**


## Figuras

> [es] Voz de las diputadas en el pleno, por cámara y década
<!-- fig.voz.titulo -->
Voz das deputadas no plenário, por câmara e década

> [es] De las palabras dichas en el pleno por diputados y diputadas, la parte que dicen ellas. Una serie por cámara y una cifra por década. El archivo trae también la misma parte en turnos de habla y en oradoras.
<!-- fig.voz.que_mide -->
Das palavras ditas no plenário por deputados e deputadas, a parte que elas dizem. Uma série por câmara e um número por década. O arquivo traz também a mesma parte em turnos de fala e em oradoras.

> [es] Las palabras de diputados y diputadas con sexo conocido, en esa cámara y esa década. No entran quienes no pueden ocupar escaño, las voces colectivas ni las filas de no habla.
<!-- fig.voz.denominador -->
As palavras de deputados e deputadas com sexo conhecido, nessa câmara e nessa década. Não entra quem não pode ocupar cadeira, nem as vozes coletivas, nem as linhas de não fala.

> [es] Mide voz, no presencia: léala junto a la serie de escaños. No es un indicador oficial ni ordena países. ⏎ El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el {{sexo.exactitud_h}} de los hombres y en el {{sexo.exactitud_m}} de las mujeres, sobre {{NUEVO:sexo.base_filas}} filas revisadas a mano en {{sexo.padrones_auditados|letra}} padrones. ⏎ En {{sexo.padrones_sin_auditar|letra}} cámaras —Argentina, Brasil, Chile, Ecuador y Perú— el padrón no está auditado, y una columna lo marca. ⏎ Los turnos incluyen a quien preside; por eso la medida pública son las palabras. ⏎ La serie se midió el {{NUEVO:medido_el|fecha_larga}} sobre nuestros archivos de trabajo, que solo en Ecuador difieren de lo depositado: {{NUEVO:desfase_ec.sesiones|letra}} sesiones y {{NUEVO:desfase_ec.filas}} filas posteriores al corte de la edición. Si recalcula la última década de Ecuador desde su descarga, puede no coincidir exactamente. ⏎  ⏎ **Huecos rellenos · rejilla de cobertura**
<!-- fig.voz.salvedad -->
Mede voz, não presença: leia-a junto com a série de cadeiras. Não é um indicador oficial nem ordena países.
O sexo é atribuído por nós, com mais erro em mulheres do que em homens. Acertamos em {{sexo.exactitud_h}} dos homens e em {{sexo.exactitud_m}} das mulheres, sobre {{NUEVO:sexo.base_filas}} linhas revisadas à mão em {{sexo.padrones_auditados|letra}} cadastros.
Em {{sexo.padrones_sin_auditar|letra}} câmaras — Argentina, Brasil, Chile, Equador e Peru — o cadastro não está auditado, e uma coluna o marca.
Os turnos de fala incluem quem preside; por isso a medida pública são as palavras.
A série foi medida em {{NUEVO:medido_el|fecha_larga}} sobre nossos arquivos de trabalho, que só no Equador diferem do depositado: {{NUEVO:desfase_ec.sesiones|letra}} sessões e {{NUEVO:desfase_ec.filas}} linhas posteriores ao corte da edição. Se recalcular a última década do Equador a partir do seu download, o resultado pode não coincidir exatamente.

**Campos preenchidos · grade de cobertura**

> [es] Cobertura: qué hay de cada cámara, año por año
<!-- fig.cobertura.titulo -->
Cobertura: o que há de cada câmara, ano a ano

> [es] Para cada cámara y cada año entre {{rejilla.desde}} y {{rejilla.hasta}}: si la base tiene al menos una sesión, cuántas sesiones y cuántos turnos de habla.
<!-- fig.cobertura.que_mide -->
Para cada câmara e cada ano entre {{rejilla.desde}} e {{rejilla.hasta}}: se a base tem ao menos uma sessão, quantas sessões e quantos turnos de fala.

> [es] {{rejilla.total}} celdas, una por cámara y año. {{rejilla.llenas}} tienen al menos una sesión.
<!-- fig.cobertura.denominador -->
São {{rejilla.total}} células, uma por câmara e ano. Delas, {{rejilla.llenas}} têm ao menos uma sessão.

> [es] Una celda llena quiere decir que hay al menos una sesión de ese año, no que estén todas. El tono dice cuánto material hay, no cuánto se debate. Antes del inicio de una serie la celda está vacía y no es un hueco. Un hueco declarado son años dentro de la serie que el repositorio de la cámara no tiene, y lleva su etiqueta. ⏎ Faltan {{ausentes.n|letra}} países de un universo de {{universo.n}}. Venezuela, Cuba y Nicaragua no publican las actas de sus debates. Bolivia las publica sin digitalizar. Honduras publica resúmenes de lo discutido, no las intervenciones.
<!-- fig.cobertura.salvedad -->
Uma célula preenchida quer dizer que há ao menos uma sessão desse ano, não que estejam todas. O tom indica quanto material há, não quanto se debate. Antes do início de uma série a célula está vazia e não é uma lacuna. Uma lacuna declarada são anos dentro da série que o repositório da câmara não tem, e leva seu rótulo.
Faltam {{ausentes.n|letra}} países de um universo de {{universo.n}}. Venezuela, Cuba e Nicarágua não publicam as atas de seus debates. A Bolívia as publica sem digitalizar. Honduras publica resumos do que foi discutido, não as intervenções.


## Inicio

> [es] ParlaIbero · Lo que se dijo en {{corpus.n|letra}} cámaras iberoamericanas
<!-- inicio.meta.titulo -->
ParlaIbero · O que se disse em {{corpus.n|letra}} câmaras ibero-americanas

> [es] Infraestructura de datos abierta: lo que se dijo en el pleno de {{corpus.n}} cámaras de América Latina, España y Portugal, {{rejilla.desde}}–{{rejilla.hasta}}. Con DOI y explorador.
<!-- inicio.meta.descripcion -->
Infraestrutura de dados aberta: o que se disse no plenário de {{corpus.n}} câmaras da América Latina, da Espanha e de Portugal, {{rejilla.desde}}–{{rejilla.hasta}}. Com DOI e explorador.

> [es] ¿Cuánto de lo que dicen los representantes en el pleno lo dicen diputadas?
<!-- inicio.apertura.pregunta -->
Quanto do que os representantes dizem no plenário é dito por deputadas?

> [es] {{corpus.n|letra}} cámaras, cada una contra sí misma, por década, en palabras.
<!-- inicio.apertura.figura.titulo -->
{{corpus.n|letra}} câmaras, cada uma contra si mesma, por década, em palavras.

> [es] En Uruguay, el {{pais.uy.palF.1980s.pct}} de las palabras en los ochenta; el {{pais.uy.palF.2020s.pct}} en esta década. En Costa Rica, del {{pais.cr.palF.1990s.pct}} en los noventa al {{pais.cr.palF.2020s.pct}}. Siempre sobre palabras de diputados y diputadas con sexo conocido. No en todas sube, y la figura no lo esconde.
<!-- inicio.apertura.figura.ejemplos -->
No Uruguai, {{pais.uy.palF.1980s.pct}} das palavras nos anos oitenta; {{pais.uy.palF.2020s.pct}} nesta década. Na Costa Rica, de {{pais.cr.palF.1990s.pct}} nos anos noventa a {{pais.cr.palF.2020s.pct}}. Sempre sobre palavras de deputados e deputadas com sexo conhecido. Não sobe em todas, e a figura não o esconde.

> [es] Mide voz, no presencia. El sexo lo asignamos nosotros, con más error en mujeres que en hombres; {{sexo.padrones_sin_auditar|letra}} cámaras sin revisión a mano se dibujan distinto. No ordena países.
<!-- inicio.apertura.figura.salvedad -->
Mede voz, não presença. O sexo é atribuído por nós, com mais erro em mulheres do que em homens; {{sexo.padrones_sin_auditar|letra}} câmaras sem revisão à mão são desenhadas de forma diferente. Não ordena países.

> [es] [Ver turnos y oradoras]
<!-- inicio.apertura.figura.medidas -->
[Ver turnos de fala e oradoras]

> [es] Comparar democracias iberoamericanas por lo que se dijo en sus cámaras costaba una carrera académica por país. Ese coste ya está pagado.
<!-- inicio.tesis -->
Comparar democracias ibero-americanas pelo que se disse em suas câmaras custava uma carreira acadêmica por país. Esse custo já está pago.

> [es] Tres años de trabajo. Una descarga. Eso es lo que significa infraestructura.
<!-- inicio.tesis.remate -->
Três anos de trabalho. Um download. É isso que significa infraestrutura.

> [es] {{corpus.n}} cámaras · {{rejilla.desde}}–{{rejilla.hasta}} · CC BY 4.0 · {{dois.n}} DOI · Universidad de Salamanca · Harvard Dataverse
<!-- inicio.credencial -->
{{corpus.n}} câmaras · {{rejilla.desde}}–{{rejilla.hasta}} · CC BY 4.0 · {{dois.n}} DOIs · Universidade de Salamanca · Harvard Dataverse

> [es] La pregunta tiene literatura (Bäck y Debus, 2019). Faltaba material para hacerla en {{corpus.n|letra}} cámaras iberoamericanas con la misma unidad.
<!-- inicio.apertura.literatura -->
A pergunta tem literatura (Bäck e Debus, 2019). Faltava material para fazê-la em {{corpus.n|letra}} câmaras ibero-americanas com a mesma unidade.

> [es] ¿Qué hay, y desde cuándo?
<!-- inicio.cobertura.titulo -->
O que há, e desde quando?

> [es] Todo lo que había. No una muestra de lo que había.
<!-- inicio.cobertura.censal -->
Tudo o que havia. Não uma amostra do que havia.

> [es] Tienen sesión {{rejilla.llenas}} de las {{rejilla.total}} celdas de cámara y año; el resto son años anteriores a cada serie o huecos declarados.
<!-- inicio.cobertura.rejilla -->
Têm sessão {{rejilla.llenas}} das {{rejilla.total}} células de câmara e ano; as demais são anos anteriores a cada série ou lacunas declaradas.

> [es] Busque su cámara.
<!-- inicio.cobertura.busque -->
Procure sua câmara.

> [es] ¿Quién ocupa el tiempo del pleno?
<!-- inicio.pleno.titulo -->
Quem ocupa o tempo do plenário?

> [es] La unidad es el turno de palabra, tal como lo marca el propio Diario.
<!-- inicio.pleno.unidad -->
A unidade é o turno de palavra, tal como o próprio Diário o marca.

> [es] «Sí, si es urgente hay que demostrarlo, porque ahí también viene el dinero para compra de frijol y la época de siembra no espera a que la Asamblea quiera o no quiera, así que ojala que la próxima semana cumplamos lo que nos corresponde como diputados.»
<!-- inicio.pleno.fragmento -->
“Sí, si es urgente hay que demostrarlo, porque ahí también viene el dinero para compra de frijol y la época de siembra no espera a que la Asamblea quiera o no quiera, así que ojala que la próxima semana cumplamos lo que nos corresponde como diputados.” (Sim, se é urgente é preciso demonstrar isso, porque aí também vem o dinheiro para compra de feijão e a época de plantio não espera que a Assembleia queira ou não queira, então tomara que na próxima semana cumpramos o que nos cabe como deputados.)

> [es] PCN · Asamblea Legislativa de El Salvador · {{NUEVO:cita.sv.fecha|fecha_larga}}
<!-- inicio.pleno.fragmento.pie -->
PCN · Asamblea Legislativa de El Salvador · {{NUEVO:cita.sv.fecha|fecha_larga}}

> [es] De {{habla.L}} turnos de habla, en el {{vinc.bruta}} sabemos qué diputado habla. Del resto, el {{novinc.noescano.pct}} es de quien no puede ocupar escaño —ministros, secretarios, invitados—; el {{novinc.colectiva.pct}}, voz colectiva; el {{novinc.laguna.pct}}, laguna nuestra. Sin contar los dos primeros, el {{vinc.efectiva}}.
<!-- inicio.pleno.vinculacion -->
De {{habla.L}} turnos de fala, em {{vinc.bruta}} sabemos qual deputado fala. Do restante, {{novinc.noescano.pct}} são de quem não pode ocupar cadeira — ministros, secretários, convidados —; {{novinc.colectiva.pct}}, voz coletiva; {{novinc.laguna.pct}}, falha nossa. Sem contar os dois primeiros, {{vinc.efectiva}}.

> [es] En Panamá, el {{pais.pa.noescano}} de los turnos de habla es de quien no puede ocupar escaño. Compare [por país], nunca desde la cifra agrupada.
<!-- inicio.pleno.panama -->
No Panamá, {{pais.pa.noescano}} dos turnos de fala são de quem não pode ocupar cadeira. Compare [por país], nunca a partir do número agrupado.

> [es] ¿Qué se dijo aquel día?
<!-- inicio.sesiones.titulo -->
O que se disse naquele dia?

> [es] {{NUEVO:eventos.n_presentes|letra}} sesiones que usted reconoce están aquí.
<!-- inicio.sesiones.entrada -->
{{NUEVO:eventos.n_presentes|letra}} sessões que você reconhece estão aqui.

> [es] La admisión del juicio político a la presidenta de Brasil, con {{evento.br-2016-04-17.filas}} filas. La investidura interrumpida por el asalto al Congreso español, con {{evento.es-1981-02-23.filas}}. La vacancia presidencial en Perú, con {{evento.pe-2020-11-09.filas}}.
<!-- inicio.sesiones.lista -->
A admissibilidade do impeachment da presidente do Brasil, com {{evento.br-2016-04-17.filas}} linhas. A investidura interrompida pela invasão do Congresso espanhol, com {{evento.es-1981-02-23.filas}}. A vacância da Presidência do Peru, com {{evento.pe-2020-11-09.filas}}.

> [es] Las dos del juicio político al presidente de Paraguay, no: caen en un hueco declarado.
<!-- inicio.sesiones.ausentes -->
As duas do julgamento político do presidente do Paraguai, não: caem em uma lacuna declarada.

> [es] Abra una: descargue ese país y búsquela por fecha [en el explorador].
<!-- inicio.sesiones.invitacion -->
Abra uma: baixe esse país e busque-a por data [no explorador].

> [es] Cuatro preguntas sin dueño
<!-- inicio.sindueno.titulo -->
Quatro perguntas sem dono

> [es] La base no trae anotación. Aquí entra usted.
<!-- inicio.sindueno.entrada -->
A base não traz anotação. Aqui entra você.

> [es] **Tema.** Existe el esquema del Comparative Agendas Project; falta un clasificador validado en dos lenguas.
<!-- inicio.sindueno.tema -->
**Tema.** Existe o esquema do Comparative Agendas Project; falta um classificador validado em duas línguas.

> [es] **Tono.** Faltan clasificadores validados; en actas escaneadas, medir tono puede ser medir el escáner.
<!-- inicio.sindueno.tono -->
**Tom.** Faltam classificadores validados; em atas escaneadas, medir tom pode ser medir o scanner.

> [es] **Posición.** Están el texto y el partido; falta el escalado y su validación humana.
<!-- inicio.sindueno.posicion -->
**Posição.** O texto e o partido estão aqui; faltam o escalonamento e sua validação humana.

> [es] **Voto.** Los recuentos del Diario son texto; las votaciones vienen de fuera.
<!-- inicio.sindueno.voto -->
**Voto.** As contagens do Diário são texto; as votações vêm de fora.

> [es] Tres años de trabajo. Una descarga.
<!-- inicio.empezar.titulo -->
Três anos de trabalho. Um download.

> [es] Aquí las variables hay que construirlas.
<!-- inicio.empezar.entrada -->
Aqui as variáveis precisam ser construídas.

> [es] **Sin programar.** [Los datos de cada figura], sin formulario. O [El Salvador] en [el explorador]: {{pais.sv.csv}}, de {{pais.sv.inicio}} a {{pais.sv.fin}}, con formulario.
<!-- inicio.empezar.salida1 -->
**Sem programar.** [Os dados de cada figura], sem formulário. Ou [El Salvador] [no explorador]: {{pais.sv.csv}}, de {{pais.sv.inicio}} a {{pais.sv.fin}}, com formulário.

> [es] **Con R o Python básico.** [Un país], de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}: filtros, conteos, series.
<!-- inicio.empezar.salida2 -->
**Com R ou Python básico.** [Um país], de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}: filtros, contagens, séries.

> [es] **Con métodos de texto.** [Los {{corpus.n|letra}}], {{NUEVO:csv.total}}: embeddings, clasificación, grafos. Es donde hay que aprender, y es aprendible.
<!-- inicio.empezar.salida3 -->
**Com métodos de texto.** [Os {{corpus.n|letra}}], {{NUEVO:csv.total}}: embeddings, classificação, grafos. É onde é preciso aprender, e é possível aprender.

> [es] {{NUEVO:coleccion.cita}}
<!-- inicio.empezar.cita -->
{{NUEVO:coleccion.cita}}


## Países · índice

> [es] Países · ParlaIbero
<!-- paises.meta.titulo -->
Países · ParlaIbero

> [es] Qué hay de cada cámara, año por año: cobertura, huecos declarados, sesiones, filas y DOI de los {{corpus.n}} corpus de ParlaIbero.
<!-- paises.meta.descripcion -->
O que há de cada câmara, ano a ano: cobertura, lacunas declaradas, sessões, linhas e DOI dos {{corpus.n}} corpora do ParlaIbero.

> [es] ¿Qué hay, y desde cuándo?
<!-- paises.titulo -->
O que há, e desde quando?

> [es] Una fila por cámara y una columna por año, de {{rejilla.desde}} a {{rejilla.hasta}}: de {{rejilla.total}} celdas, {{rejilla.llenas}} tienen al menos una sesión. Cada fila abre la ficha de su país.
<!-- paises.entradilla -->
Uma linha por câmara e uma coluna por ano, de {{rejilla.desde}} a {{rejilla.hasta}}: de {{rejilla.total}} células, {{rejilla.llenas}} têm ao menos uma sessão. Cada linha abre a ficha do país.

> [es] Cómo leer la rejilla
<!-- paises.leyenda.titulo -->
Como ler a grade

> [es] Con tono: ese año hay al menos una sesión en la base. No quiere decir que estén todas.
<!-- paises.leyenda.con_sesion -->
Com tom: nesse ano há ao menos uma sessão na base. Não quer dizer que estejam todas.

> [es] Con contorno y etiqueta: hueco declarado. Son años dentro de la serie que el repositorio de la cámara no tiene.
<!-- paises.leyenda.hueco -->
Com contorno e rótulo: lacuna declarada. São anos dentro da série que o repositório da câmara não tem.

> [es] Vacía: año anterior al inicio de la serie de esa cámara.
<!-- paises.leyenda.anterior -->
Vazia: ano anterior ao início da série dessa câmara.

> [es] El tono dice cuántos turnos de habla hay ese año. Los cortes van impresos junto a la escala.
<!-- paises.leyenda.tono -->
O tom indica quantos turnos de fala há nesse ano. Os pontos de corte vêm impressos junto à escala.

> [es] El tono dice cuánto material hay, no cuánto se debate. La ausencia nunca lleva color.
<!-- paises.leyenda.no_significa -->
O tom indica quanto material há, não quanto se debate. A ausência nunca leva cor.

> [es] Edición depositada: lo que devuelve cada DOI. No todas las filas son habla; por eso van las dos columnas.
<!-- paises.tabla.pie -->
Edição depositada: o que cada DOI devolve. Nem todas as linhas são fala; por isso aparecem as duas colunas.

> [es] País
<!-- paises.tabla.col.pais -->
País

> [es] Cámara
<!-- paises.tabla.col.camara -->
Câmara

> [es] Diario
<!-- paises.tabla.col.diario -->
Diário

> [es] Periodo
<!-- paises.tabla.col.periodo -->
Período

> [es] Años con sesión
<!-- paises.tabla.col.anos -->
Anos com sessão

> [es] Huecos declarados
<!-- paises.tabla.col.huecos -->
Lacunas declaradas

> [es] Sesiones
<!-- paises.tabla.col.sesiones -->
Sessões

> [es] Filas
<!-- paises.tabla.col.filas -->
Linhas

> [es] Turnos de habla
<!-- paises.tabla.col.habla -->
Turnos de fala

> [es] DOI
<!-- paises.tabla.col.doi -->
DOI

> [es] [Descargar los datos de la figura]
<!-- paises.descarga.boton -->
[Baixar os dados da figura]

> [es] Antes de comparar países
<!-- paises.aviso.titulo -->
Antes de comparar países

> [es] La legislatura no significa lo mismo en dos países. Se comparan tasas dentro de un país, a lo largo del tiempo. Entre países, solo con el denominador a la vista.
<!-- paises.aviso.comparabilidad -->
A legislatura não significa o mesmo em dois países. Comparam-se taxas dentro de um país, ao longo do tempo. Entre países, só com o denominador à vista.


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
Hoje você pode

> [es] **Buscar** en este pleno, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, por texto, fecha, partido, legislatura y diputado.
<!-- ficha.tareas.buscar -->
**Buscar** neste plenário, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, por texto, data, partido, legislatura e deputado.

> [es] (salvo {{NUEVO:pais.<iso>.huecos_rangos}})
<!-- ficha.tareas.buscar.huecos -->
(exceto {{NUEVO:pais.<iso>.huecos_rangos}})

> [es] **Abrir una sesión que reconoce:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}} Que esté no valida su contenido.
<!-- ficha.tareas.sesion -->
**Abrir uma sessão que você reconhece:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}} Estar aqui não valida seu conteúdo.

> [es] **Una sesión que no encontrará:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}}
<!-- ficha.tareas.sesion_ausente -->
**Uma sessão que você não encontrará:** {{evento.<iso>-<fecha>.fecha|fecha_larga}}. {{evento.<iso>-<fecha>.que_paso}}

> [es] **Exportar con su cita.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial.
<!-- ficha.tareas.exportar -->
**Exportar com sua citação.** Para citar uma passagem, informe a data e o número da sessão e confira-a no Diário oficial da câmara.

> [es] En este archivo, solo el {{NUEVO:pais.<iso>.disp.session_number}} de las filas lleva número de sesión: aquí el pasaje se localiza por fecha.
<!-- ficha.tareas.exportar.sin_numero -->
Neste arquivo, só {{NUEVO:pais.<iso>.disp.session_number}} das linhas trazem número de sessão: aqui a passagem se localiza por data.

> [es] Qué es
<!-- ficha.que_es.titulo -->
O que é

> [es] El pleno de esta cámara, turno por turno, según su registro oficial: {{NUEVO:pais.<iso>.diario}}.
<!-- ficha.que_es.texto -->
O plenário desta câmara, fala por fala, segundo seu registro oficial: {{NUEVO:pais.<iso>.diario}}.

> [es] Hay sesión todos los años, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.
<!-- ficha.que_es.sin_huecos -->
Há sessão em todos os anos, de {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}.

> [es] De {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, faltan {{NUEVO:pais.<iso>.huecos_rangos}}: el repositorio de la cámara no los tiene.
<!-- ficha.que_es.con_huecos -->
De {{pais.<iso>.inicio}} a {{pais.<iso>.fin}}, faltam {{NUEVO:pais.<iso>.huecos_rangos}}: o repositório da câmara não os tem.

> [es] De dónde sale
<!-- ficha.fuente.titulo -->
De onde vem

> [es] {{NUEVO:pais.<iso>.fuente}} ⏎ Cómo se transformó, paso a paso, lo cuenta el informe del proceso que acompaña al conjunto. [Leer el informe en Dataverse]
<!-- ficha.fuente.texto -->
{{NUEVO:pais.<iso>.fuente}}
Como foi transformado, passo a passo, está no relatório do processo que acompanha o conjunto. [Ler o relatório no Dataverse]

> [es] Cifras
<!-- ficha.cifras.titulo -->
Números

> [es] {{pais.<iso>.sesiones.P}} sesiones, en {{NUEVO:pais.<iso>.anos_con_sesion}} de {{NUEVO:pais.<iso>.anos_periodo}} años.
<!-- ficha.cifras.sesiones -->
São {{pais.<iso>.sesiones.P}} sessões, em {{NUEVO:pais.<iso>.anos_con_sesion}} de {{NUEVO:pais.<iso>.anos_periodo}} anos.

> [es] Sin ningún turno de habla, {{NUEVO:pais.<iso>.sesiones_sin_habla}}.
<!-- ficha.cifras.sin_habla -->
Sem nenhum turno de fala, {{NUEVO:pais.<iso>.sesiones_sin_habla}}.

> [es] {{pais.<iso>.filas.P}} filas; {{NUEVO:pais.<iso>.habla.L}} son turnos de habla.
<!-- ficha.cifras.filas -->
São {{pais.<iso>.filas.P}} linhas; delas, {{NUEVO:pais.<iso>.habla.L}} são turnos de fala.

> [es] En el {{pais.<iso>.bruta}} de esos turnos sabemos qué diputado habla; otro {{pais.<iso>.noescano}} es de quien no puede ocupar escaño. Sin contar estos ni las voces colectivas, el {{pais.<iso>.efectiva}}.
<!-- ficha.cifras.vinculacion -->
Em {{pais.<iso>.bruta}} desses turnos de fala, sabemos qual deputado fala; em mais {{pais.<iso>.noescano}}, fala quem não pode ocupar cadeira. Sem contar estes nem as vozes coletivas, {{pais.<iso>.efectiva}}.

> [es] [Ver cómo se calcula]
<!-- ficha.cifras.enlace -->
[Ver como se calcula]

> [es] Voz femenina, en palabras
<!-- ficha.voz.titulo -->
Voz feminina, em palavras

> [es] Palabras de diputadas por cada cien de diputados y diputadas con sexo conocido, por década. Mide voz, no escaños.
<!-- ficha.voz.texto -->
Palavras de deputadas a cada cem de deputados e deputadas com sexo conhecido, por década. Mede voz, não cadeiras.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Acertamos en el {{sexo.exactitud_m}} de las mujeres y en el {{sexo.exactitud_h}} de los hombres, medido en conjunto sobre {{sexo.padrones_auditados|letra}} padrones —las listas de diputados— revisados a mano. Este es uno de ellos.
<!-- ficha.voz.salvedad.auditado -->
O sexo é atribuído por nós, com mais erro em mulheres do que em homens. Acertamos em {{sexo.exactitud_m}} das mulheres e em {{sexo.exactitud_h}} dos homens, medido em conjunto sobre {{sexo.padrones_auditados|letra}} cadastros — as listas de deputados — revisados à mão. Este é um deles.

> [es] El sexo lo asignamos nosotros, con más error en mujeres que en hombres. Ese error se midió en {{sexo.padrones_auditados|letra}} padrones —las listas de diputados— revisados a mano. Este no está entre ellos, y su serie se dibuja distinto.
<!-- ficha.voz.salvedad.sin_auditar -->
O sexo é atribuído por nós, com mais erro em mulheres do que em homens. Esse erro foi medido em {{sexo.padrones_auditados|letra}} cadastros — as listas de deputados — revisados à mão. Este não está entre eles, e sua série é desenhada de forma diferente.

> [es] [Ver turnos y oradoras]
<!-- ficha.voz.enlace -->
[Ver turnos de fala e oradoras]

> [es] Antes de usarlo
<!-- ficha.antes.titulo -->
Antes de usar

> [es] Este corpus declara {{NUEVO:pais.<iso>.n_limitaciones|letra}} limitaciones, medidas una a una. Están en el documento «Limitaciones conocidas» del conjunto, en inglés, español y portugués. [Leer las limitaciones en Dataverse]
<!-- ficha.antes.intro -->
Este corpus declara {{NUEVO:pais.<iso>.n_limitaciones|letra}} limitações, medidas uma a uma. Estão no documento “Limitações conhecidas” do conjunto, em inglês, espanhol e português. [Ler as limitações no Dataverse]

> [es] El conjunto de datos
<!-- ficha.paquete.titulo -->
O conjunto de dados

> [es] {{paquete.ficheros}} archivos: las intervenciones; el padrón; LÉAME, diccionario de datos, limitaciones conocidas e informe del proceso, en inglés, español y portugués; y, para programas, cifras del corpus, metadatos y métodos de vinculación.
<!-- ficha.paquete.texto -->
São {{paquete.ficheros}} arquivos: as intervenções; o cadastro; LEIA-ME, dicionário de dados, limitações conhecidas e relatório de processamento, em inglês, espanhol e português; e, para programas, números do corpus, metadados e métodos de vinculação.

> [es] Las intervenciones pesan {{pais.<iso>.csv}}. No las abra en una hoja de cálculo: puede cortar filas y textos. Al elegir el archivo, el explorador le dice cuánta memoria necesita.
<!-- ficha.paquete.peso -->
As intervenções pesam {{pais.<iso>.csv}}. Não as abra em uma planilha: pode cortar linhas e textos. Ao escolher o arquivo, o explorador diz quanta memória é necessária.

> [es] [Descargar en Dataverse]
<!-- ficha.descarga.boton -->
[Baixar no Dataverse]

> [es] [Abrir el explorador]
<!-- ficha.descarga.explorador -->
[Abrir o explorador]

> [es] Autoría: {{NUEVO:pais.<iso>.autores}}. DOI: {{pais.<iso>.doi}}. Edición {{pais.<iso>.version}}. Licencia {{NUEVO:pais.<iso>.licencia}}.
<!-- ficha.credito -->
Autoria: {{NUEVO:pais.<iso>.autores}}. DOI: {{pais.<iso>.doi}}. Edição {{pais.<iso>.version}}. Licença {{NUEVO:pais.<iso>.licencia}}.

> [es] Cómo citar
<!-- ficha.cita.titulo -->
Como citar

> [es] {{NUEVO:pais.<iso>.cita}}
<!-- ficha.cita.texto -->
{{NUEVO:pais.<iso>.cita}}


## Metodología

> [es] Metodología · ParlaIbero
<!-- metodologia.meta.titulo -->
Metodologia · ParlaIbero

> [es] Qué es una fila, quién habla, cuánto falla la variable de sexo y qué no afirman los {{corpus.n}} corpus. Cada apartado lleva a los datos y al explorador.
<!-- metodologia.meta.descripcion -->
O que é uma linha, quem fala, quanto falha a variável de sexo e o que não afirmam os {{corpus.n}} corpora do ParlaIbero. Cada seção leva aos dados e ao explorador.

> [es] En esta página
<!-- metodologia.indice.titulo -->
Nesta página

> [es] Qué es una fila
<!-- metodologia.indice.1 -->
O que é uma linha

> [es] De la fuente a la tabla
<!-- metodologia.indice.2 -->
Da fonte à tabela

> [es] Habla y no habla
<!-- metodologia.indice.3 -->
Fala e não fala

> [es] Quién habla
<!-- metodologia.indice.4 -->
Quem fala

> [es] Sexo y auditoría de género
<!-- metodologia.indice.5 -->
Sexo e auditoria de gênero

> [es] Páginas escaneadas
<!-- metodologia.indice.6 -->
Páginas escaneadas

> [es] Validación y revisión
<!-- metodologia.indice.7 -->
Validação e revisão

> [es] Lo que no afirma
<!-- metodologia.indice.8 -->
O que não afirma

> [es] Ediciones y reproducibilidad
<!-- metodologia.indice.9 -->
Edições e reprodutibilidade

> [es] Documentación completa
<!-- metodologia.indice.10 -->
Documentação completa

> [es] Metodología
<!-- metodologia.titulo -->
Metodologia

> [es] Qué hay en cada fila, qué se midió y qué no se afirma.
<!-- metodologia.subtitulo -->
O que há em cada linha, o que foi medido e o que não se afirma.

> [es] Esta página no recorre el proceso etapa por etapa. Responde lo que preguntaría un revisor, con cada límite en la misma frase que su cifra.
<!-- metodologia.entradilla.1 -->
Esta página não percorre o processo etapa por etapa. Responde ao que um parecerista perguntaria, com cada limite na mesma frase que seu número.

> [es] Cada apartado termina en algo que usted puede comprobar con sus manos.
<!-- metodologia.entradilla.2 -->
Cada seção termina em algo que você pode conferir com as próprias mãos.

> [es] A {{NUEVO:fecha_busqueda|fecha_larga}} no hemos localizado otro corpus de varios países de América Latina con el texto íntegro y cada orador identificado como diputado. Existen ParlaMint, que cubre España y Portugal; ParlSpeech, que cubre España; y ParlEE. En la región, padrones sin texto, discursos presidenciales y corpus nacionales.
<!-- metodologia.novedad -->
Até {{NUEVO:fecha_busqueda|fecha_larga}}, não localizamos outro corpus de vários países da América Latina com o texto integral e cada orador identificado como deputado. Existem o ParlaMint, que cobre a Espanha e Portugal; o ParlSpeech, que cobre a Espanha; e o ParlEE. Na região, cadastros sem texto, discursos presidenciais e corpora nacionais.

> [es] Qué es una fila
<!-- metodologia.1.titulo -->
O que é uma linha

> [es] La unidad es el turno de palabra, tal como lo marca el propio Diario. Cada turno es una fila.
<!-- metodologia.1.p1 -->
A unidade é o turno de palavra, tal como o próprio Diário o marca. Cada turno de palavra é uma linha.

> [es] Lleva la designación del orador exactamente como se imprimió, el texto íntegro, la sesión y su posición en ella. Si el orador pudo identificarse, lleva además su identificador en el padrón, con nombre, sexo, partido y distrito. Son {{columnas.n}} columnas, las mismas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.1.p2 -->
Traz a designação do orador exatamente como foi impressa, o texto integral, a sessão e sua posição nela. Se o orador pôde ser identificado, traz também seu identificador no cadastro, com nome, sexo, partido e distrito. São {{columnas.n}} colunas, as mesmas nas {{corpus.n|letra}} câmaras.

> [es] El texto no está resumido ni lematizado. El orden se conserva. Y el orden es información.
<!-- metodologia.1.p3 -->
O texto não está resumido nem lematizado. A ordem se conserva. E a ordem é informação.

> [es] El Diario no es la sesión: es lo que cada cámara publicó de ella. La mediana va de {{turno.mediana_min.n}} palabras por turno en {{turno.mediana_min.pais}} a {{turno.mediana_max.n}} en {{turno.mediana_max.pais}}. Esa distancia mide cómo transcribe cada cámara, no cuánto se debate.
<!-- metodologia.1.p4 -->
O Diário não é a sessão: é o que cada câmara publicou dela. A mediana por turno de palavra vai de {{turno.mediana_min.n}} palavras ({{turno.mediana_min.pais}}) a {{turno.mediana_max.n}} ({{turno.mediana_max.pais}}). Essa distância mede como cada câmara transcreve, não quanto se debate.

> [es] Pruébelo. Descargue El Salvador, el archivo más pequeño ({{pais.sv.csv}}; cubre de {{pais.sv.inicio}} a {{pais.sv.fin}}), y ábralo en el explorador. [Descargar los datos] · [Abrir el explorador]
<!-- metodologia.1.pruebelo -->
Experimente. Baixe El Salvador, o menor arquivo ({{pais.sv.csv}}; cobre de {{pais.sv.inicio}} a {{pais.sv.fin}}), e abra-o no explorador. [Baixar os dados] · [Abrir o explorador]

> [es] De {{corpus.n|letra}} tradiciones tipográficas a una tabla
<!-- metodologia.2.titulo -->
De {{corpus.n|letra}} tradições tipográficas a uma tabela

> [es] Cada cámara imprime a su manera quién toma la palabra: «El señor APELLIDO:» en una, «O SR. NOME (partido - estado) –» en otra. Cinco pasos las llevan a una sola tabla.
<!-- metodologia.2.p1 -->
Cada câmara imprime a seu modo quem toma a palavra: “El señor APELLIDO:” em uma, “O SR. NOME (partido - estado) –” em outra. Cinco passos as levam a uma só tabela.

> [es] **De la fuente al texto fiel.** PDF digital, página escaneada, HTML, XML o Word: primero se extrae el texto sin tocar nada. Después se limpian cabeceras, folios y palabras cortadas.
<!-- metodologia.2.paso1 -->
**Da fonte ao texto fiel.** PDF digital, página escaneada, HTML, XML ou Word: primeiro se extrai o texto sem tocar em nada. Depois se limpam cabeçalhos, números de página e palavras cortadas.

> [es] **Del texto a los turnos.** Cada marcador de orador se localiza con las fórmulas de esa cámara y de esa época. Un marcador sin reconocer entierra un turno dentro del anterior, y ningún recuento lo ve. Por eso uno solo detiene el etiquetado de esa sesión.
<!-- metodologia.2.paso2 -->
**Do texto aos turnos de palavra.** Cada marcador de orador é localizado com as fórmulas dessa câmara e dessa época. Um marcador não reconhecido enterra um turno de palavra dentro do anterior, e nenhuma contagem o vê. Por isso um só interrompe a etiquetagem dessa sessão.

> [es] **De los oradores a los diputados.** Cada designación impresa se coteja con el padrón: {{padron.personas}} personas en {{padron.tramos}} tramos de mandato, en las {{corpus.n|letra}} cámaras.
<!-- metodologia.2.paso3 -->
**Dos oradores aos deputados.** Cada designação impressa é conferida com o cadastro: {{padron.personas}} pessoas em {{padron.tramos}} períodos de mandato, nas {{corpus.n|letra}} câmaras.

> [es] **Del padrón al esquema común.** La fila recibe partido, distrito y sexo según el tramo que cubre su fecha.
<!-- metodologia.2.paso4 -->
**Do cadastro ao esquema comum.** A linha recebe partido, distrito e sexo conforme o período de mandato que cobre sua data.

> [es] **Del esquema al depósito.** Cada país se publica con {{paquete.ficheros}} archivos —datos, padrón y documentación—, generados por un solo programa, nunca a mano.
<!-- metodologia.2.paso5 -->
**Do esquema ao depósito.** Cada país é publicado com {{paquete.ficheros}} arquivos — dados, cadastro e documentação —, gerados por um só programa, nunca à mão.

> [es] Las filas las produce código determinista. El modelo de lenguaje escribió ese código y reconoció las páginas escaneadas más antiguas.
<!-- metodologia.2.p2 -->
As linhas são produzidas por código determinístico. O modelo de linguagem escreveu esse código e reconheceu as páginas escaneadas mais antigas.

> [es] Pruébelo. En la ficha de su país, vea de qué fuente y de qué formato salió su texto. [Ver los países]
<!-- metodologia.2.pruebelo -->
Experimente. Na ficha do seu país, veja de que fonte e de que formato saiu o texto. [Ver os países]

> [es] Habla y no habla
<!-- metodologia.3.titulo -->
Fala e não fala

> [es] Nada se borra del Diario.
<!-- metodologia.3.p1 -->
Nada se apaga do Diário.

> [es] La carátula, el sumario y el pase de lista se conservan en su lugar, como primera fila de la sesión: {{prolegomena.C}} filas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.3.p2 -->
A capa, o sumário e a chamada se conservam em seu lugar, como primeira linha da sessão: {{prolegomena.C}} linhas nas {{corpus.n|letra}} câmaras.

> [es] Llevan la marca `dm_speech = 0`. También la llevan los recuentos de votación nominal, la narración y los documentos leídos, donde el propio Diario demuestra que no son habla: {{nohabla.C}} filas en total.
<!-- metodologia.3.p3 -->
Levam a marca `dm_speech = 0`. Também a levam as contagens de votação nominal, a narração e os documentos lidos, onde o próprio Diário demonstra que não são fala: {{nohabla.C}} linhas no total.

> [es] La marca es asimétrica, a propósito. Un `0` se pone solo donde está probado. Un `1` no significa «habla verificada»: significa «no está demostrado que no sea habla».
<!-- metodologia.3.p4 -->
A marca é assimétrica, de propósito. Um `0` só se põe onde está provado. Um `1` não significa “fala verificada”: significa “não está demonstrado que não seja fala”.

> [es] La consecuencia se declara. En Argentina, Uruguay, México, Costa Rica, Ecuador, República Dominicana y Guatemala, parte de lo leído en voz alta sigue dentro del turno de quien lo lee. Allí, el recuento de palabras de quien preside queda inflado.
<!-- metodologia.3.p5 -->
A consequência é declarada. Argentina, Uruguai, México, Costa Rica, Equador, República Dominicana e Guatemala: nessas câmaras, parte do que foi lido em voz alta continua dentro do turno de palavra de quem lê. Ali, a contagem de palavras de quem preside fica inflada.

> [es] Filtrar le corresponde a usted. Decidir por usted, no.
<!-- metodologia.3.p6 -->
Filtrar cabe a você. Decidir por você, não.

> [es] Pruébelo. En el explorador, la primera entrada de cada sesión es «Encabezado y sumario de la sesión». Ahí está el pase de lista. [Abrir el explorador]
<!-- metodologia.3.pruebelo -->
Experimente. No explorador, a primeira entrada de cada sessão é “Encabezado y sumario de la sesión” (Cabeçalho e sumário da sessão). Aí está a chamada. [Abrir o explorador]

> [es] Quién habla
<!-- metodologia.4.titulo -->
Quem fala

> [es] El {{vinc.bruta}} de los turnos de habla lleva un diputado identificado: {{vinculados.L}} de {{habla.L}}. Es la vinculación bruta.
<!-- metodologia.4.p1 -->
Dos turnos de fala, {{vinc.bruta}} têm um deputado identificado: {{vinculados.L}} de {{habla.L}}. É a vinculação bruta.

> [es] La efectiva es el {{vinc.efectiva}}. Descuenta del denominador dos clases de turnos, y solo dos. Los de quien no puede ocupar escaño: ministros, secretarios administrativos, relatores, invitados. Y los que el Diario hace inatribuibles, como «Varios señores diputados».
<!-- metodologia.4.p2 -->
A efetiva é de {{vinc.efectiva}}. Desconta do denominador duas classes de turnos de fala, e só duas. Os de quem não pode ocupar cadeira: ministros, secretários administrativos, relatores (funcionários que leem), convidados. E os que o Diário torna inatribuíveis, como “Varios señores diputados”.

> [es] No descuenta a quien preside sin nombre. Quien preside es diputado: si su identidad no se recuperó, es laguna nuestra.
<!-- metodologia.4.p3 -->
Não desconta quem preside sem nome. Quem preside é deputado: se sua identidade não foi recuperada, é falha nossa.

> [es] Quedan sin diputado {{novinc.n}} turnos de habla. {{novinc.noescano.n}}, el {{novinc.noescano.pct}}, son de quien no puede ocupar escaño. {{novinc.colectiva.n}}, el {{novinc.colectiva.pct}}, voz colectiva o anónima. {{novinc.laguna.n}}, el {{novinc.laguna.pct}}, laguna nuestra.
<!-- metodologia.4.p4 -->
Ficam sem deputado {{novinc.n}} turnos de fala. Desses, {{novinc.noescano.n}} ({{novinc.noescano.pct}}) são de quem não pode ocupar cadeira. Outros {{novinc.colectiva.n}} ({{novinc.colectiva.pct}}), voz coletiva ou anônima. E {{novinc.laguna.n}} ({{novinc.laguna.pct}}), falha nossa.

> [es] La distancia entre las dos tasas es propiedad del Diario, no del procesamiento. En Panamá, el {{pais.pa.noescano}} de los turnos de habla es de quien no puede ocupar escaño, sobre todo la Secretaría, que lee; en Uruguay, el {{pais.uy.noescano}}. Por eso la comparación entre países parte de la tabla por cámara, no de la cifra agrupada.
<!-- metodologia.4.p5 -->
A distância entre as duas taxas é propriedade do Diário, não do processamento. No Panamá, {{pais.pa.noescano}} dos turnos de fala são de quem não pode ocupar cadeira, sobretudo a Secretaria, que lê; no Uruguai, {{pais.uy.noescano}}. Por isso a comparação entre países parte da tabela por câmara, não do número agrupado.

> [es] Pruébelo. Busque su cámara: las dos tasas, y lo que descuenta cada una. [Descargar los datos de la figura]
<!-- metodologia.4.pruebelo -->
Experimente. Procure sua câmara: as duas taxas, e o que cada uma desconta. [Baixar os dados da figura]

> [es] El sexo es una variable derivada
<!-- metodologia.5.titulo -->
O sexo é uma variável derivada

> [es] Ningún Diario declara el sexo de quien habla. La columna `sex` se deriva en el padrón: de un registro oficial donde existe; si no, del nombre de pila o del tratamiento. Cada valor lleva su procedencia en `sex_source`.
<!-- metodologia.5.p1 -->
Nenhum Diário declara o sexo de quem fala. A coluna `sex` é derivada no cadastro: de um registro oficial onde ele existe; se não, do primeiro nome ou da forma de tratamento. Cada valor traz sua procedência em `sex_source`.

> [es] Su exactitud es del {{sexo.exactitud}}, medida contra la revisión humana exhaustiva de {{sexo.padrones_auditados|letra}} padrones completos, {{NUEVO:sexo.base_filas}} filas. En hombres, el {{sexo.exactitud_h}}; en mujeres, el {{sexo.exactitud_m}}. El error es {{sexo.razon_error.n}} veces más probable en mujeres. La cifra caracteriza el procedimiento, no cada corpus.
<!-- metodologia.5.p2 -->
Sua exatidão é de {{sexo.exactitud}}, medida contra a revisão humana exaustiva de {{sexo.padrones_auditados|letra}} cadastros completos, {{NUEVO:sexo.base_filas}} linhas. Em homens, {{sexo.exactitud_h}}; em mulheres, {{sexo.exactitud_m}}. O erro é {{sexo.razon_error.n}} vezes mais provável em mulheres. O número caracteriza o procedimento, não cada corpus.

> [es] Los otros {{sexo.padrones_sin_auditar|letra}} —Argentina, Brasil, Chile, Ecuador y Perú— no están auditados, y en las figuras se dibujan distinto. No son iguales entre sí. Brasil, Chile y Perú toman el sexo de un registro oficial; en Ecuador, todo valor se infiere del nombre o del tratamiento. Quien necesite precisión restringe `sex_source` a `manual`, `official_registry` y `given_name`; eso deja fuera a Ecuador entero.
<!-- metodologia.5.p3 -->
Os outros {{sexo.padrones_sin_auditar|letra}} — Argentina, Brasil, Chile, Equador e Peru — não estão auditados, e nas figuras são desenhados de forma diferente. Não são iguais entre si. O Brasil, o Chile e o Peru tomam o sexo de um registro oficial; no Equador, todo valor é inferido do nome ou da forma de tratamento. Quem necessita de precisão restringe `sex_source` a `manual`, `official_registry` e `given_name`; isso deixa de fora o Equador inteiro.

> [es] La auditoría de género
<!-- metodologia.5.subtitulo -->
A auditoria de gênero

> [es] Los defectos de extracción no son neutrales. Cuando un patrón falla, quien desaparece es, con más frecuencia, una mujer.
<!-- metodologia.5.p4 -->
Os defeitos de extração não são neutros. Quando um padrão falha, quem desaparece é, com mais frequência, uma mulher.

> [es] En Costa Rica, el patrón reconocía «PRESIDENTE» y no «PRESIDENTA». El verificador había heredado el mismo léxico e informaba cero residuos. Los totales cuadraban. Los turnos de las mujeres que presidían quedaban dentro del turno anterior.
<!-- metodologia.5.p5 -->
Na Costa Rica, o padrão reconhecia “PRESIDENTE” e não “PRESIDENTA”. O verificador tinha herdado o mesmo léxico e informava zero resíduos. Os totais batiam. Os turnos de palavra das mulheres que presidiam ficavam dentro do anterior.

> [es] En Brasil se pudo medir al corregir el patrón, antes de volver a procesar el corpus. Las mujeres eran el {{NUEVO:genero.br.pct_turnos}} de los turnos y el {{NUEVO:genero.br.pct_recuperados}} de los turnos recuperados.
<!-- metodologia.5.p6 -->
No Brasil, foi possível medir ao corrigir o padrão, antes de processar o corpus de novo. As mulheres eram {{NUEVO:genero.br.pct_turnos}} dos turnos de fala e {{NUEVO:genero.br.pct_recuperados}} dos turnos de fala recuperados.

> [es] El patrón se escribe primero en masculino. Las formas femeninas son más variadas y se rompen más con el salto de línea. El genérico «Presidente» esconde a quien preside. De ahí la regla: «PRESIDENTA» no puede ser un hombre; «PRESIDENTE» no dice nada.
<!-- metodologia.5.p7 -->
O padrão se escreve primeiro no masculino. As formas femininas são mais variadas e se partem mais na quebra de linha. O genérico “Presidente” esconde quem preside. Daí a regra: “PRESIDENTA” não pode ser um homem; “PRESIDENTE” não diz nada.

> [es] No todo fue en la misma dirección, y se dice: en Argentina, una corrección movió filas de mujeres a hombres. La afirmación que queda no depende de la dirección: cada corrección acercó el corpus al Diario.
<!-- metodologia.5.p8 -->
Nem tudo foi na mesma direção, e isso se diz: na Argentina, uma correção moveu linhas de mulheres para homens. A afirmação que fica não depende da direção: cada correção aproximou o corpus do Diário.

> [es] Pruébelo. Descargue los datos de la figura de apertura: palabras, turnos y oradoras, por cámara y década. Sin formulario. [Descargar los datos de la figura]
<!-- metodologia.5.pruebelo -->
Experimente. Baixe os dados da figura de abertura: palavras, turnos de fala e oradoras, por câmara e década. Sem formulário. [Baixar os dados da figura]

> [es] El reconocimiento óptico: lo que falló
<!-- metodologia.6.titulo -->
O reconhecimento óptico (OCR): o que falhou

> [es] Ecuador entero es papel escaneado. También los años más antiguos de Uruguay, Panamá y Paraguay, y {{NUEVO:ocr.do.sesiones|letra}} sesiones dominicanas.
<!-- metodologia.6.p1 -->
O Equador inteiro é papel escaneado. Também os anos mais antigos do Uruguai, do Panamá e do Paraguai, e {{NUEVO:ocr.do.sesiones|letra}} sessões dominicanas.

> [es] Parte de esas páginas las leyó un modelo de visión, que a veces escribió texto propio dentro del Diario: su instrucción, comentarios y, lo peor, líneas en español traducidas al inglés.
<!-- metodologia.6.p2 -->
Um modelo de visão leu parte dessas páginas e às vezes escreveu texto próprio dentro do Diário: sua instrução, comentários e, o pior, linhas em espanhol traduzidas para o inglês.

> [es] Se retiraron {{ocr.fragmentos_retirados}} fragmentos en Uruguay, Ecuador, Panamá y República Dominicana. La clase está acotada, no cerrada: el modelo improvisa una redacción distinta cada vez, y lo que tradujo no se repara borrando.
<!-- metodologia.6.p3 -->
Foram retirados {{ocr.fragmentos_retirados}} trechos no Uruguai, no Equador, no Panamá e na República Dominicana. A classe está delimitada, não fechada: o modelo improvisa uma redação diferente a cada vez, e o que ele traduziu não se conserta apagando.

> [es] Donde el escaneado cortó el margen, no se reconstruyó nada. Lo que no está en el píxel no se inventa.
<!-- metodologia.6.p4 -->
Onde o escaneamento cortou a margem, nada foi reconstruído. O que não está no pixel não se inventa.

> [es] Pruébelo. Lea las limitaciones declaradas de Ecuador, el único corpus escaneado de principio a fin. [Ver la ficha de Ecuador]
<!-- metodologia.6.pruebelo -->
Experimente. Leia as limitações declaradas do Equador, o único corpus escaneado do começo ao fim. [Ver a ficha: Equador]

> [es] Validación y revisión humana
<!-- metodologia.7.titulo -->
Validação e revisão humana

> [es] Aquí hay dos cosas distintas, y cada una lleva su rótulo entero.
<!-- metodologia.7.p1 -->
Aqui há duas coisas distintas, e cada uma leva seu rótulo inteiro.

> [es] Fuga del filtro PASS/FLAG: {{validacion.fuga.pct}} {{validacion.fuga.ic}}.
<!-- metodologia.7.rotulo -->
Vazamento do filtro PASS/FLAG: {{validacion.fuga.pct}} {{validacion.fuga.ic}}.

> [es] La muestra: {{NUEVO:validacion.filas_pais}} filas al azar en cada uno de {{NUEVO:validacion.paises|letra}} países. Un filtro determinista separa las filas trivialmente correctas —PASS— del resto —FLAG—, que pasa a revisión humana. La fuga es lo que el filtro aprueba y no debía: {{NUEVO:validacion.fuga.n}} de {{NUEVO:validacion.fuga.den}} filas aprobadas y releídas a mano.
<!-- metodologia.7.p2 -->
A amostra: {{NUEVO:validacion.filas_pais}} linhas ao acaso em cada um de {{NUEVO:validacion.paises|letra}} países. Um filtro determinístico separa as linhas trivialmente corretas — PASS — do resto — FLAG —, que passa à revisão humana. O vazamento é o que o filtro aprova e não devia: {{NUEVO:validacion.fuga.n}} de {{NUEVO:validacion.fuga.den}} linhas aprovadas e relidas à mão.

> [es] Se ejecutó el {{NUEVO:validacion.fecha|fecha_larga}}, antes de volver a procesar el corpus del que sale la edición publicada, y sin Ecuador. No es la tasa de error del archivo que usted descarga. No sostiene la frase «los {{corpus.n|letra}} validados».
<!-- metodologia.7.p3 -->
Foi executada em {{NUEVO:validacion.fecha|fecha_larga}}, antes de se processar de novo o corpus do qual sai a edição publicada, e sem o Equador. Não é a taxa de erro do arquivo que você baixa. Não sustenta a frase “os {{corpus.n|letra}} validados”.

> [es] Lo segundo: leímos los {{corpus.n|letra}} archivos fila a fila, antes y después de volver a procesarlos. Esa lectura encontró lo que ningún control había visto: cabeceras y folios incrustados en mitad de las frases, marcadores de orador partidos una palabra por línea.
<!-- metodologia.7.p4 -->
A segunda: lemos os {{corpus.n|letra}} arquivos linha por linha, antes e depois de processá-los de novo. Essa leitura encontrou o que nenhum controle tinha visto: cabeçalhos e números de página incrustados no meio das frases, marcadores de orador partidos em uma palavra por linha de texto.

> [es] «Revisado» no significa «sin defectos conocidos». Los conocidos están medidos y declarados, país por país.
<!-- metodologia.7.p5 -->
“Revisado” não significa “sem defeitos conhecidos”. Os conhecidos estão medidos e declarados, país por país.

> [es] Pruébelo. Abra las limitaciones conocidas de su cámara. [Ver los países]
<!-- metodologia.7.pruebelo -->
Experimente. Abra as limitações conhecidas da sua câmara. [Ver os países]

> [es] Lo que el corpus no afirma, y cómo comparar
<!-- metodologia.8.titulo -->
O que o corpus não afirma, e como comparar

> [es] Esta edición entrega la evidencia material: lo dicho, estructurado, atribuido y medido. No trae tema, tono, posición ideológica ni voto.
<!-- metodologia.8.p1 -->
Esta edição entrega a evidência material: o que foi dito, estruturado, atribuído e medido. Não traz tema, tom, posição ideológica nem voto.

> [es] No afirma que un `dm_speech = 1` sea habla verificada, ni que quien preside esté identificado en cada fila, ni que las décadas escaneadas estén libres de errores.
<!-- metodologia.8.p2 -->
Não afirma que um `dm_speech = 1` seja fala verificada, nem que quem preside esteja identificado em cada linha, nem que as décadas escaneadas estejam livres de erros.

> [es] La columna `legislature` no es comparable entre países: es lo que imprime cada Diario, sea un período constitucional, un año o un semestre. Las claves comparables son `id_session` y la fecha.
<!-- metodologia.8.p3 -->
A coluna `legislature` não é comparável entre países: é o que cada Diário imprime, seja um período constitucional, um ano ou um semestre. As chaves comparáveis são `id_session` e a data.

> [es] Cómo comparar: tasas dentro de un país, contra sí mismo, en el tiempo. Nunca volúmenes entre países. Y el denominador, a la vista.
<!-- metodologia.8.p4 -->
Como comparar: taxas dentro de um país, contra si mesmo, no tempo. Nunca volumes entre países. E o denominador, à vista.

> [es] La cobertura es un censo de lo que cada cámara publicó, con los huecos nombrados: {{rejilla.llenas}} de {{rejilla.total}} celdas de cámara y año entre {{rejilla.desde}} y {{rejilla.hasta}}. De {{universo.n}} países faltan {{ausentes.n|letra}}, y no al azar.
<!-- metodologia.8.p5 -->
A cobertura é um censo do que cada câmara publicou, com as lacunas nomeadas: {{rejilla.llenas}} de {{rejilla.total}} células de câmara e ano entre {{rejilla.desde}} e {{rejilla.hasta}}. De {{universo.n}} países faltam {{ausentes.n|letra}}, e não ao acaso.

> [es] Pruébelo. Lea el diccionario de datos: dice, columna por columna, qué es comparable y qué no. [Leer el diccionario]
<!-- metodologia.8.pruebelo -->
Experimente. Leia o dicionário de dados: ele diz, coluna por coluna, o que é comparável e o que não é. [Ler o dicionário]

> [es] Ediciones, identificadores y reproducibilidad
<!-- metodologia.9.titulo -->
Edições, identificadores e reprodutibilidade

> [es] {{dois.n_v2|letra}} de los {{dois.n|letra}} conjuntos van por la edición {{NUEVO:dois.version_mayoritaria}}; {{NUEVO:dois.rezagados}}.
<!-- metodologia.9.p1 -->
Dos {{dois.n|letra}} conjuntos, {{dois.n_v2|letra}} estão na edição {{NUEVO:dois.version_mayoritaria}}; {{NUEVO:dois.rezagados}}.

> [es] Los identificadores `id_session` e `id_int` son estables dentro de una edición, no entre ediciones. Se derivan de la posición, y añadir una sesión desplaza los que vienen después. Cite la edición.
<!-- metodologia.9.p2 -->
Os identificadores `id_session` e `id_int` são estáveis dentro de uma edição, não entre edições. Derivam da posição, e acrescentar uma sessão desloca os que vêm depois. Cite a edição.

> [es] Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- metodologia.9.p3 -->
Para citar uma passagem, informe a data e o número da sessão e confira-a no Diário oficial da câmara. Edição derivada para pesquisa: diante de qualquer divergência, vale o Diário da sua câmara.

> [es] La reproducibilidad tiene una frontera, y está medida. Desde el texto etiquetado en adelante —vinculación, fusión, esquema y documentación— todo es determinista. Se comprobó ejecutando dos veces las {{corpus.n|letra}} cadenas y comparando los archivos.
<!-- metodologia.9.p4 -->
A reprodutibilidade tem uma fronteira, e ela está medida. Do texto etiquetado em diante — vinculação, fusão, esquema e documentação — tudo é determinístico. Isso foi comprovado executando duas vezes as {{corpus.n|letra}} cadeias de processamento e comparando os arquivos.

> [es] Lo anterior —reconocimiento óptico, extracción, limpieza, etiquetado— queda fuera de esa garantía. Las páginas reconocidas y las decisiones humanas de vinculación se guardan congeladas, como entrada. Quien cite la reproducibilidad de este corpus debe decir desde dónde.
<!-- metodologia.9.p5 -->
O que vem antes — reconhecimento óptico, extração, limpeza, etiquetagem — fica fora dessa garantia. As páginas reconhecidas e as decisões humanas de vinculação ficam guardadas, congeladas, como entrada. Quem citar a reprodutibilidade deste corpus deve dizer a partir de onde.

> [es] Pruébelo. Elija su país y copie su cita, con su edición y su DOI. [Ver los países]
<!-- metodologia.9.pruebelo -->
Experimente. Escolha seu país e copie a citação dele, com a edição e o DOI. [Ver os países]

> [es] La documentación completa
<!-- metodologia.10.titulo -->
A documentação completa

> [es] Esta página resume. Lo completo:
<!-- metodologia.10.p1 -->
Esta página resume. Na íntegra:

> [es] La monografía, en inglés: fuentes, padrones, proceso, problemas etapa por etapa, auditoría de género y tablas por país. [Leer la monografía (en inglés)]
<!-- metodologia.10.monografia -->
A monografia, em inglês: fontes, cadastros, processo, problemas etapa por etapa, auditoria de gênero e tabelas por país. [Ler a monografia (em inglês)]

> [es] El registro de decisiones, en español: lo que se hizo, la alternativa descartada, la evidencia medida y la consecuencia. Una decisión superada se marca y se enlaza; no se borra. [Abrir el registro de decisiones]
<!-- metodologia.10.registro -->
O registro de decisões, em espanhol: o que foi feito, a alternativa descartada, a evidência medida e a consequência. Uma decisão superada é marcada e recebe um link; não se apaga. [Abrir o registro de decisões]

> [es] Con cada país, en inglés, español y portugués: el LÉAME, el diccionario de datos, las limitaciones conocidas y el informe del proceso. [Ver los países]
<!-- metodologia.10.pais -->
Com cada país, em inglês, espanhol e português: o LEIA-ME, o dicionário de dados, as limitações conhecidas e o relatório de processamento. [Ver os países]

> [es] Pruébelo. Empiece por el diccionario de datos, aquí mismo, y siga con el archivo de El Salvador. [Leer el diccionario] · [Descargar los datos]
<!-- metodologia.10.pruebelo -->
Experimente. Comece pelo dicionário de dados, aqui mesmo, e siga com o arquivo de El Salvador. [Ler o dicionário] · [Baixar os dados]


## Usar los datos

> [es] Usar los datos · ParlaIbero
<!-- usar.meta.titulo -->
Usar os dados · ParlaIbero

> [es] Por dónde empezar, qué hay en cada descarga, las columnas, el padrón, dos fragmentos de código y cómo citar los {{corpus.n}} corpus de ParlaIbero.
<!-- usar.meta.descripcion -->
Por onde começar, o que há em cada download, as colunas, o cadastro, dois trechos de código e como citar os {{corpus.n}} corpora do ParlaIbero.

> [es] Usar los datos
<!-- usar.titulo -->
Usar os dados

> [es] Por dónde empezar
<!-- usar.empezar.titulo -->
Por onde começar

> [es] No es una matriz de encuesta. Elija por lo que ya sabe hacer.
<!-- usar.empezar.entrada -->
Não é uma matriz de pesquisa de opinião. Escolha pelo que já sabe fazer.

> [es] Sin programar
<!-- usar.empezar.s1.titulo -->
Sem programar

> [es] Abra El Salvador en el explorador. Busque en el texto completo; filtre por fecha, partido, legislatura o diputado; exporte con su cita. Es el país de prueba: {{pais.sv.csv}}, y cubre solo de {{pais.sv.inicio}} a {{pais.sv.fin}}. O llévese los datos de una figura, en CSV y Excel, sin formulario. ⏎  ⏎ [Abrir el explorador] [Descargar los datos de la figura]
<!-- usar.empezar.s1.texto -->
Abra El Salvador no explorador. Busque no texto completo; filtre por data, partido, legislatura ou deputado; exporte com a citação. É o país de teste: {{pais.sv.csv}}, e cobre apenas de {{pais.sv.inicio}} a {{pais.sv.fin}}. Ou leve os dados de uma figura, em CSV e Excel, sem formulário.

[Abrir o explorador] [Baixar os dados da figura]

> [es] Con R o Python básico
<!-- usar.empezar.s2.titulo -->
Com R ou Python básico

> [es] El CSV de un país: de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}. Filtros, conteos, series por año. Los dos fragmentos de abajo son esto y nada más. ⏎  ⏎ [Ver los países]
<!-- usar.empezar.s2.texto -->
O CSV de um país: de {{NUEVO:csv.min}} a {{NUEVO:csv.max}}. Filtros, contagens, séries por ano. Os dois trechos abaixo são isso e nada mais.

[Ver os países]

> [es] Con métodos de texto
<!-- usar.empezar.s3.titulo -->
Com métodos de texto

> [es] El corpus completo: {{dois.n|letra}} descargas, una por país, {{NUEVO:csv.total}} en total. La base no trae tema, tono, posición ni voto: aquí las variables hay que construirlas. Es donde hay que aprender, y es aprendible. ⏎  ⏎ [Ver los {{dois.n|letra}} DOI]
<!-- usar.empezar.s3.texto -->
O corpus completo: {{dois.n|letra}} downloads, um por país, {{NUEVO:csv.total}} no total. A base não traz tema, tom, posição nem voto: aqui as variáveis precisam ser construídas. É onde é preciso aprender, e é possível aprender.

[Ver os {{dois.n|letra}} DOIs]

> [es] Dos grupos con la misma base pueden llegar a resultados distintos sin que ninguno se haya equivocado. No es un defecto: es lo que ocurre cuando las decisiones de análisis son suyas.
<!-- usar.empezar.cierre -->
Dois grupos com a mesma base podem chegar a resultados diferentes sem que nenhum tenha errado. Não é um defeito: é o que acontece quando as decisões de análise são suas.

> [es] El camino, paso a paso
<!-- usar.camino.titulo -->
O caminho, passo a passo

> [es] **Elija un país.** Si duda, El Salvador: es el archivo más pequeño.
<!-- usar.camino.p1 -->
**Escolha um país.** Na dúvida, El Salvador: é o menor arquivo.

> [es] **Antes del clic.** Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. Los datos de las figuras no lo piden.
<!-- usar.camino.p2 -->
**Antes do clique.** Antes de baixar, o Harvard Dataverse pedirá nome, e-mail, instituição, cargo e uso previsto. Os dados das figuras não pedem isso.

> [es] **Descargue un archivo, no los {{paquete.ficheros}}.** Para el explorador basta el que termina en `_interventions.csv`. No lo abra con doble clic ni en una hoja de cálculo: puede cortar filas y textos. ⏎  ⏎ [Descargar en Dataverse]
<!-- usar.camino.p3 -->
**Baixe um arquivo, não os {{paquete.ficheros}}.** Para o explorador basta o que termina em `_interventions.csv`. Não o abra com duplo clique nem em uma planilha: pode cortar linhas e textos.

[Baixar no Dataverse]

> [es] **Ábralo en el explorador.** Pulse «Elegir archivo…» y selecciónelo. Se abre en su navegador; nada sale de su equipo.
<!-- usar.camino.p4 -->
**Abra-o no explorador.** Clique em “Elegir archivo…” (Escolher arquivo…) e selecione-o. Abre no seu navegador; nada sai do seu computador.

> [es] Pide un navegador reciente: {{NUEVO:explorador.navegadores}}. Al elegir el archivo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, cierre otras pestañas o pruebe antes con El Salvador. Hoy el explorador está solo en español y abre un país cada vez.
<!-- usar.camino.requisitos -->
Pede um navegador recente: {{NUEVO:explorador.navegadores}}. Ao escolher o arquivo, o explorador diz quanta memória é necessária. Com um computador modesto, feche outras abas ou experimente antes com El Salvador. Hoje o explorador está apenas em espanhol e abre um país por vez.

> [es] En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en {{NUEVO:explorador.construccion.sv}}. Brasil, el mayor de los medidos, en {{NUEVO:explorador.construccion.br}}. En su equipo puede tardar más.
<!-- usar.camino.tiempos -->
Em nossos testes, feitos fora do navegador com o mesmo motor, El Salvador ficou pronto em {{NUEVO:explorador.construccion.sv}}. O Brasil, o mais pesado dos medidos, em {{NUEVO:explorador.construccion.br}}. No seu computador pode demorar mais.

> [es] Qué hay en cada descarga
<!-- usar.paquete.titulo -->
O que há em cada download

> [es] {{paquete.ficheros}} archivos por país. `XX` son las dos letras del país: `SV`, `BR`. Dos son los datos: `XX_interventions.csv`, con una fila por turno de palabra o bloque de no habla, y `XX_deputies.csv`, el padrón. Cuatro documentos, cada uno en inglés, español y portugués: LÉAME (`README`), diccionario de datos, limitaciones conocidas e informe del proceso. Y tres archivos para programas: cifras del corpus, metadatos y método de vinculación de cada orador. Lea las limitaciones antes de contar nada.
<!-- usar.paquete.texto -->
São {{paquete.ficheros}} arquivos por país. `XX` são as duas letras do país: `SV`, `BR`. Dois são os dados: `XX_interventions.csv`, com uma linha por turno de palavra ou bloco de não fala, e `XX_deputies.csv`, o cadastro. Quatro documentos, cada um em inglês, espanhol e português: LEIA-ME (`README`), dicionário de dados, limitações conhecidas e relatório de processamento. E três arquivos para programas: números do corpus, metadados e método de vinculação de cada orador. Leia as limitações antes de contar qualquer coisa.

> [es] Las {{columnas.n}} columnas
<!-- usar.columnas.titulo -->
As {{columnas.n}} colunas

> [es] Las mismas {{columnas.n}}, con el mismo nombre, en las {{corpus.n|letra}} cámaras. Cambia cuánto se pudo llenar cada una, y la tabla lo dice.
<!-- usar.columnas.entradilla -->
As mesmas {{columnas.n}}, com o mesmo nome, nas {{corpus.n|letra}} câmaras. Muda o quanto se pôde preencher cada uma, e a tabela o diz.

> [es] **`sex` es derivada.** No viene del Diario; la procedencia de cada valor está en `sex_source`, en el padrón. Exactitud: el {{sexo.exactitud}} sobre {{NUEVO:sexo.base_filas}} filas revisadas a mano en {{sexo.padrones_auditados|letra}} padrones, con más error en mujeres que en hombres. En los otros {{sexo.padrones_sin_auditar|letra}} no está medida.
<!-- usar.columnas.aviso.sex -->
**`sex` é derivada.** Não vem do Diário; a procedência de cada valor está em `sex_source`, no cadastro. Exatidão: {{sexo.exactitud}} sobre {{NUEVO:sexo.base_filas}} linhas revisadas à mão em {{sexo.padrones_auditados|letra}} cadastros, com mais erro em mulheres do que em homens. Nos outros {{sexo.padrones_sin_auditar|letra}} não está medida.

> [es] **`dm_speech` es asimétrica.** El `0` está demostrado. El `1` no: significa «no está demostrado que no sea habla».
<!-- usar.columnas.aviso.dm_speech -->
**`dm_speech` é assimétrica.** O `0` está demonstrado. O `1` não: significa “não está demonstrado que não seja fala”.

> [es] **`legislature` no es comparable entre países:** es el texto que imprime cada Diario. Para comparar en el tiempo, use `date`.
<!-- usar.columnas.aviso.legislature -->
**`legislature` não é comparável entre países:** é o texto que cada Diário imprime. Para comparar no tempo, use `date`.

> [es] **Los identificadores son estables dentro de una edición, no entre ediciones.** Para citar un pasaje, dé la fecha y el número de sesión, y cotéjelo con el Diario oficial. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara.
<!-- usar.columnas.aviso.ids -->
**Os identificadores são estáveis dentro de uma edição, não entre edições.** Para citar uma passagem, informe a data e o número da sessão e confira-a no Diário oficial da câmara. Edição derivada para pesquisa: diante de qualquer divergência, vale o Diário da sua câmara.

> [es] El padrón y su unión correcta
<!-- usar.padron.titulo -->
O cadastro e sua junção correta

> [es] El padrón es la lista de quienes ocuparon un escaño. Casi nunca hace falta unir nada: sexo, partido y distrito ya vienen en cada fila. No tiene una fila por persona, sino por tramo de mandato: {{padron.tramos}} tramos para {{padron.personas}} personas. Se une por `id_dep` y por legislatura o fecha, según el diccionario del país. Unir por menos multiplica filas. Léalo por nombre de columna, nunca por posición: el orden cambia de un padrón a otro.
<!-- usar.padron.texto -->
O cadastro é a lista de quem ocupou uma cadeira. Quase nunca é preciso unir nada: sexo, partido e distrito já vêm em cada linha. Não tem uma linha por pessoa, e sim por período de mandato: {{padron.tramos}} períodos para {{padron.personas}} pessoas. Une-se por `id_dep` e por legislatura ou data, conforme o dicionário do país. Unir por menos multiplica linhas. Leia-o por nome de coluna, nunca por posição: a ordem muda de um cadastro para outro.

> [es] En Brasil hay {{NUEVO:padron.br.filas}} filas para {{NUEVO:padron.br.pares}} pares de persona y legislatura: son cambios de partido, y ahí se une por fecha, entre `start_date` y `end_date`.
<!-- usar.padron.brasil -->
No Brasil há {{NUEVO:padron.br.filas}} linhas para {{NUEVO:padron.br.pares}} pares de pessoa e legislatura: são mudanças de partido, e aí se une por data, entre `start_date` e `end_date`.

> [es] Dos fragmentos
<!-- usar.codigo.titulo -->
Dois trechos

> [es] Cargar un país, filtrar el habla, contar palabras por década y sexo. Con El Salvador, ambos reproducen su serie de la figura de apertura.
<!-- usar.codigo.entradilla -->
Carregar um país, filtrar a fala, contar palavras por década e sexo. Com El Salvador, ambos reproduzem a série do país na figura de abertura.

> [es] ```r ⏎ library(readr); library(dplyr); library(stringr) ⏎  ⏎ # Solo cuatro columnas. na = character(): las celdas vacías se leen como "", no como NA. ⏎ df <- read_csv("SV_interventions.csv", ⏎                col_select = c(date, sex, dm_speech, text), ⏎                col_types  = cols(.default = col_character()), ⏎                na = character()) ⏎  ⏎ # SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en ⏎ # mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla; ⏎ # no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados ⏎ # y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera. ⏎ # Cada cámara se compara consigo misma: esto no ordena países. ⏎ df |> ⏎   filter(dm_speech == "1", sex %in% c("F", "M"), date != "") |> ⏎   mutate(decada   = paste0(str_sub(date, 1, 3), "0"), ⏎          palabras = str_count(text, "\\S+")) |> ⏎   count(decada, sex, wt = palabras, name = "palabras") |> ⏎   group_by(decada) |> ⏎   mutate(pct = round(100 * palabras / sum(palabras), 2)) |> ⏎   ungroup() |> ⏎   as.data.frame()   # un tibble redondea en pantalla; así se ven los dos decimales ⏎ ```
<!-- usar.codigo.r -->
```r
library(readr); library(dplyr); library(stringr)

# Só quatro colunas. na = character(): as células vazias são lidas como "", não como NA.
df <- read_csv("SV_interventions.csv",
               col_select = c(date, sex, dm_speech, text),
               col_types  = cols(.default = col_character()),
               na = character())

# RESSALVA. Isto mede voz, não presença. `sex` é uma variável derivada, com mais erro em
# mulheres do que em homens. dm_speech == "1" tira o que está demonstrado que não é fala;
# não demonstra que tudo o que resta o seja. O denominador são as palavras de deputados
# e deputadas com sexo conhecido: as linhas sem deputado ou sem sexo ficam de fora.
# Cada câmara é comparada consigo mesma: isto não ordena países.
df |>
  filter(dm_speech == "1", sex %in% c("F", "M"), date != "") |>
  mutate(decada   = paste0(str_sub(date, 1, 3), "0"),
         palabras = str_count(text, "\\S+")) |>
  count(decada, sex, wt = palabras, name = "palabras") |>
  group_by(decada) |>
  mutate(pct = round(100 * palabras / sum(palabras), 2)) |>
  ungroup() |>
  as.data.frame()   # um tibble arredonda na tela; assim se veem as duas casas decimais
```

> [es] ```python ⏎ import pandas as pd ⏎  ⏎ # Solo cuatro columnas. keep_default_na=False: las celdas vacías se leen como "", no como NaN. ⏎ cols = ["date", "sex", "dm_speech", "text"] ⏎ df = pd.read_csv("SV_interventions.csv", usecols=cols, dtype=str, keep_default_na=False) ⏎  ⏎ # SALVEDAD. Esto mide voz, no presencia. `sex` es una variable derivada, con más error en ⏎ # mujeres que en hombres. dm_speech == "1" quita lo que está demostrado que no es habla; ⏎ # no demuestra que todo lo que queda lo sea. El denominador son las palabras de diputados ⏎ # y diputadas con sexo conocido: las filas sin diputado o sin sexo quedan fuera. ⏎ # Cada cámara se compara consigo misma: esto no ordena países. ⏎ habla = df[(df["dm_speech"] == "1") & df["sex"].isin(["F", "M"]) & (df["date"] != "")] ⏎ habla = habla.assign(decada=habla["date"].str[:3] + "0", ⏎                      palabras=habla["text"].str.split().str.len()) ⏎  ⏎ t = habla.pivot_table(index="decada", columns="sex", values="palabras", ⏎                       aggfunc="sum", fill_value=0) ⏎ t["pct_F"] = (100 * t["F"] / (t["F"] + t["M"])).round(2) ⏎ print(t) ⏎ ```
<!-- usar.codigo.python -->
```python
import pandas as pd

# Só quatro colunas. keep_default_na=False: as células vazias são lidas como "", não como NaN.
cols = ["date", "sex", "dm_speech", "text"]
df = pd.read_csv("SV_interventions.csv", usecols=cols, dtype=str, keep_default_na=False)

# RESSALVA. Isto mede voz, não presença. `sex` é uma variável derivada, com mais erro em
# mulheres do que em homens. dm_speech == "1" tira o que está demonstrado que não é fala;
# não demonstra que tudo o que resta o seja. O denominador são as palavras de deputados
# e deputadas com sexo conhecido: as linhas sem deputado ou sem sexo ficam de fora.
# Cada câmara é comparada consigo mesma: isto não ordena países.
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
Como citar

> [es] Cite lo que usó y su edición: no todos los conjuntos van por la misma. La cita de una figura lleva edición de datos y fecha.
<!-- usar.cita.entradilla -->
Cite o que usou e a edição: nem todos os conjuntos estão na mesma. A citação de uma figura leva edição de dados e data.

> [es] [Un conjunto de datos] [La colección] [Una figura] · [Texto] [BibTeX] [RIS] · [Copiar la cita]
<!-- usar.cita.rotulos -->
[Um conjunto de dados] [A coleção] [Uma figura] · [Texto] [BibTeX] [RIS] · [Copiar a citação]

> [es] CC BY 4.0: puede usar, adaptar y redistribuir, si cita la fuente.
<!-- usar.cita.licencia -->
CC BY 4.0: pode usar, adaptar e redistribuir, desde que cite a fonte.

> [es] Contacto y erratas
<!-- usar.contacto.titulo -->
Contato e erros

> [es] Si encuentra un error, díganos dónde: país, fecha, número de sesión y lo que dice el Diario oficial. Si no sabe por dónde empezar, escriba también. {{NUEVO:contacto}} ⏎  ⏎ [Avisar de una errata] [Escribirnos]
<!-- usar.contacto.texto -->
Se encontrar um erro, diga-nos onde: país, data, número da sessão e o que diz o Diário oficial da câmara. Se não sabe por onde começar, escreva também. {{NUEVO:contacto}}

[Informar um erro] [Escrever para nós]


## Para parlamentos y organismos

> [es] Para parlamentos y organismos · ParlaIbero
<!-- instituciones.meta.titulo -->
Para parlamentos e organismos · ParlaIbero

> [es] Dos caminos sin programar: buscar en el pleno de su cámara, o llevarse una tabla de indicadores de voz con su cita.
<!-- instituciones.meta.descripcion -->
Dois caminhos sem programar: buscar no plenário da sua câmara, ou levar uma tabela de indicadores de voz com sua citação.

> [es] Para parlamentos y organismos
<!-- instituciones.titulo -->
Para parlamentos e organismos

> [es] Dos caminos. Ninguno exige programar.
<!-- instituciones.entradilla -->
Dois caminhos. Nenhum exige programar.

> [es] La biblioteca o el servicio de investigación de un congreso
<!-- instituciones.parlamento.rotulo -->
A biblioteca ou o serviço de pesquisa de um congresso

> [es] «¿Qué se dijo aquí sobre esto, quién lo dijo y de qué partido o bancada?»
<!-- instituciones.parlamento.pregunta -->
“O que se disse aqui sobre isso, quem disse e de que partido ou bancada?”

> [es] Si su Diario está en un PDF por sesión, responder cuesta una tarde. Aquí está en una tabla: el pleno de su cámara, texto completo, desde que empieza su serie. Y, con el mismo formato, el de las otras cámaras, una por una.
<!-- instituciones.parlamento.entrada -->
Se o seu Diário está em um PDF por sessão, responder custa uma tarde. Aqui está em uma tabela: o plenário da sua câmara, texto completo, desde o início da sua série. E, com o mesmo formato, o das outras câmaras, uma por uma.

> [es] Tres pasos, sin programar
<!-- instituciones.parlamento.pasos.titulo -->
Três passos, sem programar

> [es] Elija su cámara. Antes de descargar, Harvard Dataverse le pedirá nombre, correo, institución, cargo y uso previsto. De los {{paquete.ficheros}} archivos necesita uno: el que termina en `_interventions.csv`.
<!-- instituciones.parlamento.paso1 -->
Escolha sua câmara. Antes de baixar, o Harvard Dataverse pedirá nome, e-mail, instituição, cargo e uso previsto. Dos {{paquete.ficheros}} arquivos, basta um: o que termina em `_interventions.csv`.

> [es] No lo abra con doble clic. Vaya al explorador, pulse «Elegir archivo…» y selecciónelo. Al elegirlo, el explorador le dice cuánta memoria necesita. Con un equipo modesto, pruebe antes con El Salvador ({{pais.sv.csv}}). [Abrir el explorador]
<!-- instituciones.parlamento.paso2 -->
Não o abra com duplo clique. Vá ao explorador, clique em “Elegir archivo…” (Escolher arquivo…) e selecione-o. Ao escolhê-lo, o explorador diz quanta memória é necessária. Com um computador modesto, experimente antes com El Salvador ({{pais.sv.csv}}). [Abrir o explorador]

> [es] Busque una palabra o una frase; filtre por fecha, partido, legislatura y diputado; exporte el resultado con su cita.
<!-- instituciones.parlamento.paso3 -->
Busque uma palavra ou uma frase; filtre por data, partido, legislatura e deputado; exporte o resultado com sua citação.

> [es] Nada sale de su equipo: el archivo se abre en su navegador, no en un servidor.
<!-- instituciones.parlamento.garantia -->
Nada sai do seu computador: o arquivo abre no seu navegador, não em um servidor.

> [es] Lo que no es
<!-- instituciones.parlamento.noes.titulo -->
O que não é

> [es] Ni registro oficial ni sustituto del Diario. Edición derivada para investigación: ante cualquier discrepancia, vale el Diario de su cámara. Antes de citar un pasaje, localícelo allí por fecha y número de sesión.
<!-- instituciones.parlamento.noes -->
Nem registro oficial nem substituto do Diário. Edição derivada para pesquisa: diante de qualquer divergência, vale o Diário da sua câmara. Antes de citar uma passagem, localize-a ali por data e número da sessão.

> [es] No cubre comisiones ni Senado, no trae las votaciones como dato y no llega al año en curso. Su ficha dice dónde termina la serie y qué años faltan. [Ver los países]
<!-- instituciones.parlamento.nocubre -->
Não cobre comissões nem Senado, não traz as votações como dado e não chega ao ano em curso. A ficha da sua câmara diz onde termina a série e quais anos faltam. [Ver os países]

> [es] El organismo internacional
<!-- instituciones.organismo.rotulo -->
O organismo internacional

> [es] «Tenemos los escaños por sexo. ¿Cuánto de lo que se dice en el pleno lo dicen mujeres?»
<!-- instituciones.organismo.pregunta -->
“Temos as cadeiras por sexo. Quanto do que se diz no plenário é dito por mulheres?”

> [es] Lo que se lleva, sin descargar el corpus
<!-- instituciones.organismo.sellleva.titulo -->
O que se leva, sem baixar o corpus

> [es] Una tabla de indicadores por cámara y década, en CSV y Excel, sin formulario. Cada valor trae su n y su denominador, en palabras. Cada década dice cuántas cámaras hay: de {{decada.n_corpus.1970s|letra}} en la primera a {{decada.n_corpus.2020s|letra}} en la última. El LÉAME dice qué mide cada columna. [Descargar la tabla] [Descargar la imagen]
<!-- instituciones.organismo.sellleva -->
Uma tabela de indicadores por câmara e década, em CSV e Excel, sem formulário. Cada valor traz seu n e seu denominador, em palavras. Cada década diz quantas câmaras há: de {{decada.n_corpus.1970s|letra}} na primeira a {{decada.n_corpus.2020s|letra}} na última. O LEIA-ME diz o que mede cada coluna. [Baixar a tabela] [Baixar a imagem]

> [es] Cómo leerla
<!-- instituciones.organismo.leer.titulo -->
Como ler a tabela

> [es] Mide voz, no presencia: léala junto a su serie de escaños. No es un indicador oficial ni ordena países. El sexo lo asignamos nosotros, con más error en mujeres que en hombres. La tabla marca las {{sexo.padrones_sin_auditar|letra}} cámaras cuya lista de diputados no se revisó a mano.
<!-- instituciones.organismo.leer -->
Mede voz, não presença: leia-a junto com a sua série de cadeiras. Não é um indicador oficial nem ordena países. O sexo é atribuído por nós, com mais erro em mulheres do que em homens. A tabela marca as {{sexo.padrones_sin_auditar|letra}} câmaras cuja lista de deputados não foi revisada à mão.

> [es] Cómo citar una figura
<!-- instituciones.organismo.citar.titulo -->
Como citar uma figura

> [es] Con autoría, año, edición y fecha. Cada figura trae su cita lista:
<!-- instituciones.organismo.citar -->
Com autoria, ano, edição e data. Cada figura traz sua citação pronta:

> [es] {{NUEVO:cita.autoria}}. «{{fig.titulo}}». ParlaIbero, datos de figura, edición del {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Consultado el {{fig.fecha_consulta}}.
<!-- instituciones.organismo.citar.modelo -->
{{NUEVO:cita.autoria}}. “{{fig.titulo}}”. ParlaIbero, dados de figura, edição de {{NUEVO:edicion_datos|fecha_larga}}. Instituto de Iberoamérica, Universidad de Salamanca. {{fig.url}}. Acesso em {{fig.fecha_consulta}}.

> [es] Quién lo hace
<!-- instituciones.cierre.titulo -->
Quem faz

> [es] El Instituto de Iberoamérica de la Universidad de Salamanca, con los coautores de cada ficha.
<!-- instituciones.cierre.quien -->
O Instituto de Iberoamérica da Universidade de Salamanca, com os coautores de cada ficha.

> [es] Licencia CC BY 4.0: reutilice datos, tablas y figuras citando la fuente.
<!-- instituciones.cierre.licencia -->
Licença CC BY 4.0: reutilize dados, tabelas e figuras citando a fonte.

> [es] Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número. Los identificadores son estables dentro de una edición, no entre ediciones.
<!-- instituciones.cierre.estabilidad -->
Cada país tem seu DOI no Harvard Dataverse. Uma edição publicada não muda: o que é novo sai com outro número. Os identificadores são estáveis dentro de uma edição, não entre edições.

> [es] ¿No sabe por dónde empezar? [Escribirnos]
<!-- instituciones.cierre.contacto -->
Não sabe por onde começar? [Escrever para nós]


## Sesiones que el lector reconoce, sin nombres (directiva del 2026-09-21)

> [es] La Cámara admite el proceso de destitución de la presidenta de la República.
<!-- eventos.br-2016-04-17 -->
A Câmara aprova a admissibilidade do impeachment da presidente da República.

> [es] El Congreso cesa al presidente de la República.
<!-- eventos.ec-1997-02-06 -->
O Congresso destitui o presidente da República.

> [es] El Congreso cesa al presidente de la República.
<!-- eventos.ec-2005-04-20 -->
O Congresso destitui o presidente da República.

> [es] El Congreso declara la vacancia de la Presidencia de la República.
<!-- eventos.pe-2020-11-09 -->
O Congresso declara a vacância da Presidência da República.

> [es] Asamblea Legislativa tras la renuncia del presidente de la Nación.
<!-- eventos.ar-2001-12-21 -->
Assembleia Legislativa após a renúncia do presidente da Nação.

> [es] La sesión de investidura interrumpida por el asalto al Congreso.
<!-- eventos.es-1981-02-23 -->
A sessão de investidura interrompida pela invasão do Congresso.

> [es] Juicio político al presidente de la República: cae dentro de un hueco declarado.
<!-- eventos.py-2012-06-21 -->
Julgamento político do presidente da República: cai dentro de uma lacuna declarada.

> [es] Destitución del presidente de la República: cae dentro de un hueco declarado.
<!-- eventos.py-2012-06-22 -->
Destituição do presidente da República: cai dentro de uma lacuna declarada.

---

> **Añadido el 2026-09-21.** Las dos secciones que siguen (80 claves) se tradujeron después del resto, cuando el investigador aprobó la página
> «Explorador» y decidió los rótulos. Traducción + revisor independiente + contraste por retrotraducción ciega. Mismo régimen que lo demás:
> revisión por máquina, a corregir a posteriori si algo suena raro.

## Explorador

> [es] El explorador · ParlaIbero
<!-- explorador.meta.titulo -->
O explorador · ParlaIbero

> [es] Busque, lea y cite lo que se dijo en una cámara, y siga un debate de principio a fin. Sin programar; nada sale de su equipo.
<!-- explorador.meta.descripcion -->
Busque, leia e cite o que se disse em uma câmara, e acompanhe um debate do começo ao fim. Sem programar; nada sai do seu computador.

> [es] [Explorador]
<!-- comun.nav.explorador -->
[Explorador]

> [es] Busque, lea y cite lo que se dijo. Sin programar.
<!-- explorador.titulo -->
Busque, leia e cite o que se disse. Sem programar.

> [es] El explorador es una aplicación que se abre en su navegador. Usted elige el archivo de un país y la base se construye en su equipo. No hay cuenta, ni instalación, ni servidor.
<!-- explorador.entrada -->
O explorador é um aplicativo que abre no seu navegador. Você escolhe o arquivo de um país e a base é construída no seu computador. Não há conta, nem instalação, nem servidor.

> [es] [Abrir el explorador]
<!-- explorador.abrir -->
[Abrir o explorador]

> [es] Primero, encontrar
<!-- explorador.encontrar.titulo -->
Primeiro, encontrar

> [es] ¿Qué se dijo sobre esto?
<!-- explorador.p1.pregunta -->
O que se disse sobre isso?

> [es] Busca en el texto completo de todas las intervenciones: una palabra, una frase exacta entre comillas, o varias combinadas. No distingue tildes ni mayúsculas.
<!-- explorador.p1.texto -->
Busca no texto completo de todas as intervenções: uma palavra, uma frase exata entre aspas, ou várias combinadas. Não distingue acentos nem maiúsculas.

> [es] ¿Quién, cuándo, de qué grupo?
<!-- explorador.p2.pregunta -->
Quem, quando, de que grupo?

> [es] Filtra por fecha, legislatura, tipo de sesión, partido, sexo, distrito y longitud de la intervención. «Solo lo que se habla» deja fuera las carátulas, los sumarios y las listas de votación.
<!-- explorador.p2.texto -->
Filtra por data, legislatura, tipo de sessão, partido, sexo, distrito e extensão da intervenção. “Solo lo que se habla” (Só o que se fala) deixa de fora as capas, os sumários e as listas de votação.

> [es] ¿En qué momento del debate?
<!-- explorador.p3.pregunta -->
Em que momento do debate?

> [es] Cada intervención se lee como una página del Diario, con las que la preceden y la siguen, o con la sesión entera. Los aplausos, los rumores y las llamadas al orden que anotó el Diario van señalados.
<!-- explorador.p3.texto -->
Cada intervenção se lê como uma página do Diário, com as que a precedem e a seguem, ou com a sessão inteira. Os aplausos, os murmúrios e as chamadas à ordem que o Diário anotou vêm assinalados.

> [es] ¿Cuándo se habló de esto?
<!-- explorador.p4.pregunta -->
Quando se falou disso?

> [es] Dibuja la frecuencia de varios términos mes a mes o año a año, con los hitos históricos del país sobre el gráfico: {{NUEVO:explorador.hitos.n}} en las {{corpus.n|letra}} cámaras, cada uno con su fuente.
<!-- explorador.p4.texto -->
Desenha a frequência de vários termos mês a mês ou ano a ano, com os marcos históricos do país sobre o gráfico: {{NUEVO:explorador.hitos.n}} nas {{corpus.n|letra}} câmaras, cada um com sua fonte.

> [es] Después, enfocar: las bibliotecas
<!-- explorador.bibliotecas.titulo -->
Depois, focar: as bibliotecas

> [es] Un corpus entero no es una pregunta. Una biblioteca sí.
<!-- explorador.bibliotecas.entrada -->
Um corpus inteiro não é uma pergunta. Uma biblioteca, sim.

> [es] Una biblioteca es su propia selección de intervenciones sobre un asunto: todo lo que se dijo en el pleno sobre una ley, una crisis o una política. La reúne con una búsqueda, la afina leyendo, y la guarda con sus notas y sus etiquetas.
<!-- explorador.bibliotecas.que_es -->
Uma biblioteca é a sua própria seleção de intervenções sobre um assunto: tudo o que se disse no plenário sobre uma lei, uma crise ou uma política. Você a reúne com uma busca, refina lendo e guarda com suas notas e suas etiquetas.

> [es] Sirve para dos trabajos. Para quien investiga, es el recorte de su tema: el material sobre el que medir. Para quien sigue la agenda de una cámara, es el expediente de un debate: quién intervino, cuándo, y en qué términos.
<!-- explorador.bibliotecas.para_que -->
Serve para dois trabalhos. Para quem pesquisa, é o recorte do seu tema: o material sobre o qual medir. Para quem acompanha a agenda de uma câmara, é o dossiê de um debate: quem interveio, quando e em que termos.

> [es] Desde ese momento, la biblioteca es la unidad de análisis. Se busca dentro de ella, se lee de corrido, y sobre ella se calculan el vocabulario que la distingue del resto del corpus, los temas que contiene y quién menciona a quién.
<!-- explorador.bibliotecas.unidad -->
A partir desse momento, a biblioteca é a unidade de análise. Busca-se dentro dela, lê-se em sequência, e sobre ela se calculam o vocabulário que a distingue do restante do corpus, os temas que contém e quem menciona quem.

> [es] Se guarda en su navegador, aparte de la base: actualizar los datos no borra su trabajo. Para compartirla con un colega o tener una copia, se exporta a un archivo.
<!-- explorador.bibliotecas.guardar -->
Fica guardada no seu navegador, à parte da base: atualizar os dados não apaga seu trabalho. Para compartilhá-la com um colega ou ter uma cópia, exporta-se para um arquivo.

> [es] Coocurrencias: de qué se habla dentro de un debate
<!-- explorador.coocurrencias.titulo -->
“Coocurrencias” (Coocorrências): do que se fala dentro de um debate

> [es] ¿Qué palabras aparecen juntas? El explorador toma el vocabulario característico de la biblioteca y calcula qué términos se repiten en las mismas intervenciones. Donde esa red se agrupa, propone un tema.
<!-- explorador.coocurrencias.que_es -->
Que palavras aparecem juntas? O explorador toma o vocabulário característico da biblioteca e calcula quais termos se repetem nas mesmas intervenções. Onde essa rede se agrupa, propõe um tema.

> [es] Cada tema trae sus términos, las intervenciones donde aparece y la parte del texto que ocupa. Son candidatos: usted los revisa, quita los términos que sobran y, si uno merece estudio propio, lo convierte en una biblioteca nueva.
<!-- explorador.coocurrencias.temas -->
Cada tema traz seus termos, as intervenções em que aparece e a parte do texto que ocupa. São candidatos: você os revisa, tira os termos que sobram e, se um merecer estudo próprio, transforma-o em uma biblioteca nova.

> [es] Dentro de cada tema, un eje sitúa a cada partido según cuánto usa ese vocabulario, por encima o por debajo de la media. Es un eje de temas, no un eje ideológico.
<!-- explorador.coocurrencias.partidos -->
Dentro de cada tema, um eixo situa cada partido conforme o quanto usa esse vocabulário, acima ou abaixo da média. É um eixo de temas, não um eixo ideológico.

> [es] El método está a la vista, con sus parámetros, y es reproducible: los mismos parámetros dan el mismo resultado. La red de términos no se dibuja en pantalla: se exporta, para dibujarla y analizarla fuera.
<!-- explorador.coocurrencias.metodo -->
O método está à vista, com seus parâmetros, e é reprodutível: os mesmos parâmetros dão o mesmo resultado. A rede de termos não é desenhada na tela: é exportada, para desenhá-la e analisá-la fora.

> [es] Menciones: quién habla de quién
<!-- explorador.menciones.titulo -->
“Menciones” (Menções): quem fala de quem

> [es] En un debate, los oradores se nombran unos a otros. El explorador reconoce esas menciones y dibuja la red: quién menciona a quién, y cuánto. Se puede agrupar por partido o por los focos de conversación que la propia red forma.
<!-- explorador.menciones.que_es -->
Em um debate, os oradores mencionam uns aos outros pelo nome. O explorador reconhece essas menções e desenha a rede: quem menciona quem, e quanto. Pode-se agrupar por partido ou pelos focos de conversa que a própria rede forma.

> [es] De ahí salen varias lecturas: a quién se nombra más, quién nombra, los diálogos que se cruzan, y una tabla entre partidos que dice cuánto se menciona cada uno por cada diez mil palabras.
<!-- explorador.menciones.vistas -->
Daí saem várias leituras: quem é mais mencionado, quem menciona, os diálogos que se cruzam e uma tabela entre partidos que diz quanto se menciona cada um a cada dez mil palavras.

> [es] Dice quién habla de quién, no si lo hace a favor o en contra. Los focos no son coaliciones. Revisadas a mano, acierta {{NUEVO:explorador.menciones.precision.pct}} de las menciones que reconoce; las que se le escapan —«su señoría», «quien me ha precedido»— no están contadas.
<!-- explorador.menciones.limites -->
Diz quem fala de quem, não se o faz a favor ou contra. Os focos não são coalizões. Revisadas à mão, acerta em {{NUEVO:explorador.menciones.precision.pct}} das menções que reconhece; as que escapam — “su señoría”, “quien me ha precedido” — não estão contadas.

> [es] Y llevárselo, citado
<!-- explorador.llevar.titulo -->
E levar, com a citação

> [es] Exporta a CSV, a un documento legible, a JSON y a una lista de referencias. Todo lleva la cita del conjunto y su DOI. Hasta un pasaje copiado con el teclado se lleva su fuente.
<!-- explorador.llevar.texto -->
Exporta para CSV, para um documento legível, para JSON e para uma lista de referências. Tudo leva a citação do conjunto e seu DOI. Até uma passagem copiada com o teclado leva sua fonte.

> [es] Cómo empezar
<!-- explorador.empezar.titulo -->
Como começar

> [es] **Descargue el archivo de un país.** Para probar, El Salvador: {{pais.sv.csv}}. Los mayores llegan a {{NUEVO:csv.max}}.
<!-- explorador.empezar.paso1 -->
**Baixe o arquivo de um país.** Para experimentar, El Salvador: {{pais.sv.csv}}. Os mais pesados chegam a {{NUEVO:csv.max}}.

> [es] **Abra el explorador y arrastre el archivo.** No hace falta descomprimir ni convertir nada.
<!-- explorador.empezar.paso2 -->
**Abra o explorador e arraste o arquivo.** Não é preciso descompactar nem converter nada.

> [es] **Espere a que se construya la base.** El explorador le dice cuánta memoria necesita y cuánto falta. Si su navegador lo permite, la recuerda: la próxima vez se abre sola.
<!-- explorador.empezar.paso3 -->
**Espere a base ser construída.** O explorador diz quanta memória é necessária e quanto falta. Se o seu navegador permitir, a base fica guardada: da próxima vez, abre sozinha.

> [es] En nuestras pruebas, hechas fuera del navegador con el mismo motor, El Salvador quedó listo en {{NUEVO:explorador.construccion.sv}}. Brasil, el mayor de los medidos, en {{NUEVO:explorador.construccion.br}}. En su equipo puede tardar más.
<!-- explorador.empezar.tiempos -->
Em nossos testes, feitos fora do navegador com o mesmo motor, El Salvador ficou pronto em {{NUEVO:explorador.construccion.sv}}. O Brasil, o mais pesado dos medidos, em {{NUEVO:explorador.construccion.br}}. No seu computador pode demorar mais.

> [es] [Descargar en Dataverse] [Ver los países] [Abrir el explorador]
<!-- explorador.empezar.botones -->
[Baixar no Dataverse] [Ver os países] [Abrir o explorador]

> [es] Lo que pide, y lo que no hace
<!-- explorador.limites.titulo -->
O que pede, e o que não faz

> [es] Pide un ordenador, no un teléfono, y un navegador reciente: {{NUEVO:explorador.navegadores}}.
<!-- explorador.limites.equipo -->
Pede um computador, não um celular, e um navegador recente: {{NUEVO:explorador.navegadores}}.

> [es] No compara países en una misma pantalla. No clasifica por una lista de temas fijada de antemano ni mide el tono: cuenta palabras, no intenciones. Y busca la palabra tal como la escribe: para sus variantes, únalas.
<!-- explorador.limites.no_hace -->
Não compara países em uma mesma tela. Não classifica por uma lista de temas fixada de antemão nem mede o tom: conta palavras, não intenções. E busca a palavra tal como você a escreve: para as variantes, junte-as.

> [es] El texto sale de la extracción automática de los Diarios, y puede traer errores de reconocimiento.
<!-- explorador.limites.texto -->
O texto vem da extração automática dos Diários e pode trazer erros de reconhecimento.

> [es] Lo que se queda en su equipo
<!-- explorador.privacidad.titulo -->
O que fica no seu computador

> [es] El archivo se lee en su equipo y no se sube a ningún sitio. Sus bibliotecas y la base se guardan en su navegador, no en un servidor.
<!-- explorador.privacidad.texto -->
O arquivo é lido no seu computador e não é enviado a lugar nenhum. Suas bibliotecas e a base ficam guardadas no seu navegador, não em um servidor.

> [es] Se abre la imagen ampliada, en otra pestaña.
<!-- explorador.img.ampliar -->
Abre a imagem ampliada, em outra aba.

> [es] Las imágenes son del explorador con El Salvador y una biblioteca sobre el debate del agua.
<!-- explorador.img.ejemplo -->
As imagens são do explorador com El Salvador e uma biblioteca sobre o debate da água.

> [es] Una biblioteca abierta: su nota, sus intervenciones y las vistas que se calculan sobre ella.
<!-- explorador.img.bibliotecas.pie -->
Uma biblioteca aberta: sua nota, suas intervenções e as visualizações que se calculam sobre ela.

> [es] El resumen de la pestaña: los temas encontrados, con qué términos y conexiones, y el método.
<!-- explorador.img.coocurrencias.pie -->
O resumo da aba: os temas encontrados, com que termos e conexões, e o método.

> [es] Un tema candidato, con sus términos, y los partidos situados según cuánto usan ese vocabulario.
<!-- explorador.img.temas.pie -->
Um tema candidato, com seus termos, e os partidos situados conforme o quanto usam esse vocabulário.

> [es] La red de menciones de la biblioteca, agrupada por partido.
<!-- explorador.img.menciones.pie -->
A rede de menções da biblioteca, agrupada por partido.

> [es] Menciones entre partidos, por cada diez mil palabras.
<!-- explorador.img.partidos.pie -->
Menções entre partidos, a cada dez mil palavras.

> [es] El vocabulario que distingue a la biblioteca del resto del corpus.
<!-- explorador.img.lexico.pie -->
O vocabulário que distingue a biblioteca do restante do corpus.

> [es] La frecuencia de un término año a año, con los hitos del país numerados sobre el gráfico.
<!-- explorador.img.tendencia.pie -->
A frequência de um termo ano a ano, com os marcos do país numerados sobre o gráfico.

## Rótulos de figuras, tablas y navegación (decididos con el investigador el 2026-09-21)

> [es] palabras
<!-- comun.fig.voz.medida.palabras -->
palavras

> [es] turnos
<!-- comun.fig.voz.medida.turnos -->
turnos de fala

> [es] oradoras
<!-- comun.fig.voz.medida.oradoras -->
oradoras

> [es] {{pct}} · {{n}} de {{den}} turnos
<!-- comun.fig.voz.hover.turnos -->
{{pct}} · {{n}} de {{den}} turnos de fala

> [es] {{pct}} · {{n}} de {{den}} oradores
<!-- comun.fig.voz.hover.oradoras -->
{{pct}} · {{n}} de {{den}} oradores

> [es] De diputadas
<!-- comun.fig.voz.tabla.col.n -->
De deputadas

> [es] De diputados y diputadas con sexo conocido
<!-- comun.fig.voz.tabla.col.den -->
De deputados e deputadas com sexo conhecido

> [es] Lista de diputados revisada a mano
<!-- comun.fig.voz.leyenda.auditado -->
Lista de deputados revisada à mão

> [es] Sin revisión a mano
<!-- comun.fig.voz.leyenda.sin_auditar -->
Sem revisão à mão

> [es] Palabras
<!-- ficha.voz.col.palabras -->
Palavras

> [es] Turnos
<!-- ficha.voz.col.turnos -->
Turnos de fala

> [es] Oradoras
<!-- ficha.voz.col.oradoras -->
Oradoras

> [es] Ficha anterior
<!-- ficha.vecinas.anterior -->
Ficha anterior

> [es] Ficha siguiente
<!-- ficha.vecinas.siguiente -->
Próxima ficha

> [es] Se abre en Harvard Dataverse, en otra pestaña.
<!-- comun.enlace.dataverse.pestana -->
Abre no Harvard Dataverse, em outra aba.

> [es] Quién habla está en los datos. Aquí no se muestra.
<!-- metodologia.1.fila.sin_orador -->
Quem fala está nos dados. Aqui não se mostra.

> [es] El texto sigue: aquí va solo el comienzo.
<!-- metodologia.1.fila.truncado -->
O texto continua: aqui vai só o começo.

> [es] No puede ocupar escaño
<!-- metodologia.4.barra.noescano -->
Não pode ocupar cadeira

> [es] Voz colectiva o anónima
<!-- metodologia.4.barra.colectiva -->
Voz coletiva ou anônima

> [es] Laguna nuestra
<!-- metodologia.4.barra.laguna -->
Falha nossa

> [es] La vinculación, cámara por cámara
<!-- metodologia.4.tabla -->
A vinculação, câmara por câmara

> [es] archivo de {{pais.<iso>.csv}}
<!-- instituciones.parlamento.peso -->
arquivo de {{pais.<iso>.csv}}

> [es] Las {{corpus.n|letra}} cámaras
<!-- paises.directorio.titulo -->
As {{corpus.n|letra}} câmaras

> [es] Columna
<!-- usar.columnas.col.columna -->
Coluna

> [es] Tipo
<!-- usar.columnas.col.tipo -->
Tipo

> [es] Qué es
<!-- usar.columnas.col.definicion -->
O que é

> [es] Cuánto se pudo llenar, cámara por cámara
<!-- usar.columnas.col.disponibilidad -->
Quanto se pôde preencher, câmara por câmara

> [es] Cada celda es una cámara, en el orden de la rejilla: cuanto más llena, más completa está la columna. Una celda vacía es una columna que esa cámara no trae.
<!-- usar.columnas.col.leyenda -->
Cada célula é uma câmara, na ordem da grade: quanto mais preenchida, mais completa está a coluna. Uma célula vazia é uma coluna que essa câmara não traz.

> [es] de todas las filas
<!-- usar.columnas.base.filas -->
de todas as linhas

> [es] de los turnos de habla
<!-- usar.columnas.base.habla -->
dos turnos de fala

> [es] de los turnos vinculados a un diputado o diputada
<!-- usar.columnas.base.vinculadas -->
dos turnos de fala vinculados a um deputado ou deputada

> [es] {{camara}}: {{pct}} {{base}}
<!-- usar.columnas.celda -->
{{camara}}: {{pct}} {{base}}

> [es] Proyecto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 y por FEDER, UE.
<!-- comun.aei.texto -->
Projeto PID2022-141706NB-C22 financiado por MICIU/AEI/10.13039/501100011033 e por FEDER, UE.

## «Infraestructura», subrayada (decisión del investigador, 2026-09-21)

> [es] En las ciencias exactas, la infraestructura suele ser un laboratorio: nadie construye uno para cada experimento. En las ciencias sociales y humanas, son datos comparables: alguien los reúne y los armoniza una vez, y los demás parten de ahí.
<!-- inicio.tesis.laboratorio -->
Nas ciências exatas, a infraestrutura costuma ser um laboratório: ninguém constrói um para cada experimento. Nas ciências sociais e humanas, são dados comparáveis: alguém os reúne e os harmoniza uma vez, e os demais partem daí.

> [es] De esa familia son PELA-USAL, Latinobarómetro, ParlaMint y el Manifesto Project.
<!-- inicio.tesis.familia -->
Dessa família são o PELA-USAL, o Latinobarómetro, o ParlaMint e o Manifesto Project.

> [es] ParlaIbero es una infraestructura de datos para las ciencias sociales y humanas. PELA-USAL encuesta a parlamentarios de países de América Latina con un cuestionario estándar, adaptado a cada país. Latinobarómetro aplica un mismo estudio de opinión pública en los países de la región. ParlaMint publica, con una misma codificación, debates de parlamentos de Europa. El Manifesto Project codifica con un mismo esquema los programas electorales de los partidos. Aquí el material es lo que se dijo en el pleno: la misma fila y las mismas columnas en las {{corpus.n|letra}} cámaras.
<!-- metodologia.familia -->
O ParlaIbero é uma infraestrutura de dados para as ciências sociais e humanas. O PELA-USAL entrevista parlamentares de países da América Latina com um questionário padrão, adaptado a cada país. O Latinobarómetro aplica um mesmo estudo de opinião pública nos países da região. O ParlaMint publica, com uma mesma codificação, debates de parlamentos da Europa. O Manifesto Project codifica com um mesmo esquema os programas eleitorais dos partidos. Aqui o material é o que se disse no plenário: a mesma linha e as mesmas colunas nas {{corpus.n|letra}} câmaras.

> [es] Quien construye sobre datos ajenos necesita saber qué se mueve y qué no. Cada país tiene su DOI en Harvard Dataverse. Una edición publicada no cambia: lo nuevo sale con otro número.
<!-- metodologia.9.p0 -->
Quem constrói sobre dados alheios precisa saber o que se move e o que não. Cada país tem seu DOI no Harvard Dataverse. Uma edição publicada não muda: o que é novo sai com outro número.

> [es] Una infraestructura de datos para las ciencias sociales y humanas: las mismas {{columnas.n}} columnas en las {{corpus.n|letra}} cámaras, un DOI por país y ediciones que no cambian.
<!-- instituciones.cierre.que -->
Uma infraestrutura de dados para as ciências sociais e humanas: as mesmas {{columnas.n}} colunas nas {{corpus.n|letra}} câmaras, um DOI por país e edições que não mudam.

