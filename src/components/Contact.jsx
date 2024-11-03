import React from 'react';

const Contact = () => {
  return (
    <section className="section single-page">
      {/* Section Title */}
      <div className="section-title">
        <h1 className="tracking-in-expand">Contact</h1>
        <div className="underline"></div>
      </div>
      
      {/* Contact Information */}
      <div className="contact-page-text">
        <p className="page-info">
          If you are looking to get ahold of me, you can send me an email at
          <a href="mailto:piyushraivds45@gmail.com" target="_blank" rel="noopener noreferrer">
            piyushraivds45@gmail.com
          </a>
        </p>
        <p className="page-info">
          You can also reach me on LinkedIn at
          <a href="https://www.linkedin.com/in/piyush-rai-3b8714226/" target="_blank" rel="noopener noreferrer">
            Piyush Rai @ LinkedIn
          </a>
        </p>
        
        {/* Contact Form */}
        <form
          method="post"
          action="https://send.pageclip.co/czS9Mdj8XGyk1ySJKFfwI7JdHkBlkFUN"
          className="pageclip-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
