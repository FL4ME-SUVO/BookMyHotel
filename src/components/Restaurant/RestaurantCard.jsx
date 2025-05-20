import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaTimes, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import './Restaurant.css';

function RestaurantCard({ id, name, location, image, description, rating, amenities }) {
  const [showPopup, setShowPopup] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={`star-${i}`} className="star-icon full" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={`star-half`} className="star-icon half" />);
      } else {
        stars.push(<FaRegStar key={`star-empty-${i}`} className="star-icon empty" />);
      }
    }

    return stars;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log('Reservation submitted:', {
      restaurantId: id,
      restaurantName: name,
      ...reservationData
    });
    alert(`Reservation at ${name} confirmed for ${reservationData.date}!`);
    setShowPopup(false);
  };

  return (
    <>
      <div className="restaurant-card">
        <div
          className="restaurant-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        
        <div className="restaurant-content">
          <h3 className="restaurant-name">{name}</h3>

          <div className="restaurant-location">
            <FaMapMarkerAlt className="location-icon" />
            <span>{location}</span>
          </div>

          <p className="restaurant-description">{description}</p>

          <div className="restaurant-amenities">
            <FaUtensils className="amenities-icon" />
            {amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="restaurant-amenity">{amenity}</span>
            ))}
            {amenities.length > 3 && (
              <span className="restaurant-amenity">+{amenities.length - 3} more</span>
            )}
          </div>

          <div className="restaurant-rating">
            <div className="restaurant-stars">
              {renderStars()}
              <span className="restaurant-rating-text">{rating.toFixed(1)}</span>
            </div>
          </div>

          <button 
            className="restaurant-link"
            onClick={() => setShowPopup(true)}
          >
            View Details & Reserve
          </button>
        </div>
      </div>

      {/* Reservation Popup */}
      {showPopup && (
        <div className="restaurant-popup">
          <div className="popup-content">
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              <FaTimes />
            </button>
            
            <div className="popup-header">
              <div 
                className="popup-restaurant-image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="popup-restaurant-info">
                <h3>{name}</h3>
                <div className="popup-location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="popup-rating">
                  {renderStars()}
                  <span>{rating.toFixed(1)}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={reservationData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={reservationData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={reservationData.guests}
                  onChange={handleInputChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={reservationData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Dietary restrictions, allergies, etc."
                  rows="3"
                />
              </div>

              <button type="submit" className="submit-reservation">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantCard;