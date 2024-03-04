import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import './DetailedVan.css'
import { getVans } from '../../api'

export function loader({ params }) {
    return getVans(params.id);
}

const DetailedVan = () => {
    const van = useLoaderData();

    const location = useLocation();
    let searchParametres = new URLSearchParams(location.search);
    searchParametres.delete('type');
    const searchParamsBack = location.state?.searchParams || searchParametres;
    const finalSearchParams = new URLSearchParams(searchParamsBack);
    const keywordToShow = finalSearchParams.get('type');

    let newType = null;
    let bgColor = 'white';

    newType = [van.type[0].toUpperCase(), van.type.slice(1)];
    newType = newType.join('');
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
        <div>
            <Link className='link' to={`..?${searchParamsBack.toString()}`} relative='path'>&larr; Back to {keywordToShow || 'All'} Vans</Link>
            <br />
            <br />
            <div className='vanInfo'>
                <img src={van.imageUrl} />
                <button type='button' style={{ backgroundColor: bgColor, color: 'white' }}>
                    {newType}
                </button>
                <div className='details'>
                    <p className='name'>{van.name}</p>
                    <p className='price'><span className='bolden'>${van.price}</span>/Day</p>
                    <p>{van.description}</p>
                </div>
                <button className='rent' type='button'>Rent this Van!</button>
            </div>
        </div>
    )
}

export default DetailedVan