import * as z from "zod";
import { passwordRegex } from "./Regex";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
    }),
  // confirmPassword: z
  //   .string()
  //   .min(1, { message: "Confirm Password is required" }),
});
export const signUpSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "First name is required",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required",
    }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine(
    (value) => {
      return value.password.trim() === value.confirmPassword.trim();
    },
    {
      message: "Password must match !",
      path: ["confirmPassword"],
    }
  );

export const emailFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});

export const restPasswordFormSchema = z
  .object({
    password: z.string().refine((password) => passwordRegex.test(password), {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It should be at least 8 characters long.",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine(
    (value) => {
      return value.password.trim() === value.confirmPassword.trim();
    },
    {
      message: "Password must match !",
      path: ["confirmPassword"],
    }
  );

export const profileSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),

  userType: z.string().min(1, {
    message: "User Type is required",
  }),

  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});

export const couponSchema = z.object({
  couponCode: z.string().min(1, {
    message: "Coupon code is required",
  }),
  discountPercentage: z
    .string()
    .min(2, "Discount percentage is required")
    .max(5, "maximum value is 100%")
    .refine(
      (value) => {
        const regex = /^[0-9]+(\.[0-9]+)?$/;
        return regex.test(value);
      },
      {
        message: "Invalid percentage provided",
      }
    ),

  validityDate: z.date(),
});
