import { NavLink } from "react-router-dom";

//css

import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
          <NavLink to="/" className={styles.brand}>
           Mini <span>Blog</span>
          </NavLink>
            <ul className={styles.links_list}>
                <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/About"className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
