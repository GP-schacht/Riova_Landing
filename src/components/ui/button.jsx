const baseClasses = `
  inline-flex items-center justify-center
  px-5 py-2.5 rounded-lg text-md font-semibold
  transition-colors duration-150
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  disabled:opacity-60 disabled:cursor-not-allowed
`;

const variants = {
  primary: 'bg-lime-300 text-white hover:bg-lime-600',
  secondary: 'bg-lime-400 text-white hover:bg-lime-500',
  terciary: 'bg-teal-500 text-white hover:bg-teal-600',
  outline: 'border border-white  text-white  hover:bg-lime-800',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  as: Component = 'button',
  ...props
}) {
  const variantClasses = variants[variant] ?? variants.primary;

  return (
    <Component className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
}