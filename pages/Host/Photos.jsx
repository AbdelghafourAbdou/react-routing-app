import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
    const [van, ] = useOutletContext();

    return (
        <div className='details'>
            <img src={van.imageUrl} alt='Van Image'/>
        </div>
    )
}

export default Photos