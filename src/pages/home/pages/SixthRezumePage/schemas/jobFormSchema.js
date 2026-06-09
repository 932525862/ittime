import { z } from 'zod';

export const defaultErrors = {
  fullName: '',
  phone: '',
  email: '',
  education: '',
  experience: '',
  skills: '',
  resume: ''
};

export const jobFormSchema = z.object({
  fullName: z.string()
    .nonempty('Ismingizni yozishingiz shart')
    .min(2, "Ismingiz kamida 2 ta belgidan iborat bo'lishi kerak")
    .max(50, "Ismingiz 50 ta belgidan oshmasligi kerak"),
  phone: z.string()
    .nonempty('Telefon raqamingizni yozishingiz shart')
    .regex(/^\+998\d{9}$/, "Telefon raqamingiz +998 XX XXX XX XX formatida bo'lishi kerak"),
  email: z.string()
    .nonempty('Email manzilingizni yozishingiz shart')
    .email('Email manzilingiz noto\'g\'ri formatda'),
  education: z.string()
    .nonempty("Ma'lumotingizni yozishingiz shart")
    .min(10, "Ma'lumotingiz haqida kamida 10 ta belgi kiriting")
    .max(500, "Ma'lumotingiz haqida 500 ta belgidan oshmasligi kerak"),
  experience: z.string()
    .nonempty('Ish tajribangizni yozishingiz shart')
    .min(10, 'Ish tajribangiz haqida kamida 10 ta belgi kiriting')
    .max(1000, "Ish tajribangiz 1000 ta belgidan oshmasligi kerak"),
  skills: z.string()
    .nonempty('Ko\'nikmalaringizni yozishingiz shart')
    .min(5, "Ko'nikmalaringiz haqida kamida 5 ta belgi kiriting")
    .max(500, "Ko'nikmalaringiz 500 ta belgidan oshmasligi kerak"),
  resume: z.custom((data) => {
    // Проверяем наличие файла
    if (!data || !(data instanceof File)) {
      throw new Error('Rezyume faylingizni yuklashingiz shart');
    }

    // Проверяем тип файла
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(data.type)) {
      throw new Error('Faqat PDF yoki Word (doc, docx) formatidagi fayllarni yuklashingiz mumkin');
    }

    // Проверяем размер файла (5MB)
    if (data.size > 5 * 1024 * 1024) {
      throw new Error('Fayl hajmi 5MB dan oshmasligi kerak');
    }

    return true;
  })
});
