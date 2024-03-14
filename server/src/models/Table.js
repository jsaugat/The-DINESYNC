import mongoose from "mongoose";
import { Schema } from "mongoose";
import { reservationSchema } from "./Reservation.js";

export const tableSchema = new Schema(
  {
    number: Number,
    capacity: Number,
    isAvailable: Boolean,
    reservation: {
      required: false, // 1:18:53 in lama dev
      type: reservationSchema,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;
