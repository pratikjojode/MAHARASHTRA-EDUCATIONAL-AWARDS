// components/Header/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Header.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="#explore" className="nav-link">Explore</NavLink></li>
        <li><NavLink to="#speakers" className="nav-link">Speakers</NavLink></li>
        <li><NavLink to="/sponsors" className="nav-link">Sponsors</NavLink></li>
        <li><NavLink to="#contact" className="nav-link">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;