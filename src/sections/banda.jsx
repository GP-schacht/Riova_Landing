import Container from "../components/ui/container";
import Banda from "../components/layout/banda";

export default function BandaSection() {
    const frases = [   
        "Ejemplo de frase", 
        "Ejemplo de segunda frase" 
    ];

    return (
        <section className="overflow-hidden">
            <Container variant="default" className="px-0">
                <Banda items={frases} />
            </Container>
        </section>
    );
}