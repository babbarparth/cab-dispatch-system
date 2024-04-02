import { useEffect, useState } from "react";
import Header from "../components/header_components";
import axios from "axios";

const CurrentBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data from backend API
    // Replace this with actual API call
    const fetchData = async () => {
      try {
        axios
          .get(`http://localhost:3000/api/booking/allBookings`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setBookings(response.data);
          })
          .catch((error) => {
            console.error("Error fetching bookings:", error);
          });
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Current Bookings
        </h2>
        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Booking #{booking.id}
                </h3>
                <p>
                  <span className="font-semibold">Pickup Location:</span>{" "}
                  {booking.pickupLocation}
                </p>
                <p>
                  <span className="font-semibold">Dropoff Location:</span>{" "}
                  {booking.dropoffLocation}
                </p>
                <p>
                  <span className="font-semibold">Booking Time:</span>{" "}
                  {new Date(booking.bookingTime).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Pickup Time:</span>{" "}
                  {new Date(booking.pickupTime).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Dropoff Time:</span>{" "}
                  {new Date(booking.dropoffTime).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Total Fare:</span> $
                  {booking.totalFare.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold">Payment Method:</span>{" "}
                  {booking.paymentMethod}
                </p>
                <p>
                  <span className="font-semibold">Booking Status:</span>{" "}
                  {booking.bookingStatus}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentBookings;
