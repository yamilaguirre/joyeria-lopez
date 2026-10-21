"use client";

import { useState } from "react";
import { collections, metals, type MetalFilter } from "@/data/catalog";
import { JewelryArt } from "@/components/jewelry-art";

export function Collections() {
  const [filter, setFilter] = useState<MetalFilter>("Todas");
  const visible =
    filter === "Todas" ? collections : collections.filter((item) => item.metal === filter);

  return (
    <section id="colecciones" className="collections">
      <div className="section-head reveal">
        <p className="eyebrow eyebrow-ink">Colecciones</p>
        <h2>Seis maneras de entrar a la casa.</h2>
        <p>Elige por metal o mira todo el salón. Cada familia va a crecer con el catálogo real.</p>
      </div>

      <div className="filters" role="toolbar" aria-label="Filtrar colecciones">
        {metals.map((metal) => (
          <button
            key={metal}
            type="button"
            className={filter === metal ? "is-on" : undefined}
            aria-pressed={filter === metal}
            onClick={() => setFilter(metal)}
          >
            {metal}
          </button>
        ))}
      </div>

      <div className="collection-grid">
        {visible.map((item) => (
          <article key={item.id} className="collection-card">
            <div className="collection-art">
              <JewelryArt id={`col-${item.id}`} kind={item.art} tone={item.tone} />
            </div>
            <p className="collection-index">{item.index}</p>
            <h3>{item.name}</h3>
            <p className="collection-metal">{item.metal}</p>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
