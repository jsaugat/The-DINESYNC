// seed-table-data.js
import mongoose from "mongoose";
import Table from "../models/Table.js";
import dotenv from "dotenv";
dotenv.config();

export const tableData = [
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
  
  // { number: 12, capacity: 4, isAvailable: true },
  // { number: 13, capacity: 8, location: "dining", isAvailable: true },
  // { number: 14, capacity: 2, location: "dining", isAvailable: true },
  // { number: 15, capacity: 4, location: "dining", isAvailable: true },
  // { number: 16, capacity: 8, location: "dining", isAvailable: true },
  // { number: 17, capacity: 6, location: "dining", isAvailable: true },
  // { number: 18, capacity: 4, location: "dining", isAvailable: true },
  // { number: 19, capacity: 6, location: "dining", isAvailable: true },
  // { number: 20, capacity: 4, location: "dining", isAvailable: true },
]

// Function to seed tables with a specified number
const seedTables = async (tableData) => {
  try {
    // Clear existing data (optional)
    await Table.deleteMany({});

    // Seed tables with pre-defined data
    await Table.insertMany(tableData);

    console.log(`${tableData.length} tables seeded successfully.`);
  } catch (error) {
    console.error('Error seeding tables:', error);
  } finally {
    // Close the connection after seeding
    mongoose.disconnect();
  }
};

// Connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('SEED: MongoDB connected');
  })
  .catch((error) => {
    console.error('SEED: MongoDB connection error:', error);
  });

// Seed tables with 15 pre-generated data
seedTables(tableData)
  .then(() => {
    // Disconnect from the database after seeding
    // mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    // mongoose.disconnect();
  });
