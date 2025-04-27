import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-section">
      <div className="university-info">
        <h3>The Neotia University</h3>
        <p>Jhinger Pole, Diamond Harbour Rd, Sarisha, Jhinga, West Bengal 743368</p>
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="review-count">795 reviews</span>
        </div>
      </div>

      <div className="map-container">
        <iframe 
          title="Neotia University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4535667173805!2d88.19529040871254!3d22.26080224424545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02604524b5b3a9%3A0x4e9fddeb151c9c43!2sThe%20Neotia%20University!5e0!3m2!1sen!2sin!4v1731771877289!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a href="https://www.google.com/maps/place/The+Neotia+University/@22.260797,88.197871,16z/data=!4m6!3m5!1s0x3a02604524b5b3a9:0x4e9fddeb151c9c43!8m2!3d22.2607973!4d88.1978707!16s%2Fm%2F0138k7kr?hl=en&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" className="view-map-button">View larger map</a>
      </div>

      <div className="map-locations">
        <ul>
          <li>X-young star club</li>
          <li>Kic Carmel School, Sarisha</li>
          <li>Diamond Harbour Women's University</li>
          <li>Cheora jiremamath</li>
        </ul>
      </div>

      <div className="map-footer">
        <p>Google Keyboard shortcuts</p>
        <p>Map data ©2025</p>
        <p>Terms</p>
        <p>Report a map error</p>
      </div>
    </div>
  );
};

export default MapSection;