import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'min')
    .max(50, 'max')
    .nonempty('required'),
  course: z
    .string()
    .nonempty('required'),
  phone: z
    .string()
    .regex(/^\+998\d{9}$/, 'invalid')
    .nonempty('required')
});

export const defaultErrors = {
  name: '',
  course: '',
  phone: ''
};
