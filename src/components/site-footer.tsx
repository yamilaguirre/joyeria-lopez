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
      <div className="footer-top">
        <div>
          <h2>
            Cuéntanos
            <br />
            la pieza
          </h2>
          <a className="footer-action" href="#encargo">
            Encargar
          </a>
        </div>
        <nav aria-label="Pie de página">
          <a href="#oficio">Oficio</a>
          <a href="#vitrina">Vitrina</a>
          <a href="#archivo">Archivo</a>
          <a href="#encargo">Encargo</a>
        </nav>
      </div>
      <div className="footer-end">
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
        <p className="wordmark" aria-hidden="true">
          Joyería López
        </p>
      </div>
    </footer>
  );
}
