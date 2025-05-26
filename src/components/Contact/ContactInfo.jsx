import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaUser, FaPaperPlane } from 'react-icons/fa';
import MapSection from './MapSection.jsx';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="ci-container">
    <div className="ci-info-section">
      <h1 className="ci-title">Contact Information</h1>
  
      <div className="ci-details">
        <div className="ci-detail-item">
          <FaMapMarkerAlt className="ci-icon" />
          <p><strong>Address:</strong> Jhinger Pole, Diamond Harbour Rd, Sarisha</p>
        </div>
        <div className="ci-detail-item">
          <FaPhone className="ci-icon" />
          <p><strong>Phone:</strong> +91 7407969835</p>
        </div>
        <div className="ci-detail-item">
          <FaEnvelope className="ci-icon" />
          <p><strong>Email:</strong> shubhajit.giri@tnu.in</p>
        </div>
        <div className="ci-detail-item">
          <FaGlobe className="ci-icon" />
          <p><strong>Website:</strong> https://blood-care-alpha.vercel.app/</p>
        </div>
        <p className="ci-address-line">Jhinga, West Bengal 743368</p>
      </div>
  
      <div className="ci-form">
        <h2 className="ci-form-title">
          <FaUser className="ci-title-icon" />
          Contact Form
        </h2>
        <form>
          <div className="ci-form-group">
            <label>
              <FaEnvelope className="ci-input-icon" />
              Your Email
            </label>
            <input type="email" />
          </div>
          <div className="ci-form-group">
            <label>
              <FaPaperPlane className="ci-input-icon" />
              Subject
            </label>
            <input type="text" />
          </div>
          <div className="ci-form-group">
            <label>
              <FaPaperPlane className="ci-input-icon" />
              Message
            </label>
            <textarea rows="5"></textarea>
          </div>
          <button type="submit" className="ci-send-button">
            <FaPaperPlane className="ci-button-icon" />
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