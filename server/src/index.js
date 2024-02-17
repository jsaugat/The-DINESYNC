import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/connection.js";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import tablesRoute from "./routes/tables.js";

dotenv.config(); // can use process.env now
const port = process.env.PORT || 6900;

// GLOBAL middleware
app.use("/", (req, res, next) => {
  console.log("Request Method -> " + req.method);
  console.log("Request Path -> " + req.url);
  console.log("Request Body -> " + JSON.stringify(req.body));
  next();
});

// ROUTES middlewares
app.use("/api/auth", authRoute);
app.use("/api/tables", tablesRoute);
app.use("/api/users", usersRoute);

// ERROR Handler middleware : triggered if there's an error passed to next() in any previous middleware or route handler.
app.use((error, req, res, next) => {
  const message = error.message || "Something went wrong";
  const status = error.status;

  return res.status(status).json({
    success: false,
    status,
    message,
    stack: error.stack,
  });
});

//? Database connection
app.on("error", (error) =>
  console.error(`Sorry!, Express couldn't talk to database`, error)
);
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`👁️  WATCHING PORT : http://localhost:${port}`);
  } catch (error) {
    console.error("connectDB error: ", error);
  }
});