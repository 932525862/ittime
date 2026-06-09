import React from 'react';
import AboutCard from './modules/AboutCard';
import { aboutData } from './services/aboutData';
import Loopslider from '../../../../components/loopslider';
import { useTranslation } from 'react-i18next';

const SecondAboutPage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-800 mb-4" data-aos-offset="50" data-aos="fade-right">
            {t('home.SecondAboutPage.title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Сетка карточек */}
        <div className="flex flex-col space-y-8 p-4 md:p-12">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <AboutCard
              key={num}
              title={t(`home.SecondAboutPage.cards.card${num}.title`)}
              description={t(`home.SecondAboutPage.cards.card${num}.description`)}
              icon={aboutData[num - 1].icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondAboutPage;
