import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const VideoCard = ({ card, videoUrl, isPlaying, handleVideoControl, i18n }) => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
    }
  };

  return (
    <> 
      <video
        ref={videoRef}
        className="student-video"
        loop
        muted={isMuted}
        playsInline
        onClick={() => setIsContentVisible(true)}
        data-aos="flip-left" data-aos-offset="50"
        title={t('home.ThirdMoviePage.videoTitle')}
        aria-label={t('home.ThirdMoviePage.videoDescription')}
      >
        <source src={videoUrl} type="video/mp4" />
        {t('home.ThirdMoviePage.browserNotSupported')}
      </video>
      <div  className={`video-overlay ${isContentVisible ? 'active' : ''}`}>
        <button 
          className="video-control-btn play-pause-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoControl(videoRef.current);
            setIsContentVisible(false);
          }}
        >
          {isPlaying ? (
            <svg className="control-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
              <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
            </svg>
          ) : (
            <svg className="control-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          )}
        </button>
        <div className="volume-controls">
          <button 
            className="volume-btn"
            onClick={toggleMute}
          >
            {isMuted ? (
              <svg className="control-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-7.5-2.19l4.83 4.83V12c0-2.21-1.79-4-4-4v1.17l-.83.83z" fill="currentColor"/>
              </svg>
            ) : (
              <svg className="control-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor"/>
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
        <div className="student-info">
          <div className="info-header">
            <h3 className="student-name">{card.name}</h3>
            <span className="student-level success-badge">{card.level[i18n.language]}</span>
          </div>
          <span className="student-course">{card.course[i18n.language]}</span>
          <p className="student-description">{card.description[i18n.language]}</p>
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
    </>
  );
};
