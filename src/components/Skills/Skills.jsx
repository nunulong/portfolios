import React from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const frontEndSkills = [
  'React',
  'JavaScript (ES6+)',
  'TypeScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Responsive Design',
];

const backEndSkills = [
  'Java',
  'NodeJS',
  'Python',
  'MySQL',
  'MongoDB',
  'REST APIs',
];

const engineeringPractices = [
  'Git & GitHub',
  'Data Structures & Algorithms',
  'Software Troubleshooting',
  'Technical Documentation',
  'CI/CD & GitHub Pages',
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="page-intro">
          <h1>What I'm Hacking</h1>
          <p>Skills and technical tools to get ideas off the ground.</p>
        </div>

        {/* 2 Main Cards */}
        <div className="skills-cards-duo">
          {/* Front-End Card */}
          <div className="skill-domain-card">
            <div className="domain-card-head">
              <div className="domain-icon-wrapper">
                <Layout size={22} />
              </div>
              <h2>Front-End Development</h2>
            </div>

            <p className="domain-intro-text">
              Launching websites on the internet is exciting but fairly tough.
              I've developed my skills to deliver the best experience, whether
              it is on the desktop or a mobile device. I've been equipped with
              these powerful tools:
            </p>

            <div className="domain-pills-wrap">
              {frontEndSkills.map((skill) => (
                <div key={skill} className="modern-skill-pill">
                  <span className="pill-dot-indicator" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-End Card */}
          <div className="skill-domain-card">
            <div className="domain-card-head">
              <div className="domain-icon-wrapper">
                <Server size={22} />
              </div>
              <h2>Back-End Development</h2>
            </div>

            <p className="domain-intro-text">
              What makes the front-end of a website possible? This is where the
              back-end comes in. I've always been fascinated with back-end
              development because I love manipulating data. I've been equipped
              with these powerful tools:
            </p>

            <div className="domain-pills-wrap">
              {backEndSkills.map((skill) => (
                <div key={skill} className="modern-skill-pill">
                  <span className="pill-dot-indicator" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Practices Strip */}
        <div className="practices-bar">
          <div className="practices-bar-title">
            <Wrench size={18} />
            <span>Engineering Practices &amp; Tooling</span>
          </div>

          <div className="practices-tags">
            {engineeringPractices.map((practice) => (
              <span key={practice} className="practice-tag-item">
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
