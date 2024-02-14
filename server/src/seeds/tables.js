// seed-table-data.js
import mongoose from "mongoose";
import Table from "../models/Table.js";
import dotenv from "dotenv";
dotenv.config();

// Function to generate Faker data for a single table
const tableData = [
  // Patio Tables
  { number: 1, capacity: 4, location: "patio", isReserved: false },
  { number: 2, capacity: 2, location: "patio", isReserved: false },
  { number: 3, capacity: 8, location: "patio", isReserved: false },
  { number: 4, capacity: 4, location: "patio", isReserved: false },
  { number: 5, capacity: 2, location: "patio", isReserved: false },

  // Bar Tables
  { number: 6, capacity: 8, location: "bar", isReserved: false },
  { number: 7, capacity: 4, location: "bar", isReserved: false },
  { number: 8, capacity: 2, location: "bar", isReserved: false },
  { number: 9, capacity: 4, location: "bar", isReserved: false },
  { number: 10, capacity: 8, location: "bar", isReserved: false },

  // Dining Tables
  { number: 11, capacity: 2, location: "dining", isReserved: false },
  { number: 12, capacity: 4, location: "dining", isReserved: false },
  { number: 13, capacity: 8, location: "dining", isReserved: false },
  { number: 14, capacity: 2, location: "dining", isReserved: false },
  { number: 15, capacity: 4, location: "dining", isReserved: false },
  { number: 16, capacity: 8, location: "dining", isReserved: false },
  { number: 17, capacity: 8, location: "dining", isReserved: false },
  { number: 18, capacity: 2, location: "dining", isReserved: false },
  { number: 19, capacity: 2, location: "dining", isReserved: false },
  { number: 20, capacity: 4, location: "dining", isReserved: false },
]

// Function to seed tables with a specified number of Faker-generated data
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
