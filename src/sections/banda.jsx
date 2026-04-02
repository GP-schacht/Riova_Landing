import Container from "../components/ui/container";
import Banda from "../components/layout/banda";

export default function BandaSection() {
    const frases = [   
        "Lo que tiras al río, te lo devuelve la vida.", 
        "Porque cada río empieza en las manos de su comunidad.", 
        "Protege el río, protege tu futuro.",
        "RIOVA: donde el río vuelve a vivir."
    ];

    return (
        <section className="overflow-hidden">
            <Container variant="default" className="px-0">
                <Banda items={frases} />
            </Container>
        </section>
    );
}