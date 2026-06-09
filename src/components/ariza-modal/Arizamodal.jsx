import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import ArizaModalForm from './modules/ArizaModalForm';
import Modal from '../../ui/Modal/Modal';

const Arizamodal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    phone: '+998'
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!isOpen && !showSuccessModal) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {t('arizaModal.title')}
              </h3>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <IoClose size={24} />
              </button>

              <p className="text-sm text-gray-500 mb-6">
                {t('arizaModal.description')}
              </p>

              <ArizaModalForm 
                formData={formData}
                setFormData={setFormData}
                onClose={onClose}
                setShowSuccessModal={setShowSuccessModal}
              />
            </div>
          </div>
        </>
      )}

      <Modal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={t('successModal.title')}
        text={t('successModal.text', { name: formData.name })}
        name={formData.name}
      />
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Arizamodal;
