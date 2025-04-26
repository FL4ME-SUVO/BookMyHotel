import React from 'react';

function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <i className={`fa-solid fa-${icon}`}></i> {/* <-- updated for FontAwesome */}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default FeatureCard;
