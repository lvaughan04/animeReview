import React from "react";
import { Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";

//Animes variable is from the AnimeController index method
export default function Index({posts}) {
     console.log(posts);
    return (
        <NavBarLayout>
            <h1><b>Posts</b></h1>
            
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={route('posts.show', { id: post.id })}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </NavBarLayout>
    );
}