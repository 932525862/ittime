import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomModal from '../../../../ui/CustomModal/CustomModal';
import './styles.css';

const EighthSalePage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="sale-section">
      <div className="sale-container overflow-hidden">
        <div className="sale-image">
          <img
            src="https://i.pinimg.com/originals/23/bb/ff/23bbff5b10f1baee12dba6be34665dea.jpg"
            alt="Students Learning Together"
          />
          <div className="sale-badge">
            <div className="badge-inner">
              <span className="badge-label">{t('home.EighthSalePage.badge.label')}</span>
              <span className="badge-text">{t('home.EighthSalePage.badge.amount')}</span>
              <span className="badge-currency">{t('home.EighthSalePage.badge.currency')}</span>
            </div>
          </div>
          <div className="sale-overlay"></div>
        </div>
        <div className="sale-content">
          <div className="sale-header">
            <span className="sale-label"> {t('home.EighthSalePage.offer.label')}</span>
            <h2 className="sale-title" data-aos="zoom-out-up" data-aos-offset="50">
              {t('home.EighthSalePage.offer.title.part1')}<br/>
              <span className="highlight" >{t('home.EighthSalePage.offer.title.highlight')}</span> {t('home.EighthSalePage.offer.title.part2')}
            </h2>
          </div>
          <div className="sale-info" data-aos="zoom-out-up" data-aos-offset="50">
            <p className="sale-description">
              {t('home.EighthSalePage.content.description')}
            </p>
            <ul className="sale-benefits">
              <li>✅ 💰 {t('home.EighthSalePage.content.benefits.reward')}</li>
              <li>✅ 🎓 {t('home.EighthSalePage.content.benefits.discount')}</li>
              <li>✅ 🚀 {t('home.EighthSalePage.content.benefits.mentors')}</li>
              <li>✅ ✨ {t('home.EighthSalePage.content.benefits.skills')}</li>
            </ul>
            <div className="sale-action">
              <button className="sale-button" onClick={handleOpenModal}>
                {t('buttons.details')}
                <span className="button-arrow">⟶</span>
              </button>
              <p className="action-note">{t('home.EighthSalePage.content.action.note')}</p>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={t('modal.promotion.title')}
        description={t('modal.promotion.subtitle')}
      >
        <div className="modal-content">
          <p style={{ marginBottom: '15px' }}>
            {t('modal.promotion.conditions.title')}
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            margin: '0 0 20px 0'
          }}>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('modal.promotion.conditions.student')}
            </li>
            <li style={{ 
              marginBottom: '10px',
              paddingLeft: '25px',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute',
                left: '0',
                color: '#4CAF50'
              }}>✓</span>
              {t('modal.promotion.conditions.invite')}
            </li>
          </ul>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <p style={{ 
              color: '#2196F3',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              {t('modal.promotion.benefits.title')}
            </p>
            <ul style={{ 
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ 
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>💰</span> {t('modal.promotion.benefits.yourBonus')}
              </li>
              <li style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🎁</span> {t('modal.promotion.benefits.friendBonus')}
              </li>
            </ul>
          </div>
          <p style={{ 
            fontSize: '14px',
            color: '#666',
            fontStyle: 'italic',
            margin: '0'
          }}>
            {t('modal.promotion.note')}
          </p>
        </div>
      </CustomModal>
    </section>
  );
};

export default EighthSalePage;
