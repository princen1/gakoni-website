import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import './Home.css';

// Main carousel images
import img1 from '../assets/2.jpg';
import img2 from '../assets/3.jpg';
import img3 from '../assets/5.jpg';

// Program images
import scienceImg from '../assets/ima.jpg';
import nitImg from '../assets/networking.jpg';
import automobileImg from '../assets/auto.jpg';
import sodImg from '../assets/c.jpg';
import megImg from '../assets/a.jpg';

// Letter to Parents PDF
import LetterToParentsPDF from '../assets/Letter-to-Parents.pdf';

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleDownload = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = LetterToParentsPDF;
      link.download = 'Letter-to-Parents.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fallback if download doesn't initiate
      setTimeout(() => {
        if (!document.body.contains(link)) {
          window.open(LetterToParentsPDF, '_blank');
        }
      }, 2000);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download the letter. Please try again later.');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <div className="small-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
        >
          <div><img src={img1} alt="Campus view of Gakoni Adventist College" /></div>
          <div><img src={img2} alt="Students learning in classroom" /></div>
          <div><img src={img3} alt="School facilities at Gakoni Adventist" /></div>
        </Carousel>
      </div>

      {/* About Section */}
      <section className="section about" ref={addToRefs}>
        <h2>About Us</h2>
        <p>Gakoni Adventist College is a Christian-based secondary school located in Gatsibo District, 
          offering both General Education and TVET programs such as NIT, SOD, Automobile Technology, and MEG. 
          Rooted in Seventh-day Adventist values, we are committed to academic excellence, practical skills, 
          and spiritual growth. Our students thrive in a supportive environment that blends faith, learning, 
          and hands-on training, preparing them for success in life and service.</p>
        <Link to="/about" className="section-link">Read More →</Link>
      </section>

      {/* Enhanced Programs Section */}
      <section className="section programs" ref={addToRefs}>
        <h2>Academic Programs</h2>
        <p>Explore our diverse educational offerings designed for student success</p>
        
        <div className="programs-container">
          {/* General Education */}
          <div className="program-card">
            <img src={scienceImg} alt="Students in science lab" />
            <div className="program-content">
              <h3 className="program-title">Senior 1, 2 & 3 (General Education)</h3>
              <p className="program-description">
                Building skills for future studies through core subject exploration.
              </p>
            </div>
          </div>
          
          {/* NIT Program */}
          <div className="program-card">
            <img src={nitImg} alt="NIT program students working" />
            <div className="program-content">
              <h3 className="program-title">NIT (TVET)</h3>
              <p className="program-description">
                Building the skills to manage and protect today's connected world.
              </p>
            </div>
          </div>
          
          {/* Automobile Technology */}
          <div className="program-card">
            <img src={automobileImg} alt="Automobile technology workshop" />
            <div className="program-content">
              <h3 className="program-title">Automobile Technology (TVET)</h3>
              <p className="program-description">
                Hands-on training in vehicle maintenance and repair.
              </p>
            </div>
          </div>
          
          {/* SOD Program */}
          <div className="program-card">
            <img src={sodImg} alt="Design students working on projects" />
            <div className="program-content">
              <h3 className="program-title">SOD (TVET)</h3>
              <p className="program-description">
                They're shaping their future through Software Development.
              </p>
            </div>
          </div>
          
          {/* MEG Program */}
          <div className="program-card">
            <img src={megImg} alt="Engineering students in lab" />
            <div className="program-content">
              <h3 className="program-title">MEG (A'Level)</h3>
              <p className="program-description">
                They prepare to solve global issues through MEG disciplines
              </p>
            </div>
          </div>
        </div>
        
        <Link to="/courses" className="section-link">View All Programs →</Link>
      </section>

      {/* Announcements */}
      <section className="section announcements" ref={addToRefs}>
        <h2>Latest Announcements</h2>
        <ul>
          <li>
              Mid-Term Exams begin on July 8th. Students are advised to prepare early, stay focused, and give their best. Wishing everyone success!</li>
          <li>
              We're thrilled to open our new science lab, built to support student learning through practical experiments and innovation.</li>
          <li>
              New textbook sets available for S1–S3, designed to enhance hands-on learning and experimentation for our students.</li>
        </ul>
        <Link to="/announcements" className="section-link">View All Announcements →</Link>
      </section>

      {/* Letter to Parents Section */}
      <section className="section letter" ref={addToRefs}>
        <h2>Babyeyi</h2>
        <p>Download our latest communication for parents regarding school updates, events, and important information.</p>
        <div className="download-container">
          <button 
            className="section-link download-link"
            onClick={handleDownload}
          >
            Download Latest Letter
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="download-icon">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section gallery" ref={addToRefs}>
        <h2>Gallery</h2>
        <p>Step into the vibrant life of Gakoni Adventist College through our photo collection. 
          Explore powerful moments of prayer, joyful scenes of student games and recreation, 
          inspiring snapshots from classrooms and teaching sessions, and highlights from campus events, 
          worship gatherings, and community service. Each photo tells a story of faith, learning, and fellowship.</p>
        <Link to="/gallery" className="section-link">See Photos →</Link>
      </section>

      {/* Contact Section */}
      <section className="section contact" ref={addToRefs}>
        <h2>Contact Us</h2>
        <p>📍 Gatsibo District, Rwanda</p>
        <p>📞 Phone: 0789986544</p>
        <p>✉️ Email: info@gakoniadventist.rw</p>
        <Link to="/contact" className="section-link">Send a Message →</Link>
      </section>
    </div>
  );
};

export default Home;