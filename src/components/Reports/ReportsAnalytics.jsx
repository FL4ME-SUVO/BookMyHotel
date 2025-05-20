import React from 'react';
import './ReportsAnalytics.css';

export default function ReportsAnalytics() {
  return (
    <div className="reports-analytics">
      <h1 className="ra-title">Reports & Analytics</h1>
      <p className="ra-subtext">
        View booking trends, top-rated hotels, and revenue breakdowns here.
      </p>

      {/* Summary Cards */}
      <div className="ra-cards">
        <div className="ra-card">
          <h3>Total Bookings</h3>
          <p>1,284</p>
        </div>
        <div className="ra-card">
          <h3>Monthly Revenue</h3>
          <p>₹4,12,500</p>
        </div>
        <div className="ra-card">
          <h3>Avg. Rating</h3>
          <p>4.6 ★</p>
        </div>
        <div className="ra-card">
          <h3>New Users</h3>
          <p>327</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="ra-section">
        <h2>Booking Trends (Last 6 Months)</h2>
        <div className="ra-bar-chart">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
            <div className="ra-bar" key={month}>
              <div className="ra-bar-fill" style={{ height: `${60 + i * 20}px` }}></div>
              <span>{month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Rated Hotels */}
      <div className="ra-section">
        <h2>Top Rated Hotels</h2>
        <ul className="ra-list">
          <li>
            <strong>The Grand Palace</strong> – 4.9 ★
          </li>
          <li>
            <strong>Ocean View Resort</strong> – 4.8 ★
          </li>
          <li>
            <strong>Urban Nest Hotel</strong> – 4.7 ★
          </li>
        </ul>
      </div>
    </div>
  );
}
