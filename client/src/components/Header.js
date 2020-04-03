import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Google Books Search</a>
                    <ul id="nav-mobile" class="right">
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">My Books</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;