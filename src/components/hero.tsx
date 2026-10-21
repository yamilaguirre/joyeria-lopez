"use client";

import { facts, metals, pictures, type MetalId } from "@/data/house";
import { useHouse } from "@/components/house-state";

const links = [
  { href: "#oficio", label: "Oficio" },
  { href: "#vitrina", label: "Vitrina" },
  { href: "#archivo", label: "Archivo" },
  { href: "#encargo", label: "Encargo" },
] as const;

const swatches: { id: MetalId | "medida"; label: string; href: string }[] = [
  { id: "oro", label: "Oro", href: "?metal=oro#portada" },
  { id: "plata", label: "Plata", href: "?metal=plata#portada" },
  { id: "piedra", label: "Piedra", href: "?metal=piedra#portada" },
  { id: "medida", label: "Medida", href: "#encargo" },
];

export function Hero() {
  const { metal, setPiece, chooseMetal } = useHouse();
  const current = metals[metal];

  return (
    <section className="hero" id="portada" aria-label="Joyería López">
      <div className="name-band">
        <h1>López</h1>
      </div>
      <nav className="links" aria-label="Secciones">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="rails">
        <div className="rail-left">
          <figure className="portrait">
            <img
              src={pictures.oroSerpiente.src}
              alt={pictures.oroSerpiente.alt}
              width={pictures.oroSerpiente.width}
              height={pictures.oroSerpiente.height}
            />
          </figure>
          <ul className="facts">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        <div className="stage">
          <img
            key={current.id}
            src={current.picture.src}
            alt={current.picture.alt}
            width={current.picture.width}
            height={current.picture.height}
          />
          <div className="statement">
            <p aria-live="polite">{current.statement}</p>
            <p className="archive-note">La foto es de archivo. No es una pieza de la casa.</p>
          </div>
        </div>
        <div className="rail-right">
          {swatches.map((swatch) =>
            swatch.id === "medida" ? (
              <a
                key={swatch.id}
                className="swatch swatch-medida"
                href={swatch.href}
                onClick={(event) => {
                  event.preventDefault();
                  setPiece("medida");
                  document.getElementById("encargo")?.scrollIntoView();
                }}
              >
                {swatch.label}
              </a>
            ) : (
              <a
                key={swatch.id}
                className="swatch"
                href={swatch.href}
                aria-current={metal === swatch.id ? "true" : undefined}
                onClick={(event) => chooseMetal(event, swatch.id as MetalId)}
              >
                {swatch.label}
              </a>
            ),
          )}
          <a className="swatch action" href="#encargo">
            Encargar
          </a>
        </div>
      </div>
    </section>
  );
}
