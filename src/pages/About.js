import React, { useEffect } from 'react';
import './About.css';
import principalImage from '../assets/principal.jpg';

const About = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* Wrap both elements in a single reveal container */}
          <div className="reveal">
            <h1>Who We Are</h1>
            <p className="hero-subtitle">Excellence in Education Since 2010</p>
          </div>
        </div>
      </section>

      {/* Rest of your component remains the same */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="reveal">Our Institution</h2>
          <p className="reveal reveal-delay-1">
            Gakoni Adventist College is a Christian-based secondary school located in Gatsibo District, Rwanda.
            We provide comprehensive General Education (MEG) and specialized TVET programs including NIT, SOD, 
            and Automobile Technology.
          </p>
          <p className="reveal reveal-delay-2">
            Founded in 2010, our institution has grown to become a center of academic excellence, 
            combining quality education with strong moral values based on Christian principles.
          </p>
          
          <h2 className="reveal">Our Mission</h2>
          <p className="reveal reveal-delay-1">
            To prepare young people for service to God and humanity through excellence in academics,
            discipline, and faith. We strive to develop well-rounded individuals who will make
            positive contributions to society.
          </p>
        </div>

        <div className="principal-section">
          <div className="principal-card reveal reveal-delay-2">
            <img src={principalImage} alt="Principal of Gakoni Adventist College" className="principal-image" />
            <div className="principal-info">
              <h3>Principal's Message</h3>
              <p className="principal-name">Rev. John Doe</p>
              <p>
                "At Gakoni Adventist College, we believe in nurturing both the mind and spirit.
                Our holistic approach to education prepares students for both professional success
                and meaningful service to our community."
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="values-section">
        <h2 className="reveal">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card reveal reveal-delay-1">
            <h3>Excellence</h3>
            <p>We strive for the highest standards in all academic and extracurricular activities.</p>
          </div>
          <div className="value-card reveal reveal-delay-2">
            <h3>Integrity</h3>
            <p>We uphold honesty and strong moral principles in all our dealings.</p>
          </div>
          <div className="value-card reveal reveal-delay-3">
            <h3>Service</h3>
            <p>We encourage selfless service to God and humanity.</p>
          </div>
          <div className="value-card reveal reveal-delay-1">
            <h3>Community</h3>
            <p>We foster a supportive environment where everyone belongs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;