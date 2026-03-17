import Container from '../components/ui/container.jsx';
import Button from '../components/ui/button.jsx';
export default function AboutPy() {
    return (
        <section id="about-py" className="h-[70vh] ">
            <Container variant='rounded1' className="h-[60vh] bg-blue-800" >

                <div className='grid grid-cols-2 '>
                    <div className='flex flex-col justify-center items-start gap-6 max-w-lg '>
                        <h1 className="text-8xl text-white font-bold mb-8" >¿Qué es <span className="text-lime-300">Riova</span>?</h1>
                        <p className='text-white'>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes y expertos alike.</p>

                        <div className='flex gap-4 mt-6'>
                            <Button as="a" href="#pricing" variant='terciary'>
                                Conocer mas...
                            </Button>

                        </div>
                    </div>


                    <div>
                        <div className='w-[30rem] h-80 bg-lime-300 rounded-lg animate-slide-in-left'></div>

                    
                       


                    </div>

                </div>
            </Container>
        </section>
    );

}