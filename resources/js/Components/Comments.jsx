import React from "react";
import { Link } from "@inertiajs/react";

const Comments = ({ comments }) => {
    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            {comments.map(comment => (
                <div key={comment.id} className="bg-gray-100 p-4 rounded-lg mb-2">
                    <p className="text-gray-800">{comment.content} <b>commented by <Link href={`/users/${comment.user.id}`} className="text-blue-600 hover:text-blue-800">{comment.user.name}</Link></b></p>
                </div>
            ))}
        </div>
    );
}

export default Comments;
