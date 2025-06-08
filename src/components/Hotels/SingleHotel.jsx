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
    address: '',
    phone: '',
    email: '',
    aadharNo: '',
    roomType: '',
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
    const { checkInDate, checkOutDate, roomType, guests } = formData;

    if (!checkInDate || !checkOutDate || !roomType || !hotel.price[roomType]) {
      return 0;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) return 0;

    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const pricePerNight = hotel.price[roomType];
    const roomsNeeded = Math.ceil(Number(guests) / 2);

    return diffDays * pricePerNight * roomsNeeded;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time portion

    if (checkIn < today) {
      alert('Check-in date cannot be in the past.');
      return;
    }

    if (checkOut <= checkIn) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const totalAmount = calculateTotal();

    const bookingData = {
      ...formData,
      totalAmount,
    };

    try {
      const response = await fetch('http://localhost:8080/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Booking confirmed:', data);
        setShowConfirmation(true);
        setTimeout(() => {
          setShowBookingForm(false);
        }, 3000);
      } else {
        console.error('Booking failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setFormData({
      fullName: '',
      address: '',
      phone: '',
      email: '',
      aadharNo: '',
      roomType: '',
      checkInDate: '',
      checkOutDate: '',
      guests: 1
    });
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section className="single-hotel">
      {showBookingForm && (
        <div className={`booking-modal ${showBookingForm ? 'modal-enter' : ''}`}>
          <div className="booking-form-container">
            <div className="booking-form-header">
              <h2>Book Your Stay at {hotel.name}</h2>
              <button className="close-button" onClick={() => setShowBookingForm(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="fullName"><FaUserAlt className="input-icon" /> Full Name</label>
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
                <label htmlFor="address"><i className="fa fa-home input-icon" /> Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone"><i className="fa fa-phone input-icon" /> Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"><i className="fa fa-envelope input-icon" /> Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="aadharNo"><i className="fa fa-id-card input-icon" /> Aadhar Number</label>
                <input
                  type="text"
                  id="aadharNo"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleInputChange}
                  required
                  placeholder="1234-5678-9012"
                  pattern="\d{4}-\d{4}-\d{4}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="roomType"><i className="fa fa-bed input-icon" /> Room Type</label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a room type</option>
                  {hotel.price && typeof hotel.price === 'object' ? (
                    Object.keys(hotel.price).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))
                  ) : (
                    <option disabled>No room types available</option>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="checkInDate"><FaCalendarAlt className="input-icon" /> Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  min={todayStr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkOutDate"><FaCalendarAlt className="input-icon" /> Check-out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                  min={formData.checkInDate || todayStr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests"><FaUserAlt className="input-icon" /> Guests</label>
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
                <p className="room-note">
                  Note: Each room accommodates up to 2 guests. You'll need <strong>{Math.ceil(Number(formData.guests) / 2)}</strong> room(s).
                </p>
              </div>

              <div className="price-summary">
                <div className="price-item">
                  <span>Price per night:</span>
                  <span>₹{formData.roomType && hotel.price[formData.roomType]}</span>
                </div>
                {formData.checkInDate &&
                  formData.checkOutDate &&
                  formData.roomType &&
                  hotel.price[formData.roomType] &&
                  new Date(formData.checkOutDate) > new Date(formData.checkInDate) && (
                    <div className="price-item total">
                      <span>Total estimate:</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                  )}
              </div>

              <button type="submit" className="btn btn-primary confirm-booking-btn">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className={`confirmation-modal ${showConfirmation ? 'confirmation-enter' : ''}`}>
          <div className="confirmation-content">
            <FaCheckCircle className="confirmation-icon" />
            <h2>Booking Confirmed!</h2>
            <div className="confirmation-details">
              <p><strong>Hotel:</strong> {hotel.name}</p>
              <p><strong>Guest:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Aadhar:</strong> {formData.aadharNo}</p>
              <p><strong>Room Type:</strong> {formData.roomType}</p>
              <p><strong>Dates:</strong> {formData.checkInDate} to {formData.checkOutDate}</p>
              <p><strong>Total:</strong> ₹{calculateTotal()}</p>
            </div>
            <button className="btn btn-primary close-confirmation-btn" onClick={closeConfirmation}>Done</button>
          </div>
        </div>
      )}

      <div className="single-hotel-card container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <div className="single-hotel-content">
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
                <p>
                  {Object.entries(hotel.price).map(([type, price]) => (
                    <span key={type} style={{ display: 'block' }}>
                      {type}: ₹{price}
                    </span>
                  ))}
                </p>
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
              <button className="btn btn-primary" onClick={() => setShowBookingForm(true)}>Book Now</button>
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
