import { verify } from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
  // console.log(req);
  const token =
    req && req.body && (req.body.token || req.query.token || req.headers["authorization"]);

  if (!token) {
    return res.status(201).json({
      message: "A token is required for authentication",
    });
  }
  try {
    const decoded = verify(token, config.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(201).json({
      message: "Invalid Token",
    });;
  }
  return next(req.user);
};

export default verifyToken;