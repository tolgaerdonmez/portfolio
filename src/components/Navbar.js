import React from "react";
import "../sass/Navbar.scss";
import { Link } from "gatsby";

function Navbar({ fullwidth }) {
  return (
    <nav className={`${fullwidth ? "navbar-fullwidth" : "navbar-regular"}`}>
      <ul>
        {fullwidth ? (
          <li>
            <Link to="/">
              <i className="bx bxs-left-arrow"></i>
            </Link>
          </li>
        ) : null}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
