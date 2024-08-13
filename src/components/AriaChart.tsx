import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { location: 'Nairobi', expenditure: 4000, Sales: 5400, Profit: 1400 },
    { location: 'Mombasa', expenditure: 3000, Sales: 4900, Profit: 1900 },
    { location: 'Kisumu', expenditure: 3200, Sales: 4700, Profit: 1500 },
    { location: 'Eldoret', expenditure: 2800, Sales: 4500, Profit: 1700 },
    { location: 'Nakuru', expenditure: 3600, Sales: 5200, Profit: 1600 },
  ];

export default function AriaChart() {
  return (
    <div className='bg-blue-50 rounded-lg p-6 m-4'>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Area Chart</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{top: 10,
            right: 30,
            left: 0,
            bottom: 0,
            }}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Sales" fill="#8884d8"/>
          <Area type="monotone" dataKey="expenditure" fill="green"/>
          <Area type="monotone" dataKey="Profit" fill="purple"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
