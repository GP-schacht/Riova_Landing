import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
// import heroImg from '../assets/images/hero.png'; // ejemplo si luego agregas imagen

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-b from-blue-50/60 to-white">
      <Container className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-medium text-blue-600 mb-3">
            Automatiza tu trabajo con IA
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            La forma más rápida de <span className="text-blue-600">gestionar tus procesos</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Centraliza tareas repetitivas, reduce errores y gana tiempo para lo que realmente importa.
            Ideal para equipos que quieren resultados sin complicarse.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button as="a" href="#pricing">
              Empezar gratis
            </Button>
            <Button as="a" variant="outline" href="#how-it-works">
              Ver cómo funciona
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            🎯 Sin tarjeta de crédito · 🚀 Implementación rápida · 🔒 Datos seguros
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gray-900/90 shadow-xl flex items-center justify-center text-gray-100">
            <span className="text-sm text-center px-6">
              Aquí puedes colocar una captura de pantalla o mockup de tu app.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}