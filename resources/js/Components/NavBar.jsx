import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NavBar() {
    const { props } = usePage();
    const { auth } = props;

    return (
        <div className='bg-white text-blue-500 p-4'>
            <nav className='container mx-auto flex justify-between items-start'>
                <div className='text-lg font-sans font-semibold space-x-4'>
                    <Link className=" hover:text-blue-700" href="/dashboard">Dashboard</Link>
                    <Link className=" hover:text-blue-700" href="/animes">Anime</Link>
                    <Link className=" hover:text-blue-700" href="/posts">Posts</Link>
                </div>
                <div className='text-lg font-sans font-semibold space-x-4'>
                    {auth.user ? (
                        <Link className="hover:text-blue-700" href="/profile">{auth.user.name}</Link>
                    ) : (
                        <Link className="hover:text-blue-700" href="/login">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
}