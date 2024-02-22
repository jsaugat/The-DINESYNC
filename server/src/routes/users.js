// import express from "express";
// import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js"
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// const router = express.Router();

// // TOKEN VERIFICATION : crucial to verify the token before allowing access to user-related routes
// // router.get("/authentication-check", verifyToken, (req, res, next) => {
// //   res.send("You are logged in.");
// // });
// //  USER VERIFICATION : verfication when we want to delete or update user data.
// // router.get("/user-check/:id", verifyUser, (req, res, next) => {
// //   res.send("Hello user! You are logged in and you can delete your account if you want.");
// // });
// //  ADMIN VERIFICATION
// // router.get("/admin-check/:id", verifyAdmin, (req, res, next) => {
// //   res.send("Hello admin! You are logged in and you can delete any account if you want.");
// // });

// // GET
// router.get("/:id", verifyUser, getUser);
// // GET ALL
// router.get("/", verifyAdmin, getUsers);
// // UPDATE
// router.put("/:id", verifyUser, updateUser);
// // todo: when we put request with id param and update its username, we wanna verify jwt before that.
// // DELETE
// router.delete("/:id", verifyUser, deleteUser);

// export default router;
