import Header from "../components/HeaderComponent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex items-center flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">
            Your ride, on demand
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            The most reliable and convenient way to get around the city. Book
            your ride with Dispatch and experience top-notch service.
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[calc(100vw_-_theme(spacing.8))] sm:min-w-[400px]">
          <a href="/bookings">
            <button
              className="flex items-center justify-center h-14 w-[500px] rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              onClick={() => console.log("Book a Cab")}
            >
              Book a Cab
            </button>
          </a>
          <a href="/currentBookings">
            <button
              className="flex items-center justify-center h-14 w-[500px] rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              onClick={() => console.log("Current Bookings")}
            >
              Current Bookings
            </button>
          </a>
          <a href="/editprice">
            <button
              className="flex items-center justify-center h-14 w-[500px] rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              onClick={() => console.log("Edit Fare Prices")}
            >
              Edit Fare Prices
            </button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
