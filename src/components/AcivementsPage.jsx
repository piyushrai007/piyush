import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ContentContext from "../ContentContext";

const AchievementPage = () => {
  const { title } = useParams();
  const { achievementsData } = useContext(ContentContext);
  const achievement = achievementsData.find((a) => a.title === title);

  return (
    <div className="pt-16">
      <div className="container-x py-6">
        <Link to="/#achievements" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent">
          <i className="fas fa-arrow-left text-xs" /> Back to achievements
        </Link>
      </div>
      {achievement ? (
        achievement.component && <achievement.component />
      ) : (
        <p className="container-x py-24 text-slate-400">Achievement not found.</p>
      )}
    </div>
  );
};

export default AchievementPage;
