import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

const statsData = [
  {
    icon: '🎓',
    endNumber: 5,
    duration: 2000
  },
  {
    icon: '👨‍🎓',
    endNumber: 500,
    duration: 2500
  },
  {
    icon: '💼',
    endNumber: 80,
    duration: 2000
  },
  {
    icon: '🌟',
    endNumber: 4.9,
    duration: 2500,
    decimals: 1
  }
];

const achievements = [
  { icon: '🏆' },
  { icon: '🌐' },
  { icon: '🤝' },
  { icon: '📚' }
];

const StatCard = ({ icon, endNumber, index, duration, decimals = 0 }) => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const startTime = useRef(null);
  const animationFrameId = useRef(null);
  const { t } = useTranslation();

  const formatNumber = (num) => {
    return decimals > 0 ? num.toFixed(decimals) : Math.floor(num);
  };

  const animate = (timestamp) => {
    if (!startTime.current) {
      startTime.current = timestamp;
    }

    const progress = timestamp - startTime.current;
    const percentage = Math.min(progress / duration, 1);
    
    setNumber(percentage * endNumber);

    if (progress < duration) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startTime.current = null;
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, endNumber, duration]);

  return (
    <div ref={cardRef} className="stat-card"   data-aos="fade-right" data-aos-offset="50">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {formatNumber(number)}
        {t(`home.FifthInfoPage.stats.${index}.suffix`)}
      </div>
      <div className="stat-text" >{t(`home.FifthInfoPage.stats.${index}.text`)}</div>
    </div>
  );
};




const FifthInfoPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="info-container">
      <div className="info-content">
        <h2 className="info-title"   data-aos="fade-right" data-aos-offset="50">{t('home.FifthInfoPage.title')}</h2>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              endNumber={stat.endNumber}
              duration={stat.duration}
              decimals={stat.decimals}
              index={index}
              
            />
          ))}
        </div>

        <div className="additional-info">
          <h3   data-aos="fade-right" data-aos-offset="50">{t('home.FifthInfoPage.subtitle')}</h3>
          <p   data-aos="fade-left" data-aos-offset="50" >{t('home.FifthInfoPage.description')}</p>

          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item"  data-aos-offset="50" data-aos="flip-up">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-text">
                  {t(`home.FifthInfoPage.achievements.${index}.text`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthInfoPage;
