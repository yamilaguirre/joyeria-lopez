"use client";

import { useState } from "react";
import { metals, metalIds } from "@/data/house";
import { departments, pieceSrc } from "@/data/vitrina";
import { site } from "@/data/site";
import { useHouse } from "@/components/house-state";

export function Contact() {
  const { metal, setMetal, list } = useHouse();
  const [kind, setKind] = useState(departments[0].id);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ name: string; piece: string; metal: string; refs: string } | null>(null);
  const chosen = departments.find((department) => department.id === kind) ?? departments[0];
  const aside = departments[2];

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanNote = note.trim();
    if (!cleanName || !cleanNote) {
      setError("Falta el nombre o qué pieza quieres.");
      return;
    }
    setError("");
    setDone({
      name: cleanName,
      piece: chosen.label,
      metal: metals[metal].label,
      refs: list.map((item) => item.caption).join(", "),
    });
  }

  return (
    <section className="contact" id="encargo" aria-labelledby="encargo-title">
      <div className="contact-intro">
        <h2 id="encargo-title">Cuéntanos la pieza</h2>
        <p>
          {site.address}, {site.city}. Lunes a sábado, de 8:30 a 12:30 y de 14:30 a 20:30. Domingo, cerrada. El recuadro de abajo se queda en esta página: para encargar, llama o escribe.
        </p>
      </div>
      {done ? (
        <p className="done" role="status">
          Quedó en esta página, {done.name}. Pediste {done.piece.toLowerCase()} en{" "}
          {done.metal.toLowerCase()}.
          {done.refs ? ` Referencias: ${done.refs.replace(/\.$/, "")}.` : ""} No salió a ningún correo: la casa todavía no publicó uno.
        </p>
      ) : (
        <form id="encargo-form" onSubmit={onSubmit}>
          <p className="form-note">
            El mensaje se queda en el navegador. Esta página todavía no lo envía.
            {list.length
              ? ` Llevas ${list.length} ${list.length === 1 ? "referencia" : "referencias"} en la lista.`
              : ""}
          </p>
          <label>
            Tu nombre
            <input
              name="nombre"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            La pieza
            <select
              name="pieza"
              value={kind}
              onChange={(event) => setKind(event.target.value as (typeof departments)[number]["id"])}
            >
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.label}
                </option>
              ))}
            </select>
          </label>
          <fieldset>
            <legend>El metal</legend>
            <div className="metal-choices">
              {metalIds.map((id) => (
                <label key={id}>
                  <input
                    type="radio"
                    name="metal"
                    value={id}
                    checked={metal === id}
                    onChange={() => setMetal(id)}
                  />
                  {metals[id].label}
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            Qué quieres encargar
            <textarea
              name="nota"
              rows={4}
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="btn btn-dark" type="submit">
            Dejar el encargo
          </button>
          <figure className="form-aside">
            <img src={pieceSrc(aside)} alt={aside.alt} />
            <figcaption>Anillo grabado de la casa.</figcaption>
          </figure>
        </form>
      )}
      <noscript>
        <p className="form-note">
          Sin JavaScript este recuadro no guarda el texto. Anótalo y, cuando la casa publique un correo, escríbelo ahí.
        </p>
      </noscript>
    </section>
  );
}
