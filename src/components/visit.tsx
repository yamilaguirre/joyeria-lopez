import { site } from "@/data/site";

export function Visit() {
  return (
    <section className="visit" id="visita" aria-labelledby="visita-title">
      <div>
        <h2 id="visita-title">La tienda</h2>
        <p>
          {site.address}
          <br />
          {site.city}, Bolivia
        </p>
        <p>
          <a href={site.map}>Ver el mapa</a>
        </p>
      </div>
      <div>
        <h2>Horario</h2>
        <dl className="hours">
          {site.hours.map((row) => (
            <div key={row.day}>
              <dt>{row.day}</dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h2>Teléfonos</h2>
        <ul className="phone-list">
          {site.phones.map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`}>{phone.number}</a>
              <span>{phone.label}</span>
            </li>
          ))}
        </ul>
        <p>
          <a href={`sms:${site.sms}`}>Escribir al {site.phones[2].number}</a>
        </p>
      </div>
    </section>
  );
}
