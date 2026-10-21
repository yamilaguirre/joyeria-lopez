export const metals = ["Todas", "Oro", "Plata", "Piedras", "A medida"] as const;

export type MetalFilter = (typeof metals)[number];
export type ArtKind = "ring" | "necklace" | "earrings" | "bracelet" | "stone" | "bespoke";
export type MetalTone = "gold" | "silver";

export type Collection = {
  id: string;
  name: string;
  metal: Exclude<MetalFilter, "Todas">;
  summary: string;
  art: ArtKind;
  tone: MetalTone;
};

export type Piece = {
  id: string;
  name: string;
  family: string;
  metal: string;
  line: string;
  art: ArtKind;
  tone: MetalTone;
};

export const collections: Collection[] = [
  {
    id: "alianzas",
    name: "Alianzas",
    metal: "Oro",
    summary: "El círculo que se lleva todos los días, con un perfil que no molesta en la mano.",
    art: "ring",
    tone: "gold",
  },
  {
    id: "collares",
    name: "Collares",
    metal: "Plata",
    summary: "Cadenas y dijes con peso justo: ni un hilo frágil ni una pieza que canse.",
    art: "necklace",
    tone: "silver",
  },
  {
    id: "aros",
    name: "Aros",
    metal: "Piedras",
    summary: "Del punto de luz mínimo a la piedra que se quiere ver de frente.",
    art: "earrings",
    tone: "gold",
  },
  {
    id: "pulseras",
    name: "Pulseras",
    metal: "Oro",
    summary: "Eslabones cortos y brazaletes cerrados para la muñeca.",
    art: "bracelet",
    tone: "gold",
  },
  {
    id: "piedras",
    name: "Piedras",
    metal: "Piedras",
    summary: "Esmeraldas, circones y perlas, elegidas una por una y no por lote.",
    art: "stone",
    tone: "silver",
  },
  {
    id: "medida",
    name: "A medida",
    metal: "A medida",
    summary: "Una idea tuya, dibujada en el taller hasta que la pieza cierra.",
    art: "bespoke",
    tone: "gold",
  },
];

export const pieces: Piece[] = [
  {
    id: "solenne",
    name: "Solenne",
    family: "Alianza",
    metal: "Oro 18k",
    line: "Perfil cóncavo, interior cómodo y un brillo suave que no grita.",
    art: "ring",
    tone: "gold",
  },
  {
    id: "lia",
    name: "Lía",
    family: "Collar",
    metal: "Plata 925",
    line: "Cadena fina con un dije pequeño, pensada para no sacarse.",
    art: "necklace",
    tone: "silver",
  },
  {
    id: "bruma",
    name: "Bruma",
    family: "Aros",
    metal: "Circonia",
    line: "Dos luces cortas. Se mueven poco y se notan de cerca.",
    art: "earrings",
    tone: "silver",
  },
  {
    id: "nudo",
    name: "Nudo",
    family: "Pulsera",
    metal: "Oro",
    line: "Un cierre limpio y un cuerpo que se apoya, no que aprieta.",
    art: "bracelet",
    tone: "gold",
  },
  {
    id: "raiz",
    name: "Raíz",
    family: "A medida",
    metal: "Encargo",
    line: "Parte de un recuerdo o de un dibujo. El taller lo traduce a metal.",
    art: "bespoke",
    tone: "gold",
  },
  {
    id: "umbral",
    name: "Umbral",
    family: "Dije",
    metal: "Piedra",
    line: "Una piedra central, sostenida con la menor cantidad de metal posible.",
    art: "stone",
    tone: "gold",
  },
];

export const craftSteps = [
  {
    title: "Escuchar",
    text: "Qué se quiere guardar, quién lo va a llevar y en qué momento de la vida entra la pieza.",
  },
  {
    title: "Elegir",
    text: "Metal, piedra y medida. Si algo no convence en la mano, se cambia antes de cerrar.",
  },
  {
    title: "Hacer",
    text: "El taller arma, pule y engasta. El tiempo se acuerda al inicio, no al final.",
  },
  {
    title: "Entregar",
    text: "La pieza sale con su cuidado: cómo se guarda, cómo se limpia y cuándo volver a verla.",
  },
] as const;

export const marqueeItems = [
  "Oro 18k",
  "Plata 925",
  "Alianzas",
  "Piedras",
  "Encargos",
  "Casa familiar",
  "Hecho para durar",
] as const;
