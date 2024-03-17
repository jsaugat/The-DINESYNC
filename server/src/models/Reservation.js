import mongoose from "mongoose";

export const reservationSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    userId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
