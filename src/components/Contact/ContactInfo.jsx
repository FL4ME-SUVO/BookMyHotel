import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaUser, FaPaperPlane } from 'react-icons/fa';
import MapSection from './MapSection.jsx';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="contact-info-section">
        <h1 className="section-title">Contact Information</h1>
        
        <div className="contact-details">
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <p><strong>Address:</strong> Jhinger Pole, Diamond Harbour Rd, Sarisha</p>
          </div>
          <div className="detail-item">
            <FaPhone className="detail-icon" />
            <p><strong>Phone:</strong> +91 7407969835</p>
          </div>
          <div className="detail-item">
            <FaEnvelope className="detail-icon" />
            <p><strong>Email:</strong> shubhajit.giri@tnu.in</p>
          </div>
          <div className="detail-item">
            <FaGlobe className="detail-icon" />
            <p><strong>Website:</strong> https://blood-care-alpha.vercel.app/</p>
          </div>
          <p className="address-line">Jhinga, West Bengal 743368</p>
        </div>

        <div className="contact-form">
          <h2 className="form-title">
            <FaUser className="title-icon" />
            Contact Form
          </h2>
          <form>
            <div className="form-group">
              <label>
                <FaEnvelope className="input-icon" />
                Your Email
              </label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>
                <FaPaperPlane className="input-icon" />
                Subject
              </label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>
                <FaPaperPlane className="input-icon" />
                Message
              </label>
              <textarea rows="5"></textarea>
            </div>
            <button type="submit" className="send-button">
              <FaPaperPlane className="button-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <MapSection />
    </div>
  );
};

export default ContactInfo;