import Container from '../ui/container.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white mt-16">
      <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {year} VilmaApp. Todos los derechos reservados.</p>

        <div className="flex gap-4">
          <a href="#hero" className="hover:text-gray-800">
            Inicio
          </a>
          <a href="#pricing" className="hover:text-gray-800">
           Integrantes
          </a>
          <a href="#faq" className="hover:text-gray-800">
            FAQ
          </a>
        </div>
      </Container>
    </footer>
  );
}