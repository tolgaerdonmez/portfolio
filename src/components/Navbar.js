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
              <box-icon name="left-arrow" type="solid" />
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
