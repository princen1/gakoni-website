import React, { useEffect, useRef } from 'react';
import LetterToParentsPDF from '../assets/Letter-to-Parents.pdf';
import './Letter.css';

const Letter = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

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
      alert('Failed to download the file. Please try again.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="letter-container" ref={containerRef}>
      <div className="letter-content" ref={contentRef}>
        <h1>Letter to Parents</h1>
        <p>Download the latest letter to parents from the school administration.</p>
        
        <div className="download-section">
          <button onClick={handleDownload} className="download-button">
            Download Letter (PDF)
          </button>
          <p className="file-info">File size: 2.4MB | Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Letter;