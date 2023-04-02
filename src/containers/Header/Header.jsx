import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/vehicles">Vehicles</NavLink>
            <NavLink to="/people/?page=1">People</NavLink>
        </header>
    )
}

export default Header;