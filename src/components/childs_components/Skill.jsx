import React from 'react';

const Skill = ({ name, percentage }) => (
  <div className="skill">
    <p>{name}</p>
    <div className="skill-container">
      <div className="skill-value" style={{ width: `${percentage}%` }}></div>
      <p className="skill-text">{percentage}%</p>
    </div>
  </div>
);

export default Skill;
