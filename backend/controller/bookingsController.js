import {
  getAllBookings,
  addBooking,
  updateTariffAvailbilityById,
} from "../db/function.js";

import nodemailer from "nodemailer";

const bookingEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "parthbabbar.cabsystem24@gmail.com",
    pass: "kvqqmididvklrmtm",
  },
});

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
    await updateTariffAvailbilityById(TariffID, dropoffTime);
    const mail = {
      from: "Support Cab System",
      to: userEmail,
      subject: "Booking Confirmation",
      html: `
            <p>Name: Suport Email</p>
            <p>Email: ${userEmail}</p>
            <p>MessageP: "Thankyou Booking with use"</p>
        `,
    };
    bookingEmail.sendMail(mail, (error) => {
      if (error) {
        console.log("Error sending email");
        // res.json({ status: "ERROR" });
      } else {
        console.log("Message Sent");
        // res.json({ status: "Message Sent" });
      }
    });
    res.json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).send("Internal server error");
  }
};

export { allBookings, createBookingService };
