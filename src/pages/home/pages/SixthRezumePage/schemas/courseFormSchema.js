import { z } from 'zod';
import i18next from 'i18next';

export const defaultErrors = {
  fullName: '',
  phone: '',
  courseType: '',
  message: ''
};

export const courseFormSchema = z.object({
  fullName: z.string()
    .min(2, { message: () => i18next.t('home.SixthRezumePage.forms.errors.required') })
    .max(50),
  phone: z.string()
    .min(13, { message: () => i18next.t('home.SixthRezumePage.forms.errors.invalidPhone') })
    .max(13)
    .regex(/^\+998\d{9}$/, { message: () => i18next.t('home.SixthRezumePage.forms.errors.invalidPhone') }),
  courseType: z.string()
    .min(1, { message: () => i18next.t('home.SixthRezumePage.forms.errors.required') })
    .refine(val => ['frontend', 'backend', 'mobile'].includes(val), {
      message: () => i18next.t('home.SixthRezumePage.forms.errors.invalidCourseType')
    }),
  message: z.string()
    .min(1, { message: () => i18next.t('home.SixthRezumePage.forms.errors.required') })
    .max(500)
    .optional()
    .or(z.literal(''))
});
