import { clips, media } from "@/data/vitrina";

export function Clips() {
  return (
    <section className="clips" id="movimiento" aria-labelledby="movimiento-title">
      <div className="section-head">
        <h2 id="movimiento-title">En movimiento</h2>
      </div>
      <p className="section-lead">Videos de las piezas. El sonido empieza solo si le das a reproducir.</p>
      <div className="grid clips-grid">
        {clips.map((clip) => (
          <figure key={clip.file} className="product">
            <video controls playsInline preload="metadata" poster={media(clip.poster)}>
              <source src={media(clip.file)} type="video/mp4" />
            </video>
            <figcaption>
              <strong>{clip.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
