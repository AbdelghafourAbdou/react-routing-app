import React, { useState } from 'react'
import { useLoaderData } from "react-router-dom"
import { loginUser } from '../api';

export async function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

const Login = () => {
    const message = useLoaderData();
    const [loginFormData, setloginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        try {
            setStatus('submitting');
            const data = await loginUser(loginFormData);
            //console.log(data);
        } catch (error) {
            //console.error("Login failed: ", error);
            setError(error);
        } finally {
            setStatus('idle');
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setloginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className='sign-in-container'>
            <h1>Sign in to your account!</h1>
            {message && <h3>{message}</h3>}
            {error && <h3>{error.statusText} - {error.message}</h3>}
            <form onSubmit={handleSubmit} className='sign-in-form'>
                <input name='email' type='email' placeholder='Please enter your email'
                    onChange={handleChange} value={loginFormData.email}
                />
                <input name='password' type='password' placeholder='Please enter your password'
                    onChange={handleChange} value={loginFormData.password}
                />
                <button disabled={ status === 'submitting' } >{ status === 'submitting' ? "Logging in ..." : "Log in"}</button>
            </form>

        </div>
    )
}

export default Login