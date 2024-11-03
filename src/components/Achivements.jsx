import React from 'react';
import SectionTitle from './childs_components/SectionTitle.jsx';
import Card from './childs_components/Card.jsx';
import { useContent } from '../ContentContext.jsx';


const Achievements = () => {
    const { achievementsData } = useContent();
  
  return (
    <section className="section blog">
      <SectionTitle title="Articles" />
      <div className="section-center blog-center">
        {achievementsData.map((achievement, index) => (
          <Card
            key={index}
            image={achievement.image}
            title={achievement.title}
            description={achievement.description}
            footerImage={achievement.footerImage}
            footerText={achievement.footerText}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
