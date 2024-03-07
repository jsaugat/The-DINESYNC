import mongoose from "mongoose";

export const reservationSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // table: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Table",
    //   required: true,
    // },
    // date: {
    //   type: Date,
    //   required: true,
    // },
    // time: {
    //   type: String, // Time in HH:MM format
    //   required: true,
    // },
    // partySize: {
    //   type: Number,
    //   min: 2,
    //   max: 8, // Adjust max value as needed
    //   required: true,
    // },
    // status: {
    //   type: String,
    //   enum: ["Pending", "Confirmed", "Cancelled"],
    //   default: "Pending",
    // }
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
