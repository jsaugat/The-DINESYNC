// seed-table-data.js
import mongoose from "mongoose";
import Table from "../models/Table.js";
import dotenv from "dotenv";
dotenv.config();

export const tablesData = [
  { number: 1, capacity: 4, isAvailable: true },
  { number: 2, capacity: 4, isAvailable: true },
  { number: 3, capacity: 4, isAvailable: true },

  { number: 4, capacity: 2, isAvailable: true },
  { number: 5, capacity: 2, isAvailable: true },
  { number: 6, capacity: 2, isAvailable: true },
  { number: 7, capacity: 2, isAvailable: true },

  { number: 8, capacity: 6, isAvailable: true },
  { number: 9, capacity: 6, isAvailable: true },

  { number: 10, capacity: 8, isAvailable: true },
  { number: 11, capacity: 8, isAvailable: true },
  { number: 12, capacity: 8, isAvailable: true },
];

//? Function to seed tables with a Tables Data
const seedTables = async (tablesData) => {
  try {
    // Clear existing data (optional)
    await Table.deleteMany({});

    // Seed tables with pre-defined data
    await Table.insertMany(tablesData);

    console.log(`${tablesData.length} tables seeded successfully.`);
  } catch (error) {
    console.error("Error seeding tables:", error);
  } finally {
    // Close the connection after seeding
    mongoose.disconnect();
    console.log("MONGODB Disconnected");
  }
};

//? Connect to the database
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("SEED: MongoDB connected");
  await seedTables(tableData);
  await mongoose.disconnect();
} catch (error) {
  console.error("SEED: MongoDB connection error:", error);
}
