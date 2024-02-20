import React from 'react'
import {Link} from 'react-router-dom'

const DashboardHeader = () => {
    return (
        <header>
            <nav>
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
        </header>
    )
}

export default DashboardHeader