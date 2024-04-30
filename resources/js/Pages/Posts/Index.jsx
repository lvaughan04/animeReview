import React from "react";
import { router, Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import Post from "@/Components/Post";


//Animes variable is from the AnimeController index method
export default function Index({posts}) {
     console.log(posts);
    return (
        <NavBarLayout>
            <h1 className=" text-center font-bold text-2xl">Posts</h1>

            <Link href="/posts/create" className="">Create new Post</Link>
            <ul className=" container  mx-auto p-4 flex flex-wrap">
                {/* if there is data in the post, then display it */}
                {posts.data && posts.data.map(post => (
                    <li key={post.id} className="w-full sm:w-1/2 md:w-1/4 p-2">
                        <Post key={post.id} post={post}/>
                    </li>
                ))}
            </ul>
            <div>
                <button
                    onClick={() => posts.prev_url && Inertia.visit(posts.prev_url)}
                    // 
                    >
                    Previous Page
                </button>
                <button
                    onClick={() => posts.next_url && Inertia.visit(posts.next_url)}
                    // disabled={!posts.next_url}
                    >
                    Next Page
                </button>
            </div>
        </NavBarLayout>
    );
}