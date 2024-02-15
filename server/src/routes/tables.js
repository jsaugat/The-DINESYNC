import express from "express";
import { createTable, getTable, getTables, updateTable, deleteTable } from "../controllers/table.controller.js";

const router = express.Router();

//CREATE
  router.post("/", createTable);
// GET
  router.get("/:id", getTable);
// GET ALL
  router.get("/", getTables);
//UPDATE, with id
  router.put("/:id", updateTable);
//DELETE
  router.delete("/:id", deleteTable);

export default router;
