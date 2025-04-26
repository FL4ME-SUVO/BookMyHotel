// DestinationCard.jsx
import React from 'react';

function DestinationCard({ name, image, listingCount }) {
  return (
    <div className="destination-card">
      <div
        className="destination-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="destination-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
      <div className="destination-overlay">
        <h3 className="destination-name">{name}</h3>
        <p className="destination-listings">{listingCount} Listing</p>
      </div>
    </div>
  );
}

export default DestinationCard;
