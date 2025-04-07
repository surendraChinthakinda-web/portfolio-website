import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaLinux,
  FaReact, FaJava, FaPython, FaDatabase, FaWindows, FaBoxes
} from 'react-icons/fa';
import {
  SiJavascript, SiSpring, SiMysql, SiGnubash
} from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';

import './skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Technical Skills</h2>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <h3 className="skill-title">Frontend Development</h3>
          <div className="skill-items">
            <Skill icon={<FaHtml5 />} label="HTML" />
            <Skill icon={<FaCss3Alt />} label="CSS" />
            <Skill icon={<FaBootstrap />} label="Bootstrap" />
            <Skill icon={<FaBoxes />} label="Flexbox" />
            <Skill icon={<SiJavascript />} label="JavaScript" />
            <Skill icon={<FaReact />} label="React.js" />
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3 className="skill-title">Backend & Programming</h3>
          <div className="skill-items">
            <Skill icon={<FaJava />} label="Java" />
            <Skill icon={<FaPython />} label="Python" />
            <Skill icon={<SiSpring />} label="Spring Framework" />
            <Skill icon={<SiMysql />} label="SQL" />
            <Skill icon={<FaDatabase />} label="Database" />
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3 className="skill-title">Tools & Platforms</h3>
          <div className="skill-items">
            <Skill icon={<FaGitAlt />} label="Git" />
            <Skill icon={<FaLinux />} label="Linux" />
            <Skill icon={<FaWindows />} label="Windows" />
            <Skill icon={<SiGnubash />} label="Command Line" />
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h3 className="skill-title">Languages Known</h3>
          <div className="skill-items">
            <Skill icon={<TbWorld />} label="English" />
            <Skill icon={<TbWorld />} label="Telugu" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="skill">
    <span className="skill-icon">{icon}</span>
    <span className="skill-label">{label}</span>
  </div>
);

export default Skills;
