import { courseFormSchema, defaultErrors } from '../schemas/courseFormSchema';
const tgToken = import.meta.env.VITE_TG_TOKEN;
const tgChatId = import.meta.env.VITE_TG_CHATID;

export const handleCourseFormChange = (e, setFormData) => {
  const { name, value } = e.target;
  
  if (name === 'phone') {
    const phoneValue = value.startsWith('+') ? value : '+' + value;
    const sanitizedValue = phoneValue.replace(/[^\d+]/g, '').replace(/(\+.*?\+)/g, '+');
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    return;
  }
  
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

export const handleCourseFormSubmit = async (e, formData, setErrors, setShowModal, setFormData) => {
  e.preventDefault();
  
  try {
    // Валидируем данные через Zod
    const validatedData = courseFormSchema.parse(formData);
    
    // Очищаем ошибки если валидация прошла успешно
    setErrors(defaultErrors);

    const fullMessage = `KURSGA YOZIliSH: Ismi: ${formData.fullName} Telefon: ${formData.phone} Kurs: ${formData.courseType} Xabar: ${formData.message}`;
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
    
    // Показываем модальное окно
    setShowModal(true);
    
    // Через 2 секунды закрываем модальное окно и очищаем форму
    setTimeout(() => {
      setShowModal(false);
      // Сбрасываем форму к начальным значениям
      setFormData({
        fullName: '',
        phone: '+998',
        courseType: '',
        message: ''
      });
      // Сбрасываем ошибки
      setErrors(defaultErrors);
    }, 2000);

  } catch (error) {
    if (error.errors) {
      // Обработка ошибок валидации
      const formErrors = {};
      error.errors.forEach((err) => {
        formErrors[err.path[0]] = err.message;
      });
      setErrors(formErrors);
    } else {
      // Обработка ошибок отправки
      console.error("Ошибка при отправке сообщения:", error);
      setErrors({
        ...defaultErrors,
        submit: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
      });
    }
  }
};
