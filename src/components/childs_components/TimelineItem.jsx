import React from 'react';

const TimelineItem = ({ date, description, number }) => (
  <article className="timeline-item">
    <h4>{date}</h4>
    <p>{description}</p>
    <span className="number">{number}</span>
  </article>
);

export default TimelineItem;
