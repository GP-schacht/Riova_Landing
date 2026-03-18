// Cards.jsx
import Container from "../components/ui/container";
import Card from "../components/layout/card";
import card1Img from '../assets/01 CON FONDO/RIOVA LOGO-02.png';
import card2Img from '../assets/01 CON FONDO/RIOVA LOGO-03.png';
import card3Img from '../assets/01 CON FONDO/RIOVA LOGO-05.png';
import { useInView } from '../hooks/useInView';

const cardData = [
    { title: "Card 1", description: "Descripción de la Card 1", imageSrc: card1Img },
    { title: "Card 2", description: "Descripción de la Card 2", imageSrc: card2Img },
    { title: "Card 3", description: "Descripción de la Card 3", imageSrc: card3Img },
];

// Delay escalonado por índice
const staggerDelay = ['delay-0', 'delay-150', 'delay-300'];

export default function Cards() {
    const { ref, isInView } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (
        <section id="impacto" className="relative pb-32">

            {/* Banner */}
            <Container
                variant="rounded2"
                className="py-20 bg-[#3d5a3e]"  // verde oscuro orgánico
            >
                <h2 className="text-5xl md:text-6xl text-white font-bold mb-4 leading-tight">
                    Nuestro{' '}
                    <span className="text-[#c8e6a0]">Impacto</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                    Descubre cómo nuestro trabajo está transformando vidas y comunidades.
                </p>
            </Container>

            {/* Cards en overlap — salen del banner hacia abajo */}
            <div
                ref={ref}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6
                           max-w-5xl mx-auto px-6
                           -mt-16"   // 👈 esto crea el overlap
            >
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        className={`
                            transition-all duration-700 ease-out
                            ${staggerDelay[index]}
                            ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }
                        `}
                    />
                ))}
            </div>

        </section>
    );
}