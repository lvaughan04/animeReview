import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NavBar() {
    const { props } = usePage();
    const { auth } = props;

    return (
        <div className='bg-white shadow-md'>
            <nav className='container mx-auto flex justify-between items-center py-4'>
                <div className='flex items-center space-x-4'>
                    <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/dashboard">Dashboard</Link>
                    <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/animes">Anime</Link>
                    <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/posts">Posts</Link>
                </div>
                <div className='flex items-center space-x-4'>
                    {auth.user ? (
                        <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/profile">{auth.user.name}</Link>
                    ) : (
                        <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/login">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
}