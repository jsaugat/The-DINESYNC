import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  //? step 1: check for available token in req cookie
  const token = req.cookies.access_token;
  // if token doesn't exist inside request cookies
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  //? step 2: proceed to verify the token if it exists
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(createError(403), "Invalid Token");
    req.user = user;
    next(); // go to next middleware ie. "you are logged in" sender
  });
};
