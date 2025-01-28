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
    <div>
        {achievement.component && <achievement.component />}

    </div>
  );
};

export default AchievementPage;
