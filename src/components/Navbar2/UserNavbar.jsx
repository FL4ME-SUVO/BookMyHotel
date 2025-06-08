import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import './UserNavbar.css';

function UserNavbar({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="user-navbar-container">
      <div className="user-navbar-left-section">
        <button className="user-navbar-sidebar-toggle" onClick={toggleSidebar}>
          <FiMenu size={20} />
        </button>
        <div className="user-navbar-branding">
          <img src="/Images/logo.png" alt="BookMyHotel Logo" className="user-navbar-logo" />
        </div>
      </div>

      <div className="user-navbar-search-section">
        <div className="user-navbar-search-container">
          <FiSearch className="user-navbar-search-icon" size={18} />
          <input type="text" placeholder="Search..." className="user-navbar-search-input" />
        </div>
      </div>

      <div className="user-navbar-right-section">
        <div className="user-navbar-notifications">
          <FiBell size={22} />
          <span className="user-navbar-notification-badge">3</span>
        </div>

        <div
          ref={dropdownRef}
          className={`user-navbar-user-dropdown ${isDropdownOpen ? 'open' : ''}`}
        >
          <button
            className="user-navbar-profile-button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <img
              src="/Images/person_1.jpg"
              alt="User Profile"
              className="user-navbar-profile-pic"
            />
            <span className="user-navbar-user-name">User</span>
            <FiChevronDown className="user-navbar-dropdown-icon" size={16} />
          </button>

          <ul className="user-navbar-dropdown-menu">
            <li>
              <Link to="/user/profile">
                <FiUser size={18} />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/user/settings">
                <FiSettings size={18} />
                Settings
              </Link>
            </li>
            <li>
              <a href="/">
                <FiLogOut size={18} />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
