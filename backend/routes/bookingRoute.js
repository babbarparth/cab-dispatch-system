import { Router } from "express";
import {
  allBookings,
  createBookingService,
} from "../controller/bookingsController.js";

const bookingRoute = Router();

bookingRoute.get("/allBookings", allBookings);
bookingRoute.post("/createBooking", createBookingService);

export default bookingRoute;
