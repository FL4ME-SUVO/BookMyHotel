import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard({ id, name, location, image, description, rating, amenities }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fa-solid fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fa-solid fa-star-half-stroke"></i>);
    }

    return stars;
  };

  return (
    <div className="restaurant-card">
      <div
        className="restaurant-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Optional badges or labels */}
      </div>
      <div className="restaurant-content">
        <h3 className="restaurant-name">{name}</h3>

        <div className="restaurant-location">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location}</span>
        </div>

        <p className="restaurant-description">{description}</p>

        <div className="restaurant-amenities">
          {amenities.map((amenity, index) => (
            <span key={index} className="restaurant-amenity">{amenity}</span>
          ))}
        </div>

        <div className="restaurant-rating">
          <div className="restaurant-stars">
            <i className="fa-solid fa-star"></i>
            {renderStars()}
            <span className="restaurant-rating-text">{rating} ⭐</span>
          </div>
        </div>

        <Link to={`/restaurants/${id}`} className="restaurant-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;