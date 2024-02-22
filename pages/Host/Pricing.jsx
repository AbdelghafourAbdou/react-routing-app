import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {
    const [van, newType] = useOutletContext();

    return (
        <div>Pricing</div>
    )
}

export default Pricing