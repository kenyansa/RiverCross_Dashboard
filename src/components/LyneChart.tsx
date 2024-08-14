import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartButton from './ChartButton';

const data = [
  { location: 'Nairobi', expenditure: 4000, Sales: 5400, Profit: 1400 },
  { location: 'Mombasa', expenditure: 3000, Sales: 4900, Profit: 1900 },
  { location: 'Kisumu', expenditure: 3200, Sales: 4700, Profit: 1500 },
  { location: 'Eldoret', expenditure: 2800, Sales: 4500, Profit: 1700 },
  { location: 'Nakuru', expenditure: 3600, Sales: 5200, Profit: 1600 },
];

export default function LyneChart() {
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative'>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Line Chart</h2>
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
      <div style={{ paddingBottom: '50px' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenditure" stroke="green" />
            <Line type="monotone" dataKey="Profit" stroke="purple" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute bottom-2 right-4">
        <ChartButton 
          label="Movement"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}
