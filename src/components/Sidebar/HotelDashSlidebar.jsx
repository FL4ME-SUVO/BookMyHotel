import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HotelDashSlidebar.css';

function HotelDashSlidebar({ setCurrentSection, isSidebarOpen }) {
  const [activeSection, setActiveSection] = useState('profile');

  const sections = [
    { name: 'Dashboard', key: 'dashboard', icon: '🏠' },
    {name: 'Rooms', key: 'rooms', icon: '🛏️'},
    { name: 'Guest Management', key: 'guests', icon: '👥' },
    { name: 'Bookings', key: 'bookings', icon: '📅' },
    { name: 'Payments', key: 'payments', icon: '💰' },
    { name: 'Food & Services', key: 'food', icon: '🍽️' },
    { name: 'Communication', key: 'communication', icon: '💬' },
    { name: 'Reports', key: 'reports', icon: '📊' },
  ];

  const variants = {
    open: { width: 240 },
    closed: { width: 72 }
  };

  const handleClick = (key) => {
    setActiveSection(key);
    setCurrentSection(key);
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
          {isSidebarOpen ? 'User' : 'U'}
        </motion.div>
      </div>

      <div className="usidebar__content">
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

export default HotelDashSlidebar;