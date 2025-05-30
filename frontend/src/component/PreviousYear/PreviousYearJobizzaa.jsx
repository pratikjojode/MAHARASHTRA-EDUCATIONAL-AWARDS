import React from "react";
import { Card, Carousel, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "../../styles/PreviousYearJobizzaa.css";

// Import images from assets folder
import jobizzaa2024 from "../../assets/Jobizza2024.jpg";
import jobizzaa2023 from "../../assets/Jobizza2023.jpg";
import jobizzaa2022 from "../../assets/Jobizza2022.jpg";
import jobizzaa2021 from "../../assets/Jobizza2021.jpg";

const PreviousYearJobizzaa = () => {
  const carouselRef = React.useRef();


  const previousYearImages = [
    {
      id: 1,
      year: "2024",
      title: "Jobizzaa 2024",
      imageUrl: jobizzaa2024,
      description: "Highlights from our 2024 event",
      youtubeLink: "https://www.youtube.com/watch?v=YqVWQFc_Dpk",
    },
    {
      id: 2,
      year: "2024",
      title: "Jobizzaa 2024",
      imageUrl: jobizzaa2023,
      description: "Memorable moments from 2024",
      youtubeLink: "https://www.youtube.com/watch?v=PEslufDrK38",
    },
    {
      id: 3,
      year: "2024",
      title: "Jobizzaa 2024",
      imageUrl: jobizzaa2022,
      description: "The best of 2024 event",
      youtubeLink: "https://www.youtube.com/watch?v=gEHu_a-HTBk",
    },
    {
      id: 4,
      year: "2024",
      title: "Jobizzaa 2024",
      imageUrl: jobizzaa2021,
      description: "Looking back at 2024",
      youtubeLink: "https://www.youtube.com/watch?v=VyJkD4ZuO80",
    },
  ];

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="previous-year-container">
      <h2 className="previous-year-title">Previous Year Highlights</h2>

      <div className="carousel-container">
        <Button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          icon={<LeftOutlined />}
        />

        <Carousel
          ref={carouselRef}
          dots={true}
          className="previous-year-carousel"
        >
          {previousYearImages.map((item) => (
            <div key={item.id}>
              <Card
                className="year-card"
                cover={
                  <div className="image-container">
                    <img
                      alt={item.title}
                      src={item.imageUrl}
                      className="card-image"
                    />
                    <a
                      href={item.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youtube-overlay"
                    >
                      <YoutubeOutlined className="youtube-icon" />
                    </a>
                  </div>
                }
              >
                <div className="card-content">
                  <h3 className="card-year">{item.year}</h3>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-description">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>

        <Button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          icon={<RightOutlined />}
        />
      </div>
    </div>
  );
};

export default PreviousYearJobizzaa;
