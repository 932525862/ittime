import React from 'react';
import './CustomModal.css';

const CustomModal = ({ isOpen, onClose, title, description, children }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-content" onClick={e => e.stopPropagation()}>
        <button className="custom-modal-close" onClick={onClose}>
          ×
        </button>
        
        {title && <h2 className="custom-modal-title">{title}</h2>}
        {description && <p className="custom-modal-description">{description}</p>}
        
        <div className="custom-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
