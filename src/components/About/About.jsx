import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Heart } from 'lucide-react';
import sweetImg from '../../assets/sweet.jpg';
import './About.css';

const RESUME_URL =
  'https://docs.google.com/document/d/1bR3q7Yl94M_iFColMktUy24fWwgioBxB/edit?usp=drive_link&ouid=107575394346975930226&rtpof=true&sd=true';

const About = () => {
  return (
    <div className="about-section-wrap">
      <div className="container">
        {/* Header */}
        <div className="page-intro">
          <h1>About Me</h1>
          <p>Software Engineer, lifelong learner, and thoughtful problem solver.</p>
        </div>

        {/* Modern About Card */}
        <div className="about-card-modern">
          {/* Photo Frame */}
          <div className="about-photo-card">
            <div className="about-photo-frame">
              <img
                src={sweetImg}
                alt="Ting and Angelina"
                className="about-photo-img"
              />
            </div>
            <div className="about-photo-caption">
              <Heart size={14} color="#f43f5e" fill="#f43f5e" />
              <span>Ting &amp; Angelina</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="about-narrative">
            <p className="about-paragraph">
              Hi, I'm Ting, and I'm joined by my wonderful wife, Angelina. As a
              software engineer, I specialize in crafting dynamic, clean, and
              user-friendly websites. I thrive on challenges and embrace projects
              that push me beyond my comfort zone, as learning new languages and
              development techniques is key to my growth and the success of the
              organizations I work with. I love every moment of this journey!
            </p>

            <div className="about-quote-box">
              “Embracing projects that push me beyond my comfort zone is key to continuous growth.”
            </div>

            <p className="about-paragraph">
              I'm a dedicated family man, technology enthusiast, and thoughtful
              problem-solver. My expertise includes designing, testing, and
              developing applications, with a deep understanding of data structures
              and algorithms. I'm well-versed in front-end and back-end
              development best practices, bring hands-on experience in software
              troubleshooting, and maintain a proven track record of clear, thorough
              documentation to support future maintenance.
            </p>

            <div className="about-actions-row">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </a>

              <Link to="/contact" className="btn btn-outline">
                <Mail size={16} />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
