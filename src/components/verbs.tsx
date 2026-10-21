import { verbs } from "@/data/house";

export function Verbs() {
  return (
    <section className="verbs" id="oficio" aria-label="Cómo se hace un encargo">
      {verbs.map((step) => (
        <article key={step.word} className="panel">
          <img
            src={step.picture.src}
            alt={step.picture.alt}
            width={step.picture.width}
            height={step.picture.height}
          />
          <h2>{step.word}</h2>
          <p>{step.text}</p>
        </article>
      ))}
    </section>
  );
}
