import Header from '../components/header_components';


const BookingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />


    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Book a Cab</h1>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Enter your details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="source" className="block text-sm font-semibold mb-1">Source Location</label>
            <input id="source" type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter source location" />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-semibold mb-1">Destination</label>
            <input id="destination" type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter destination" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-semibold mb-1">Date</label>
            <input id="date" type="date" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-semibold mb-1">Time</label>
            <input id="time" type="time" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input id="email" type="email" className="w-full border rounded-md px-3 py-2" placeholder="Enter your email" />
          </div>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mb-6">Search for a Cab</button>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {['Economy', 'Prime', 'Sedan', 'SUV', 'Caravan'].map((type, index) => (
          <div key={index} className={`border rounded-md p-4 hover:bg-gray-100 transition-colors duration-300`}>
            <h2 className="text-lg font-semibold mb-3">{type}</h2>
            <div className="mb-2">
              <label htmlFor={`${type}-seats`} className="block text-sm font-semibold mb-1">No. of Seats</label>
              <span id={`${type}-seats`} className="text-gray-700">{type === 'Caravan' ? '14' : '5'}</span>
            </div>
            <div>
              <label htmlFor={`${type}-price`} className="block text-sm font-semibold mb-1">Price (per min)</label>
              <span id={`${type}-price`} className="text-gray-700">$0.00</span>
            </div>
            {/* Button to select cab */}
            <button className="bg-black text-white px-2 py-1 rounded-sm font-semibold text-sm">Select</button>
          </div>
        ))}
      </div>

      {/* Button to book cab and navigate to booking confirmation page */}
      <div style={{ paddingTop: '20px' }}>
        <a href="/booking">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600">Book Cab</button>
        </a>
      </div>
    </div>
    </div>
  )
}

export default BookingPage