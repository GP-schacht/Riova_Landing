import Container from '../components/ui/container.jsx';

export default function AboutPy() {
return (
    <section>
        <Container className="py-16">
            <h2 className="text-3xl font-bold mb-4">¿Qué es VilmaApp?</h2>
            <p className="text-gray-700 mb-6">
                VilmaApp es una plataforma innovadora diseñada para conectar a personas con proyectos de voluntariado en todo el mundo. Nuestra misión es facilitar el acceso a oportunidades de voluntariado, permitiendo a los usuarios encontrar y participar en proyectos que se alineen con sus intereses y habilidades.
            </p>
            <p className="text-gray-700 mb-6">
                En VilmaApp, creemos que el voluntariado es una poderosa herramienta para generar un impacto positivo en la sociedad. Por eso, ofrecemos una amplia variedad de proyectos en diferentes áreas, desde educación y medio ambiente hasta salud y desarrollo comunitario. Nuestra plataforma es fácil de usar y está diseñada para ayudar a los usuarios a descubrir oportunidades de voluntariado que se ajusten a sus necesidades y preferencias.
            </p>
            <p className="text-gray-700 mb-6">
                Únete a VilmaApp hoy mismo y comienza tu viaje hacia un mundo más justo y sostenible.
            </p>
        </Container>
    </section>
);

}