import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, description, footerImage, footerText }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to the route with the title as the path parameter
    navigate(`/achievements/${encodeURIComponent(title)}`);
  };

  return (
    <div className="card">
      {/* Front side of the card */}
      <div className="card-side card-front">
        <img src={image} alt={title} />
        <div className="card-info">
          <h4>{title}</h4>
          <p>{description}</p>
          {footerImage && (
            <div className="card-footer">
              <img src={footerImage} alt="Footer" />
              {footerText && <p>{footerText}</p>}
            </div>
          )}
        </div>
      </div>
      {/* Back side of the card */}
      <div className="card-side card-back">
        <button className="btn" onClick={handleReadMore}>
          ReadMore
        </button>
      </div>
    </div>
  );
};

export default Card;
