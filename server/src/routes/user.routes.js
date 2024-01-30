import express from 'express';
const router = express.Router();
// controlers
import { loginUser, signupUser } from "../controllers/user.controller.js"
 
//? login route - POST request
router.post("/login", loginUser)

//? signup route - POST request 
router.post("/signup", signupUser)

export default router;