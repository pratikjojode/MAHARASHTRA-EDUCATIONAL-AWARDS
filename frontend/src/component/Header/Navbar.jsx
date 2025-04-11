import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
            activeclassname="active"
          >
            Home
          </NavLink>
          <a href="#features" className="nav-link" onClick={closeMenu}>
            Features
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <NavLink
            to="/pricing"
            className="nav-link"
            onClick={closeMenu}
            activeclassname="active"
          >
            Pricing
          </NavLink>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
