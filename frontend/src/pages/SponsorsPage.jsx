// pages/SponsorsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Sponsors/Sponsors.css';

const SponsorsPage = () => {
  return (
    <div className="sponsors-page">
      <div className="container">
        <div className="section-header">
          <h2>Sponsorship Opportunities</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Partner with us to celebrate educational excellence in Maharashtra
          </p>
        </div>
        
        <div className="sponsorship-benefits">
          <div className="benefit-card">
            <h3>Platinum Sponsor</h3>
            <ul>
              <li>Logo placement on all event materials</li>
              <li>Keynote speaking opportunity</li>
              <li>Full-page ad in event program</li>
              <li>10 VIP tickets to the event</li>
              <li>Exclusive branding during awards ceremony</li>
            </ul>
          </div>
          
          <div className="benefit-card">
            <h3>Gold Sponsor</h3>
            <ul>
              <li>Logo placement on main event materials</li>
              <li>Speaking opportunity during ceremony</li>
              <li>Half-page ad in event program</li>
              <li>6 VIP tickets to the event</li>
              <li>Recognition during awards presentation</li>
            </ul>
          </div>
          
          <div className="benefit-card">
            <h3>Silver Sponsor</h3>
            <ul>
              <li>Logo placement on select event materials</li>
              <li>Quarter-page ad in event program</li>
              <li>4 VIP tickets to the event</li>
              <li>Recognition in press releases</li>
            </ul>
          </div>
          
          <div className="benefit-card">
            <h3>Community Partner</h3>
            <ul>
              <li>Logo on website and event signage</li>
              <li>2 VIP tickets to the event</li>
              <li>Social media recognition</li>
            </ul>
          </div>
        </div>
        
        <div className="contact-cta">
          <p>Interested in becoming a sponsor? Contact us to discuss opportunities.</p>
          <Link to="#contact" className="btn btn-sponsor">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;