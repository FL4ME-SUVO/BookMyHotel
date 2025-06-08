import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Hotels from './pages/Hotels';
import SingleHotel from './pages/SingleHotel';
import RestaurantPage from './pages/RestaurantPage';
import LoginSignup from './pages/Auth';
import AdminLogin from './pages/AdminLoginPage';
import HotelLogin from './pages/HotelLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PageLoader from './components/PageLoader/PageLoader';
import ChatAssistant from './components/Chatbot/ChatAssistant';
import HotelDashboard from './pages/HotelDashboard';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ForgotPassword from './pages/ForgotPassword';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<SingleHotel />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<LoginSignup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/hotel/login" element={<HotelLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/hotel" element={<HotelDashboard />} />
          <Route path="/User" element={<UserDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
     
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChatAssistant />
      <AppContent />
    </Router>
  );
}

export default App;
