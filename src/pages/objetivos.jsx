import Footer from '../components/layout/footer.jsx';
import Navbar from '../components/layout/navbar.jsx';
import Hero from '../sections/hero-objetivos.jsx';
import GeneralObjetivos from '../sections/general-objetivos.jsx';
import EspecificoObjetivos from '../sections/especifico-objetivos.jsx';

export default  function Objetivos (){
return(
     <div className="min-h-screen text-gray-900">
            <Navbar />
            <Hero />

            <main>
              <GeneralObjetivos />
              <EspecificoObjetivos />   
            </main>
            <Footer />
        </div>
)

}