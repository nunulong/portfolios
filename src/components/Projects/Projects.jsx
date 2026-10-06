import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from './projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section-wrap">
      <div className="container">
        {/* Header Bar */}
        <div className="projects-header-bar">
          <div className="projects-header-text">
            <h1>Featured Projects</h1>
            <p>Selected web applications, API integrations, and interactive tools.</p>
          </div>
        </div>

        {/* Clean Responsive Project Cards Grid */}
        <div className="projects-grid-layout">
          {projects.map((project) => (
            <article key={project.id} className="grid-project-card">
              <div className="grid-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="grid-card-img"
                  loading="lazy"
                />
              </div>

              <div className="grid-card-content">
                <div className="grid-card-header">
                  <span className="project-category-badge">
                    {project.category}
                  </span>
                  <h2 className="grid-card-title">{project.title}</h2>
                  <p className="grid-card-subtitle">{project.subtitle}</p>
                </div>

                <p className="grid-card-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid-card-actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

