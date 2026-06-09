import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { courseData } from '../FirstCoursesPage/services/courseData';
import CustomModal from '../../../../ui/CustomModal/CustomModal';

const CourseDetail = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const course = courseData.find((course) => course.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Функция для форматирования цены
  const formatPrice = (price) => {
    if (!price) return "0";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">{t('courses.notFound')}</div>
      </div>
    );
  }

  // Получаем перевод курса для текущего языка
  const courseTranslation = course.translations[currentLanguage];

  if (!courseTranslation) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">{t('courses.notFound')}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[150px]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Левая колонка с информацией */}
          <div>
            <div className="relative h-[300px] mb-6">
              <img
                src={course.image}
                alt={courseTranslation?.title}
                className="w-full h-full object-contain"
                data-aos="fade-up" data-aos-offset="50"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 " data-aos="fade-left" data-aos-offset="50">{t('courses.aboutCourse')}</h2>
                <p className="text-gray-600" data-aos="fade-up" data-aos-offset="50">
                  {courseTranslation?.description}
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2 " data-aos="fade-right" data-aos-offset="50">{t('courses.duration')}</h2>
                <p className="text-gray-600" data-aos="fade-up" data-aos-offset="50">
                  {courseTranslation?.duration}
                </p>
              </div>
              <button 
                onClick={handleOpenModal} data-aos="fade-up" data-aos-offset="50"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 animated-button mt-4"
              >
                {t('courses.moreDetails')}
              </button>
            </div>
          </div>

          {/* Правая колонка с ценами */}
          <div className="p-6 bg-gray-50">
            <h1 className="text-3xl  font-bold mb-6" data-aos="fade-left" data-aos-offset="50">
              {courseTranslation?.title}
            </h1>

            <div className="space-y-6">
              {/* Полная стоимость */}
              <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-offset="50">
                <h2 className="text-xl text-gray-600 font-semibold mb-4">{t('courses.fullPrice')}</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {formatPrice(courseTranslation?.price)} {t('courses.currency')} / {t('courses.month')}
                    </div>
                    <p className="text-gray-600">{t('courses.monthlyPayment')}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-2xl font-semibold text-gray-800 mb-2">
                      {t('courses.totalAmount')}
                    </div>
                    <div className="text-3xl font-bold text-red-600">
                      {formatPrice(courseTranslation?.installment?.fullPrice)} {t('courses.currency')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Рассрочка */}
              <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-offset="50">
                <h2 className="text-xl text-gray-600 font-semibold mb-4">{t('courses.installmentTitle')}</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {formatPrice(courseTranslation?.installment?.installmentMonthly)} {t('courses.currency')} / {t('courses.month')}
                    </div>
                    <p className="text-gray-600">
                      {t('courses.monthlyPayment', { months: courseTranslation?.installment?.months })}
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-2xl font-semibold text-gray-800 mb-2">
                      {t('courses.totalWithInstallment')}
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {formatPrice(courseTranslation?.installment?.installmentTotal)} {t('courses.currency')}
                    </div>
                    <p className="text-gray-600">{t('courses.installmentDescription')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={t('courses.installmentTitle')}
        description={t('courses.installmentDescription')}
      >
        <div className="modal-content">
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            margin: '0 0 20px 0'
          }}>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('courses.installmentRequirements.work')}
            </li>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('courses.installmentRequirements.guarantor')}
            </li>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('courses.installmentRequirements.documents')}
            </li>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('courses.installmentRequirements.payment')}
            </li>
          </ul>
        </div>
      </CustomModal>
    </div>
  );
};

export default CourseDetail;
