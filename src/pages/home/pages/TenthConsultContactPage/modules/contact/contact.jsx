import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaTelegram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
      <div className="max-w-[1200px] mx-auto w-[90%] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8">
          {/* Contact Info Section */}
          <div className="bg-white/90 p-6 rounded-2xl shadow-lg border border-white/50 h-[400px] flex flex-col" data-aos="fade-right" data-aos-offset="50">
            <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4 relative inline-block flex-shrink-0">
              {t('home.TenthConsultContactPage.contact.title')}
              <span className="absolute bottom-[-6px] left-0 w-12 h-0.5 bg-gradient-to-r from-[#dc2626] to-[#ef4444]"></span>
            </h2>

            <div className="space-y-3 overflow-y-auto flex-grow pr-2">
              <a href="https://t.me/it_time" className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaTelegram className="text-base text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#1a1a1a]">{t('home.TenthConsultContactPage.contact.telegram.title')}</h3>
                    <p className="text-[#666] text-xs">{t('home.TenthConsultContactPage.contact.telegram.value')}</p>
                  </div>
                </div>
              </a>

              <a href="tel:+998947820092" className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="text-base text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#1a1a1a]">{t('home.TenthConsultContactPage.contact.phone.title')}</h3>
                    <p className="text-[#666] text-xs">{t('home.TenthConsultContactPage.contact.phone.value')}</p>
                  </div>
                </div>
              </a>

              <a href="mailto:ittimeacademy@gmail.com" className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-base text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#1a1a1a]">{t('home.TenthConsultContactPage.contact.email.title')}</h3>
                    <p className="text-[#666] text-xs">{t('home.TenthConsultContactPage.contact.email.value')}</p>
                  </div>
                </div>
              </a>

              <a href="https://www.google.com/maps/place/41%C2%B020'20.4%22N+69%C2%B017'07.2%22E/@41.338997,69.28534,16z/data=!4m4!3m3!8m2!3d41.338997!4d69.28534?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" className="group block p-2.5 bg-[#f8faff] rounded-xl hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#dc2626] to-[#ef4444] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-base text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#1a1a1a]">{t('home.TenthConsultContactPage.contact.address.title')}</h3>
                    <p className="text-[#666] text-xs">{t('home.TenthConsultContactPage.contact.address.value')}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white/90 rounded-2xl overflow-hidden shadow-lg border border-white/50 h-[400px]" data-aos="fade-left" data-aos-offset="50">
     

            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.228851155584!2d69.28534!3d41.338997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzIwLjQiTiA2OcKwMTcnMDcuMiJF!5e0!3m2!1sru!2s!4v1733551675958!5m2!1sru!2s" 
            className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            > </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
