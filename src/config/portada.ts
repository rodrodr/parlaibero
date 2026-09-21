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
 * ⚠ Las siete aperturas comparten una sola gramática visual —dieciséis paneles, cada cámara contra sí misma— para
 * que rotar no parezca cambiar de sitio.
 */
import type { Spec } from '../components/FigSerie.astro';

export type Lang3 = 'es' | 'en' | 'pt';
export interface Textos { pregunta: string; titulo: string; hallazgo: string; salvedad: string }
export interface Apertura {
  /** `voz` es la aprobada y usa su propio componente; `serie` se dibuja con `FigSerie`. */
  tipo: 'voz' | 'serie';
  id: string;
  spec?: Spec;
  textos?: Record<Lang3, Textos>;
}

export const APERTURAS: Apertura[] = [
  // 1 · La aprobada. Sus textos son los del copy (`inicio.apertura.*`) y no se redactan aquí.
  { tipo: 'voz', id: 'voz' },

  // 2 · De qué se habla · la palabra en disputa
  {
    tipo: 'serie',
    id: 'democracia',
    spec: { fuente: 'terminos', clave: 'democracia', eje: 'anual', formato: 'porMillon', paso: 250 },
    textos: {
      es: {
        pregunta: '¿Cuándo se habla de democracia en el pleno?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'El año más alto de cada cámara casi nunca es uno cualquiera. Donde la serie empieza con el regreso de la democracia, el más alto es el primero; en las demás cae en mitad de la serie. La palabra sube cuando está en disputa.',
        salvedad: 'Cuenta cuántas veces se dice la palabra y sus derivados, sobre las palabras dichas en esa cámara y ese año. Quién la invoca, y si es para defenderla o para negarla, no está en la base. Un año con poco material no entra.',
      },
      en: {
        pregunta: 'When is democracy spoken about in the plenary?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'A chamber\'s highest year is hardly ever an ordinary one. Where the series begins with the return of democracy, the highest year is the first; in the others it falls in the middle of the series. The word rises when it is contested.',
        salvedad: 'It counts how often the word and its derivatives are said, over the words spoken in that chamber and that year. Who invokes it, and whether to defend it or to deny it, is not in the database. A year with little material does not count.',
      },
      pt: {
        pregunta: 'Quando se fala de democracia no plenário?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'O ano mais alto de cada câmara quase nunca é um ano qualquer. Onde a série começa com a volta da democracia, o mais alto é o primeiro; nas demais, cai no meio da série. A palavra sobe quando está em disputa.',
        salvedad: 'Conta quantas vezes a palavra e seus derivados são ditos, sobre as palavras ditas naquela câmara e naquele ano. Quem a invoca, e se é para defendê-la ou para negá-la, não está na base. Um ano com pouco material não entra.',
      },
    },
  },

  // 3 · De qué se habla · el rastro de una política pública
  {
    tipo: 'serie',
    id: 'infraestructura',
    spec: { fuente: 'terminos', clave: 'infraestructura', eje: 'anual', formato: 'porMillon', paso: 100 },
    textos: {
      es: {
        pregunta: '¿Qué rastro deja una política pública en el pleno?',
        titulo: '{corpus} cámaras, año a año, por cada millón de palabras dichas.',
        hallazgo: 'Aquí ninguna cámara tiene un año que se dispare. Una política de obra pública se habla de forma sostenida, con subidas locales: es el rastro de un asunto, no el de una crisis.',
        salvedad: 'Cuenta cuántas veces se dice la palabra y sus derivados, sobre las palabras dichas en esa cámara y ese año. Que se nombre un asunto no dice qué se decidió sobre él. Un año con poco material no entra.',
      },
      en: {
        pregunta: 'What trace does a public policy leave in the plenary?',
        titulo: '{corpus} chambers, year by year, per million words spoken.',
        hallazgo: 'Here no chamber has a year that shoots up. Public works are spoken about steadily, with local rises: it is the trace of an issue, not of a crisis.',
        salvedad: 'It counts how often the word and its derivatives are said, over the words spoken in that chamber and that year. Naming an issue does not say what was decided about it. A year with little material does not count.',
      },
      pt: {
        pregunta: 'Que rastro deixa uma política pública no plenário?',
        titulo: '{corpus} câmaras, ano a ano, por milhão de palavras ditas.',
        hallazgo: 'Aqui nenhuma câmara tem um ano que dispare. Uma política de obras é falada de forma sustentada, com altas locais: é o rastro de um assunto, não o de uma crise.',
        salvedad: 'Conta quantas vezes a palavra e seus derivados são ditos, sobre as palavras ditas naquela câmara e naquele ano. Nomear um assunto não diz o que se decidiu sobre ele. Um ano com pouco material não entra.',
      },
    },
  },

  // 4 · Cómo funciona el pleno · el reparto
  {
    tipo: 'serie',
    id: 'concentracion',
    spec: { fuente: 'estructura', clave: 'concentracion', eje: 'decada', formato: 'pct', paso: 0.1 },
    textos: {
      es: {
        pregunta: '¿Se reparte la palabra, o se concentra?',
        titulo: '{corpus} cámaras, por década: qué parte de lo hablado dice el diez por ciento que más habla.',
        hallazgo: 'En unas cámaras ese diez por ciento dice un tercio de las palabras; en otras, cuatro quintos. Y dentro de una misma cámara el reparto se mueve de una década a otra.',
        salvedad: 'Sobre las palabras que se pudieron atribuir a un diputado, no sobre todas: lo que no se vinculó no se puede repartir. No se calcula donde hablan menos de veinte personas, porque ahí «el diez por ciento» sería una sola.',
      },
      en: {
        pregunta: 'Is the floor shared, or concentrated?',
        titulo: '{corpus} chambers, by decade: the share of what is said that comes from the ten per cent who speak most.',
        hallazgo: 'In some chambers that ten per cent says a third of the words; in others, four fifths. And within one chamber the split moves from decade to decade.',
        salvedad: 'Over the words that could be attributed to a deputy, not over all of them: what was not linked cannot be shared out. It is not computed where fewer than twenty people speak, because there «the ten per cent» would be a single person.',
      },
      pt: {
        pregunta: 'A palavra se reparte ou se concentra?',
        titulo: '{corpus} câmaras, por década: que parte do que se fala é dita pelos dez por cento que mais falam.',
        hallazgo: 'Em umas câmaras esses dez por cento dizem um terço das palavras; em outras, quatro quintos. E dentro de uma mesma câmara a repartição se move de uma década para outra.',
        salvedad: 'Sobre as palavras que se puderam atribuir a um deputado, não sobre todas: o que não foi vinculado não se pode repartir. Não se calcula onde falam menos de vinte pessoas, porque ali «os dez por cento» seriam uma só.',
      },
    },
  },

  // 5 · Cómo funciona el pleno · la duración
  {
    tipo: 'serie',
    id: 'mediana_turno',
    spec: { fuente: 'estructura', clave: 'mediana_turno', eje: 'decada', formato: 'entero', paso: 25 },
    textos: {
      es: {
        pregunta: '¿Cuánto dura una intervención?',
        titulo: '{corpus} cámaras, por década: palabras de la intervención mediana.',
        hallazgo: 'Hay cámaras donde la intervención mediana no llega a veinte palabras y otras donde pasa de cien. La diferencia no es de elocuencia: es de qué llama turno cada Diario.',
        salvedad: 'La mediana, no la media: un discurso muy largo no la mueve. Dónde empieza y acaba un turno lo decide el Diario de cada cámara, y una que anota cada interrupción tendrá turnos más cortos. No se calcula con menos de doscientos turnos.',
      },
      en: {
        pregunta: 'How long is a single intervention?',
        titulo: '{corpus} chambers, by decade: words in the median intervention.',
        hallazgo: 'There are chambers where the median intervention does not reach twenty words and others where it goes past a hundred. The difference is not eloquence: it is what each Record calls a turn.',
        salvedad: 'The median, not the mean: one very long speech does not move it. Where a turn begins and ends is decided by each chamber\'s Record, and one that notes every interruption will have shorter turns. It is not computed with fewer than two hundred turns.',
      },
      pt: {
        pregunta: 'Quanto dura uma intervenção?',
        titulo: '{corpus} câmaras, por década: palavras da intervenção mediana.',
        hallazgo: 'Há câmaras onde a intervenção mediana não chega a vinte palavras e outras onde passa de cem. A diferença não é de eloquência: é do que cada Diário chama de turno.',
        salvedad: 'A mediana, não a média: um discurso muito longo não a move. Onde começa e termina um turno é decidido pelo Diário de cada câmara, e um que anota cada interrupção terá turnos mais curtos. Não se calcula com menos de duzentos turnos.',
      },
    },
  },

  // 6 · Cómo funciona el pleno · cuántos
  {
    tipo: 'serie',
    id: 'voces_sesion',
    spec: { fuente: 'estructura', clave: 'voces_sesion', eje: 'decada', formato: 'entero', paso: 25 },
    textos: {
      es: {
        pregunta: '¿Cuántas voces se oyen en una sesión?',
        titulo: '{corpus} cámaras, por década: diputados distintos que hablan en la sesión mediana.',
        hallazgo: 'De una docena a más de sesenta. Una cámara donde hablan pocos no es una cámara pequeña: es una cámara donde la palabra se reparte de otro modo.',
        salvedad: 'Solo cuenta a quien se pudo vincular con un diputado, así que donde la vinculación es baja la cifra se queda corta. Una sesión larga y una corta pesan igual: es la sesión mediana, no el total.',
      },
      en: {
        pregunta: 'How many voices are heard in one session?',
        titulo: '{corpus} chambers, by decade: distinct deputies who speak in the median session.',
        hallazgo: 'From a dozen to more than sixty. A chamber where few speak is not a small chamber: it is a chamber where the floor is shared differently.',
        salvedad: 'It counts only those who could be linked to a deputy, so where linkage is low the number falls short. A long session and a short one weigh the same: it is the median session, not the total.',
      },
      pt: {
        pregunta: 'Quantas vozes se ouvem em uma sessão?',
        titulo: '{corpus} câmaras, por década: deputados distintos que falam na sessão mediana.',
        hallazgo: 'De uma dúzia a mais de sessenta. Uma câmara onde falam poucos não é uma câmara pequena: é uma câmara onde a palavra se reparte de outro modo.',
        salvedad: 'Conta apenas quem se pôde vincular a um deputado, de modo que onde a vinculação é baixa o número fica curto. Uma sessão longa e uma curta pesam igual: é a sessão mediana, não o total.',
      },
    },
  },

  // 7 · Cómo funciona el pleno · quién lo ocupa
  {
    tipo: 'serie',
    id: 'sin_diputado',
    spec: { fuente: 'estructura', clave: 'sin_diputado', eje: 'decada', formato: 'pct', paso: 0.1 },
    textos: {
      es: {
        pregunta: '¿Cuánta parte del pleno no la dice un diputado?',
        titulo: '{corpus} cámaras, por década: palabras dichas sin un diputado detrás.',
        hallazgo: 'En unas cámaras es una de cada cien palabras; en otras, más de la mitad. Detrás hay tres cosas distintas, y esta figura no las separa.',
        salvedad: 'Mezcla a quien no puede ocupar escaño —ministros, secretarios, relatores—, la voz colectiva o anónima, y la laguna nuestra: lo que no supimos vincular. Metodología las separa. Sobre las palabras dichas de esa cámara y esa década.',
      },
      en: {
        pregunta: 'How much of the plenary is not said by a deputy?',
        titulo: '{corpus} chambers, by decade: words spoken with no deputy behind them.',
        hallazgo: 'In some chambers it is one word in a hundred; in others, more than half. Three different things sit behind that, and this figure does not separate them.',
        salvedad: 'It mixes those who cannot hold a seat —ministers, clerks, reading clerks—, the collective or anonymous voice, and our missed links: what we could not link. Methodology separates them. Over the words spoken in that chamber and that decade.',
      },
      pt: {
        pregunta: 'Quanta parte do plenário não é dita por um deputado?',
        titulo: '{corpus} câmaras, por década: palavras ditas sem um deputado atrás.',
        hallazgo: 'Em umas câmaras é uma em cada cem palavras; em outras, mais da metade. Atrás disso há três coisas distintas, e esta figura não as separa.',
        salvedad: 'Mistura quem não pode ocupar cadeira —ministros, secretários, relatores—, a voz coletiva ou anônima, e a falha nossa: o que não soubemos vincular. A Metodologia as separa. Sobre as palavras ditas naquela câmara e naquela década.',
      },
    },
  },
];

/** Rótulo del control que cambia de pregunta a mano. También borrador. */
export const OTRA: Record<Lang3, string> = {
  es: 'Otra pregunta',
  en: 'Another question',
  pt: 'Outra pergunta',
};
