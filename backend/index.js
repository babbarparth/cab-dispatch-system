import express, { urlencoded, json } from "express";
import dotenv from "dotenv";

import cors from "cors";
import helmet from "helmet";
import distanceRoute from "./routes/distancRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import tariffRoute from "./routes/tariffRoute.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(helmet());

// Routes
app.use("/api", distanceRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/tariff", tariffRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
