// useInView.js
import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);

            // Si queremos que solo se anime una vez:
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.once === false) {
            // Si queremos que se oculte al salir de la vista
            setIsInView(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // ~20% visible para disparar
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.current, options.threshold, options.root, options.rootMargin]);

  return { ref, isInView };
}