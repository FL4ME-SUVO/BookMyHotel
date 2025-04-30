import React, { useState } from 'react';
import HotelCard from './HotelCard';
import { hotels } from '../../data/MoreHotels';
import './Hotels.css';

const ITEMS_PER_PAGE = 6;

function MoreHotel() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHotels = hotels.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="hotels-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading"><strong>Popular</strong> Hotels & Rooms</h2>
        </div>

        <div className="hotels-grid">
          {currentHotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
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

        <div className="pagination">
          <button onClick={() => handleClick(currentPage - 1)} className="page-btn">{'<'}</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i + 1)}
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handleClick(currentPage + 1)} className="page-btn">{'>'}</button>
        </div>
      </div>
    </section>
  );
}

export default MoreHotel;
