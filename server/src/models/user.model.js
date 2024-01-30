import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"; // to hash passwords in db to prevent loss if data breach.
import validator from "validator";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String, // encrypted String to prevent leaking // todo: encryption without issues
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


//? signup validator - static signup method, use it as User.signup() in user.controller
userSchema.statics.signup = async function (email, password) {
  
  //* validation >>>>>
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  // check if the email exists already
  const exists = await this.findOne({ email }); // this references the model, "User", here.
  if (exists) {
    throw Error("Email already in use");
  }
  //* <<<< validation
  // no access of 'res' here so used Error instead
  
  // add salt
  const salt = await bcrypt.genSalt(10); // 10 rounds or cost of salt
  // hash the 'password + salt'
  const hash = await bcrypt.hash(password, salt);
  // create new user document in db
  const user = await this.create({ email, password: hash });
  return user;
};

//? login validator - staitc login method.
userSchema.statics.login = async function (email, password) {

  //* validation >>>>>
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }
  //* <<<< validation

  const foundUser = await this.findOne({email})
  if(!foundUser){
    throw Error("Incorrect email")
  }
  // pwd are hashed not plain string so use 'bcrypt'
  const match = await bcrypt.compare(password, foundUser.password); // (password, hashedPassword) basically
  
  if(!match){
    throw Error("Invalid password")
  }
  return foundUser

}
const User = model("User", userSchema);

export { User };
