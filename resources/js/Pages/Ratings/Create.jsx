import React, {useState} from "react";
import { router } from '@inertiajs/react'

function CreateRatingForm({anime}){

    console.log(anime);
    const [reviewContent, setReviewContent] = useState('');
    const [score, setScore] = useState('');
    const [id, setId] = useState(anime ? anime.id : ''); 

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/animes/{anime}/ratings', { reviewContent, score, anime});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="score">Score</label>
                <input
                    id="score"
                    type="number"  
                    value={score}
                    onChange={e => setScore(e.target.value)}
                    min="1"    
                    max="10"       
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