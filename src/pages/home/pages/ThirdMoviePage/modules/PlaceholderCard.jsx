import React from 'react';
import { useTranslation } from 'react-i18next';

export const PlaceholderCard = ({ card }) => {
  const { t } = useTranslation();
  
  return (
    <div className="card-overlay" >
      <div className="student-info">
        <div className="info-header">
          <h3 className="student-name">{card.name}</h3>
          <span className="student-level success-badge">{card.level}</span>
        </div>
        <span className="student-course">{card.course}</span>
        <p className="student-description">{card.description}</p>
        <div className="skills-container">
          {card.skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
        <div className="success-metrics">
          <div className="metric">
            <span className="metric-label">{t('home.ThirdMoviePage.company')}</span>
            <span className="metric-value">{card.company}</span>
          </div>
          <div className="metric">
            <span className="metric-label">{t('home.ThirdMoviePage.salary')}</span>
            <span className="metric-value highlight">{card.salary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
