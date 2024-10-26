import styles from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types'; // Importa o pacote prop-types
import { useState } from 'react';

const NavbarPrincipal = ({onProjectsClick = () => {}}) => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query){
      navigate(`/search?q=${query}`);
      setQuery('');
    }
  }

  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        <NavLink to='/projects' onClick={onProjectsClick} 
        className={({ isActive }) => (isActive ? styles.active : '')}
        >Projetos</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}
        >Contato</NavLink>
          <form onSubmit={handleSubmit}>
              <input type="text"
              placeholder='Busque uma tag ou projeto...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button className={styles.button_search}>Pesquisar</button>
          </form>
    </nav>
  )
}

// Define os prop-types para validar as props
NavbarPrincipal.propTypes = {
  onProjectsClick: PropTypes.func, // Valida que a prop onProjectsClick é uma função
};

export default NavbarPrincipal