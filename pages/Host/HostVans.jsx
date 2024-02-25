import React, { useEffect, useState } from 'react'
import VanCard from '../../components/VanCard';
import '../../components/VanCard.css'
import { Link } from 'react-router-dom';

const HostVans = () => {
    const [vansList, setVansList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(resp => resp.json())
            .then(data => {
                setVansList(data.vans);
                setLoading(false);
            })
    }, [])


    const renderedVans = vansList.map((van) =>
        <Link key={van.id} to={van.id}>
            <VanCard key={van.id} van={van} />
        </Link>
    )

    console.log(renderedVans)
    return (
        <div>
            <h1>Your Listed Vans: </h1>
            <div className='vans-list'>
                {loading === true ? "Loading" :
                    renderedVans
                }
            </div>
        </div>
    )
}

export default HostVans