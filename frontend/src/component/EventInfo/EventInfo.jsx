// components/EventInfo/EventInfo.jsx
import React from 'react';
import '../../styles/EventInfo.css';


const EventInfo = () => {
  return (
    <section className="event-info">
      <div className="container">
        <div className="info-box">
          <div className="info-item">
            <i className="fas fa-calendar-alt"></i>
            <div>
              <h3>Date</h3>
              <p>7 June 2025</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>Sunny's World , Pune</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;