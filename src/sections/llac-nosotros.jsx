import Card from "../components/layout/card";
import Container from "../components/ui/container";
import Img01 from '../assets/recursos-externos/canal logo.png'
import Img02 from '../assets/recursos-externos/JUPE.png'
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

   

export default function llacNosotros() {
     const { ref, isInView } = useInView({
        threshold: 0.2,
        once: true,
    });
    return (
        <section id="nosotros">
            <Container variant='rounded1' className=" py-16 md:py-20 translate-y-[-2rem] my-[5rem]">    
            <div ref={ref} className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'>
           
                               {/* Texto — arriba en mobile, izquierda en desktop */}
                               <div className={`flex flex-col justify-center items-start gap-6 
                                   ${isInView ? 'animate-slide-in-left' : ' animate-slide-out-left'}`}
                               >
                                   <h1 className="text-4xl  sm:text-4xl xl:text-5xl text-[#313d32] font-extrabold leading-tight">
                                       Laboratorio Latinoamericano de <span className="text-[#C9D755]">Acción Ciudadana 2026 </span>
                                   </h1>
                                   <p className='text-[#313d32] text-base sm:text-lg leading-relaxed text-justify'>
                                       El Laboratorio Latinoamericano de Acción Ciudadana (LLAC) 2026 es una iniciativa organizada por la Autoridad del Canal de Panamá
                                        en conjunto con Jóvenes Unidos por la Educación. Se trata de un programa que busca impulsar la participación juvenil en temas de ciudadanía, 
                                        liderazgo y transformación social. En su séptima edición 'LLAC 1.0 2026', se seleccionaron jóvenes de distintas provincias de Panamá para formar parte de este espacio de aprendizaje y acción. El objetivo central es brindarles herramientas y experiencias que les permitan convertirse en agentes de cambio en sus comunidades, bajo el lema “Transformar Panamá está en tus manos”.
                                   </p>
                                
                               </div>
           
                               {/* Imagen — abajo en mobile, derecha en desktop */}
                               <div className={`flex flex-col gap-8 justify-center items-center
                                   aspect-[4/3] w-full max-w-xs sm:max-w-sm xl:max-w-md mx-auto
                                   ${isInView ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}
                               >
                                   <img
                                       src={Img01}
                                       alt="Riova logo"
                                       className='w-full h-auto object-contain'
                                   />
                                    <img
                                       src={Img02}
                                       alt="Riova logo"
                                       className='w-full h-auto object-contain'
                                   />

                               </div>
                           </div>   
            </Container>
        </section>
    );
}             