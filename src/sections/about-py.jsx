// AboutPy.jsx
import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
import Flechita from '../assets/03 SVG/flechita.svg';
import card3Img from '../assets/02 SIN FONDO/RIOVA LOGO-07.png';
import { useInView } from '../hooks/useInView';

export default function AboutPy() {
    const { ref, isInView } = useInView({
        threshold: 0.2,
        once: true,
    });

    return (
        <section id="nosotros">
            <Container variant='rounded1' className=" py-16 md:py-20 translate-y-[-2rem]">

                <div ref={ref} className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'>

                    {/* Texto — arriba en mobile, izquierda en desktop */}
                    <div className={`flex flex-col justify-center items-start gap-6 
                        ${isInView ? 'animate-slide-in-left' : ' animate-slide-out-left'}`}
                    >
                        <h1 className="text-5xl sm:text-6xl xl:text-8xl text-[#313d32] font-bold leading-tight">
                            ¿Qué es <span className="text-[#C9D755]">Riova</span>?
                        </h1>
                        <p className='text-[#313d32] text-base sm:text-lg leading-relaxed'>
                            Python es un lenguaje de programación de alto nivel, interpretado
                            y de propósito general. Es conocido por su sintaxis clara y legible,
                            lo que lo hace ideal para principiantes y expertos alike.
                        </p>
                        <div className='flex gap-4 mt-2'>
                            <Button as="a" href="#pricing" variant='terciary'>
                                Conoce más
                                <span className='w-6 h-6'>
                                    <img src={Flechita} alt="flechita" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Imagen — abajo en mobile, derecha en desktop */}
                    <div className={`flex justify-center items-center
                        aspect-[4/3] w-full max-w-xs sm:max-w-sm xl:max-w-md mx-auto
                        ${isInView ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}
                    >
                        <img
                            src={card3Img}
                            alt="Riova logo"
                            className='w-full h-auto object-contain'
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
}