import React from 'react';
import { aboutImage } from '../assets/index.js'; // Use named import
// import './About.css'; // Ensure you have the corresponding CSS file for styling

const About = ({ title, paragraphs, buttonText, buttonLink }) => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        {/* About Image */}
        <article className="about-img">
          <img
            src={aboutImage}
            className="hero-photo"
            alt="about-img"
          />
        </article>
        {/* About Info */}
        <article className="about-info">
          {/* Section Title */}
          <div className="section-title about-title">
            <h2>{title}</h2>
            <div className="underline"></div>
          </div>
          {/* End of Section Title */}
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a href={buttonLink} className="btn">{buttonText}</a>
        </article>
      </div>
    </section>
  );
};

export default About;