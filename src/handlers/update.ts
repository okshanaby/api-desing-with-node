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

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: req.body.productId },
  });

  if (!product) {
    // does not belong to this user or not found
    return res.json({ message: "Nope" });
  }

  const newUpdate = await prisma.update.create({
    data: req.body,
  });

  res.json({ data: newUpdate });
};

export const updateUpdate = async (req, res) => {
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

  const match = updates.find(update => update.id === req.params.id);

  if (!match) return res.json({ message: "nope" });

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};

export const deleteUpdate = async (req, res) => {
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

  const match = updates.find(update => update.id === req.params.id);

  if (!match) return res.json({ message: "nope" });

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deletedUpdate });
};
