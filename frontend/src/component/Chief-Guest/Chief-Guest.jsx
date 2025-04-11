// components/ChiefGuest/ChiefGuest.jsx
import React from "react";
import "../../styles/Chief-Guest.css";

import chiefGuestImage from "../../assets/chief-guest.jpg";

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
            <h3>
              <strong>Dr. A.P.J. Abdul Kalam</strong>
            </h3>
            <p className="guest-title">
              <strong>Former President of India & Eminent Scientist</strong>
            </p>
            <p className="guest-bio">
              <strong>Dr. A.P.J. Abdul Kalam</strong>, widely known as the{" "}
              <strong>"People's President"</strong> and the
              <strong> "Missile Man of India"</strong>, was a visionary leader
              who dedicated his life to the advancement of education and
              scientific research in India. His contributions to India's space
              and missile programs are legendary, and his passion for inspiring
              young minds made him one of the most beloved figures in Indian
              education.
            </p>
            <p className="guest-bio">
              As our chief guest, <strong>Dr. Kalam</strong> will share his
              insights on the <strong>future of education in India</strong>
              and the{" "}
              <strong>
                role educators play in shaping the nation's destiny
              </strong>
              . His presence at the
              <strong> Maharashtra Education Icon Awards</strong> is a testament
              to the importance of this event in recognizing educational
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;
