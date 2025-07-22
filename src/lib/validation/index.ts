import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 3 characters long" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 3 characters long" }),
  email: z.email({
    pattern: z.regexes.html5Email,
    message: "Invalid email format. Please enter a valid email address",
  }),
  password: z
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message: "Invalid password",
    }),
});

export const SigninValidation = z.object({
  email: z.email({
    pattern: z.regexes.html5Email,
    message: "Invalid email format. Please enter a valid email address",
  }),
  password: z
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message: "Invalid password",
    }),
});

export const PostFormValidation = z.object({
  caption: z.string().min(2).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
