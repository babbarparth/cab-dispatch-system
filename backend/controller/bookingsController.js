import {
  getAllBookings,
  addBooking,
  updateTariffAvailbilityById,
} from "../db/function.js";

import nodemailer from "nodemailer";

const convetUTCtoIST = (date) => {
  return new Date(date).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
};

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
    totalMinutes,
    shortestRoute,
    userEmail,
    tariffId,
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
    totalMinutes,
    shortestRoute,
    userEmail,
    tariffId,
    paymentMethod,
    bookingStatus,
  };

  try {
    const newBooking = await addBooking(bookingData);
    await updateTariffAvailbilityById(tariffId, dropoffTime);

    const mail = {
      from: "Support Cab System",
      to: userEmail,
      subject: "Booking Confirmation",
      html: `
           <h1>Booking Confirmation</h1>
    <p>Dear ${userEmail},</p>
    <p>We are delighted to confirm your booking with our cab system. Your booking details are as follows:</p>
    <ul>
      <li><strong>Pickup Location:</strong> ${pickupLocation}</li>
      <li><strong>Dropoff Location:</strong> ${dropoffLocation}</li>
      <li><strong>Booking Time:</strong>  ${convetUTCtoIST(bookingTime)}</li>
      <li><strong>Pickup Time:</strong>  ${convetUTCtoIST(pickupTime)}</li>
      <li><strong>Dropoff Time:</strong> ${convetUTCtoIST(dropoffTime)}</li>
      <li><strong>Shortest Route:</strong>  ${shortestRoute}</li>
      <li><strong>Total Time:</strong>  ${totalMinutes} min</li>
      <li><strong>Total Price:</strong>  ₹${totalFare}</li>
    </ul>

    <p>Thank you for choosing our cab system. We look forward to serving you!</p>
    <p>Best regards,<br/>Support Team</p>

    <hr/>
    <p><em>This is for testing purposes only. No actual cab has been booked. Created by Parth Babbar for Scaler assignment.</em></p>
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
