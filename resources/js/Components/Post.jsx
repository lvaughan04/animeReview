import React from 'react';
import { Link } from '@inertiajs/react';

const Post = ({ post }) => {
    return (
        <div className="bg-white  shadow-lg rounded-xl overflow-hidden p-4 transition duration-200 hover:shadow-xl">
            <h2 className='font-bold text-xl mb-2'>{post.title}</h2>
            <p className=' text-gray-900 text-base'>{post.content}</p>
            <Link href={`/posts/${post.id}`} className=" text-black hover:text-blue-700 transition-colors duration-200 mt-4 inline-block">
                Read more...</Link>
        </div>
    );
}

export default Post;