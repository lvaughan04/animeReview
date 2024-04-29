import React from "react";
import NavBarLayout from "@/Layouts/NavBarLayout";

export default function Show({anime}) {
    
    console.log(anime);
    return (
        <NavBarLayout>
            <div>
                <h1><b>{anime.title}</b></h1>
                <p>{anime.description}</p>
                
            </div>
        </NavBarLayout>
    ); 
}