import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createToken = user => {
  const token = jwt.sign(
    { id: user.id, name: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

import { NextFunction, Request, Response } from "express";

export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers["authorization"];

  if (!bearer) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;

    next();
  } catch (error) {
    console.log("🚀 ~ error:", error);

    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }
};

export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

export const hashPassword = password => {
  return bcrypt.hash(password, 5);
};
