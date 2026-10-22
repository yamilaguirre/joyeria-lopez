import { pictures } from "@/data/house";

const used = [
  pictures.oroGriego,
  pictures.oroSerpiente,
  pictures.ashmolean,
  pictures.esmeralda,
  pictures.midyat,
  pictures.posy,
  pictures.eligio,
  pictures.taller,
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">López</p>
          <p>Casa familiar de joyas en Bolivia. La pieza se encarga en una conversación.</p>
        </div>
        <details className="footer-col">
          <summary>Explorar</summary>
          <a href="#vitrina">Piezas</a>
          <a href="?metal=oro#portada">Oro</a>
          <a href="?metal=plata#portada">Plata</a>
          <a href="?metal=piedra#portada">Piedra</a>
        </details>
        <details className="footer-col">
          <summary>La casa</summary>
          <a href="#casa">Cómo trabaja</a>
          <a href="#oficio">El archivo</a>
          <a href="#encargo">Dejar un encargo</a>
        </details>
        <details className="footer-col">
          <summary>Encargo</summary>
          <p>Dirección, horario y correo se publican cuando la casa los tenga.</p>
        </details>
      </div>
      <p className="credits">
        Imágenes de archivo, no de la casa.{" "}
        {used.map((picture, index) => (
          <span key={picture.src}>
            {index > 0 ? " " : null}
            <a href={picture.page}>{picture.caption}</a> {picture.credit}.{" "}
            <a href={picture.licenseUrl}>{picture.license}</a>.
          </span>
        ))}
      </p>
    </footer>
  );
}
