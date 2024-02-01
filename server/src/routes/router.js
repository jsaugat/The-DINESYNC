import express from "express";
import { getMenu, postMenuItem, deleteMenuItem } from "../controllers/menu.controller.js"
import requireAuth from "../middlewares/requireAuth.js"

const router = express.Router();

//? require Auth for all routes
router.use(requireAuth) //? authenticate users and call other middlewares w/ next() inside requireAuth
// get MENU
router.get("/", getMenu)
router.post("/", postMenuItem)
router.delete("/:id", deleteMenuItem)

export default router;