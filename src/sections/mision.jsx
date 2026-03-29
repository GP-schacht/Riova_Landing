// Mision.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';
import Img01 from '../assets/vision-mision-otros/DSC00407.webp';

export default function Mision() {
    const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3, once: true });
    const { ref: imgRef, isInView: imgInView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="mision" className="mt-20 relative">

            {/* Fondo verde — decorativo, posicionado absolute */}


            <Container variant="rounded2" className="py-10 md:py-[5rem] my-[5rem]  ">

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

                    {/* Título + texto */}
                    <div
                        ref={titleRef}
                        className={`
                            flex flex-col gap-6       
                            ${titleInView ? 'animate-fade-in-up' : 'animate-fade-out-down'}
                            order-2
                        `}
                    >
                        <h2 className="text-5xl xl:text-6xl font-bold text-[#2c3e2d] leading-tight">
                            Nuestra{' '}
                            <span className="text-[#C9D755]">Misión</span>
                        </h2>
                        <p className="text-[#313d32] text-base sm:text-lg leading-relaxed">
                            Fortalecer la gestión de residuos sólidos en la comunidad de Mastranto Rural, en el
                            distrito de La Chorrera, mediante procesos de educación ambiental, participación
                            comunitaria y organización local, con el fin de reducir el arrastre de desechos hacia el
                            río Caimito y promover una cultura ambiental responsable que contribuya a la
                            protección de los ecosistemas ribereños y al bienestar de la comunidad.
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