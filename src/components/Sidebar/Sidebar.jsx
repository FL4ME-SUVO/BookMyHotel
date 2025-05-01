import React from 'react';
import './Sidebar.css';

function Sidebar({ setCurrentSection }) {
  const sections = [
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Hotels', key: 'hotels' },
    { name: 'Users', key: 'users' },
    { name: 'Bookings', key: 'bookings' },
    { name: 'F&B', key: 'food' },
    { name: 'Chatbot', key: 'chatbot' },
    { name: 'Reports', key: 'reports' },
    { name: 'Check-in/out', key: 'checkinout' },
    { name: 'Settings', key: 'settings' },
  ];

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {sections.map(section => (
          <li
            key={section.key}
            className="sidebar-item"
            onClick={() => setCurrentSection(section.key)}
          >
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;