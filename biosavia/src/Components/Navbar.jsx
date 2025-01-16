import React from 'react';
import '../Styles/Navbar.css';
import Logo from '../Images/LogoBiosavia.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Biosavia Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
