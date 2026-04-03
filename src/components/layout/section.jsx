// src/components/layout/SectionTextImages.jsx
import Container from "../ui/container";
import { useInView } from '../../hooks/useInView';

export default function SectionTextImages({
    id = 'section',
    title,
    highlight,
    description,
    images = [],
    containerVariant = 'rounded1' 
}) {
    const { ref, isInView } = useInView({ threshold: 0.2, once: true });
    const isLeft = containerVariant === 'rounded2'; // Puedes ajustar esto según tus necesidades para determinar la dirección de la animación
    return (
        <section id={id}>
            <Container variant={containerVariant} className="py-16 md:py-20 translate-y-[-2rem] my-[5rem]">
                <div ref={ref} className='grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'>

                    {/* Texto */}
                    <div className={`flex flex-col justify-center items-start gap-6 
                        ${isInView ? 'animate-slide-in-left' : 'animate-slide-out-left'}
                        ${isLeft ? 'order-2' : 'order-1'}`}
                    >
                        <h1 className="text-4xl sm:text-4xl xl:text-5xl text-[#313d32] font-extrabold leading-tight">
                            {title}{' '}
                            {highlight && <span className="text-[#C9D755]">{highlight}</span>}
                        </h1>
                        <p className='text-[#313d32] text-base sm:text-lg leading-relaxed text-justify'>
                            {description}
                        </p>
                    </div>

                    {/* Imágenes */}
                    <div className={`flex flex-col gap-8 justify-center items-center
                        aspect-[4/3] w-full max-w-xs sm:max-w-sm xl:max-w-md mx-auto
                        ${isInView ? 'animate-slide-in-right' : 'animate-slide-out-right'}
                        ${isLeft ? 'order-1' : 'order-2'}`}
                    >
                        {images.map((img, index) => (
                            <img key={index} src={img.src} alt={img.alt} className='w-full h-auto object-contain' />
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
