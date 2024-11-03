import React from 'react';
import heroImage from '../assets/images/Design 1.gif'; // Adjust the path as needed
import resume from '../assets/most updated resume - Google Docs.pdf'; // Adjust the path as needed
// import './Hero.css'; // Ensure you have the corresponding CSS file for styling

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1 className="tracking-in-expand">I' am Piyush RAI</h1>
          <h4 className="tracking-in-expand">student of Artificial Intelligence & Data Science</h4>
          
          <a
            href={resume}
            className="btn hero-btn"
            download="piyush_resume"
          >
            download resume
          </a>
          {/* Social Icons */}
          <ul className="social-icons hero-icons">
            <li>
              <a
                target="_blank"
                href=""
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/piyush-rai-3b8714226/"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/piyushrai007"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href=""
                className="social-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/piyush_.rai__/"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </article>
        <article className="hero-img roll-in-right">
          <img
            src={heroImage}
            className="hero-photo"
            alt="Piyush RAI"
          />
        </article>
      </div>
    </header>
  );
};

export default Hero;