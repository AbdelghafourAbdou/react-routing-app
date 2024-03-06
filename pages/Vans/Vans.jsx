import React, { Suspense } from "react"
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'
import "./Vans.css"
import Van from "./Van"
import { getVans } from "../../api"

export function loader() {
    return defer({
        vans: getVans()
    });
}

export default function Vans() {
    const loadedData = useLoaderData();

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');

    let displayedVans = [];

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

    function renderPage(vans) {
        displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans;
        return (
            <div>
                <div className='type-filter'>
                    <button style={typeFilter === 'simple' ? simpleStyle : null} onClick={() => addSearchParamsforButtons('type', 'simple')}>Simple</button>
                    <button style={typeFilter === 'rugged' ? ruggedStyle : null} onClick={() => addSearchParamsforButtons('type', 'rugged')}>Rugged</button>
                    <button style={typeFilter === 'luxury' ? luxuryStyle : null} onClick={() => addSearchParamsforButtons('type', 'luxury')}>Luxury</button>
                    {typeFilter ? clear : null}
                    {/* <Link to={addSearchParamsforLinks('type', 'simple')}>Simple</Link>
                                    <Link to={addSearchParamsforLinks('type', 'rugged')}>Rugged</Link>
                                    <Link to={addSearchParamsforLinks('type', 'luxury')}>Luxury</Link>
                                    <Link to={addSearchParamsforLinks('type', '')}>Clear</Link> */}
                </div>

                <div className="vans-collection">
                    {displayedVans.map((van) => (
                        <Van key={van.id} props={[van, searchParams]} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <h1>Explore our van options</h1>
            <Suspense fallback={<h2>Loading Vans ... </h2>}>
                <Await resolve={loadedData.vans}>
                    {renderPage}
                </Await>
            </Suspense>
        </div>
    )
};