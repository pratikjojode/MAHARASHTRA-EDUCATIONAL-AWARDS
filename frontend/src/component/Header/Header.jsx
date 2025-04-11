// components/Header/Header.jsx
import React from 'react';
import '../../styles/Header.css';
import Navbar from './Navbar';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Maharashtra Education Icon Awards" className="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;