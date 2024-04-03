import Header from '../components/HeaderComponent';


const BookingConfPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />

    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmation</h1>

      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-6">
        <p className="font-semibold">Your booking is successfully done!</p>
      </div>

      <p>Your booking details:</p>
      {/* Display booking details here, such as source, destination, date, etc. */}
    </div>
    </div>
  )
}

export default BookingConfPage