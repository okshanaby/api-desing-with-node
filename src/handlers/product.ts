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
