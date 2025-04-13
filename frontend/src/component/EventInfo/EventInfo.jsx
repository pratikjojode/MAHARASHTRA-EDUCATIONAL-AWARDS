// src/components/EventInfo.jsx
import React, { useEffect, useState } from "react";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaTicketAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaWhatsapp, 
  FaMapMarkedAlt 
} from "react-icons/fa";
import "../../styles/EventInfo.css"; // Adjust the path as necessary

const EventInfo = () => {
  const eventDate = new Date("2025-06-07T18:30:00"); // Set your event date and time
  const [timeLeft, setTimeLeft] = useState({});
  const [animate, setAnimate] = useState(false);
  
  // Event details for sharing
  const eventName = "Event at Sunny's World";
  const eventLocation = "Sunny's World, Pune";
  const eventDescription = "Join us for an amazing event!";
  const eventLatLng = "18.5204,73.8567"; // Example coordinates for Pune

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
        // Trigger animation when seconds change
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  // Calculate percentage of time passed (for progress bar)
  const calculateProgress = () => {
    const totalDuration = eventDate - new Date("2025-01-01T00:00:00"); // From start of promotion
    const elapsed = new Date() - new Date("2025-01-01T00:00:00");
    const percentage = (elapsed / totalDuration) * 100;
    return Math.min(percentage, 100);
  };

  // Social sharing functions
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(eventDescription)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventName)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(eventName + ' - ' + eventDescription + ' ' + window.location.href)}`;
    window.open(url, '_blank');
  };

  // Open location in Google Maps
  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=${eventLatLng}`;
    window.open(url, '_blank');
  };

  return (
    <section className="event-info">
      <div className="container">
        <div className="info-box">
          <div className="countdown-container">
            <h3 className="countdown-title">Event Countdown</h3>
            
            <div className="datetime-display">
              <div className="info-item date-item">
                <FaCalendarAlt className="info-icon" />
                <div className="info-content">
                  <h3>Date & Time</h3>
                  <p>7 June 2025, 6:30 PM</p>
                  <div className="hover-tooltip">Add to Calendar</div>
                </div>
              </div>
            </div>
            
            <div className="countdown-timer">
              <div className="time-unit">
                <div className={`time-card ${animate ? 'flip' : ''}`}>
                  <span className="time-value">{formatTimeUnit(timeLeft.days || 0)}</span>
                </div>
                <span className="time-label">Days</span>
              </div>
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className={`time-card ${animate ? 'flip' : ''}`}>
                  <span className="time-value">{formatTimeUnit(timeLeft.hours || 0)}</span>
                </div>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className={`time-card ${animate ? 'flip' : ''}`}>
                  <span className="time-value">{formatTimeUnit(timeLeft.minutes || 0)}</span>
                </div>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className={`time-card ${animate ? 'flip' : ''}`}>
                  <span className="time-value">{formatTimeUnit(timeLeft.seconds || 0)}</span>
                </div>
                <span className="time-label">Seconds</span>
              </div>
            </div>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <p className="progress-text">Time is running out! Reserve your spot now</p>
            </div>
          </div>
          
          <div className="info-items-row">
            <div className="info-item location-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-content">
                <h3>Location</h3>
                <p>Sunny's World, Pune</p>
                <button className="view-map-btn" onClick={openInMaps}>
                  <FaMapMarkedAlt className="btn-icon" /> View on Map
                </button>
              </div>
            </div>
            
            <div className="info-item ticket-item">
              <FaTicketAlt className="info-icon" />
              <div className="info-content">
                <h3>Tickets</h3>
                <p>Limited spots available</p>
                <div className="availability-indicator">
                  <div className="availability-dots">
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <span>60% Full</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="share-event">
          <p>Excited? Share this event with friends!</p>
          <div className="share-buttons">
            <button className="share-btn facebook" onClick={shareOnFacebook}>
              <FaFacebookF className="share-icon" /> Facebook
            </button>
            <button className="share-btn twitter" onClick={shareOnTwitter}>
              <FaTwitter className="share-icon" /> Twitter
            </button>
            <button className="share-btn whatsapp" onClick={shareOnWhatsapp}>
              <FaWhatsapp className="share-icon" /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;