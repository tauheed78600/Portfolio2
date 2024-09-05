import React, { useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { CgGitFork } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillStar } from "react-icons/ai";

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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-between w-100">
                            {/* Left Section */}
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item px-1">
                                        <NavLink to="/" className="nav-link fs-5">Home</NavLink>
                                    </li>
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/about" className="nav-link">About</NavLink>
                                    </li>
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                                    </li>
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/education" className="nav-link">Education</NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Center Section */}
                            <a className="navbar-brand fs-4  rounded p-2 mx-auto">Tauheed Darekar</a>
                            
                            {/* Right Section */}
                            <div className="d-flex">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/experience" className="nav-link">Experience</NavLink>
                                    </li>
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/resume" className="nav-link">Resume</NavLink>
                                    </li>
                                    <li className="nav-item px-1 fs-5">
                                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                    </li>
                                </ul>
                                <div className="btn-group">
                                    <Button
                                        href="https://github.com/tauheed78600/Portfolio2"
                                        target="_blank"
                                        className="fork-btn-inner"
                                    >
                                        <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                        <AiFillStar style={{ fontSize: "1.1em" }} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
