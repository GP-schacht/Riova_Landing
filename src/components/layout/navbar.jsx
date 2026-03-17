import Container from '../ui/container.jsx';
import Button from '../ui/button.jsx';

const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Vision', href: '#vision' },
  { label: 'Mision', href: '#mision' },
  { label: 'Impacto', href: '#impacto' },

];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-300" >
      <Container className="flex items-center justify-between h-24 ">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src='src\assets\02 SIN FONDO\RIOVA LOGO-06.png' alt="Vilma Logo" className="h-48 w-auto" />
          
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>


        {/* Hamburguesa (placeholder para mobile) */}
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200">
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-gray-800" />
            <span className="block w-5 h-0.5 bg-gray-800" />
          </div>
        </button>
      </Container>
    </header>
  );
}