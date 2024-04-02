import { getAllBookings, addBooking } from "../db/function.js";

const allBookings = async (req, res) => {
  try {
    const bookings = await getAllBookings();
    console.log("bookings: ", bookings);
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const createBookingService = async (req, res) => {
  const {
    adminId,
    userId,
    driverId,
    pickupLocation,
    dropoffLocation,
    bookingTime,
    pickupTime,
    dropoffTime,
    totalFare,
    userEmail,
    TariffID,
    paymentMethod,
    bookingStatus,
  } = req.body;

  const bookingData = {
    adminId,
    userId,
    driverId,
    pickupLocation,
    dropoffLocation,
    bookingTime,
    pickupTime,
    dropoffTime,
    totalFare,
    userEmail,
    TariffID,
    paymentMethod,
    bookingStatus,
  };

  try {
    const newBooking = await addBooking(bookingData);
    res.json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).send("Internal server error");
  }
};

export { allBookings, createBookingService };
