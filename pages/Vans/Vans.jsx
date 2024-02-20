import React, { useState, useEffect } from "react"
import "./Vans.css"
import Van from "./Van"

export default function Vans() {
    const [vans, setVans] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("api/vans")
            .then(response => response.json())
            .then(data => {
                setVans(data['vans']);
                setLoading(false);
            })
    }, []);

    return (
        <div className="">
            <h1>Explore our van options</h1>
            <div>
                {loading === true ? "Loading" :
                    <div className="vans-collection">
                        {vans.map((van) => (
                            <Van key={van.id} props={van} />
                        ))}
                    </div>}
            </div>
        </div>
    )
};