import React from 'react';
import { motion } from 'framer-motion';
import './textAnimations.css'

export default function TextAnimations() {
  // Текст, который мы будем анимировать
  const text = "Tajribaga asoslangan ishonchli kelajak";

  // Разделяем текст на две части для вставки <br />
  const part1 = "Tajribaga asoslangan";
  const part2 = "ishonchli kelajak";

  // Варианты анимации для контейнера
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Варианты анимации для каждого символа
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,

      },
    },
  };

  // Функция для отображения текста с учетом пробелов
  const renderText = (text, highlightStart, highlightEnd) => {
    return text.split("").map((char, index) => {
      const isRed = index >= highlightStart && index < highlightEnd;
      return (
        <motion.span
          key={index}
          variants={letterVariants}
          className={isRed ? 'red-text' : 'black-text'}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <motion.div
      className="text-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Анимация первой части текста */}
      <div className="text-line">
        {renderText(part1, 0, 0)}
      </div>

      {/* Анимация второй части текста */}
      <div className="text-line second-line">
        {renderText(part2, 0, 9)}
      </div>
    </motion.div>
  );
}