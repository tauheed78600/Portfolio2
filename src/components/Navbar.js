import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const reload = () =>{
        window.location.reload()
    }

    return (
        <div className="navbar-container">
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <h1 className='menuOnNav' onClick = {reload}>Tauheed Darekar</h1>
                <ul className="nav-links">
                    <div className='leftOnNav'>
                        <li><Link to="/home" onClick={toggleNavbar}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
                        <li><Link to="/projects" onClick={toggleNavbar}>Projects</Link></li>
                    </div>
                    <div className='rightOnNav'>
                        <li><Link to="/education" onClick={toggleNavbar}>Education</Link></li>
                        <li><Link to="/experience" onClick={toggleNavbar}>Experience</Link></li>
                        <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
                    </div>
                </ul>
            </nav>
            <div className="content">
                {/* Your main content goes here */}
            </div>
        </div>
    );
}

export default Navbar;
