import React, { useState } from "react";
import { router } from '@inertiajs/react';

function CommentForm({ postID }) {
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post(`/posts/${postID}/comments`, { content, postID });
        setContent(''); // Clear content for next comment
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg">
            <div className="mb-4">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Comment your thoughts..."
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Post Comment
            </button>
        </form>
    );
}

export default CommentForm;