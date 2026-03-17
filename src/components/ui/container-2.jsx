export default function Container2({ className = '', children }) {
  return (
    <div className={`max-w-6xl mr-auto  sm:pr-6 lg:pr-8 ${className}`}>
      {children}
    </div>
  );
}