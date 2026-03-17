import Container from "../components/ui/container";

export default function Mision() {
    return (
        <section id="mision" className="py-8 my-8 h-[70vh] content-center">
            <Container variant="default" className="h-[60vh] py-16  bg-gray-300">
                <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 mb-6">
                    En Riova, nuestra misión es revolucionar la forma en que las personas interactúan con la tecnología. Nos esforzamos por crear soluciones innovadoras y accesibles que empoderen a nuestros usuarios para alcanzar su máximo potencial. Creemos en un futuro donde la tecnología sea una herramienta para el crecimiento personal y profesional, y trabajamos incansablemente para hacer esa visión una realidad.
                </p>
            </Container>
        </section>
    );
}   