import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.contact-container');
      const containerPosition = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      
      if (containerPosition < windowHeight - elementVisible) {
        container.classList.add('reveal');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        {isSubmitted ? (
          <div className="form-success">
            <div className="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
            <h2>Message Sent!</h2>
            <p>Thank you for contacting us. We'll get back to you shortly.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="another-message-btn"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Email Address"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
                rows="5"
                placeholder="Your Message"
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;