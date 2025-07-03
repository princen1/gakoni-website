import React, { useEffect } from 'react';
import './Courses.css';
import scienceImg from '../assets/programs/science.jpg';
import nitImg from '../assets/programs/nit.jpg';
import automobileImg from '../assets/programs/automobile.jpg';
import sodImg from '../assets/programs/sod.jpg';
import megImg from '../assets/programs/meg.jpg';

const Courses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Sinior 1, 2 & 3 (O'Level)",
      description: "Full 3-year secondary education program following national curriculum with sciences, humanities and languages.",
      image: scienceImg,
      duration: "3 Years"
    },
    {
      id: 2,
      title: "MEG (A'Level)",
      description: "Specialized 2-year program in Sciences (MPC), Humanities (MEG) or Languages.",
      image: megImg,
      duration: "3 Years"
    },
    {
      id: 3,
      title: "NIT (TVET)",
      description: "National Institute of Technology certification in Electrical, Mechanical and Civil engineering disciplines.",
      image: nitImg,
      duration: "3 Years"
    },
    {
      id: 4,
      title: "Automobile Technology (TVET)",
      description: "Comprehensive training in vehicle diagnostics, maintenance and repair with modern equipment.",
      image: automobileImg,
      duration: "3 Years"
    },
    {
      id: 5,
      title: "SOD (TVET)",
      description: "Creative program covering architectural drawing, graphic design and technical illustration.",
      image: sodImg,
      duration: "3 Years"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      const windowHeight = window.innerHeight;
      
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add('revealed');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="courses-page-container">
      {/* Hero Section */}
      <section className="courses-hero-section">
        <div className="courses-hero-overlay"></div>
        <div className="courses-hero-content scroll-reveal">
          <h1 className="courses-main-title">Our Academic Programs</h1>
          <p className="courses-subtitle">Comprehensive education pathways for diverse careers</p>
        </div>
      </section>

      {/* All Courses Section */}
      <div className="courses-content-wrapper">
        <h2 className="courses-section-title scroll-reveal">All Available Courses</h2>
        <p className="courses-intro-text scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          Gakoni Adventist College offers five distinct programs to meet various academic and career aspirations.
        </p>
        
        <div className="courses-list-grid">
          {allCourses.map((course, index) => (
            <div 
              className="course-card-item scroll-reveal" 
              key={course.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="course-image-container">
                <img 
                  src={course.image} 
                  alt={`${course.title} program`} 
                  className="course-card-image"
                  loading="lazy"
                />
                <span className="course-duration-badge">{course.duration}</span>
              </div>
              
              <div className="course-info-container">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;