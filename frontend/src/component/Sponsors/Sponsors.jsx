// components/Sponsors/Sponsors.jsx
import React from 'react';
import '../../styles/Sponsors.css';
import { Link } from 'react-router-dom';

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="container">
        <div className="section-header">
          <h2>Become a Sponsor</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Join us in celebrating educational excellence and gain visibility among Maharashtra's top educators
          </p>
        </div>
        <div className="sponsor-cta">
          <p>
            Sponsoring the Maharashtra Education Icon Awards provides your organization with a unique 
            opportunity to align with educational excellence and connect with key decision-makers in 
            Maharashtra's education sector.
          </p>
          <Link to="/sponsors" className="btn btn-sponsor">
            Learn About Sponsorship Benefits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;