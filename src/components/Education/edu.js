import React from 'react';
import './edu.css';

const Education = () => {
  return (
    <section className="education">
      <h1>🎓 Education</h1>
      <div className="edu-container">

        <div className="edu-card">
          <h2>Java Full Stack Developer Program</h2>
          <p><strong>Institution:</strong> NxtWave</p>
          <p><strong>CGPA:</strong> 9.5 / 10</p>
          <p>I gained hands-on experience with frontend (HTML, CSS, JavaScript, ReactJS), backend (Java, JDBC), databases (MySQL), and built full-stack applications using real-world scenarios.</p>
        </div>

        <div className="edu-card">
          <h2>Bachelor of Commerce (Computer Applications)</h2>
          <p><strong>College:</strong> Sri Srinivasa Degree College, Vissannapeta</p>
          <p><strong>University:</strong> Krishna University</p>
          <p><strong>CGPA:</strong> 8.32 / 10 (2021 – 2024)</p>
          <p>Studied computer fundamentals, database systems, programming basics, accounting, and office automation tools. Developed logical thinking and computer application skills.</p>
        </div>

        <div className="edu-card">
          <h2>ITI – Electronic Mechanic</h2>
          <p><strong>College:</strong> Govt ITI College, Nuzvid</p>
          <p><strong>Marks:</strong> 1287 / 1400 (2018 – 2020)</p>
          <p>Learned circuit design, PCB testing, motor winding, electrical systems, and basic hardware troubleshooting. Gained practical workshop knowledge in electronics.</p>
        </div>

        <div className="edu-card">
          <h2>Secondary School (SSC)</h2>
          <p><strong>School:</strong> ZPHS School</p>
          <p><strong>GPA:</strong> 7.5 / 10</p>
          <p>Completed foundational education with focus on mathematics, science, social, and languages. Built communication and teamwork skills.</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
