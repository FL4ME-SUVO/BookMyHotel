import React from 'react';
import './Hero2.css';

function Hero2({ backgroundImage, breadcrumb, title }) {
  return (
    <div className="hero2-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero2-overlay"></div>
      <div className="container hero2-container">
        <div className="hero2-content">
          <p className="hero2-breadcrumb">{breadcrumb}</p>
          <h1 className="hero2-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero2;