// Visin.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';
import Img01 from '../assets/vision-mision-otros/DSC00411.webp';

export default function Mision() {
    const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3, once: true });
    const { ref: imgRef, isInView: imgInView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="vision" className="mb-20 relative">

            {/* Fondo azul — decorativo, posicionado absolute */}


            <Container variant="rounded1" className="py-16 md:py-[5rem] my-[5rem] ">

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

                    {/* Título + texto */}
                    <div
                        ref={titleRef}
                        className={`
                            flex flex-col gap-6
                            ${titleInView ? 'animate-fade-in-up' : 'animate-fade-out-down'}
                        `}
                    >
                        <h2 className="text-5xl xl:text-6xl font-bold text-[#19233a] leading-tight">
                            Nuestra{' '}
                            <span className="text-[#5CA8A1]">Vision</span>
                        </h2>
                        <p className="text-[#19233a] text-base sm:text-lg leading-relaxed">
                            Lograr que la comunidad de Mastranto Rural se convierta en una comunidad
                            consciente y comprometida con su entorno, donde las acciones colectivas de sus
                            habitantes contribuyan a la protección del río Caimito y a un futuro ambiental más
                            sostenible.
                        </p>
                    </div>

                    {/* Card derecha */}
                   <div
                                           ref={imgRef}
                                           className={`
                                               transition-all duration-700 delay-150 ease-out
                                                rounded-lg 
                                               aspect-[4/3] w-full max-w-xs sm:max-w-sm xl:max-w-lg mx-auto
                                               ${imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                                               order-1
                                               overflow-hidden
                                           `}
                                       >
                                       <img src={Img01} alt="Imagen de la misión" className="w-full h-auto object-cover"/>
                                       </div>

                </div>
            </Container>

        </section>
    );
}