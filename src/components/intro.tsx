import { pictures } from "@/data/house";

export function Intro() {
  return (
    <section className="intro" id="casa" aria-labelledby="casa-title">
      <div className="intro-copy">
        <h2 id="casa-title">La pieza se encarga</h2>
        <p className="lead-in">
          Joyería López es una casa familiar. No hay una calle publicada, así que el apellido hace de puerta.
        </p>
        <p>
          La pieza se habla antes de hacerse. Quién la va a llevar, en qué momento, y si el metal es oro, plata o una piedra.
        </p>
        <p>
          Si la idea viene de un dibujo o de un recuerdo, el taller parte de ahí. El tiempo se acuerda al inicio, no cuando la pieza ya está armada.
        </p>
        <p>
          Las fotografías son de museos y archivos: anillos antiguos, una esmeralda de Muzo, mesas de orfebre. No son el catálogo de la casa. Sirven para mostrar el oficio mientras no hay vitrina propia.
        </p>
        <p>
          Cuando exista una dirección, se escribe en esta página. El encargo ya se puede{" "}
          <a href="#encargo">dejar abajo</a>.
        </p>
      </div>
      <figure>
        <img
          src={pictures.taller.src}
          alt={pictures.taller.alt}
          width={pictures.taller.width}
          height={pictures.taller.height}
        />
        <figcaption>{pictures.taller.caption}</figcaption>
      </figure>
    </section>
  );
}
