import React from "react";
// import hackhound from '../assets/index.js';

const Section = ({ title, children, className = "" }) => (
  <section className={`container mx-auto px-4 py-12 ${className}`}>
    <h2 className="text-3xl font-bold text-yellow-600 mb-6">{title}</h2>
    {children}
  </section>
);

const Card = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const HackhoundComponent = () => {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="text-center py-16 bg-yellow-400">
        <h1 className="text-5xl font-bold text-black mb-4">
          Adaptive Learning Platform
        </h1>
        <p className="text-xl text-black">
          Revolutionizing Education with AI, Gamification, and Innovation
        </p>
      </header>

      {/* Project Overview Section */}
      <Section title="Project Overview">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="mb-6">
            Developed during <span className="font-semibold">HackHound 2.0</span>, 
            the <span className="font-semibold">Adaptive Learning Platform</span> 
            is a Python-based solution that transforms lecture videos into concise summaries 
            and auto-generates MCQs using <span className="font-semibold">GPT models</span> 
            and <span className="font-semibold">speech-to-text APIs</span>. It features a 
            dual-login system, gamification elements, and secure data management.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/piyushrai007/edunova"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              GitHub Repository
            </a>
            <a
              href="https://edunova-sati.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-black hover:text-yellow-400 transition duration-300"
            >
              Live Project
            </a>
          </div>
        </div>
      </Section>

      {/* Project Architecture Section */}
      <Section title="Project Architecture">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="mb-6">
            The platform is built on a modular architecture, ensuring scalability and flexibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Frontend"
              description="Built with React and Tailwind CSS, the frontend provides a responsive and interactive user interface."
            />
            <Card
              title="Backend"
              description="Powered by Django and Flask, the backend handles data processing, API integrations, and user authentication."
            />
            <Card
              title="Database"
              description="A secure PostgreSQL database stores lecture summaries, MCQs, and user data."
            />
            <Card
              title="AI Integration"
              description="Leverages GPT models for summarization and OpenCV for face recognition in attendance tracking."
            />
          </div>
          <img
            src="/architecture-diagram.png"
            alt="Project Architecture Diagram"
            className="mt-6 rounded-lg w-full max-w-2xl mx-auto"
          />
        </div>
      </Section>

      {/* Achievement Section */}
      <Section title="Our Achievement">
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <p className="mb-6">
      Thrilled to announce that our team <span className="font-semibold">#Team_VariableX</span> 
      secured <span className="font-semibold">5th position</span> in 
      <span className="font-semibold">#HackHound 2.0</span> at SRM University! 🏆✨ Among more than 50 skilled teams, 
      we demonstrated creativity, innovation, and unwavering commitment during the intense 24-hour competition.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((img) => (
        <div key={img} className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-sm overflow-hidden">
          <img
            src={`/team-moment-${img}.jpg`}
            alt={`Team Moment ${img}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</Section>

      {/* Features Section */}
      <Section title="Key Features">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Dual-Login System"
            description="Separate dashboards for teachers and students with tailored functionalities."
          />
          <Card
            title="AI-Powered Summaries"
            description="Convert lecture videos into concise summaries using GPT models."
          />
          <Card
            title="Gamification"
            description="Medals and blogging features to enhance student engagement."
          />
        </div>
      </Section>

      {/* Certification Section */}
      <Section title="Certification" className="text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/certificate.PNG"
            alt="HackHound 2.0 Certification"
            className="rounded-lg w-full max-w-md mx-auto"
          />
        </div>
      </Section>

     
    </div>
  );
};

export default HackhoundComponent;
