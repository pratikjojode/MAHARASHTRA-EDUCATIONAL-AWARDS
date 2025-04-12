// components/Categories/Categories.jsx
import React from "react";
import "../../styles/Categories.css";
import { FaChalkboardTeacher, FaSchool, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      title: "Best Educational Leader",
      description: "Recognizing principals and directors who have demonstrated exceptional leadership in advancing their institution's mission.",
      icon: <FaChalkboardTeacher className="category-icon" />
    },
    {
      title: "Excellence in Teaching",
      description: "Honoring teachers who inspire, engage and transform the learning experience for their students.",
      icon: <FaSchool className="category-icon" />
    },
    {
      title: "Innovation in Education",
      description: "Celebrating groundbreaking approaches and methodologies that are reshaping education.",
      icon: <FaLightbulb className="category-icon" />
    },
    {
      title: "Community Impact",
      description: "Recognizing educational initiatives that have made a significant positive impact on their communities.",
      icon: <FaHandsHelping className="category-icon" />
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Award Categories</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Explore the diverse categories recognizing excellence across all facets of the educational ecosystem in Maharashtra.
          </p>
        </div>
        <div className="category-grid">
          <div className="category-column">
            {categories.slice(0, 2).map((category, index) => (
              <div className="category-card" key={index}>
                <div className="category-icon-container">
                  {category.icon}
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="category-column">
            {categories.slice(2, 4).map((category, index) => (
              <div className="category-card" key={index}>
                <div className="category-icon-container">
                  {category.icon}
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;