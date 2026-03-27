// Card.jsx
import Container from "../ui/container";

export default function Card({
  title,
  description,
  imageSrc,
  badge,
  meta,
  onCtaClick,
  className = '',
}) {
  return (
    <Container
      variant="glassLigthCard"
      className={`
        group overflow-hidden
        transition-transform duration-300
        hover:-translate-y-1
        pb-[1rem]
        ${className}
      `}
    >
      {/* Imagen */}
      <div className="  w-full aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300 text-4xl">
            ◻
          </div>
        )}
      </div>

      {/* Cuerpo */}
      <div className="p-[2rem] flex flex-col gap-2">
        {badge && (
          <span className="self-start text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            {badge}
          </span>
        )}

        <h2 className=" text-base font-medium leading-snug text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}

        {/* Footer */}
        {(meta || onCtaClick) && (
          <div className="flex items-center justify-between pt-3 mt-1 border-t border-neutral-100 dark:border-neutral-800">
            {meta && (
              <span className="text-xs text-neutral-400">{meta}</span>
            )}
            {onCtaClick && (
              <button
                onClick={onCtaClick}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all"
              >
                Leer más →
              </button>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}