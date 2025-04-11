// components/Hero/Hero.jsx
import React from 'react';
import '../../styles/Hero.css';
import heroBg from '../../assets/hero-bg.jpg';
import jobizzaLogo from '../../assets/jobizza-logo.png';
import { FaArrowRight, FaAward } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="Education background" className="bg-image" />
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <div className="presented-by">
          <span className="presented-text">Presented by</span>
          <img src={jobizzaLogo} alt="Jobizza" className="presenter-logo" />
        </div>
        
        <div className="award-title">
          <FaAward className="award-icon" />
          <h1>
            <span className="title-line-1">Maharashtra Education</span>
            <span className="title-line-2">Icon Awards</span>
          </h1>
        </div>
        
        <p className="hero-subtitle">Celebrating Excellence in Education</p>
        
        <div className="hero-buttons">
          <a 
            href="https://forms.gle/3bEdJeGGKobD3DLr5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Nominate Now <FaArrowRight className="btn-icon" />
          </a>
          <a href="#categories" className="btn btn-secondary">
            View Categories <FaArrowRight className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;