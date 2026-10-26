"use client";

import { departments, pieces, pieceHaystack, pieceSrc, type VitrinaPiece } from "@/data/vitrina";
import { Drawer } from "@/components/drawer";
import { useHouse } from "@/components/house-state";

export function Showcase() {
  const { query, active, setActive, addToList, list } = useHouse();
  const needle = query.trim().toLowerCase();
  const visible = needle
    ? pieces.filter((item) => pieceHaystack(item).includes(needle))
    : pieces;

  return (
    <section className="showcase" id="vitrina" aria-labelledby="vitrina-title">
      <div className="section-head">
        <h2 id="vitrina-title">Por categoría</h2>
      </div>
      <div className="tiles">
        {departments.map((department) => (
          <a key={department.id} href={`#${department.id}`}>
            <span className="tile-frame">
              <img src={pieceSrc(department)} alt="" />
            </span>
            <span>{department.label}</span>
          </a>
        ))}
      </div>

      {departments.map((department) => {
        const items = visible.filter((item) => item.group === department.id);
        if (needle && items.length === 0) return null;
        return (
          <div key={department.id} id={department.id}>
            <div className="section-head">
              <h2>{department.label}</h2>
            </div>
            <p className="section-lead">{department.line}</p>
            {items.length === 0 ? (
              <p className="empty">En este apartado todavía no hay una foto publicada.</p>
            ) : (
              <div className="grid">
                {items.map((item) => (
                  <figure key={item.id} className="product">
                    <button
                      type="button"
                      onClick={() =>
                        setActive({
                          src: pieceSrc(item),
                          alt: item.alt,
                          caption: item.caption,
                          detail: item.detail,
                        })
                      }
                    >
                      <img src={pieceSrc(item)} alt={item.alt} />
                      <span className="quick">Ver ficha</span>
                    </button>
                    <figcaption>
                      <strong>{item.caption}</strong>
                      <span>Por encargo</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {needle && visible.length === 0 ? <p className="empty">Nada coincide con “{query.trim()}”.</p> : null}

      <PieceSheet
        piece={active}
        onClose={() => setActive(null)}
        listed={active ? list.some((item) => item.src === active.src) : false}
        onAdd={addToList}
      />
    </section>
  );
}

function PieceSheet({
  piece,
  listed,
  onClose,
  onAdd,
}: {
  piece: { src: string; alt: string; caption: string; detail: string } | null;
  listed: boolean;
  onClose: () => void;
  onAdd: (item: Pick<VitrinaPiece, never> & { src: string; caption: string; alt: string }) => void;
}) {
  return (
    <Drawer open={piece !== null} title="Ficha" onClose={onClose}>
      {piece ? (
        <>
          <img className="sheet-photo" src={piece.src} alt={piece.alt} />
          <p className="sheet-caption">{piece.caption}</p>
          <p>{piece.detail}</p>
          <button
            type="button"
            className="btn-dark"
            onClick={() => onAdd({ src: piece.src, caption: piece.caption, alt: piece.alt })}
          >
            {listed ? "Ya está en el encargo" : "Sumar al encargo"}
          </button>
        </>
      ) : null}
    </Drawer>
  );
}
