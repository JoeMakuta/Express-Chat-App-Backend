import jwt from "jsonwebtoken";

const { PAYLOAD } = process.env;

const generateToken = (userId, expiresIn) => {
  return jwt.sign(userId, PAYLOAD, expiresIn);
};

export default generateToken;
