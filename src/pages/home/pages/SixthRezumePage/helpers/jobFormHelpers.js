import { jobFormSchema, defaultErrors } from '../schemas/jobFormSchema';
const tgToken = import.meta.env.VITE_TG_TOKEN;
const tgChatId = import.meta.env.VITE_TG_CHATID;

export const handleJobFormChange = (e, setFormData) => {
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

export const handleJobFileChange = (e, setFormData, setFileName) => {
  const file = e.target.files[0];
  if (file) {
    // Проверяем размер файла (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Fayl hajmi 5MB dan oshmasligi kerak');
      e.target.value = ''; // Очищаем input
      return;
    }
    
    // Проверяем тип файла
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Faqat PDF va DOC/DOCX formatdagi fayllar qabul qilinadi');
      e.target.value = ''; // Очищаем input
      return;
    }
    
    console.log('File selected:', {
      name: file.name,
      type: file.type,
      size: file.size
    });

    setFileName(file.name);
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  } else {
    setFileName('');
    setFormData(prev => ({
      ...prev,
      resume: null
    }));
  }
};

export const handleJobFormSubmit = async (e, formData, setErrors, setShowModal, setFormData, setFileName) => {
  e.preventDefault();
  
  try {
    console.log('Submitting form data:', formData);
    
    // Валидируем данные через Zod
    const validatedData = jobFormSchema.parse(formData);
    console.log('Validation passed:', validatedData);
    
    // Очищаем ошибки если валидация прошла успешно
    setErrors(defaultErrors);
    
    // Формируем сообщение с информацией о кандидате
    const fullMessage = `ISHGA JOYLASHISH:\nIsmi: ${formData.fullName}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\nMa'lumoti: ${formData.education}\nTajribasi: ${formData.experience}\nKo'nikmalar: ${formData.skills}`;
    
    // Отправляем основное сообщение
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
    
    // Если есть файл резюме, отправляем его
    if (formData.resume instanceof File) {
      console.log('Sending resume file:', formData.resume.name);
      
      const formDataForFile = new FormData();
      formDataForFile.append('document', formData.resume);
      formDataForFile.append('chat_id', tgChatId);
      formDataForFile.append('caption', `Rezume: ${formData.fullName}`);
      
      const response = await fetch(`https://api.telegram.org/bot${tgToken}/sendDocument`, {
        method: 'POST',
        body: formDataForFile
      });
      
      if (!response.ok) {
        throw new Error('Failed to send resume file');
      }
      
      console.log('Resume file sent successfully');
    }
    
    // Показываем модальное окно
    setShowModal(true);
    
    // Через 2 секунды закрываем модальное окно и очищаем форму
    setTimeout(() => {
      setShowModal(false);
      // Сбрасываем форму к начальным значениям
      setFormData({
        fullName: '',
        phone: '+998',
        email: '',
        education: '',
        experience: '',
        skills: '',
        resume: null
      });
      // Сбрасываем имя файла
      setFileName('');
      // Сбрасываем ошибки
      setErrors(defaultErrors);
    }, 2000);

  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error.errors) {
      // Обработка ошибок валидации Zod
      const formErrors = { ...defaultErrors };
      error.errors.forEach((err) => {
        formErrors[err.path[0]] = err.message;
        console.log('Validation error:', err.path[0], err.message);
      });
      setErrors(formErrors);
    } else if (error.message) {
      // Если это ошибка из custom валидатора для resume
      setErrors(prev => ({
        ...prev,
        resume: error.message
      }));
    } else {
      // Обработка других ошибок
      setErrors({
        ...defaultErrors,
        submit: "Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring."
      });
    }
  }
};
