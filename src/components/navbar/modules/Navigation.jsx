import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ConsultationModal from '../../consultation-modal/ConsultationModal'
import { IoPlay } from 'react-icons/io5'
import { scrollToTop } from '../../../helpers/scroll';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        onClick={scrollToTop}
        to="/"
        className={`nav-link text-lg font-medium hover:text-red-600 transition-colors duration-300 ${
          location.pathname === '/' ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {t('header.menu.home')}
      </Link>
      <div className="nav-separator"></div>
      <Link
        onClick={scrollToTop}
        to="/courses"
        className={`nav-link text-lg font-medium hover:text-red-600 transition-colors duration-300 ${
          location.pathname === '/courses' ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {t('header.menu.courses')}
      </Link>
      <div className="nav-separator"></div>
      <Link
        onClick={scrollToTop}
        to="/mentors"
        className={`nav-link text-lg font-medium hover:text-red-600 transition-colors duration-300 ${
          location.pathname === '/mentors' ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {t('header.menu.mentors')}
      </Link>
      <div className="nav-separator"></div>
      <Link
        onClick={scrollToTop}
        to="/about"
        className={`nav-link text-lg font-medium hover:text-red-600 transition-colors duration-300 ${
          location.pathname === '/about' ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {t('header.menu.about')}
      </Link>
      <div className="nav-separator"></div>
      <Link
        onClick={scrollToTop}
        to="/contact"
        className={`nav-link text-lg font-medium hover:text-red-600 transition-colors duration-300 ${
          location.pathname === '/contact' ? 'text-red-600' : 'text-gray-900'
        }`}
      >
        {t('header.menu.contact')}
      </Link>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600
                 px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-300
                 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
      >
        {t('header.menu.consultation')}
      </button>

      <Link
        to="/lessons"
        onClick={scrollToTop}
        className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white
                   bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 shadow-2xl transform transition-all duration-300
                   hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300/60"
        aria-label="Darsliklar"
      >
        <IoPlay className="w-4 h-4 opacity-95" />
        <span className="leading-none">Darsliklar</span>
        <span className="absolute -right-2 -top-2 inline-block h-3 w-3 rounded-full bg-white/70 animate-pulse" />
      </Link>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Lessons now opens on a separate page at /lessons */}
    </div>
  )
}
