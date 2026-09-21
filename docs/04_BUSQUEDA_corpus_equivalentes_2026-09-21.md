# 04 · Búsqueda de corpus equivalentes · 2026-09-21

> Sostiene la frase FECHADA de Metodología (`metodologia.novedad`): «A 21 de septiembre de 2026 no hemos localizado otro corpus de varios países de América Latina con el texto íntegro y cada orador identificado como diputado…».
> **Resultado: ningún contraejemplo.** Seis vías de búsqueda en paralelo, 169 recursos distintos anotados, 6 marcados como posible contraejemplo y verificados contra su fuente primaria. La síntesis automática se detuvo a petición del investigador; este informe se compone con los resultados ya obtenidos.
> Un contraejemplo tendría que reunir a la vez: (1) dos o más países de América Latina; (2) el texto íntegro de los debates del pleno; (3) cada intervención atribuida a un legislador identificado. **La fecha de la frase solo se cambia rehaciendo la búsqueda.**

## Lo verificado en su fuente

| recurso | ¿contraejemplo? | países de América Latina | por qué |
|---|---|---|---|
| Legislat | parcial | EN OPERACIÓN: solo Panamá (Asamblea Nacional: pleno, comisiones permanentes, subcomisiones | No desmiente la frase. De las tres condiciones solo se acerca a dos y para un único país: (1) FALLA — en operación solo Panamá; Costa Rica «próximo» y otros cinco países en «expansión activa», sin fecha ni producto visible (sitemap con lastmod 2026-07-10; Términos de 2026-07-14 que describen solo Panamá). (2) DUDOSO — ofrece transcripción sincronizada con el video, generada por |
| Parlamento.ai | parcial | Tres: Chile, Perú y Brasil (Brasil rotulado Beta en la portada y en el pie de todas las pá | No desmiente la frase. Cumple la condición 1 (tres países de América Latina) y, con reservas, la 2 (texto completo de sesiones de pleno, pero ASR de la emisión, de pago y solo desde 2024/2026). Falla la 3, que es la decisiva: ninguna intervención está atribuida a un orador; el dato es texto corrido troceado cada cinco minutos, sin campo de hablante ni enlace a padrón. Tampoco e |
| LatamGPT-Corpus-1.0 | no | 20 países y territorios, como etiqueta `country` multietiqueta asignada por clasificador ( | VEREDICTO: no es contraejemplo. Cumple solo la condición (1) (varios países de América Latina, y aun así como etiqueta temática/geográfica inferida por clasificador). Falla la (2): no es un corpus de debates del pleno sino una mezcla de preentrenamiento sin metadatos de sesión; y falla de forma concluyente la (3): el esquema de ocho campos no tiene orador ni legislador. La fras |
| The Politics of Legislative Debates | parcial | Cinco capítulos nacionales, comprobados en la lista de capítulos de Crossref (filtro isbn: | NO desmiente la frase. Es un libro comparado de análisis, no un corpus: cumple (1) varios países de América Latina y (3) vinculación orador-legislador en el diseño de cada capítulo, pero falla (2): no publica el texto íntegro de los debates, y lo que estandariza son recuentos por diputado y legislatura. Por la regla del encargo (cumple dos de tres) se marca "parcial"; además, l |

## Las seis vías y sus consultas

### region-es-pt · 32 recursos · 62 consultas

- WebSearch: corpus de discursos parlamentarios América Latina varios países texto completo diputados
- WebSearch: corpus diarios de sesiones América Latina minería de texto debates legislativos base de datos
- WebSearch: corpus de discursos parlamentares América Latina base de dados comparada
- WebSearch: base de datos de intervenciones parlamentarias América Latina comparada legisladores
- WebSearch: notas taquigráficas corpus discursos Câmara dos Deputados dataset texto como dado
- WebSearch: "discursos parlamentarios" corpus "América Latina" comparado análisis automatizado de texto congreso
- WebSearch: "Latin American Legislators Dataset" speeches text
- WebSearch: corpus parlamentario español latinoamericano varios países congresos transcripciones sesiones plenarias dataset
- WebSearch: corpus parlamentario Uruguay diarios de sesiones procesamiento de lenguaje natural UdelaR
- WebSearch: corpus debates parlamentarios Argentina versiones taquigráficas dataset diputados texto abierto
- WebSearch: corpus discursos parlamentarios Chile diario de sesiones dataset Cámara de Diputados análisis de texto
- WebSearch: corpus Diario de los Debates México Cámara de Diputados intervenciones dataset texto como datos
- WebSearch: ParlaMint América Latina parlamentos latinoamericanos corpus extensión
- WebSearch: "corpus parlamentario" iberoamericano OR hispanoamericano OR latinoamericano intervenciones diputados
- WebSearch: "discursos legislativos" América Latina "texto como datos" varios países congresos corpus comparado
- WebSearch: "legislative speeches" "Latin America" cross-national corpus dataset speaker party full text multiple countries
- WebSearch: "parliamentary" OR "legislative" speech corpus Argentina Brazil Chile Mexico Colombia dataset "full text" speeches legislators multi-country
- WebSearch: "The Politics of Legislative Debates" Latin America chapters Brazil Chile Argentina Uruguay Mexico dataset speeches
- WebSearch: Vallejo Vera legislative speeches Ecuador corpus Asamblea Nacional dataset
- WebSearch: huggingface dataset discursos congreso senado diputados intervenciones español latinoamérica
- WebSearch: "Gender, institutions, and legislative speeches" Vallejo Vera 2025
- WebSearch: "Speech targeting and constituency representation in open-list electoral systems" legislative speeches
- WebSearch: global dataset parliamentary speeches countries worldwide including Brazil Argentina Chile Mexico speaker-level new corpus 2025 2026
- WebSearch: paquete R "speech" diarios de sesiones parlamento Uruguay Nicolás Schmidt legisladores texto
- WebSearch: discursos parlamentarios Argentina Chile Uruguay análisis comparado corpus sesiones cámara de diputados "análisis cuantitativo de texto"
- WebSearch: populismo discursos legisladores América Latina análisis de texto congresos varios países corpus parlamentario
- WebSearch: "Politics of Legislative Debates" Bäck Debus Fernandes replication data dataset speeches legislators countries harvard dataverse
- WebSearch: site:scielo.org OR site:scielo.br OR site:scielo.cl discursos parlamentarios "corpus" análisis computacional congreso diputados texto
- WebSearch: site:redalyc.org debates parlamentarios "minería de texto" OR "análisis automatizado" OR "texto como datos" congreso
- WebSearch: site:dialnet.unirioja.es corpus parlamentario América Latina discursos diputados análisis cuantitativo
- WebSearch: ALACIP congreso ponencia "discursos parlamentarios" "análisis de texto" OR "text as data" América Latina comparado legislativo
- WebSearch: ALACIP 2026 ponencia corpus discursos legislativos "América Latina" procesamiento de lenguaje natural congresos diputados comparado
- WebSearch: Observatorio de Élites Parlamentarias PELA-USAL base de datos encuestas legisladores América Latina descripción
- WebSearch: discursos parlamentares Brasil Argentina Chile Uruguai análise comparada corpus pronunciamentos deputados mineração de texto
- WebSearch: speechbr pacote R discursos Câmara dos Deputados corpus texto como dado
- WebSearch: BCN Labor Parlamentaria datos abiertos participaciones parlamentarios diario de sesiones texto completo por diputado
- WebSearch: Dados Abertos Câmara dos Deputados API discursos deputado transcrição texto integral
- WebSearch: ParlEE plenary speeches data set countries covered V2 Spain Portugal sentence-level EU states
- WebSearch: Comparative Legislators Database legislatoR countries included Brazil
- WebSearch: "corpus" "debates parlamentarios" español América lingüística de corpus Argentina México Chile Perú Colombia parlamentos hispanohablantes compilación

### infraestructuras · 26 recursos · 54 consultas

- WebSearch: ParlaMint latest version list of countries 2026
- WebSearch: ParlSpeech V2 countries covered Spain Congreso de los Diputados
- WebSearch: ParlEE plenary speeches dataset countries covered version
- WebSearch: ParlLawSpeech dataset countries parliamentary speeches bills laws
- WebSearch: ParlaMint 5.0 CLARIN.SI repository handle 11356 "ParlaMint 5.0" countries ES-CT ES-GA ES-PV PT
- WebSearch: ParlaMint Latin America parliamentary corpus extension Brazil Argentina Chile Mexico
- WebSearch: ParlaCLARIN 2026 workshop LREC parliamentary corpora proceedings Latin America
- WebSearch: parliamentary speeches corpus Latin America multiple countries full text speaker legislators dataset
- WebSearch: corpus de debates parlamentarios América Latina varios países texto íntegro intervenciones diputados conjunto de datos
- WebSearch: "legislative speeches" Latin America corpus Argentina Brazil Chile Mexico Uruguay text-as-data new dataset floor speeches legislators
- WebSearch: ParlSpeech V3 OR "ParlSpeech 3" Rauh Schwalbach new release countries
- WebSearch: Harvard Dataverse parliamentary debates corpus Latin America diarios de sesiones intervenciones diputados
- WebSearch: "ParlaMint" new countries outside Europe OR "beyond Europe" corpus parliament 2025 2026
- WebSearch: ParlaMint III OR "ParlaMint 5.1" OR "ParlaMint 6" 2026 release new parliaments
- WebSearch: ParlSpeech V2 release note Congreso de los Diputados Spain 1996 2018 number of speeches
- WebSearch: ParlaMint-ES Spanish parliamentary corpus Congreso de los Diputados time span 2015 2023 speeches ParlaMint-PT Assembleia da República
- WebSearch: EUPDCorp European Parliament debates corpus speaker metadata dataset
- WebSearch: "Politics of Legislative Debates" Bäck Debus Fernandes dataset countries Latin America Argentina Brazil Chile Mexico Uruguay speeches data
- WebSearch: "Politics of Legislative Debates" dataset replication Dataverse number of speeches per legislator 33 countries Latin America chapters Argentina Uruguay Colombia
- WebSearch: Comparative Legislators Database legislatoR countries Brazil speeches text not included
- WebSearch: Hugging Face dataset parliamentary speeches Spanish Latin America congreso diputados senado transcripts multi-country speaker party
- WebSearch: "ParlaMint" OR "Parla-CLARIN" corpus Brazilian OR Brasil OR Chile OR Argentina OR Mexico parliament TEI encoding
- WebSearch: global corpus parliamentary speeches worldwide countries dataset full text speaker metadata beyond Europe 2025
- WebSearch: OPTED inventory parliamentary text corpora Meteor Latin America parliamentary speeches
- WebSearch: corpus discursos legislativos varios países América Latina texto completo legisladores partido base de datos "discursos" congreso comparado
- WebSearch: Brazilian Chamber of Deputies speeches corpus dataset full text speaker party "Câmara dos Deputados" discursos corpus NLP
- WebSearch: Argentina Chile Uruguay Mexico Peru Colombia parliamentary debates text corpus dataset Zenodo OR Dataverse OR GitHub speaker-level diputados
- WebSearch: "legislative speech" OR "parliamentary speech" cross-national dataset Latin America "text as data" several countries Congress transcripts scraped 2024 2025 2026
- WebSearch: ParlaMint-ES corpus Spanish Congreso de los Diputados period covered legislatures speakers metadata party gender "ParlaMint-ES"
- WebSearch: "Latin American" parliamentary corpus ParlaMint-style OR "ParlaMint" "Latin America" OR "Ibero-American" parliamentary debates corpus project announced
- WebSearch: "ParlaIbero" parliamentary speeches Harvard Dataverse
- WebSearch: github clarin-eric ParlaMint issue add new country corpus Brazil OR Mexico OR Argentina OR Chile OR Colombia
- WebSearch: "parliamentary" corpus "Global South" OR "Latin American" multilingual legislators speeches LREC 2026 OR ACL 2026 OR EMNLP 2025 dataset "Chamber of Deputies"
- WebSearch: Rauh Schwalbach Proksch parliamentary speech data Latin America OR Brazil OR Mexico new corpus ParlSpeech extension
- WebSearch: "discursos" OR "speeches" legislators Ecuador Asamblea Nacional corpus dataset Vallejo Vera replication text speaker
- WebSearch: Argentina Cámara de Diputados versiones taquigráficas corpus dataset discursos diputados text analysis replication data
- WebSearch: emotive rhetoric OR populism OR polarization "legislative speeches" "Latin America" comparative several countries corpus millions speeches
- WebSearch: aclanthology parliamentary debates corpus Chile OR Brazil OR Mexico OR Argentina OR Peru OR Colombia OR Uruguay "corpus" LREC OR PROPOR OR SEPLN
- WebSearch: LREC 2026 parliamentary corpus Spanish OR Portuguese "parliament" new resource speaker metadata Latin America
- WebSearch: "Congreso" OR "Cámara de Diputados" OR "Senado" debates corpus "speaker" "party" dataset Chile "Biblioteca del Congreso Nacional" text-as-data open dataset diarios de sesiones

### region-ingles · 22 recursos · 59 consultas

- WebSearch: Latin America parliamentary speech corpus
- WebSearch: legislative speeches dataset Latin America
- WebSearch: multi-country legislative debates corpus Latin America
- WebSearch: cross-national parliamentary speech Global South dataset
- WebSearch: floor speeches Latin American legislatures text-as-data dataset
- WebSearch: "legislative speeches" "Latin America" dataset multiple countries speaker-level text corpus 2025
- WebSearch: "parliamentary" corpus "Latin American" countries speeches legislators text "new dataset" arXiv
- WebSearch: ParlaMint Latin America extension Chile Argentina Brazil parliamentary corpus Parla-CLARIN
- WebSearch: "Politics of Legislative Debates" Latin America chapters Argentina Brazil Chile dataset speeches
- WebSearch: global parliamentary speech dataset 2025 countries worldwide legislators speeches full text comparative
- WebSearch: Alemán Micozzi Vallejo Vera legislative speech Argentina Chile dataset floor speeches legislators replication data
- WebSearch: "Legislative Speech in Presidential Systems" Latin America chapter Politics of Legislative Debates data countries
- WebSearch: huggingface dataset parliamentary speeches Spanish Latin America congress debates transcripts Argentina Chile Mexico Peru
- WebSearch: Legislat.ai parliamentary debates Latin America transcripts speakers data coverage countries
- WebSearch: comparative corpus congressional debates Latin America gender speech participation legislators multiple countries text analysis
- WebSearch: "Politics of Legislative Debates" Bäck Debus Fernandes dataverse dataset speeches legislators countries Latin America Brazil Chile Argentina Mexico Uruguay chapters
- WebSearch: ParlEE plenary speeches V3 countries Spain Italy dataset harvard dataverse
- WebSearch: "legislative speeches" OR "parliamentary speeches" Argentina Chile Uruguay Brazil Mexico comparative "text analysis" populism OR polarization corpus legislators multi-country
- WebSearch: dataset "parliamentary debates" "Latin America" climate OR migration OR abortion multi-country corpus speeches legislators NLP
- WebSearch: ACL Anthology corpus parliamentary proceedings Latin American Spanish OR Portuguese congress LREC ParlaCLARIN workshop Chile OR Argentina OR Brazil OR Mexico
- WebSearch: "ParlaCLARIN" OR "ParlaMint" Brazil OR Chile OR Argentina OR Mexico OR Uruguay parliamentary corpus TEI
- WebSearch: OSF preprint OR SSRN "legislative speech" "Latin American" legislatures new corpus speeches legislators 2024 OR 2025 OR 2026
- WebSearch: "LatParl" OR "LatAmParl" OR "ParlaLatam" OR "IberoParl" OR "ParlAmericas corpus" OR "ParlSpeech Latin America" parliamentary speeches corpus
- WebSearch: Uruguay "speech" R package legislative speeches Schmidt Luján Moraes diarios de sesiones dataset
- WebSearch: Brazilian Chamber of Deputies speeches corpus dataset "speechbr" OR "discursos" full text deputies party NLP
- WebSearch: Mexico Chamber of Deputies "Diario de los Debates" speeches dataset text-as-data legislators corpus
- WebSearch: Argentina Congress floor speeches dataset "versiones taquigráficas" text analysis legislators corpus 1983
- WebSearch: Sagarzazu legislative speeches Venezuela Chile dataset "National Assembly" speeches text legislators Latin America communication
- WebSearch: "legislative debates" OR "floor debates" Colombia OR Peru OR Ecuador OR "Costa Rica" speeches corpus dataset legislators full text political science new data
- WebSearch: "plenary" transcripts Latin American congresses corpus speeches "speaker" identified multilingual Spanish Portuguese dataset release 2025 OR 2026
- WebSearch: "congressional speeches" "Latin America" comparative dataset text legislators countries "speeches" scaling ideology multiple countries
- WebSearch: WorldSpeech corpus parliamentary proceedings sources list countries Chile Argentina Mexico Paraguay Guarani parliament audio transcripts
- WebSearch: Chile Chamber of Deputies speeches corpus NLP dataset "Cámara de Diputados" parliamentary debates open data linguistics corpus 1990
- WebSearch: Peru Congress debates corpus NLP dataset "Diario de los Debates" speeches congresistas text mining
- WebSearch: parliamentary speech dataset beyond Europe "Latin America" OR "Americas" OR "Global South" new corpus legislators speeches "ParlaMint" limitation European coverage
- WebSearch: "legislative speech" presidential systems Latin America data "speeches" Argentina Brazil Chile Colombia Mexico Uruguay comparative floor access dataset legislators
- WebSearch: Colombia Congress "Gaceta del Congreso" speeches corpus dataset plenary debates text analysis legislators
- WebSearch: Ecuador National Assembly legislative speeches dataset 1988-2018 Vallejo Vera Gómez Vidal interruptions corpus full text
- WebSearch: Costa Rica OR Guatemala OR Panama OR "El Salvador" OR "Dominican Republic" OR Paraguay legislative assembly plenary speeches dataset text corpus
- WebSearch: Comparative Legislators Database countries covered list Brazil Chile Argentina Mexico legislatoR package

### corpus-nacionales · 27 recursos · 90 consultas

- [WebSearch] Latin America legislative speeches corpus multiple countries full text speaker dataset
- [WebSearch] corpus discursos parlamentarios América Latina comparado varios países texto íntegro diputados dataset
- [WebSearch] Câmara dos Deputados discursos corpus dataset speeches Brazilian Chamber of Deputies text-as-data
- [WebSearch] Chilean Congress parliamentary speeches corpus dataset diputados text legislators linked
- [WebSearch] Mexican Chamber of Deputies Diario de los Debates speeches corpus dataset legislators text analysis
- [WebSearch] Argentina Cámara de Diputados versiones taquigráficas corpus dataset speeches legislators text-as-data
- [WebSearch] Colombia Congreso Gaceta del Congreso speeches corpus dataset plenary debates text analysis legislators
- [WebSearch] Peru Congreso Diario de los Debates corpus dataset legislative speeches text-as-data congresistas
- [WebSearch] "legislative speeches" Latin America comparative dataset Argentina Chile Uruguay Brazil Mexico floor speeches text corpus
- [WebSearch] Uruguay Parlamento diario de sesiones corpus dataset intervenciones legisladores procesamiento lenguaje natural
- [WebSearch] Ecuador Asamblea Nacional legislative speeches dataset Vallejo Vera text corpus
- [WebSearch] Costa Rica Asamblea Legislativa actas plenario corpus dataset discursos diputados análisis de texto
- [WebSearch] "parliamentary" OR "legislative" speeches dataset "Latin American" countries "full text" speeches linked legislators new dataset 2025 OR 2026
- [WebSearch] ParlaMint new countries 2025 2026 Latin America Brazil Chile Argentina ParlaMint extension
- [WebSearch] "The Politics of Legislative Debates" Oxford chapters Brazil Chile Uruguay Argentina Mexico legislative speech data
- [WebSearch] "International organizations in national parliamentary debates" dataset countries corpus speeches
- [WebSearch] "Politics of Legislative Debates" Bäck Debus Fernandes replication data dataset speeches count legislators dataverse
- [WebSearch] "Politics of Legislative Debates" dataset download legislator-level "number of speeches" data available website Fernandes
- [WebSearch] Magar Mexico Cámara de Diputados speeches data github "diario de los debates" legislative debate dataset
- [WebSearch] Alemán Micozzi Chile Argentina legislative speeches corpus "speeches" Chamber of Deputies dataset replication text Argentina Chile comparative
- [WebSearch] text-as-data legislative debates several Latin American countries corpus "Argentina" "Chile" "Colombia" "Peru" parliamentary speeches migration OR populism OR polarization
- [WebSearch] polarización discursos legislativos América Latina "texto como datos" varios países congresos corpus intervenciones
- [WebSearch] multilingual parliamentary debates dataset worldwide countries beyond Europe includes Brazil Argentina Mexico Chile speeches corpus 2024 2025
- [WebSearch] BrPoliCorpus Brazilian Political Corpus UNICAMP Câmara dos Deputados speeches
- [WebSearch] "corpus parlamentario" latinoamericano OR iberoamericano diarios de sesiones varios países intervenciones legisladores
- [WebSearch] "parliamentary" corpus "Latin America" "speeches" "Argentina" "Uruguay" "Chile" dataset gender floor speeches women legislators text multi-country
- [WebSearch] ParlSpeech V3 OR "ParlSpeech" new countries added Latin America OR Brazil OR Mexico
- [WebSearch] Congreso de Chile "Biblioteca del Congreso Nacional" diarios de sesiones datos abiertos intervenciones parlamentarios linked open data corpus
- [WebSearch] "base de datos" discursos legislativos América Latina intervenciones en el pleno congresos varios países texto completo legisladores 2025
- [WebSearch] "banco de dados" discursos parlamentares América Latina comparado vários países texto integral deputados corpus
- [WebSearch] Sagarzazu OR Timoneda OR "Vallejo Vera" legislative speeches corpus Spanish-language multiple Latin American legislatures transformer model training data
- [WebSearch] LLM dataset Latin American congress transcripts Spanish Portuguese parliamentary debates pretraining corpus "Latin America" legislatures
- [WebSearch · NO EJECUTADA: presupuesto de 200 búsquedas de la sesión agotado] corpus discursos legislativos Bolivia OR Venezuela OR Paraguay OR Honduras OR Guatemala asamblea legislativa intervencione
- [WebSearch · NO EJECUTADA: presupuesto agotado] Venezuela National Assembly speeches dataset Sagarzazu legislative speech text analysis Asamblea Nacional diario de debates corpus
- [WebSearch · NO EJECUTADA: presupuesto agotado] Izumi Medeiros "legislative speechmaking" Brazil text-as-data party positions Senate speeches dataset
- [WebSearch · NO EJECUTADA: presupuesto agotado] Argentina Congress speeches dataset "Diario de Sesiones" text corpus 1983 legislators linked party research "legislative speeches" Argentina Chamber Dep
- [OpenAlex works?search=] parliamentary speeches corpus Latin America
- [OpenAlex works?search=] legislative speech dataset Latin America text
- [OpenAlex works?search=] legislative debates corpus Brazil Chamber of Deputies speeches
- [OpenAlex works?search=] corpus parlamentario español América Latina

### repositorios · 36 recursos · 118 consultas

- [WebSearch] dataset parliamentary speeches Latin America multiple countries full text speaker legislator corpus
- [WebSearch] "legislative speeches" "Latin America" cross-national corpus text-as-data dataset Argentina Chile Mexico Brazil
- [WebSearch] corpus debates parlamentarios América Latina varios países texto completo oradores diputados base de datos
- [WebSearch] Hugging Face dataset parliamentary speeches Spanish Latin America congreso diputados discursos
- [WebSearch] Kaggle dataset discursos diputados congreso sesiones Argentina OR Chile OR Colombia OR Perú OR México
- [WebSearch] GitHub corpus discursos parlamentarios América Latina scraping diarios de sesiones varios países congresos
- [WebSearch] "parliamentary" OR "legislative" speeches dataset Latin America site:osf.io OR site:figshare.com OR site:data.mendeley.com
- [WebSearch] ParlaMint Latin America extension corpus Argentina OR Brazil OR Chile OR Mexico parliamentary corpus TEI
- [WebSearch · NO EJECUTADA: presupuesto de la sesión agotado, 200/200] "Latin American" parliamentary debates corpus new dataset 2025 OR 2026 speeches legislators linked party multilingual Spanish Port
- [WebSearch · NO EJECUTADA: presupuesto agotado] "floor speeches" Latin American legislatures comparative dataset text analysis Chile Argentina Uruguay Brazil Colombia Mexico Peru
- [Harvard Dataverse API /api/search type=dataset] parliamentary speeches "Latin America"
- [Harvard Dataverse API] legislative speeches "Latin America"
- [Harvard Dataverse API] legislative debates "Latin America"
- [Harvard Dataverse API] parliamentary debates corpus
- [Harvard Dataverse API] title:ParlEE
- [Harvard Dataverse API] title:"Politics of Legislative Debates"
- [Harvard Dataverse API] title:"Comparative Legislators Database"
- [Harvard Dataverse API] title:(speeches OR speech OR debates OR discursos) AND (dsDescriptionValue:(Argentina OR Brazil OR Chile OR Colombia OR Mexico OR Peru OR Uruguay OR Ecuador OR Paraguay OR Boli
- [Harvard Dataverse API] dsDescriptionValue:("legislative speeches" OR "parliamentary speeches" OR "floor speeches" OR "plenary speeches" OR "congressional speeches" OR "legislative debates" OR "parlia
- [Harvard Dataverse API] dsDescriptionValue:("discursos parlamentarios" OR "debates parlamentarios" OR "diario de sesiones" OR "diarios de sesiones" OR "discursos parlamentares" OR "debates parlamentar
- [Harvard Dataverse API] (title:(presidential OR presidents OR presidentes OR presidenciales) AND title:(speeches OR discursos OR addresses OR mensajes)) AND ("Latin America" OR "Latin American" OR "Am
- [Harvard Dataverse API] title:(speech OR speeches OR speechmaking OR debate OR debates) AND title:(Chile OR Chilean OR Brazil OR Brazilian OR Mexico OR Mexican OR Colombia OR Colombian OR Peru OR Peru
- [Harvard Dataverse API] "text-as-data" AND ("Latin America" OR "Latin American") AND (legislators OR legislature OR congress OR parliament)
- [Harvard Dataverse API] "Legislative Debates" Fernandes
- [Harvard Dataverse API] authorName:(Fernandes) AND (debates OR speeches)
- [Harvard Dataverse API] "Politics of Legislative Debates"
- [Harvard Dataverse API] authorName:("Bäck" OR "Back, Hanna" OR Debus) AND (debates OR debate OR speeches)
- [Harvard Dataverse API] "Bank of discourses" (type=dataverse) y q=* subtree=hanai_critical_discourse_studies
- [Harvard Dataverse API, metadatos por DOI] 10.7910/DVN/TOH56E · L4OAKN · ZY3RV7 · VOPK0E · IETNNB · TLKVWY · GYSEGP · RPHFX0 · F2PLOZ · H2FEKM
- [Zenodo API /api/records] parliamentary speeches "Latin America"
- [Zenodo API] legislative speeches "Latin America"
- [Zenodo API] "parliamentary debates" "Latin America" corpus
- [Zenodo API] diario de sesiones corpus
- [Zenodo API] parliamentary corpus Spanish Portuguese speeches dataset
- [Zenodo API] +(parliamentary legislative congressional parlamentario legislativo) +(speeches debates discursos debates intervenciones) +(Argentina Brazil Brasil Chile Colombia Mexico México Peru Perú 
- [Zenodo API] title:(parliament* OR legislat* OR congress* OR parlament* OR senado OR diputados OR deputados) AND title:(speech* OR debate* OR discurs* OR corpus OR intervenci*) AND (Argentina OR Brazi
- [Zenodo API] +"Latin America" +(parliamentary parliament legislative legislature congress) +(speeches debates corpus transcripts) +resource_type.type:dataset
- [Zenodo API] +(discursos pronunciamentos debates intervenciones "notas taquigráficas" "diario de sesiones") +(câmara cámara senado congreso congresso asamblea parlamento) +resource_type.type:dataset
- [Zenodo API] +(speeches debates transcripts) +(Brazilian Argentine Chilean Colombian Mexican Peruvian Uruguayan Ecuadorian Bolivian Venezuelan Paraguayan) +(parliament parliamentary congress legislati
- [Zenodo API] title:(ParlaMint OR "parliamentary corpus" OR "parliamentary corpora") AND (Spanish OR Portuguese OR Brazil OR Argentina OR Chile OR Mexico)

### literatura-comparada · 26 recursos · 46 consultas

- WebSearch: Latin America legislative speeches corpus multiple countries full text parliamentary debates dataset
- WebSearch: comparative legislative speech Latin America text-as-data gender floor time multiple countries
- WebSearch: corpus debates parlamentarios América Latina varios países texto íntegro diputados dataset
- WebSearch: "legislative speech" Argentina Ecuador Mexico committee chairs Alemán Micozzi Vallejo Vera
- WebSearch: "The Politics of Legislative Debates" Bäck Debus Fernandes chapters Brazil Chile Mexico Uruguay data Dataverse
- WebSearch: populist rhetoric legislators speeches Latin America congress text analysis comparative countries dataset
- WebSearch: "Politics of Legislative Debates" replication data Harvard Dataverse speeches per legislator dataset
- WebSearch: Global Legislators Database Carnes Lupu national legislators 97 democracies occupation education what it contains
- WebSearch: multilingual parliamentary speech dataset worldwide countries including Argentina Brazil Chile Mexico Peru speeches legislators NLP corpus 2024 2025
- WebSearch: "parliamentary" corpus "Latin America" ParlaMint extension OR "ParlaMint-style" Chile OR Argentina OR Brazil OR Mexico
- WebSearch: CLARIN resource families parliamentary corpora list non-European Latin America
- WebSearch: UN General Debate Corpus Baturo Dasandi Mikhaylov what it contains speeches heads of state 1946
- WebSearch: ParlEE plenary speeches data set V2 countries covered sentence-level Sylvester Greene Ebing Spain Portugal
- WebSearch: presidential speeches Latin America dataset state of the union "mensajes presidenciales" corpus countries text-as-data Arnold Doyle Wiesehomeier
- WebSearch: cross-national analysis floor speeches Latin American legislatures women speaking time Argentina Chile Mexico Uruguay Peru text corpus
- WebSearch: "legislative speeches" "Latin America" comparative "text as data" polarization OR ideology scaling several countries congress transcripts
- WebSearch: análisis comparado discursos legislativos América Latina "diarios de sesiones" minería de texto varios países populismo OR polarización
- WebSearch: Urdinez legislative debates China Latin American congresses speeches Argentina Brazil Chile Mexico Peru text analysis dataset
- WebSearch: Rezende "ideologia de gênero" debates legislativos Brasil Uruguai discursos parlamentares fonte dos dados
- WebSearch: parliamentary debates abortion OR migration comparative Argentina Chile Uruguay Colombia legislators speeches corpus computational text analysis 2022 2023 2024
- WebSearch: Manifesto Project South America dataset MPDSSA countries Argentina Bolivia Brazil Chile party manifestos
- WebSearch: Global Populism Database Hawkins speeches chief executives 66 countries Harvard Dataverse legislators not included
- WebSearch: global dataset parliamentary speeches many countries beyond Europe full text speaker party new dataset 2025 OR 2026 "parliamentary speeches" worldwide
- WebSearch: "Latin American" "legislative speeches" OR "parliamentary speeches" new dataset corpus introducing countries legislators linked party
- WebSearch: ParlaMint new countries added 2025 2026 non-European parliament corpus ParlaMint 5.0 list of countries
- WebSearch: proyecto corpus debates parlamentarios América Latina "texto como dato" varios países diputados intervenciones base de datos abierta
- WebSearch (NO ejecutada: presupuesto de 200 búsquedas de la sesión agotado): "Politics of Legislative Debates" 2021 Oxford chapters "Legislative Debates in" Argentina OR Brazil OR Chile OR Mexico OR U
- OpenAlex works?search= (desde 2018): legislative speech Latin America | parliamentary debates corpus Latin America | legislative speeches text as data Argentina Chile Mexico | populism legislative spe
- OpenAlex filter=title_and_abstract.search: legislative speeches Latin America | parliamentary speeches Latin American | legislative debates corpus Latin America | floor speeches Latin America | discur
- OpenAlex booleanas: ("legislative speeches" OR "legislative speech" OR "parliamentary speeches" OR "floor speeches" OR "legislative debates" OR "parliamentary debates") AND ("Latin America" OR "Latin 
- Harvard Dataverse API search (type=dataset): legislative+speeches+Latin+America | parliamentary+speeches+Argentina | legislative+speeches+Chile | discursos+parlamentarios | legislative+debates+Mexico+
- Harvard Dataverse API booleanas: (speeches OR debates OR discursos OR intervenciones) AND (legislative OR parliamentary OR congress OR parlamentario OR legislativo) AND ("Latin America" OR "América La
- Zenodo API: (parliamentary OR legislative OR parlamentario OR legislativo OR parlamentar) AND (speeches OR debates OR discursos OR intervenciones) AND ("Latin America" OR "América Latina" OR "Latin Am
- DataCite API (resource-type dataset): títulos con (speeches OR debates OR discursos OR intervenciones OR "diario de sesiones") AND (parliamentary OR legislative OR parlamentarios OR ... diputados OR d
- Hugging Face datasets API search=: parlament | parliament | congreso | diputados | legislative | camara | senado | hansard
- GitHub search/repositories: legislative speeches latin america (0) | parliamentary speeches latin america (0) | discursos parlamentarios corpus (0) | diario de sesiones diputados corpus (0) | latam pa
- OSF API nodes filter[title]: legislative speech | legislative speeches | parliamentary speeches | discursos parlamentarios | debates parlamentarios | Latin American legislat | congreso discursos ; pre
- arXiv API: all:"Latin America" AND (all:parliamentary OR all:legislative) AND (all:speeches OR all:debates) -> 0 | (all:"parliamentary debates" OR all:"legislative speeches" OR all:"parliamentary spee
- Crossref query.bibliographic (desde 2018): legislative speeches Latin America comparative text analysis | parliamentary debates Latin American countries corpus speeches legislators | gender legislativ
- DOAJ API (abstract): "legislative speeches"+"Latin America" (0) | "parliamentary debates"+"Latin America" (1) | "discursos parlamentarios"+"América Latina" (2) | "debates parlamentarios"+"América Lati

## Todos los recursos anotados

| recurso | qué es | países AL | texto | orador | URL |
|---|---|---|---|---|---|
| Parlamento.ai (plataforma comercial de transcripción parlamentaria) | Plataforma comercial que convierte sesiones parlamentarias en texto 'en tiempo real' y ofrece acceso a su base (más de 50.000 horas transcritas, acceso bajo sol | Chile, Perú, Brasil (beta) | desconocido | parcial | https://parlamento.ai/p/blog/2025-09-09-acceso-directo-datos-parlamentarios |
| Legislat (legislat.ai) — 'AI-powered Legislative Intelligence for Latin America' | Producto comercial de monitoreo legislativo (SaaS con agente de IA). En vivo solo Panamá; ANUNCIA Costa Rica, Colombia, México, Chile, República Dominicana y Pe | Panamá (en vivo); anunciados Costa Rica, Colombia, México, C | desconocido | parcial | https://legislat.ai/en/ |
| The Politics of Legislative Debates (Bäck, Debus y Fernandes, eds., Oxford Unive | Libro colectivo sobre 33 democracias con capítulos nacionales de CINCO países latinoamericanos: Argentina (Ecker y Payva; Cámara de Diputados 2001-2016, datos t | Argentina, Brasil, Chile, Ecuador, México | desconocido | si | https://doi.org/10.1093/oso/9780198849063.001.0001 |
| Latin American Legislators Dataset (Weiss y Kouba, Scientific Data, 2025) | PADRÓN SIN TEXTO. Todos los legisladores electos de 18 países latinoamericanos desde 1978 o la transición hasta 2023: 31.724 observaciones de 21.807 legisladore | Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Rep | no | no | https://www.nature.com/articles/s41597-025-05882-0 |
| Legislative Turnover in Latin America (Kouba y Weiss, Latin American Politics an | Base de tasas de renovación legislativa en 204 elecciones (1985-2023) construida sobre listas codificadas a mano de legisladores. Padrón/rotación, sin texto. De | América Latina (varios; lista exacta no verificada) | no | no | https://www.cambridge.org/core/journals/latin-american-politics-and-society/article/legislative-turnover-in-latin-americ |
| PELA-USAL — Observatorio de Élites Parlamentarias de América Latina | Encuestas periódicas a legisladores de 18 países desde 1994 (más de 8.700 entrevistas): percepciones, actitudes e ideología. No incluye texto de intervenciones. | 18 países (Argentina, Bolivia, Brasil, Chile, Colombia, Cost | no | no | https://oir.org.es/pela/en/ |
| Legislatina — Observatorio del Poder Legislativo en América Latina (USAL) | Base comparada de información institucional sobre los parlamentos de la región, ordenada por país y por campos. Sin texto de debates. No se abrió la página; des | América Latina (varios) | no | no | http://americo.usal.es/oir/legislatina/base_de_datos.htm |
| Comparative Agendas Project en América Latina (Brasil, Colombia, Ecuador) | Bases de agenda codificadas por tema (leyes, proyectos, agenda del ejecutivo y del parlamento; en Ecuador, discursos presidenciales 2007-2019). Son bases resumi | Brasil, Colombia, Ecuador | no | no | https://www.scielo.br/j/rap/a/vsZ7wryXTddhSwd9MpKgRKP/?lang=pt |
| Comparative Legislators Database / legislatoR (Göbel y Munzert) | Padrón comparado de más de 67.000 legisladores de 16 países; de América Latina solo Brasil (Câmara dos Deputados, 1947-2022, 3.474 políticos). Sin texto. Descar | Brasil | no | no | https://complegdatabase.com/ |
| Legislative Voting Project (John Carey) — votaciones nominales | Datos de votaciones nominales de 21 cámaras en 19 países, más transcripciones de entrevistas. SOLO VOTOS, sin texto de debates. La página no enumera los países. | desconocido (la página no los enumera) | no | no | https://sites.dartmouth.edu/jcarey/data-archive/ |
| Discursos presidenciales de diez países (Calvo-González, Eizmendi y Reyes, 'The  | 933 discursos PRESIDENCIALES de 1819 a 2021 en diez países hispanohablantes. No son legisladores ni pleno. Descartado; ejemplo para 'discursos presidenciales'. | Argentina, Chile, Colombia, Costa Rica, República Dominicana | si | no | https://arxiv.org/abs/2209.00540 |
| Global Populism Database v2.1 (Hawkins et al., Harvard Dataverse) | 1.388 discursos de 269 jefes de gobierno de 77 países, codificados a mano por nivel de populismo; incluye los textos. Jefes del ejecutivo, no legisladores. Desc | varios (dentro de 77 países; lista no verificada) | si | no | https://doi.org/10.7910/DVN/LFTQEZ |
| Populismo em números: índice POPIN (Siqueira y Maciel, Zenodo, 2026) | Informe técnico que analiza con LLM unos 45.000 discursos PRESIDENCIALES de América Latina (2000-2024). Presidencial, no parlamentario. Descartado. | América Latina (varios; lista no verificada) | desconocido | no | https://zenodo.org/records/20174011 |
| corpusenespanol/discursos-presidenciales v1.0 (Gutiérrez y Quiroga, Zenodo, 2019 | Corpus de discursos presidenciales reunidos desde páginas oficiales, con metadatos mínimos (apellido del presidente y año). Presidencial. Descartado. | desconocido | si | no | https://doi.org/10.5281/zenodo.2547051 |
| Versiones estenográficas de eventos presidenciales de México (Chavelas, Harvard  | Transcripciones de eventos presidenciales (López Obrador 2018-2024; registro gemelo para Sheinbaum 2024-2025, doi:10.7910/DVN/TAV1EM). Un país y ejecutivo. Desc | México | si | no | https://doi.org/10.7910/DVN/R6ELWY |
| Brasil — 'Mapping the Political Discourse in the Brazilian Chamber of Deputies'  | CORPUS NACIONAL. 453.280 discursos de 1.980 diputados (enero 2003 - mayo 2025) con id del diputado, sexo, partido, estado y metadatos del discurso. Cumple texto | Brasil | si | si | https://arxiv.org/abs/2604.21897 |
| Brasil — Banco de Discursos y API de Dados Abertos de la Câmara dos Deputados; p | Fuente OFICIAL nacional: discursos del pleno desde 1946, con endpoint de discursos por diputado y texto íntegro. Sobre ella: paquete speechbr (https://github.co | Brasil | si | si | https://dadosabertos.camara.leg.br/swagger/api.html |
| Chile — Labor Parlamentaria (Biblioteca del Congreso Nacional) | Servicio OFICIAL nacional: participaciones de senadores y diputados en sala y comisión desde 1965, extraídas de los diarios de sesiones con marcado AkomaNtoso,  | Chile | si | si | https://www.bcn.cl/laborparlamentaria/inicio |
| Chile — estudios con corpus propio: Alemán, Barnes, Micozzi y Vallejo Vera (Comp | Pese al título general ('Gender, Institutions, and Legislative Speech'), analiza 28 años de discursos de la Cámara de Diputados de CHILE únicamente (más de 100. | Chile | desconocido | si | https://svallejovera.github.io/files/gender_inst.pdf |
| Ecuador — Vallejo Vera y Gómez Vidal, 'The Politics of Interruptions' (JOP, 2022 | Datos originales de discursos del Congreso/Asamblea de Ecuador 1988-2018, con legislador, sexo y partido; la réplica en Dataverse contiene ficheros de análisis  | Ecuador | desconocido | si | https://doi.org/10.7910/DVN/6IRAEM |
| Uruguay — paquete R 'speech' (Schmidt, Luján y Moraes) y base de Luján (Harvard  | El paquete convierte los diarios de sesiones uruguayos en una tabla con una fila por intervención de un legislador (nombre, texto, cámara, fecha, legislatura, i | Uruguay | si | si | https://doi.org/10.7910/DVN/ONTLTP |
| México — 'Diario de Debates de la Cámara de Diputados (México)' (Medeles y Garcí | Corpus nacional recién publicado: texto de las sesiones de Diputados 1917-2026 obtenido por minería web del sitio oficial (CSV de 2,6 GB), para historia de la c | México | si | no | https://zenodo.org/records/22261846 |
| México — carevies/intervenciones_parlamentarias_mx (Hugging Face, Carlos Villalo | 486.023 intervenciones de la Cámara de Diputados en 502 sesiones (2000-2025), segmentadas por regex en 'orador' y 'discurso'. El orador es una cadena de texto,  | México | si | parcial | https://huggingface.co/datasets/carevies/intervenciones_parlamentarias_mx |
| Colombia — Congreso Visible (Uniandes) y Sleoruiz/discursos-completos-etiquetado | Congreso Visible mantiene desde 1998 la base de actividad legislativa (perfiles, proyectos, votaciones, debates de control político); no se verificó que ofrezca | Colombia | parcial | parcial | https://congresovisible.uniandes.edu.co/ |
| Perú — Diario de los Debates (fuente oficial) e ittailup/congreso_pe_yt (Hugging | Solo la fuente oficial en PDF/web y un dataset de audio con transcripción (10.843 fragmentos de YouTube) para ASR. No se halló corpus estructurado con orador vi | Perú | parcial | no | https://www.congreso.gob.pe/diariodebates |
| Argentina — fuentes oficiales (datos.hcdn.gob.ar, versiones taquigráficas) y cor | No se halló corpus nacional publicado con orador vinculado aparte del capítulo de Ecker y Payva en el libro de OUP. Sí hay piezas parciales: Urdinez, Knoerich y | Argentina | parcial | parcial | https://doi.org/10.7910/DVN/QX8LC6 |
| Brasil y Uruguay — estudio de pronunciamientos sobre el aborto en ambas Cámaras  | SE ACERCA por ser DOS países latinoamericanos con discursos del pleno analizados por partido, pero es un subconjunto TEMÁTICO (aborto) recogido de los diarios o | Brasil, Uruguay | parcial | parcial | https://doi.org/10.51206/e-legis.v13i31.551 |
| ParlaMint 5.0 (CLARIN, 2025-07-08) | Corpus multilingües comparables de 29 países y regiones EUROPEOS, con España (más Cataluña, Galicia y País Vasco) y Portugal. Ningún parlamento latinoamericano  | ninguno | si | si | https://www.clarin.si/repository/xmlui/handle/11356/2004 |
| ParlSpeech V2 (Rauh y Schwalbach, Harvard Dataverse, 2020) | 6,3 millones de discursos con texto íntegro, orador y partido en nueve democracias: Austria, Chequia, Alemania, Dinamarca, Países Bajos, Nueva Zelanda, ESPAÑA,  | ninguno | si | parcial | https://doi.org/10.7910/DVN/L4OAKN |
| ParlEE plenary speeches (V1, V2 y V3, Harvard Dataverse) | Discursos del pleno a nivel de frase con fecha, orador, partido y tema CAP, 2009-2019, 20 parlamentos de la UE en total. PORTUGAL está en la V1 (junto a Austria | ninguno | si | parcial | https://doi.org/10.7910/DVN/ZY3RV7 |
| España — hsilvosa/congreso-debates (Hugging Face, 2026) | 41.125 intervenciones con texto literal del Congreso de los Diputados (L1-L15, 1979-2026), 1.191 oradores, más 105.000 votos nominales cruzados con escaño y gru | ninguno | si | si | https://huggingface.co/datasets/hsilvosa/congreso-debates |
| Evaluación FAIR de corpus parlamentarios (Castro Cortacero, póster CLARIAH-AND,  | Inventario indirecto útil: evalúa 49 datasets de corpus parlamentarios listados en el SSH Open Marketplace (39 evaluables) y describe una representación ampliam | ninguno | no | no | https://zenodo.org/records/18414766 |
| ParlaMint 5.0 (CLARIN ERIC / CLARIN.SI) | Versión vigente de ParlaMint: corpus comparables de debates parlamentarios codificados en TEI, con metadatos de orador (nombre, sexo, condición de diputado o mi | ninguno | si | si | https://www.clarin.si/repository/xmlui/handle/11356/2004 |
| ParlSpeech V2 (Rauh y Schwalbach, 2020) | Corpus de texto íntegro de 6,3 millones de discursos con fecha, orador, partido y, en parte, punto del orden del día. Según los metadatos de Dataverse (v1.0, 20 | ninguno | si | si | https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/L4OAKN |
| Machine-translated ParlSpeech V2 (Jabůrek, Černý, Rauh y Schwalbach, 2026) | Novedad del 2026-08-11 en el Dataverse de ParlSpeech: 3,5 millones de discursos de siete países (Austria, Chequia, Alemania, Dinamarca, Países Bajos, España, Su | ninguno | si | si | https://doi.org/10.7910/DVN/FNJCSB |
| ParlEE plenary speeches V1 a V4 (Sylvester, Greene, Ebing y otros) | Cuatro depósitos en Harvard Dataverse con discursos de pleno partidos en frases y anotados con fecha, orador, partido, clasificación UE frente a doméstico y áre | ninguno | si | si | https://dataverse.harvard.edu/dataverse/ParlEE |
| ParlLawSpeech 1.0.0 (Schwalbach, Hetzer, Proksch, Rauh y Sebők, GESIS 2025; proy | Discursos, proyectos de ley y leyes enlazados por identificador común; variables de orador, partido y texto. Ocho legislaturas: Austria 1996-2019, Croacia 2003- | ninguno | si | si | https://parllawspeech.org/data |
| MAPLE Parliamentary Datasets (Kartalis y Costa Lobo, 2021) | Corpus de texto íntegro de más de 2,5 millones de discursos de Bélgica, Alemania, Grecia, Irlanda, PORTUGAL y ESPAÑA, unos veinte años por país, con fecha, orad | ninguno | si | si | https://doi.org/10.7910/DVN/9MN0RL |
| EUPDCorp — Corpus of the EU Parliament Debates, 1999-2024 | 563.696 discursos del Parlamento Europeo en lengua original con traducción al inglés y metadatos de orador (nombre, nacionalidad, partido) e identificadores hac | ninguno | si | si | https://zenodo.org/records/15056399 |
| PlenaryEP (Zenodo, 2026-08-03) | Corpus de actualización continua de los debates del Parlamento Europeo, 109 millones de palabras, con metadatos de eurodiputado enlazados a CHES y anotación CAP | ninguno | si | si | https://zenodo.org/records/21776460 |
| Familia de recursos «Parliamentary corpora» de CLARIN | Catálogo de CLARIN con unas cuarenta entradas (Europarl, ParlaMint.ana 5.0, ParCzech, DutchParl, siParl, Talk of Norway, PTPARL, ParlSpeech V2, etc.). Todas eur | ninguno | si | parcial | https://www.clarin.eu/resource-families/parliamentary-corpora |
| Actas de ParlaCLARIN IV (LREC-COLING 2024) y ParlaCLARIN V (LREC 2026, Palma, 16 | Revisé los índices de los dos talleres. 2024 (https://aclanthology.org/volumes/2024.parlaclarin-1/): 25 trabajos; lo ibérico es ParlaMint-PT, PTPARL-V, el Parla | ninguno | desconocido | desconocido | https://aclanthology.org/volumes/2026.parlaclarin-1/ |
| OPTED WP5 — Review of available parliamentary corpora (D5.1, 2021) e inventario | Inventario de colecciones de discursos y documentos legislativos (157 fuentes de discursos). El propio documento fija el ámbito: todos los Estados miembros de l | ninguno | parcial | parcial | https://opted.eu/fileadmin/user_upload/k_opted/OPTED_Deliverable_D5.1.pdf |
| ParlaSpeech 3.0 y FalAR (corpus parlamentarios de VOZ, LREC 2026) | Hermanos orales de ParlaMint. ParlaSpeech 3.0 (https://aclanthology.org/2026.lrec-1.447/): croata, checo, polaco y serbio. FalAR: unas 5.800 horas de sesiones d | ninguno | parcial | si | https://aclanthology.org/2026.lrec-1.435/ |
| WorldSpeech (arXiv 2605.09167, mayo de 2026; Hugging Face disco-eth/WorldSpeech) | EL QUE MÁS SE ACERCA POR COBERTURA GEOGRÁFICA. Corpus de voz de 65.000 horas en 76 lenguas, en buena parte alineando grabaciones de plenos con sus actas oficial | Chile, México, Uruguay, Perú, Argentina, Puerto Rico, Colomb | parcial | no | https://arxiv.org/abs/2605.09167 |
| The Latin American Legislators Dataset (Scientific Data, 2025) | Padrón regional SIN texto: todos los legisladores electos de los 18 países latinoamericanos con elecciones competitivas desde 1978 hasta 2023, ambas cámaras; 31 | los 18 países de la región con elecciones competitivas | no | no | https://www.nature.com/articles/s41597-025-05882-0 |
| Discursos presidenciales de diez países (The Shifting Attention of Political Lea | Más de 900 discursos presidenciales de diez países hispanohablantes de América Latina a lo largo de dos siglos (el buscador detalla 933 discursos, 1819-2021: Ar | Argentina, Chile, Colombia, Costa Rica, República Dominicana | si | no | https://arxiv.org/abs/2209.00540 |
| Corpus de la Câmara dos Deputados de Brasil (Mapping the Political Discourse in  | Corpus NACIONAL: 453.280 discursos de 1.980 diputados, enero de 2003 a mayo de 2025, tomados del portal de datos abiertos de la Cámara, con id del diputado, nom | Brasil | si | si | https://arxiv.org/abs/2604.21897 |
| Corpus de la Cámara de Diputados de Chile (Alemán, Barnes, Micozzi y Vallejo Ver | Corpus NACIONAL de investigación: más de 87.000 discursos de la Cámara de Diputados de Chile, 1990-2018, clasificados en 21 áreas temáticas y atribuidos a cada  | Chile | si | si | https://svallejovera.github.io/files/gender_inst.pdf |
| speech — paquete de R para el parlamento de Uruguay (Nicolás Schmidt) | Herramienta NACIONAL que convierte las actas uruguayas en una tabla con una intervención por legislador (legislador, cámara, fecha, legislatura, texto, sexo). N | Uruguay | si | parcial | https://nicolas-schmidt.github.io/speech/ |
| Diario de Debates de la Cámara de Diputados (México), UNAM — Zenodo, 2026-09-02 | RECIENTE, tres semanas anterior a la fecha de la frase. Texto del Diario de los Debates de la Cámara de Diputados mexicana 1917-2026, recuperado del sitio ofici | México | si | desconocido | https://zenodo.org/doi/10.5281/zenodo.22261845 |
| Diario de Debates Cámara de Senadores 1875-1997 (México), UNAM — Zenodo, 2026-09 | Texto plano obtenido por OCR de más de 10.000 PDF de una colección en CD de 2004 del Senado mexicano (en torno al 75 % procesado con éxito), con errores de OCR  | México | si | no | https://zenodo.org/doi/10.5281/zenodo.22288761 |
| intervenciones_parlamentarias_mx (Hugging Face, Carlos Villalobos, 2025) | 486.023 intervenciones de la Cámara de Diputados de México en 502 sesiones, 2000-2025, partidas por expresión regular en orador y discurso. El orador es una cad | México | si | parcial | https://huggingface.co/datasets/carevies/intervenciones_parlamentarias_mx |
| Discursos da 56ª Legislatura do Senado Federal (Hugging Face, fabriciosantana) | 15.729 pronunciamientos del pleno del Senado brasileño, 2019-2023, tomados de la API pública del Senado, con texto íntegro en 15.039 casos. DESCARTADO: un solo  | Brasil | si | si | https://huggingface.co/datasets/fabriciosantana/discursos-senado-legislatura-56 |
| Spanish Congress of Deputies: Debates, Verbatim Speeches and Voting Records L1-L | Conjunto sobre ESPAÑA actualizado en agosto de 2026: 41.125 intervenciones con texto literal extraídas de 1.028 Diarios de Sesiones, de la I a la XV legislatura | ninguno | si | si | https://huggingface.co/datasets/hsilvosa/congreso-debates |
| PoliCorp / Open Political Corpora (arXiv 2509.17465) | Plataforma web de consulta de corpus políticos; hoy solo contiene 76 años de debates del Bundestag. DESCARTADO: un solo país europeo. | ninguno | si | desconocido | https://arxiv.org/abs/2509.17465 |
| Parlamento.ai | Servicio COMERCIAL de seguimiento legislativo con transcripción automática en tiempo real de salas y comisiones. Su portada lista Chile, Perú, Brasil, Estados U | Chile, Perú, Brasil | parcial | desconocido | https://parlamento.ai/ |
| Legislat (legislat.ai) | Startup COMERCIAL (SaaS y agente de IA) de inteligencia legislativa. Declara Panamá en vivo, Costa Rica a continuación y datos de más de diez países (Panamá, Co | Panamá (en vivo); declara datos de Costa Rica, Colombia, Méx | desconocido | desconocido | https://legislat.ai/en/ |
| WorldSpeech (ETH DISCO, 2026) | EL RECURSO DE PLN MÁS CERCANO, y no cumple. Corpus de voz para reconocimiento automático (arXiv 2605.09167; licencia CC BY-NC 4.0): audio alineado con la transc | Argentina, Brasil (Senado), Chile, Colombia, México, Paragua | parcial | no | https://github.com/ETH-DISCO/worldspeech |
| Latin American Legislators Dataset (LALD), Weiss y Kouba, Scientific Data 2025 | PADRÓN SIN TEXTO. 31.724 observaciones de 21.807 legisladores en 259 elecciones de 18 países, cámaras altas y bajas, con sexo, partido y circunscripción. Depósi | Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Rep | no | no | https://www.nature.com/articles/s41597-025-05882-0 |
| Arnold, Doyle y Wiesehomeier, Presidents, Policy Compromise, and Legislative Suc | DISCURSOS PRESIDENCIALES. 305 mensajes anuales de 73 presidentes de 13 países latinoamericanos, escalados con Wordfish para estimar posiciones. No son intervenc | 13 países de América Latina (lista no comprobada) | desconocido | no | https://www.journals.uchicago.edu/doi/abs/10.1086/688080 |
| Global Populism Database v2.1 (Hawkins et al.) | DISCURSOS DE JEFES DE GOBIERNO. 1.388 discursos de 269 presidentes y primeros ministros de 77 países, codificados a mano por grado de populismo. Incluye América | varios (lista no comprobada) | desconocido | no | https://doi.org/10.7910/DVN/LFTQEZ |
| Comparative Legislators Database (Göbel y Munzert) / paquete legislatoR | PADRÓN SIN TEXTO. Más de 67.000 legisladores de 16 países; de América Latina solo Brasil (Câmara dos Deputados, legislaturas 38-57, 1947-2022); incluye también  | Brasil | no | no | https://complegdatabase.com/data/ |
| ParlaMint 5.0 (CLARIN) | Corpus comparables de 29 países y regiones EUROPEOS, en su mayoría 2015 a mediados de 2022, con oradores y metadatos. Incluye ES, ES-CT, ES-GA, ES-PV y PT; ning | ninguno | si | si | https://www.clarin.si/repository/xmlui/handle/11356/2004 |
| ParlEE plenary speeches V1, V2 y V3 | Discursos de pleno a nivel de frase con orador, partido y área de política. MATIZ PARA LA FRASE: ParlEE SÍ cubre la península: V1 incluye Portugal (con Austria, | ninguno | si | parcial | https://dataverse.harvard.edu/dataverse/ParlEE |
| ParlLawSpeech (Scientific Data, 2026) | NO NOMBRADO EN LA FRASE Y CUBRE ESPAÑA. Discursos, proyectos y leyes enlazados de ocho legislaturas: Austria, Croacia, Chequia, Dinamarca, Alemania, Hungría, Es | ninguno | si | parcial | https://parllawspeech.org/data |
| speech (paquete de R) y datos de Luján, Schmidt y Moraes, Uruguay | CORPUS NACIONAL. Convierte los diarios de sesiones uruguayos en una tabla con una intervención por legislador. El artículo asociado (LAPS 2023, doi 10.1017/lap. | Uruguay | si | parcial | https://github.com/Nicolas-Schmidt/speech |
| Discursos de la Cámara de Diputados de Chile (Alemán, Micozzi, Vallejo Vera, Sag | DATOS NACIONALES DE INVESTIGACIÓN. Más de 100.000 discursos 1990-2018 clasificados por tema con XLM-RoBERTa (PRQ 2022); también IPSR 2021, el capítulo de Chile  | Chile | no | si | https://doi.org/10.1177/10659129221119200 |
| Discursos del Congreso de Ecuador 1988-2018 (Vallejo Vera y Gómez Vidal, JOP 202 | DATOS NACIONALES. Base original de discursos legislativos ecuatorianos usada para estudiar interrupciones y género. Los ficheros de réplica en Dataverse son rec | Ecuador | no | si | https://doi.org/10.7910/DVN/6IRAEM |
| Corpus de la Câmara dos Deputados de Brasil (arXiv 2604.21897, ICWSM) y afines ( | CORPUS NACIONAL. 453.280 discursos de 1.980 diputados, 2003-2025, tomados de la API de datos abiertos de la Cámara, con identificador del diputado, sexo, partid | Brasil | si | si | https://arxiv.org/abs/2604.21897 |
| intervenciones_parlamentarias_mx (Hugging Face, C. Villalobos) y réplica de Maga | CORPUS NACIONAL, no curado según su propia ficha. 486.023 intervenciones de 502 sesiones de la Cámara de Diputados de México, 2000-2025, extraídas por expresion | México | si | parcial | https://huggingface.co/datasets/carevies/intervenciones_parlamentarias_mx |
| Conjuntos de discursos del Congreso de Colombia en Hugging Face (usuario Sleorui | DATOS NACIONALES SIN DOCUMENTAR. 94.501 discursos con campos de texto, nombre, comisión, número y fecha de Gaceta y etiquetas temáticas; la ficha está vacía. El | Colombia | desconocido | parcial | https://huggingface.co/datasets/Sleoruiz/discursos-completos-etiquetados |
| Debating Trade: The Legislative Politics of Free Trade Agreements in Latin Ameri | Artículo comparado sobre los debates legislativos de los tratados de libre comercio con EE. UU. en Chile, Costa Rica y Perú. Varios países, pero acotado a UN te | Chile, Costa Rica, Perú | desconocido | desconocido | https://www.cambridge.org/core/journals/government-and-opposition/article/abs/debating-trade-the-legislative-politics-of |
| Inventarios de corpus parlamentarios: CLARIN resource family, actas de ParlaCLAR | EVIDENCIA NEGATIVA. La familia de recursos de CLARIN no recoge ningún corpus de un parlamento latinoamericano. Los cuatro volúmenes de ParlaCLARIN en ACL Anthol | ninguno | desconocido | desconocido | https://www.clarin.eu/resource-families/parliamentary-corpora |
| Corpus nacionales de España fuera de los nombrados (hsilvosa/congreso-debates; h | Recursos de UN país (España), aparecidos en 2026: conjunto en Hugging Face con 41.125 intervenciones del Congreso de los Diputados (1979-2026), 1.191 oradores y | ninguno | si | parcial | https://huggingface.co/datasets/hsilvosa/congreso-debates |
| WorldSpeech: A Multilingual Speech Corpus from Around the World (disco-eth, 2026 | Corpus para reconocimiento de voz (arXiv 2605.09167, mayo de 2026): unas 65.000 horas de audio alineado con transcripción humana en 127 variantes de lengua y re | Argentina, Brasil, Chile, Colombia, México (Congreso de la C | parcial | no | https://huggingface.co/datasets/disco-eth/WorldSpeech |
| The Latin American Legislators Dataset (Weiss y Kouba, Scientific Data, 2025) | Padrón comparado: todos los legisladores electos de 18 países de la región desde 1978 o la transición hasta 2023, cámaras únicas, bajas y altas; 31.724 observac | Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Rep | no | no | https://www.nature.com/articles/s41597-025-05882-0 |
| The Shifting Attention of Political Leaders: Evidence from Two Centuries of Pres | Conjunto de más de 900 mensajes presidenciales anuales de diez países hispanohablantes de la región, 1819-2022. Discursos PRESIDENCIALES, no debate legislativo. | Argentina, Chile, Colombia, Costa Rica, República Dominicana | si | no | https://arxiv.org/abs/2209.00540 |
| Discursos presidenciales latinoamericanos (corpusenespanol, Zenodo 10.5281/zenod | Corpus de mensajes presidenciales de Latinoamérica mantenido por Riva Quiroga y Silvia Gutiérrez, licencia CC BY 4.0. Discursos presidenciales; ningún debate pa | desconocido | si | no | https://github.com/corpusenespanol/discursos-presidenciales |
| BRASIL — Dados Abertos da Câmara dos Deputados (API oficial, /deputados/{id}/dis | Fuente oficial NACIONAL y el análogo de un solo país más completo: el punto de acceso de discursos se consulta por identificador de diputado y devuelve fecha, f | Brasil | si | si | https://dadosabertos.camara.leg.br/swagger/api.html |
| BRASIL — BrPoliCorpus (Lima-Lopes, UNICAMP, con TU Darmstadt) | Corpus abierto de documentos políticos brasileños: discursos del plenario desde octubre de 2000 hasta el 31-12-2023 (428.445 textos, unos 184 millones de tokens | Brasil | si | parcial | https://github.com/rll307/BrPoliCorpus |
| BRASIL — Mapping the Political Discourse in the Brazilian Chamber of Deputies (a | Trabajos de un solo país sobre la misma fuente oficial: el artículo usa 453.280 discursos de 1.980 diputados entre 2003 y 2025 y su página de arXiv no enlaza un | Brasil | si | si | https://arxiv.org/abs/2604.21897 |
| CHILE — Labor Parlamentaria y Datos Abiertos Enlazados (Biblioteca del Congreso  | Servicio oficial NACIONAL: procesa los Diarios de Sesiones de Cámara y Senado con un marcado basado en Akoma Ntoso y publica las participaciones de cada senador | Chile | si | si | https://www.bcn.cl/laborparlamentaria/inicio |
| CHILE — corpus de investigación de Alemán, Micozzi y Vallejo Vera (PRQ 2023; Com | Más de 100.000 discursos de la Cámara de Diputados 1990-2018, vinculados a diputado, comisión y distrito; la versión de 2025 cubre 28 años. Réplica en github.co | Chile | desconocido | si | https://doi.org/10.1177/10659129221119200 |
| MÉXICO — Diario de Debates de la Cámara de Diputados 1917-2026 (Medeles y García | Corpus NACIONAL del texto del Diario de los Debates obtenido por minería web de cronica.diputados.gob.mx, para historia de la cuantificación; ficheros basehtml. | México | si | no | https://doi.org/10.5281/zenodo.22261846 |
| MÉXICO — carevies/intervenciones_parlamentarias_mx (Hugging Face) y emagar/legde | Conjunto de un particular: 486.023 intervenciones de 502 sesiones de la Cámara de Diputados 2000-2025, partidas en orador y discurso con expresiones regulares;  | México | si | parcial | https://huggingface.co/datasets/carevies/intervenciones_parlamentarias_mx |
| URUGUAY — paquete de R speech (Schmidt, Luján y Moraes) y datos de réplica de Lu | Corpus NACIONAL con texto y orador vinculado: según la ficha de Dataverse, más de 57.000 discursos de más de 1.000 legisladores uruguayos entre 1985 y 2015, con | Uruguay | si | si | https://doi.org/10.7910/DVN/ONTLTP |
| ARGENTINA — Ecker y Soto Payva (capítulo OUP 2021); fedesaroka (GitHub, 2026); U | Solo hallé piezas nacionales y parciales: el capítulo combina texto de los discursos del pleno con rasgos de más de 1.000 diputados, 2001-2016, sin corpus públi | Argentina | parcial | parcial | https://doi.org/10.1093/oso/9780198849063.003.0007 |
| ECUADOR — datos originales de Gómez Vidal y Vallejo Vera (capítulo OUP 2021; «Th | Datos originales de discursos del Congreso y la Asamblea de Ecuador 1988-2018, vinculados al legislador (sexo, cargos, partido del presidente de la cámara). No  | Ecuador | desconocido | si | https://doi.org/10.1093/oso/9780198849063.003.0014 |
| COLOMBIA — Sleoruiz/discursos-* y sarriaalejandro/colombian_congressional_interv | Conjuntos de particulares extraídos de la Gaceta del Congreso: el de plenaria tiene 63.878 filas con text, name, comision, gaceta_numero, fecha_gaceta y etiquet | Colombia | desconocido | parcial | https://huggingface.co/datasets/Sleoruiz/discursos-plenaria-class-separated-by-idx |
| PERÚ, COSTA RICA y PANAMÁ — lo hallado | Perú: solo un conjunto de voz (audio y transcripción, 10.843 ejemplos, sin orador) y el Diario de los Debates oficial en PDF; ningún corpus de texto estructurad | Perú, Costa Rica, Panamá (cada uno por separado) | no | no | https://huggingface.co/datasets/ittailup/congreso_pe_yt |
| ParlaMint 5.0 (CLARIN ERIC, CLARIN.SI 11356/2004, 2025) | Corpus comparables de debates parlamentarios con orador, sexo, partido y rol. Su registro en CLARIN.SI lo describe como 29 países y regiones autónomas EUROPEOS, | ninguno | si | si | https://github.com/clarin-eric/ParlaMint/ |
| ParlSpeech V2 (Rauh y Schwalbach, 2020) y su traducción automática al inglés (Da | 6,3 millones de discursos de nueve democracias: Austria, Chequia, Alemania, Dinamarca, España, Países Bajos, Nueva Zelanda, Suecia y Reino Unido, 1987-2018. Nin | ninguno | si | parcial | https://osf.io/preprints/socarxiv/cd2qs |
| ParlEE plenary speeches V1-V4 (Harvard Dataverse) | Discursos a nivel de frase con fecha, orador, partido y área de política, 2009-2019, hasta 28 parlamentos europeos. La V1 incluye Portugal y la V3 (doi:10.7910/ | ninguno | si | parcial | https://doi.org/10.7910/DVN/ZY3RV7 |
| CLARIN Resource Family: Parliamentary Corpora | Catálogo de referencia de corpus parlamentarios, con unas cincuenta entradas: cobertura esencialmente europea más Nueva Zelanda y un corpus de interpretación ch | ninguno | si | desconocido | https://www.clarin.eu/resource-families/parliamentary-corpora |
| IOParlspeech (proyecto DISINTEGRATION, Universidad de Zúrich) — descartado | Más de 600.000 menciones a organizaciones internacionales en debates de seis países (Estados Unidos, Canadá, Reino Unido, Nueva Zelanda, Alemania y Austria), 19 | ninguno | parcial | parcial | https://link.springer.com/article/10.1007/s11558-024-09577-w |
| PoliCorp (arXiv 2509.17465) — descartado | Portal de búsqueda de corpus políticos que apareció en cuatro de mis búsquedas sobre Argentina, Chile, Colombia y Perú. Comprobado: solo contiene debates del pa | ninguno | si | desconocido | https://arxiv.org/abs/2509.17465 |
| ESPAÑA — hsilvosa/congreso-debates (Hugging Face, 2026) — descartado | 41.125 intervenciones del Congreso de los Diputados, legislaturas 1 a 15 (1979-2026), con texto literal, 1.191 oradores y 105.000 votos nominales cruzados con e | ninguno | si | si | https://huggingface.co/datasets/hsilvosa/congreso-debates |
| Emigrantes en las cámaras de Ecuador y Colombia (Palop-García, Comparative Migra | Único trabajo hallado que analiza intervenciones del pleno de DOS países de la región a la vez (legisladores de escaños reservados a emigrantes). Es un estudio  | Ecuador, Colombia | no | parcial | https://doi.org/10.1186/s40878-018-0101-7 |
| Latam-GPT (CENIA) — no verificable | Modelo de lenguaje regional cuyo corpus de entrenamiento PODRÍA incluir actas parlamentarias de varios países; la portada tiene secciones de recursos y de corpu | desconocido | desconocido | desconocido | https://www.latamgpt.org/ |
| LatamGPT-Corpus-1.0 (CENIA, Hugging Face) | Corpus abierto de preentrenamiento de un modelo de lenguaje, en español, portugués e inglés, con documentos de fuentes públicas, institucionales y web de muchos | varios países de América Latina (lista no verificable desde  | desconocido | desconocido | https://huggingface.co/datasets/latam-gpt/LatamGPT-Corpus-1.0 |
| The Latin American Legislators Dataset (Weiss y Kouba, Scientific Data 2025) | PADRÓN SIN TEXTO. Todos los legisladores electos de los 18 países latinoamericanos con elecciones competitivas desde 1978 o la transición hasta 2023, cámaras ún | 18 países de América Latina | no | no | https://doi.org/10.7910/DVN/AS34ME |
| Legislative Turnover in Latin America: Introducing a New Dataset (Kouba y Weiss, | PADRÓN SIN TEXTO. Tasas de rotación legislativa en 204 elecciones entre 1985 y 2023, a partir de listas codificadas a mano de todos los legisladores electos de  | América Latina (regional) | no | no | https://doi.org/10.1017/lap.2024.56 |
| Brazilian Presidential Speeches from 1985 to July 2020 (Harvard Dataverse) | DISCURSOS PRESIDENCIALES de un solo país (Brasil). Solo se leyó el título y la ficha de búsqueda. No es debate parlamentario. | Brasil | no | no | https://doi.org/10.7910/DVN/M9UU09 |
| Versiones Estenográficas de Eventos Presidenciales: López Obrador (2018-2024) y  | DISCURSOS PRESIDENCIALES de México, dos conjuntos hermanos (el segundo: doi:10.7910/DVN/TAV1EM), publicados en 2026. No es debate parlamentario. En Kaggle y Hug | México | no | no | https://doi.org/10.7910/DVN/R6ELWY |
| Argentine Senate stenographic transcripts, 2000–2024: a speaker-attributed corpu | CORPUS NACIONAL, muy reciente (trece días antes de la fecha de la frase). Versiones taquigráficas del Senado argentino de febrero de 2000 a diciembre de 2024: 5 | Argentina | si | si | https://doi.org/10.5281/zenodo.22661020 |
| Diario de Debates de la Cámara de Diputados (México) (Medeles y García Solares,  | CORPUS NACIONAL reciente. Texto del Diario de los Debates de la Cámara de Diputados 1917-2026 obtenido por minería web del sitio oficial, para lectura distante  | México | si | desconocido | https://doi.org/10.5281/zenodo.22261846 |
| Diario de Debates Cámara de Senadores 1875-1997 (México) (Medeles et al., Zenodo | CORPUS NACIONAL reciente. OCR con Tesseract de la colección en CD del Senado mexicano (más de diez mil PDF, cerca del 75 % procesado), depositado como texto pla | México | parcial | no | https://doi.org/10.5281/zenodo.22288762 |
| carevies/intervenciones_parlamentarias_mx (Villalobos, Hugging Face, 2025) | CORPUS NACIONAL. 486.023 intervenciones de 502 sesiones de la Cámara de Diputados de México, 2000-2025, partidas por expresiones regulares en orador y discurso. | México | si | parcial | https://huggingface.co/datasets/carevies/intervenciones_parlamentarias_mx |
| emagar/legdeb — réplica del capítulo de México de The Politics of Legislative De | MATERIAL DE RÉPLICA nacional. Agregados de palabras y discursos por diputado y periodo para las Legislaturas 60, 62 y 64, padrón de diputados (all-dips.csv) y 5 | México | parcial | parcial | https://github.com/emagar/legdeb |
| Mapping the Political Discourse in the Brazilian Chamber of Deputies (arXiv 2604 | CORPUS NACIONAL. Más de 450.000 discursos de la Câmara dos Deputados, 2003-2025, por unos 1.980 diputados, con partido y metadatos de cada discurso. La ficha de | Brasil | si | si | https://arxiv.org/abs/2604.21897 |
| BrPoliCorpus — Brazilian Political Corpus (Lima-Lopes, Unicamp; espejo en Kaggle | CORPUS NACIONAL. Documentos oficiales de la política brasileña: discursos de plenario desde octubre de 2000 hasta 2023 (428.445 textos, 184 millones de tokens), | Brasil | si | desconocido | https://www.kaggle.com/datasets/vicmcorrea/kaggle-brpolicorpus |
| fabriciosantana/discursos-senado-legislatura-56 (Hugging Face, 2026) | CORPUS NACIONAL. 15.729 pronunciamientos del Plenario del Senado Federal de Brasil, 56.ª Legislatura (2019-2023), de la API pública del Senado, con texto íntegr | Brasil | si | si | https://huggingface.co/datasets/fabriciosantana/discursos-senado-legislatura-56 |
| Replication Data for: Government and Opposition in Legislative Speechmaking (Izu | MATERIAL DE RÉPLICA nacional: análisis de sentimiento de unos 64.000 discursos de senadores brasileños para estimar posiciones de partidos. Un solo país; no se  | Brasil | desconocido | desconocido | https://doi.org/10.7910/DVN/HY1FFV |
| Brazilian Federal Deputies Speechs Dataset (Fernandes, OSF, 2026) | CONJUNTO NACIONAL TEMÁTICO: datos y análisis de los discursos de diputados federales brasileños 2000-2022 sobre temas identitarios (sexualidad y diversidad, gén | Brasil | parcial | desconocido | https://osf.io/rg39w/ |
| speech (paquete R de Nicolás Schmidt) y réplica de Luján, Schmidt y Moraes — Uru | HERRAMIENTA Y RÉPLICA nacionales. El paquete convierte los diarios de sesiones uruguayos (Cámara, Comisión Permanente) en tablas donde cada fila es la intervenc | Uruguay | parcial | parcial | https://nicolas-schmidt.github.io/speech/ |
| Replication materials: Gender, Institutions, and Legislative Speech (Alemán, Bar | MATERIAL DE RÉPLICA nacional. El artículo analiza veintiocho años de discursos de la Cámara de Diputados de Chile; lo publicado es una tabla de RECUENTOS de dis | Chile | no | si | https://github.com/svallejovera/gender_inst_speeches |
| Sleoruiz/discursos-completos-etiquetados y familia (Hugging Face, 2023) — Colomb | CORPUS NACIONAL sin documentar. 94.501 filas con texto, nombre, comisión, número y fecha de Gaceta, y etiquetas temáticas; hay variantes por comisión (primera a | Colombia (inferido de la estructura; la ficha no lo dice) | desconocido | parcial | https://huggingface.co/datasets/Sleoruiz/discursos-completos-etiquetados |
| Colombian congressional interventions 2000-2024 (Sarria-Morales: tesis de la Uni | CORPUS NACIONAL ligado a una tesis de 2025 sobre detección de ideología en intervenciones del Congreso de Colombia, 2000-2024. El conjunto asociado (huggingface | Colombia | desconocido | desconocido | https://knowledge.uchicago.edu/doi/10.6082/4g3mz-4bc81 |
| ittailup/congreso_pe_yt (Hugging Face, 2024) — Perú | Conjunto de VOZ: 10.843 fragmentos de audio con su transcripción, por el nombre tomados del canal del Congreso del Perú; pensado para reconocimiento de habla. S | Perú | no | no | https://huggingface.co/datasets/ittailup/congreso_pe_yt |
| Don't Cry for me 'Argenchina': Legislative Debates in Argentina (Urdinez, Harvar | MATERIAL DE RÉPLICA nacional y temático: visiones sobre China en debates legislativos argentinos. Un solo país, subconjunto temático. En la misma línea, en Zeno | Argentina | parcial | desconocido | https://doi.org/10.7910/DVN/QX8LC6 |
| Diputados, Actas y Votos. Congreso de Argentina (Kaggle, arzanico) | SOLO VOTOS Y PADRÓN: actas de votación, votos nominales y diputados de la Cámara argentina. Sin texto de debates. En Kaggle tampoco hay nada multipaís: lo demás | Argentina | no | no | https://www.kaggle.com/datasets/arzanico/diputados-actas-y-votos-congreso-de-argentina |
| THE DEBATE ON ABORTION AT BRAZIL AND URUGUAY'S CHAMBER OF DEPUTIES (1985-2016) ( | Único depósito hallado con DOS países latinoamericanos y discursos de diputados, por eso se abrió: es el suplemento automático de un artículo de la RBCS y conti | Brasil, Uruguay | no | no | https://doi.org/10.6084/m9.figshare.14268406.v1 |
| Database and Results of Open Parliaments in Latin America (DAREOPLA) (Zenodo, 20 | Base multipaís sobre transparencia activa y participación ciudadana de los parlamentos latinoamericanos (evaluación de sus sitios). Solo se leyó el título en el | varios países de América Latina (lista no consultada) | no | no | https://zenodo.org/records/14740100 |
| Redes transnacionales ultraderecha ARG, BRA, SLV (2018-2026) base datos (Piedrah | Tres bases cualitativas para rastreo de procesos sobre Argentina, Brasil y El Salvador: 33 documentos institucionales y 24 alocuciones y entrevistas de líderes, | Argentina, Brasil, El Salvador | no | no | https://doi.org/10.5281/zenodo.21879138 |
| Presidents, Legislators, and Foreign Policy in Latin America (Ribeiro, openICPSR | Único resultado regional en ICPSR: datos y rutinas de réplica de un artículo de 2016 en Contexto Internacional sobre apoyo legislativo a la política exterior. N | varios países de América Latina (lista no indicada en la fic | desconocido | desconocido | https://www.icpsr.umich.edu/sites/icpsr/view/studies/129922/versions/V1.0 |
| ParlEE plenary speeches (V1 a V4, Harvard Dataverse, 2022-2024) | Discursos de pleno a nivel de frase con fecha, orador, partido y tema CAP, 2009-2019, 28 parlamentos europeos en cuatro entregas. MATIZ PARA LA FRASE: ParlEE SÍ | ninguno | si | parcial | https://doi.org/10.7910/DVN/ZY3RV7 |
| ParlLawSpeech | Discursos, proyectos y leyes enlazados de ocho legislaturas europeas: Austria, Croacia, Chequia, Dinamarca, Alemania, Hungría, ESPAÑA (1996-2023) y Parlamento E | ninguno | si | parcial | https://parllawspeech.org/ |
| Portuguese Parliament Plenary Speeches (1976–2026) (Cruz, Harvard Dataverse, 202 | CORPUS NACIONAL reciente de Portugal: 1.247.839 intervenciones de la Assembleia da República desde 1976 hasta enero de 2026, con orador, partido, fecha y texto. | ninguno | si | parcial | https://doi.org/10.7910/DVN/H2FEKM |
| hsilvosa/congreso-debates — Spanish Congress of Deputies L1-L15 (Hugging Face, 2 | CORPUS NACIONAL reciente de España: 41.125 intervenciones con texto literal de 1.028 Diarios de Sesiones (1979-2026), 1.191 oradores, más 105.000 votos nominale | ninguno | si | parcial | https://huggingface.co/datasets/hsilvosa/congreso-debates |
| ParlText — Parliamentary Speeches (Sebők et al., Harvard Dataverse) | Salió segundo en la búsqueda de Dataverse por su título genérico y se abrió para descartarlo: son los discursos de Chequia, Hungría, Polonia y Eslovaquia (base  | ninguno | si | desconocido | https://doi.org/10.7910/DVN/TOH56E |
| Palop-García (2018), «Contained or represented? The varied consequences of reser | EL MÁS CERCANO A UN CONTRAEJEMPLO. Artículo (Comparative Migration Studies, acceso abierto; texto completo leído vía Europe PMC, PMC6300576) que construye un co | Ecuador, Colombia | si | parcial | https://doi.org/10.1186/s40878-018-0101-7 |
| Bäck, Debus y Fernandes (eds.) (2021), The Politics of Legislative Debates, Oxfo | Obra comparada de 33 democracias con CINCO capítulos latinoamericanos (lista de capítulos obtenida de Crossref): Argentina (Ecker y Payva, 10.1093/oso/978019884 | Argentina, Brasil, Chile, Ecuador, México | no | si | https://doi.org/10.1093/oso/9780198849063.001.0001 |
| WorldSpeech: A Multilingual Speech Corpus from Around the World (arXiv 2605.0916 | Corpus de AUDIO para reconocimiento de voz (65 mil horas, 76 lenguas) sacado en buena parte de parlamentos. Incluye varios países latinoamericanos (tablas del P | Chile, México, Uruguay, Perú, Argentina, Colombia, Paraguay, | parcial | no | https://arxiv.org/abs/2605.09167 |
| The Latin American Legislators Dataset (LALD), Weiss y Kouba, Scientific Data 20 | PADRÓN SIN TEXTO, el mejor ejemplo para la frase. Todos los legisladores electos de los 18 países latinoamericanos con elecciones competitivas desde 1978 (o la  | los 18 países de América Latina con elecciones competitivas | no | no | https://doi.org/10.1038/s41597-025-05882-0 |
| Comparative Legislators Database (CLD), Göbel y Munzert, BJPS 2022 — paquete R l | Base de legisladores construida sobre Wikipedia y Wikidata: datos sociodemográficos, políticos, cargos, profesiones, redes sociales, retratos, tráfico e histori | Brasil | no | no | https://github.com/saschagobel/legislatoR |
| Global Legislators Database (GLD), Carnes, Ferrer, Golden, Lillywhite, Lupu y Na | Corte transversal de 19.704 parlamentarios nacionales de 97 democracias electorales, una sola legislatura por país (en torno a 2015-2017), cámara baja o única.  | varios (la ficha no los enumera) | no | no | https://doi.org/10.7910/DVN/U1ZNVT |
| PELA-USAL, Proyecto Élites Parlamentarias Latinoamericanas (Universidad de Salam | Encuestas periódicas a parlamentarios de 18 países latinoamericanos desde 1994 (más de 8.700 entrevistas): percepciones y actitudes, con bases por país y fusion | 18 países de América Latina | no | no | https://oir.org.es/pela/ |
| Calvo-González, Eizmendi y Reyes, «The Shifting Attention of Political Leaders:  | DISCURSOS PRESIDENCIALES, no parlamentarios: 933 mensajes anuales de presidentes (el equivalente al estado de la Unión) de diez países hispanohablantes, 1819-20 | Argentina, Chile, Colombia, Costa Rica, República Dominicana | si | no | https://arxiv.org/abs/2209.00540 |
| Arnold, Doyle y Wiesehomeier: «Presidents, Policy Compromise, and Legislative Su | Discursos presidenciales: el artículo de 2023 analiza 267 mensajes anuales al Congreso de presidentes de 12 países latinoamericanos entre 1980 y 2014 (resumen e | 12 países de América Latina (no enumerados en el resumen) | desconocido | no | https://doi.org/10.1177/1866802x231210581 |
| Gutiérrez y Quiroga (2019), corpusenespañol/discursos-presidenciales 1.0 (Zenodo | Corpus docente, abierto (CC BY 4.0), de 25 mensajes presidenciales anuales de cinco países entre 2006 y 2010 (261.032 palabras), usado en la lección de Voyant d | Argentina, Chile, Colombia, México, Perú | si | no | https://programminghistorian.org/es/lecciones/analisis-voyant-tools |
| United Nations General Debate Corpus 1946-2025 (Jankin, Baturo y Dasandi) | 11.141 discursos de representantes de 202 países en el Debate General de la Asamblea de la ONU, texto completo en inglés, con datos del orador. Todos los países | todos los miembros de la ONU de la región | si | no | https://doi.org/10.7910/DVN/0TJX8Y |
| Manifesto Project Dataset: South America (MARPOR, WZB), versión 2020b | Programas electorales codificados de partidos y de alianzas presidenciales (candidatos con al menos 5 % en primera vuelta; partidos con al menos dos escaños). S | Argentina, Brasil, Chile y otros de Sudamérica (p. ej. Boliv | no | no | https://manifesto-project.wzb.eu/down/data/SA2020b/codebooks/codebook_MPDataset_MPDSSA2020b.pdf |
| V-Dem Dataset (Varieties of Democracy) | Indicadores e índices de democracia por país-año codificados por expertos (la página declara 531 indicadores y 251 índices). Cubre América Latina, pero no conti | todos (nivel país-año) | no | no | https://www.v-dem.net/data/the-v-dem-dataset/ |
| ParlGov | Infraestructura de datos de partidos, elecciones y gabinetes de democracias de la UE y la OCDE, 1900-2023. La página no recoge ningún país latinoamericano y no  | ninguno | no | no | https://www.parlgov.org/ |
| ParlaMint 5.0 (CLARIN ERIC) | Corpus comparables de debates parlamentarios de 29 países y regiones autónomas de EUROPA, casi todos de 2015 a mediados de 2022, con metadatos ricos de orador.  | ninguno | si | si | https://www.clarin.si/repository/xmlui/handle/11356/2004 |
| ParlEE plenary speeches (V1, V2 y V3; Sylvester, Greene et al.) | SIRVE PARA COMPLETAR LA FRASE, que deja a ParlEE sin cobertura. Discursos de pleno partidos por oración, 2009-2019, con fecha, orador, partido, clasificación UE | ninguno | si | parcial | https://dataverse.harvard.edu/dataverse/ParlEE |
| Uruguay — Luján, Schmidt y Moraes (LAPS 2023): datos de réplica y paquete R «spe | CORPUS NACIONAL publicado y reutilizable: más de 57.000 discursos de más de 1.000 legisladores uruguayos, 1985-2015, con el texto depositado en Harvard Datavers | Uruguay | si | parcial | https://doi.org/10.7910/DVN/ONTLTP |
| Brasil — Izumi y Medeiros (LAPS 2021), réplica con discursos del Senado; y «Mapp | Corpus NACIONALES. Izumi y Medeiros clasifican unos 64 mil discursos de SENADORES (fichero de discursos 1995-2014 depositado en Dataverse). El preprint de 2026  | Brasil | si | parcial | https://doi.org/10.7910/DVN/HY1FFV |
| Chile — Alemán, Micozzi y Vallejo Vera: «Congressional Committees, Electoral Con | La línea más citada sobre género, comisiones y uso de la palabra en la región trabaja UN solo país: más de 100.000 discursos de la Cámara de Diputados de Chile  | Chile | desconocido | si | https://doi.org/10.1177/10659129221119200 |
| Ecuador — Vallejo Vera y Gómez Vidal: «The Politics of Interruptions» (JOP 2022) | Estudios de género y uso de la palabra con datos originales de la Asamblea y el Congreso de Ecuador (el capítulo declara 1988-2018). Un solo país y recolección  | Ecuador | desconocido | si | https://doi.org/10.1086/717083 |
| México — «Diario de Debates de la Cámara de Diputados (México)» (Medeles y Garcí | Corpus NACIONAL: texto del Diario de los Debates de la Cámara de Diputados 1917-2026, raspado de la Crónica Parlamentaria oficial para lectura distante; la fich | México | si | parcial | https://doi.org/10.5281/zenodo.22261846 |
| Argentina — Urdinez, Knoerich y Feliú Ribeiro (2017), réplica en Dataverse; capí | Recursos NACIONALES. El depósito de Urdinez et al. son dos ficheros de texto con los discursos del debate sobre la estación espacial china (un solo debate, agru | Argentina | parcial | parcial | https://doi.org/10.7910/DVN/QX8LC6 |
| Estudios cualitativos de dos países con muestras temáticas: Rezende y Elias (202 | Responde a la pregunta de DE DÓNDE SALE EL TEXTO cuando la literatura compara dos países de la región: recolección propia, por palabra clave, de muy pocas pieza | Brasil y Uruguay; México y Argentina | no | parcial | https://doi.org/10.1590/0103-3352.2024.43.278345 |
| Corpus nuevos de España y Portugal (2026), fuera de América Latina: Cruz, «Portu | No afectan a la afirmación sobre América Latina, pero sí a la parte de la frase que enumera lo que existe para España y Portugal, que no se agota en ParlaMint,  | ninguno | si | parcial | https://doi.org/10.7910/DVN/H2FEKM |
