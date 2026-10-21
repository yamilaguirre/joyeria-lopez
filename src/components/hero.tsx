export function Hero() {
  return (
    <section id="portada" className="hero">
      <p className="hero-watermark" aria-hidden="true">
        López
      </p>
      <div className="hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Casa familiar · Bolivia</p>
        <h1>
          Joyería
          <em>López</em>
        </h1>
        <p className="lede">
          Oro, plata y piedras para los días que una familia guarda.
        </p>
        <p className="hero-note">
          Alianzas, cadenas, aros y encargos a medida. La primera puerta de la casa,
          abierta con calma.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#vitrina">
            Ver la vitrina
          </a>
          <a className="btn btn-ghost" href="#encargo">
            Encargar una pieza
          </a>
        </div>
      </div>

      <div className="hero-stage" aria-hidden="true">
        <div className="hero-orbit" />
        <div className="hero-disc">
          <div className="jewel-float">
            <svg className="jewel" viewBox="0 0 240 240">
              <defs>
                <linearGradient id="hero-gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f6e7c6" />
                  <stop offset="42%" stopColor="#c6a46a" />
                  <stop offset="100%" stopColor="#7a5528" />
                </linearGradient>
                <radialGradient id="hero-gem" cx="32%" cy="28%" r="75%">
                  <stop offset="0%" stopColor="#fffaf6" />
                  <stop offset="30%" stopColor="#f0c2ba" />
                  <stop offset="70%" stopColor="#a34752" />
                  <stop offset="100%" stopColor="#5c2430" />
                </radialGradient>
              </defs>
              <ellipse cx="120" cy="150" rx="78" ry="26" fill="none" stroke="url(#hero-gold)" strokeWidth="16" />
              <ellipse cx="120" cy="150" rx="58" ry="14" fill="none" stroke="#f8efdf" strokeWidth="1.5" opacity="0.8" />
              <path d="M120 46 L144 108 H96 Z" fill="url(#hero-gem)" />
              <path d="M96 108 H144 L136 126 H104 Z" fill="#f7f1e8" />
              <path d="M120 62 L130 94" stroke="#fff" strokeWidth="1.6" opacity="0.9" />
            </svg>
          </div>
        </div>
        <ul className="hero-facts">
          <li>Oro y plata</li>
          <li>Piedras</li>
          <li>A medida</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
