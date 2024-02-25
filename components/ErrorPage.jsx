import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {

  return (
    <div className='error-404'>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to='..' className='back-home'>Return to Home</Link>
    </div>
  )
}

export default ErrorPage