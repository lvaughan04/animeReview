import React, {useState} from "react";
import { router } from '@inertiajs/react'

function CreateRatingForm({anime}) {
    console.log(anime);
    const [reviewContent, setReviewContent] = useState('');
    const [score, setScore] = useState('');
    const [id, setId] = useState(anime ? anime.id : ''); 

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post(`/animes/{anime}/ratings`, { reviewContent, score, anime });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="score" className="block text-gray-700 text-sm font-bold mb-2">
                    Score
                </label>
                <input
                    id="score"
                    type="number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={score}
                    onChange={e => setScore(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                    Content
                </label>
                <textarea
                    id="content"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={reviewContent}
                    onChange={e => setReviewContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create Post
            </button>
        </form>
    );
}

export default CreateRatingForm;