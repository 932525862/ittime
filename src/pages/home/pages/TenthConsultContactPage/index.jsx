import React from 'react'
import Contact from './modules/contact/contact'
import ConsultationForm from './modules/consultationForm/consultationForm';

export default function TenthConsultContactPage() {
  return (
     <div className='consultation-container'>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~top */}
       
      <ConsultationForm/>

         {/* ~~~~~~~~~~~~~~~~~~~~~bottom */}

         <Contact/>
          
     </div>
 
  )
}
