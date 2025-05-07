import React, { useState } from 'react';
import './FilterBar.css';

const RestaurantFilterBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    time: '',
    cuisine: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <section
      aria-labelledby="filter-heading"
      className="filter-bar-container"
      role="search"
    >
      <div className="filter-header">
        <h1 id="filter-heading" className="filter-title">Find Your Perfect Meal</h1>
        <p id="filter-description">Refine your restaurant search</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="filter-grid"
        aria-describedby="filter-description"
      >
        {/* Location */}
        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        {/* Date */}
        <div className="filter-group">
          <label htmlFor="date">Reservation Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
            aria-label="Reservation date"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Time */}
        <div className="filter-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={filters.time}
            onChange={handleChange}
            aria-label="Reservation time"
          />
        </div>

        {/* Cuisine */}
        <div className="filter-group">
          <label htmlFor="cuisine">Cuisine</label>
          <select
            id="cuisine"
            name="cuisine"
            value={filters.cuisine}
            onChange={handleChange}
            className="rating-select"
          >
            <option value="">Any Cuisine</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="South Indian">South Indian</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="filter-group">
          <label htmlFor="rating">Star Rating</label>
          <select
            id="rating"
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="rating-select"
          >
            <option value="">Any Rating</option>
            <option value="5">★★★★★ (5 stars)</option>
            <option value="4">★★★★☆ (4+ stars)</option>
            <option value="3">★★★☆☆ (3+ stars)</option>
            <option value="2">★★☆☆☆ (2+ stars)</option>
            <option value="1">★☆☆☆☆ (1+ stars)</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="search-button"
          aria-label="Search restaurants"
        >
          Search
          <i className="fas fa-search search-icon" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
};

export default RestaurantFilterBar;
