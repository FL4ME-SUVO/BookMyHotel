import React from 'react';
import './Hero2.css';

function Hero2() {
  return (
    <div className="hero2-section" style={{ backgroundImage: "url('/images/bg_3.jpg')" }}>
      <div className="hero2-overlay"></div>
      <div className="container hero2-container">
        <div className="hero2-content">
          <p className="hero2-breadcrumb">Home / About</p>
          <h1 className="hero2-title">About Us</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
