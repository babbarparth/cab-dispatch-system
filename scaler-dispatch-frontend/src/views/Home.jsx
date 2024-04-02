

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100vh', paddingLeft: '60px', paddingTop: '300px' }}>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mb-4">
        <a href="/bookings" style={{ textDecoration: 'none', color: 'inherit' }}>Booking Page</a>
      </button>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mb-4">
        <a href="/currentBookings" style={{ textDecoration: 'none', color: 'inherit' }}>Current Bookings</a>
      </button>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600">
        <a href="/editprice" style={{ textDecoration: 'none', color: 'inherit' }}>Edit Fare Price</a>
      </button>
    </div>
  )
}

export default Home