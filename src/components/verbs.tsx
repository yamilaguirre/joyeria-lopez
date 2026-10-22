import { verbs } from "@/data/house";

export function Verbs() {
  return (
    <section className="steps" id="oficio" aria-labelledby="oficio-title">
      <div className="section-head">
        <h2 id="oficio-title">Cómo se encarga</h2>
      </div>
      <div className="step-grid">
        {verbs.map((step) => (
          <article key={step.word}>
            <img src={step.picture.src} alt={step.picture.alt} width={step.picture.width} height={step.picture.height} />
            <h3>{step.word}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
