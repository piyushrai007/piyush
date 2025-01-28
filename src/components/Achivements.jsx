import React, { useState } from 'react';
import SectionTitle from './childs_components/SectionTitle.jsx';
import Card from './childs_components/Card.jsx';
import { useContent } from '../ContentContext.jsx';

const Achievements = () => {
  const { achievementsData } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Certificates', 'Hackathon'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter(achievement => achievement.category === selectedCategory);

  return (
    <section className="section blog">
      <SectionTitle title="Achievements" />
      <div className="flex justify-center mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="section-center blog-center">
        {filteredAchievements.map((achievement, index) => (
          <Card
            key={index}
            image={achievement.image}
            title={achievement.title}
            description={achievement.description}
            footerImage={achievement.footerImage}
            footerText={achievement.footerText}
            Component={achievement.component}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;