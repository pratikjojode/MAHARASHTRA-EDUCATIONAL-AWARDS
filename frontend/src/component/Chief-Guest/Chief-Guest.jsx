// components/ChiefGuest/ChiefGuest.jsx
import React from 'react';
import '../../styles/Chief-Guest.css';

import chiefGuestImage from '../../assets/chief-guest.jpg';


const ChiefGuest = () => {
  return (
    <section className="chief-guest">
      <div className="container">
        <div className="section-header">
          <h2>Our Chief Guest</h2>
          <div className="divider"></div>
        </div>
        <div className="guest-profile">
          <div className="guest-image">
            <img src={chiefGuestImage} alt="Dr. A.P.J. Abdul Kalam" />
          </div>
          <div className="guest-details">
            <h3>Dr. A.P.J. Abdul Kalam</h3>
            <p className="guest-title">Former President of India & Eminent Scientist</p>
            <p className="guest-bio">
              Dr. A.P.J. Abdul Kalam, widely known as the "People's President" and the "Missile Man of India," 
              was a visionary leader who dedicated his life to the advancement of education and scientific 
              research in India. His contributions to India's space and missile programs are legendary, 
              and his passion for inspiring young minds made him one of the most beloved figures in 
              Indian education.
            </p>
            <p className="guest-bio">
              As our chief guest, Dr. Kalam will share his insights on the future of education in India 
              and the role educators play in shaping the nation's destiny. His presence at the Maharashtra 
              Education Icon Awards is a testament to the importance of this event in recognizing 
              educational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;