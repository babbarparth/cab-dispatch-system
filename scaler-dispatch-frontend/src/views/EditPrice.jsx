import Header from '../components/header_components';


const EditPrice = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <Header />
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-bold mb-3">Fare Prices per Minute</h2>
          <p className="text-sm text-gray-500 mb-6">Set the fare prices per minute for each cab type</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="cabType" className="text-sm">Cab Type</label>
              <select id="cabType" className="border rounded-md px-3 py-2 focus:outline-none">
                <option value="economy">Economy</option>
                <option value="prime">Prime</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="caravan">Caravan</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="farePrice" className="text-sm">Fare Price (per minute)</label>
              <input id="farePrice" type="number" className="border rounded-md px-3 py-2 focus:outline-none" placeholder="Enter the fare price" />
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-blue-600 mt-4">Save</button>
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
                <tr>
                  <td className="py-2 px-4 border-b">Economy</td>
                  <td className="py-2 px-4 border-b">$0.50</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Prime</td>
                  <td className="py-2 px-4 border-b">$0.75</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Sedan</td>
                  <td className="py-2 px-4 border-b">$1.00</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">SUV</td>
                  <td className="py-2 px-4 border-b">$1.25</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Caravan</td>
                  <td className="py-2 px-4 border-b">$1.50</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Edit</button>
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-semibold text-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default EditPrice