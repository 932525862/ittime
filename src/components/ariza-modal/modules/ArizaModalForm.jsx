import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { courses } from '../services/courses';
import { handleFormChange, handleFormSubmit } from '../helpers/formHelpers';
import { formSchema, defaultErrors } from '../schemas/formSchema';

const ArizaModalForm = ({ formData, setFormData, onClose, setShowSuccessModal }) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState(defaultErrors);

  const handleSubmit = (e) => {
    handleFormSubmit(e, formData, onClose, setShowSuccessModal, setFormData, setErrors);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormChange(e, setFormData)}
          placeholder={t('arizaModal.form.name')}
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {t(`arizaModal.errors.name.${errors.name}`)}
          </p>
        )}
      </div>

      <div>
        <select
          name="course"
          value={formData.course}
          onChange={(e) => handleFormChange(e, setFormData)}
          className={`w-full px-4 py-3 rounded-lg border ${errors.course ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none`}
        >
          <option value="">{t('arizaModal.form.selectCourse')}</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        {errors.course && (
          <p className="mt-1 text-sm text-red-500">
            {t(`arizaModal.errors.course.${errors.course}`)}
          </p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleFormChange(e, setFormData)}
          placeholder={t('arizaModal.form.phone')}
          pattern="[+][0-9]*"
          inputMode="numeric"
          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {t(`arizaModal.errors.phone.${errors.phone}`)}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors"
      >
        {t('arizaModal.form.submit')}
      </button>
    </form>
  );
};

export default ArizaModalForm;
