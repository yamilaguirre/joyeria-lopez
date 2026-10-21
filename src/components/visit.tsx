"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";

type Draft = {
  name: string;
  piece: string;
  message: string;
};

export function Visit() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  const whatsapp = whatsappLink("Hola, quiero encargar una pieza en Joyería López.");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const piece = String(form.get("piece") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !message) {
      setError("Deja tu nombre y qué estás buscando.");
      return;
    }

    setError("");
    setDraft({ name, piece, message });
  }

  return (
    <section id="encargo" className="visit">
      <div className="visit-card">
        <div className="visit-copy reveal">
          <p className="eyebrow eyebrow-ink">Encargo</p>
          <h2>Cuéntanos la pieza.</h2>
          <p>
            Puede ser una alianza, un regalo o una idea que todavía no tiene forma.
            La casa responde para afinar metal, piedra y cita.
          </p>

          <dl className="visit-facts">
            <div>
              <dt>Lugar</dt>
              <dd>{site.place}</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>{site.address || "La publicamos al confirmarla"}</dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>{site.hours || "Lo publicamos al confirmarlo"}</dd>
            </div>
          </dl>

          {whatsapp ? (
            <a className="btn btn-ink" href={whatsapp} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          ) : (
            <p className="visit-pending">
              El botón de WhatsApp aparece solo cuando el número de la casa está cargado.
            </p>
          )}
        </div>

        {draft ? (
          <div className="visit-success" role="status">
            <p className="eyebrow eyebrow-ink">Así queda</p>
            <h3>{draft.name}</h3>
            <p className="success-piece">{draft.piece || "Pieza por definir"}</p>
            <p>{draft.message}</p>
            <p className="success-note">
              Este texto todavía no sale de la página. Cuando conectemos el WhatsApp o el
              correo de la casa, el mismo encargo va a llegar directo al taller.
            </p>
            <button type="button" className="btn btn-ink" onClick={() => setDraft(null)}>
              Escribir otro
            </button>
          </div>
        ) : (
          <form className="visit-form" onSubmit={onSubmit} noValidate>
            <label>
              Nombre
              <input name="name" type="text" autoComplete="name" placeholder="Tu nombre" />
            </label>
            <label>
              Pieza
              <input name="piece" type="text" placeholder="Alianza, cadena, aros, a medida…" />
            </label>
            <label>
              Qué buscas
              <textarea name="message" rows={5} placeholder="Metal, ocasión, para quién es." />
            </label>
            {error ? <p className="form-error">{error}</p> : null}
            <button className="btn btn-gold" type="submit">
              Ver el encargo
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
