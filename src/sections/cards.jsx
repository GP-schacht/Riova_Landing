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
    { title: "Card 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur turpis ac porttitor mattis. Morbi non sapien nec neque semper pulvinar et in orci. Morbi ligula diam, rhoncus rutrum est vel, imperdiet rhoncus turpis. Nam sagittis malesuada nisi vel congue. Nunc metus nulla, rhoncus sed sollicitudin vitae, rhoncus bibendum sapien.", imageSrc: card3Img },];
// animation-delay no existe como utilidad en Tailwind — se aplica inline
const staggerMs = [0, 150, 300];

export default function Cards() {
    const { ref: viewRef, isInView: inView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="impacto" className="relative mb-20">

            <div ref={viewRef}>
                <Container variant="default"
                    className= {`
                    relative z-10 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 mx-auto py-12 px-0
                    transition-all duration-700 delay-150 ease-out
                    ${inView ? 'animate-fade-in-up' : 'animate-fade-out-down'}`} >
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageSrc={card.imageSrc}
                            style={{ animationDelay: `${staggerMs[index]}ms` }}
                            className={''}
                        />
                    ))}
                </Container>
            </div>

        </section>
    );
}