import { useState } from 'react';

export default function AlertsCard() {
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative'>
      <h2 className="text-xl font-bold text-blue-800 mb-2">Alerts Summary</h2>
      <hr className="mb-4" />
      
      <div className="flex justify-end mb-4">
        <div className="flex items-center rounded border-2 border-gray-300 bg-white">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border-none focus:outline-none text-gray-700 text-sm bg-transparent px-2 py-1"
          />
          <span className="mx-2 text-gray-500">-</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border-none focus:outline-none text-gray-700 text-sm bg-transparent px-2 py-1"
          />
        </div>
      </div>

      <div className="flex-grow">
        <table className="table-auto w-full mb-4">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2 px-4 text-left">Alert</th>
              <th className="py-2 px-4 text-left">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-gray-800">
              <td className="py-2 px-4">Power Cuts</td>
              <td className="py-2 px-4">15</td>
            </tr>
            <tr className="bg-blue-50 text-gray-800">
              <td className="py-2 px-4">Antenna Cuts</td>
              <td className="py-2 px-4">4</td>
            </tr>
            <tr className="bg-white text-gray-800">
              <td className="py-2 px-4">Panic</td>
              <td className="py-2 px-4">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end pt-4">
        <span className="text-xl text-blue-950 font-bold">Totals: 19</span>
      </div>
    </div>
  );
}
