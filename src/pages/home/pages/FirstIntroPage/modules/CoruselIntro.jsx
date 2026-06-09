import React from 'react';
import { FaCode, FaServer, FaMobile, FaMegaport, FaPaintBrush, FaCamera } from 'react-icons/fa';
import './CoruselIntro.css';
import logo from '../../../../../assets/images/logo-ittimeacademy.png'

export default function CoruselIntro() {
  const directions = [
    { title: 'FRONT-END', icon: <FaCode size={30} className="text-[#61DAFB]" /> },
    { title: 'BACK-END', icon: <FaServer size={30} className="text-[#68A063]" /> },
    { title: 'MOBILE DASTURLASH', icon: <FaMobile size={30} className="text-[#FF6B6B]" /> },
    { title: 'SMM MARKETING', icon: <FaMegaport size={30} className="text-[#845EC2]" /> },
    { title: 'DIZAYN', icon: <FaPaintBrush size={30} className="text-[#FF9671]" /> },
    { title: 'MOBILOGRAF', icon: <FaCamera size={30} className="text-[#4D8076]" /> },
  ];

  return (
    <div className="relative w-full mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      <div className={`relative ${window.innerWidth < 400 ? 'w-[300px] h-[300px]' : 
        window.innerWidth < 768 ? 'w-[400px] h-[400px]' : 
        'w-[600px] h-[600px]'}`}>
        {/* Круг с направлениями */}
        <div className="absolute inset-0 rotating-circle">
          {directions.map((direction, index) => {
            const angle = (index * 60 * Math.PI) / 180;
            // Радиус и центр в зависимости от размера экрана
            const radius = window.innerWidth < 400 ? 100 : 
                         window.innerWidth < 768 ? 130 : 
                         200;
            const centerX = window.innerWidth < 400 ? 150 : 
                          window.innerWidth < 768 ? 200 : 
                          300;
            const centerY = window.innerWidth < 400 ? 150 : 
                          window.innerWidth < 768 ? 200 : 
                          300;
            const left = centerX + radius * Math.cos(angle);
            const top = centerY + radius * Math.sin(angle);

            return (
              <div
                key={direction.title}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 direction-item"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                }}
              >
                <div className={`${window.innerWidth < 400 ? 'w-12 h-12' : 'w-16 h-16'} 
                  bg-white rounded-full flex items-center justify-center shadow-md mb-2 
                  hover:scale-110 hover:bg-blue-50 transition-all cursor-pointer icon-container`}>
                  {direction.icon}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap direction-title" style={{ 
                  color: direction.icon.props.className.split('text-[')[1].split(']')[0] 
                }}>
                  {direction.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Центральный логотип */}
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
          ${window.innerWidth < 400 ? 'w-24 h-24' : 
            window.innerWidth < 768 ? 'w-28 h-28' : 
            'w-40 h-40'} logo-container`}>
          <div className="logo-shadow"></div>
          <div className="logo-ring"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logo} 
              alt="IT TIME ACADEMY - Center Logo" 
              title="IT TIME ACADEMY - Programming Education Center"
              className={window.innerWidth < 400 ? 'w-[50px]' : 
                window.innerWidth < 768 ? 'w-[70px]' : 
                'w-[100px]'}
              loading="eager"
   
            />
          </div>
        </div>
      </div>
    </div>
  );
}
