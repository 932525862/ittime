import React from 'react';

export default function Modal({ isOpen, onClose, title, text, name, children }) {
  if (!isOpen) return null;

  // Разделяем текст на части до и после {name}
  const [beforeName, afterName] = text?.split('{name}') || ['', ''];

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {title && text ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500">
                {beforeName}
                <span className="text-red-500 font-medium">{name}</span>
                {afterName}
              </p>
            </div>
          ) : children}
        </div>
      </div>
    </div>
  );
}
