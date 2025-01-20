import React, { createContext, useContext } from "react";
import carImage from "./assets/images/car.png";
import arogyaImage from "./assets/images/aroga.png";
import webImage from "./assets/images/web.png";
import garageImage from "./assets/images/garage.png";
import {
  course1,
  java,
  python,
  hackhound,
  car,
  aroga,
  web,
  garage,
  github,
  piyush
} from "./assets/index.js";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const aboutContent = {
    title: "about",
    paragraphs: [
      "Hello and welcome to my portfolio website! My name is Piyush Rai, and I'm an undergraduate student of AIADS with a passion for programming and web development. I have expertise in several programming languages, including Python, C, HTML, CSS, and JavaScript. Additionally, I am proficient in data analysis and web development, and I'm currently learning about artificial intelligence (AI) and machine learning (ML). I enjoy exploring new technologies and experimenting with different programming tools and frameworks. In my free time, I like to participate in coding challenges, hackathons, and other opportunities that allow me to expand my skills and knowledge.",
      "My goal is to use my skills to make a positive impact in the world by creating innovative solutions to complex problems. Whether it's developing a new AI-powered algorithm or designing a sleek and user-friendly website, I'm always looking for ways to push the boundaries and create something amazing. Thank you for visiting my portfolio website, and I look forward to connecting with you soon!",
    ],
    buttonText: "about me",
    buttonLink: "about.html",
  };

  const projectsData = [
    {
      href: "https://www.linkedin.com/pulse/predicting-car-prices-machine-learning-data-science-project-rai-y9faf/?trackingId=s0iJNa1WS%2Ba9NRLKAP463w%3D%3D",
      imgSrc: carImage,
      imgAlt: "car price prediction",
      title: "Car Price Prediction",
      description: "Personal Project",
      className: "project-1",
    },
    {
      href: "https://banao-djang-2.vercel.app/",
      imgSrc: arogyaImage,
      imgAlt: "arogya-samabadh",
      title: "Arogya-Samabadh",
      description: "Personal Project",
      className: "project-2",
    },
    {
      href: "https://web-detection.vercel.app/",
      imgSrc: webImage,
      imgAlt: "web object detection",
      title: "Web Object Detection",
      description: "Academic Project",
      className: "project-3",
    },
    {
      href: "projects.html",
      imgSrc: garageImage,
      imgAlt: "piyush garage",
      title: "Piyush Garage",
      description: "Personal Project",
      className: "project-4",
    },
  ];

  const timelineData = [
    {
      date: "Jan 2021",
      description: "Took admission in AI & DS at SATI, Vidisha.",
      number: 1,
    },
    {
      date: "2021",
      description: "Passed 12th from Saket Shishu Ranjan School with 89%.",
      number: 2,
    },
    {
      date: "2019",
      description: "Passed 10th from Saket Shishu Ranjan School with 91.2%.",
      number: 3,
    },
    {
      date: "2003",
      description:
        "I've been debugging my own existence for almost two decades now.",
      number: 4,
    },
  ];

  const achievementsData = [
    {
      image: course1,
      title: "IBM Course",
      description:
        "Successfully completed IBM course on Machine Learning, Data Analysis, Python.",
      footerImage: piyush,
      footerText: "2 weeks",
      category: "Certificates",
    },
    {
      image: java,
      title: "JAVA",
      description: "Completed LearnQuest Java course from Coursera.",
      footerImage: piyush,
      footerText: "2 weeks",
      category: "Certificates",
    },
    {
      image: python,
      title: "Python - Hackerrank",
      description: "Completed basic tasks on Python from Hackerrank.",
      footerImage: piyush,
      footerText: "60 min",
      category: "Certificates",
    },
    {
      image: hackhound,
      title: "Hackhound Runner-up",
      description: "Won the hackathon organized by Hackhound.",
      footerImage: piyush,
      footerText: "60 min",
      category: "Hackathon",
    },
  ];
  const projectsdata = [
    {
      id: 1,
      title: "Car Price Prediction",
      description:
        "Predicting Car Prices with Machine Learning: A Data Science Project",
      imageUrl: car,
      projectLink: "/",
      githubLink: "https://github.com/piyushrai007/car_price",
    },
    {
      id: 2,
      title: "Arogya Samabadh",
      description:
        "Nurturing Health with Predictive Heart Disease Analysis and Doctor-Patient Harmony",
      imageUrl: aroga,
      projectLink: "https://github.com/piyushrai007/piyush",
      githubLink: "https://github.com/piyushrai007/ArogyaSambandh",
    },
    {
      id: 3,
      title: "Web Page Object Detection",
      description:
        "Utilizes the YOLOv8 object detection model for detecting objects in images.",
      imageUrl: web,
      projectLink: "https://piyushrai007.github.io/NEW-LOOK-SALOON/",
      githubLink: "https://github.com/piyushrai007/WebView_Object_Detectron",
    },
    {
      id: 4,
      title: "Piyush's Garage",
      description: "Django website project",
      imageUrl: garage,
      projectLink: "/",
      githubLink: "https://github.com/piyushrai007/piyush-s-garage",
    },
    {
      id: 5,
      title: "For more projects, visit my GitHub",
      description: "",
      imageUrl: github,
      projectLink: "https://github.com/piyushrai007",
      githubLink: "https://github.com/piyushrai007",
    },
  ];

  return (
    <ContentContext.Provider
      value={{
        aboutContent,
        projectsData,
        timelineData,
        achievementsData,
        projectsdata,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
export default ContentContext;