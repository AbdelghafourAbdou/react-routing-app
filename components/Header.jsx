import { NavLink } from "react-router-dom"
import avatar from "../assets/images/avatar-icon.png"

const Header = () => {

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? 'isFocused' : null} to="login"><img src={avatar} className='profile-icon'/></NavLink>
            </nav>
        </header>
    )
}

export default Header