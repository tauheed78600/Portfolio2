import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <h1>Menu</h1>
                <ul className="nav-links">
                    <li><a href="/home" onClick={toggleNavbar}>Home</a></li>
                    <li><a href="/about" onClick={toggleNavbar}>About</a></li>
                    <li><a href="/services" onClick={toggleNavbar}>Services</a></li>
                    <li><a href="/contact" onClick={toggleNavbar}>Contact</a></li>
                </ul>
            </nav>
            <div className="content">
                {/* Your main content goes here */}
            </div>
        </div>
    );
}

export default Navbar;
