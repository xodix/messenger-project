import jwt from "jsonwebtoken";
import config from "../config";

export default (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) return res.status(400).json("no authentication header");
  try {
    const x: { id: string } = jwt.verify(
      token,
      config.JWT_SECRET as string
    ) as { id: string };
    req.id = x.id;
    next();
  } catch (err) {
    res.status(400).json("Token is not falid");
  }
};
