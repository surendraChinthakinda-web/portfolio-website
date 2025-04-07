import React from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:chinthakindasurendra@gmail.com">chinthakindasurendra@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <a href="tel:+916302578810">+91 6302578810</a>
        </div>

        <div className="contact-item">
          <FaWhatsapp className="icon" />
          <a href="https://wa.me/916302578810" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/surendra-chinthakinda-2628a3290/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="icon" />
          <a href="https://github.com/surendraChinthakinda-web/form" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
