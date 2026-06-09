import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaBookOpen, FaUsers, FaPhoneAlt, FaInfoCircle } from 'react-icons/fa'
import { scrollToTop } from '../../../helpers/scroll';

export default function SideButtons() {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Начальный таймер при загрузке страницы
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const handleScroll = () => {
      // Очищаем предыдущий таймер при каждом скролле
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Показываем кнопки
      setIsVisible(true);
      
      // Устанавливаем новый таймер
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка при размонтировании
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Проверяем, нужно ли скрыть кнопки
  const shouldHideButtons = location.pathname.includes('/courses/') || 
                          (location.pathname.split('/').length > 2 && location.pathname.startsWith('/courses'));

  // Если нужно скрыть кнопки, не рендерим компонент
  if (shouldHideButtons) return null;

  return (
    <>
      {/* Боковая навигация слева */}
      <div className={`fixed top-1/2 -translate-y-1/2 left-0 z-40 max-[768px]:-left-[1.5%] transition-transform duration-500
                      ${!isVisible && window.innerWidth <= 768 ? 'max-[768px]:-translate-x-full' : ''}`}>
        <div className="flex flex-col gap-4">
          {[
            { to: '/', icon: FaHome, label: 'Asosiy' },
            { to: '/courses', icon: FaBookOpen, label: 'Kurslar' },
            { to: '/mentors', icon: FaUsers, label: 'Mentorlar' },
            { to: '/contact', icon: FaPhoneAlt, label: 'Aloqa' },
            { to: '/about', icon: FaInfoCircle, label: 'Biz haqimizda' }
          ].map((item, index) => (
            <Link 
             onClick={scrollToTop}
              key={index} 
              to={item.to}
              className="group relative flex items-center"
            >
              {/* Основная кнопка с иконкой */}
              <div className={`bg-gradient-to-r from-red-600 to-red-700 w-12 h-12 flex items-center justify-center 
                            rounded-r-xl shadow-lg transform transition-all duration-300 
                            hover:w-14 hover:shadow-red-500/50 hover:from-red-500 hover:to-red-600
                            after:content-[''] after:absolute after:top-0 after:right-0 
                            after:w-2 after:h-full after:bg-gradient-to-b after:from-red-400 after:to-red-600
                            before:content-[''] before:absolute before:top-0 before:right-0
                            before:w-full before:h-2 before:bg-gradient-to-r before:from-red-400 before:to-red-600
                            ${location.pathname === item.to ? 'from-red-500 to-red-600 w-16 shadow-red-500/50' : ''}
                            max-[480px]:w-8 max-[480px]:h-8
                            ${location.pathname === item.to ? 'max-[480px]:!w-10' : ''}
                            ${!isVisible ? 'opacity-0' : ''}`}>
                <item.icon className="text-white text-xl max-[480px]:text-sm" />
              </div>

              {/* Всплывающий текст */}
             
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
