import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/router.js";
import connectDB from "./src/database/connection.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" }); // can use process.env now
const port = process.env.PORT || 6900;


// GLOBAL middleware
app.use("/", (req, res, next) => {
  console.log(`- Request Method -> ${req.method}`);
  console.log(`- Request Path -> ${req.url}`);
  console.log(`- Request Body -> ${JSON.stringify(req.body)}`);
  next();
});
// ROUTES middleware
app.use("/app", router);


//? Database connection
connectDB()
  .then(() => {
    app.on((err) => console.error(`Sorry!, Express couldn't talk to database`, err) );
    app.listen(port, () => console.log(`👁️  WATCHING PORT : http://localhost:${port}`));
  })
  .catch((error) => {
    console.error("❌ FAILURE :: MongoDB Connection:", error);
  });


