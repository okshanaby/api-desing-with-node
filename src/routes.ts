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

import {
  postProductSchema,
  postUpdatePointSchema,
  postUpdateSchema,
  updateProductSchema,
  updateUpdatePointSchema,
  updateUpdateSchema,
} from "./inputSchemas";
import { inputValidator } from "./middleware";

const router = Router();

// PRODUCT ROUTES
router.get("/product", (req, res) => {
  res.json({ message: "Hello from router" });
});

router.post("/product", inputValidator(postProductSchema), (req, res) => {
  res.json({ message: "POST CREATE PRODUCT handler" });
});

router.get("/product/:id", (req, res) => {});

router.put("/product/:id", inputValidator(updateProductSchema), (req, res) => {
  res.json({ message: "PUT UPDATE PRODUCT handler" });
});

router.delete("/product/:id", (req, res) => {});

// UPDATE ROUTES
router.get("/update", (req, res) => {});
router.post("/update", inputValidator(postUpdateSchema), (req, res) => {
  res.json({ message: "POST CREATE UPDATE handler" });
});
router.get("/update/:id", (req, res) => {});

router.put("/update/:id", inputValidator(updateUpdateSchema), (req, res) => {
  res.json({ message: "PUT UPDATE UPDATE handler" });
});

router.delete("/update/:id", (req, res) => {});

// UPDATEPOINT ROUTES
router.get("/updatepoint", (req, res) => {});
router.post(
  "/updatepoint",
  inputValidator(postUpdatePointSchema),
  (req, res) => {
    res.json({ message: "POST CREATE UPDATE POINT handler" });
  }
);
router.get("/updatepoint/:id", (req, res) => {});
router.put(
  "/updatepoint/:id",
  inputValidator(updateUpdatePointSchema),
  (req, res) => {
    res.json({ message: "PUT UPDATE UPDATE POINT handler" });
  }
);
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
