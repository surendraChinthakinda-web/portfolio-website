import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/contact');
  };
  
  const handleDetailsClick = () => {
    navigate('/about')
  }


  return (
    <section className="home">
      <div className="home-content">
        <h1>I'm Surendra Chinthakinda</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I’m Surendra, an aspiring Full Stack Developer with skills in HTML, CSS, SQL, Java, SpringBoot, JavaScript, React.js, and more. I build responsive, user-centric web applications with clean front-end design and solid logic. I'm passionate about creating impactful digital solutions and continuously improving my skills. Currently seeking a great opportunity to grow, learn, and contribute to a dynamic development team.
        </p>
        <div className="buttons">
          <button className="btn primary" onClick={handleHireClick}>Hire Me</button>
          <button className="btn secondary" onClick={handleDetailsClick}> View My Details </button>
        </div>
      </div>

      <div className="home-image">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQGKu6mQzLqyTA/profile-displayphoto-shrink_800_800/B56ZYEhbIUH0Ac-/0/1743832595858?e=1749686400&v=beta&t=dsQ2a5-NB5JOql4QUpLvhxfAN-G5wfTSoZ8oWPXULKw" alt="profile" />
      </div>

      
    </section>
  );
};

export default Home;
