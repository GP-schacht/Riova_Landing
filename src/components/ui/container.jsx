// Container.jsx
import { useInView } from '../../hooks/useInView';

const BaseClasses = 'max-w-[95%] content-center';

const variants = {
  default: {
    container: 'mx-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[10rem] 2xl:px-[15rem]',
    in: 'animate-fade-in-up delay-300',
    out: 'animate-fade-out-down',
    none: '',
  },
  rounded1: {
    container: 'mr-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[10rem] 2xl:px-[7rem] rounded-r-[1.5rem] bg-white/30 backdrop-blur-sm border border-gray-300',
    in: 'animate-slide-in-left delay-300',
    out: 'animate-slide-out-left',
    none: '',
  },
  rounded2: {
    container: 'ml-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[10rem] 2xl:px-[7rem] rounded-l-[1.5rem] bg-white/30 backdrop-blur-sm border border-gray-300',
    in: 'animate-slide-in-right',
    out: 'animate-slide-out-right',
    none: '',
  },
  glassLigthCard: {
    container: 'flex flex-col items-start mx-auto  bg-white/30 backdrop-blur-sm rounded-lg border border-gray-300/50 aspect-[3/4] ',
    in: 'animate-fade-in-up delay-300',
    out: 'animate-fade-out-down',
    none: '',
  },
  glassLigth: {
    container: 'mx-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[10rem] 2xl:px-[15rem] bg-white/30 backdrop-blur-sm rounded-lg border border-gray-300/50',
    in: 'animate-fade-in-up delay-300',
    out: 'animate-fade-out-down',
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
    once: false,
  });

  const animationClass = animate ? (isInView ? animIn : animOut) : '';

  return (
    <Component
      ref={animate ? ref : null}
      className={`${BaseClasses} ${container} ${animationClass} ${className} ${animate && !isInView ? 'opacity-0' : ''}`}
      {...props}
    >
      {children}
    </Component>
  );
}