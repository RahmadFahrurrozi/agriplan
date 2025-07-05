import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  name: z.string().min(1, "Name is required"),
  age: z.coerce
    .number()
    .min(15, "age to low")
    .max(80, "age to high")
    .optional(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export default registerSchema;

export type registerSchemaType = z.infer<typeof registerSchema>;
