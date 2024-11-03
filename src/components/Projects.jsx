// Projects.js
import React from 'react';
import ProjectCard from './childs_components/ProjectCard.jsx';
import { useContent } from '../ContentContext.jsx';

// Project data

const Projects = () => {
    const { projectsData } = useContent();

  return (
    <section className="section projects">
      {/* Section title */}
      <div className="section-title">
        <h2>Latest Works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          In this section, you may find my latest works which I have done in my
          personal or academic curriculum. Hope you all will like it and suggest
          me with better ideas to code or collaborate.
        </p>
      </div>
      {/* Projects list */}
      <div className="section-center projects-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.href}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            className={project.className}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
