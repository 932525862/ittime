import React from 'react';
import { FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MentorCard = ({ mentor }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { id, image, name, position, fullDescription, specialization, social } = mentor;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
      {/* Левая часть с изображением */}
      <div className="relative w-full md:w-[280px] " data-aos="fade-left" data-aos-offset="100">
        <img 
          src={image} 
          alt={`${name[currentLang]} - ${position[currentLang]} at IT TIME ACADEMY`}
          title={`${name[currentLang]} - ${position[currentLang]}`}
          className="w-full h-[250px] md:h-[280px] object-cover"
          loading="lazy"
        />
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          {/* Социальные иконки внизу изображения */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-white text-xl bg-blue-600/80 p-2 rounded-lg"
               aria-label={`${name[currentLang]} LinkedIn profile`}>
              <FaLinkedin />
            </a>
            <a href={social.telegram} target="_blank" rel="noopener noreferrer"
               className="text-white text-xl bg-blue-400/80 p-2 rounded-lg"
               aria-label={`${name[currentLang]} Telegram profile`}>
              <FaTelegram />
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer"
               className="text-white text-xl bg-gray-800/80 p-2 rounded-lg"
               aria-label={`${name[currentLang]} GitHub profile`}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Правая часть с информацией */}
      <div className="flex-1 p-5 md:p-6 flex flex-col" data-aos="fade-right" data-aos-offset="100">
        {/* Заголовок и позиция */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {name[currentLang]}
          </h3>
          <p className="text-base text-gray-600 mt-1">
            {position[currentLang]}
          </p>
        </div>

        {/* Описание */}
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
          {fullDescription[currentLang]}
        </p>

        {/* Специализация */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {t('mentors.FirstMentorsPage.specializationLabel')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialization.split(',').map((skill, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-xs font-medium"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
