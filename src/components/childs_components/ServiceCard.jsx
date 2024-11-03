// ServiceCard.js
import React from 'react';

const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <article className="service">
      <i className={`${iconClass} service-icon`}></i>
      <h4>{title}</h4>
      <div className="underline"></div>
      <p>{description}</p>
    </article>
  );
};

export default ServiceCard;
