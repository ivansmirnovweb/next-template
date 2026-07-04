import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Введите имя").max(20, "Введите валдиное имя"),
  email: z.email("Введите валидный email"),
  request: z
    .string()
    .min(1, "Введите Ваш запрос")
    .max(200, "Максимум 200 символов"),
});

export type Lead = z.infer<typeof leadSchema>;
