import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Hero.css";
import heroBg1 from "../../assets/anthony-delanoix-hzgs56Ze49s-unsplash.jpg";
import heroBg2 from "../../assets/ian-schneider-PAykYb-8Er8-unsplash.jpg";
import heroBg3 from "../../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg";
import jobizzaLogo from "../../assets/jobizza-logo.png";
import { FaArrowRight, FaAward } from "react-icons/fa";

const Hero = () => {
  const heroImages = [heroBg1, heroBg2, heroBg3];

  return (
    <section className="hero">
      <div className="hero-background">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          swipeable={true}
          emulateTouch
          stopOnHover={false}
        >
          {heroImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="bg-image"
              />
            </div>
          ))}
        </Carousel>
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
