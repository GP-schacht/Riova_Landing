import Footer from '../components/layout/footer.jsx';
import Navbar from '../components/layout/navbar.jsx';
import Hero from '../sections/hero-equipo.jsx';
import Gallery from '../sections/gallery-equipo.jsx'

export default function Equipo() {
    return (
        <div className="min-h-screen text-gray-900">
            <Navbar />
            <main>
                <Hero />
                <Gallery />
            </main>
            <Footer />
        </div>
    )

}