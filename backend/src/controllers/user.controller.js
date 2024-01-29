import { User } from "../models/user.model.js"; // for User.signup() static method
import jwt from "jsonwebtoken";

// param _id is gonna be part of the payload of the token.
const createToken = (_id) => {
  // jwt.sign(payload, secret, option)
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//? LOGIN user
const loginUser = async (req, res) => {
  // async because, we'll communicate with db here
  res.json(req.method);
};

//? SIGNUP user
const signupUser = async (req, res) => {
  // retrieve email and pwd from the client request body
  const { email, password } = req.body;
  // pass the retrieved email and pwd to the signup validator to 'backend\src\models\user.model.js'
  const user = User.signup(email, password); 
  //! client req > validation > return { email, hashedPassword } as 'user'
  user
    .then((user) => {
      // create a token
      const token = createToken(user._id);
      res.status(200).json({ email, token });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

export { loginUser, signupUser };
