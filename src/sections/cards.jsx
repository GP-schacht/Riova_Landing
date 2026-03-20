// Cards.jsx
import Container from "../components/ui/container";
import Card from "../components/layout/card";
import card1Img from '../assets/01 CON FONDO/RIOVA LOGO-02.png';
import card2Img from '../assets/01 CON FONDO/RIOVA LOGO-03.png';
import card3Img from '../assets/01 CON FONDO/RIOVA LOGO-05.png';
import { useInView } from '../hooks/useInView';

const cardData = [
    { title: "Card 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur turpis ac porttitor mattis. Morbi non sapien nec neque semper pulvinar et in orci. Morbi ligula diam, rhoncus rutrum est vel, imperdiet rhoncus turpis. Nam sagittis malesuada nisi vel congue. Nunc metus nulla, rhoncus sed sollicitudin vitae, rhoncus bibendum sapien.", imageSrc: card1Img },
    { title: "Card 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur turpis ac porttitor mattis. Morbi non sapien nec neque semper pulvinar et in orci. Morbi ligula diam, rhoncus rutrum est vel, imperdiet rhoncus turpis. Nam sagittis malesuada nisi vel congue. Nunc metus nulla, rhoncus sed sollicitudin vitae, rhoncus bibendum sapien.", imageSrc: card2Img },
    { title: "Card 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur turpis ac porttitor mattis. Morbi non sapien nec neque semper pulvinar et in orci. Morbi ligula diam, rhoncus rutrum est vel, imperdiet rhoncus turpis. Nam sagittis malesuada nisi vel congue. Nunc metus nulla, rhoncus sed sollicitudin vitae, rhoncus bibendum sapien.", imageSrc: card3Img },
];

// animation-delay no existe como utilidad en Tailwind — se aplica inline
const staggerMs = [0, 150, 300];

export default function Cards() {
    const { ref, isInView } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (
        <section id="impacto" className="relative mb-20">

            {/* Banner */}
            <Container variant="rounded2" className="py-20 bg-[#3d5a3e] hidden md:flex">
             <div className="h-[8rem]">

             </div>
            </Container>

            {/* Cards en overlap */}
            <div
                ref={ref}
                className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 -mt-[8rem] "
            >
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        // 👇 animation-delay debe ir inline — Tailwind no genera delays arbitrarios
                        style={{ animationDelay: `${staggerMs[index]}ms` }}
                        className={isInView ? 'animate-fade-in-up' : 'opacity-0'}
                    />
                ))}
            </div>

        </section>
    );
}