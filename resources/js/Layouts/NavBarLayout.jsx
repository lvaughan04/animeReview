import React from "react";
import NavBar from "@/Components/NavBar";

const NavBarLayout = ({children}) => {
    return (
        <>
            <NavBar />
            <div>
                {children}   

            </div>
        </>
    );
}

export default NavBarLayout;
