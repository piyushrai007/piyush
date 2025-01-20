import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentContext from '../ContentContext';

const AchievementPage = () => {
  const { title } = useParams();
  const { achievementsData } = useContext(ContentContext);
  const achievement = achievementsData.find(a => a.title === title);

  if (!achievement) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">Achievement not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Blog post header */}
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">{decodeURIComponent(title)}</h1>
          <p className="text-gray-500 text-sm">
            Published on{' '}
            <time dateTime={achievement.date || '2022-04-05'}>
              {achievement.date || 'Unknown Date'}
            </time>
          </p>
        </div>

        {/* Featured image */}
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-auto mb-8"
        />

        {/* Blog post content */}
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;
