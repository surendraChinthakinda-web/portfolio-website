import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Education from './components/Education/edu';
import Internship from './components/Internship/intern';
import Skills from './components/Skills/skills';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/nav';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intern" element={<Internship />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Surendra Chinthakinda. All rights reserved.</p>
            <div className="footer-icons">
              <a href="mailto:chinthakindasurendra@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/surendra-chinthakinda-2628a3290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/mr_cool_boy_surendra" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/Surendra%20Chinthakinda" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
