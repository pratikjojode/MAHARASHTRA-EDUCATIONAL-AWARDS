import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Hero.css";
import heroBg1 from "../../assets/hero-bgg3.jpg";
import heroBg2 from "../../assets/hero-bgg2.jpg";
import jobizzaLogo from "../../assets/jobizza-logo.png";
import anytimeBarterLogo from "../../assets/anytime-barter-logo.png";
import { FaArrowRight, FaAward } from "react-icons/fa";

const Hero = () => {
  const heroImages = [heroBg1, heroBg2];
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle scroll event to resume autoplay
  useEffect(() => {
    const handleScroll = () => {
      if (!autoPlay) setAutoPlay(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoPlay]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  // Handle slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <Carousel
          autoPlay={autoPlay}
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={true}
          swipeable={true}
          emulateTouch
          stopOnHover={false}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              className={`dot ${isSelected ? "selected" : ""}`}
              onClick={(e) => {
                handleDotClick(index);
                onClickHandler(e);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleDotClick(index);
                  onClickHandler(e);
                }
              }}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          )}
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
