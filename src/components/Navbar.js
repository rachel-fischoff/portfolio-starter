import React from "react";
import { Link } from "gatsby";

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item glow">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/" className="nav-link">
            Resume
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
