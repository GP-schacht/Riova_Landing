import Container  from "../components/ui/container";

export default function Vision() {
    return (
        <section id="vision" className="py-16 h-[70vh] content-center"> 
            <Container variant="default" className="h-[60vh] bg-gray-300 py-8 my-8">
                <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 mb-6">      
                    En Riova, nuestra visión es ser líderes en la innovación tecnológica, creando un mundo donde la tecnología sea accesible, intuitiva y transformadora para todos. Aspiramos a construir un futuro donde nuestras soluciones no solo resuelvan problemas, sino que también inspiren a las personas a soñar en grande y alcanzar nuevas alturas. Creemos en un mundo donde la tecnología no solo sea una herramienta, sino una fuerza impulsora para el cambio positivo y el crecimiento personal.
                </p>
            </Container>        
        </section>
    );
}