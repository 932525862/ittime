import React, { useEffect } from 'react'
import { FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

export default function TopNavigation() {
  const { t } = useTranslation();
  
  // Добавим анимацию появления элементов при монтировании
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, idx) => {
      el.style.animation = `fadeInUp 1s ease-out ${idx * 0.3}s forwards`;
    });
  }, []);
  
  return (
    <div className="bg-[#b61924] text-white py-2 shadow-md hidden md:block relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Language Selector с дополнительным контейнером */}
          <div className="relative" style={{ zIndex: 1000 }}>
            <LanguageSelector />
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Телефонный номер с анимацией появления и увеличением при наведении */}
            <a 
              href="tel:+998947820092"
              className="animate-on-load hover:text-gray-200 transition-all duration-300 text-center transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt color='white' className="text-lg text-white" />
              +998 (94) 782 00 92
            </a>
            
            {/* Ссылка на Telegram с анимацией появления и эффектом движения */}
            <a
              href="https://t.me/it_time"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-load hover:text-gray-200 transition-all duration-300 flex items-center space-x-2 transform hover:scale-110 hover:shadow-lg"
            >
              <FaTelegram className="text-xl" />
              <span>{t('header.contact.telegram')}</span>
            </a>
            
            {/* Кнопка с эффектом фокусировки, анимацией движения и увеличения */}
            <a href='https://t.me/it_time_admin' className="animate-on-load hover:bg-white hover:text-red-600 transition-all duration-300 w-full sm:w-auto px-4 py-1 border border-white rounded-full transform hover:scale-110 hover:shadow-lg flex items-center gap-2">
              <IoMdMail className="text-xl" />
              {t('header.contact.email')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
