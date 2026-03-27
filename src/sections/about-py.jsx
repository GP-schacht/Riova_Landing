// AboutPy.jsx
import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
import Flechita from '../assets/03 SVG/flechita.svg';
import card3Img from '../assets/02 SIN FONDO/RIOVA LOGO-07.png';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

export default function AboutPy() {
    const { ref, isInView } = useInView({
        threshold: 0.2,
        once: true,
    });

    const navigate = useNavigate();

    return (
        <section id="nosotros">
            <Container variant='rounded1' className=" py-16 md:py-20 translate-y-[-2rem] my-[5rem]">

                <div ref={ref} className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'>

                    {/* Texto — arriba en mobile, izquierda en desktop */}
                    <div className={`flex flex-col justify-center items-start gap-6 
                        ${isInView ? 'animate-slide-in-left' : ' animate-slide-out-left'}`}
                    >
                        <h1 className="text-5xl  sm:text-6xl xl:text-8xl text-[#313d32] font-extrabold leading-tight">
                            ¿QUIENES <span className="text-[#C9D755]">SOMOS?</span>?
                        </h1>
                        <p className='text-[#313d32] text-base sm:text-lg leading-relaxed text-justify'>
                            Somos un grupo de 10 jovenes de la 7.ª edición del Laboratorio 
                            Latinoamericano de Acción Ciudadana, donde encontramos la necesidad 
                            de actuar frente a los residuos que llegan a nuestros ríos.
                             Así nace RIOVA, una iniciativa que busca mejorar la gestión de 
                             residuos en comunidades ribereñas, a través de la concientización, 
                             la psicoeducación ambiental y la participación comunitaria.
                        </p>
                        <div className='flex gap-4 mt-2'>
                            <Button as="a"  variant='terciary' onClick={() => navigate('/nosotros')}>
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