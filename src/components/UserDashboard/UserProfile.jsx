import React, { useState } from 'react';
import { FiCalendar, FiBook, FiCheckCircle, FiUser, FiClock } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';

import './UserProfile.css';

function UserProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const [bookings] = useState([
    { id: 1, hotel: 'Hotel ABC', date: '2024-10-10', status: 'Upcoming' },
    { id: 2, hotel: 'Hotel XYZ', date: '2024-09-15', status: 'Completed' },
  ]);
  const [foodOrders] = useState([
    { id: 1, item: 'Pasta', date: '2024-09-20', amount: 350 },
    { id: 2, item: 'Pizza', date: '2024-09-22', amount: 500 },
  ]);
  const [checkInOutStatus, setCheckInOutStatus] = useState('Checked Out');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const toggleCheckInStatus = () => {
    setCheckInOutStatus(prev => (prev === 'Checked In' ? 'Checked Out' : 'Checked In'));
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div
          className="profile-photo-wrapper"
          onClick={() => document.getElementById('fileInput').click()}
          style={{ cursor: 'pointer' }}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="profile-photo"
            />
          ) : (
            <div className="photo-placeholder">
              <FiUser size={48} />
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">Shubhajit Giri</h2>
          <p className="profile-email">girishubhajit37@gmail.com</p>
          <div className="profile-meta">
            <span className="meta-item">
              <FiUser className="meta-icon" />
              Member since 2024
            </span>
            <span className="meta-item">
              <FiCheckCircle className="meta-icon" />
              Verified
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FiCalendar />
          </div>
          <div className="stat-details">
            <h3>Upcoming</h3>
            <p>{bookings.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FiBook />
          </div>
          <div className="stat-details">
            <h3>Orders</h3>
            <p>{foodOrders.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FiClock />
          </div>
          <div className="stat-details">
            <h3>Status</h3>
            <p>{checkInOutStatus}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <BiRupee size={20} />
          </div>
          <div className="stat-details">
            <h3>Total</h3>
            <p>12,345</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Bookings Section */}
        <section className="section">
          <div className="section-header">
            <h3 className="section-title">My Bookings</h3>
            <button className="section-action">View All</button>
          </div>
          <div className="list">
            {bookings.map((b) => (
              <div key={b.id} className="list-item">
                <div className="item-icon">
                  <FiBook />
                </div>
                <div className="item-info">
                  <div className="item-title">{b.hotel}</div>
                  <div className="item-subtitle">Date: {b.date}</div>
                </div>
                <div className={`item-status ${b.status.toLowerCase()}`}>
                  {b.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Food Orders Section */}
        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Food Orders</h3>
            <button className="section-action">View All</button>
          </div>
          <div className="list">
            {foodOrders.map((o) => (
              <div key={o.id} className="list-item">
                <div className="item-icon">
                  <FiBook />
                </div>
                <div className="item-info">
                  <div className="item-title">{o.item}</div>
                  <div className="item-subtitle">Date: {o.date}</div>
                </div>
                <div className="item-amount">
                  <BiRupee /> {o.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Status Section */}
      <section className="status-section">
        <div className="status-content">
          <div className="status-info">
            <FiCheckCircle className="status-icon" />
            <div>
              <p className="status-label">Current Status</p>
              <h3 className="status-value">{checkInOutStatus}</h3>
            </div>
          </div>
          <button
            className={`status-button ${checkInOutStatus === 'Checked In' ? 'checked-in' : ''}`}
            onClick={toggleCheckInStatus}
          >
            {checkInOutStatus === 'Checked In' ? 'Check Out' : 'Check In'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;