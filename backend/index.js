// const express = require("express");
// const cors = require("cors");
// const { getAllTrariff } = require("./db/function");

import express, { urlencoded, json } from "express"; // Import json from express
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import prisma from "./db/index.js";
import { getAllTariff } from "./db/function.js";
import distanceRoute from "./routes/distancRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import tariffRoute from "./routes/tariffRoute.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json()); // Add json middleware here
app.use(helmet());

// Routes
app.use("/api", distanceRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/tariff", tariffRoute);

app.get("/getdata", (req, res) => {
  getAllTariff()
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
