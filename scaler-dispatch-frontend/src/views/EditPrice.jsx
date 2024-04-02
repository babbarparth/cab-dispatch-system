
const EditPrice = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold mb-3">Fare Prices per Minute</h2>
          <p className="text-sm text-gray-500 mb-6">Set the fare prices per minute for each cab type</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="cabType" className="text-sm">Cab Type</label>
              <select 
                id="cabType" 
                className="border rounded-md px-3 py-2 focus:outline-none"
                value={selectedCab}
                onChange={(e) => setSelectedCab(e.target.value)}
              >
                {Object.keys(prices).map((cab, index) => (
                  <option key={index} value={cab}>{cab.charAt(0).toUpperCase() + cab.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="farePrice" className="text-sm">Fare Price (per minute)</label>
              <input 
                id="farePrice" 
                type="number" 
                className="border rounded-md px-3 py-2 focus:outline-none" 
                placeholder="Enter the fare price" 
                value={newPrice} 
                onChange={(e) => setNewPrice(e.target.value)}
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

      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-md p-0">
          <div className="border-t border-gray-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[200px] text-left py-2 px-4 border-b">Cab Type</th>
                  <th className="text-left py-2 px-4 border-b">Fare Price (per minute)</th>
                  <th className="w-[120px] text-left py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(prices).map(([cab, price], index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{cab.charAt(0).toUpperCase() + cab.slice(1)}</td>
                    <td className="py-2 px-4 border-b">${price.toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                      <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPrice