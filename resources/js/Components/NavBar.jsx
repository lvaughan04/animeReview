import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { useState } from "react";

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
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="text-blue-500 hover:text-blue-700 text-lg font-semibold focus:outline-none">
                                    {auth.user.name}
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content align="right" width="48">
                                <Dropdown.Link href={`/users/${auth.user.id}`}>Profile</Dropdown.Link> {/*This is backwards because I don't want to refactor every thing that has profile in the name*/}
                                <Dropdown.Link href="/profile">Settings</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <Link className="text-blue-500 hover:text-blue-700 text-lg font-semibold" href="/login">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
}