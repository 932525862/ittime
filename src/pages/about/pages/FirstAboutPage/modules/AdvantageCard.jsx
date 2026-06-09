import React from 'react';
import { motion } from 'framer-motion';

const AdvantageCard = ({ emoji, title, description }) => {
  return (
    <motion.div 
      className="advantage-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/20 hover:border-blue-500/50 transition-all"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default AdvantageCard;
