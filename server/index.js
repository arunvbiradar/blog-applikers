import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { dbConnection } from "./db/connection.js";

// routes
import posts from "./routes/posts.js";

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// setup
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/", posts);

// listener
dbConnection()
  .then(() =>
    app.listen(PORT, (req, res) => console.log("Server started at " + PORT))
  )
  .catch((error) => console.log(error));
