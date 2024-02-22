import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

    return (
        <>
            <header>
                <nav>
                    <NavLink end className={({isActive}) => isActive ? 'isFocused' : {}} to="/host">Dashboard</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="/host/income">Income</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="/host/vans">Vans</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="/host/reviews">Reviews</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default HostLayout