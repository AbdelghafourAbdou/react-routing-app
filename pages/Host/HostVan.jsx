import React from 'react'
import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'
import './HostVan.css'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ request, params }) {
    await requireAuth(request);
    return getHostVans(params.id);
}

const HostVan = () => {
    const van = useLoaderData();
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
            <Link className='link' to={'..'} relative='path'>{`<= Back to All Vans`}</Link>

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
                            <NavLink end className={({ isActive }) => isActive ? 'isFocused' : {}} to={`.`}>Details</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'isFocused' : {}} to={`pricing`}>Pricing</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'isFocused' : {}} to={`photos`}>Photos</NavLink>
                        </nav>
                    </header>
                    <Outlet context={[van, newType]} />
                </div>
            </div>
        </div>
    )
}

export default HostVan