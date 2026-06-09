import React, { useState, useEffect } from 'react';
import './style.css';
import { toggleVisibility } from './helpers/toggleVisibility';
import { scrollToTop } from '../../helpers/scroll';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => toggleVisibility(setIsVisible);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-10 h-10 bg-black/80 hover:bg-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-to-top z-50"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
