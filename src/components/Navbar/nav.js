import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate('/contact');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGKu6mQzLqyTA/profile-displayphoto-shrink_800_800/B56ZYEhbIUH0Ac-/0/1743832595858?e=1749686400&v=beta&t=dsQ2a5-NB5JOql4QUpLvhxfAN-G5wfTSoZ8oWPXULKw"
          alt="Surendra"
          className="profile-image"
        />
        <span>Surendra Chinthakinda</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/intern">Internship & Projects</Link>
        <button className="cta-button" onClick={handleConsultClick}>Contact Me</button>
      </nav>
    </header>
  );
};

export default Navbar;
