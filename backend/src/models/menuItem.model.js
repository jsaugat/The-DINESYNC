import mongoose from "mongoose";

// Define the Schema for Menu Items
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
},{ timestamps: true});

const MenuItem = mongoose.model("MenuItem", menuItemSchema)
// note: once this model is created, it automatically create a collection named "workouts" in our db.
// we can use this model methods like find, create etc to update our collection

export { MenuItem }