import React from 'react';
import Skill from './Skill.jsx';

const SkillCategory = ({ title, skills }) => (
  <article>
    <h3>{title}</h3>
    {skills.map((skill, index) => (
      <Skill key={index} name={skill.name} percentage={skill.percentage} />
    ))}
  </article>
);

export default SkillCategory;
