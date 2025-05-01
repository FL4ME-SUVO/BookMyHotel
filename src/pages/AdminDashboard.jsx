import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2/Navbar2';
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardOverview from '../components/Dashboard/DashboardOverview';
import HotelManagement from '../components/Hotel/HotelManagement';
import UserManagement from '../components/User/UserManagement';
import BookingManagement from '../components/Booking/BookingManagement';
import FoodSystem from '../components/Food/FoodSystem';
import ChatbotManagement from '../components/Chatbot/ChatbotManagement';
import ReportsAnalytics from '../components/Reports/ReportsAnalytics';
import CheckInOut from '../components/CheckInOut/CheckInOut';
import Settings from '../components/Settings/Settings';
import './AdminDashboard.css';

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'hotels':
        return <HotelManagement />;
      case 'users':
        return <UserManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'food':
        return <FoodSystem />;
      case 'chatbot':
        return <ChatbotManagement />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'checkinout':
        return <CheckInOut />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Navbar2 toggleSidebar={toggleSidebar} />
      <Sidebar setCurrentSection={setCurrentSection} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default AdminDashboard;