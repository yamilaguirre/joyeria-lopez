import { pieceSrc, departments } from "@/data/vitrina";
import { site } from "@/data/site";

export function Intro() {
  const photo = departments[3];
  return (
    <section className="intro" id="casa" aria-labelledby="casa-title">
      <div className="intro-copy">
        <h2 id="casa-title">La casa en Oruro</h2>
        <p className="lead-in">
          {site.people}. Más de tres décadas de joyería en el centro de Oruro, para clientes de Bolivia y del extranjero.
        </p>
        <p>
          El taller hace piezas en oro de 18 kilates y en plata. El grabado láser sirve para un nombre, un escudo, una promoción o un reconocimiento de empresa o colegio.
        </p>
        <p>
          La pieza se habla antes de hacerse. Quién la va a llevar, en qué momento, y si el metal es oro o plata. El tiempo se acuerda al inicio.
        </p>
        <p>
          La tienda está en {site.address}, {site.city}. El horario y los teléfonos están{" "}
          <a href="#visita">más abajo</a>.
        </p>
      </div>
      <figure>
        <img src={pieceSrc(photo)} alt={photo.alt} />
        <figcaption>Cadenas y dijes hechos en la casa.</figcaption>
      </figure>
    </section>
  );
}
