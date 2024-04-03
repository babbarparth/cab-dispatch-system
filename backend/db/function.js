import prisma from "./index.js";

// Tariff

const getAllTariff = async () => {
  try {
    const tariffs = await prisma.tariff.findMany();
    return tariffs;
  } catch (error) {
    console.error("Error fetching tariff:", error);
    throw error;
  }
};

const updateTariffById = async (id, price) => {
  try {
    const updatedTariff = await prisma.tariff.update({
      where: { id: parseInt(id) },
      data: { distanceRate: parseFloat(price) }, // Corrected function to parseFloat
    });
    return updatedTariff;
  } catch (error) {
    console.error("Error updating tariff:", error);
    throw error;
  }
};

const updateTariffAvailbilityById = async (id, datetime) => {
  try {
    const updatedTariff = await prisma.tariff.update({
      where: { id: parseInt(id) },
      data: { availableAfter: datetime }, // Corrected function to parseFloat
    });
    return updatedTariff;
  } catch (error) {
    console.error("Error updating tariff:", error);
    throw error;
  }
};

// Booking

const addBooking = async (bookingData) => {
  try {
    const newBooking = await prisma.booking.create({
      data: bookingData,
    });
    return newBooking;
  } catch (error) {
    console.error("Error adding booking:", error);
    throw error;
  }
};

const getAllBookings = async () => {
  try {
    const bookings = await prisma.booking.findMany();
    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

const getBookingById = async (id) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: parseInt(id) },
    });
    return booking;
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
};

const updateBookingById = async (id, bookingData) => {
  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: bookingData,
    });
    return updatedBooking;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};

const deleteBookingById = async (id) => {
  try {
    await prisma.booking.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};

export {
  getAllTariff,
  updateTariffById,
  updateTariffAvailbilityById,
  getAllBookings,
  addBooking,
  getBookingById,
  updateBookingById,
  deleteBookingById,
};
