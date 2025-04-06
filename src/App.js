import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Education  from './components/Education/edu'
import Internship from './components/Internship/intern'

import Navbar from './components/Navbar/nav';



function App() {


  return (
    <Router>
    <div className='container'>
      {/* Navbar */}
      <Navbar/>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/intern" element={<Internship />} />
      </Routes>
      
      <footer className="footer">
  <div className="footer-content">
    <p>© 2025 Surendra Chinthakinda. All rights reserved.</p>
    <div className="footer-icons">
      <a href="mailto:surendrachinthakinda@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <a href="https://github.com/surendraChinthakinda-web/form" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/surendra-chinthakinda-2628a3290/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/mr_cool_boy_surendra" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/Surendra%20Chinthakinda" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </div>
  </div>
</footer>
    </div>
  </Router>
  );
}

export default App;
