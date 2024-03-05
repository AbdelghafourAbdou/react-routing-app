import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";

const Header = () => {
    const [isLoggedIn, setisLoggedIn] = useState(Boolean(localStorage.getItem('loggedin')));
    const location = useLocation();

    function logout() {
        localStorage.removeItem("loggedin");
        setisLoggedIn(false);
        window.location.reload();
    }

    useEffect(() => {
        setisLoggedIn(Boolean(localStorage.getItem('loggedin')));
    }, [location.pathname])

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'isFocused' : null} to="host">Host</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'isFocused' : null} to="about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'isFocused' : null} to="vans">Vans</NavLink>
                {isLoggedIn ? <button onClick={logout} >X</button> : <NavLink className={({ isActive }) => isActive ? 'isFocused' : null} to="login"><img src={avatar} className='profile-icon' /></NavLink>}
            </nav>
        </header>
    )
}

export default Header