import Gallery from "../components/layout/gallery";
import Container from "../components/ui/container";
import { useInView } from "../hooks/useInView";
import { useState, useEffect } from 'react';
import img01 from "../assets/members/Alberto.JPG"
import img02 from "../assets/members/Ian.JPG"
import img03 from "../assets/members/Adriana.JPG"
import img04 from "../assets/members/Vilma.JPG"
import img05 from "../assets/members/Ashley.JPG"
import img06 from "../assets/members/Gissel.JPG"
import img07 from "../assets/members/Luis.JPG"
import img08 from "../assets/members/Dayrelis.JPG"
import img09 from "../assets/members/Avit.JPG"
import img10 from "../assets/members/Jazmin.JPG"

const galleryMember = [
    {
        name: "Alberto González",
        role: "Coordinador de Operaciones",
        bio: "Estudiante de Ingeniería Electromecánica en la UTP. Cree en un Panamá más verde, consciente del valor de sus recursos y de cómo preservarlos. Por eso decidió ser parte de RIOVA para aportar, junto a otros jóvenes, a ayudar a más comunidades a empoderar su gestión ambiental.",
        img: img01
    },
    {
        name: "Ian Del Cid",
        role: "Coordinador General",
        bio: "Licenciado en Administración de Aviación. Desde su puesto es la cara y vocería de la iniciativa. Convoca y modera el consenso en la toma de decisiones y ejerce el voto dirimente cuando no existe consenso. Vela por el cumplimiento de la visión, objetivos y valores del proyecto.",
        img: img02
    },
    {
        name: "Adriana Hidalgo C.",
        role: "Coordinadora Institucional",
        bio: "Estudiante de Relaciones Internacionales en la Universidad de Panamá. Dentro de RIOVA apoya en la gestión de alianzas con distintas instituciones. Una de sus metas es aportar al impacto que se puede lograr cuando se trabaja en conjunto con las comunidades para construir un futuro sostenible.",
        img: img03
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
        name: "Gissel Ariza ",
        role: "Coordinadora de Redes ",
        bio: "Estudiante de último año de secundaria. Desde su rol, gestiona la comunicación digital del proyecto, creando contenido y difundiendo las acciones realizadas en la comunidad. Su trabajo contribuye a visibilizar el impacto del proyecto y fortalecer la participación de los residentes. ",
        img: img06
    },
    {
        name: "Luis Palacios ",
        role: "Sub coordinador Institucional ",
        bio: "",
        img: img07
    },
    {
        name: "Dayrelis Ortega",
        role: "Coordinadora de Pedagogía ",
        bio: "",
        img: img08
    },
    {
        name: "Avit Wood",
        role: "Sub corrdinadora de redes",
        bio: "",
        img: img09
    },
    {
        name: "Jazmín Hurtado",
        role: "Sub corrdinadora de redes",
        bio: "",
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