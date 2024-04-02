import { Router } from "express";
import { allBookings } from "../controller/bookingsController.js";

const bookingRoute = Router();

bookingRoute.get("/allBookings", allBookings);

export default bookingRoute;
