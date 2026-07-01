import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Minimum 3 characters"),

    email: z
      .string()
      .email("Invalid Email"),

    password: z
      .string()
      .min(8, "Minimum 8 characters"),

    confirmPassword: z.string(),
  })

  .superRefine((data, ctx) => {
    if (
      data.password !==
      data.confirmPassword
    ) {
      ctx.addIssue({
        code: "custom",

        path: ["confirmPassword"],

        message:
          "Passwords do not match",
      });
    }
  });

export type SignupForms =
  z.infer<typeof signupSchema>;