import express from "express";
import { getMenu, postMenuItem, deleteMenuItem } from "../controllers/menu.controller.js"

const router = express.Router();

// get MENU
router.get("/", getMenu)
router.post("/", postMenuItem)
router.delete("/:id", deleteMenuItem)

export default router;