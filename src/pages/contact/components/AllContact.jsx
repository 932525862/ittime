import React from 'react';
import SecondContact from '../../home/pages/TenthConsultContactPage/modules/contact/contact';
import FirstContactPage from '../pages/FirstContactPage';

export default function AllContact() {
  return (
    <>
      <div className="AllContact">
        <FirstContactPage />
        <SecondContact />
      </div>
    </>
  );
}
