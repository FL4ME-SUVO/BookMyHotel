import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="admin-top-navbar">
      <div className="left-section">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="icon">☰</span>
        </button>
        <span className="branding">BookMyHotel Admin</span>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="right-section">
        <div className="user-dropdown">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className="user-name">Admin</span>
            <span className="dropdown-icon">▼</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/admin/profile">Profile</Link></li>
              <li><Link to="/admin/settings">Settings</Link></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;