import mongoose from "mongoose";
import { Schema } from "mongoose";
import { reservationSchema } from "./Reservation.js";

export const tableSchema = new Schema(
  {
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    reservation: {
      required: false, // 1:18:53 in lama dev
      type: reservationSchema,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;
