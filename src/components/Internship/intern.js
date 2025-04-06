import React from 'react';
import './intern.css';

const Internship = () => {
  return (
    <section className="internship-projects">
      <div className="about-section">
  <h2>💼 Experience</h2>
  <ul className="custom-list">
    <li>
      <strong>Frontend Developer Intern</strong><br />
      <a href="https://brainovision.org/" target="_blank" rel="noopener noreferrer">
        BrainOvision Pvt Ltd
      </a> &nbsp;|&nbsp; Internship<br />
      <em>Feb 2024 – May 2024</em>
      <p>
        • Contributed to a real-time <strong>Food Delivery Web Application</strong> project.<br />
        • Developed responsive and dynamic UI using <strong>HTML, CSS, Bootstrap, JavaScript, React.js</strong>.<br />
        • Worked closely with developers to implement clean code and enhance user experience.<br />
        • Gained hands-on experience with real-world frontend development workflows.
      </p>
    </li>
  </ul>
</div>

<div className="about-section">
  <h2>🧩 Projects</h2>
  <ul className="custom-list">
    <li>
      <strong>🍔 Food Delivery Web App</strong><br />
      <em>Role: Frontend Developer</em><br />
      A responsive food ordering platform where users can browse restaurants, view menus, and place orders.
      <br />
      🔹 Built key UI components using <strong>JavaScript, React.js, Bootstrap,HTML and CSS</strong><br />
      🔹 Implemented responsive design for mobile and desktop views<br />
      🔹 Collaborated on integrating frontend with backend APIs<br />
      🔹 Focused on user experience and performance optimization
    </li>

    <li>
      <strong>🧑‍💼 HRMS Admin Dashboard</strong><br />
      <em>Role: Full Stack Developer</em><br />
      A Role-Based Access Control system for managing employees, departments, and admin operations.
      <br />
      🔹 Developed the entire frontend using <strong>JavaScript, React.js, HTML, CSS</strong><br />
      🔹 Created backend services using <strong>Java + Spring Boot + SQL</strong><br />
      🔹 Handled CRUD operations for employees and departments<br />
      🔹 Ensured data access control by implementing role-based permissions (Admin, Department Head, Employee)
    </li>

    <li>
      <strong>📝 To-Do List Application</strong><br />
      <em>Role: Full Stack Developer</em><br />
      A productivity app to manage daily tasks with create, update, delete functionality.
      <br />
      🔹 Built the UI using <strong>JavaScript, React.js and Bootstrap HTML, CSS</strong><br />
      🔹 Developed backend with <strong>Java and Spring Boot</strong><br />
      🔹 Used <strong>localStorage</strong> for persisting task data locally<br />
      🔹 Implemented user-friendly interface with form validation
    </li>

    <li>
      <strong>🌐 Portfolio Website</strong><br />
      <em>Role: Frontend Designer & Developer</em><br />
      A professional portfolio to showcase my projects, experience, and skills.
      <br />
      🔹 Designed a clean and modern layout using <strong>HTML, CSS, Bootstrap, Flexbox</strong><br />
      🔹 Developed reusable components with <strong>React.js</strong><br />
      🔹 Integrated contact form, hero section, and responsive navbar<br />
      🔹 Mobile-friendly design with smooth UI interactions
    </li>
  </ul>
</div>

    </section>
  );
};

export default Internship;
