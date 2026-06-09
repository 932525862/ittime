import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from './modules/CourseCard';
import { courseData } from './services/courseData';
import './style.css';

const FirstCoursesPage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="ios-cards-container">
     <div className="container">
     <div className="ios-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            courseId={course.id}
            title={course.translations[currentLanguage].title}
            description={course.translations[currentLanguage].description}
            duration={course.translations[currentLanguage].duration}
            price={course.translations[currentLanguage].price}
            image={course.image}
          />
        ))}
      </div>
     </div>
    </div>
  );
};

export default FirstCoursesPage;
