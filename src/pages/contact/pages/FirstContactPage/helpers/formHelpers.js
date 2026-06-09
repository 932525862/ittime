import { formSchema, defaultErrors } from '../schemas/formSchema';
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

export const handleFormSubmit = async (e, formData, setErrors, setShowModal, setFormData) => {
  e.preventDefault();
  
  try {
    // Валидируем данные через Zod
    formSchema.parse(formData);
    
    // Очищаем ошибки если валидация прошла успешно
    setErrors(defaultErrors);

    // Формируем сообщение для Telegram
    const fullMessage = `ALOQAGA CHIQISH: Ismi: ${formData.name} Telefon: ${formData.phone}`;

    // Отправляем сообщение в Telegram
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
    
    // Показываем модальное окно
    setShowModal(true);
    
    // Через 2 секунды закрываем модальное окно и очищаем форму
    setTimeout(() => {
      setShowModal(false);
      // Сбрасываем форму к начальным значениям
      setFormData({
        name: '',
        phone: '+998'
      });
      // Сбрасываем ошибки
      setErrors(defaultErrors);
    }, 2000);

  } catch (error) {
    // Если есть ошибки валидации, показываем их
    if (error.errors) {
      const formErrors = {};
      error.errors.forEach((err) => {
        formErrors[err.path[0]] = err.message;
      });
      setErrors(formErrors);
    }
  }
};
