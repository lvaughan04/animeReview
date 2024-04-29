import React, { useState } from "react";
import { router } from '@inertiajs/react';

function CreatCommentForm ({postID}) {

    const [content, setContent] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/posts/${postID}/comments', { content, postID});
        setContent(''); //clear content for next comment
    }   

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Comment your thoughts..."
                    required
                />
            </div>
            <button type="submit">Post Comment</button>
        </form>
    );
}

export default CreatCommentForm;