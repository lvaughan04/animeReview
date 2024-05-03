import NavBarLayout from "@/Layouts/NavBarLayout";
import { Link } from "@inertiajs/react";
import React from 'react';

function UserShow({ user }) {
    return (
        <NavBarLayout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-800">{user.name}'s Profile Details</h1>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">Posts</h2>
                    {user.posts.map(post => (
                        <div key={post.id} className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition duration-150 ease-in-out">
                            <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                {post.title}
                            </Link>
                        </div>
                    ))}

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Comments</h2>
                    {user.comments.map(comment => (
                        <div key={comment.id} className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition duration-150 ease-in-out">
                            {comment.content}
                        </div>
                    ))}
                </div>
            </div>
        </NavBarLayout>
    );
}

export default UserShow;