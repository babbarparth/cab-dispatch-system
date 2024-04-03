import Dropdown from "../components/Dropdown";

const BookingForm = (props) => {
  const {
    locations,
    date,
    time,
    email,
    handleSourceChange,
    handleDestinationChange,
    handleDateChange,
    handleTimeChange,
    handlEmailChange,
  } = props;
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3">Enter your details</h2>
      <div className="grid grid-cols-2 gap-4">
        <Dropdown
          id="source"
          label="Source Location"
          options={locations}
          placeholder="Select source location"
          onChange={handleSourceChange}
        />
        <Dropdown
          id="destination"
          label="Destination"
          options={locations}
          placeholder="Select destination"
          onChange={handleDestinationChange}
        />
        <div>
          <label htmlFor="date" className="block text-sm font-semibold mb-1">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full border rounded-md px-3 py-2"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-semibold mb-1">
            Time
          </label>
          <input
            id="time"
            type="time"
            className="w-full border rounded-md px-3 py-2"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter your email"
            value={email}
            onChange={handlEmailChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
