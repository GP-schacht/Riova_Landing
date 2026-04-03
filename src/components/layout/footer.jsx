import { useState } from 'react';
import Container from '../ui/container.jsx';
import ContactModal from './contacto.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      <footer className="border-t border-gray-100 bg-white mt-16">
        <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Riova. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-gray-800 transition-colors">
              Inicio
            </a>

            <button
              onClick={() => setShowContact(true)}
              className="hover:text-gray-800 transition-colors cursor-pointer"
            >
              Contacto
            </button>

            <a href="#faq" className="hover:text-gray-800 transition-colors">
              FAQ
            </a>

            <span className="text-gray-200">|</span>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}