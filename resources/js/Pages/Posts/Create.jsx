import React, {useState} from "react";
import { router } from '@inertiajs/react'

function CreatePostForm(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/posts', { title, content });
    };

    return (
        <form onSubmit={handleSubmit}>
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

export default CreatePostForm;