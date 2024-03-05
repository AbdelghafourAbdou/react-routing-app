import React from 'react'
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from '../api';

export async function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const data = await loginUser({ email, password });
        console.log(data);
        const redirectTo = new URL(request.url).searchParams.get('redirectTo') || "/host" ;
        return redirect(redirectTo);
    } catch (error) {
        return error;
    }
}

const Login = () => {
    const message = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();
    const status = navigation.state;

    return (
        <div className='sign-in-container'>
            <h1>Sign in to your account!</h1>
            {message && <h3>{message}</h3>}
            {error && <h3>{error.statusText} - {error.message}</h3>}
            <Form method='post' className='sign-in-form' replace>
                <input name='email' type='email' placeholder='Please enter your email' />
                <input name='password' type='password' placeholder='Please enter your password' />
                <button disabled={status === 'submitting'} >{status === 'submitting' ? "Logging in ..." : "Log in"}</button>
            </Form>

        </div>
    )
}

export default Login