import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./site/Navbar";
import Hero from "./site/Hero";
import About from "./site/About";
import Experience from "./site/Experience";
import Projects from "./site/Projects";
import Skills from "./site/Skills";
import Achievements from "./site/Achievements";
import Education from "./site/Education";
import Contact from "./site/Contact";
import Footer from "./site/Footer";
import ProjectDetail from "./site/ProjectDetail";
import ScrollManager from "./site/ScrollManager";
import AchievementPage from "./components/AcivementsPage";

const Home = () => (
  <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Achievements />
    <Education />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/achievements/:title" element={<AchievementPage />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/contacts" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
