import React, { Suspense } from 'react'
import VanCard from '../../components/VanCard';
import '../../components/VanCard.css'
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from "../../api"
import { requireAuth } from '../../utils';

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
    const hostVansPromise = useLoaderData();



    function renderHostVans(hostVans) {
        const renderedVans = hostVans.map((van) =>
            <Link key={van.id} to={van.id}>
                <VanCard key={van.id} van={van} />
            </Link>
        )
        return (
            <div className='vans-list'>
                {renderedVans}
            </div>
        )
    }

    return (
        <div>
            <h1>Your Listed Vans: </h1>
            <Suspense fallback={<h2>Host Vans Loading ...</h2>}>
                <Await resolve={hostVansPromise.hostVans}>
                    {renderHostVans}
                </Await>
            </Suspense>
        </div>
    )
}

export default HostVans