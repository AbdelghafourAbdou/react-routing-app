import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './HostVan.css'

const Pricing = () => {
    const [van,] = useOutletContext();

    return (
        <div className='details' style={{fontSize: '1.5rem'}}>
            <span className='bolden'>${van.price}</span>/day
        </div>
    )
}

export default Pricing