import { marqueeItems } from "@/data/catalog";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
