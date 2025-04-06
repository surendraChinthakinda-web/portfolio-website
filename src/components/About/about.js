import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        <p className="tagline">Full Stack Developer | Passionate Coder | Lifelong Learner</p>

        <div className="about-section">
          <h2>👋 Introduction</h2>
          <p>
            I'm <strong>Surendra Chinthakinda</strong>,a recent graduate with a B.Com in Computer Applications.I completed a Java Full Stack Development course from NxtWave.
            I’ve worked on projects like an HRMS system and a Todo List app using React.js and Spring Boot. Skilled in HTML, CSS, JavaScript, Java, Spring Boot, React.js, SQL, and Python.
            I enjoy coding, solving real-world problems, and exploring new technologies.
            My hobbies include tech blogging, stock market analysis, and learning through online courses. My goal is to become a successful Software Engineer.
          </p>
        </div>

        <div className="about-section">
          <h2>🎓 Education</h2>
          <ul>
          <li>
              <a href="https://www.ccbp.in/" target="_blank" rel="noopener noreferrer">
                Java Full Stack Developer from NXTWAVE  (2024- 2025)
              </a>
              <p>CGPA <span>8.32/10</span></p>
            </li>
            <li>
              <a href="https://kru.ac.in/" target="_blank" rel="noopener noreferrer">
                B.Com with Computer Applications from SRI SRINIVASA INSTITUTE – Krishna University (2021–2024)
              </a>
              <p>CGPA <span>8.32/10</span></p>
            </li>
            <li>
              <a href="https://iti.directory/eluru/govt-industrial-training-institute-nuzvid" target="_blank" rel="noopener noreferrer">
                ITI – Electronic Mechanic from GOVT I.T.I Nuzvidu (2018–2020)
              </a>
              <p>MARKS <span>1287/1400</span></p>
            </li>
            <li>
              <a href="https://school-in-india.daa-taa.com/school/z-phs-chandragudem-29795" target="_blank" rel="noopener noreferrer">
                SSC X Z.P.H School Chandragudem(2018–2020)
              </a>
              <p>CGPA <span>7.5/10</span></p>
            </li>
          </ul>
        </div>

  <div className="about-section">
  <h2>💼 Experience</h2>
  <ul>
    <li>
      <strong>Frontend Developer Intern</strong><br />
      <a href="https://brainovision.org/" target="_blank" rel="noopener noreferrer">
        BrainOvision Pvt Ltd
      </a> | Internship<br />
      <em>Feb 2024 – May 2024</em>
      <p>
        • Worked on a real-time <strong>Food Delivery Web Application</strong> project.<br />
        • Focused on building responsive and user-friendly UI using <strong>JavaScript, React.js, Bootstrap, and CSS and HTML</strong>.<br />
        • Collaborated with the development team to design intuitive interfaces and improve overall user experience.<br />
        • Gained hands-on experience in frontend development and modern web technologies.
      </p>
    </li>
  </ul>
</div>


<div className="about-section">
  <h2>🧩 Projects</h2>
  <ul>
    <li>
      <strong>🍔 Food Delivery Web App</strong><br />
      A responsive web application built using <strong>HTML, CSS, JavaScript,React.js</strong>, <strong>Bootstrap</strong>, and <strong>CSS</strong>. Users can browse restaurants, view menus, and place orders. Designed UI components to ensure a seamless user experience.
    </li>

    <li>
      <strong>🧑‍💼 HRMS Admin Dashboard</strong><br />
      A Role-Based Access Control (RBAC) system using <strong>HTML, CSS, SQL,Java, SpringBoot, JavaScript, React.js</strong> for Admin, Department Head, and Employee roles. Includes features like adding, editing, and viewing employee data within department constraints.
    </li>

    <li>
      <strong>📝 To-Do List Application</strong><br />
      A task management app with <strong>HTML, CSS, SQL,Java, SpringBoot, JavaScript, React.js</strong>. Allows users to add, delete, and mark tasks as complete. Used <strong>localStorage</strong> to persist data between sessions.
    </li>

    <li>
      <strong>🌐 Portfolio Website</strong><br />
      A personal portfolio developed using <strong>HTML, CSS, Bootstrap, Flexbox,React.js</strong> showcasing skills, experience, certifications, and projects. Includes a hero section, contact form, and clean, professional UI design.
    </li>
  </ul>
</div>





        <div className="about-section">
          <h2>📜 Certifications</h2>
          <ul>
            <li>
              <a href="https://certificates.ccbp.in/intensive/static-website?id=HWDAELQJBH" target="_blank" rel="noopener noreferrer">
              Build Your Own Static Website from NxtWave
              </a>
            </li>
            <li>
              <a href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZWRUYADIXL" target="_blank" rel="noopener noreferrer">
              SQL from NxtWave
              </a>
            </li>
            <li>
              <a href="https://certificates.ccbp.in/intensive/programming-foundations?id=RLJAEFGOMR" target="_blank" rel="noopener noreferrer">
              Python Programming Foundations from NxtWave
              </a>
            </li>
            <li>
              <a href="https://certificates.ccbp.in/intensive/developer-foundations?id=MVMDFBOQSY" target="_blank" rel="noopener noreferrer">
              Developer Foundations from NxtWave
              </a>
            </li>
            <li>
              <a href="https://certificates.ccbp.in/intensive/java-fundamentals?id=POCRXJUUXL" target="_blank" rel="noopener noreferrer">
              Java Fundamentals from NxtWave
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Frontend Internship – BrainOvision
              </a>
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>💻 Skills</h2>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Java</span>
            <span>SpringBoot</span>
            <span>SQL</span>
            <span>Bootstrap</span>
            <span>Python</span>
          </div>
        </div>

        <div className="about-section">
          <h2>🌍 Career Goal</h2>
          <p>
            My long-term goal is to become a successful Software Engineer and work for a multinational company like Cognizant. I aim to create impactful digital products and grow both technically and professionally in the software development industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
