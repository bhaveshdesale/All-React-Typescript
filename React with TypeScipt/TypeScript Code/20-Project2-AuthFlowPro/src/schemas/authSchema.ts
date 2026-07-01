import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(3, "First name must be at least 3 characters")
      .max(30, "First name cannot exceed 30 characters"),

    lastName: z
      .string()
      .min(3, "Last name must be at least 3 characters")
      .max(30, "Last name cannot exceed 30 characters"),

    email: z.string().email("Invalid email address"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })

  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });
export const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email address"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;

export type SignupFormData = z.infer<typeof signupSchema>;
