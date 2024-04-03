const PriceTable = (props) => {
  const { taxiData, handleEditClick } = props;

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded-md p-0">
        <div className="border-t border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[200px] text-left py-2 px-4 border-b">
                  Cab Type
                </th>
                <th className="text-left py-2 px-4 border-b">
                  Fare Price (per minute)
                </th>
                <th className="w-[120px] text-left py-2 px-4 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {taxiData.map((taxi, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{taxi.vehicleType}</td>
                  <td className="py-2 px-4 border-b">{taxi.distanceRate}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm"
                      onClick={() => handleEditClick(taxi.vehicleType)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
