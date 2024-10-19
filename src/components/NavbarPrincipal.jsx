import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types'; // Importa o pacote prop-types

const NavbarPrincipal = ({onProjectsClick = () => {}}) => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        <NavLink to='/projects' onClick={onProjectsClick} 
        className={({ isActive }) => (isActive ? styles.active : '')}
        >Projetos</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? styles.active : '')}
        >Contato</NavLink>
    </nav>
  )
}

// Define os prop-types para validar as props
NavbarPrincipal.propTypes = {
  onProjectsClick: PropTypes.func, // Valida que a prop onProjectsClick é uma função
};

export default NavbarPrincipal