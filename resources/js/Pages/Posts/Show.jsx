import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";
import Comments from "@/Components/Comments";
import CommentForm from "@/Components/CommentForm";
import Post from "@/Components/Post";

export default function Show({ post, comments, isAuthor }) {
    console.log(post);
    return (
        <NavBarLayout>
            <div className="container mx-auto px-4 py-6">
                <Post post={post} isAuthor={isAuthor}/>
                <div className="mt-8">
                    <CommentForm postID={post.id}/>
                    <Comments comments={comments}/>
                </div>
            </div>
        </NavBarLayout>
    );
}
