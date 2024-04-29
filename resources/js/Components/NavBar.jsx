import React from "react";
import { Link } from "@inertiajs/react";

export default function NavBar() {
    return (
        <div>
            <Link href="/dashboard">Dashboard      </Link>
            <Link href="/animes">Anime    </Link>
            <Link href="/posts">Posts     </Link>
        </div>
    );
}