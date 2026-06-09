import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../../ui/Modal/Modal';
import { defaultErrors } from '../schemas/courseFormSchema';
import { handleCourseFormChange, handleCourseFormSubmit } from '../helpers/courseFormHelpers';

const CourseForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+998',
    courseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState(defaultErrors);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (e) => {
    handleCourseFormSubmit(e, formData, setErrors, setShowModal, setFormData);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-container" data-aos-offset="50" data-aos="zoom-in">
        <div className="form-group">
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={(e) => handleCourseFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.common.fullName')}
            className={`${errors.fullName ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.required')}</p>
          )}
        </div>
        <div className="form-group">
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={(e) => handleCourseFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.common.phone')}
            pattern="[+][0-9]*"
            inputMode="numeric"
            className={`${errors.phone ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.invalidPhone')}</p>
          )}
        </div>
        <div className="form-group">
          <select 
            name="courseType" 
            value={formData.courseType} 
            onChange={(e) => handleCourseFormChange(e, setFormData)} 
            className={`${errors.courseType ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          >
            <option value="">{t('home.SixthRezumePage.forms.course.selectCourse')}</option>
            <option value="frontend">{t('home.SixthRezumePage.forms.course.courseTypes.frontend')}</option>
            <option value="backend">{t('home.SixthRezumePage.forms.course.courseTypes.backend')}</option>
            <option value="mobile">{t('home.SixthRezumePage.forms.course.courseTypes.mobile')}</option>
          </select>
          {errors.courseType && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.required')}</p>
          )}
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={(e) => handleCourseFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.course.additionalMessage')}
            className={`${errors.message ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.required')}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          {t('home.SixthRezumePage.forms.common.submit')}
        </button>
      </form>

      {showModal && (
        <Modal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={t('home.SixthRezumePage.forms.common.thankYou')}
          text={t('home.SixthRezumePage.forms.common.willContact', { name: formData.fullName })}
          name={formData.fullName}
        />
      )}
    </>
  );
};

export default CourseForm;
