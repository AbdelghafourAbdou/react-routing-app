import React from 'react'
import './VanCard.css'

const VanCard = ({ van }) => {
    return (
        <div className='van-card-orig'>
            <img src={van.imageUrl} />
            <div className='van-info'>
                <p style={{fontWeight: "bolder"}}>{van.name}</p>
                <p>${van.price}/day</p>
            </div>
        </div>
    )
}

export default VanCard