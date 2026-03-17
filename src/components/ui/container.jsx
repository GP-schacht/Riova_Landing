// Container.jsx
import { useInView } from '../../hooks/useInView';  

const BaseClasses = 'max-w-[95%] sm:px-6 lg:px-8';

const variants = {
  default: {
    container: 'mx-auto',
    animation: 'animate-fade-in-up',
  },
  rounded1: {
    container: 'mr-auto pl-[1.5rem] rounded-r-[1.5rem]',
    animation: 'animate-slide-in-left',
  },
  rounded2: {
    container: 'ml-auto pr-[1.5rem] rounded-l-[1.5rem]',
    animation: 'animate-slide-in-right',
  },
};

export default function Container({
  variant = 'default',
  className = '',
  children,
  as: Component = 'div',
  ...props
}) {
  const { container, animation } = variants[variant] ?? variants.default;

  // Detecta si el componente está en viewport
  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true, // cambiar a false si quieres que la animación se repita al entrar/salir
  });

  // Antes de entrar en viewport: oculto pero ocupando espacio (sin layout shift)
  // Cuando entra: aplica la animación + opacidad 100
  const visibilityClasses = isInView
    ? `opacity-100 ${animation}`
    : 'opacity-0';

  return (
    <Component
      ref={ref}
      className={`${BaseClasses} ${container} ${visibilityClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}