import React from 'react';
import VideoBackground from './childs_components/VideoBackground.jsx';
import SectionTitle from './childs_components/SectionTitle.jsx';
import ConnectForm from './childs_components/ConnectForm.jsx';
import { video , connectimg } from '../assets/index.js';

const ConnectSection = () => {
  return (
    <section className="connect">
      {/* Background Video Component */}
      <VideoBackground 
        videoSrc={video}
        poster= {connectimg}
      />
      
      {/* Banner Content */}
      <div className="video-banner">
        <SectionTitle title="let's get in touch" />

        <p className="video-text">
          I will be happy to connect with you anytime. As I am a social media
          geek, you can find me on most social media platforms. Click below and let's get in touch.
        </p>

        {/* Contact Button */}
        <a href="contact.html" className="btn">
          contact me
        </a>

        {/* Contact Form */}
        <ConnectForm />
      </div>
    </section>
  );
};

export default ConnectSection;
