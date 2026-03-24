import { useRef, useEffect, useState } from "react";

/**
 * MarqueeBand
 *
 * Props:
 * @param {string[]}  items      - Array de frases/textos a mostrar
 * @param {number}    speed      - Píxeles por segundo (default: 50)
 * @param {number}    direction  - 1 = izquierda, -1 = derecha (default: 1)
 * @param {string}    className  - Clases Tailwind para el wrapper de la banda
 * @param {string}    itemClass  - Clases Tailwind para cada item de texto
 * @param {string}    sepClass   - Clases Tailwind para el separador
 * @param {boolean}   pauseOnHover - Pausa al hacer hover (default: true)
 */
export default function MarqueeBand({
  items = [],
  speed = 50,
  direction = 1,
  className = "py-3",
  itemClass = "text-[#5CA8A1] text-md font-bold uppercase tracking-widest",
  sepClass = "text-amber-400 text-lg",
  pauseOnHover = true,
}) {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      setDuration(width / speed);
    }
  }, [speed, items]);

  // Intercalar items con separadores
  const interleaved = items.flatMap((item, i) => [
    { type: "item", value: item, key: `item-${i}` },
  ]);

  const animStyle = {
    animation:
      duration > 0
        ? `marquee-scroll ${duration}s linear infinite ${direction < 0 ? "reverse" : ""}`
        : "none",
    animationPlayState: paused ? "paused" : "running",
    willChange: "transform",
  };

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className={`overflow-hidden whitespace-nowrap ${className}`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        <div
          ref={trackRef}
          className="inline-flex items-center"
          style={animStyle}
        >
          {[0, 1].map((clone) => (
            <span key={clone} className="inline-flex items-center">
              {interleaved.map(({ type, value, key }) => (
                <span
                  key={`${clone}-${key}`}
                  className={`inline-block px-5 ${type === "sep" ? sepClass : itemClass}`}
                >
                  {value}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}