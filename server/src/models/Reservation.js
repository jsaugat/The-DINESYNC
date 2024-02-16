import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Time in HH:MM format
    required: true,
  },
  partySize: {
    type: Number,
    min: 1,
    max: 8, // Adjust max value as needed
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  specialRequests: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Reservation", reservationSchema);
