import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin");

    if (!isLoggedIn) {
        const path = new URL(request.url).pathname;
        throw redirect(`/login?message=You must be logged in first!&redirectTo=${path}`);
    }
}