import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

const MentorCard = ({ mentor }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { id, image, name, position, description, specialization, social } = mentor;

  return (
    <div className="mentor-card" data-aos-offset="100" data-aos="zoom-out-up">
      <div className="mentor-image-wrapper">
        <div className="dots-left"></div>
        <div className="dots-right"></div>
        <img
          src={image}
          alt={name[currentLang]}
          className="mentor-image"
        />
      </div>
      <div className="mentor-content">
        <h3 className="mentor-name">{name[currentLang]}</h3>
        <p className="mentor-position">{position[currentLang]}</p>
        <p className="mentor-description">{description[currentLang]}</p>
        <p className="mentor-specialization">{specialization}</p>
        <div className="mentor-social">
          <a href={social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={social.telegram} className="social-link" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href={social.github} className="social-link" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
