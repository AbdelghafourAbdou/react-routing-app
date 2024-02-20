import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HostLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/host">Dashboard</Link>
                    <Link to="/host/income">Income</Link>
                    <Link to="/host/reviews">Reviews</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default HostLayout