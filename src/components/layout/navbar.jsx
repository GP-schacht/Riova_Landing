import Container from '../ui/container.jsx';
import Button from '../ui/button.jsx';

const navItems = [
  { label: 'Problema', href: '#problem' },
  { label: 'Solución', href: '#solution' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Precios', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="font-semibold text-gray-900">
            Vilma<span className="text-blue-600">App</span>
          </span>
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

        {/* CTA principal */}
        <div className="hidden md:block">
          <Button as="a" href="#pricing">
            Empezar ahora
          </Button>
        </div>

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