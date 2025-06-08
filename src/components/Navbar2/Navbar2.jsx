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
import './Navbar2.css';

function Navbar2({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar2-container">
      <div className="navbar2-left">
        <button className="navbar2-sidebar-toggle" onClick={toggleSidebar}>
          <FiMenu size={20} />
        </button>
        <img src="/Images/logo.png" alt="Logo" className="navbar2-logo" />
      </div>

      <div className="navbar2-search-section">
        <div className="navbar2-search-container">
          <FiSearch className="navbar2-search-icon" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="navbar2-search-input"
          />
        </div>
      </div>

      <div className="navbar2-right">
        <div className="navbar2-notifications">
          <FiBell size={22} />
          <span className="navbar2-notification-badge">3</span>
        </div>

        <div
          className={`navbar2-user-dropdown ${isDropdownOpen ? 'open' : ''}`}
          ref={dropdownRef}
        >
          <button
            className="navbar2-profile-button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <img
              src="/Images/person_1.jpg"
              alt="Admin"
              className="navbar2-profile-pic"
            />
            <span className="navbar2-user-name">Admin</span>
            <FiChevronDown className="navbar2-dropdown-icon" size={16} />
          </button>

          <ul className="navbar2-dropdown-menu">
            <li>
              <Link to="/admin/profile">
                <FiUser size={18} /> Profile
              </Link>
            </li>
            <li>
              <Link to="/admin/settings">
                <FiSettings size={18} /> Settings
              </Link>
            </li>
            <li>
              <a href="/">
                <FiLogOut size={18} /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
