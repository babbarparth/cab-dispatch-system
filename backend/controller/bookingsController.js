import { getAllBookings } from "../db/function.js";

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

export { allBookings };
