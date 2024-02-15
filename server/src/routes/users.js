import express from "express";
import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js"
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// TOKEN VERIFICATION
router.get("/authenticate", verifyToken, (req, res, next) => {
  res.send("You are logged in. congrats !");
});
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getUsers);
// UPDATE, with id
router.put("/:id", updateUser);
// todo: when we put request with id param and update its username, we wanna verify jwt before that.
// DELETE
router.delete("/:id", deleteUser);

export default router;
