import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../../ui/Modal/Modal';
import { defaultErrors } from '../schemas/jobFormSchema';
import { handleJobFormChange, handleJobFileChange, handleJobFormSubmit } from '../helpers/jobFormHelpers';

const JobForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+998',
    email: '',
    education: '',
    experience: '',
    skills: '',
    resume: null
  });

  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState(defaultErrors);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (e) => {
    handleJobFormSubmit(e, formData, setErrors, setShowModal, setFormData, setFileName);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-container" data-aos-offset="50" data-aos="zoom-in">
        <div className="form-group">
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={(e) => handleJobFormChange(e, setFormData)} 
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
            onChange={(e) => handleJobFormChange(e, setFormData)} 
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
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={(e) => handleJobFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.job.email')}
            className={`${errors.email ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.invalidEmail')}</p>
          )}
        </div>

        <div className="form-group">
          <textarea 
            name="education" 
            value={formData.education} 
            onChange={(e) => handleJobFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.job.about')}
            className={`${errors.education ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.education && (
            <p className="text-red-500 text-sm mt-1">{t(`validation.education.${errors.education.includes('10') ? 'minLength' : 'maxLength'}`)}</p>
          )}
        </div>

        <div className="form-group">
          <textarea 
            name="experience" 
            value={formData.experience} 
            onChange={(e) => handleJobFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.job.experience')}
            className={`${errors.experience ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{t(`validation.experience.${errors.experience.includes('10') ? 'minLength' : 'maxLength'}`)}</p>
          )}
        </div>

        <div className="form-group">
          <textarea 
            name="skills" 
            value={formData.skills} 
            onChange={(e) => handleJobFormChange(e, setFormData)} 
            placeholder={t('home.SixthRezumePage.forms.job.skills')}
            className={`${errors.skills ? 'border-red-500' : 'border-gray-300'} w-full p-2 border rounded-md`}
          />
          {errors.skills && (
            <p className="text-red-500 text-sm mt-1">{t('home.SixthRezumePage.forms.errors.required')}</p>
          )}
        </div>

        <div className="form-group">
          <label className="block mb-2">{t('home.SixthRezumePage.forms.job.uploadResume')}</label>
          <div className="flex items-center">
            <label className="cursor-pointer bg-[#dc2626] text-white px-4 py-2 rounded-md">
              {t('home.SixthRezumePage.forms.job.chooseFile')}
              <input
                type="file"
                name="resume"
                className="hidden"
                onChange={(e) => handleJobFileChange(e, setFormData, setFileName)}
                accept=".pdf,.doc,.docx"
              />
            </label>
            <span className="ml-3">{fileName || t('home.SixthRezumePage.forms.job.noFileChosen')}</span>
          </div>
          {errors.resume && (
            <p className="text-red-500 text-sm mt-1">
              {t(`validation.resume.${
                errors.resume.includes('yuklashingiz shart') ? 'required' :
                errors.resume.includes('formatidagi') ? 'fileType' : 'fileSize'
              }`)}
            </p>
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

export default JobForm;
