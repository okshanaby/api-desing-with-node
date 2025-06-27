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
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getAllUpdates,
  getUpdateById,
  updateUpdate,
} from "./handlers/update";
import {
  postProductSchema,
  postUpdatePointSchema,
  postUpdateSchema,
  updateProductSchema,
  updateUpdatePointSchema,
  updateUpdateSchema,
} from "./inputSchemas";
import { globalErrorHandler, inputValidator } from "./middleware";

const router = Router();

// PRODUCT ROUTES
router.get("/product", getAllProducts);
router.post("/product", inputValidator(postProductSchema), createProduct);
router.get("/product/:id", getProductById);
router.put(
  "/product/:id",
  inputValidator(updateProductSchema),
  updateProductById
);
router.delete("/product/:id", deleteProductById);

// UPDATE ROUTES
router.get("/update", getAllUpdates);
router.post("/update", inputValidator(postUpdateSchema), createUpdate);
router.get("/update/:id", getUpdateById);
router.put("/update/:id", inputValidator(updateUpdateSchema), updateUpdate);
router.delete("/update/:id", deleteUpdate);

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

// router.use(globalErrorHandler);


export default router;
