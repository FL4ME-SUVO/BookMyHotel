import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './LoginSignup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function HotelLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=-])[A-Za-z\d@$!%*?&#^()_+=-]{6,}$/;

    if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        'Password must contain uppercase, lowercase, number, special character and be at least 6 characters';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Hotel logged in successfully');
      navigate('/hotel');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="auth-page"
      style={{ backgroundImage: "url('/Images/bg_11.jpg')" }}
    >
      <div className="background-overlay"></div>

      <div className="auth-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h2>Hotel Login</h2>

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}

            {/* Updated Link to Forgot Password page */}
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>

            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HotelLogin;
