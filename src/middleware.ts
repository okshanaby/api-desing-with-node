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
