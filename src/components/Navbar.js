import React, { useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const reload = () => {
        window.location.reload()
    }

    return (

        <div className="navv">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4  rounded p-2" >Tauheed Darekar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <NavLink to="/" className="nav-link fs-5">Home</NavLink>
                            </li>
                            <li className="nav-item px-1 fs-5">
                                <NavLink to = "/about" className="nav-link"> About</NavLink>
                            </li>
                            <li className="nav-item px-1 fs-5 dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to="/projects" className="dropdown-item">Projects</NavLink></li>
                                    <li><NavLink to="/education" className="dropdown-item">Education</NavLink></li>
                                    <li><span className="dropdown-divider" /></li>
                                    <li><NavLink to = "/experience" className="dropdown-item" >Experience</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-1 fs-5">
                                <NavLink to = "/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="px-5">
                                
                            </li>
                        </ul>
                        <div>
                            <div className="btn-group">
                                <a href = "https://github.com/tauheed78600"><button className="btn btnColor1 p-2 m-1">Github</button></a>
                                <a href = "https://www.linkedin.com/in/tauheed-darekar-442553258/"><button className="btn btnColor2 p-2 m-1">LinkedIn</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>  
    );
}

export default Navbar;
