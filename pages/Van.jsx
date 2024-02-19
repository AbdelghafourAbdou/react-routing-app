import React from 'react'
import './Van.css'

const Van = ({ props }) => {
    let newType = [props.type[0].toUpperCase(), props.type.slice(1)];
    newType = newType.join('');
    let bgColor;
    switch (newType) {
        case 'Simple':
            bgColor = 'orangered';
            break;
        
        case 'Luxury':
            bgColor = 'black';
            break;
        
        case 'Rugged':
            bgColor = 'green';
            break;

        default:
            break;
    }

    return (
        <div className='van'>
            <img src={props.imageUrl} alt='van picture' />
            <div className='under'>
                <p className='name'>{props.name}</p>
                <p className='price'>${props.price}/Day</p>
            </div>
            <button type='button' style={{backgroundColor: bgColor}}>
                {newType}
            </button>
        </div>
    )
}

export default Van