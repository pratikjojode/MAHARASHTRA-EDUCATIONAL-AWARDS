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
              <strong>Dr. Parag Kalkar</strong>
            </h3>
            <p className="guest-title">
              <strong>Pro Vice Chancellor at Savitribai Phule Pune University</strong>
            </p>
            <p className="guest-bio">
              <strong>Dr. Parag Kalkar</strong> is Director of, Sinhgad Institute of Management, Dean, Faculty of Commerce and Management Member, Academic Council Member & Senate at Savitribai Phule Pune University.
              He holds an M.Com, MMS (Finance), PhD and FDP (IIMA), and has more than 24 years of teaching experience.
            </p>
            <p className="guest-bio">
              As our chief guest, <strong>Dr. Kalkar</strong> will share his
              insights on the <strong>future of education in India </strong>
              and the{" "}
              <strong>
                role educators play in shaping the nation's destiny
              </strong>Dr Kalkar has also worked with Sinhgad Institutes for more than 21 years, serving as Professor & Director, Sinhgad Institute of Management, Campus Director & CEO at Sinhgad Campus, Lonavala, Deputy Registrar (Academic) and Deputy Registrar (Admissions), Sinhgad Institutes. He also served as Treasurer for the Association of Indian Management Schools (AIMS).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;
