

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to FastTrack Cab Dispatch System</h1>
        <p className="text-lg text-gray-700 text-center mb-8">Your reliable solution for hassle-free cab services</p>
        <div className="flex justify-center mb-8">
          <img src="/cab_image.png" alt="Cab" className="w-full md:w-auto h-auto max-h-96" />
        </div>
        <div className="text-lg text-gray-800 mb-8">
          <p><span className="font-bold">Instant Booking:</span> Book a cab within seconds.</p>
          <p><span className="font-bold">24/7 Availability:</span> We operate round the clock.</p>
          <p><span className="font-bold">Safety First:</span> Thorough background checks for drivers.</p>
          <p><span className="font-bold">Affordable Rates:</span> Competitive fares without compromise.</p>
          <p><span className="font-bold">Diverse Fleet:</span> Choose from a variety of vehicles.</p>
          <p><span className="font-bold">Easy Payment Options:</span> Pay conveniently using various methods.</p>
        </div>
        <div className="text-lg text-gray-800 mb-8">
          <p><span className="font-bold">How It Works:</span></p>
          <ol className="list-decimal pl-8">
            <li>Download the App</li>
            <li>Book Your Ride</li>
            <li>Track Your Cab</li>
            <li>Enjoy Your Ride</li>
            <li>Rate and Review</li>
          </ol>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600">
            <a href="/bookings">
            Download Now - App Store
            </a>
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 ml-4">
            Download Now - Google Play Store
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage