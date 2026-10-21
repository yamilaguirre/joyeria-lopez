"use client";

import { metals, pieces, pieceIds, type PieceId } from "@/data/house";
import { useHouse } from "@/components/house-state";

export function Showcase() {
  const { metal, piece, setPiece } = useHouse();
  const current = pieces[piece];
  const photo = metals[metal].picture;

  return (
    <section className="showcase" id="vitrina" aria-labelledby="vitrina-title">
      <figure className="plate">
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
        />
      </figure>
      <div className="showcase-copy">
        <div className="tabs" role="tablist" aria-label="Tipo de pieza">
          {pieceIds.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={piece === id}
              onClick={() => setPiece(id as PieceId)}
            >
              {pieces[id].tab}
            </button>
          ))}
        </div>
        <div className="showcase-text">
          <h2 id="vitrina-title">{current.title}</h2>
          <p>{current.text}</p>
        </div>
        <div className="cells">
          <a
            href="#encargo"
            onClick={() => setPiece(piece)}
          >
            Encargar esta
          </a>
          <a href="#oficio">Ver el oficio</a>
        </div>
      </div>
    </section>
  );
}
