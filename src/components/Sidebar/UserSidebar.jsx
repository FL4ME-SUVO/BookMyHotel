import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaChevronLeft } from 'react-icons/fa';
import './UserSidebar.css';

function UserSidebar({ setCurrentSection, isSidebarOpen }) {
  const [activeSection, setActiveSection] = useState('profile');
  const navigate = useNavigate();

  const sections = [
    { name: 'Profile', key: 'profile', icon: '👤' },
    { name: 'My Bookings', key: 'bookings', icon: '📅' },
    { name: 'Food Orders', key: 'food', icon: '🍽️' },
    { name: 'Check-in/out', key: 'checkincheckout', icon: '🏷️' },
    { name: 'Settings', key: 'settings', icon: '⚙️' },
  ];

  const variants = {
    open: { width: 240 },
    closed: { width: 72 }
  };

  const handleClick = (key) => {
    setActiveSection(key);
    setCurrentSection(key);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="usidebar"
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="usidebar__header">
        <motion.div
          className="ulogo"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          {isSidebarOpen ? 'User Dashboard' : 'U'}
        </motion.div>
      </div>

      <div className="usidebar__content">
        {/* Back to Home Button */}
        <div 
          className="usidebar__item back-button"
          onClick={handleBackToHome}
        >
          <div className="usidebar__icon">
            <FaChevronLeft />
          </div>
          {isSidebarOpen && (
            <motion.span
              className="usidebar__text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              Back to Home
            </motion.span>
          )}
        </div>

        {/* Main Navigation Items */}
        <ul className="usidebar__items">
          {sections.map((section) => (
            <li
              key={section.key}
              className={`usidebar__item ${activeSection === section.key ? 'active' : ''}`}
              onClick={() => handleClick(section.key)}
            >
              <div className="usidebar__icon">{section.icon}</div>
              {isSidebarOpen && (
                <motion.span
                  className="usidebar__text"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.name}
                </motion.span>
              )}
              {activeSection === section.key && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.2 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default UserSidebar;