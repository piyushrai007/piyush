// Services.js
import React from 'react';
import ServiceCard from './childs_components/ServiceCard'; 
// import './Services.css'; 

// Services data
const servicesData = [
  {
    iconClass: 'fas fa-laptop-code',
    title: 'Web Development',
    description: 'I am proficient in HTML, CSS, and Javascript. I know how to make modern responsive designs and create animations, layouts, etc. I am also familiar with Node.js & Django for backend.',
  },
  {
    iconClass: 'fas fa-project-diagram',
    title: 'Data Structures & Algorithms',
    description: 'I am proficient in writing Python code and can code in basic C and Java. Additionally, I am involved in competitive programming.',
  },
  {
    iconClass: 'fas fa-window-maximize',
    title: 'Data Science/Machine Learning',
    description: 'I am currently working in the field of data science and am familiar with Python libraries like Numpy, Pandas, Matplotlib, and scikit-learn.',
  },
];

const Services = () => {
  return (
    <section className="section bg-grey">
      {/* Section title */}
      <div className="section-title">
        <h2>Services</h2>
        <div className="underline"></div>
      </div>
      {/* Services list */}
      <div className="section-center services-center">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            iconClass={service.iconClass}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
