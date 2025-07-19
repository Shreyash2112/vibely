import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 3 characters long" }),
  username: z
    .string()
    .min(2, { message: "Userame must be at least 3 characters long" }),
  email: z.email({
    pattern: z.regexes.html5Email,
    message: "Invalid email format. Please enter a valid email address",
  }),
  password: z
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        "Password must be at least 8 characters long, include a number, and a mix of uppercase and lowercase letters with a special character.",
    }),
});
