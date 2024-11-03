import React from 'react';
import { useContent } from '../ContentContext';



const Projects = () => {
    const projectsData = useContent().projectsdata;

  return (
    <section className="projects-section">
      {/* Projects Hero */}
      <header className="projects-hero">
        <div className="section-title">
          <h1 className="tracking-in-expand">My Projects</h1>
          <div className="underline"></div>
        </div>
      </header>

      {/* Projects List */}
      <div className="section-center projects-page-center">
        {projectsData.map((project) => (
          <article key={project.id} className="single-project">
            <div className="project-container">
              <img src={project.imageUrl} alt={project.title} />
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-footer">
                <span><i className="fab fa-github"></i></span>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
