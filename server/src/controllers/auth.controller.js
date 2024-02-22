import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/**
 *  @desc    Auth user & get token
 *  @route   POST /api/auth
 *  @access  Public
 */
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body; // login form
  const user = await User.findOne({ email });
  // if user exists and password matches.
  if (user && (await user.passwordMatches(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw Error("Invalid email or password");
  }
});

/**
 * @desc    Register a new user
 * @route   POST /api/users/
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body; // signup form
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  // if user is successfully created
  if (user) {
    // generate jwt and set a cookie using it
    generateToken(res, user._id);
    // send json response with user data
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**
 * @desc    Logout user
 * @route   POST /api/users/logout
 * @access  Public
 */
const logoutUser = asyncHandler(async (req, res, next) => {
  // this code clears or deletes a cookie named "jwt" by setting an empty value and an expiration date in the past. This effectively removes the cookie from the client's browser.
  res.clearCookie('jwt')
  res.status(200).json({ message: "User logged out" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  // getUserProfile,
  // updateUserProfile,
};
