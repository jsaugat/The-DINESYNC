import Table from "../models/Table.js";
import Day from "../models/Day.js";
import { tableData } from "../seeds/tables.js";

// GET Available Tables
// Params for route : { data: String ("Dec 21 2012 09:00") }
const getAvailableTables = async (req, res, next) => {
  const dateTime = new Date(req.body.date);

  try {
    // Search for documents in the Day collection with the specified date
    const docs = await Day.find({ date: dateTime });

    //? If documents are found
    if (docs.length > 0) {
      console.log("Record exists. Sent docs.");
      // Send the first document as a response with a status code of 200
      res.status(200).send(docs[0]);
    } else {
      //? If no documents are found
      const day = new Day({
        date: dateTime,
        // Use predefined tableData from seeds
        tables: tableData,
      });

      // Save the new document to the database
      await day.save();
      console.log("Created new datetime. Here are the default docs.");

      // Search for the newly created document
      const newDocs = await Day.find({ date: dateTime });
      res.status(200).send(newDocs[0]); // Send the first document
    }
  } catch (err) {
    // If an error occurs during the try block, pass it to the error handling middleware
    next(err);
  }
};

// RESERVE
/**
 *  reservation @param { data, table, name, phone, email }
 */
const reserveTable = async (req, res, next) => {
  try {
    // 1. Find all days matching the requested date:
    const days = await Day.find({ date: req.body.date });

    // 2. Check if any day records were found for the requested date:
    if (days.length > 0) {
      const day = days[0]; // Get the first day object

      // 3. Find the requested table within the day's tables:
      /**
       ** Does req.body.table return an id ? (because it's being compared to t._id)
       *  it's common in web apps to send the unique identifier (ID) of an entity as part of the request body when performing operations like creating, updating, or deleting.
       * customer chooses a table -> sending its id to backend probably...
       */
      const table = day.tables.find((t) => t._id === req.body.table);

      // 4. Check if the requested table exists within the day:
      if (table) {
        // 5. Table found: Create a new reservation object:
        table.reservation = new Reservation({
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
        });

        // 6. Mark the table as unavailable:
        table.isAvailable = false;

        // 7. Save the updated day object with the new reservation:
        await day.save();
        console.log("Reserved");
        res.status(200).send("Added Reservation");
      } else {
        console.log("Table not found"); // Log message if table wasn't found
      }
    } else {
      console.log("Day not found"); // Log message if day wasn't found
    }
  } catch (err) {
    // 8. Catch any potential errors during the process:
    next(err); // Pass the error to the next error handler
  }
};

// CREATE
const createTable = async (req, res, next) => {
  try {
    const newTable = await Table.create(req.body);
    res.status(200).json(newTable);
  } catch (error) {
    next(error);
  }
};

// GET
const getTable = async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    res.status(200).json(table);
  } catch (error) {
    next(error);
  }
};

// GET ALL
const getTables = async (_, res, next) => {
  try {
    const tables = await Table.find();
    console.log(tables);
    res.status(200).json(tables);
  } catch (error) {
    next(error);
  }
};

// UPDATE
const updateTable = async (req, res, next) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } //? returns the modified document rather than the original one
      // By default, 'updatedTable' returns the original document before modifications.
      // A PUT request updates the database without providing the modified document on api endpoint.
    );
    res.status(200).json(updatedTable);
  } catch (error) {
    next(error);
  }
};

// DELETE
const deleteTable = async (req, res, next) => {
  try {
    const deletedTable = await Table.findByIdAndDelete(req.params.id);
    res.status(200).json({ "this table's been deleted --> ": deletedTable });
  } catch (error) {
    next(error);
  }
};

export {
  createTable,
  getTable,
  getTables,
  updateTable,
  deleteTable,
  getAvailableTables,
  reserveTable,
};
