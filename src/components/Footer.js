// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <ul>

            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social-media">
          <a href="https://github.com/tauheed78600/" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.instagram.com/tauheed21__/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/tauheed-darekar-442553258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
