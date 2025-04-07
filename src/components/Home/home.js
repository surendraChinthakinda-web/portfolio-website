import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/contact');
  };

  const handleDetailsClick = () => {
    navigate('/about');
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Surendra Chinthakinda</span>
        </h1>
        <h2>Java Full Stack Developer</h2>
        <p>
          I’m Surendra, an aspiring Full Stack Developer skilled in HTML, CSS, SQL, Java, Spring Boot,
          JavaScript, React.js, and more. I create clean, responsive, and dynamic web applications with strong
          backend logic and seamless user interfaces.
        </p>
        <div className="buttons">
          <button className="btn primary" onClick={handleHireClick}>Hire Me</button>
          <button className="btn secondary" onClick={handleDetailsClick}>View My Details</button>
        </div>
        <div className="social-icons">
          <a href="mailto:chinthakindasurendra@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/surendra-chinthakinda-2628a3290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/mr_cool_boy_surendra" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/Surendra%20Chinthakinda" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://t-hub.mx/storage/blog/QopQLVRlmihNPF4aWnSPKuCvV2ja4HuXTCsaM7Cw.jpeg"
          alt="Surendra"
        />
      </div>
    </section>
  );
};

export default Home;
