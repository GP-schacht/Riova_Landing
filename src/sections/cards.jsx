// Cards.jsx
import Container from "../components/ui/container";
import Card from "../components/layout/card";
import card1Img from '../assets/vision-mision-otros/PILARES.webp';
import card2Img from '../assets/vision-mision-otros/OBJETIVOS.webp';
import card3Img from '../assets/vision-mision-otros/EQUIPO.webp';
import { useInView } from '../hooks/useInView';

const cardData = [
    { title: "PILARES", description: "Nuestros pilares y ODS orientan la forma en que intervenimos en las comunidades. ", imageSrc: card1Img, router:"/Pilares" },
    {title: "OBJETIVOS ", description: "Metas claras orientadas a reducir el volumen de residuos y fortalecer la gestión sostenible a nivel local.", imageSrc: card2Img, router:"/Objetivos" },
    { title: "EQUIPO", description: "Somos un grupo de 10 jóvenes comprometidos y apasionados por generar impacto, que trabajamos desde distintas disciplinas para impulsar soluciones sostenibles en comunidades", imageSrc: card3Img ,router:"/Equipo"},];
// animation-delay no existe como utilidad en Tailwind — se aplica inline
const staggerMs = [0, 150, 300];

export default function Cards() {
    const { ref: viewRef, isInView: inView } = useInView({ threshold: 0.3, once: true });

    return (
        <section id="impacto" className="relative mb-21">

            <div ref={viewRef}>
                <Container variant="default"
                    className={`
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
                            onCtaClick={card.router}
                            
                        />
                    ))}
                </Container>
            </div>

        </section>
    );
}