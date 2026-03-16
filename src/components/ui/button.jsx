const baseClasses = `
  inline-flex items-center justify-center
  px-5 py-2.5 rounded-lg text-sm font-semibold
  transition-colors duration-150
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  disabled:opacity-60 disabled:cursor-not-allowed
`;

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-900 text-white hover:bg-gray-800',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
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