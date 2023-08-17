import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="dashboard-section">
                    <a className="dashboard-name">Dashboard</a>
                </div>
                <div className="filter-section">
                    <p className="filter-by">Filter by:</p>
                    <select className="filter-dropdown">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <button className="filter-button">Filter</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
