import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim() // Removes leading and trailing whitespace
    .min(1, "Name is required")
    .pipe(z.string().min(2, "Name must be at least 2 characters")), // Runs another validation only if the previous one passed

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.string().email("Please enter a valid email address")),

  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .pipe(z.string().min(3, "Subject must be at least 3 characters")),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .pipe(z.string().min(10, "Message must be at least 10 characters")),
});