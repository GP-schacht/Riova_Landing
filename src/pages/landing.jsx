import Navbar from '../components/layout/navbar.jsx';
import Footer from '../components/layout/footer.jsx';
import Hero from '../sections/hero.jsx';
import AboutPy from '../sections/about-py.jsx';


export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutPy />
      </main>
      <Footer />
    </div>
  );
}