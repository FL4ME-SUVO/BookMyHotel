import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openDropdown = () => {
    if (window.innerWidth > 991) {
      setIsDropdownOpen(true);
    }
  };

  const closeDropdown = () => {
    if (window.innerWidth > 991) {
      setIsDropdownOpen(false);
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
            <li
              className="nav-item dropdown"
              onClick={toggleDropdown}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <span className="nav-link">
                Menu
                <span className="dropdown-chevron">▼</span>
              </span>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {/* <li>
                  <Link to="/admin" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    Admin Dashboard
                  </Link>
                </li> */}
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
            <li className="nav-item">
              <Link to="/auth" className={`nav-link btn-signup ${isActive('/auth')}`} onClick={() => setIsMenuOpen(false)}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;