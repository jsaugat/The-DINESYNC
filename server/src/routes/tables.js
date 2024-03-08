import express from "express";
import {
  createTable,
  getTable,
  getTables,
  updateTable,
  deleteTable,
} from "../controllers/table.controller.js";
import { getAvailableTables, reserveTable } from "../controllers/table.controller.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// AVAILABLE TABLES
router.post("/available", getAvailableTables);
// RESERVAION
router.post("/reservation", reserveTable);
// //CREATE
// router.post("/", verifyAdmin, createTable);
// //UPDATE, with id
// router.put("/:id", verifyAdmin, updateTable);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteTable);
// // GET
// router.get("/:id", getTable);
// // GET ALL
// router.get("/", getTables);

export default router;
