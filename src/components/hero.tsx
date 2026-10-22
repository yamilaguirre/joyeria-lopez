"use client";

import { useEffect, useRef, useState } from "react";
import { gallery, metalIds, metals, pieces, pieceIds, type MetalId, type Picture } from "@/data/house";
import { Drawer } from "@/components/drawer";
import { useHouse } from "@/components/house-state";

const SLIDE_MS = 6000;

function Icon({ name }: { name: "search" | "user" | "bag" | "menu" | "close" | "pause" | "play" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };
  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16.5 20 20.5" />
      </svg>
    );
  }
  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19.2c1.4-2.6 3.6-3.8 6.5-3.8s5.1 1.2 6.5 3.8" />
      </svg>
    );
  }
  if (name === "bag") {
    return (
      <svg {...common}>
        <path d="M6.5 8.5h11l-.8 11h-9.4l-.8-11z" />
        <path d="M9 8.5V7.2A3 3 0 0 1 12 4a3 3 0 0 1 3 3.2v1.3" />
      </svg>
    );
  }
  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    );
  }
  if (name === "pause") {
    return (
      <svg {...common}>
        <path d="M8 6v12M16 6v12" />
      </svg>
    );
  }
  if (name === "play") {
    return (
      <svg {...common}>
        <path d="M8 6.5v11l9-5.5-9-5.5z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Hero() {
  const { metal, setMetal, query, setQuery, list, removeFromList, setActive, setPiece, active } = useHouse();
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);
  const [bag, setBag] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduce, setReduce] = useState(false);
  const [dragX, setDragX] = useState(0);
  const dragStart = useRef<number | null>(null);
  const dragOriginY = useRef(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const current = metals[metal];
  const index = metalIds.indexOf(metal);
  const needle = query.trim().toLowerCase();
  const results = needle
    ? gallery.filter((picture) => `${picture.caption} ${picture.alt}`.toLowerCase().includes(needle)).slice(0, 6)
    : [];
  const blocked = menu || account || bag || searchOpen || active !== null;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 24);
      setInView(window.scrollY < window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, searchOpen]);

  useEffect(() => {
    if (reduce || paused || hovering || blocked || !inView) return;
    const timer = window.setTimeout(() => step(1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [reduce, paused, hovering, blocked, inView, metal]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(false);
        setSearchOpen(false);
        return;
      }
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (menu || account || bag || searchOpen) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [metal, menu, account, bag, searchOpen]);

  useEffect(() => {
    if (!menu) return;
    const first = menuRef.current?.querySelector<HTMLElement>("button, a");
    first?.focus();
  }, [menu]);

  function step(direction: -1 | 1) {
    const next = metalIds[(index + direction + metalIds.length) % metalIds.length];
    setMetal(next);
  }

  function closeLayers() {
    setMenu(false);
    setSearchOpen(false);
    setAccount(false);
    setBag(false);
  }

  function goMetal(next: MetalId) {
    setMetal(next);
    closeLayers();
    document.getElementById("portada")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }

  function openPiece(picture: Picture) {
    setActive(picture);
    closeLayers();
  }

  function onPointerDown(event: React.PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a, button")) return;
    dragStart.current = event.clientX;
    dragOriginY.current = event.clientY;
  }

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (dragStart.current === null) return;
    const dx = event.clientX - dragStart.current;
    const dy = event.clientY - dragOriginY.current;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dx) < 12) return;
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDragX(dx);
  }

  function onPointerUp() {
    if (dragStart.current === null) return;
    if (dragX > 70) step(-1);
    if (dragX < -70) step(1);
    dragStart.current = null;
    setDragX(0);
  }

  const barSolid = solid || blocked;

  return (
    <div className="top" id="portada">
      <header className={barSolid ? "bar bar-solid" : "bar"}>
        <a className="logo" href="#portada">
          López
        </a>
        <form
          className={searchOpen ? "search is-open" : "search"}
          role="search"
          onClick={() => setSearchOpen(true)}
          onSubmit={(event) => {
            event.preventDefault();
            setSearchOpen(false);
            document.getElementById("archivo")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
          }}
        >
          <Icon name="search" />
          <input
            ref={searchRef}
            type="search"
            placeholder="Buscar en el archivo"
            aria-label="Buscar en el archivo"
            aria-expanded={searchOpen}
            aria-controls="busqueda"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => setSearchOpen(true)}
          />
        </form>
        <div className="tools">
          <button
            type="button"
            aria-label="Cuenta"
            aria-expanded={account}
            onClick={() => {
              setAccount(true);
              setMenu(false);
              setBag(false);
              setSearchOpen(false);
              setActive(null);
            }}
          >
            <Icon name="user" />
          </button>
          <button
            type="button"
            aria-label={list.length ? `Encargo, ${list.length} ${list.length === 1 ? "pieza" : "piezas"}` : "Encargo, nada en la lista"}
            aria-expanded={bag}
            onClick={() => {
              setBag(true);
              setMenu(false);
              setAccount(false);
              setSearchOpen(false);
              setActive(null);
            }}
          >
            <Icon name="bag" />
            <span className="count">{list.length}</span>
          </button>
          <button
            type="button"
            aria-label={menu ? "Cerrar menú" : "Menú"}
            aria-expanded={menu}
            onClick={() => {
              setMenu((open) => !open);
              setSearchOpen(false);
              setActive(null);
            }}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
      </header>

      {searchOpen ? (
        <div className="search-layer" id="busqueda">
          <button type="button" className="scrim" aria-label="Cerrar búsqueda" onClick={() => setSearchOpen(false)} />
          <div className="search-panel">
            {needle ? (
              results.length ? (
                <ul>
                  {results.map((picture) => (
                    <li key={picture.src}>
                      <button type="button" onClick={() => openPiece(picture)}>
                        <img src={picture.src} alt="" />
                        <span>
                          <strong>{picture.caption}</strong>
                          <em>Por encargo</em>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="search-empty">Nada coincide con “{query.trim()}”.</p>
              )
            ) : (
              <div className="suggest">
                <p>Buscar por metal</p>
                <div>
                  {metalIds.map((id) => (
                    <button key={id} type="button" onClick={() => goMetal(id)}>
                      {metals[id].label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {menu ? (
        <div className="menu-layer">
          <button type="button" className="scrim" aria-label="Cerrar menú" onClick={() => setMenu(false)} />
          <nav className="mega" ref={menuRef} aria-label="Secciones">
            <div>
              <p>Metal</p>
              {metalIds.map((id) => (
                <button key={id} type="button" onClick={() => goMetal(id)} aria-current={metal === id ? "true" : undefined}>
                  {metals[id].label}
                </button>
              ))}
            </div>
            <div>
              <p>Piezas</p>
              {pieceIds.map((id) => (
                <a
                  key={id}
                  href="#archivo"
                  onClick={() => {
                    setPiece(id);
                    setMenu(false);
                  }}
                >
                  {pieces[id].tab}
                </a>
              ))}
            </div>
            <div>
              <p>La casa</p>
              <a href="#casa" onClick={() => setMenu(false)}>
                Cómo trabaja
              </a>
              <a href="#oficio" onClick={() => setMenu(false)}>
                El archivo
              </a>
              <a href="#encargo" onClick={() => setMenu(false)}>
                Dejar un encargo
              </a>
            </div>
            <figure>
              <img src={current.picture.src} alt={current.picture.alt} />
              <figcaption>{current.label}</figcaption>
            </figure>
          </nav>
        </div>
      ) : null}

      <Drawer open={account} title="La cuenta" onClose={() => setAccount(false)}>
        <p>La casa todavía no publicó un correo. El encargo se deja en esta página y no se envía a ningún lado.</p>
        <a className="btn-dark" href="#encargo" onClick={() => setAccount(false)}>
          Dejar un encargo
        </a>
      </Drawer>

      <Drawer open={bag} title={list.length ? "Tu encargo" : "Nada en la lista"} onClose={() => setBag(false)}>
        {list.length === 0 ? (
          <p>Joyería López no vende en línea. Si una foto del archivo te sirve de referencia, súmala desde la ficha.</p>
        ) : (
          <ul className="bag-list">
            {list.map((item) => (
              <li key={item.src}>
                <img src={item.src} alt="" />
                <span>
                  <strong>{item.caption}</strong>
                  <em>Referencia, no es de la casa</em>
                </span>
                <button type="button" onClick={() => removeFromList(item.src)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
        <a className="btn-dark" href="#encargo" onClick={() => setBag(false)}>
          Dejar un encargo
        </a>
      </Drawer>

      <section
        className="hero"
        aria-label="Joyería López"
        aria-roledescription="carrusel"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          key={current.picture.src}
          className="hero-photo"
          src={current.picture.src}
          alt={current.picture.alt}
          width={current.picture.width}
          height={current.picture.height}
          style={reduce ? undefined : { transform: `translateX(${dragX * 0.15}px)` }}
          draggable={false}
        />
        <div className="hero-copy">
          <p>Casa familiar en Bolivia</p>
          <h1>
            La pieza
            <br />
            se encarga
          </h1>
          <p className="hero-line" aria-live="polite">
            {current.statement}
          </p>
          <a className="btn-dark" href="#encargo">
            Dejar un encargo
          </a>
          <p className="hero-note">La foto es de archivo. No es una pieza de la casa.</p>
        </div>
        <div className="hero-nav">
          <div className="dots" role="tablist" aria-label="Metales">
            {metalIds.map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={id === metal}
                aria-label={metals[id].label}
                onClick={() => setMetal(id)}
              >
                <span className={id === metal && !reduce ? `dot-fill is-run${paused || hovering || blocked || !inView ? " is-hold" : ""}` : "dot-fill"} />
              </button>
            ))}
          </div>
          <button type="button" aria-label={paused ? "Reanudar" : "Pausar"} onClick={() => setPaused((value) => !value)}>
            <Icon name={paused ? "play" : "pause"} />
          </button>
          <button type="button" aria-label="Metal anterior" onClick={() => step(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Metal siguiente" onClick={() => step(1)}>
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
