import mongoose from "mongoose";

//? Define the Schema for Table Reservation
const reservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  reservationTime: { type: Date, required: true },
  tableNumber: { type: Number, required: true },
  isConfirmed: { type: Boolean, default: false },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export { Reservation };
