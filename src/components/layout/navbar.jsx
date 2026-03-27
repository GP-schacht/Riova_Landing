import { useState } from 'react';
import Container from '../ui/container.jsx';
import card1Img from '../../assets/02 SIN FONDO/RIOVA LOGO-06.png';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Pilares',   href: '/pilares'   },
  { label: 'Objetivos',   href: '/objetivos'   },
  { label: 'Equipo',  href: '/equipo'  },
];



export default function Navbar() {
  const [open, setOpen] = useState(false);
const navegate = useNavigate();
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-300">
      <Container className="flex items-center justify-between h-20 sm:h-24">

        {/* Logo */}
        <a onClick={() => navegate('/')}  className="flex items-center gap-2">
          <img
            src={card1Img}
            alt="Riova Logo"
            className="h-32 sm:h-48 w-auto"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm ">
          {navItems.map((item) => (
            <a 
              key={item.href}
              onClick={() => navegate (item.href)}
              className="text-[#2c3e2d]  hover:font-bold cursor-pointer select-none transition-colors ">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
          aria-label="Abrir menú"
        >
          <div className="space-y-1">
            <span className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

      </Container>

      {/* Menú mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4 bg-white/95 backdrop-blur border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-gray-900 text-base py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}