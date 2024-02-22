import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/auth.controller.js";
import { shield } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile")
  .get(shield, getUserProfile)
  .put(shield, updateUserProfile);

export default router;
