import { useEffect, useState } from "react";
import Header from "../components/HeaderComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const locations = ["A", "B", "C", "D", "E", "F"];

const BookingPage = () => {
  const navigate = useNavigate();

  const [taxiData, setTaxiData] = useState([]);
  const [distances, setDistances] = useState({});
  const [path, setPath] = useState({});
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedTariff, setSelectedTariff] = useState(null);
  const [showTariffList, setShowTariffList] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [sendEmailLoading, setSendEmailLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}/api/tariff/tariffRate`)
      .then((response) => {
        setTaxiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  useEffect(() => {
    if (source && destination) {
      axios
        .post(
          `${import.meta.env.VITE_APP_BASE_URL}/api/getDist`,
          {
            source,
            destination,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          setDistances(response.data.distances);
          setPath(response.data.shortestPath);
        })
        .catch((error) => {
          console.error("Error fetching distances:", error);
        });
    }
  }, [source, destination]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSourceChange = (e) => {
    console.log(e.target.value);
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    console.log(e.target.value);
    setDestination(e.target.value);
  };

  const handleSearch = () => {
    if (!source || !destination) {
      toast.error("Please select both source and destination.");
      return;
    }
    setShowTariffList(true);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleBookCab = () => {
    if (!selectedTariff) {
      toast.error("Please select a tariff before booking.");
      return;
    }
    if (!date || !time) {
      toast.error("Please select both date and time.");
      return;
    }
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSendEmailLoading(true);

    const pickUpDateTime = new Date(`${date}T${time}`);
    const dropOffDateTime = new Date(
      pickUpDateTime.getTime() + distances[destination] * 60000
    );
    const bookingData = {
      adminId: 1,
      userId: 1,
      driverId: 1,
      pickupLocation: source,
      dropoffLocation: destination,
      bookingTime: new Date().toISOString(),
      pickupTime: pickUpDateTime,
      dropoffTime: dropOffDateTime,
      totalFare: distances[destination] * selectedTariff.distanceRate,
      totalMinutes: distances[destination],
      shortestRoute: path.join(" -> "),
      userEmail: email,
      tariffId: selectedTariff.id,
      paymentMethod: "Credit Card",
      bookingStatus: "Confirmed", // Include other booking details as needed
    };

    axios
      .post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/booking/createBooking`,
        bookingData
      )
      .then((response) => {
        console.log("Booking created successfully:", response.data);
        toast.success("Booking created successfully!");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setSendEmailLoading(false);
        }, 500);
      });
  };

  console.log(distances);
  console.log(sendEmailLoading);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Book a Cab</h1>

        <BookingForm
          locations={locations}
          date={date}
          time={time}
          email={email}
          handleSourceChange={handleSourceChange}
          handleDestinationChange={handleDestinationChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          handlEmailChange={handlEmailChange}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mb-6"
          onClick={handleSearch}
        >
          Search Cabs
        </button>

        {showTariffList && (
          <div>
            Time from {source} to {destination} is {distances[destination]}{" "}
            mins.
            <div className="mb-4">Shortest Route {path.join(" -> ")}</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {taxiData.map((type, index) => {
                const isTariffAvailable = type.availableAfter
                  ? new Date(type.availableAfter) <= new Date()
                  : true;

                return (
                  <label key={index} htmlFor={`tariff-${index}`}>
                    <div
                      className={`border rounded-md p-4 transition-colors duration-300 ${
                        selectedTariff === type
                          ? "bg-blue-200"
                          : "hover:bg-gray-100"
                      } ${
                        selectedTariff === type && !isTariffAvailable
                          ? "no-hover"
                          : ""
                      }`}
                      onClick={() => {
                        if (isTariffAvailable) {
                          setSelectedTariff(type);
                        }
                      }}
                    >
                      <h2 className="text-lg font-semibold mb-3">
                        {type.vehicleType}
                      </h2>
                      <div className="mb-2">
                        <div>
                          <label
                            htmlFor={`${type.vehicleType}-total-price`}
                            className="block text-sm font-semibold mb-1"
                          >
                            Total Price
                          </label>
                          <span
                            id={`${type.vehicleType}-total-price`}
                            className="text-gray-700"
                          >
                            ₹
                            {(
                              distances[destination] * type.distanceRate
                            ).toFixed(2)}
                          </span>
                        </div>
                        <div>
                          <label
                            htmlFor={`${type.vehicleType}-price`}
                            className="block text-sm font-semibold mb-1"
                          >
                            Price (per min)
                          </label>
                          <span
                            id={`${type.vehicleType}-price`}
                            className="text-gray-700"
                          >
                            ₹{type.distanceRate}
                          </span>
                        </div>
                        <div>
                          <label
                            htmlFor={`${type.vehicleType}-fueltype`}
                            className="block text-sm font-semibold mb-1"
                          >
                            Fuel Type
                          </label>
                          <span
                            id={`${type.fuelType}-fueltype`}
                            className="text-gray-700"
                          >
                            {type.fuelType}
                          </span>
                        </div>
                      </div>
                      {isTariffAvailable ? (
                        <input
                          type="radio"
                          id={`tariff-${index}`}
                          name="tariff"
                          value={type}
                          onChange={() => setSelectedTariff(type)}
                          checked={selectedTariff === type}
                          className="hidden"
                        />
                      ) : (
                        <span className="text-red-500">
                          Available after{" "}
                          {new Date(type.availableAfter).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                className={`bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg cursor-pointer hover:bg-blue-600`}
                onClick={handleBookCab}
                disabled={sendEmailLoading}
              >
                {sendEmailLoading ? "Booking a Cab..." : "Confirm Booking"}
              </button>
            </div>
            <div style={{ paddingTop: "20px" }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
