import asyncHandler from "express-async-handler";
import User from "../models/User";
import generateToken from "../utils/generateToken.js";

/**
 *  @desc    Auth user & get token
 *  @route   POST /api/auth
 *  @access  Public
 */
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body; // from react form
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
  const { name, email, password } = req.body;
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

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
