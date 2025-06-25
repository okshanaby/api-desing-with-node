import { createToken, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

const createUser = async (req, res) => {
  const password = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password,
    },
  });

  const token = createToken(user);

  res.status(201);
  res.json({ token, message: "User created" });
};
