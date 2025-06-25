import { comparePassword, createToken, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

export const createUser = async (req, res) => {
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

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValidUser = await comparePassword(req.body.password, user.password);

  if (!isValidUser) {
    res.status(401);
    res.json({ message: "Invalid password or username" });
  }

  const token = createToken(user);

  res.status(200);
  res.json({ token, message: "Welcome back, " + user.username });
};
