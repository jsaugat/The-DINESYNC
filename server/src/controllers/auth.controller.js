//
// ? User Login and Registration with bcrypt hashed password
//
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// signing token refers to process of applying a digital signature to the token.
const createToken = (_id, isAdmin) => {
  return jwt.sign(
    { _id, isAdmin }, // payload
    process.env.JWT_SECRET_KEY, // secret
    { expiresIn: "1d" } // options
  );
};

// LOGIN
export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
  //? step 1 : Find user
    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));

  //? step 2 : Verify password (if user is found)
    const isPasswordCorrect = await bcrypt.compare(password, user.password); // compare(password, user.hash)
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));

  //? step 3 : Create a JWT for user authentication with a one-day expiration,
    const token = createToken(user._id, user.isAdmin);

    // rename password to userPassword to prevent error as password already destructured above
    // exclude isAdmin and password in the response for safety against potential hackers.
    const { password: userPassword, ...otherDetails } = user._doc;

  //? step 4 : Set HTTP-only cookie w/ the generated token value
    res
     .cookie("access_token", token, { httpOnly: true }) // set cookie(name, value, options)
     .status(200)
     .json({ ...otherDetails });
  } 
  catch (err) {
    next(err);
  }
};

// SIGNUP
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    // passing an object in create() instead of req.body, for encrypting password later
    const newUser = await User.create({
      username,
      email,
      password: hash,
    });
    res.status(201).json({ newUser });
  } catch (err) {
    next(err);
  }
};

/*
 * NOTE: LOGIN
   This code implements a standard user login flow with JWT generation and sets an HTTP-only cookie for subsequent authenticated requests. The cookie ensures that the JWT is securely transmitted between the client and the server.
 */
