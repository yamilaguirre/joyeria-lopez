/**
 * Datos publicados por la casa: ficha de la tienda, teléfonos y horario.
 * La fecha de apertura no está escrita; no se inventa un año.
 */
export const site = {
  name: "Joyería López",
  place: "Oruro, Bolivia",
  people: "Raúl Aguirre y Rossio López de Aguirre e hijos",
  address: "Adolfo Mier, entre Potosí y 6 de Octubre",
  city: "Oruro",
  map: "https://www.google.com/maps/search/?api=1&query=Adolfo+Mier+entre+Potosi+y+6+de+octubre+Oruro+Bolivia",
  hours: [
    { day: "Lunes a sábado", time: "8:30 a 12:30 y 14:30 a 20:30" },
    { day: "Domingo", time: "Cerrada" },
  ],
  phones: [
    { label: "Principal", number: "74523318", tel: "+59174523318" },
    { label: "", number: "72497091", tel: "+59172497091" },
    { label: "Mensajes", number: "69597517", tel: "+59169597517" },
  ],
  sms: "+59169597517",
  /** Solo dígitos, con código de país. Vacío hasta que la casa publique WhatsApp. */
  whatsapp: "",
  instagram: "",
  email: "",
} as const;

export function whatsappLink(message: string) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
