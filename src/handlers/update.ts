import prisma from "../modules/db";

export const getAllUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, currentProduct) => {
    return [...allUpdates, ...currentProduct.updates];
  }, []);

  res.json({ data: updates });
};

export const getUpdateById = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

// export const createUpdate = async(req, res)=> {
//   const newUpdate = await prisma.update.create({
//     data: {
//       title: req.body.title as string,
//       body: req.body.body as string
//     }
//   })
// }