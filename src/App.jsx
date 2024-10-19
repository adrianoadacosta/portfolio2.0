import './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

//componentes
import NavbarPrincipal from './components/NavbarPrincipal'
import NavbarProjects from './components/NavbarProjects'

// pages
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer'
import FrontEnd from './pages/Projects/FrontEnd'
import BackEnd from './pages/Projects/backEnd'
import FullStack from './pages/Projects/FullStack'
import NotFound from './pages/NotFound/NotFound'
import Info from './pages/Info/Info'


function App() {
  const location = useLocation(); // Hook para pegar a rota atual
  const [showProjectsNavbar, setShowProjectsNavbar] = useState(false);

  useEffect(() => {
    // Exibe a NavbarProjects apenas quando estiver na rota /projects ou subrotas
    if (location.pathname.startsWith('/projects')) {
      setShowProjectsNavbar(true);
    } else {
      setShowProjectsNavbar(false);
    }
  }, [location.pathname]); // Executa toda vez que a rota muda

  return (
    <>
    
      <NavbarPrincipal />
      {showProjectsNavbar && <NavbarProjects/>}
        <div className="container">
          <Routes>
              <Route path='/' element={<About/>} />
              <Route path='/projects'/>
              <Route path='/projects/front' element={<FrontEnd/>} />
              <Route path='/projects/back' element={<BackEnd/>} />
              <Route path='/projects/full' element={<FullStack/>} />
              <Route path="/projects/:id/info" element={<Info />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='*' element={< NotFound />} />
          </Routes>
        </div>        
        <Footer/>
     
    </>
  )
}

export default App
