import Footer from '../components/layout/footer.jsx';
import Navbar from '../components/layout/navbar.jsx';
import Llac from '../sections/llac-nosotros.jsx';
import Hero from '../sections/hero-nosotros.jsx';
import About from '../sections/about-nosotros.jsx'

export default function Nosotros() {
return (
    <div className="min-h-screen text-gray-900">
        <Navbar />
        <main>
            <Hero/>
             <About/>
            <Llac/>
           
        </main>
        <Footer />
    </div>
);
}