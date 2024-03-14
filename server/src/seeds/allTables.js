import Table from "../models/Table.js";
import { tablesData } from "./tables.js";

let allTables = [];
tablesData.forEach(table => {
  allTables.push(new Table(table)); 
  // Creates Mongoose documents (Table instances) using the Mongoose model and pushes them into the allTables array.
});

export { allTables }