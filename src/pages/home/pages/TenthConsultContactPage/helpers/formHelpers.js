import { formSchema, defaultErrors } from '../schemas/formSchema';
const tgToken = import.meta.env.VITE_TG_TOKEN;
const tgChatId = import.meta.env.VITE_TG_CHATID;
export const handleFormChange = (e, setFormData) => {
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

export const handleFormSubmit = async (e, formData, setErrors, setShowModal, setFormData) => {
  try {
    // Валидируем данные через Zod
    formSchema.parse(formData);
    
    // Очищаем ошибки если валидация прошла успешно
    setErrors(defaultErrors);
    
    const fullMessage = `KANSULTATSIYA: Ismi: ${formData.name} Telefon: ${formData.phone}`;
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
    
    // Показываем модальное окно
    setShowModal(true);
    
    // Через 2 секунды закрываем модальное окно и очищаем форму
    setTimeout(() => {
      setShowModal(false);
      setFormData({
        name: '',
        phone: '+998'
      });
    }, 2000);
    
  } catch (error) {
    // Обрабатываем ошибки валидации от Zod
    if (error.errors) {
      const newErrors = { ...defaultErrors };
      error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    }
  }
};
