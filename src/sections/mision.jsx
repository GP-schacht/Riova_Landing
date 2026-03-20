
// Mision.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';

export default function Mision() {
    const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3, once: true });
    const { ref: textRef, isInView: textInView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="mision" className="my-20">

<Container variant="rounded2" className="py-20 bg-[#94B445] h-[60vh] ">  {/* crema orgánico */}

</Container>

            <Container variant="glassLigth" className=" py-20 -mt-[34rem] h-[60vh]">  {/* crema orgánico */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                    {/* Título */}
                    <div
                        ref={titleRef}
                        className={`
                        transition-all duration-700 ease-out
                            ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}'}
                    `}
                    >
                        <h2 className="xl:text-8xl text-5xl font-bold text-[#2c3e2d]  text-center leading-tight">
                            Nuestra{' '}
                            <br /><span className="text-[#3d5a3e]">Misión</span>
                        </h2>
                    </div>

                    {/* Texto */}
                    <div
                        ref={textRef}
                        className={`
                            text-center
                        transition-all duration-700 delay-150 ease-out
                        ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                    >
                        <p className="text-[#313d32] text-lg leading-relaxed">
                            En Riova, nuestra misión es revolucionar la forma en que las personas
                            interactúan con la tecnología. Nos esforzamos por crear soluciones
                            innovadoras y accesibles que empoderen a nuestros usuarios para alcanzar
                            su máximo potencial. Creemos en un futuro donde la tecnología sea una
                            herramienta para el crecimiento personal y profesional, y trabajamos
                            incansablemente para hacer esa visión una realidad.
                        </p>
                    </div>
                </div>




            </Container>

        </section>
    );
}