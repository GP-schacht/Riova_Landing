import Gallery from "../components/layout/gallery";
import Container from "../components/ui/container";
import { useInView } from "../hooks/useInView";
import { useState, useEffect } from 'react';
import img01 from "../assets/members/Alberto.webp"
import img02 from "../assets/members/Ian.webp"
import img03 from "../assets/members/Adriana.webp"
import img04 from "../assets/members/Vilma.webp"
import img05 from "../assets/members/Ashley.webp"
import img06 from "../assets/members/Gissel.webp"
import img07 from "../assets/members/Luis.webp"
import img08 from "../assets/members/Dayrelis.webp"
import img09 from "../assets/members/Avit.webp"
import img10 from "../assets/members/Jazmin.webp"

const galleryMember = [

    {
        name: "Ian Del Cid",
        role: "Coordinador General",
        bio: "Licenciado en Administración de Aviación. Desde su puesto es la cara y vocería de la iniciativa. Convoca y modera el consenso en la toma de decisiones y ejerce el voto dirimente cuando no existe consenso. Vela por el cumplimiento de la visión, objetivos y valores del proyecto.",
        img: img02
    },
    {

        name: "Alberto González",
        role: "Coordinador de Operaciones",
        bio: "Estudiante de Ingeniería Electromecánica en la UTP. Cree en un Panamá más verde, consciente del valor de sus recursos y de cómo preservarlos. Por eso decidió ser parte de RIOVA para aportar, junto a otros jóvenes, a ayudar a más comunidades a empoderar su gestión ambiental.",
        img: img01
    },
    {
        name: "Vilma De León",
        role: "Coordinadora Administrativa y Tesorera",
        bio: "Tesista de Arquitectura en la Universidad de Panamá. Apoya en la ejecución del presupuesto según los objetivos y actividades, administrando los fondos de la iniciativa, además de coordinar reuniones y dar seguimiento al proyecto. Desde su visión como arquitecta, busca siempre involucrarse en el desarrollo de iniciativas participativas como RIOVA.",
        img: img04
    },
    {
        name: "Ashley Rodríguez R.",
        role: "Subcoordinadora de Operaciones",
        bio: "Estudiante de Licenciatura en Biotecnología en la Universidad Latina. Le gusta participar en todo lo que da apoyo y concientización de nuestros recursos naturales y rescate de la biodiversidad. En RIOVA apoya como subcoordinadora de operaciones para resaltar que juntos podemos de granito en granito aportar para cuidar nuestro planeta. ",
        img: img05
    },
    {
        name: "Adriana Hidalgo C.",
        role: "Coordinadora Institucional",
        bio: "Estudiante de Relaciones Internacionales en la Universidad de Panamá. Dentro de RIOVA apoya en la gestión de alianzas con distintas instituciones. Una de sus metas es aportar al impacto que se puede lograr cuando se trabaja en conjunto con las comunidades para construir un futuro sostenible.",
        img: img03
    },
    {
        name: "Luis Palacios ",
        role: "Sub coordinador Institucional ",
        bio: "Originario de la Comarca Ngäbe-Buglé. Estudiante de Licenciatura en Gestión de Tecnología de la Información en la UNACHI. Dentro de RIOVA, apoya en la identificación, gestión y fortalecimiento de alianzas estratégicas con instituciones públicas y privadas, así como en la negociación y seguimiento de convenios de colaboración. Tiene como objetivo contribuir al desarrollo de iniciativas que generen impacto sostenible, promoviendo el trabajo articulado entre organizaciones y comunidades.",
        img: img07
    },
    {
        name: "Dayrelis Ortega",
        role: "Coordinadora de Pedagogía ",
        bio: "Estudiante de la Licenciatura en Biología Ambiental, comprometida con la educación ambiental como herramienta de transformación social. Dentro de RIOVA lidera el diseño y desarrollo de estrategias pedagógicas orientadas a fortalecer la conciencia ambiental y promover prácticas sostenibles en comunidades ribereñas, fomentando el aprendizaje participativo y el empoderamiento comunitario.",
        img: img08
    },
    {
        name: "Gissel Ariza ",
        role: "Coordinadora de Redes ",
        bio: "Estudiante de último año de secundaria. Desde su rol, gestiona la comunicación digital del proyecto, creando contenido y difundiendo las acciones realizadas en la comunidad. Su trabajo contribuye a visibilizar el impacto del proyecto y fortalecer la participación de los residentes. ",
        img: img06
    },
    {
        name: "Avit Wood",
        role: "Sub corrdinadora de redes",
        bio: "Estudiante de secundaria de 5to año, encargada de la gestión de la comunicación digital de RIOVA. Trabaja la creación de contenido y el manejo de redes sociales, buscando generar mayor alcance e impacto en la comunidad. Cree en el poder de la juventud como motor de cambio para construir un futuro mejor.",
        img: img09
    },
    {
        name: "Jazmín Hurtado",
        role: "Sub corrdinadora de redes",
        bio: "Es una estudiante de duodécimo grado en bachiller en ciencias, originaria de Colón, que se caracteriza por su compromiso y entusiasmo. Actualmente se desempeña como subcoordinadora de redes sociales del proyecto Riova, rol que asume con mucha alegría y responsabilidad. Se distingue por su deseo de ayudar a los demás y por su dedicación a llevar felicidad a quienes realmente lo necesitan, siempre a través de buenas acciones.",
        img: img10
    },
]
const staggerMs = [0, 150, 300];

export default function GalleryUse() {
    const { ref: viewRef, isInView: inView } = useInView({ threshold: 0.1, once: false });
    const [hasBeenSeen, setHasBeenSeen] = useState(false);

    useEffect(() => {
        if (inView) setHasBeenSeen(true);
    }, [inView]);

    return (
        <section id="miembros" className="relative mb-21">
            <div ref={viewRef}>
                <Container variant="default"
                    className={`
                        relative z-10 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-6 mx-auto py-12 px-0
                        transition-all duration-700 delay-150 ease-out
                        ${!hasBeenSeen ? 'opacity-0' : inView ? 'animate-fade-in-up' : 'animate-fade-out-down'}
                    `}>
                    {galleryMember.map((card, index) => (
                        <Gallery
                            key={index}
                            name={card.name}
                            role={card.role}
                            bio={card.bio}
                            img={card.img}
                            style={{ animationDelay: `${staggerMs[index]}ms` }}
                        />
                    ))}
                </Container>
            </div>
        </section>
    );
}