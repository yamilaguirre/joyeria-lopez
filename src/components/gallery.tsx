import { gallery } from "@/data/house";

const pairs = [
  gallery.slice(0, 2),
  gallery.slice(2, 4),
  gallery.slice(4, 6),
];

export function Gallery() {
  return (
    <section className="gallery" id="archivo" aria-labelledby="archivo-title">
      <h2 id="archivo-title">Del archivo</h2>
      <p className="gallery-lead">
        Seis piezas del oficio, con su título verdadero. Ninguna salió de Joyería López.
      </p>
      {pairs.map((pair, index) => (
        <div key={pair[0].src} className={index === 1 ? "pair pair-b" : "pair pair-a"}>
          {pair.map((picture) => (
            <figure key={picture.src}>
              <img
                src={picture.src}
                alt={picture.alt}
                width={picture.width}
                height={picture.height}
              />
              <figcaption>{picture.caption}</figcaption>
            </figure>
          ))}
        </div>
      ))}
    </section>
  );
}
