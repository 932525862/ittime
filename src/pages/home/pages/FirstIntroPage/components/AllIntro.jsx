import React, { useState } from 'react';
import { FaReact, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import ParticlesBackground from '../modules/ParticlesBackground';
import './allintro.css';
import CoruselIntro from '../modules/CoruselIntro';
import Arizamodal from '../../../../../components/ariza-modal/Arizamodal';
import { useTranslation } from 'react-i18next';

export default function AllIntro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="allintro">
        <div className="relative w-full h-[1400px] sm:h-[1200px] md:h-[1200px] lg:h-[900px]  bg-gray-900">
          <ParticlesBackground />
          <div className="container absolute top-[4%] sm:top-[10%] md:top-[15%] left-1/2 transform -translate-x-1/2 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Правая часть с каруселью */}
              <div className="order-1 sm:order-2 mt-12   sm:mt-0">
                <CoruselIntro />
              </div>
              {/* Левая часть с текстом */}
              <div className="text-center lg:text-left space-y-6 order-2 sm:order-1" data-aos-offset="100">
                <h2 className="text-3xl sm:text-4xl px-2 md:pl-12  xl:pl-2  lg:text-5xl font-bol" data-aos="fade-up">
                  {t('home.FirstIntroPage.title')}
                </h2>
                <p className="text-lg  md:pl-12  xl:pl-2  text-gray-300 px-4" data-aos="fade-left">
                  {t('home.FirstIntroPage.description')}
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)} data-aos="fade-up"
                  className="bg-red-600  md:ml-12  xl:ml-2 text-white px-8 py-3 rounded-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 animated-button"
                >
                  {t('home.FirstIntroPage.button')}
                </button>
              </div>
            </div>
          </div>
          
          {/* Нижняя часть с текстом, выровненным по центру */}
          <div className="absolute px-4    max-w-[1200px] w-full  bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-6">
              {[
                { icon: FaReact, name: t('home.FirstIntroPage.technologies.react') },
                { icon: FaNode, name: t('home.FirstIntroPage.technologies.nodejs') },
                { icon: FaGitAlt, name: t('home.FirstIntroPage.technologies.git') },
                { icon: FaPython, name: t('home.FirstIntroPage.technologies.python') },
                { icon: FaHtml5, name: t('home.FirstIntroPage.technologies.html') },
                { icon: FaCss3Alt, name: t('home.FirstIntroPage.technologies.css') }
              ].map((tech, index) => (
                <div key={index} className="custom-card" data-aos-offset="200" data-aos="fade-up">
                  <tech.icon size={34} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Arizamodal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
