import React, { useState } from 'react';
import { FiCalendar, FiBook, FiCheckCircle, FiUser, FiClock } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import './UserProfile.css';

function UserProfile() {
  const [profileImage, setProfileImage] = useState(null);

  const bookings = [
    { id: 1, hotel: 'Hotel ABC', date: '2024-10-10', status: 'Upcoming' },
    { id: 2, hotel: 'Hotel XYZ', date: '2024-09-15', status: 'Completed' },
  ];

  const foodOrders = [
    { id: 1, item: 'Pasta', date: '2024-09-20', amount: 350 },
    { id: 2, item: 'Pizza', date: '2024-09-22', amount: 500 },
  ];

  const totalSpent = foodOrders.reduce((sum, order) => sum + order.amount, 0);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
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
            <img src={profileImage} alt="Profile" className="profile-photo" />
          ) : (
            <div className="photo-placeholder">
              <FiUser size={48} />
            </div>
          )}
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
              <FiUser className="meta-icon" /> Member since 2024
            </span>
            <span className="meta-item">
              <FiCheckCircle className="meta-icon" /> Verified
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FiCalendar />
          </div>
          <div className="stat-details">
            <h3>Bookings</h3>
            <p>{bookings.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FiBook />
          </div>
          <div className="stat-details">
            <h3>Food Orders</h3>
            <p>{foodOrders.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FiClock />
          </div>
          <div className="stat-details">
            <h3>Last Stay</h3>
            <p>{bookings[1]?.date || 'N/A'}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <BiRupee size={20} />
          </div>
          <div className="stat-details">
            <h3>Total Spent</h3>
            <p>{totalSpent.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Booking History */}
      <div className="profile-content">
        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Booking History</h3>
          </div>
          <div className="list">
            {bookings.map((b) => (
              <div key={b.id} className="list-item">
                <div className="item-icon">
                  <FiCalendar />
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

        {/* Food Orders */}
        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Food Order History</h3>
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
    </div>
  );
}

export default UserProfile;
