import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
    const [van, newType] = useOutletContext();

    return (
        <div>Photos</div>
    )
}

export default Photos