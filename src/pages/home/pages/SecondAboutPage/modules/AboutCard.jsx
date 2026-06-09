import React, { useState } from 'react';
import './aboutcard.css';

const AboutCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div  data-aos-offset="50" data-aos="zoom-in"
      className="card-container perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-wrapper ${isHovered ? 'hover-lift' : ''}`}>
        {/* Основная карточка */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
          {/* Фоновые эффекты */}
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          
          {/* Анимированные декоративные элементы */}
          <div className="absolute top-0 right-0 w-40 h-40 -z-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-bl-full transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-32 h-32 -z-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-500/20 rounded-tr-full transform -translate-x-16 translate-y-16 group-hover:-translate-x-12 group-hover:translate-y-12 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-tr-full transform -rotate-45 group-hover:-rotate-90 transition-transform duration-700"></div>
          </div>

          {/* Основной контент */}
          <div className="relative p-8 md:p-12 overflow-visible">
            {/* Текстовый контент */}
            <div className="flex flex-col space-y-2">
              {/* Заголовок */}
              <div className="glitch-wrapper">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 glitch-text" data-text={title}>
                  {title}
                </h3>
                {/* Декоративная линия под заголовком */}
                <div className="relative h-1 w-32 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                  <div className="absolute inset-0 bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                </div>
              </div>

              {/* Описание */}
              <div className="relative bg-white/90 p-2 rounded-xl backdrop-blur-sm">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {description}          
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent highlight-scanner rounded-xl"></div>
              </div>

              {/* Иконка выше и левее */}
              <div className="relative icon-3d-container   !mb-8  ml-8 mr-auto">
                <div className="icon-3d-wrapper">
                  <div className="icon-front w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <div className="icon-back w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-l from-red-600 to-red-500"></div>
                  <div className="icon-right"></div>
                  <div className="icon-left"></div>
                  <div className="icon-top"></div>
                  <div className="icon-bottom"></div>
                </div>

                {/* Орбитальные кольца */}
                <div className="orbital-ring ring-1"></div>
                <div className="orbital-ring ring-2"></div>
                <div className="orbital-ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Отражение */}
        <div className="card-reflection"></div>
      </div>
    </div>
  );
};

export default AboutCard;
