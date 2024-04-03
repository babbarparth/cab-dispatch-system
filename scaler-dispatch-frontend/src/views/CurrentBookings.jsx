import { useEffect, useState } from "react";
import Header from "../components/HeaderComponent";
import axios from "axios";

const CurrentBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading animation
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/booking/allBookings`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBookings(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getStatus = (booking) => {
    const dropoffTime = new Date(booking.dropoffTime);
    const pickupTime = new Date(booking.pickupTime);

    if (currentTime < pickupTime) {
      return "Upcoming";
    } else if (currentTime >= pickupTime && currentTime < dropoffTime) {
      return "Ongoing";
    } else {
      return "Completed";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Bookings History
        </h2>
        {loading ? ( 
          <div className="flex items-center justify-center">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        ) : bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  getStatus(booking) === "Upcoming"
                    ? "border-yellow-400"
                    : getStatus(booking) === "Ongoing"
                    ? "border-blue-400"
                    : "border-green-400"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Booking #{booking.id}
                  </h3>
                  <span className="text-sm font-semibold text-gray-500">
                    Status: {getStatus(booking)}
                  </span>
                </div>
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
                  <span className="font-semibold">Total Time:</span>{" "}
                  {booking.totalMinutes} mins
                </p>
                <p>
                  <span className="font-semibold">Total Fare:</span> ₹
                  {booking.totalFare.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold">Shortest Route:</span>{" "}
                  {booking.shortestRoute}
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
