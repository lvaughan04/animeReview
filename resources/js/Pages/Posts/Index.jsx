import React from "react";
import { router, Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import Post from "@/Components/Post";


//Animes variable is from the AnimeController index method
export default function Index({ posts }) {
    console.log(posts);
    return (
        <NavBarLayout>
            <h1 className="text-center font-bold text-3xl mt-6 mb-4">Posts</h1>

            <Link href="/posts/create" className="block text-center text-blue-600 hover:text-blue-800 font-semibold mb-4">
                Create new Post
            </Link>
            <ul className="container mx-auto p-4 flex flex-wrap">
                {/* if there is data in the post, then display it */}
                {posts.data && posts.data.map(post => (
                    <li key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <Post key={post.id} post={post} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-between my-8 mx-8">
                {posts.prev_page_url && (
                    <button onClick={() => router.visit(posts.prev_page_url)}>
                        Previous Page
                    </button>
                )}
                {posts.next_page_url && (
                    <button onClick={() => router.visit(posts.next_page_url)}>
                        Next Page
                    </button>
                )}
            </div>
        </NavBarLayout>
    );
}