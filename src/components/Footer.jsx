import React from 'react';

// Footer component
const Footer = () => {
  // Social links data
  const socialLinks = [
    { href: '', iconClass: 'fab fa-twitter', label: 'Twitter' },
    { href: 'https://www.linkedin.com/in/piyush-rai-3b8714226/', iconClass: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/piyushrai007', iconClass: 'fab fa-github', label: 'GitHub' },
    { href: '', iconClass: 'fab fa-facebook', label: 'Facebook' },
    { href: 'https://www.instagram.com/piyush_.rai__/', iconClass: 'fab fa-instagram', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      {/* Social Icons */}
      <ul className="social-icons">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={link.label}>
              <i className={link.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
      
      {/* Footer text */}
      <p>&copy; {new Date().getFullYear()} Piyush Rai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
