import { createContext, useContext } from "react";
import course1 from "./assets/work/cert-data-analysis.webp";
import java from "./assets/work/cert-java.webp";
import python from "./assets/work/cert-python.webp";
import hackhound from "./assets/work/hackhound.webp";
import Machine_learning from "./assets/work/cert-ml.webp";
import dp from "./assets/work/cert-dp.webp";
import visualization from "./assets/work/cert-visualization.webp";
import sql from "./assets/work/cert-sql.webp";
import data_science from "./assets/work/cert-data-science.webp";


import IbmCourseComponent from './achievement_components/IbmCourseComponent.jsx';
import JavaCourseComponent from './achievement_components/JavaCourseComponent.jsx';
import PythonHackerrankComponent from './achievement_components/PythonHackerrankComponent.jsx';
import HackhoundComponent from './achievement_components/HackhoundComponent.jsx';
import DataAnalysis  from "./achievement_components/DataAnalaysis.jsx";
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const achievementsData = [
    {
      image: course1,
      title: "Data Analysis",
      description:"Successfully completed IBM course on Machine Learning, Data Analysis, Python.",
      category: "Certificates",
      component: DataAnalysis,
    },
    {
      image: Machine_learning,
      title: "Machine Learning",  
      description: "Completed Machine Learning course from Coursera.",
      category: "Certificates",
      component: IbmCourseComponent,


    },
    {
      image: dp,
      title: "Dynamic Programming",
      description: "Completed Dynamic Programming course from Coursera.",
      category: "Certificates",
      component: IbmCourseComponent,
    },
    {
      image: visualization,
      title: "Data Visualization",
      description: "Completed Data Visualization course from Coursera.",
      category: "Certificates",
      component: IbmCourseComponent,
    },
    {
      image: sql,
      title: "SQL",
      description: "Completed SQL course from Coursera.",
      category: "Certificates",
      component: IbmCourseComponent,
    },
    {
      image: data_science,
      title: "Data Science",
      description: "Completed Data Science course from Coursera.",
      category: "Certificates",
      component: IbmCourseComponent,
    },
    {
      image: java,
      title: "JAVA",
      description: "Completed LearnQuest Java course from Coursera.",
      category: "Certificates",
      component: JavaCourseComponent,
    },
    {
      image: python,
      title: "Python - Hackerrank",
      description: "Completed basic tasks on Python from Hackerrank.",
      category: "Certificates",
      component: PythonHackerrankComponent,
    },
    {
      image: hackhound,
      title: "HackHound 2.0 — 5th place",
      description: "5th of 50+ teams at the 24-hour HackHound 2.0 hackathon, SRM University.",
      category: "Hackathon",
      component: HackhoundComponent,
    },
  ];
  return (
    <ContentContext.Provider
      value={{
        achievementsData,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
export default ContentContext;