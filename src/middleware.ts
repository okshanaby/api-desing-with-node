import { z } from "zod";

export const inputValidator =
  (handlerSchema: z.ZodObject<any>) => (req, res, next) => {
    const results = handlerSchema.safeParse(req.body);

    if (!results.success) {
      res.status(400).json({ errors: results.error.errors });
      return
    }

    next();
  };

// const schema = z.object({}).passthrough(); // Allows any fields

export const globalErrorHandler = (error, req, res, next) => {
  console.log("🚀 ~ app.use ~ error:", error);

  if (error.type === "input") {
    res.status(400).json({ message: "Invalid input/s", error });
  } else if (error.type === "auth") {
    res.status(401).json({ message: "Unathorized", error });
  } else {
    res.status(500).json({ message: "Sever error", error });
  }
}