const links = [
  { href: "#casa", label: "La casa" },
  { href: "#colecciones", label: "Colecciones" },
  { href: "#vitrina", label: "Vitrina" },
  { href: "#oficio", label: "Oficio" },
  { href: "#encargo", label: "Encargo" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#portada">
        <span className="brand-mark" aria-hidden="true">
          JL
        </span>
        <span className="brand-name">Joyería López</span>
      </a>

      <nav className="nav-desktop" aria-label="Secciones">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <details className="nav-mobile">
        <summary>Menú</summary>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </details>

      <a className="header-cta" href="#encargo">
        Encargar
      </a>
    </header>
  );
}
