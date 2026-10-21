import { craftSteps } from "@/data/catalog";

export function Craft() {
  return (
    <section id="oficio" className="craft">
      <div className="section-head reveal">
        <p className="eyebrow eyebrow-ink">El oficio</p>
        <h2>De la conversación a la mano.</h2>
        <p>Cuatro pasos. Ninguno se salta, aunque la pieza parezca simple.</p>
      </div>
      <ol className="craft-list">
        {craftSteps.map((step) => (
          <li key={step.index} className="reveal">
            <span>{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
