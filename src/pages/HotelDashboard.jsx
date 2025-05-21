import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2/Navbar2';
import Sidebar from '../components/Sidebar/HotelDashSlidebar';
import DashboardOverview from '../components/HotelDashboard/DashboardManagement';
import Rooms from '../components/Rooms/RoomManagement';
import GuestManagement from '../components/Guest_management/GuestManagement';
import Bookings from '../components/HotelBookings/BookingsManagement';
import Payments from '../components/Payments/PaymentsManagement';
import FoodSystem from '../components/FoodService/FAndSManagement';
import Communication from '../components/Communications/CommunicationManagement';
import Reports from '../components/HotelReports/ReportsManagement';
import './HotelDashboard.css';

function HotelDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'rooms':
        return <Rooms />;
      case 'guests':
        return <GuestManagement />;
      case 'bookings':
        return <Bookings />;
      case 'payments':
        return <Payments />;
      case 'food':
        return <FoodSystem />;
      case 'communication':
        return <Communication />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="hotel-dashboard">
      <Navbar2 toggleSidebar={toggleSidebar} />
      <Sidebar setCurrentSection={setCurrentSection} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default HotelDashboard;