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
import AdminDashboard from './pages/AdminDashboard';
import HotelLoginSignupPage from './pages/HotelLoginSignupPage';
import UserDashboard from './pages/UserDashboard';
import PageLoader from './components/PageLoader/PageLoader';

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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/User" element={<UserDashboard />} />
          <Route path="/hotel/auth" element={<HotelLoginSignupPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
