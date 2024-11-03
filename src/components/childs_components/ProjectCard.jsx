// ProjectCard.js
import React from 'react';

const ProjectCard = ({ href, imgSrc, imgAlt, title, description, className }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      <article className="project">
        <img src={imgSrc} alt={imgAlt} className="project-img" />
        <div className="project-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
