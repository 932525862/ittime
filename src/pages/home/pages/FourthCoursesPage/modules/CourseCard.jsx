import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ item, index }) => {
  return (
    <motion.div
      className="bg-slate-50 p-6 rounded-xl transition-all duration-300 text-center relative overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:bg-white"
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, 1, -1, 0],
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-5xl mb-4">{item.icon}</div>
      <h3 className="text-blue-800 mb-3 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
    </motion.div>
  );
};

export default CourseCard;
