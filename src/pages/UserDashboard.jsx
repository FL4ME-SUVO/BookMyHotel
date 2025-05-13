import React, { useState } from 'react';
import UserNavbar from '../components/Navbar2/UserNavbar'; // Use a user-specific navbar
import UserSidebar from '../components/Sidebar/UserSidebar'; // Use a user-specific sidebar
import UserOverview from '../components/User/UserOverview';
import MyBookings from '../components/Booking/MyBookings';
import FoodOrders from '../components/Food/FoodOrders';
import ChatSupport from '../components/Chatbot/ChatSupport';
import AccountSettings from '../components/Settings/AccountSettings';
import './UserDashboard.css';

function UserDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('overview');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return <UserOverview />;
      case 'bookings':
        return <MyBookings />;
      case 'food':
        return <FoodOrders />;
      case 'chat':
        return <ChatSupport />;
      case 'settings':
        return <AccountSettings />;
      default:
        return <UserOverview />;
    }
  };

  return (
    <div className="user-dashboard">
      <UserNavbar toggleSidebar={toggleSidebar} />
      <UserSidebar setCurrentSection={setCurrentSection} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default UserDashboard;
