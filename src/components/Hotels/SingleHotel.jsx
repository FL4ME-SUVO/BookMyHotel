import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../../data/MoreHotels';
import './SingleHotel.css';
import { FaCheckCircle, FaTimes, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

function SingleHotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id.toString() === id);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1
  });

  if (!hotel) {
    return <div className="single-hotel-error">Hotel not found.</div>;
  }

  const roomLabels = ["Bedroom", "Deluxe Room", "Super Deluxe Room"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    if (formData.checkInDate && formData.checkOutDate) {
      const diffTime = Math.abs(new Date(formData.checkOutDate) - new Date(formData.checkInDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays * hotel.price;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowBookingForm(false);
    }, 3000);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setFormData({
      fullName: '',
      checkInDate: '',
      checkOutDate: '',
      guests: 1
    });
  };

  return (
    <section className="single-hotel">
      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className={`booking-modal ${showBookingForm ? 'modal-enter' : ''}`}>
          <div className="booking-form-container">
            <div className="booking-form-header">
              <h2>Book Your Stay at {hotel.name}</h2>
              <button
                className="close-button"
                onClick={() => setShowBookingForm(false)}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="fullName">
                  <FaUserAlt className="input-icon" /> Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkInDate">
                  <FaCalendarAlt className="input-icon" /> Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkOutDate">
                  <FaCalendarAlt className="input-icon" /> Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">
                  <FaUserAlt className="input-icon" /> Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max={hotel.guests}
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="price-summary">
                <div className="price-item">
                  <span>Price per night:</span>
                  <span>₹{hotel.price}</span>
                </div>
                {formData.checkInDate && formData.checkOutDate && (
                  <div className="price-item total">
                    <span>Total estimate:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary confirm-booking-btn">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className={`confirmation-modal ${showConfirmation ? 'confirmation-enter' : ''}`}>
          <div className="confirmation-content">
            <FaCheckCircle className="confirmation-icon" />
            <h2>Booking Confirmed!</h2>
            <div className="confirmation-details">
              <p><strong>Hotel:</strong> {hotel.name}</p>
              <p><strong>Guest:</strong> {formData.fullName}</p>
              <p><strong>Dates:</strong> {formData.checkInDate} to {formData.checkOutDate}</p>
              <p><strong>Total:</strong> ₹{calculateTotal()}</p>
            </div>
            <button
              className="btn btn-primary close-confirmation-btn"
              onClick={closeConfirmation}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Main Hotel Content */}
      <div className="single-hotel-card container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

        <div className="single-hotel-content">
          {/* Left Side: Hotel Image + Info */}
          <div className="hotel-main">
            <div className="main-hotel-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>

            <h1 className="hotel-title">{hotel.name}</h1>
            <p className="hotel-location"><i className="fa-solid fa-location-dot"></i> {hotel.location}</p>

            <div className="hotel-room-details">
              <span>🛏 {hotel.rooms} Bedrooms</span>
              <span>🛁 {hotel.bathrooms} Bathrooms</span>
              <span>👥 Sleeps {hotel.guests} Guests</span>
            </div>

            <div className="hotel-description">
              <h2>About This Hotel</h2>
              <p>{hotel.description}</p>
            </div>

            <div className="hotel-info">
              <div className="info-item">
                <h4>Rating:</h4>
                <p>{hotel.rating} ★</p>
              </div>
              <div className="info-item">
                <h4>Price per night:</h4>
                <p>₹{hotel.price}</p>
              </div>
            </div>

            <div className="hotel-amenities">
              <h3>Amenities</h3>
              <ul>
                {hotel.amenities.map((amenity, index) => (
                  <li key={index}><i className="fa fa-check"></i> {amenity}</li>
                ))}
              </ul>
            </div>

            <div className="hotel-booking">
              <button
                className="btn btn-primary"
                onClick={() => setShowBookingForm(true)}
              >
                Book Now
              </button>
            </div>

            <div className="hotel-map">
              <h3>Location</h3>
              <iframe
                title="Hotel Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Side: Room Images */}
          <div className="room-gallery">
            {hotel.images?.map((img, index) => (
              <div className="room-image-card" key={index}>
                <img src={img} alt={`Room ${index + 1}`} />
                <p className="room-label">{roomLabels[index] || `Room ${index + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleHotel;