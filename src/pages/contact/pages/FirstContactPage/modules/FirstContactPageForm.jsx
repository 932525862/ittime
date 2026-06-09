import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../../ui/Modal/Modal';
import { defaultErrors } from '../schemas/formSchema';
import { handleFormChange, handleFormSubmit } from '../helpers/formHelpers';

export default function FirstContactPageForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998'
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e) => {
    handleFormSubmit(e, formData, setErrors, setShowModal, setFormData);
  };

  return (
    <>
      <form 
        onSubmit={onSubmit}
        className="max-w-md mx-auto space-y-6"
        role="form"
        aria-label={t('contact.FirstContactPage.form.title')}
      >
        <div role="group" aria-labelledby="name-label">
          <label 
            id="name-label"
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('contact.FirstContactPage.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormChange(e, setFormData)}
            placeholder={t('contact.FirstContactPage.form.name.placeholder')}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200`}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {t(`contact.FirstContactPage.form.name.errors.${errors.name}`)}
            </p>
          )}
        </div>

        <div role="group" aria-labelledby="phone-label">
          <label 
            id="phone-label"
            htmlFor="phone" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t('contact.FirstContactPage.form.phone.label')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleFormChange(e, setFormData)}
            placeholder={t('contact.FirstContactPage.form.phone.placeholder')}
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200`}
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            pattern="\+998[0-9]{9}"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
              {t(`contact.FirstContactPage.form.phone.errors.${errors.phone}`)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
          aria-label={t('contact.FirstContactPage.form.submit')}
        >
          {t('contact.FirstContactPage.form.submit')}
        </button>
      </form>

      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('contact.FirstContactPage.form.modal.title')}
        text={t('contact.FirstContactPage.form.modal.text', { name: formData.name })}
        name={formData.name}
      />
    </>
  );
}
