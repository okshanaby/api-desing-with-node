import { Router } from "express";
// import { body, validationResult } from "express-validator";
// router.put(
//   "/product/:id",
//   body("name").isString().withMessage("Enter a product name"),
//   (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       res.status(400);
//       res.json({ errors: errors.array() });
//     }
//   }
// );

import { z } from "zod";

const updateProductSchema = z.object({
  name: z.string({ required_error: "Enter product name" }),
  // password: z.string({ required_error: 'Password is required' })
  // .min(6, 'Password must be at least 6 characters long'),
});

const router = Router();

// PRODUCT ROUTES
router.get("/product", (req, res) => {
  res.json({ message: "Hello from router" });
});
router.post("/product", (req, res) => {});
router.get("/product/:id", (req, res) => {});

router.put("/product/:id", (req, res) => {
  const results = updateProductSchema.safeParse(req.body);

  if (!results.success) {
    res.status(400);
    res.json({ errors: results.error.errors });
  }
});

router.delete("/product/:id", (req, res) => {});

// UPDATE ROUTES
router.get("/update", (req, res) => {});
router.post("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

// UPDATEPOINT ROUTES
router.get("/updatepoint", (req, res) => {});
router.post("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
