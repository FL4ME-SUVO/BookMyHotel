import React from 'react';
import { motion } from 'framer-motion';
import './Sidebar.css';

function Sidebar({ setCurrentSection, isSidebarOpen }) {
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
    open: { width: 250 },
    closed: { width: 80 }
  };

  return (
    <motion.div
      className="sidebar"
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          {isSidebarOpen ? 'Admin Panel' : 'AP'}
        </h2>
      </div>

      <div className="sidebar-content">
        <ul className="sidebar-items">
          {sections.map((section) => (
            <li
              key={section.key}
              className="sidebar-item"
              onClick={() => setCurrentSection(section.key)}
            >
              <span className="sidebar-icon">{section.icon}</span>
              {isSidebarOpen && (
                <motion.span
                  className="sidebar-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.name}
                </motion.span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Sidebar;