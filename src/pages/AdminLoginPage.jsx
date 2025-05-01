// pages/AdminLoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../components/Auth/AdminLogin';

function AdminLoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // After successful login
    navigate('/admin');
  };

  return (
    <div className="adminlogin-page">
      <AdminLogin onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default AdminLoginPage;
