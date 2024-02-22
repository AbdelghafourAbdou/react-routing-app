import React, { useEffect, useState } from 'react'
import { Link, useParams, Outlet, NavLink, useLocation } from 'react-router-dom'
import './HostVan.css'


const HostVan = () => {
    const path = useLocation();
    const { id } = useParams();

    const [van, setVan] = useState({});
    const [loading, setLoading] = useState(true);
    let newType = null;
    let bgColor = 'white';

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setVan(data.vans[0]);
                setLoading(false);
            })

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
            <Link className='link' to={'/host/vans'}>{`<= Back to All Vans`}</Link>
            {loading === true ? "Loading" :
                <div className='van-host'>
                    <div className='van-card'>
                        <div className='van-card-inner'>
                            <img src={van.imageUrl} />
                            <div className='van-info'>
                                <button style={{ backgroundColor: bgColor }} type='button'>{newType}</button>
                                <p style={{ fontWeight: "bolder" }}>{van.name}</p>
                                <p>${van.price}/day</p>
                            </div>
                        </div>
                        <header className='inner-header'>
                            <nav>
                                <NavLink className={({ isActive }) => isActive || path.pathname == `/host/vans/${id}` ? 'isFocused' : {}} to={`/host/vans/${id}/details`}>Details</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'isFocused' : {}} to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'isFocused' : {}} to={`/host/vans/${id}/photos`}>Photos</NavLink>
                            </nav>
                        </header>
                        <Outlet context={[van, newType]}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default HostVan