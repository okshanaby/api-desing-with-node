import jwt from "jsonwebtoken";

const createToken = user => {
  const token = jwt.sign(
    { id: user.id, name: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

import { NextFunction, Request, Response } from "express";

export const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers["authorization"];

  if (!bearer) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }
};
