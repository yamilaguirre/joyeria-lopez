const phrase = "Joyería López";

export function Marquee() {
  const row = Array.from({ length: 8 }, (_, index) => (
    <span key={index}>{phrase}</span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
