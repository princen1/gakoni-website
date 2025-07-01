// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can use 'auto' if you want instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
