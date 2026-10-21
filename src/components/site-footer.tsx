import { site } from "@/data/site";

export function SiteFooter() {
  const instagram = site.instagram ? `https://instagram.com/${site.instagram}` : null;
  const mail = site.email ? `mailto:${site.email}` : null;

  return (
    <footer className="site-footer">
      <div>
        <p className="brand-mark" aria-hidden="true">
          JL
        </p>
        <p className="footer-name">Joyería López</p>
        <p>Casa familiar de joyas · {site.place}</p>
      </div>
      <nav aria-label="Pie de página">
        <a href="#casa">La casa</a>
        <a href="#colecciones">Colecciones</a>
        <a href="#vitrina">Vitrina</a>
        <a href="#oficio">Oficio</a>
        <a href="#encargo">Encargo</a>
      </nav>
      <div className="footer-meta">
        {instagram ? (
          <a href={instagram} target="_blank" rel="noreferrer">
            @{site.instagram}
          </a>
        ) : (
          <span>Instagram de la casa, pronto</span>
        )}
        {mail ? <a href={mail}>{site.email}</a> : null}
      </div>
    </footer>
  );
}
