import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import Comments from "@/Components/Comments";
import CreatCommentForm from "@/Components/CommentForm";

export default function Show({post, comments}) {
    
    console.log(post);
    return (
        <NavBarLayout>
            <div>
                <h1><b>{post.title}</b> created by {post.user.name}</h1>
                <p>{post.description}</p>
                <CreatCommentForm postID={post.id}/>
                <Comments comments={comments}/>
            </div>
            <div>

            </div>
        </NavBarLayout>
    ); 
}