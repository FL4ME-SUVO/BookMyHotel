import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    destination: '',
    dateFrom: '',
    dateTo: '',
    priceMin: 25000,
    priceMax: 50000,
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
        <h1 id="filter-heading" className="filter-title">Find Your Perfect Stay</h1>
        <p id="filter-description">Refine your hotel search</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="filter-grid"
        aria-describedby="filter-description"
      >
        {/* Destination */}
        <div className="filter-group">
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            name="destination"
            value={filters.destination}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="">Select Location</option>
            <option value="Shimla">Shimla</option>
            <option value="Manali">Manali</option>
            <option value="Varanasi">Varanasi</option>
          </select>
        </div>

        {/* Check-in Date */}
        <div className="filter-group">
          <label htmlFor="dateFrom">Check In</label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            value={filters.dateFrom}
            onChange={handleChange}
            aria-label="Check-in date"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Check-out Date */}
        <div className="filter-group">
          <label htmlFor="dateTo">Check Out</label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            value={filters.dateTo}
            onChange={handleChange}
            aria-label="Check-out date"
            min={filters.dateFrom || new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Price Range */}
        <div className="filter-group price-range-group">
          <label htmlFor="priceRange">Price Range</label>
          <div className="price-range-container">
            <span className="price-value">₹{filters.priceMin.toLocaleString()}</span>
            <input
              type="range"
              id="priceRange"
              name="priceMin"
              min="500"
              max="50000"
              step="500"
              value={filters.priceMin}
              onChange={handleChange}
              aria-label="Minimum price"
              className="price-slider"
            />
            <span className="price-value">₹{filters.priceMax.toLocaleString()}</span>
          </div>
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
          aria-label="Search hotels"
        >
          Search
          <i className="fas fa-search search-icon" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
};

export default FilterBar;