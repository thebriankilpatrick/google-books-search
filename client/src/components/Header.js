import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="teal lighten-2">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Google Books Search</a>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">My Books</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;