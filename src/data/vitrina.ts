export function media(file: string) {
  return `/Joyeria%20Lopez/${encodeURIComponent(file)}`;
}

export const departmentIds = ["promocion", "alianzas", "anillos", "cadenas", "reconocimientos"] as const;
export type DepartmentId = (typeof departmentIds)[number];

export type Department = {
  id: DepartmentId;
  label: string;
  title: [string, string];
  line: string;
  file: string;
  alt: string;
};

export const departments: Department[] = [
  {
    id: "promocion",
    label: "Promoción",
    title: ["Anillos de", "promoción"],
    line: "Escudo, año y nombre, grabados para la promoción.",
    file: "PHOTO-2026-04-10-17-21-09.jpg",
    alt: "Anillo de promoción con un birrete grabado, sobre una rosa blanca en la vitrina.",
  },
  {
    id: "alianzas",
    label: "Alianzas",
    title: ["Alianzas", "con nombre"],
    line: "Pares anchos, con nombre o con relieve, para llevar juntos.",
    file: "PHOTO-2026-04-10-17-21-18.jpg",
    alt: "Dos alianzas anchas de oro con un nombre grabado en cada una.",
  },
  {
    id: "anillos",
    label: "Anillos",
    title: ["Anillos", "grabados"],
    line: "Oro de 18 kilates, con escudo, piedra o un dibujo del taller.",
    file: "PHOTO-2026-05-15-16-21-52.jpg",
    alt: "Anillo ancho de oro grabado, sobre tela clara.",
  },
  {
    id: "cadenas",
    label: "Cadenas",
    title: ["Cadenas", "y dijes"],
    line: "Cadenas y dijes con el nombre que se pide.",
    file: "PHOTO-2026-05-15-16-21-51.jpg",
    alt: "Varias cadenas con dijes de nombre, sobre tela clara.",
  },
  {
    id: "reconocimientos",
    label: "Reconocimientos",
    title: ["Grabado", "a láser"],
    line: "Placas y reconocimientos para empresas, colegios e instituciones.",
    file: "PHOTO-2026-04-10-17-21-14 3.jpg",
    alt: "Reconocimientos de vidrio grabados, en la vitrina de la joyería.",
  },
];

export type VitrinaPiece = {
  id: string;
  group: DepartmentId;
  file: string;
  alt: string;
  caption: string;
  detail: string;
};

const piece = (
  id: string,
  group: DepartmentId,
  file: string,
  alt: string,
  caption: string,
  detail: string,
): VitrinaPiece => ({ id, group, file, alt, caption, detail });

export const pieces: VitrinaPiece[] = [
  piece(
    "promo-birrete",
    "promocion",
    "PHOTO-2026-04-10-17-21-09.jpg",
    "Anillo negro y dorado con un birrete grabado, sobre una rosa blanca.",
    "Anillo de promoción con birrete",
    "Pieza de la casa. El año y el nombre se graban para cada promoción.",
  ),
  piece(
    "promo-colegio",
    "promocion",
    "PHOTO-2026-04-10-17-21-10 4.jpg",
    "Anillo de oro con el escudo de un colegio, sobre una rosa blanca.",
    "Anillo de promoción con escudo de colegio",
    "Pieza de la casa, en la vitrina de Oruro.",
  ),
  piece(
    "promo-escudo",
    "promocion",
    "PHOTO-2026-04-10-17-21-12.jpg",
    "Anillo de promoción con escudo, sobre fondo rojo.",
    "Anillo de promoción con escudo",
    "Pieza de la casa. Oro grabado para una promoción.",
  ),
  piece(
    "promo-esmalte",
    "promocion",
    "PHOTO-2026-04-10-17-21-12 4.jpg",
    "Anillo de promoción con esmalte rojo, sobre fondo rojo.",
    "Anillo de promoción con esmalte",
    "Pieza de la casa.",
  ),
  piece(
    "promo-piedras",
    "promocion",
    "PHOTO-2026-04-10-17-21-12 3.jpg",
    "Anillo de oro con escudo y tres piedras de color, sobre tela rosa.",
    "Anillo de promoción con piedras",
    "Pieza de la casa.",
  ),
  piece(
    "promo-monograma",
    "promocion",
    "PHOTO-2026-04-10-17-21-13.jpg",
    "Anillo de promoción con monograma, sobre fondo rojo.",
    "Anillo de promoción con monograma",
    "Pieza de la casa.",
  ),
  piece(
    "promo-jap",
    "promocion",
    "PHOTO-2026-04-10-17-21-13 3.jpg",
    "Anillo de oro con un escudo ovalado, sobre tela rosa.",
    "Anillo de promoción con iniciales",
    "Pieza de la casa.",
  ),
  piece(
    "promo-vitrina",
    "promocion",
    "PHOTO-2026-04-10-17-21-18 2.jpg",
    "Anillo visto desde arriba, sobre un soporte en la vitrina.",
    "Anillo de promoción en la vitrina",
    "Pieza de la casa, en el local de Oruro.",
  ),
  piece(
    "par-relieve",
    "alianzas",
    "PHOTO-2026-05-15-16-21-53 3.jpg",
    "Dos anillos anchos de oro con figuras en relieve, sobre una rosa blanca.",
    "Par de anillos con relieve",
    "Pieza de la casa. Un par ancho, con el dibujo que se encarga.",
  ),
  piece(
    "par-nombre",
    "alianzas",
    "PHOTO-2026-04-10-17-21-18.jpg",
    "Dos alianzas anchas de oro, cada una con un nombre grabado.",
    "Alianzas con nombre",
    "Pieza de la casa. El nombre se graba en el ancho del anillo.",
  ),
  piece(
    "anillo-ancho",
    "anillos",
    "PHOTO-2026-05-15-16-21-52.jpg",
    "Anillo ancho de oro con grabados, sobre tela clara.",
    "Anillo ancho grabado",
    "Pieza de la casa, en oro.",
  ),
  piece(
    "anillo-piedra",
    "anillos",
    "PHOTO-2026-04-16-16-03-41 2.jpg",
    "Anillo de oro con una piedra clara al centro, sobre tela clara.",
    "Anillo con piedra",
    "Pieza de la casa.",
  ),
  piece(
    "anillo-martillo",
    "anillos",
    "PHOTO-2026-04-12-22-13-56 2.jpg",
    "Anillo de oro con un escudo y tres piedras de color, en un estuche.",
    "Anillo con escudo y piedras",
    "Pieza de la casa.",
  ),
  piece(
    "anillo-escudo",
    "anillos",
    "PHOTO-2026-04-10-17-21-14.jpg",
    "Anillo de oro con un escudo grabado, dentro de un estuche oscuro.",
    "Anillo con escudo grabado",
    "Pieza de la casa. El escudo se graba a pedido.",
  ),
  piece(
    "aros",
    "anillos",
    "PHOTO-2026-04-12-22-13-56 4.jpg",
    "Aros largos de oro con piedras, sobre un paño blanco.",
    "Aros con piedras",
    "Pieza de la casa.",
  ),
  piece(
    "cadenas-nombres",
    "cadenas",
    "PHOTO-2026-05-15-16-21-51.jpg",
    "Varias cadenas con dijes de nombre, sobre tela clara.",
    "Cadenas con nombre",
    "Pieza de la casa. El dije lleva el nombre que se pide.",
  ),
  piece(
    "dije-perlas",
    "cadenas",
    "PHOTO-2026-05-15-16-21-54 3.jpg",
    "Dije de nombre en oro, con tres perlas, sobre tela gris.",
    "Dije de nombre con perlas",
    "Pieza de la casa.",
  ),
  piece(
    "dije-dos-metales",
    "cadenas",
    "PHOTO-2026-05-15-16-21-54.jpg",
    "Dos dijes de nombre, uno en oro y otro en plata.",
    "Dije de nombre en oro y en plata",
    "Pieza de la casa. El mismo nombre se puede hacer en los dos metales.",
  ),
  piece(
    "pulsera",
    "cadenas",
    "PHOTO-2026-05-15-16-21-54 2.jpg",
    "Pulsera de eslabones con una placa grabada, sobre tela clara.",
    "Pulsera con placa",
    "Pieza de la casa.",
  ),
  piece(
    "dije-calado",
    "cadenas",
    "PHOTO-2026-04-12-22-13-56.jpg",
    "Dije calado de nombre, sobre un paño blanco.",
    "Dije de nombre calado",
    "Pieza de la casa.",
  ),
  piece(
    "dije-estuche",
    "cadenas",
    "PHOTO-2026-04-12-22-13-56 3.jpg",
    "Cadena de oro con un dije de nombre, dentro del estuche de Joyería López.",
    "Dije de nombre en su estuche",
    "Pieza de la casa. El estuche lleva el nombre de Joyería López.",
  ),
  piece(
    "placas",
    "reconocimientos",
    "PHOTO-2026-04-10-17-21-14 3.jpg",
    "Varios reconocimientos de vidrio grabados, sobre el mostrador de la joyería.",
    "Reconocimientos grabados a láser",
    "Trabajo de la casa para colegios, juntas y empresas. La placa se graba a láser.",
  ),
];

export function pieceSrc(item: { file: string }) {
  return media(item.file);
}

export function pieceHaystack(item: VitrinaPiece) {
  const department = departments.find((entry) => entry.id === item.group);
  return `${item.caption} ${item.alt} ${item.detail} ${department?.label ?? ""} ${department?.line ?? ""}`.toLowerCase();
}

export const clips = [
  {
    file: "VIDEO-2026-05-10-13-06-21.mp4",
    poster: "PHOTO-2026-05-15-16-21-52.jpg",
    caption: "Pieza de la casa, en video",
  },
  {
    file: "VIDEO-2026-04-12-21-56-50.mp4",
    poster: "PHOTO-2026-04-12-22-13-56 3.jpg",
    caption: "Otra pieza en movimiento",
  },
  {
    file: "VIDEO-2026-04-10-15-46-55.mp4",
    poster: "PHOTO-2026-04-10-17-21-09.jpg",
    caption: "Video de la casa",
  },
  {
    file: "VIDEO-2026-04-12-21-56-51.mp4",
    poster: "PHOTO-2026-04-16-16-03-41 2.jpg",
    caption: "Más piezas en movimiento",
  },
] as const;
