import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../../../../../../ui/Modal/Modal'
import images1 from '../../../../../../assets/images/consult-1.png'
import images2 from '../../../../../../assets/images/consult-2.png'
import images3 from '../../../../../../assets/images/consult-3.png'
import { defaultErrors } from '../../schemas/formSchema'
import { handleFormChange, handleFormSubmit } from '../../helpers/formHelpers'
import './consultationForm.css'

export default function ConsultationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998'
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState(defaultErrors);

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e, formData, setErrors, setShowModal, setFormData);
  };

  return (
    <div className="consultation-section min-h-[500px] flex items-center relative overflow-hidden py-8" >
      <div className="max-w-[1400px] mx-auto w-[95%] grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 relative z-10">
        {/* Images Section */}
        <div className="consultation-images bg-white/10 backdrop-blur-xl rounded-2xl p-6 h-[320px] relative overflow-hidden" data-aos="fade-right" data-aos-offset="50" role="region" aria-label={t('home.TenthConsultContactPage.consultation.imagesSection')}>
          <div className="text-center px-4 relative mb-2">
            <h3 className="text-[clamp(20px,2vw,26px)] font-semibold leading-normal text-[#1a1a1a]">
              {t('home.TenthConsultContactPage.consultation.mainText')}
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-5 h-52 mt-2">
            <img 
              src={images1} 
              alt={t('home.TenthConsultContactPage.consultation.images.programming')} 
              title={t('home.TenthConsultContactPage.consultation.images.programmingTitle')}
              className="consult-image w-[150px] rounded-2xl"
              loading="lazy"
              width="150"
              height="150"
            />
            <img 
              src={images2} 
              alt={t('home.TenthConsultContactPage.consultation.images.development')} 
              title={t('home.TenthConsultContactPage.consultation.images.developmentTitle')}
              className="consult-image featured w-[170px] rounded-2xl"
              loading="lazy"
              width="170"
              height="170"
            />
            <img 
              src={images3} 
              alt={t('home.TenthConsultContactPage.consultation.images.coding')} 
              title={t('home.TenthConsultContactPage.consultation.images.codingTitle')}
              className="consult-image w-[150px] rounded-2xl"
              loading="lazy"
              width="150"
              height="150"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="consultation-form bg-white/10 backdrop-blur-xl rounded-2xl p-6 h-[320px] flex flex-col relative" data-aos="fade-left" data-aos-offset="50" role="form" aria-label={t('home.TenthConsultContactPage.consultation.form.title')}>
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6 text-center">
            {t('home.TenthConsultContactPage.consultation.form.title')}
          </h3>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 flex-grow relative z-20" aria-label={t('home.TenthConsultContactPage.consultation.form.description')}>
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleFormChange(e, setFormData)}
                placeholder={t('home.TenthConsultContactPage.consultation.form.name.placeholder')}
                className={`w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur border ${errors.name ? 'border-red-500' : 'border-white/20'} outline-none focus:border-[#dc2626] transition-colors placeholder:text-gray-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {t(`home.TenthConsultContactPage.consultation.form.name.errors.${errors.name}`)}
                </p>
              )}
            </div>

            <div>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleFormChange(e, setFormData)}
                placeholder={t('home.TenthConsultContactPage.consultation.form.phone.placeholder')}
                pattern="[+][0-9]*"
                inputMode="numeric"
                className={`w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur border ${errors.phone ? 'border-red-500' : 'border-white/20'} outline-none focus:border-[#dc2626] transition-colors placeholder:text-gray-500`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {t(`home.TenthConsultContactPage.consultation.form.phone.errors.${errors.phone}`)}
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-shadow relative z-30 cursor-pointer"
            >
              {t('home.TenthConsultContactPage.consultation.form.submit')}
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <Modal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={t('home.TenthConsultContactPage.consultation.modal.title')}
          text={t('home.TenthConsultContactPage.consultation.modal.text', { name: formData.name })}
          name={formData.name}
        />
      )}
    </div>
  )
}
