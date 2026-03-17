export default function Container({ className = '', children }) {
  return (
    <div className={`max-w-6xl mx-auto  sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}