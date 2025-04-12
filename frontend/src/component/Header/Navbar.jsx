import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/Navbar.css"; // Ensure the path to the CSS file is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/jobizza" className="nav-link" onClick={closeMenu}>
            Explore
          </Link>
          <Link to="/chief-guest" className="nav-link" onClick={closeMenu}>
            Speakers
          </Link>
          <Link to="/sponsors" className="nav-link" onClick={closeMenu}>
            Sponsors
          </Link>
          <Link to="/footer" className="nav-link" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;