import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

    return (
        <>
            <header>
                <nav>
                    <NavLink end className={({isActive}) => isActive ? 'isFocused' : {}} to=".">Dashboard</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="income">Income</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="vans">Vans</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'isFocused' : {}} to="reviews">Reviews</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default HostLayout