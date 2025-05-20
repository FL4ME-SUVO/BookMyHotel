import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.css';

function Sidebar({ setCurrentSection, isSidebarOpen }) {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sections = [
    { name: 'Dashboard', key: 'dashboard', icon: '📊' },
    { name: 'Hotels', key: 'hotels', icon: '🏨' },
    { name: 'Users', key: 'users', icon: '👥' },
    { name: 'Bookings', key: 'bookings', icon: '📅' },
    { name: 'F&B', key: 'food', icon: '🍽️' },
    { name: 'Reports', key: 'reports', icon: '📈' },
    { name: 'Check-in/out', key: 'checkinout', icon: '🏷️' },
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
      animate={isSidebarOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="usidebar__header">
        <motion.div
          className="ulogo"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          {isSidebarOpen ? 'Admin' : 'A'}
        </motion.div>
      </div>

      {/* Content */}
      <div className="usidebar__content">
        <ul className="usidebar__items">
          {sections.map((section) => (
            <li
              key={section.key}
              className={`usidebar__item ${activeSection === section.key ? 'active' : ''}`}
              onClick={() => handleClick(section.key)}
            >
              {/* Icon */}
              <div className="usidebar__icon">{section.icon}</div>

              {/* Text appears only if sidebar is open */}
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

              {/* Active indicator */}
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

export default Sidebar;