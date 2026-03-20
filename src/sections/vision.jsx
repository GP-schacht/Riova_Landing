// Mision.jsx
import Container from "../components/ui/container";
import { useInView } from '../hooks/useInView';

export default function Mision() {
    const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3, once: true });
    const { ref: textRef, isInView: textInView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="vision" className="relative my-[10rem]">
            <Container variant="rounded1" className="py-20 bg-[#3B5287] h-[60vh] ">  {/* crema orgánico */}
            
            </Container>

            <Container variant="glassLigth" className="py-20 -mt-[34rem] min-h-[60vh]" >  {/* crema orgánico */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">


                    <div
                        ref={textRef}
                        className={`
                            order-2 xl:order-1
                        max-w-2xl mx-auto text-center
                        transition-all duration-700 delay-150 ease-out
                        ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                    >
                        <p className="text-[#19233a] text-lg leading-relaxed">
                            En Riova, nuestra misión es revolucionar la forma en que las personas
                            interactúan con la tecnología. Nos esforzamos por crear soluciones
                            innovadoras y accesibles que empoderen a nuestros usuarios para alcanzar
                            su máximo potencial. Creemos en un futuro donde la tecnología sea una
                            herramienta para el crecimiento personal y profesional, y trabajamos
                            incansablemente para hacer esa visión una realidad.
                        </p>
                    </div>

                    <div
                        ref={titleRef}
                        className={`
                        order-1 xl:order-2
                        text-center mb-8
                        transition-all duration-700 ease-out
                        ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                    >
                        <h2 className="text-5xl xl:text-8xl font-bold text-[#19233a] leading-tight">
                            Nuestra{' '}
                            <br /><span className="text-[#3B5287]">Vision</span>
                        </h2>
                    </div>



                </div>

            </Container>

        </section>
    );
}