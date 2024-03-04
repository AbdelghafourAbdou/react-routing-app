import React from 'react'
import { useRouteError } from 'react-router-dom'

const DataError = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>An Error Happened:</h1>
            <ul>
                <li>Message: {error.message}</li>
                <li>Status: {error.status}</li>
                <li>Status Text: {error.statusText}</li>
            </ul>
        </div>
    )
}

export default DataError