import React from 'react';
import { Link } from '@inertiajs/react';

const Post = ({ post, isAuthor }) => {
    return (
        <div className="bg-white  shadow-lg rounded-xl overflow-hidden p-4 transition duration-200 hover:shadow-xl">
            {/**if the author of the post is signed in they should be able to see the edit
             * button on the posts theyve created
            */}
            {isAuthor && 
                <Link href={`/posts/${post.id}/edit`} className='absolute top-4 right-4 text-sm text-blue-700 hover:text-blue-800 transition-colors duration-200'>
                        Edit
                    </Link>
            }
            <h2 className='font-bold text-xl mb-2'>{post.title}</h2>
            <p className=' text-gray-900 text-base'>{post.content}</p>
            <Link href={`/posts/${post.id}`} className=" text-black hover:text-blue-700 transition-colors duration-200 mt-4 inline-block">
                Read more...</Link>
        </div>
    );
}

export default Post;