import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleConsultClick = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://logowiki.net/wp-content/uploads/imgp/CS-Logo-1-8652.png"
          alt="CS Logo"
        />
        <span>Surendra</span>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Mobile only logo & name */}
        <div className="nav-header">
          <img
            src="https://logowiki.net/wp-content/uploads/imgp/CS-Logo-1-8652.png"
            alt="CS Logo"
          />
          <span>Surendra</span>
        </div>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/education" onClick={closeMenu}>Education</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/intern" onClick={closeMenu}>Internship & Projects</Link>
        <button className="cta-button" onClick={handleConsultClick}>Contact Me</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
