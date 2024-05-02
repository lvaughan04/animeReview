import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import Comments from "@/Components/Comments";
import CreatCommentForm from "@/Components/CommentForm";
import Post from "@/Components/Post";

export default function Show({post, comments, isAuthor}) {
    
    console.log(post);
    return (
        <NavBarLayout>
            <Post post={post} isAuthor={isAuthor}/>
            <div>
                <CreatCommentForm postID={post.id}/>
                <Comments comments={comments}/>
            </div>
            <div>

            </div>
        </NavBarLayout>
    ); 
}