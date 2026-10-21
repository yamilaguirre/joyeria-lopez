"use client";

import { useState } from "react";
import { pieces } from "@/data/catalog";
import { JewelryArt } from "@/components/jewelry-art";

export function Vitrina() {
  const [activeId, setActiveId] = useState(pieces[0].id);
  const active = pieces.find((piece) => piece.id === activeId) ?? pieces[0];

  return (
    <section id="vitrina" className="vitrina">
      <div className="section-head section-head-light reveal">
        <p className="eyebrow">Vitrina de muestra</p>
        <h2>Una pieza a la vez.</h2>
        <p>
          Estos nombres componen el primer salón. Cuando llegue el catálogo de la casa,
          cada tarjeta se reemplaza por una joya real.
        </p>
      </div>

      <div className="vitrina-layout">
        <div className="stage" aria-live="polite">
          <div className="stage-disc">
            <div className="jewel-float" key={active.id}>
              <JewelryArt id={`stage-${active.id}`} kind={active.art} tone={active.tone} />
            </div>
          </div>
          <p className="stage-kicker">{active.family}</p>
          <h3>{active.name}</h3>
          <p className="stage-metal">{active.metal}</p>
          <p className="stage-line">{active.line}</p>
        </div>

        <div className="piece-list" role="tablist" aria-label="Piezas de muestra">
          {pieces.map((piece) => {
            const selected = piece.id === active.id;
            return (
              <button
                key={piece.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "is-on" : undefined}
                onClick={() => setActiveId(piece.id)}
              >
                <span className="piece-thumb">
                  <JewelryArt id={`thumb-${piece.id}`} kind={piece.art} tone={piece.tone} />
                </span>
                <span>
                  <strong>{piece.name}</strong>
                  <small>
                    {piece.family} · {piece.metal}
                  </small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
