const jwt = require("jsonwebtoken");

const { PAYLOAD } = process.env;

const generateToken = (userId, expiresIn) => {
  return jwt.sign(userId, PAYLOAD, expiresIn);
};

module.exports = generateToken;
