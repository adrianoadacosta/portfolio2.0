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
import Search from './pages/Search/Search'
import ScrollToTop from './components/ScrollToTop'


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

// Estado do modo escuro, carregando do localStorage
const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark"; // Se "dark" estiver salvo, ativa o modo escuro
});

const toggleDarkMode = () => {
  setIsDarkMode((prevMode) => {
    const newMode = !prevMode;
    localStorage.setItem("theme", newMode ? "dark" : "light"); // Salva a escolha no localStorage
    return newMode;
  });
};

  return (
    <>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Modo Normal' : 'Modo Escuro'}
        </button>
         
        <NavbarPrincipal />
        {showProjectsNavbar && <NavbarProjects/>}
        <div className="container">
          <Routes>
              <Route path='/' element={<About/>} />
              <Route path='/projects'/>
              <Route path='/projects/front' element={<FrontEnd isDarkMode={isDarkMode}/>} />
              <Route path='/projects/back' element={<BackEnd isDarkMode={isDarkMode}/>} />
              <Route path='/projects/full' element={<FullStack isDarkMode={isDarkMode}/>} />
              <Route path="/projects/:id/info" element={<Info />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path="/search" element={<Search />} />
              <Route path='*' element={< NotFound />} />
          </Routes>
        </div>        
        <Footer/>
        <ScrollToTop />

      </div>         
    </>
  )
}

export default App
