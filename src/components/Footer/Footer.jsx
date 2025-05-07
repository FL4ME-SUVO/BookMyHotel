import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column footer-about">
            <h3 className="footer-title">About BookMyHotel</h3>
            <p>
              Far far away, beyond the Aravalli hills and the backwaters of Kerala, far from the bustling cities of Bharat, there wait the hidden stays and untold escapes — waiting to be discovered with BookMyHotel.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> About</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Services</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Terms and Conditions</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Privacy Policy</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Best Price Guarantee</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Customer Support</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> FAQ</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Payment Option</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Booking Tips</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> How it works</a>
              </li>
              <li className="footer-link">
                <a href="#"><i className="icon-arrow-right"></i> Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Have a Questions?</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="footer-contact-text">
                  NH17, Namkhana, India
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-contact-text">
                  +91 7407969835
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer-contact-text">
                  shubhajit.giri@tnu.in
                </div>
              </div>
            </div>

            <div className="footer-subscribe">
              <form className="footer-subscribe-form">
                <input type="email" className="footer-subscribe-input" placeholder="Your Email" />
                <button type="submit" className="footer-subscribe-button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright &copy; {currentYear} All rights reserved | BookMyHotel</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;