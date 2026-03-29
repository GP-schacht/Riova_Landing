import Hero from "../components/layout/hero";

export default function HeroEquipo() {

    return (
        <section id="hero" className=" bg-[#5CA8A1] pt-20  h-[65vh]  content-center">
            <Hero
                titleA={'CONOCE A NUESTRO'}
                titleB={'EQUIPO'}
                titleSize={'xl:text-8xl'}
                description={'La union hace la fuerza'}
                colorHighlight={'#C9D755'}>

            </Hero>
        </section>
    )
};