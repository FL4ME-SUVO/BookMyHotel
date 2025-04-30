import React from 'react';
import { Link } from 'react-router-dom';

function HotelCard({ id, name, location, image, price, description, rating, amenities }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="icon-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="icon-star-half"></i>);
    }

    return stars;
  };

  return (
    <div className="hotel-card">
      <div
        className="hotel-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hotel-price">₹{price}/night</div>
      </div>
      <div className="hotel-content">
        <h3 className="hotel-name">{name}</h3>

        <div className="hotel-location">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location}</span>
        </div>

        <p className="hotel-description">{description}</p>
        <div className="hotel-amenities">
          {amenities.map((amenity, index) => (
            <span key={index} className="hotel-amenity">{amenity}</span>
          ))}
        </div>
        <div className="hotel-rating">
          <div className="hotel-stars">
            <i className="fa-solid fa-star"></i>
            &nbsp;
            {renderStars()}
            <span className="hotel-rating-text">{rating} Rating</span>
          </div>
        </div>

        {/* Update this anchor tag to Link */}
        <Link to={`/hotels/${id}`} className="hotel-link">Book Now</Link>
      </div>
    </div>
  );
}

export default HotelCard;
