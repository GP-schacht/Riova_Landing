import Container from '../components/ui/container.jsx';
// import heroImg from '../assets/images/hero.png'; // ejemplo si luego agregas imagen

export default function HeroNosotros() {
  return (
    <section id="hero" className="pt-20  bg-[#5CA8A1] h-[60vh]  content-center">
      <Container variant='default' className="flex gap-10 items-center justify-center">
        <div className="text-center lg:text-center ">
         
          <h1 className="text-4xl sm:text-8xl font-extrabold tracking-tight text-white mb-4 ">
         Conocenos
          </h1>
        

      
        </div>
      </Container>
    </section>
  );
}