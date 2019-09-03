import React from "react";
import { Link } from "gatsby";
import "./Nav.scss";


const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <Link className="nav__item" to="/events">
            <li>events</li>
            </Link>
            <Link className="nav__item" to="/about">
            <li>about</li>
            </Link>
            <Link className="nav__item" to="/contact">
            <li>contact</li>
            </Link>
        </ul>
    </nav>
)

export default Nav;
