import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./src/database/connection.js";
import router from "./src/routes/router.js";
import userRoutes from "./src/routes/user.routes.js"

dotenv.config(); // can use process.env now
const port = process.env.PORT || 6900;


// GLOBAL middleware
app.use("/", (req, res, next) => {
  console.log(`- Request Method -> ${req.method}`);
  console.log(`- Request Path -> ${req.url}`);
  console.log(`- Request Body -> ${JSON.stringify(req.body)}`);
  next();
});
// ROUTES middleware
app.use("/api", router);
app.use("/api/user", userRoutes);


//? Database connection
connectDB()
  .then(() => {
    app.on("error", (error) => console.error(`Sorry!, Express couldn't talk to database`, error) );
    app.listen(port, () => console.log(`👁️  WATCHING PORT : http://localhost:${port}`));
  })
  .catch((error) => {
    console.error("❌ FAILURE :: MongoDB Connection:", error);
  });


