import React, { useState, useEffect, useRef } from 'react';
import { logo } from '../assets/index.js'; // Adjust the path as needed
// import './Navbar.css'; // Ensure you have the corresponding CSS file for styling

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        navbarRef.current.classList.add('navbar-fixed');
      } else {
        navbarRef.current.classList.remove('navbar-fixed');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle Sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="nav" ref={navbarRef}>
        <div className="nav-center">
          {/* Nav Header */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="Brand Logo" />
            <button className="nav-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* Nav Links */}
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="sidebar">
          <button className="close-btn" onClick={toggleSidebar} aria-label="Close Sidebar">
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          {/* Social Icons */}
          <ul className="social-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.facebook.com/ajay.pathak.75839923/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
