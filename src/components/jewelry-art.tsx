import type { ArtKind, MetalTone } from "@/data/catalog";

type ArtProps = {
  id: string;
  kind: ArtKind;
  tone?: MetalTone;
};

export function JewelryArt({ id, kind, tone = "gold" }: ArtProps) {
  const metal = tone === "silver" ? `url(#${id}-silver)` : `url(#${id}-gold)`;
  const gem = `url(#${id}-gem)`;

  return (
    <svg className="jewel" viewBox="0 0 240 240" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e7c6" />
          <stop offset="42%" stopColor="#c6a46a" />
          <stop offset="100%" stopColor="#7a5528" />
        </linearGradient>
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#d5d0c8" />
          <stop offset="100%" stopColor="#8a847c" />
        </linearGradient>
        <radialGradient id={`${id}-gem`} cx="32%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#fffaf6" />
          <stop offset="28%" stopColor="#f0c2ba" />
          <stop offset="62%" stopColor="#a34752" />
          <stop offset="100%" stopColor="#5c2430" />
        </radialGradient>
      </defs>
      <ArtBody kind={kind} metal={metal} gem={gem} />
    </svg>
  );
}

function ArtBody({ kind, metal, gem }: { kind: ArtKind; metal: string; gem: string }) {
  switch (kind) {
    case "ring":
      return (
        <g>
          <ellipse cx="120" cy="156" rx="74" ry="24" fill="none" stroke={metal} strokeWidth="16" />
          <ellipse cx="120" cy="156" rx="56" ry="13" fill="none" stroke="#f8efdf" strokeWidth="1.4" opacity="0.75" />
          <path d="M120 58 L140 112 H100 Z" fill={gem} />
          <path d="M100 112 H140 L133 128 H107 Z" fill="#f7f1e8" />
          <path d="M120 72 L128 98" stroke="#fff" strokeWidth="1.4" opacity="0.85" />
        </g>
      );
    case "necklace":
      return (
        <g fill="none">
          <path d="M38 78 C78 150 162 150 202 78" stroke={metal} strokeWidth="3.2" />
          <circle cx="58" cy="96" r="3.2" fill={metal} stroke="none" />
          <circle cx="86" cy="122" r="3.2" fill={metal} stroke="none" />
          <circle cx="154" cy="122" r="3.2" fill={metal} stroke="none" />
          <circle cx="182" cy="96" r="3.2" fill={metal} stroke="none" />
          <circle cx="120" cy="162" r="18" fill={gem} stroke={metal} strokeWidth="3" />
          <path d="M120 180 L110 214 H130 Z" fill={metal} stroke="none" />
        </g>
      );
    case "earrings":
      return (
        <g>
          <g transform="translate(-28 0)">
            <circle cx="100" cy="62" r="5" fill={metal} />
            <path d="M100 68 V92" stroke={metal} strokeWidth="2" />
            <path d="M100 92 L118 132 L100 150 L82 132 Z" fill={gem} />
          </g>
          <g transform="translate(28 0)">
            <circle cx="140" cy="62" r="5" fill={metal} />
            <path d="M140 68 V92" stroke={metal} strokeWidth="2" />
            <path d="M140 92 L158 132 L140 150 L122 132 Z" fill={gem} />
          </g>
        </g>
      );
    case "bracelet":
      return (
        <g>
          <ellipse cx="120" cy="124" rx="78" ry="58" fill="none" stroke={metal} strokeWidth="14" />
          <ellipse cx="120" cy="124" rx="60" ry="42" fill="none" stroke="#f8efdf" strokeWidth="1.2" opacity="0.6" />
          <circle cx="120" cy="66" r="7" fill={gem} />
          <circle cx="78" cy="86" r="4.5" fill={gem} />
          <circle cx="162" cy="86" r="4.5" fill={gem} />
          <path d="M112 178 H128" stroke={metal} strokeWidth="4" strokeLinecap="round" />
        </g>
      );
    case "stone":
      return (
        <g>
          <path d="M120 36 L168 72 L156 168 L120 206 L84 168 L72 72 Z" fill={gem} />
          <path d="M120 36 L168 72 H72 Z" fill="#fff" opacity="0.28" />
          <path d="M72 72 L120 118 L168 72" fill="none" stroke="#fff" strokeWidth="1" opacity="0.55" />
          <path d="M84 168 L120 118 L156 168" fill="none" stroke="#5c2430" strokeWidth="1" opacity="0.35" />
          <path d="M120 36 V206" stroke="#fff" strokeWidth="1" opacity="0.35" />
        </g>
      );
    case "bespoke":
      return (
        <g>
          <ellipse cx="120" cy="132" rx="70" ry="46" fill="none" stroke={metal} strokeWidth="8" />
          <path d="M120 78 L132 112 H108 Z" fill={gem} />
          <path d="M46 188 H194" stroke={metal} strokeWidth="1.4" />
          <path d="M62 180 V196 M86 176 V200 M120 174 V202 M154 176 V200 M178 180 V196" stroke={metal} strokeWidth="1.2" />
          <circle cx="168" cy="64" r="16" fill="none" stroke={metal} strokeWidth="1.4" />
          <path d="M168 52 V76 M156 64 H180" stroke={metal} strokeWidth="1.2" />
        </g>
      );
  }
}
