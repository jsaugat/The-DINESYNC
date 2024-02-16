import mongoose from "mongoose";
import { Schema } from "mongoose";

const tableSchema = new Schema(
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
    location: {
      type: String,
      enum: ["patio", "bar", "dining"],
      required: true,
    },
    isReserved: {
      type: Boolean,
      default: false,
    },
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId, // 1:18:53 in lama dev 
        ref: "Reservation",
      },
    ],
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;

