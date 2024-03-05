import React from 'react'
import VanCard from '../../components/VanCard';
import '../../components/VanCard.css'
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from "../../api"
import { requireAuth } from '../../utils';

export async function loader({ request }) {
    await requireAuth(request);
    return getHostVans();
}

const HostVans = () => {
    const vansList = useLoaderData();

    const renderedVans = vansList.map((van) =>
        <Link key={van.id} to={van.id}>
            <VanCard key={van.id} van={van} />
        </Link>
    )

    return (
        <div>
            <h1>Your Listed Vans: </h1>
            <div className='vans-list'>
                {renderedVans}
            </div>
        </div>
    )
}

export default HostVans