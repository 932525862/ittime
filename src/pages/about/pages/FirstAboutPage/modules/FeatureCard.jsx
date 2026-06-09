import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-aos="fade-left" data-aos-offset="50"
    >
      <Icon className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
