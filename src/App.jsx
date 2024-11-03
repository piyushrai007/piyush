import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  ConnectSection,
  Skillntime,
  Achievements,
  Footer,
  AboutMe,
  Projectss,
  Contact,
  AchivementsPage,
  ProfileSection
} from "./components";
import { useContent } from "./ContentContext.jsx";
import "./App.css";

function App() {
  const { aboutContent } = useContent();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About
                  title={aboutContent.title}
                  paragraphs={aboutContent.paragraphs}
                  buttonText={aboutContent.buttonText}
                  buttonLink={aboutContent.buttonLink}
                />
                <Services />
                <Projects />
                <ConnectSection />
                <Skillntime />
                <Achievements />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <ProfileSection/>
              </div>
            }
          />
          <Route path="/projects" element={
            <div>
            <Projectss />
            </div>
        
        
        } />
          <Route path="/contacts" element={
            <div>
            <Contact/>
            </div>
            } />
        <Route path="/achievements/:title" element={<AchivementsPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;