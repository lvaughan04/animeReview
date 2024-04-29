import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";

export default function Show({post}) {
    
    console.log(post);
    return (
        <NavBarLayout>
            <div>
                <h1><b>{post.title}</b> created by {post.user.name}</h1>
                <p>{post.description}</p>
            </div>
        </NavBarLayout>
    ); 
}