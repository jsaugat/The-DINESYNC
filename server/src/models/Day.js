import mongoose from "mongoose";
import { Schema } from "mongoose";
import { tableSchema } from "./Table.js";

export const daySchema = Schema({
  date: Date,
  tables: [tableSchema],
});
const Day = mongoose.model("Day", daySchema);
export default Day;