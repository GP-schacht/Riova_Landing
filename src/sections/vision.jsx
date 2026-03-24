// Visin.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';

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
                            En Riova, nuestra misión es revolucionar la forma en que las personas
                            interactúan con la tecnología. Nos esforzamos por crear soluciones
                            innovadoras y accesibles que empoderen a nuestros usuarios para alcanzar
                            su máximo potencial. Creemos en un futuro donde la tecnología sea una
                            herramienta para el crecimiento personal y profesional, y trabajamos
                            incansablemente para hacer esa visión una realidad.
                        </p>
                    </div>

                    {/* Card derecha */}
                    <div
                        ref={imgRef}
                        className={`
                            transition-all duration-700 delay-150 ease-out
                             rounded-lg border border-gray-300/50
                            aspect-[4/3] w-full max-w-xs sm:max-w-sm xl:max-w-md mx-auto
                            ${imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                        `}
                    />

                </div>
            </Container>

        </section>
    );
}