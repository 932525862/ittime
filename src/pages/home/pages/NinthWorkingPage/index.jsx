import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';
import { teamMembers } from './services/teamData';
import Loopslider from '../../../../components/loopslider';

export default function NinthWorkingPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="working-team min-h-screen py-24 px-5 font-poppins bg-gradient-to-br from-gray-50 to-gray-100">
        <h2 
        
          className="team-title text-center text-4xl md:text-5xl mb-20 text-gray-800 font-bold uppercase tracking-wider w-full block relative" 
          data-aos="fade-right" 
          data-aos-offset="50"
        >
          {t('home.NinthWorkingPage.teamTitle')}
        </h2>
        <div className="team-cards flex justify-center flex-wrap gap-12 max-w-[1400px] mx-auto">
          {teamMembers.map((member, index) => {
            const teamKey = index === 0 ? 'frontend' : index === 1 ? 'backend' : 'smm';
            return (
              <div 
                key={index} 
                className="team-card bg-white/90 backdrop-blur-lg rounded-3xl p-8 w-[380px] relative overflow-hidden cursor-pointer border border-white/20 shadow-lg transition-all duration-500 hover:-translate-y-5" 
                data-aos="fade-up" 
                data-aos-offset="50"
              >
                <span className="card-icon text-3xl absolute top-6 right-6">{member.icon}</span>
                <img 
                  src={member.image} 
                  alt={t(`home.NinthWorkingPage.teams.${teamKey}.title`)} 
                  className="card-image w-full h-[250px] object-cover rounded-2xl mb-6 shadow-lg relative z-10 transition-all duration-500"
                />
                <h3 className="card-title text-3xl text-gray-800 mb-5 font-semibold relative z-10 transition-colors duration-300">
                  {t(`home.NinthWorkingPage.teams.${teamKey}.title`)}
                </h3>
                <p className="card-description text-lg text-gray-600 leading-relaxed relative z-10 transition-colors duration-300">
                  {t(`home.NinthWorkingPage.teams.${teamKey}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <h2 
          className="team-title text-center text-4xl md:text-5xl mb-20 text-gray-800 font-bold uppercase tracking-wider w-full block relative" 
          data-aos="fade-right" 
          data-aos-offset="50"
        >
          {t('home.NinthWorkingPage.partnersTitle')}
        </h2>
        <Loopslider />
      </div>
    </>
  );
}
