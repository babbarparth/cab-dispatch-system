import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import LandingPage from "./views/LandingPage";
import BookingPage from "./views/BookingPage";
import BookingConfPage from "./views/BookingConfPage";
import CurrentBookings from "./views/CurrentBookings";
import EditPrice from "./views/EditPrice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/booking" element={<BookingConfPage />} />
        <Route path="/currentBookings" element={<CurrentBookings />} />
        <Route path="/editprice" element={<EditPrice />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
