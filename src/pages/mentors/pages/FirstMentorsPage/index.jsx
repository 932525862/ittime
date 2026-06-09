import React from 'react';
import { useTranslation } from 'react-i18next';
import MentorCard from './modules/mentor-card';
import { mentorsData } from '../../../../data/mentorsData';

const FirstMentorsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent" data-aos="fade-left" data-aos-offset="100">
            {t('mentors.FirstMentorsPage.pageTitle')}
          </h2>
          <p className="mt-4 text-xl text-gray-600" data-aos="fade-right" data-aos-offset="100">
            {t('mentors.FirstMentorsPage.pageSubtitle')}
          </p>
        </div>
        
        <div className="space-y-8">
          {mentorsData.map((mentor) => (
            <MentorCard 
              key={mentor.id} 
              mentor={mentor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstMentorsPage;
