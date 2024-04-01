import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import LandingPage from "./views/LandingPage"
import BookingPage from "./views/BookingPage"
import BookingConfPage from "./views/BookingConfPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/booking" element={<BookingConfPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
