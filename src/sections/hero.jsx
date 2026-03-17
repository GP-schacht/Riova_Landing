import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
// import heroImg from '../assets/images/hero.png'; // ejemplo si luego agregas imagen

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gray-200 h-[90vh]  content-center">
      <Container className="flex gap-10 items-center ">
        <div className="text-center lg:text-center ">
         
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 ">
            Una frase que genere <span className="text-teal-500">impacto o defina el proyecto</span>
          </h1>
          <p className="text-gray-600 mb-6">
           descripcion un poco mas detallada pero no lo suficiente para que invite a ver mas del proyecto .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-center">
            <Button as="a" href="#pricing">
              call to action
            </Button>
            <Button as="a" variant="outline" href="#how-it-works">
             call to action 2
            </Button>
          </div>

      
        </div>
      </Container>
    </section>
  );
}