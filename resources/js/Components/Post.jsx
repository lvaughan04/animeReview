import React from 'react';
import { Link } from '@inertiajs/react';

const Post = ({ post }) => {
    return (
        <div className='post-container'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/posts/${post.id}`} className="read-more">Read more...</Link>
        </div>
    );
}

export default Post;