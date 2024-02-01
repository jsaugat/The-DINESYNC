import express from 'express';
import { loginUser, signupUser } from "../controllers/user.controller.js" // controlers

const router = express.Router(); 
//? login route - POST request
router.post("/login", loginUser)
//? signup route - POST request 
router.post("/signup", signupUser)

export default router;