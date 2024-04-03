const PriceEditor = (props) => {
  const {
    taxiData,
    selectedCabType,
    setSelectedCabType,
    farePrice,
    setFarePrice,
    handleSave,
  } = props;
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold mb-3">Fare Prices per Minute</h2>
        <p className="text-sm text-gray-500 mb-6">
          Set the fare prices per minute for each cab type
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="cabType" className="text-sm">
              Cab Type
            </label>
            <select
              id="cabType"
              className="border rounded-md px-3 py-2 focus:outline-none"
              value={selectedCabType}
              onChange={(e) => setSelectedCabType(e.target.value)}
            >
              {taxiData.map((taxi, index) => (
                <option key={index} value={taxi.vehicleType}>
                  {taxi.vehicleType}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="farePrice" className="text-sm">
              Fare Price (per minute)
            </label>
            <input
              id="farePrice"
              type="number"
              className="border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Enter the fare price"
              value={farePrice}
              onChange={(e) => setFarePrice(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mt-4"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PriceEditor;
