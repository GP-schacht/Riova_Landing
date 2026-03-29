import Hero from "../components/layout/hero";
import Img01 from '../assets/vision-mision-otros/DSC00420.webp';
// import heroImg from '../assets/images/hero.png'; // ejemplo si luego agregas imagen

export default function HeroPy() {
  return (
    <section id="hero" className="  pt-20  h-[90vh]  content-center" style={{
        backgroundImage: `url(${Img01})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='absolute inset-0 bg-black/50' />
                <Hero
                    titleA={'SOMOS'}
                    titleB={' RIOVA'}
                    description={'Gestión comunitaria de residuos sólidos en Mastranto Rural, La Chorrera, para la protección del río Caimito y sus ecosistemas ribereños.'}
                    titleSize={'xl:text-8xl'}
                    colorHighlight={'#C9D755'}>
                </Hero>
            </section>
  );
}