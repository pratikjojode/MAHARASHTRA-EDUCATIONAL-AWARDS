import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Hero.css";
import heroBg1 from "../../assets/hero-bgg3.jpg";
import heroBg2 from "../../assets/hero-bgg2.jpg";
import heroBg3 from "../../assets/IMG-20250412-WA0003.jpg";
import heroBg4 from "../../assets/IMG-20250412-WA0010.jpg";
import heroBg5 from "../../assets/IMG-20250412-WA0028.jpg";
// import heroBg3 from "../../assets/hero-bg.jpg";
import jobizzaLogo from "../../assets/jobizza-logo.png";
import anytimeBarterLogo from "../../assets/anytime-barter-logo.png";
import { FaArrowRight, FaAward } from "react-icons/fa";

const Hero = () => {
  const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

  return (
    <section className="hero">
      <div className="hero-background">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
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
          <div className="sponsor-logos">
            <img src={jobizzaLogo} alt="Jobizza" className="presenter-logo" />
            <img
              src={anytimeBarterLogo}
              alt="Anytime Barter"
              className="presenter-logo"
            />
          </div>
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
