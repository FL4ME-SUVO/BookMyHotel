import React from 'react';
import { useParams } from 'react-router-dom';
import { hotels } from '../../data/hotels';
import './SingleHotel.css';

function SingleHotel() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id.toString() === id);

  if (!hotel) {
    return <div className="single-hotel-error">Hotel not found.</div>;
  }

  return (
    <section className="single-hotel">
      <div className="single-hotel-card container">
        {/* Room Gallery */}
        <div className="hotel-gallery">
          {hotel.images?.map((img, index) => (
            <img key={index} src={img} alt={`Room ${index + 1}`} />
          ))}
        </div>

        {/* Main Details */}
        <div className="hotel-main">
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
            <a href="#" className="btn btn-primary">Book Now</a>
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
      </div>
    </section>
  );
}

export default SingleHotel;
