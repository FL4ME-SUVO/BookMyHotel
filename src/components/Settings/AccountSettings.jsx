import React, { useState } from 'react';
import './AccountSettings.css';

function AccountSettings() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setMessage('Account updated successfully!');
  };

  return (
    <div className="as-fullpage">
      <h1 className="as-fullpage-title">Account Settings</h1>

      {message && <p className="as-fullpage-message">{message}</p>}

      <form onSubmit={handleSubmit} className="as-fullpage-form">
        <label className="as-fullpage-label">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="as-fullpage-input"
            placeholder="Your name"
            required
          />
        </label>

        <label className="as-fullpage-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="as-fullpage-input"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="as-fullpage-label">
          New Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="as-fullpage-input"
            placeholder="••••••••"
          />
        </label>

        <label className="as-fullpage-label">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="as-fullpage-input"
            placeholder="••••••••"
          />
        </label>

        <button type="submit" className="as-fullpage-button">Save Changes</button>
      </form>
    </div>
  );
}

export default AccountSettings;
