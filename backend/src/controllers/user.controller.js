//import mongoose from 'mongoose'; // to interact with user's collection in db and get or create new documents
import { User } from "../models/user.model.js";

//? login user
const loginUser = async (req, res) => {
  // async because, we'll communicate with db, here
  res.json(req.method);
};

//? signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  User.signup(email, password) // 'backend\src\models\user.model.js'
    .then((user) => res.status(200).json({ email, user }))
    .catch((error) => res.status(400).json({ error: error.message }));
};

export { loginUser, signupUser };
