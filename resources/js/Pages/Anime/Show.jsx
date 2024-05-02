import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import { Link } from "@inertiajs/react";

{/* <Link href={`/animes/${anime.id}/ratings/create`}></Link> */}

export default function Show({anime, averageRating}) {
    
    console.log(anime);
    return (
        <NavBarLayout>

            {/**Anime and Title Logic */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg my-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h1 className="text-2xl font-bold text-gray-900">{anime.title}</h1>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Average Rating</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{averageRating}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{anime.description}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:px-6">
                                <Link href={`/animes/${anime.id}/ratings/create`} className="text-indigo-600 hover:text-indigo-900">
                                    Write a new Review
                                </Link>
                            </div>
                        </dl>
                    </div>
                </div>
                {/* Rating Logic */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg my-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg font-bold text-gray-900">Ratings</h2>
                    </div>
                    <div className="border-t border-gray-200">
                        {anime.ratings.length > 0 ? anime.ratings.map(rating => (
                            <div key={rating.id} className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <ul className="space-y-2">
                                    <li>Score: {rating.score}</li>
                                    <li>Content: {rating.reviewContent}</li>
                                    <li className="font-bold">
                                        By: <Link href={`/users/${rating.user_id}`} className="text-blue-600 hover:text-blue-900">
                                            {rating.user.name}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )) : <p className="px-4 py-5 sm:px-6">No ratings yet.</p>}
                    </div>
                </div>
            </div>

        </NavBarLayout>
    ); 
}

// {(anime.ratings.map(rating => (
//     <ul key={rating.id}>
//         <li>Score: {rating.score}</li>
//         <li>Content: {rating.reviewContent}</li>
//         <li className="font-bold">By: <Link href={`/users/${rating.user_id}`}> {rating.user.name}</Link></li>
//     </ul>
//    ))
// )}