import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { location: 'Nairobi', expenditure: 4000, Sales: 5400, Profit: 1400 },
  { location: 'Mombasa', expenditure: 3000, Sales: 4900, Profit: 1900 },
  { location: 'Kisumu', expenditure: 3200, Sales: 4700, Profit: 1500 },
  { location: 'Eldoret', expenditure: 2800, Sales: 4500, Profit: 1700 },
  { location: 'Nakuru', expenditure: 3600, Sales: 5200, Profit: 1600 },
];

export default function BaChart() {
  return (
    <div className='bg-blue-50 rounded-lg p-6 m-4'>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Sales Data by Location</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="expenditure" fill="green" />
          <Bar dataKey="Profit" fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
