import { useEffect, useState } from "react";
import Header from "../components/HeaderComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

const locations = ["A", "B", "C", "D", "E", "F"];

const BookingPage = () => {
  const navigate = useNavigate();

  const [taxiData, setTaxiData] = useState([]);
  const [distances, setDistances] = useState({});
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedTariff, setSelectedTariff] = useState(null);
  const [showTariffList, setShowTariffList] = useState(false); // State to manage visibility of tariff list
  const [date, setDate] = useState(""); // State for date input
  const [time, setTime] = useState(""); // State for time input
  const [email, setEmail] = useState(""); // State for time input

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}/api/tariff/tariffRate`)
      .then((response) => {
        setTaxiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []); // Ensure that this effect runs only once

  useEffect(() => {
    if (source && destination) {
      axios
        .post(
          `${import.meta.env.VITE_APP_BASE_URL}/api/getDist`,
          {
            source,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Set the content type header
            },
          }
        )
        .then((response) => {
          console.log("data: ", response.data);
          setDistances(response.data);
        })
        .catch((error) => {
          console.error("Error fetching distances:", error);
        });
    }
  }, [source, destination]);

  const handleSourceChange = (e) => {
    console.log(e.target.value);
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    console.log(e.target.value);
    setDestination(e.target.value);
  };

  const handleSearch = () => {
    setShowTariffList(true);
  };

  // Update handleDateChange function to capture date input value
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Update handleTimeChange function to capture time input value
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleBookCab = () => {
    if (!selectedTariff) {
      console.error("Please select a tariff before booking.");
      return;
    }
    console.log("here");

    const pickUpDateTime = new Date(`${date}T${time}:00Z`);
    const dropOffDateTime = new Date(
      pickUpDateTime.getTime() + distances[destination] * 60000
    ); // Convert minutes to milliseconds
    // Prepare booking data with the selected car type
    const bookingData = {
      adminId: 1,
      userId: 1,
      driverId: 1,
      pickupLocation: source,
      dropoffLocation: destination,
      bookingTime: new Date().toISOString(),
      pickupTime: pickUpDateTime, // Include date and time from state variables
      dropoffTime: dropOffDateTime,
      totalFare:
        distances[destination] * selectedTariff.distanceRate.toFixed(2),
      userEmail: email,
      TariffID: selectedTariff.id,
      paymentMethod: "Credit Card",
      bookingStatus: "Confirmed", // Include other booking details as needed
    };

    // Send a POST request to create a new booking
    axios
      .post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/booking/createBooking`,
        bookingData
      )
      .then((response) => {
        console.log("Booking created successfully:", response.data);
        navigate("/booking");
        // Redirect or perform any action after successful booking
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
      });
  };

  console.log(distances);

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
          Search for a Cab
        </button>

        {showTariffList && (
          <div>
            Time from {source} to {destination} is{" "}
            {distances && distances[destination]} mins
            {/* Display the list of car types with their rates */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {taxiData.map((type, index) => {
                // Check if the tariff is available
                const isTariffAvailable = type.availableAfter
                  ? new Date(type.availableAfter) <= new Date()
                  : true; // If availableAfter is null, assume it's always available

                return isTariffAvailable ? (
                  <div
                    key={index}
                    className={`border rounded-md p-4 hover:bg-gray-100 transition-colors duration-300`}
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
                          $
                          {(distances[destination] * type.distanceRate).toFixed(
                            2
                          )}
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
                          $ {type.distanceRate}
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
                    {/* Add radio button for selecting tariff */}
                    <input
                      type="radio"
                      id={`tariff-${index}`}
                      name="tariff"
                      value={type}
                      onChange={() => setSelectedTariff(type)}
                      checked={selectedTariff === type}
                    />
                    <label htmlFor={`tariff-${index}`}>Select</label>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        <div style={{ paddingTop: "20px" }}>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600"
            onClick={handleBookCab}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
