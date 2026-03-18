import Navbar from '../components/layout/navbar.jsx';
import Footer from '../components/layout/footer.jsx';
import Hero from '../sections/hero.jsx';
import AboutPy from '../sections/about-py.jsx';
import Mision from '../sections/mision.jsx';
import Vision from '../sections/vision.jsx';
import Cards from '../sections/cards.jsx';

export default function Landing() {
  return (
    <div className="
    
    min-h-screen 
    bg-white 
    text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutPy />
        <Mision />
        <Vision/>
        <Cards/>
      </main> 
      <Footer />
    </div>
  );
}