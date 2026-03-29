//app.jsx 
import { useState } from 'react'
import './styles/Global.css'
import Landing from './pages/landing'
import Nosotros from './pages/nosotros'
import Pilares from './pages/pilares'
import Objetivos from './pages/objetivos'
import Equipo from './pages/equipo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/others/scrollTop.jsx';

function App() {
  
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path='/pilares' element ={<Pilares />} />
        <Route path='/objetivos' element ={<Objetivos />} />
        <Route path='/equipo' element ={<Equipo />} />
      </Routes>
    </Router>
  );
}

export default App
