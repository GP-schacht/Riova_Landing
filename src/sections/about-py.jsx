import Container2 from '../components/ui/container-2.jsx';
import Button from '../components/ui/button.jsx';
export default function AboutPy() {
return (
    <section id="about-py" className="py-16  h-[70vh] content-center items-end">
        <Container2 className="py-16">
            
            <div className='grid grid-cols-2 '>
<div>
<h2 className="text-3xl font-bold mb-8" >¿Qué es <span className="text-teal-500">Riova</span>?</h2>
<p>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes y expertos alike.</p>
 
 <div className='flex gap-4 mt-6'>
     <Button as="a" href="#pricing">
              call to action
            </Button>
            
 </div>
</div>
          

<div>
    <div className='w-full h-80 bg-gray-300 rounded-lg'>

    </div>

    
</div>

            </div>
        </Container2>
    </section>
);

}