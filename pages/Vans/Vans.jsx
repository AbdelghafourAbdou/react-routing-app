import React, { useState, useEffect } from "react"
import { Link, useSearchParams } from 'react-router-dom'
import "./Vans.css"
import Van from "./Van"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState(null);
    const [loading, setLoading] = useState(true);

    let displayedVans = [];
    const typeFilter = searchParams.get('type');

    useEffect(() => {
        fetch("api/vans")
            .then(response => response.json())
            .then(data => {
                setVans(data['vans']);
                setLoading(false);
            })
    }, []);

    if (!loading && !typeFilter) {
        displayedVans = vans;
    } else if (!loading && typeFilter) {
        const filteredVans = vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase());
        displayedVans = filteredVans;
    }

    function addSearchParams(key, value) {
        setSearchParams(prev => {
            let search = new URLSearchParams(prev);
            if (!value) {
                search.delete(key);
            } else {
                search.set(key, value);
            }
            return `?${search.toString()}`;
        });
    }

    return (
        <div className="">
            <h1>Explore our van options</h1>
            <div className='type-filter'>
                <button onClick={() => addSearchParams('type', 'simple')}>Simple</button>
                <button onClick={() => addSearchParams('type', 'rugged')}>Rugged</button>
                <button onClick={() => addSearchParams('type', 'luxury')}>Luxury</button>
                <button onClick={() => addSearchParams('type', '')}>Clear</button>
                {/* <Link to='?type=simple'>Simple</Link>
                <Link to='?type=rugged'>Rugged</Link>
                <Link to='?type=luxury'>Luxury</Link>
                <Link to='.'>Clear</Link> */}
            </div>
            <div>
                {loading === true ? "Loading" :
                    <div className="vans-collection">
                        {displayedVans.map((van) => (
                            <Van key={van.id} props={van} />
                        ))}
                    </div>}
            </div>
        </div>
    )
};