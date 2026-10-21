/**
 * Datos de la casa. Cuando tengas teléfono, dirección o redes,
 * se cambian aquí y la página los muestra sola.
 */
export const site = {
  name: "Joyería López",
  place: "Bolivia",
  /** Solo dígitos, con código de país. Ejemplo: "59170000000". */
  whatsapp: "",
  /** Usuario sin @. */
  instagram: "",
  email: "",
  address: "",
  hours: "",
} as const;

export function whatsappLink(message: string) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
