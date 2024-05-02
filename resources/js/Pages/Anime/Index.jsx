import React from "react";
import { router, Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";

//Animes variable is from the AnimeController index method
export default function Index({animes}) {
     console.log(animes);
    return (
        <NavBarLayout>

            <h1 className="text-4xl font-bold text-center my-8">Welcome to our Anime Selection</h1>
            
            <div className="grid grid-cols-4 gap-4 mx-8">
                {animes.data.map(anime => (
                    <div key={anime.id} className="bg-white rounded-lg shadow-lg p-4">
                         <h2 className="text-xl font-semibold mb-2">
                            <Link href={route('animes.show', { id: anime.id })} className="text-blue-500 hover:text-blue-700">
                                {anime.title}
                            </Link>
                        </h2>
                        <p className="text-gray-700 mb-4">{anime.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between my-8 mx-8">
                {animes.prev_page_url && (
                    <button onClick={() => router.visit(animes.prev_page_url)}>
                        Previous Page
                    </button>
                )}
                {animes.next_page_url && (
                    <button onClick={() => router.visit(animes.next_page_url)}>
                        Next Page
                    </button>
                )}
            </div>
        </NavBarLayout>
    );
}
    