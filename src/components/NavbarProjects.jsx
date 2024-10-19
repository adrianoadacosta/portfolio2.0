import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavbarProjects = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/projects/front' 
        className={({ isActive }) => (isActive ? styles.active : '')}
        >Front-end</NavLink>
        <NavLink to='/projects/back'
        className={({ isActive }) => (isActive ? styles.active : '')}
        >Back-end</NavLink>
        <NavLink to='/projects/full'
        className={({ isActive }) => (isActive ? styles.active : '')}
        >Full Stack</NavLink>
    </nav>
  )
}

export default NavbarProjects
