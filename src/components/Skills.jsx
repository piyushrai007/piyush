import React from "react";
import Skills from "./childs_components/Skills.jsx";
import Timeline from "./childs_components/Timeline.jsx";
import { useContent } from "../ContentContext.jsx";

const Skillntime = () => {
  const { timelineData } = useContent();
  return (
    <div>
      <Skills />
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Skillntime;
