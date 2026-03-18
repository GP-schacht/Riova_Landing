// Container.jsx
import { useInView } from '../../hooks/useInView';

const BaseClasses = 'max-w-[95%] content-center';

const variants = {
  default: {
    container: 'mx-auto px-[15rem]',
    in: 'animate-fade-in-up delay-300',
    out: 'animate-fade-out-down',
    none: '',
  },
  rounded1: {
    container: 'mr-auto px-[15rem] rounded-r-[1.5rem]',
    in: 'animate-slide-in-left delay-300',
    out: 'animate-slide-out-left  ',
    none: '',
  },
  rounded2: {
    container: 'ml-auto px-[15rem] rounded-l-[1.5rem]',
    in: 'animate-slide-in-right ',
    out: 'animate-slide-out-right ',
    none: '',
  },
};

export default function Container({
  variant = 'default',
  className = '',
  children,
  as: Component = 'div',
  animate = false,
  ...props
}) {
  const { container, in: animIn, out: animOut } =
    variants[variant] ?? variants.default;

  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: false, // 🔥 IMPORTANTE: permite re-animar cada vez que entra/sale
  });

  const animationClass = animate ? (isInView ? animIn : animOut) : '';

  return (
    <Component
      ref={animate ? ref : null}
      className={`${BaseClasses} ${container} ${animationClass} ${className} ${animate && !isInView ? 'opacity-0' : ''} `}
      {...props}
    >
      {children}
    </Component>
  );
}