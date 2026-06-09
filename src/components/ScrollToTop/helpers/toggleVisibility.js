// Показывать кнопку только после прокрутки на 300px
export const toggleVisibility = (setIsVisible) => {
  if (window.pageYOffset > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};
