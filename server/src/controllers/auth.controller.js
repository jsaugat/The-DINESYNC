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

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
}