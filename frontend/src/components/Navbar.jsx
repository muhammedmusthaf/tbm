// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/assets/logo.png" alt="TBM Logo" className="logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={menuActive ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuActive(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={() => setMenuActive(false)}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/transport" className="nav-link" onClick={() => setMenuActive(false)}>Transport</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuActive(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setMenuActive(false)}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setMenuActive(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;