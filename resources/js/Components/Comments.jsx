import React from "react";
import { Link } from "@inertiajs/react";

const Comments = ({ comments }) => {

    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.content} <b>commented by <Link href={`/users/${comment.user.id}`}>{comment.user.name}</Link></b></p>
                    
                </div>
            ))}
        </div>
    );
}

export default Comments;