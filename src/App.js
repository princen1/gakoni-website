import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ Add this line

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Announcements from './pages/Announcements';
import Letter from './pages/letter';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this line here */}
      <Header />
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/Letter" element={<Letter />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
