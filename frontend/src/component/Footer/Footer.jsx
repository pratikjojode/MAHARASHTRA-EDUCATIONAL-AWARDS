import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Maharashtra Education Icon Awards</h3>
            <p>Celebrating excellence in education across Maharashtra</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#categories">Award Categories</a></li>
              <li><a href="/sponsors">Sponsors</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt className="footer-icon" /> Sunny's World, Pune</p>
          <p><FaPhone className="footer-icon" /> +91 8888181889</p>
          <p><FaEnvelope className="footer-icon" /> gaurav@jobizza.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Maharashtra Education Icon Awards. All rights reserved.</p>
          <div className="social-links">
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <a href="https://www.linkedin.com/company/jobizza-justice-with-your-innovations/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <span><FaEnvelope /></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;