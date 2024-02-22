import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Details = () => {
    const [van, newType] = useOutletContext();

    const bolden = {
        fontWeight: 900,
        color: 'black',
    }

    return (
        <div className='details'>
            <p><span style={bolden}>Name: </span>{van.name}</p>
            <br/>
            <p><span style={bolden}>Category: </span>{newType}</p>
            <br/>
            <p><span style={bolden}>Description: </span>{van.description}</p>
            <br/>
            <p><span style={bolden}>Visibility: </span>Public</p>
        </div>
    )
}

export default Details