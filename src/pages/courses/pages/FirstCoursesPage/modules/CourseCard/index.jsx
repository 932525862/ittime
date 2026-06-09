import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css';
import { scrollToTop } from '../../../../../../helpers/scroll';
export default function CourseCard({ courseId, title, description, price, duration, image }) {
  const { t } = useTranslation();
  
  return (
    <div className="ios-card w-[300px] mx-auto bg-white rounded-2xl overflow-hidden  border shadow-[0px_0px_30px_rgba(0,0,0,0.09)] transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] flex flex-col" data-aos="fade-up">
      <img 
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className='w-full border bg-black relative'>
        <div className="ribbon bg-red-600 text-white uppercase font-medium flex items-center gap-[6px] border-b">
          <span style={{color: 'white'}} className="text-sm font-bold">★</span>
          {t('courses.FirstCoursesPage.installment')}
        </div>
      </div>
     
      <div className="p-5 mt-3 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-[28px] font-bold mb-1 line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-1 line-clamp-2">{description}</p>
          <p className="text-[17px] font-medium mb-4">
            {price} {t('courses.currency')}/{t('courses.month')}
          </p>
          
          <div className="flex items-center text-gray-400 mb-4">
            <svg className="w-[18px] h-[18px] mr-[6px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <Link to={`/courses/${courseId}`} onClick={scrollToTop }>
          <button  className="w-full px-6 py-1 bg-transparent text-red-600 text-lg font-bold rounded-xl border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px] active:translate-y-[1px]">
            {t('courses.FirstCoursesPage.button')}
          </button>
        </Link>
      </div>
    </div>
  );
}
