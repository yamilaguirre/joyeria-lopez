import { site } from "@/data/site";
import { departments } from "@/data/vitrina";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">López</p>
          <p>
            {site.people}. Joyería en {site.city}, en {site.address}.
          </p>
        </div>
        <details className="footer-col">
          <summary>Explorar</summary>
          {departments.map((department) => (
            <a key={department.id} href={`#${department.id}`}>
              {department.label}
            </a>
          ))}
        </details>
        <details className="footer-col">
          <summary>La casa</summary>
          <a href="#casa">Cómo trabaja</a>
          <a href="#visita">Dirección y horario</a>
          <a href="#movimiento">En movimiento</a>
          <a href="#encargo">Dejar un encargo</a>
        </details>
        <details className="footer-col">
          <summary>Horario</summary>
          {site.hours.map((row) => (
            <p key={row.day}>
              {row.day}: {row.time}
            </p>
          ))}
          {site.phones.map((phone) => (
            <a key={phone.tel} href={`tel:${phone.tel}`}>
              {phone.number}
              {phone.label === "Principal" ? " · principal" : ""}
            </a>
          ))}
        </details>
      </div>
      <p className="credits">Las fotos y los videos son de Joyería López. La pieza se encarga en la tienda; esta página no cobra.</p>
    </footer>
  );
}
