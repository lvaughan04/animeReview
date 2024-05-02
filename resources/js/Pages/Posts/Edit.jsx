import React from "react";
import { router } from "@inertiajs/react";
import { useState } from "react";



export default function Edit({ post }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleEdit(event) {
        event.preventDefault();
        router.post(`/posts/${post.id}/update`, { title, content });
    }

    return (
        <form onSubmit={handleEdit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
}