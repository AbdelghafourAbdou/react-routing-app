import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import './DetailedVan.css'

const DetailedVan = () => {
    const paramsObject = useParams();
    const vanId = paramsObject.id;
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    let searchParametres =  new URLSearchParams(location.search);
    searchParametres.delete('type'); 
    const searchParamsBack = location.state?.searchParams || searchParametres;
    const finalSearchParams = new URLSearchParams(searchParamsBack);
    const keywordToShow = finalSearchParams.get('type');
    console.log(keywordToShow);
    //console.log(location);

    let newType = null;
    let bgColor = 'white';

    useEffect(() => {
        fetch(`/api/vans/${vanId}`)
            .then(resp => resp.json())
            .then(data => {
                setVan(data.vans);
                setLoading(false);
            });
    }, [])

    if (loading === false) {
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
    }

    return (
        <div>
            <Link className='link' to={`..?${searchParamsBack.toString()}`} relative='path'>&larr; Back to {keywordToShow || 'All'} Vans</Link>
            <br/>
            <br/>
            {loading === true ? "Loading Van Data" :
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
        }
        </div>
    )
}

export default DetailedVan