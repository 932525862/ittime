import { formSchema } from '../schemas/formSchema';
const tgToken = import.meta.env.VITE_TG_TOKEN;
const tgChatId = import.meta.env.VITE_TG_CHATID;

export const handleFormChange = (e, setFormData) => {
  const { name, value } = e.target;
  
  // Для поля телефона разрешаем только цифры и '+'
  if (name === 'phone') {
    // Если первый символ не '+', добавляем его
    const phoneValue = value.startsWith('+') ? value : '+' + value;
    // Удаляем все символы кроме цифр и '+' в начале
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

export const handleFormSubmit = async (e, formData, onClose, setShowModal, setFormData, setErrors) => {
  e.preventDefault();

  try {
    // Валидируем данные
    formSchema.parse(formData);
    
    // Если валидация прошла успешно, очищаем ошибки
    setErrors({
      name: '',
      course: '',
      phone: ''
    });

    // Формируем сообщение для Telegram
    const fullMessage = `ARIZA: Ismi: ${formData.name} Kurs: ${formData.course} Telefon: ${formData.phone}`;

    // Отправляем сообщение в Telegram
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
    onClose()
    // Показываем модальное окно с благодарностью
    setShowModal(true);
    
    // Очищаем форму
  
    // Закрываем модальное окно через 2 секунды
    setTimeout(() => {
      setShowModal(false);
      setFormData({
        name: '',
        course: '',
        phone: '+998'
      });
  
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
        submit: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
      });
    }
  }
};
