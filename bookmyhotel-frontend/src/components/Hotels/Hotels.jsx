import React from 'react';
import HotelCard from './HotelCard';
import { hotels } from '../../data/hotels';
import './Hotels.css';

function Hotels() {
  return (
    <section className="hotels-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading"><strong>Popular</strong> Hotels & Rooms</h2>
        </div>

        <div className="hotels-grid">
          {hotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              location={hotel.location}
              image={hotel.image}
              price={hotel.price}
              description={hotel.description}
              rating={hotel.rating}
              amenities={hotel.amenities}
            />
          ))}
        </div>

        <div className="more-button-container">
          <a href="#" className="hotel-link-more">More..</a>
        </div>
      </div>
    </section>
  );
}

export default Hotels;
