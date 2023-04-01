import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/vehicles">Vehicles</NavLink>
            <NavLink to="/people">People</NavLink>
        </header>
    )
}

export default Header;