import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu dropdown
  const toggleMenuDropdown = () => {
    if (window.innerWidth <= 991) {
      setIsMenuDropdownOpen(!isMenuDropdownOpen);
    }
  };

  const openMenuDropdown = () => {
    if (window.innerWidth > 991) {
      setIsMenuDropdownOpen(true);
    }
  };

  const closeMenuDropdown = () => {
    if (window.innerWidth > 991) {
      setIsMenuDropdownOpen(false);
    }
  };

  // Signup dropdown
  const toggleSignupDropdown = () => {
    if (window.innerWidth <= 991) {
      setIsSignupDropdownOpen(!isSignupDropdownOpen);
    }
  };

  const openSignupDropdown = () => {
    if (window.innerWidth > 991) {
      setIsSignupDropdownOpen(true);
    }
  };

  const closeSignupDropdown = () => {
    if (window.innerWidth > 991) {
      setIsSignupDropdownOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/Images/logo.png" alt="BookMyHotel" />
        </Link>

        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {/* Menu Dropdown */}
            <li
              className="nav-item dropdown"
              onClick={toggleMenuDropdown}
              onMouseEnter={openMenuDropdown}
              onMouseLeave={closeMenuDropdown}
            >
              <span className="nav-link">
                Menu <span className="dropdown-chevron">▼</span>
              </span>
              <ul className={`dropdown-menu ${isMenuDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link to="/admin/login" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Admin Login
                  </Link>
                </li>
                <li>
                  <Link to="/user/dashboard" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    User Dashboard
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/hotels" className={`nav-link ${isActive('/hotels')}`} onClick={() => setIsMenuOpen(false)}>
                Hotels
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/restaurant" className={`nav-link ${isActive('/restaurant')}`} onClick={() => setIsMenuOpen(false)}>
                Restaurant
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/auth" className={`nav-link btn-login ${isActive('/auth')}`} onClick={() => setIsMenuOpen(false)}>
                Log in
              </Link>
            </li>

            {/* Sign Up Dropdown */}
            <li
              className="nav-item dropdown"
              onClick={toggleSignupDropdown}
              onMouseEnter={openSignupDropdown}
              onMouseLeave={closeSignupDropdown}
            >
              <span className={`nav-link btn-signup`}>
                Sign up <span className="dropdown-chevron">▼</span>
              </span>
              <ul className={`dropdown-menu ${isSignupDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link to="/auth" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Sign up as User
                  </Link>
                </li>
                <li>
                  <Link to="/hotel/auth" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Sign up as Hotel
                  </Link>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
