import React from "react";

const Comments = ({ comments }) => {

    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.content} <b>commented by {comment.user.name}</b></p>
                    
                </div>
            ))}
        </div>
    );
}

export default Comments;