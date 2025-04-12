import React from 'react';
import '../../styles/Jobizza.css';
import jobizzaLogo from '../../assets/jobizza-logo.png';
import { FaArrowRight } from 'react-icons/fa';

const Jobizza = () => {
  return (
    <section className="jobizza">
      <div className="container">
        <div className="jobizza-content">
          <div className="jobizza-logo">
            <img src={jobizzaLogo} alt="Jobizza" />
          </div>
          <div className="jobizza-info">
            <h2>About Jobizza</h2>
            <p>
              Jobizza is a leading education and career platform dedicated to connecting talent with 
              opportunities across Maharashtra. As the principal organizer of the Maharashtra Education 
              Icon Awards, Jobizza demonstrates its commitment to recognizing and fostering excellence 
              in education.
            </p>
            <p>
              With a track record of successful educational initiatives and career development programs, 
              Jobizza has become a trusted name in Maharashtra's education sector. Past events organized 
              by Jobizza include the Maharashtra Career Fair, EduTech Summit, and the Annual Teachers' 
              Excellence Conference.
            </p>
            <a 
              href="https://www.jobizza.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="jobizza-button"
            >
              Learn more <FaArrowRight className="button-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobizza;