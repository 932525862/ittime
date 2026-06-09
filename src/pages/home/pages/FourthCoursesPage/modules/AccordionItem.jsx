import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';

const AccordionItem = ({ title, items, isOpen, onClick }) => {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${isOpen ? 'open' : ''}`}
      initial={false}
      animate={{ backgroundColor: isOpen ? '#ffffff' : '#f8fafc' }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full p-5 flex justify-between items-center bg-red-600 text-white border-none cursor-pointer text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        data-aos="fade-right" 
        data-aos-offset="100"
      >
        <motion.span className="text-white font-semibold">{title}</motion.span>
        <motion.span
          className="text-2xl text-white transition-transform duration-300"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {items.map((item, index) => (
                <CourseCard key={index} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
