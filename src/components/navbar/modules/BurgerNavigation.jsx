import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa'
import ConsultationModal from '../../consultation-modal/ConsultationModal'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

export default function BurgerNavigation({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`}>
      <div className="px-4 py-6 space-y-4 bg-white rounded-b-2xl shadow-lg">
        {/* Язык и контакты */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="language-select-mobile">
            <LanguageSelector isMobile={true} />
          </div>
          <div className="flex-1 text-center">
            <a href="tel:+998947820092" className="flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors">
              <FaPhone className="mr-2" />
              <span>+998 (94) 782 00 92</span>
            </a>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://t.me/it_time" target="_blank" rel="noopener noreferrer" 
             className="text-2xl text-gray-600 hover:text-red-600 transition-colors">
            <FaTelegram />
          </a>
          <a href="https://www.instagram.com/it_time_academy/" target="_blank" rel="noopener noreferrer"
             className="text-2xl text-gray-600 hover:text-red-600 transition-colors">
            <FaInstagram />
          </a>
        </div>

        {/* Навигация */}
        <nav className="space-y-2">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
              location.pathname === '/' ? 'text-red-600 bg-red-50 nav-link-active' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t('header.menu.home')}
          </Link>
          <Link
            to="/courses"
            onClick={handleLinkClick}
            className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
              location.pathname === '/courses' ? 'text-red-600 bg-red-50 nav-link-active' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t('header.menu.courses')}
          </Link>
          <Link
            to="/mentors"
            onClick={handleLinkClick}
            className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
              location.pathname === '/mentors' ? 'text-red-600 bg-red-50 nav-link-active' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t('header.menu.mentors')}
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
              location.pathname === '/about' ? 'text-red-600 bg-red-50 nav-link-active' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t('header.menu.about')}
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`block text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 ${
              location.pathname === '/contact' ? 'text-red-600 bg-red-50 nav-link-active' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t('header.menu.contact')}
          </Link>

          {/* Кнопка консультации */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="w-full text-center mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
          >
            {t('header.menu.consultation')}
          </button>
        </nav>

        <ConsultationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  )
}
