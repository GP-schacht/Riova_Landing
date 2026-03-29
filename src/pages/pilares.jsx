import Footer from '../components/layout/footer.jsx';
import Navbar from '../components/layout/navbar.jsx';
import Hero from '../sections/hero-pilares.jsx';
import Salud from '../sections/salud-pilares.jsx';
import Habilidades from '../sections/habilidades-pilares.jsx';


export default  function Pilares (){
return(
     <div className="min-h-screen text-gray-900">
            <Navbar />
            <main>
                <Hero />
                <Salud />
                <Habilidades />
            </main>
            <Footer />
        </div>
)

}