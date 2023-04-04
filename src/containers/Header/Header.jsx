import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.header__elem}>Home</NavLink>
            <NavLink to="/vehicles" className={styles.header__elem}>Vehicles</NavLink>
            <NavLink to="/people/?page=1" className={styles.header__elem}>People</NavLink>
        </header>
    )
}

export default Header;