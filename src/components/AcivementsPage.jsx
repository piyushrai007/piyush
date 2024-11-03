import React from 'react';
import { useParams } from 'react-router-dom';

const AchievementPage = () => {
  const { title } = useParams();

  // You could fetch the blog content based on the title if needed
  return (
    <div className="achievement-page">
      <h1>{decodeURIComponent(title)}</h1>
      <p>Full blog content for {title} goes here...</p>
    </div>
  );
};

export default AchievementPage;
