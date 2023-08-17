import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="dashboard-section">
                    <Link to="/" className="dashboard-name">Dashboard</Link>
                </div>
                <div className="filter-section">
                    <p className="filter-by">Filter by:</p>
                    <select className="filter-dropdown">
                        <option value="option1">Priority</option>
                        <option value="option2">Date</option>
                        <option value="option3">Status</option>
                        <option value="option4">Author</option>
                    </select>
                    <button className="filter-button">Filter</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
