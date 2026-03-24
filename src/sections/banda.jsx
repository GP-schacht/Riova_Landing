import Container from "../components/ui/container";
import Banda from "../components/layout/banda";

export default function BandaSection() {
    const frases = [   
        "lorrem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
    ];

    return (
        <section className="overflow-hidden">
            <Container variant="default" className="px-0">
                <Banda items={frases} />
            </Container>
        </section>
    );
}