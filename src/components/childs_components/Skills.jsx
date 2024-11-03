import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import SkillCategory from './SkillCategory.jsx';

const Skills = () => {
  const skillsData = [
    {
      title: "Data Science/Machine Learning",
      skills: [
        { name: "Python | Problem Solving", percentage: 80 },
        { name: "Regression | Clustering | Classification | SciPy | TensorFlow", percentage: 70 },
        { name: "Data Analysis (Numpy | Pandas | Matplotlib)", percentage: 80 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "Frontend (HTML/CSS/JavaScript)", percentage: 50 },
        { name: "Backend (Node.js/Django)", percentage: 50 },
        { name: "DBMS (MongoDB/MySQL)", percentage: 40 }
      ]
    }
  ];

  return (
    <section className="section skills">
      <SectionTitle title="Skills" />
      <div className="section-center skills-center">
        {skillsData.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
