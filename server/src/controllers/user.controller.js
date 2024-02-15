import User from "../models/User.js";

//? GET
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//? GET ALL
const getUsers = async (_, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//? UPDATE
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } //? returns the modified document rather than the original one
      // By default, 'updatedUser' returns the original document before modifications.
      // A PUT request updates the database without providing the modified document on api endpoint.
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//? DELETE
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ "this User's been deleted --> ": deletedUser });
  } catch (error) {
    next(error);
  }
};

export { getUser, getUsers, updateUser, deleteUser };
