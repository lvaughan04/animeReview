import React from "react";
import { Link } from "@inertiajs/react";
import NavBarLayout from "@/Layouts/NavBarLayout";

//Animes variable is from the AnimeController index method
export default function Index({animes}) {
     console.log(animes);
    return (
        <NavBarLayout>
            <div>Welcome to our Anime Selection</div>
            
            <ul>
                {animes.map(anime => (
                    <li key={anime.id}>
                        <Link href={route('animes.show', { id: anime.id })}>
                            {anime.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </NavBarLayout>
    );
}
    