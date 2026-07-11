import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Enter your name").max(80, "Enter a valid name"),
  email: z.email("Enter a valid email"),
  request: z
    .string()
    .min(1, "Tell us what you need")
    .max(200, "Use 200 characters or fewer"),
});

export type Lead = z.infer<typeof leadSchema>;
