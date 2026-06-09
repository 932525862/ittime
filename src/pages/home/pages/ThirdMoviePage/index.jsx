import React, { useEffect, useState } from 'react';
import { studentCards } from './services/studentCardsData';
import { VideoCard } from './modules/VideoCard';
import { PlaceholderCard } from './modules/PlaceholderCard';
import { useTranslation } from 'react-i18next';
import './styles.css';

export default function ThirdMoviePage() {
  const [activeCard, setActiveCard] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [playingStates, setPlayingStates] = useState({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.movie-page');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleVideoControl = (cardId, videoElement) => {
    if (videoElement) {
      const newPlayingStates = { ...playingStates };
      
      if (playingStates[cardId]) {
        videoElement.pause();
        newPlayingStates[cardId] = false;
      } else {
        videoElement.play();
        newPlayingStates[cardId] = true;
      }
      
      setPlayingStates(newPlayingStates);
    }
  };

  return (
    <div className={`movie-page ${isIntersecting ? 'visible' : ''}`}>
      <div className="movie-header">
        <h2 className="movie-title" data-aos-offset="50" data-aos="fade-right">{t('home.ThirdMoviePage.subtitle')}</h2>
      </div>

      <div className="movie-grid"  >
        {studentCards.map((card) => (
          <div
          
            key={card.id}
            className={`movie-card ${card.type} ${activeCard === card.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(card.id)}
            onMouseLeave={() => setActiveCard(null)}
            
          >
            {card.type === 'video' ? (
              <VideoCard
                card={card}
                videoUrl={card.videoUrl}
                isPlaying={playingStates[card.id] || false}
                handleVideoControl={(videoElement) => handleVideoControl(card.id, videoElement)}
                i18n={i18n}
                
              />
            ) : (
              <PlaceholderCard card={card}  />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
