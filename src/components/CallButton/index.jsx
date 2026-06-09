import React from 'react';
import './style.css';

export default function CallButton() {
  return (
    <a
      href="tel:+998947820092"
      className="fixed bottom-8 right-8 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all z-50 call-button"
    >
      <div className="absolute w-full h-full rounded-full animate-ping bg-red-600 opacity-75"></div>
      <div className="absolute w-full h-full rounded-full animate-pulse bg-red-600 opacity-50"></div>
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  );
}
