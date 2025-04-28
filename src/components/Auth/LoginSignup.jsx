import React, { useState } from 'react';
import './LoginSignup.css';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-page" style={{ backgroundImage: "url('/images/bg_11.jpg')"  }}>
      <div className="background-overlay"></div>

      <div className={`auth-container ${isSignUp ? 'signup-mode' : ''}`}>
        <div className="form-box">
          <form>
            <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
            <div className="social-login">
              <button type="button" className="social-btn">
                <FaGoogle /> {isSignUp ? 'Sign Up' : 'Log In'} with Google
              </button>
              <button type="button" className="social-btn">
                <FaFacebookF /> {isSignUp ? 'Sign Up' : 'Log In'} with Facebook
              </button>
            </div>
            <span>or use your email</span>
            {isSignUp && <input type="text" placeholder="Name" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {!isSignUp && <a href="#">Forgot password?</a>}
            <button type="submit" className="submit-btn">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
            <p className="switch-text">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <span onClick={toggleMode}>
                {isSignUp ? ' Log In' : ' Sign Up'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
