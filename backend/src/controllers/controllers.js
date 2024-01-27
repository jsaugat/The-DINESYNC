//* import MODELS to apply model METHODS like "find","create" etc...

import mongoose from "mongoose"; // used in '!mongoose.Types.ObjectId.isValid(id)'
import { MenuItem } from "../models/allModels.js";

// get menu items
const getMenu = async (req, res) => {
  const menu = await MenuItem.find({}).sort({ createdAt: -1 });
  res.status(200).json(menu);
};

// add a new menu item
const postMenuItem = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const menu = await MenuItem.create({ name, description, price }); // here we are passing an object
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a menu item
const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  try {
    // validate the req.params.id i.e. request url > ':id'
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Mongoose ObjectId" });
    }
    // wait... for document deletion
    const itemToDelete = await MenuItem.findOneAndDelete({ _id: id });
    // menu returns deleted document.
    if (!itemToDelete) {
      return res.status(404).json({ error: "No such item found" });
    }
    res.status(200).json({ deletedItem: itemToDelete }); 
    // alternative: // res.status(204).end(); //! 204 status is for successful deletion with no response body
  } catch (error) {
    console.error("Error deleting menu item:", error);
    res.status(500).json({ error: error.message });
  }
};

export { getMenu, postMenuItem, deleteMenuItem };
