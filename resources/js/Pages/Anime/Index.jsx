import React from "react";
import { router, Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";

//Animes variable is from the AnimeController index method
export default function Index({animes}) {
     console.log(animes);
    return (
        <NavBarLayout>
            <div>Welcome to our Anime Selection</div>
            
            <ul>
                {animes.data.map(anime => (
                    <li key={anime.id}>
                        <Link href={route('animes.show', { id: anime.id })}>
                            {anime.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
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
    