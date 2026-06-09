import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CourseForm from './modules/CourseForm';
import JobForm from './modules/JobForm';
import FeatureCard from './modules/FeatureCard';
import { jobFeatures, courseFeatures } from './services/featureData';
import './styles.css';

const SixthRezumePage = () => {
  const { t } = useTranslation();
  const [activeForm, setActiveForm] = useState('course');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({
        type: 'success',
        text: t('home.SixthRezumePage.messages.success.resume')
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: t('home.SixthRezumePage.messages.error')
      });
    }
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({
        type: 'success',
        text: t('home.SixthRezumePage.messages.success.application')
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: t('home.SixthRezumePage.messages.error')
      });
    }
  };

  return (
    <div className="resume-container overflow-hidden">
      <div className="form-tabs">
        <button 
          className={`tab-button ${activeForm === 'course' ? 'active' : ''}`}
          onClick={() => setActiveForm('course')}
          data-aos="fade-right" data-aos-offset="100"
        >
          {t('home.SixthRezumePage.tabs.course')}
        </button>
        <button 
          className={`tab-button ${activeForm === 'job' ? 'active' : ''}`}
          onClick={() => setActiveForm('job')}
          data-aos="fade-left" data-aos-offset="100"
        >
          {t('home.SixthRezumePage.tabs.job')}
        </button>
      </div>

      <div className="resume-content">
        <div className="resume-left" >
          {activeForm === 'job' ? (
            <>
              <h2 style={{ color: 'black', fontWeight: '600' }} >{t('home.SixthRezumePage.job.title')}</h2>
              <p>{t('home.SixthRezumePage.job.description')}</p>
              <div className="features" >
                {jobFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 style={{ color: 'black', fontWeight: '600' }}>{t('home.SixthRezumePage.course.title')}</h2>
              <p>{t('home.SixthRezumePage.course.description')}</p>
              <div className="features">
                {courseFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="resume-right">
          <div className="form-container">
            <h3>
              {activeForm === 'job' 
                ? t('home.SixthRezumePage.job.formTitle')
                : t('home.SixthRezumePage.course.formTitle')
              }
            </h3>
            {activeForm === 'job' ? (
              <JobForm onSubmit={handleJobSubmit} message={message} />
            ) : (
              <CourseForm onSubmit={handleCourseSubmit} message={message} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthRezumePage;
