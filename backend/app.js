import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// requests come from differenct sources like url, json, body/ form
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // public directory in your project will be used to serve static files like pdf, images, html, css and other assets
app.use(cookieParser()); // set access and CRUD operate on user cookies

export { app };
