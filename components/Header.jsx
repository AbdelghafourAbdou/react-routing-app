import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="vans">Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header