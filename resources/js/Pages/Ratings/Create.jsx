import React, {useState} from "react";
import { router } from '@inertiajs/react'

function CreateRatingForm({anime}){

    console.log(anime);
    const [reviewContent, setReviewContent] = useState('');
    const [score, setScore] = useState('');
    const [id, setId] = useState(anime ? anime.id : ''); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(anime.id)
        router.post('/animes/{anime}/ratings', { reviewContent, score, id});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="score">Score</label>
                <input
                    id="score"
                    type="number"  // Set the type to number to restrict inputs
                    value={score}
                    onChange={e => setScore(e.target.value)}
                    min="1"        // Minimum value
                    max="10"       // Maximum value
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={reviewContent}
                    onChange={e => setReviewContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreateRatingForm;