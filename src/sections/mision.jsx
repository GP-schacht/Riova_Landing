// Mision.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';

export default function Mision() {
    const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3, once: true });
    const { ref: textRef, isInView: textInView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="mision" className="relative py-16 my-8">

            <Container variant="default" className="py-20 bg-[#f5f0e8]">  {/* crema orgánico */}

                {/* Acento decorativo superior */}
                <div className="flex justify-center mb-8">
                    <span className="block w-12 h-1 rounded-full bg-[#3d5a3e]" />
                </div>

                {/* Título */}
                <div
                    ref={titleRef}
                    className={`
                        text-center mb-8
                        transition-all duration-700 ease-out
                        ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-[#2c3e2d] leading-tight">
                        Nuestra{' '}
                        <span className="text-[#3d5a3e]">Misión</span>
                    </h2>
                </div>

                {/* Texto */}
                <div
                    ref={textRef}
                    className={`
                        max-w-2xl mx-auto text-center
                        transition-all duration-700 delay-150 ease-out
                        ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                >
                    <p className="text-[#4a5e4b] text-lg leading-relaxed">
                        En Riova, nuestra misión es revolucionar la forma en que las personas
                        interactúan con la tecnología. Nos esforzamos por crear soluciones
                        innovadoras y accesibles que empoderen a nuestros usuarios para alcanzar
                        su máximo potencial. Creemos en un futuro donde la tecnología sea una
                        herramienta para el crecimiento personal y profesional, y trabajamos
                        incansablemente para hacer esa visión una realidad.
                    </p>
                </div>

                {/* Acento decorativo inferior */}
                <div className="flex justify-center mt-10">
                    <span className="block w-6 h-1 rounded-full bg-[#c8e6a0]" />
                </div>

            </Container>

        </section>
    );
}