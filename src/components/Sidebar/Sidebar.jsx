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
    { name: 'Chatbot', key: 'chatbot', icon: '🤖' },
    { name: 'Reports', key: 'reports', icon: '📈' },
    { name: 'Check-in/out', key: 'checkinout', icon: '🏷️' },
    { name: 'Settings', key: 'settings', icon: '⚙️' },
  ];

  const sidebarVariants = {
    open: { width: 240 },
    closed: { width: 72 }
  };

  const handleSectionClick = (key) => {
    setActiveSection(key);
    setCurrentSection(key);
  };

  return (
    <motion.div
      className="sidebar"
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="sidebar-header">
        <motion.div 
          className="logo"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          {isSidebarOpen ? 'Admin' : 'A'}
        </motion.div>
      </div>

      <div className="sidebar-content">
        <ul className="sidebar-items">
          {sections.map((section) => (
            <li
              key={section.key}
              className={`sidebar-item ${activeSection === section.key ? 'active' : ''}`}
              onClick={() => handleSectionClick(section.key)}
            >
              <div className="sidebar-icon">{section.icon}</div>
              {isSidebarOpen && (
                <motion.span
                  className="sidebar-text"
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

export default Sidebar;