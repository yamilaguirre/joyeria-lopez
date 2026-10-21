export const metalIds = ["oro", "plata", "piedra"] as const;
export type MetalId = (typeof metalIds)[number];

export const pieceIds = ["alianza", "dije", "medida"] as const;
export type PieceId = (typeof pieceIds)[number];

export type Picture = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  credit: string;
  page: string;
  license: string;
  licenseUrl: string;
};

export const pictures = {
  oroGriego: {
    src: "/oficio/oro-griego.jpg",
    alt: "Anillo de oro con un rostro en relieve, visto de frente sobre fondo gris.",
    width: 1800,
    height: 1800,
    caption: "Anillo de oro. Taller griego, siglos IV–III a. C.",
    credit: "Greek maker, dominio público (CC0), The Metropolitan Museum of Art",
    page: "https://www.metmuseum.org/art/collection/search/248265",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  oroSerpiente: {
    src: "/oficio/oro-serpiente.jpg",
    alt: "Anillo de oro enrollado, con cabeza y cola de serpiente.",
    width: 1800,
    height: 1800,
    caption: "Anillo de oro en forma de serpiente. Taller romano, siglo I.",
    credit: "Roman maker, dominio público (CC0), The Metropolitan Museum of Art",
    page: "https://www.metmuseum.org/art/collection/search/243491",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  ashmolean: {
    src: "/oficio/joyas-ashmolean.jpg",
    alt: "Aros y alfileres de oro y plata sobre el paño oscuro de una vitrina.",
    width: 1800,
    height: 1200,
    caption: "Aros y alfileres de oro y plata, siglos VIII–III a. C. Ashmolean Museum.",
    credit: "Zde, CC BY-SA 4.0, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/w/index.php?curid=40258615",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  esmeralda: {
    src: "/oficio/esmeralda-muzo.jpg",
    alt: "Cristal de esmeralda verde incrustado en roca clara.",
    width: 1800,
    height: 1365,
    caption: "Esmeralda en su matriz. Mina de Muzo, Colombia.",
    credit: "Didier Descouens, CC BY-SA 3.0, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:(Muzo)_Emerald_crystal_in_its_matrix.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  midyat: {
    src: "/oficio/plata-midyat.jpg",
    alt: "Broche de filigrana de plata en forma de elefante, sobre tela clara.",
    width: 1800,
    height: 1300,
    caption: "Filigrana de plata, Midyat. Archivo, no es de la casa.",
    credit: "Nevit Dilmen, CC BY-SA 3.0, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/w/index.php?curid=12680857",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  posy: {
    src: "/oficio/oro-posy.jpg",
    alt: "Seis vistas de un anillo de oro grabado con flores, estrellas y letras.",
    width: 1224,
    height: 1800,
    caption: "Anillo de oro con inscripción, hacia 1400–1500.",
    credit: "The Portable Antiquities Scheme, Dot Boughton, CC BY-SA 4.0, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:2011T546,_gold_posy_ring_(FindID_462387).jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  eligio: {
    src: "/oficio/eligio.jpg",
    alt: "Grabado de un taller: un orfebre trabaja en el banco junto a sus herramientas.",
    width: 1800,
    height: 1118,
    caption: "San Eligio en su taller. Maestro de Balaam, hacia 1450.",
    credit: "Master of Balaam, dominio público, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/wiki/File:Saint_Eligius_in_his_workshop.jpg",
    license: "Dominio público",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
  },
  taller: {
    src: "/oficio/taller-platos.jpg",
    alt: "Grabado de un taller donde varias personas doran platos y vasijas.",
    width: 1800,
    height: 1011,
    caption: "Taller de orfebre, dorando platos. Grabado de archivo.",
    credit: "CC BY 4.0, vía Wikimedia Commons",
    page: "https://commons.wikimedia.org/w/index.php?curid=36562464",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
} as const satisfies Record<string, Picture>;

export const metals: Record<
  MetalId,
  { id: MetalId; label: string; statement: string; picture: Picture }
> = {
  oro: {
    id: "oro",
    label: "Oro",
    statement: "Casa de joyas en Bolivia. El encargo va en oro.",
    picture: pictures.oroGriego,
  },
  plata: {
    id: "plata",
    label: "Plata",
    statement: "Casa de joyas en Bolivia. El encargo va en plata.",
    picture: pictures.ashmolean,
  },
  piedra: {
    id: "piedra",
    label: "Piedra",
    statement: "Casa de joyas en Bolivia. El encargo va en piedra.",
    picture: pictures.esmeralda,
  },
};

export const pieces: Record<
  PieceId,
  { id: PieceId; tab: string; title: string; text: string }
> = {
  alianza: {
    id: "alianza",
    tab: "Alianza",
    title: "Una alianza diaria",
    text: "Solenne es una muestra: perfil cómodo, para llevar todos los días. No está fotografiada aquí. La medida se cierra en la conversación.",
  },
  dije: {
    id: "dije",
    tab: "Dije",
    title: "Una piedra sola",
    text: "Umbral es una muestra de dije: una piedra con poco metal alrededor. La esmeralda de la foto es de Muzo, un archivo, no de esta casa.",
  },
  medida: {
    id: "medida",
    tab: "A medida",
    title: "Desde un dibujo",
    text: "Raíz es una muestra de encargo. Parte de un recuerdo o de un dibujo, y el taller lo traduce. El tiempo se dice al inicio.",
  },
};

export const facts = [
  "Casa familiar",
  "Bolivia",
  "Por encargo",
  "Sin local publicado",
  "Oro, plata y piedra",
] as const;

export const verbs = [
  {
    word: "Escuchar",
    text: "Qué se quiere guardar y quién lo va a llevar.",
    picture: pictures.eligio,
  },
  {
    word: "Elegir",
    text: "Metal, piedra y medida. Si algo no convence, se cambia antes de cerrar.",
    picture: pictures.posy,
  },
  {
    word: "Hacer",
    text: "El taller arma, pule y engasta. El tiempo se acuerda al inicio.",
    picture: pictures.taller,
  },
  {
    word: "Entregar",
    text: "La pieza sale con su cuidado: cómo se guarda y cuándo volver a verla.",
    picture: pictures.oroSerpiente,
  },
] as const;

export const gallery = [
  pictures.oroSerpiente,
  pictures.ashmolean,
  pictures.esmeralda,
  pictures.midyat,
  pictures.posy,
  pictures.oroGriego,
] as const;

export function isMetalId(value: string | undefined): value is MetalId {
  return value === "oro" || value === "plata" || value === "piedra";
}

export function readMetal(value: string | string[] | undefined): MetalId {
  const raw = Array.isArray(value) ? value[0] : value;
  return isMetalId(raw) ? raw : "oro";
}
