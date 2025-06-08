import React, { useState } from 'react';
import './forgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending reset link
    if (email) {
      setMessage('A password reset link has been sent to your email.');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div
      className="fp-container"
      style={{
        backgroundImage: "url('/Images/bg_9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      ></div>

      <div className="fp-card" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="fp-title">Forgot Password</h2>
        <p className="fp-description">Enter your email to reset your password.</p>

        <form onSubmit={handleSubmit} className="fp-form">
          <input
            type="email"
            className="fp-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="fp-button">
            Send Reset Link
          </button>
        </form>

        {message && <p className="fp-message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
