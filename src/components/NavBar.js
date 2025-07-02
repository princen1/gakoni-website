import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/Letter', label: 'PL (Babyeyi)' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className="nav-list">
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;