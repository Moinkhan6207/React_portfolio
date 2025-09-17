import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          MyPortfolio
        </Link>

        {/* Hamburger Icon (mobile ke liye) */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
