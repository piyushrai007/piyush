import React, { useState } from 'react';
import SectionTitle from './childs_components/SectionTitle.jsx';
import { useContent } from '../ContentContext.jsx';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, description, footerImage, footerText }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/achievements/${encodeURIComponent(title)}`);
  };

  return (
    <div className="relative group cursor-pointer transform transition duration-500 hover:scale-105">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border-2 border-orange-300">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
        <div className="p-4">
          <h4 className="text-xl font-semibold text-orange-600 mb-2">{title}</h4>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          {footerImage && (
  <div className="relative mt-4 flex items-center space-x-2">
    <div className="w-10 h-10 rounded-full border-2 border-orange-400 p-1 bg-white shadow-lg">
      <img src={footerImage} alt="Footer" className="w-full h-full rounded-full" />
    </div>
    {footerText && <p className="text-gray-500 text-sm">{footerText}</p>}
  </div>
)}

        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-500 bg-opacity-75">
        <button onClick={handleReadMore} className="text-white px-6 py-2 font-semibold rounded-lg shadow-md bg-orange-700 hover:bg-orange-600">
          Read More
        </button>
      </div>
    </div>
  );
};

const Achievements = () => {
  const { achievementsData } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Certificates', 'Hackathon'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter(achievement => achievement.category === selectedCategory);

  return (
    <section className="p-10 bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen">
      <SectionTitle title="Achievements" />
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg ${
              selectedCategory === category ? 'bg-orange-500 text-white scale-105' : 'bg-white text-orange-500 hover:scale-105 hover:bg-orange-400 hover:text-white'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
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
