import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import { Link } from "@inertiajs/react";

{/* <Link href={`/animes/${anime.id}/ratings/create`}></Link> */}

export default function Show({anime, averageRating}) {
    
    console.log(anime);
    return (
        <NavBarLayout>
            {/**Logic for showing Anime */}
            <div>
                <h1 className="font-bold">{anime.title}</h1>
                <p>Average Rating: {averageRating}</p>
                <p>Description: {anime.description}</p>
                <p> <Link href={`/animes/${anime.id}/ratings/create`} data={{anime : anime.id}}>Write a new Review:</Link></p>
            </div>
            {/**Logic for showing Ratings */}
            <div>
                <h2>Ratings</h2>
                <div>
                    {(anime.ratings.map(rating => (
                         <ul key={rating.id}>
                             <li>Score: {rating.score}</li>
                             <li>Content: {rating.reviewContent}</li>
                             <li className="font-bold">By: <Link href={`/users/${rating.user_id}`}> {rating.user.name}</Link></li>
                         </ul>
                        ))
                    )}
                </div> 
            </div>

            
        </NavBarLayout>
    ); 
}