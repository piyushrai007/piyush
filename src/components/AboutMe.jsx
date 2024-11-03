import React from 'react';

const AboutMe = () => {
  return (
    <section className="section single-page">
      {/* Section Title */}
      <div className="section-title">
        <h1 className="tracking-in-expand">About Me</h1>
        <div className="underline"></div>
      </div>

      {/* Section Content */}
      <div className="section-center page-info">
        <p>
          Hello, I am <strong>PIYUSH Rai</strong>, a student currently learning web development and data science. 
          I live and work in India. I spend most of my day experimenting with Python, C, HTML, CSS, Java, JavaScript, 
          and their frameworks. I enjoy coding and the challenge of learning something new every day.
          You can also find me on LinkedIn:
          <a
            href="https://www.linkedin.com/in/piyush-rai-3b8714226/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
