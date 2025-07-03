import React from 'react';
import './Header.css';
import logo from '../assets/logo_gakoni.png'; // Ensure correct extension
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-top">
        <img src={logo} alt="Gakoni Logo" className="logo" />
        <div className="scrolling-text">
          <p>Email: info@gakoniadventist.rw &nbsp; | &nbsp; Phone: 0789986544 &nbsp; | &nbsp; Open: 7AM – 5PM &nbsp; | &nbsp; Location: Gatsibo – Kiramuruzi - Gakoni</p>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <h1 className="main-title">GAKONI ADVENTIST COLLEGE</h1>
    </header>
  );
};

export default Header;