import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { value: 'ru', label: '🇷🇺 RU', name: 'Русский' },
  { value: 'uz', label: '🇺🇿 UZ', name: 'O\'zbekcha' },
  { value: 'kr', label: '🇺🇿 КР', name: 'Ўзбекча' },
  { value: 'en', label: '🇺🇸 EN', name: 'English' }
];

const LanguageSelector = ({ isMobile }) => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative inline-block">
      <select 
        value={i18n.language}
        onChange={handleChange}
        className={`
          appearance-none
          bg-transparent
          cursor-pointer
          pr-6
          pl-2
          py-1
          text-sm
          focus:outline-none
          ${isMobile ? 'text-gray-700 font-medium' : 'text-white'}
        `}
      >
        {languages.map((lang) => (
          <option 
            key={lang.value} 
            value={lang.value}
            className="bg-white text-gray-700 py-1"
          >
            {lang.label}
          </option>
        ))}
      </select>
      <span className={`
        absolute
        right-1
        top-1/2
        -translate-y-1/2
        pointer-events-none
        text-[10px]
        ${isMobile ? 'text-gray-700' : 'text-white'}
      `}>
        ▼
      </span>
    </div>
  );
};

export default LanguageSelector;
