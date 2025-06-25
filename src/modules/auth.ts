import jwt from "jsonwebtoken";

const createToken = user => {
  const token = jwt.sign(
    { id: user.id, name: user.username },
    process.env.JWT_SECRET
  );

  return token;
};
