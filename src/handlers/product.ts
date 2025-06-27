import prisma from "../modules/db";

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  // const products = await prisma.product.findMany()
  console.log("🚀 ~ getAllProducts ~ req.user.id:", req.user.id);

  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// GET PRODUCT By ID
export const getProductById = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// CREATE PRODUCT
export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });

    res.json({ data: newProduct });
  } catch (error) {
    next(error);
  }
};

// UPDATE PRODUCT By ID
export const updateProductById = async (req, res) => {
  const updated = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updated });
};

// DELETE PRODUCT By ID
export const deleteProductById = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: null, message: "Deleted" });
};
