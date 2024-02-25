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

    function addSearchParamsforButtons(key, value) {
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

    // function addSearchParamsforLinks(key, value){
    //     let search = new URLSearchParams(searchParams);
    //         if (!value) {
    //             search.delete(key);
    //         } else {
    //             search.set(key, value);
    //         }
    //         return `?${search.toString()}`;
    // }

    let clear = <button onClick={() => addSearchParamsforButtons('type', '')}>Clear</button>;

    let simpleStyle = {
        backgroundColor: 'orangered',
        color: 'white'
    }
    let ruggedStyle = {
        backgroundColor: 'green',
        color: 'white'
    }
    let luxuryStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div className="">
            <h1>Explore our van options</h1>
            <div className='type-filter'>
                <button style={ typeFilter === 'simple' ? simpleStyle : null} onClick={() => addSearchParamsforButtons('type', 'simple')}>Simple</button>
                <button style={ typeFilter === 'rugged' ? ruggedStyle : null} onClick={() => addSearchParamsforButtons('type', 'rugged')}>Rugged</button>
                <button style={ typeFilter === 'luxury' ? luxuryStyle : null} onClick={() => addSearchParamsforButtons('type', 'luxury')}>Luxury</button>
                {typeFilter ? clear : null}
                {/* <Link to={addSearchParamsforLinks('type', 'simple')}>Simple</Link>
                <Link to={addSearchParamsforLinks('type', 'rugged')}>Rugged</Link>
                <Link to={addSearchParamsforLinks('type', 'luxury')}>Luxury</Link>
                <Link to={addSearchParamsforLinks('type', '')}>Clear</Link> */}
            </div>
            <div>
                {loading === true ? "Loading" :
                    <div className="vans-collection">
                        {displayedVans.map((van) => (
                            <Van key={van.id} props={[van, searchParams]} />
                        ))}
                    </div>}
            </div>
        </div>
    )
};