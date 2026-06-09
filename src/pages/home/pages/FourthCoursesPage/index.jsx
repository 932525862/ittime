import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { coursesData } from './services/coursesData';
import AccordionItem from './modules/AccordionItem';
import { useTranslation } from 'react-i18next';
// import EleventhCoursesPage from '../EleventhCoursesPage';

const FourthCoursesPage = () => {
  const [openSection, setOpenSection] = useState(null);
  const { t } = useTranslation();

  const handleClick = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto py-16 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-center text-[40px] mb-10 text-gray-800 font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('home.FourthCoursesPage.title')}
        </motion.h2>
        <motion.div className="flex flex-col gap-4">
          {Object.entries(coursesData).map(([title, items], index) => (
            <motion.div
              key={title}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AccordionItem
                title={t(`home.FourthCoursesPage.${title}`)}
                items={items.map((item, itemIndex) => ({
                  name: t(`home.FourthCoursesPage.courses.${title.toLowerCase()}.${itemIndex}.name`),
                  description: t(`home.FourthCoursesPage.courses.${title.toLowerCase()}.${itemIndex}.description`),
                  icon: item.icon
                }))}
                isOpen={openSection === title}
                onClick={() => handleClick(title)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default FourthCoursesPage;
