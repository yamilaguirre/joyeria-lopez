"use client";

import { gallery, metalIds, metals, pictures, pieces, pieceIds, type MetalId, type Picture, type PieceId } from "@/data/house";
import { Drawer } from "@/components/drawer";
import { useHouse } from "@/components/house-state";

const tiles: { id: string; label: string; src: string; alt: string; metal?: MetalId; piece?: PieceId }[] = [
  { id: "oro", label: "Oro", src: pictures.oroGriego.src, alt: pictures.oroGriego.alt, metal: "oro" },
  { id: "plata", label: "Plata", src: pictures.ashmolean.src, alt: pictures.ashmolean.alt, metal: "plata" },
  { id: "piedra", label: "Piedra", src: pictures.esmeralda.src, alt: pictures.esmeralda.alt, metal: "piedra" },
  { id: "alianza", label: "Alianzas", src: pictures.oroSerpiente.src, alt: pictures.oroSerpiente.alt, piece: "alianza" },
  { id: "dije", label: "Dijes", src: pictures.midyat.src, alt: pictures.midyat.alt, piece: "dije" },
];

export function Showcase() {
  const { query, setMetal, setPiece, piece, active, setActive, addToList, list } = useHouse();
  const needle = query.trim().toLowerCase();
  const items = gallery.filter((picture) => {
    if (!needle) return true;
    return `${picture.caption} ${picture.alt}`.toLowerCase().includes(needle);
  });

  return (
    <section className="showcase" id="vitrina" aria-labelledby="vitrina-title">
      <div className="section-head">
        <h2 id="vitrina-title">Por categoría</h2>
      </div>
      <div className="tiles">
        {tiles.map((tile) => (
          <a
            key={tile.id}
            href={tile.metal ? `?metal=${tile.metal}#portada` : "#archivo"}
            onClick={(event) => {
              if (tile.metal) {
                event.preventDefault();
                setMetal(tile.metal);
                document.getElementById("portada")?.scrollIntoView();
              }
              if (tile.piece) setPiece(tile.piece);
            }}
          >
            <span className="tile-frame">
              <img src={tile.src} alt={tile.alt} />
            </span>
            <span>{tile.label}</span>
          </a>
        ))}
      </div>

      <div className="section-head" id="oficio">
        <h2>Del archivo</h2>
        <div className="tabs" role="tablist" aria-label="Tipo de pieza">
          {pieceIds.map((id) => (
            <button key={id} type="button" role="tab" aria-selected={piece === id} onClick={() => setPiece(id)}>
              {pieces[id].tab}
            </button>
          ))}
        </div>
      </div>
      <p className="section-lead">{pieces[piece].text}</p>
      <div className="grid" id="archivo">
        {items.length === 0 ? (
          <p className="empty">Nada coincide con “{query.trim()}”.</p>
        ) : (
          items.map((picture) => (
            <figure key={picture.src} className="product">
              <button type="button" onClick={() => setActive(picture)}>
                <img src={picture.src} alt={picture.alt} width={picture.width} height={picture.height} />
                <span className="quick">Ver ficha</span>
              </button>
              <figcaption>
                <strong>{picture.caption}</strong>
                <span>Por encargo</span>
              </figcaption>
            </figure>
          ))
        )}
      </div>
      <p className="rail-note">Ninguna de estas fotos salió de Joyería López.</p>
      <p className="metals-line">
        {metalIds.map((id) => metals[id].label).join(" · ")}
      </p>
      <PieceSheet picture={active} onClose={() => setActive(null)} listed={active ? list.some((item) => item.src === active.src) : false} onAdd={addToList} />
    </section>
  );
}

function PieceSheet({
  picture,
  listed,
  onClose,
  onAdd,
}: {
  picture: Picture | null;
  listed: boolean;
  onClose: () => void;
  onAdd: (item: Pick<Picture, "src" | "caption" | "alt">) => void;
}) {
  return (
    <Drawer open={picture !== null} title="Ficha de archivo" onClose={onClose}>
      {picture ? (
        <>
          <img className="sheet-photo" src={picture.src} alt={picture.alt} />
          <p className="sheet-caption">{picture.caption}</p>
          <p>
            {picture.credit}. Licencia {picture.license}. Esta foto no es una pieza de Joyería López.
          </p>
          <a href={picture.page}>Ver la ficha original</a>
          <button
            type="button"
            className="btn-dark"
            onClick={() => onAdd({ src: picture.src, caption: picture.caption, alt: picture.alt })}
          >
            {listed ? "Ya está en el encargo" : "Sumar al encargo"}
          </button>
        </>
      ) : null}
    </Drawer>
  );
}
