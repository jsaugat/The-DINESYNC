import mongoose from "mongoose";
import { Schema } from "mongoose";
import { reservationSchema } from "./Reservation.js";

export const tableSchema = new Schema(
  {
    number: Number,
    capacity: Number,
    isAvailable: Boolean,
    reservation: {
      required: false, 
      type: reservationSchema,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;
