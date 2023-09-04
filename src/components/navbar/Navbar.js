import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="dashboard-section">
                    <Link to="/" className="dashboard-link">
                        <img src={logo} alt="Logo" className="logo-image" /> 
                    </Link>
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;
