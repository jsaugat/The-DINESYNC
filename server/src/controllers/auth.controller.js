import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    // passing an object in create() instead of req.body, for encryting password later
    const newUser = await User.create({
      username,
      email,
      password: hash,
    });
    res.status(201).json({ "new user created": newUser });
  } catch (err) {
    next(err);
  }
};
