import jwt from "jsonwebtoken";

const { PAYLOAD } = process.env;

const tokenAuth = (req, res, next) => {
  try {
    const sentToken = req.headers.authorization.split(" ")[1];
    const payLoad = jwt.verify(sentToken, PAYLOAD);
    req.auth = {
      userId: payLoad.userId,
    };
    next();
  } catch (err) {
    res.status(401).json({ message: err.message, err: err.stack });
  }
};

export default tokenAuth;
