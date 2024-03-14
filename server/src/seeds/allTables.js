import Table from "../models/Table.js";
import { tablesData } from "./tables.js";

// Initialize the allTables array by mapping over tablesData
let allTables = tablesData
  .map((tableData) => {
    try {
      // Create a new Table instance using the Mongoose model
      return new Table(tableData);
    } catch (error) {
      // Handle any errors that occur during the creation of the Table instance
      console.error(`Error creating Table instance: ${error.message}`);
      return null; // or throw error; depending on your error handling strategy
    }
  })
  .filter((table) => table !== null); // Remove any null values from the array

// Optionally, you can check if all tables were successfully created
if (allTables.length !== tablesData.length) {
  console.warn("Not all tables were created successfully.");
}

export { allTables };
