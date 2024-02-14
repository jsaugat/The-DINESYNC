import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/connection.js";
// import usersRoutes from "./routes/users.js";
import authRoute from "./routes/auth.js"
import tablesRoute from "./routes/tables.js"

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
// app.use("/api/users", usersRoute);
app.use("/api/tables", tablesRoute);

// ERROR Handler middleware
app.use((err, req, res, next) => {
  const errorMessage = err.message || "Something went wrong";
  const status = err.status;
  return res.status(status).json({
    success: false,
    status: status,
    message: errorMessage,
    stack: err.stack
  });
})

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
