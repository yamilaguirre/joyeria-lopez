"use client";

import { useState } from "react";
import { metals, metalIds, pictures, pieces, pieceIds, type PieceId } from "@/data/house";
import { useHouse } from "@/components/house-state";

export function Contact() {
  const { metal, piece, setMetal, setPiece } = useHouse();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ name: string; piece: string; metal: string } | null>(null);

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
      piece: pieces[piece].tab,
      metal: metals[metal].label,
    });
  }

  return (
    <section className="contact" id="encargo" aria-labelledby="encargo-title">
      <h2 id="encargo-title">Joyería López</h2>
      <p className="row">Bolivia</p>
      <p className="row">Dirección por confirmar</p>
      <p className="row">Horario por confirmar</p>
      <p className="row">Encargo por conversación</p>
      <div className="greeting">
        <p>Hola</p>
        <a href="#encargo-form">Escribir</a>
      </div>
      {done ? (
        <p className="done" role="status">
          Quedó en esta página, {done.name}. Pediste {done.piece.toLowerCase()} en{" "}
          {done.metal.toLowerCase()}. No salió a ningún correo: la casa todavía no publicó uno.
        </p>
      ) : (
        <form id="encargo-form" onSubmit={onSubmit}>
          <p className="form-note">
            El mensaje se queda en el navegador. Esta página todavía no lo envía.
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
              value={piece}
              onChange={(event) => setPiece(event.target.value as PieceId)}
            >
              {pieceIds.map((id) => (
                <option key={id} value={id}>
                  {pieces[id].tab}
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
          <button type="submit">Dejar el encargo</button>
          <figure className="form-aside">
            <img
              src={pictures.oroSerpiente.src}
              alt={pictures.oroSerpiente.alt}
              width={pictures.oroSerpiente.width}
              height={pictures.oroSerpiente.height}
            />
            <figcaption>{pictures.oroSerpiente.caption}</figcaption>
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
