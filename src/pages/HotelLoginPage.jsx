// pages/HotelLoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HotelLogin from '../components/Auth/HotelLogin';

function HotelLoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // After successful login
    navigate('/hotel');
  };

  return (
    <div className="hotellogin-page">
      <HotelLogin onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default HotelLoginPage;
