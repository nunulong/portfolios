import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import './Home.css';

const RESUME_URL =
  'https://docs.google.com/document/d/1bR3q7Yl94M_iFColMktUy24fWwgioBxB/edit?usp=drive_link&ouid=107575394346975930226&rtpof=true&sd=true';

const Home = () => {
  return (
    <div className="home-hero-wrap">
      <div className="container home-hero-content">
        <h1 className="home-title">Hi, I'm Ting Wang</h1>
        <h2 className="home-subtitle">Software Engineer</h2>

        <p className="home-description">
          Building clean, performant, and user-friendly web applications.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FileText size={16} />
            <span>My Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
