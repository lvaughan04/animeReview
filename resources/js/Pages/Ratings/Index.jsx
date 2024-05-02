import NavBarLayout from "@/Layouts/NavBarLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({anime, ratings}){
    // console.log(anime)
    // console.log(ratings)
    // return (
    //     <NavBarLayout>
    //             <h1><Link href={`/animes/${ratings.anime_id}`}>{anime.title}</Link></h1>
    //             <h2>Ratings</h2>

    //             <div>
    //                 {(ratings.map(rating => (
    //                      <ul key={rating.id}>
    //                          <li>Score: {rating.score}</li>
    //                          <li>Content: {rating.reviewContent}</li>
    //                          <li className="font-bold">By: <Link href={`/users/${rating.user_id}`}>{rating.user.name}</Link></li>
    //                      </ul>
    //                     ))
    //                 )}
    //             </div> 
    //      </NavBarLayout>
    // )

}