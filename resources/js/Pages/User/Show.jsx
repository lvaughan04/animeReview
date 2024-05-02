import NavBarLayout from "@/Layouts/NavBarLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function UserShow({user}) {
    return (
        <NavBarLayout>
            <h1>{user.name}'s Posts</h1>

            {user.posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </NavBarLayout>
    )
}