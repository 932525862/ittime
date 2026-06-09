import React from 'react';
import { useTranslation } from 'react-i18next';
import FirstContactPageForm from './modules/FirstContactPageForm';

export default function FirstContactPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1400px] mx-auto w-[95%] py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
          {t('contact.FirstContactPage.title')}
        </h2>
        <p className="text-gray-600 text-lg">
          {t('contact.FirstContactPage.subtitle')}
        </p>
      </div>
      
      <FirstContactPageForm />
    </div>
  );
}
