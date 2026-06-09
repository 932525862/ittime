import React from 'react';
import './style.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StatCounter from './modules/StatCounter';
import FeatureCard from './modules/FeatureCard';
import AdvantageCard from './modules/AdvantageCard';
import { features, stats, advantages, values } from './services/aboutData';

const FirstAboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section">
      <div className="about-container overflow-hidden">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="year-badge">
            <FaCalendarAlt className="mr-2" />
            {t('about.FirstAboutPage.header.yearBadge')}
          </div>
          <h1 className="about-title">{t('about.FirstAboutPage.header.title')}</h1>
          <p className="about-subtitle">
            {t('about.FirstAboutPage.header.subtitle')}
          </p>
          <p className="about-description">
            {t('about.FirstAboutPage.header.description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
            
              key={index}
              Icon={feature.Icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">
                  <StatCounter 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix} 
                  />
                </div>
                <div className="stat-label">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div 
          className="advantages-section my-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="values-title">
            {t('about.FirstAboutPage.advantages.sectionTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <AdvantageCard 
                key={index}
                emoji={advantage.emoji}
                title={t(advantage.titleKey)}
                description={t(advantage.descriptionKey)}
              />
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="values-title">{t('about.FirstAboutPage.values.sectionTitle')}</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <FeatureCard 
                key={index}
                Icon={value.Icon}
                title={t(value.titleKey)}
                description={t(value.descriptionKey)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAboutPage;
