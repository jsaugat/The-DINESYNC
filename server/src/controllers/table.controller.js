import Table from "../models/Table.js";
import Day from "../models/Day.js";
import { allTables } from "../seeds/allTables.js";
import { tablesData } from "../seeds/tables.js";

// GET Available Tables
// Params for route : { data: String ("Dec 21 2012 09:00") }
// const getAvailableTables = async (req, res, next) => {
//   const dateTime = new Date(req.body.date);
//   console.log("Request Body:", dateTime);

//   try {
//     const existingDocs = await Day.find({ date: dateTime });
//     if (existingDocs.length > 0) {
//       console.log("Record exists. Sent docs.");
//       res.status(200).send(existingDocs[0]);
//     } else {
//       // Use create method directly (assuming available)
//       const newDay = await Day.create({ date: dateTime, tables: tablesData });
//       console.log("docs? : ", newDay);
//       console.log("dont fuck this error");
//       console.log("Created new datetime. Sent default docs.");
//       res.status(200).send(newDay);
//     }
//   } catch (err) {
//     console.log("fuck this error");
//     next(err);
//   }
// };

async function getAvailableTables(req, res, next) {
  console.log("Request attempted");

  try {
    const dateTime = new Date(req.body.date);

    // Find documents with the specified date
    const existingDocs = await Day.find({ date: dateTime });

    if (existingDocs.length) {
      console.log("Record exists. Sent docs.");
      res.status(200).send(existingDocs[0]);
    } else {
      // Create a new document with the searched date and default tables
      const newDay = new Day({ date: dateTime, tables: allTables });
      await newDay.save();
      console.log("Created new datetime. Sent default docs.");

      // Retrieve the newly created document
      const createdDoc = await Day.findOne({ date: dateTime });
      res.status(200).send(createdDoc);
    }
  } catch (err) {
    next(err)
  }
}

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
