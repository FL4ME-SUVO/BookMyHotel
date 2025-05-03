import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard'; // Assuming you have this component
import { restaurants } from '../../data/MoreRestaurants'; // Your restaurants data
import './Restaurant.css'; // Your styles for restaurants

const ITEMS_PER_PAGE = 6;

function Restaurant() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(restaurants.length / ITEMS_PER_PAGE);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRestaurants = restaurants.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="restaurants-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading"><strong>Popular</strong> Restaurants</h2>
        </div>

        <div className="restaurants-grid">
          {currentRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              location={restaurant.location}
              image={restaurant.image}
              description={restaurant.description}
              rating={restaurant.rating}
              amenities={restaurant.amenities}
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

export default Restaurant;