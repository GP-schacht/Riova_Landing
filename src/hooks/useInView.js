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
          } else {
            setIsInView(false); // 👉 oculta y permite que se reanime
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
 }, [options.threshold, options.once, options.root]);

  return { ref, isInView };
}