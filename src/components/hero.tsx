"use client";

import { useEffect, useRef, useState } from "react";
import { departments, pieces as catalog, pieceHaystack, pieceSrc, type VitrinaPiece } from "@/data/vitrina";
import { site } from "@/data/site";
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
  const { query, setQuery, list, removeFromList, setActive, active } = useHouse();
  const [slide, setSlide] = useState(0);
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
  const current = departments[slide] ?? departments[0];
  const needle = query.trim().toLowerCase();
  const results = needle
    ? catalog.filter((item) => pieceHaystack(item).includes(needle)).slice(0, 6)
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
  }, [reduce, paused, hovering, blocked, inView, slide]);

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
  }, [slide, menu, account, bag, searchOpen]);

  useEffect(() => {
    if (!menu) return;
    const first = menuRef.current?.querySelector<HTMLElement>("button, a");
    first?.focus();
  }, [menu]);

  function step(direction: -1 | 1) {
    setSlide((currentIndex) => (currentIndex + direction + departments.length) % departments.length);
  }

  function closeLayers() {
    setMenu(false);
    setSearchOpen(false);
    setAccount(false);
    setBag(false);
  }

  function goDepartment(index: number) {
    setSlide(index);
    closeLayers();
    const id = departments[index]?.id;
    document.getElementById(id ?? "portada")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }

  function openPiece(item: VitrinaPiece) {
    setActive({
      src: pieceSrc(item),
      alt: item.alt,
      caption: item.caption,
      detail: item.detail,
    });
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
            document.getElementById("vitrina")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
          }}
        >
          <Icon name="search" />
          <input
            ref={searchRef}
            type="search"
            placeholder="Buscar una pieza"
            aria-label="Buscar una pieza"
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
                  {results.map((item) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => openPiece(item)}>
                        <img src={pieceSrc(item)} alt="" />
                        <span>
                          <strong>{item.caption}</strong>
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
                <p>Buscar por apartado</p>
                <div>
                  {departments.map((department, index) => (
                    <button key={department.id} type="button" onClick={() => goDepartment(index)}>
                      {department.label}
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
              <p>Vitrina</p>
              {departments.map((department, index) => (
                <button key={department.id} type="button" onClick={() => goDepartment(index)} aria-current={slide === index ? "true" : undefined}>
                  {department.label}
                </button>
              ))}
            </div>
            <div>
              <p>La casa</p>
              <a href="#casa" onClick={() => setMenu(false)}>
                Cómo trabaja
              </a>
              <a href="#visita" onClick={() => setMenu(false)}>
                Dirección y horario
              </a>
              <a href="#movimiento" onClick={() => setMenu(false)}>
                En movimiento
              </a>
              <a href="#encargo" onClick={() => setMenu(false)}>
                Dejar un encargo
              </a>
            </div>
            <div>
              <p>Teléfonos</p>
              {site.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`} onClick={() => setMenu(false)}>
                  {phone.number}
                  {phone.label === "Principal" ? " · principal" : ""}
                </a>
              ))}
            </div>
            <figure>
              <img src={pieceSrc(current)} alt={current.alt} />
              <figcaption>{current.label}</figcaption>
            </figure>
          </nav>
        </div>
      ) : null}

      <Drawer open={account} title="La casa" onClose={() => setAccount(false)}>
        <p>
          {site.address}, {site.city}. {site.hours[0].day}: {site.hours[0].time}. {site.hours[1].day}: {site.hours[1].time}.
        </p>
        <ul className="phone-list">
          {site.phones.map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`}>{phone.number}</a>
              <span>{phone.label}</span>
            </li>
          ))}
        </ul>
        <a href={`sms:${site.sms}`}>Escribir un mensaje</a>
        <a className="btn-dark" href="#encargo" onClick={() => setAccount(false)}>
          Dejar un encargo
        </a>
      </Drawer>

      <Drawer open={bag} title={list.length ? "Tu encargo" : "Nada en la lista"} onClose={() => setBag(false)}>
        {list.length === 0 ? (
          <p>Joyería López no vende en línea. Si una foto te sirve de referencia, súmala desde la ficha y llama a la casa.</p>
        ) : (
          <ul className="bag-list">
            {list.map((item) => (
              <li key={item.src}>
                <img src={item.src} alt="" />
                <span>
                  <strong>{item.caption}</strong>
                  <em>Referencia para el encargo</em>
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
          key={current.file}
          className="hero-photo"
          src={pieceSrc(current)}
          alt={current.alt}
          style={reduce ? undefined : { transform: `translateX(${dragX * 0.15}px)` }}
          draggable={false}
        />
        <div className="hero-copy">
          <p>Joyería López · Oruro</p>
          <h1>
            {current.title[0]}
            <br />
            {current.title[1]}
          </h1>
          <p className="hero-line" aria-live="polite">
            {current.line}
          </p>
          <a className="btn-dark" href={`#${current.id}`}>
            Ver {current.label.toLowerCase()}
          </a>
          <p className="hero-note">Foto de la casa. La pieza se encarga en el local.</p>
        </div>
        <div className="hero-nav">
          <div className="dots" role="tablist" aria-label="Apartados">
            {departments.map((department, index) => (
              <button
                key={department.id}
                type="button"
                role="tab"
                aria-selected={index === slide}
                aria-label={department.label}
                onClick={() => setSlide(index)}
              >
                <span className={index === slide && !reduce ? `dot-fill is-run${paused || hovering || blocked || !inView ? " is-hold" : ""}` : "dot-fill"} />
              </button>
            ))}
          </div>
          <button type="button" aria-label={paused ? "Reanudar" : "Pausar"} onClick={() => setPaused((value) => !value)}>
            <Icon name={paused ? "play" : "pause"} />
          </button>
          <button type="button" aria-label="Apartado anterior" onClick={() => step(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Apartado siguiente" onClick={() => step(1)}>
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
