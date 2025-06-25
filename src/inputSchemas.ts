import { z } from "zod";

export const updateProductSchema = z.object({
  name: z.string({ required_error: "Enter product name" }),
  // password: z.string({ required_error: 'Password is required' })
  // .min(6, 'Password must be at least 6 characters long'),
});

export const postProductSchema = z.object({
  name: z.string({ required_error: "Enter product name" }),
});

enum Status {
  IN_PROGRESS = "IN_PROGRESS",
  SHIPPED = "SHIPPED",
  DEPRECATED = "DEPRECATED",
}

export const updateUpdateSchema = z.object({
  title: z.string().optional(),
  body: z.string().optional(),
  status: z.nativeEnum(Status).optional(),
  version: z.string().optional(),
});

export const postUpdateSchema = z.object({
  title: z.string({ required_error: "Enter update title" }),
  body: z.string({ required_error: "Enter update body" }),
  version: z.string().optional(),
});

export const postUpdatePointSchema = z.object({
  name: z.string({ required_error: "Enter updatePoint name" }),
  description: z.string({ required_error: "Enter updatePoint description" }),
  updateId: z.string({ required_error: "Enter updatePoint updateId" }),
});

export const updateUpdatePointSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});
