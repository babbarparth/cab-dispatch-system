const addAdmin = async (adminData) => {
  try {
    const newAdmin = await prisma.admin.create({
      data: adminData,
    });
    return newAdmin;
  } catch (error) {
    console.error("Error adding admin:", error);
    throw error;
  }
};

const getAdminById = async (id) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(id) },
    });
    return admin;
  } catch (error) {
    console.error("Error fetching admin:", error);
    throw error;
  }
};

const updateAdminById = async (id, adminData) => {
  try {
    const updatedAdmin = await prisma.admin.update({
      where: { id: parseInt(id) },
      data: adminData,
    });
    return updatedAdmin;
  } catch (error) {
    console.error("Error updating admin:", error);
    throw error;
  }
};

const deleteAdminById = async (id) => {
  try {
    await prisma.admin.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting admin:", error);
    throw error;
  }
};

// Tariff

const addTariff = async (tariffData) => {
  try {
    const newTariff = await prisma.tariff.create({
      data: tariffData,
    });
    return newTariff;
  } catch (error) {
    console.error("Error adding tariff:", error);
    throw error;
  }
};

const getTariffById = async (id) => {
  try {
    const tariff = await prisma.tariff.findUnique({
      where: { id: parseInt(id) },
    });
    return tariff;
  } catch (error) {
    console.error("Error fetching tariff:", error);
    throw error;
  }
};

const updateTariffById = async (id, tariffData) => {
  try {
    const updatedTariff = await prisma.tariff.update({
      where: { id: parseInt(id) },
      data: tariffData,
    });
    return updatedTariff;
  } catch (error) {
    console.error("Error updating tariff:", error);
    throw error;
  }
};

const deleteTariffById = async (id) => {
  try {
    await prisma.tariff.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting tariff:", error);
    throw error;
  }
};

// Driver

const addDriver = async (driverData) => {
  try {
    const newDriver = await prisma.driver.create({
      data: driverData,
    });
    return newDriver;
  } catch (error) {
    console.error("Error adding driver:", error);
    throw error;
  }
};

const getDriverById = async (id) => {
  try {
    const driver = await prisma.driver.findUnique({
      where: { id: parseInt(id) },
    });
    return driver;
  } catch (error) {
    console.error("Error fetching driver:", error);
    throw error;
  }
};

const updateDriverById = async (id, driverData) => {
  try {
    const updatedDriver = await prisma.driver.update({
      where: { id: parseInt(id) },
      data: driverData,
    });
    return updatedDriver;
  } catch (error) {
    console.error("Error updating driver:", error);
    throw error;
  }
};

const deleteDriverById = async (id) => {
  try {
    await prisma.driver.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting driver:", error);
    throw error;
  }
};

// User

const addUser = async (userData) => {
  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const updateUserById = async (id, userData) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: userData,
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Booking

import prisma from "./index";

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
  addAdmin,
  getAdminById,
  updateAdminById,
  deleteAdminById,
  addTariff,
  getTariffById,
  updateTariffById,
  deleteTariffById,
  addUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addBooking,
  getBookingById,
  updateBookingById,
  deleteBookingById,
};
