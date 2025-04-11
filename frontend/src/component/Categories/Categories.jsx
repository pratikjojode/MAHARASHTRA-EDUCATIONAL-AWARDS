// components/Categories/Categories.jsx
import React from 'react';
import '../../styles/Categories.css';


const Categories = () => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Award Categories</h2>
          <div className="divider"></div>
        </div>
        <div className="category-list">
          <div className="category-item">
            <h3>Excellence in Teaching</h3>
          </div>
          <div className="category-item">
            <h3>Innovative Education Program</h3>
          </div>
          <div className="category-item">
            <h3>Leadership in Education Administration</h3>
          </div>
          <div className="category-item">
            <h3>Community Impact Award</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;