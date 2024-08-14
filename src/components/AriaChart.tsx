import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import ChartButton from './ChartButton';

// Sample data with two cars
const data = [
  { day: 'Day 1', car1: 50, car2: 60 },
  { day: 'Day 2', car1: 70, car2: 80 },
  { day: 'Day 3', car1: 60, car2: 70 },
  { day: 'Day 4', car1: 90, car2: 100 },
  { day: 'Day 5', car1: 80, car2: 90 },
  { day: 'Day 6', car1: 100, car2: 110 },
  { day: 'Day 7', car1: 110, car2: 120 },
];

export default function AriaChart() {
    const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative'>
      <h2 className="text-xl font-bold text-blue-800 mb-4">Fleet Mileage</h2>
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
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCar1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCar2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottomRight', offset: 0 }} />
          <YAxis label={{ value: 'Mileage (Kms)', angle: -90, position: 'insideLeft', offset: 0 }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="car1" stroke="#8884d8" fillOpacity={1} fill="url(#colorCar1)" />
          <Area type="monotone" dataKey="car2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorCar2)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 right-4">
        <ChartButton 
          label="Movement"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  )
}
