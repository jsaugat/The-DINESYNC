import mongoose from "mongoose";

//? Order-item schema : Represents an item in a customer's food order, linking to a MenuItem.
const orderItemSchema = new mongoose.Schema({
  // establish relation with menuItem
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  quantity: { type: Number, required: true },
});

//? Order Schema : Represents a complete food order with customer details, table number, order items, total amount, and order completion status.
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  tableNumber: { type: Number, required: true },
  orderItems: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
});

const Order = mongoose.model("Order", orderSchema);

export { Order };
