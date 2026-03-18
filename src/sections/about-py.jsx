import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
import Flechita from '../assets/03 SVG/flechita.svg';
import card3Img from '../assets/02 SIN FONDO/RIOVA LOGO-07.png';
import { useInView } from '../hooks/useInView';


export default function AboutPy() {
    const { ref, isInView } = useInView({
        threshold: 0.2,
        once: true, // Animar solo una vez
    });

    return (
        <section id="nosotros" className="h-[70vh] ">
            <Container variant='rounded1' className="h-[60vh] bg-[#3B5287] translate-y-[-2rem]">    

                <div ref={ref} className='grid grid-cols-2 '>
                    <div className={`flex flex-col justify-center items-start gap-6 max-w-lg ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} >
                        <h1 className="text-8xl text-white font-bold mb-8" >¿Qué es <span className="text-lime-300">Riova</span>?</h1>
                        <p className='text-white'>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes y expertos alike.</p>

                        <div className='flex gap-4 mt-6'>
                            <Button as="a" href="#pricing" variant='terciary'>
                               Conoce más  <span className='w-6 h-6'><img src={Flechita} alt="flechita" /></span>
                            </Button>

                        </div>
                    </div>


                    
                        <div className={`w-[30rem] h-80 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
                            <img src={card3Img} alt="Card 3" className='w-full h-full object-cover' />
                        

                    
                    </div>

                </div>
            </Container>
        </section>
    );

}