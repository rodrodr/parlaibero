/**
 * BORRADOR de la portada rotativa (rama `portada-rotativa`). NO es el copy.
 *
 * El copy aprobado está congelado en `docs/02_COPY_es.md` y no se toca. Estos textos son una PROPUESTA para que el
 * investigador los apruebe; si los aprueba, se mudan al copy con su clave y salen de aquí. Mientras tanto viven
 * separados, para que la versión publicada no dependa de nada sin aprobar.
 *
 * Reglas que cumplen (las del sitio): ninguna cifra tecleada —`{corpus}` lo resuelve el marcador `corpus.n|letra`, y
 * las cantidades de la prosa van en letra—, ningún nombre de persona, el denominador en la misma frase que la cifra,
 * la salvedad pegada al hallazgo, y nada que la base no traiga: ni tema, ni tono, ni posición, ni voto.
 *
 * ⚠ Las trece aperturas comparten una sola gramática visual —dieciséis paneles, cada cámara contra sí misma— para
 * que rotar no parezca cambiar de sitio.
 */
export type Lang3 = 'es' | 'en' | 'pt';
export interface Textos { pregunta: string; titulo: string; hallazgo: string; salvedad: string }
/**
 * Un hito histórico junto al año más alto de una cámara. SOLO donde ese año trae un hecho de RÉGIMEN, y solo del
 * año exacto: anotar con lo del año anterior insinuaría una causa que la figura no mide.
 *  · `id` es el hito del explorador (`diaries_explorer/explorer_src/datos/hitos_parlaibero.json`), que guarda su
 *    fuente: de ahí salen estos hechos y ahí se comprueban.
 *  · ⚠ Reescritos POR EL CARGO, sin un solo nombre propio (directiva del 2026-09-21). El control automático de
 *    nombres NO los habría atrapado —un presidente no suele estar en el padrón de diputados—, así que van a mano.
 *  · Coincidir no es explicar, y la salvedad de la figura lo dice.
 */
export interface Hito { ano: number; id: string; es: string; en: string; pt: string }
export interface Apertura {
  /** `voz` es la aprobada y usa su propio componente; `termino` se dibuja con `FigTermino`. */
  tipo: 'voz' | 'termino';
  id: string;
  /** La familia medida en `terminos.json`. */
  familia?: string;
  /** Hitos por cámara, si los hay: se pintan en el hueco del panel, enfrente del pico. */
  hitos?: Record<string, Hito>;
  textos?: Record<Lang3, Textos>;
}

export const APERTURAS: Apertura[] = [
  // 2 · De qué se habla · la palabra en disputa
  {
    tipo: 'termino',
    id: 'democracia',
    familia: 'democracia',
    hitos: {
      ar: { ano: 1983, id: 'ar_elecciones_1983', es: 'Primeras elecciones tras la dictadura.', en: 'First elections after the dictatorship.', pt: 'Primeiras eleições após a ditadura.' },
      br: { ano: 2016, id: 'br_destituicao_dilma', es: 'La presidenta es destituida por juicio político.', en: 'The president is removed by impeachment.', pt: 'A presidenta é destituída por impeachment.' },
      cl: { ano: 1990, id: 'cl_asuncion_aylwin', es: 'Primer gobierno tras la dictadura.', en: 'First government after the dictatorship.', pt: 'Primeiro governo após a ditadura.' },
      // No está en el fichero del explorador: lo señaló el investigador (2026-09-21). Es una organización, no una
      // persona, así que nombrarla no choca con la directiva; aun así va por lo que hizo, no por sus siglas.
      co: { ano: 2017, id: 'co_exguerrilla_partido_2017', es: 'La antigua guerrilla se hace partido.', en: 'The former guerrilla becomes a party.', pt: 'A antiga guerrilha vira partido.' },
      // Señalado por el investigador (2026-09-21); tampoco está en el fichero del explorador. Va por lo que es,
      // sin el nombre de la causa ni el de ningún cargo.
      do: { ano: 2023, id: 'do_causa_corrupcion_2023', es: 'Gran causa de corrupción al gobierno anterior.', en: 'Corruption case reaches the previous government.', pt: 'Causa de corrupção alcança o governo anterior.' },
      // Señalado por el investigador (2026-09-21). Por el cargo: el vicepresidente era además canciller, y el
      // presidente lo apartó del Gobierno en 2011, lo que rompió la coalición.
      pa: { ano: 2011, id: 'pa_ruptura_coalicion_2011', es: 'El presidente aparta al vicepresidente.', en: 'The president removes the vice-president.', pt: 'O presidente afasta o vice-presidente.' },
      // Corregido por el investigador (2026-09-21): el hito de Ecuador es 1980, su año más alto, no la «muerte
      // cruzada» de 2023. La serie arranca en 1979, con el Congreso restablecido; 1980 es su primer año entero.
      ec: { ano: 1980, id: 'ec_congreso_1980', es: 'Primer Congreso tras la dictadura.', en: 'First Congress after the dictatorship.', pt: 'Primeiro Congresso após a ditadura.' },
      es: { ano: 1977, id: 'es_elecciones_1977', es: 'Primeras elecciones tras la dictadura.', en: 'First elections after the dictatorship.', pt: 'Primeiras eleições após a ditadura.' },
      gt: { ano: 2015, id: 'gt_renuncia_presidente', es: 'Dimite el presidente de la República.', en: 'The president of the Republic resigns.', pt: 'O presidente da República renuncia.' },
      mx: { ano: 1991, id: 'mx_elecciones_1991', es: 'Elecciones federales.', en: 'Federal elections.', pt: 'Eleições federais.' },
      pe: { ano: 2022, id: 'pe_autogolpe', es: 'Disuelve el Congreso y es destituido.', en: 'Dissolves Congress and is removed.', pt: 'Dissolve o Congresso e é destituído.' },
      pt: { ano: 1976, id: 'pt_constitucion_1976', es: 'Se aprueba la Constitución.', en: 'The Constitution is approved.', pt: 'A Constituição é aprovada.' },
      py: { ano: 1989, id: 'py_golpe_1989', es: 'Un golpe acaba con la dictadura.', en: 'A coup ends the dictatorship.', pt: 'Um golpe acaba com a ditadura.' },
      sv: { ano: 2020, id: 'sv_militares_asamblea', es: 'Militares entran en la Asamblea.', en: 'The military enters the Assembly.', pt: 'Militares entram na Assembleia.' },
      uy: { ano: 1986, id: 'uy_ley_caducidad', es: 'Amnistía para los crímenes de la dictadura.', en: 'Amnesty for the dictatorship\'s crimes.', pt: 'Anistia para os crimes da ditadura.' },
    },
    textos: {
      es: {
        pregunta: '¿Cuándo se habla de democracia en el pleno?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'El año más alto de cada cámara casi nunca es uno cualquiera. Donde la serie empieza con el regreso de la democracia, el más alto es el primero; en las demás cae en mitad de la serie. La palabra sube cuando está en disputa.',
        salvedad: 'Cuenta cuántas veces se dice la palabra y sus derivados, sobre las palabras dichas en esa cámara y ese año. Quién la invoca, y si es para defenderla o para negarla, no está en la base. Junto al año más alto va lo que ocurrió ese año, donde fue un hecho de régimen: coincidir no es explicar.',
      },
      en: {
        pregunta: 'When is democracy spoken about in the plenary?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'A chamber\'s highest year is hardly ever an ordinary one. Where the series begins with the return of democracy, the highest year is the first; in the others it falls in the middle of the series. The word rises when it is contested.',
        salvedad: 'It counts how often the word and its derivatives are said, over the words spoken in that chamber and that year. Who invokes it, and whether to defend it or to deny it, is not in the database. Next to the highest year is what happened that year, where it was a regime event: coinciding is not explaining.',
      },
      pt: {
        pregunta: 'Quando se fala de democracia no plenário?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'O ano mais alto de cada câmara quase nunca é um ano qualquer. Onde a série começa com a volta da democracia, o mais alto é o primeiro; nas demais, cai no meio da série. A palavra sobe quando está em disputa.',
        salvedad: 'Conta quantas vezes a palavra e seus derivados são ditos, sobre as palavras ditas naquela câmara e naquele ano. Quem a invoca, e se é para defendê-la ou para negá-la, não está na base. Junto ao ano mais alto vai o que ocorreu naquele ano, onde foi um fato de regime: coincidir não é explicar.',
      },
    },
  },
  { tipo: 'voz', id: 'voz' },
  // 5 · Una preocupación que se dice con muchas palabras
  {
    tipo: 'termino',
    id: 'criminalidad',
    familia: 'criminalidad',
    textos: {
      es: {
        pregunta: '¿Cuándo entra la criminalidad en el debate?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'Las cámaras que más la nombran no son siempre las que uno esperaría. Un asunto puede llevar años en el pleno con otras palabras —violencia, conflicto, seguridad— que esta figura no cuenta.',
        salvedad: 'Cuenta crimen, criminalidad, delincuencia y delito, sobre las palabras dichas en esa cámara y ese año. Una cámara puede hablar del mismo problema sin usar ninguna de las cuatro. No ordena cámaras.',
      },
      en: {
        pregunta: 'When does crime enter the debate?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'The chambers that name it most are not always the ones you would expect. An issue can sit in the plenary for years under other words —violence, conflict, security— that this figure does not count.',
        salvedad: 'It counts crime, criminality, delinquency and offence, over the words spoken in that chamber and that year. A chamber may discuss the same problem without using any of the four. It does not rank chambers.',
      },
      pt: {
        pregunta: 'Quando a criminalidade entra no debate?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'As câmaras que mais a nomeiam nem sempre são as que se esperaria. Um assunto pode estar há anos no plenário com outras palavras —violência, conflito, segurança— que esta figura não conta.',
        salvedad: 'Conta crime, criminalidade, delinquência e delito, sobre as palavras ditas naquela câmara e naquele ano. Uma câmara pode falar do mesmo problema sem usar nenhuma das quatro. Não ordena câmaras.',
      },
    },
  },
  // 6 · Un registro histórico · las dos olas
  {
    tipo: 'termino',
    id: 'inflacion',
    familia: 'inflacion',
    textos: {
      es: {
        pregunta: '¿Cuándo se habló de inflación?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'Dos olas. La primera deja su marca donde hubo hiperinflación, y solo ahí. La segunda, mucho más reciente, sube en casi todas las cámaras a la vez.',
        salvedad: 'Cuenta inflación y sus derivados, sobre las palabras dichas en esa cámara y ese año. Las cámaras cuya serie empieza tarde no pueden mostrar la primera ola: el hueco es del corpus, no del debate.',
      },
      en: {
        pregunta: 'When was inflation spoken about?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'Two waves. The first leaves its mark where there was hyperinflation, and only there. The second, much more recent, rises in almost every chamber at once.',
        salvedad: 'It counts inflation and its derivatives, over the words spoken in that chamber and that year. Chambers whose series begins late cannot show the first wave: the gap belongs to the corpus, not to the debate.',
      },
      pt: {
        pregunta: 'Quando se falou de inflação?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'Duas ondas. A primeira deixa sua marca onde houve hiperinflação, e só ali. A segunda, bem mais recente, sobe em quase todas as câmaras ao mesmo tempo.',
        salvedad: 'Conta inflação e seus derivados, sobre as palavras ditas naquela câmara e naquele ano. As câmaras cuja série começa tarde não podem mostrar a primeira onda: a lacuna é do corpus, não do debate.',
      },
    },
  },
  // 4 · Una preocupación que distingue cámaras
  {
    tipo: 'termino',
    id: 'inmigracion',
    familia: 'inmigracion',
    textos: {
      es: {
        pregunta: '¿Cuándo llega la inmigración al pleno?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'Casi todas suben en los últimos años, pero no por lo mismo: entre las cámaras que más lo nombran hay países de llegada y países de salida. La palabra sola no dice de cuál de las dos se habla.',
        salvedad: 'Cuenta inmigración, emigración, migración y migrante, sobre las palabras dichas en esa cámara y ese año: quien llega y quien se va van juntos, y la figura no los separa. No ordena cámaras.',
      },
      en: {
        pregunta: 'When does immigration reach the plenary?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'Almost all of them rise in recent years, but not for the same reason: among the chambers that name it most there are countries of arrival and countries of departure. The word alone does not say which of the two is being discussed.',
        salvedad: 'It counts immigration, emigration, migration and migrant, over the words spoken in that chamber and that year: those who arrive and those who leave go together, and the figure does not separate them. It does not rank chambers.',
      },
      pt: {
        pregunta: 'Quando a imigração chega ao plenário?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'Quase todas sobem nos últimos anos, mas não pelo mesmo motivo: entre as câmaras que mais a nomeiam há países de chegada e países de saída. A palavra sozinha não diz de qual das duas se fala.',
        salvedad: 'Conta imigração, emigração, migração e migrante, sobre as palavras ditas naquela câmara e naquele ano: quem chega e quem sai vão juntos, e a figura não os separa. Não ordena câmaras.',
      },
    },
  },
  // 4 · El acontecimiento global: el control de calidad del corpus
  {
    tipo: 'termino',
    id: 'pandemia',
    familia: 'pandemia',
    textos: {
      es: { pregunta: '¿Se puede ver un acontecimiento global en dieciséis parlamentos a la vez?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'Las dieciséis suben el mismo año, y ninguna lo había hecho antes. Es lo más parecido a un experimento que ofrece el corpus: un mismo golpe, dieciséis reacciones, y cada cámara mide su propia sacudida.', salvedad: 'Cuenta pandemia, covid y coronavirus, sobre las palabras dichas en esa cámara y ese año. Que una cámara suba más no dice que le fuera peor: dice cuánto ocupó el pleno. No ordena cámaras.' },
      en: { pregunta: 'Can a global event be seen in sixteen parliaments at once?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'All sixteen rise in the same year, and none had done so before. It is the closest thing to an experiment the corpus offers: one shock, sixteen reactions, each chamber measuring its own.', salvedad: 'It counts pandemic, covid and coronavirus, over the words spoken in that chamber and that year. A chamber rising higher does not mean it fared worse: it means how much the plenary was taken up. It does not rank chambers.' },
      pt: { pregunta: 'É possível ver um acontecimento global em dezesseis parlamentos ao mesmo tempo?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'As dezesseis sobem no mesmo ano, e nenhuma havia feito isso antes. É o mais parecido com um experimento que o corpus oferece: um mesmo choque, dezesseis reações, cada câmara medindo a sua.', salvedad: 'Conta pandemia, covid e coronavírus, sobre as palavras ditas naquela câmara e naquele ano. Uma câmara subir mais não diz que passou pior: diz quanto ocupou o plenário. Não ordena câmaras.' },
    },
  },
  // 7 · La palabra que cambia de significado
  {
    tipo: 'termino',
    id: 'terrorismo',
    familia: 'terrorismo',
    textos: {
      es: { pregunta: '¿Quién es un terrorista, y cuándo?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'La palabra no significa lo mismo en cada cámara ni en cada década: en unas nombra una guerra interna, en otras un atentado, en otras al adversario político. El recuento no distingue entre los tres usos.', salvedad: 'Cuenta terrorismo y terrorista, sobre las palabras dichas en esa cámara y ese año. A quién se llama así, y con qué intención, no está en la base. No ordena cámaras.' },
      en: { pregunta: 'Who is a terrorist, and when?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'The word does not mean the same in every chamber or every decade: in some it names an internal war, in others an attack, in others the political opponent. The count does not tell the three apart.', salvedad: 'It counts terrorism and terrorist, over the words spoken in that chamber and that year. Who is called that, and with what intent, is not in the database. It does not rank chambers.' },
      pt: { pregunta: 'Quem é um terrorista, e quando?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'A palavra não significa o mesmo em cada câmara nem em cada década: numas nomeia uma guerra interna, noutras um atentado, noutras o adversário político. A contagem não distingue os três usos.', salvedad: 'Conta terrorismo e terrorista, sobre as palavras ditas naquela câmara e naquele ano. A quem se chama assim, e com que intenção, não está na base. Não ordena câmaras.' },
    },
  },
  // 8 · El contraste ibérico
  {
    tipo: 'termino',
    id: 'empleo',
    familia: 'empleo',
    textos: {
      es: { pregunta: '¿Dónde pesa el empleo en el debate?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'Las dos cámaras ibéricas hablan de empleo mucho más que el resto, y suben cuando les llega una crisis. No es que a las demás no les importe: es que el mismo problema se debate allí con otras palabras.', salvedad: 'Cuenta empleo y desempleo, sobre las palabras dichas en esa cámara y ese año. Una cámara puede tratar el mismo asunto sin nombrarlo así. No ordena cámaras.' },
      en: { pregunta: 'Where does employment weigh in the debate?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'The two Iberian chambers speak of employment far more than the rest, and rise when a crisis reaches them. It is not that the others do not care: the same problem is debated there under other words.', salvedad: 'It counts employment and unemployment, over the words spoken in that chamber and that year. A chamber may handle the same issue without naming it so. It does not rank chambers.' },
      pt: { pregunta: 'Onde o emprego pesa no debate?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'As duas câmaras ibéricas falam de emprego muito mais que as demais, e sobem quando lhes chega uma crise. Não é que às outras não importe: o mesmo problema é debatido ali com outras palavras.', salvedad: 'Conta emprego e desemprego, sobre as palavras ditas naquela câmara e naquele ano. Uma câmara pode tratar do mesmo assunto sem nomeá-lo assim. Não ordena câmaras.' },
    },
  },
  // 9 · Lo que llega para quedarse
  {
    tipo: 'termino',
    id: 'ambiente',
    familia: 'ambiente',
    textos: {
      es: { pregunta: '¿Cuándo entró el medio ambiente en el pleno?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'No estaba al principio de casi ninguna serie y hoy está en todas. Es de las pocas palabras que suben de forma sostenida en las dieciséis, en vez de subir y caer con un acontecimiento.', salvedad: 'Cuenta medio ambiente, ambiental y climático, sobre las palabras dichas en esa cámara y ese año. Nombrarlo no dice qué se decidió. No ordena cámaras.' },
      en: { pregunta: 'When did the environment enter the plenary?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'It was absent at the start of almost every series and today it is in all of them. It is one of the few words that rise steadily across the sixteen, instead of spiking and falling with an event.', salvedad: 'It counts environment, environmental and climate, over the words spoken in that chamber and that year. Naming it does not say what was decided. It does not rank chambers.' },
      pt: { pregunta: 'Quando o meio ambiente entrou no plenário?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'Não estava no início de quase nenhuma série e hoje está em todas. É uma das poucas palavras que sobem de forma sustentada nas dezesseis, em vez de subir e cair com um acontecimento.', salvedad: 'Conta meio ambiente, ambiental e climático, sobre as palavras ditas naquela câmara e naquele ano. Nomeá-lo não diz o que se decidiu. Não ordena câmaras.' },
    },
  },
  // 10 · La palabra que dibuja el mapa
  {
    tipo: 'termino',
    id: 'indigenas',
    familia: 'indigenas',
    textos: {
      es: { pregunta: '¿En qué cámaras existen los pueblos indígenas?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'Es la palabra que más separa el mapa: en unas cámaras aparece cada año y en las dos ibéricas casi nunca. Donde hay población indígena, el pleno la nombra; donde no, la palabra desaparece del debate.', salvedad: 'Cuenta indígena y pueblos originarios, sobre las palabras dichas en esa cámara y ese año. Que se nombre no dice en qué términos ni con qué consecuencia. No ordena cámaras.' },
      en: { pregunta: 'In which chambers do indigenous peoples exist?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'This is the word that splits the map most: in some chambers it appears every year, and in the two Iberian ones almost never. Where there is an indigenous population, the plenary names it; where there is not, the word leaves the debate.', salvedad: 'It counts indigenous and original peoples, over the words spoken in that chamber and that year. Being named does not say in what terms or to what effect. It does not rank chambers.' },
      pt: { pregunta: 'Em quais câmaras existem os povos indígenas?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'É a palavra que mais separa o mapa: em umas câmaras aparece todo ano e nas duas ibéricas quase nunca. Onde há população indígena, o plenário a nomeia; onde não há, a palavra sai do debate.', salvedad: 'Conta indígena e povos originários, sobre as palavras ditas naquela câmara e naquele ano. Ser nomeado não diz em que termos nem com que consequência. Não ordena câmaras.' },
    },
  },
  // 3 · De qué se habla · el rastro de una política pública
  {
    tipo: 'termino',
    id: 'infraestructura',
    familia: 'infraestructura',
    textos: {
      es: {
        pregunta: '¿Qué rastro dejan las infraestructuras en el pleno?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'Aquí ninguna cámara tiene un año que se dispare. Una política de obra pública se habla de forma sostenida, con subidas locales: es el rastro de un asunto, no el de una crisis.',
        salvedad: 'Cuenta cuántas veces se dice la palabra y sus derivados, sobre las palabras dichas en esa cámara y ese año. Que se nombre un asunto no dice qué se decidió sobre él. Un año con poco material no entra.',
      },
      en: {
        pregunta: 'What trace does infrastructure leave in the plenary?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'Here no chamber has a year that shoots up. Public works are spoken about steadily, with local rises: it is the trace of an issue, not of a crisis.',
        salvedad: 'It counts how often the word and its derivatives are said, over the words spoken in that chamber and that year. Naming an issue does not say what was decided about it. A year with little material does not count.',
      },
      pt: {
        pregunta: 'Que rastro deixam as infraestruturas no plenário?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'Aqui nenhuma câmara tem um ano que dispare. Uma política de obras é falada de forma sustentada, com altas locais: é o rastro de um assunto, não o de uma crise.',
        salvedad: 'Conta quantas vezes a palavra e seus derivados são ditos, sobre as palavras ditas naquela câmara e naquele ano. Nomear um assunto não diz o que se decidiu sobre ele. Um ano com pouco material não entra.',
      },
    },
  },
  // 12 · La palabra del escándalo
  {
    tipo: 'termino',
    id: 'corrupcion',
    familia: 'corrupcion',
    textos: {
      es: { pregunta: '¿Cuándo se habla de corrupción en el pleno?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'Sube a golpes, no poco a poco: cada cámara tiene su año, y casi siempre es el de un caso que llegó a los tribunales. Es una palabra de escándalo, no de programa.', salvedad: 'Cuenta corrupción y corrupto, sobre las palabras dichas en esa cámara y ese año. Quién acusa a quién, y si la acusación prosperó, no está en la base. No ordena cámaras.' },
      en: { pregunta: 'When is corruption spoken about in the plenary?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'It rises in jolts, not gradually: each chamber has its year, and it is almost always the year of a case that reached the courts. It is a word of scandal, not of programme.', salvedad: 'It counts corruption and corrupt, over the words spoken in that chamber and that year. Who accuses whom, and whether the accusation prospered, is not in the database. It does not rank chambers.' },
      pt: { pregunta: 'Quando se fala de corrupção no plenário?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'Sobe aos solavancos, não aos poucos: cada câmara tem o seu ano, e quase sempre é o de um caso que chegou aos tribunais. É uma palavra de escândalo, não de programa.', salvedad: 'Conta corrupção e corrupto, sobre as palavras ditas naquela câmara e naquele ano. Quem acusa quem, e se a acusação prosperou, não está na base. Não ordena câmaras.' },
    },
  },
  // 13 · La palabra que no retrata al país
  {
    tipo: 'termino',
    id: 'pobreza',
    familia: 'pobreza',
    textos: {
      es: { pregunta: '¿Se habla de pobreza donde más pobreza hay?', titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.', hallazgo: 'No. Las cámaras que más la nombran no son las de los países más pobres, y las que menos tampoco son las más ricas. Lo que mide la figura es cuánto ocupa la palabra el pleno, no cuánta pobreza hay fuera.', salvedad: 'Cuenta pobreza, pobres y desigualdad, sobre las palabras dichas en esa cámara y ese año. La base no trae ningún dato sobre el país, solo sobre lo que se dijo en su cámara. No ordena cámaras.' },
      en: { pregunta: 'Is poverty spoken about where there is most poverty?', titulo: '{corpus} chambers, year by year, per million words spoken.', hallazgo: 'No. The chambers that name it most are not those of the poorest countries, and those that name it least are not the richest. What the figure measures is how much the word takes up the plenary, not how much poverty there is outside.', salvedad: 'It counts poverty, the poor and inequality, over the words spoken in that chamber and that year. The database carries no data about the country, only about what was said in its chamber. It does not rank chambers.' },
      pt: { pregunta: 'Fala-se de pobreza onde há mais pobreza?', titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.', hallazgo: 'Não. As câmaras que mais a nomeiam não são as dos países mais pobres, e as que menos a nomeiam também não são as mais ricas. O que a figura mede é quanto a palavra ocupa o plenário, não quanta pobreza há fora.', salvedad: 'Conta pobreza, pobres e desigualdade, sobre as palavras ditas naquela câmara e naquele ano. A base não traz nenhum dado sobre o país, apenas sobre o que se disse em sua câmara. Não ordena câmaras.' },
    },
  },
];

/** Leyenda del trazo, igual en todas: la muestra es una cámara y la raya de puntos, la media del conjunto. */
export const LEYENDA: Record<Lang3, string> = {
  es: 'Una cámara, año a año, todas a la misma escala: de cero a {techo} por millón. La raya de puntos es la media de las {corpus}: {media}.',
  en: 'One chamber, year by year, all on the same scale: from zero to {techo} per million. The dotted line is the average of the {corpus}: {media}.',
  pt: 'Uma câmara, ano a ano, todas na mesma escala: de zero a {techo} por milhão. A linha pontilhada é a média das {corpus}: {media}.',
};

/** Rótulo del control que cambia de pregunta a mano. También borrador. */
export const OTRA: Record<Lang3, string> = {
  es: 'Otra pregunta',
  en: 'Another question',
  pt: 'Outra pergunta',
};
