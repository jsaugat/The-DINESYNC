import express from "express";
import Table from "../models/Table.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const tables = await Table.find();
    console.log(tables)
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE
router.post("/", async (req, res) => {
  const newTable = new Table(req.body);
  try {
    const savedTable = await newTable.save();
    res.status(200).json(savedTable);
  } catch (error) {
    res.status(500).json(error);
  }
});
//DELETE
//GET ALL

export default router;
