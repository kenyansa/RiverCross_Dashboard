import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartButton from './ChartButton';

const data = [
    { location: 'Nairobi', expenditure: 4000, Sales: 5400, Profit: 1400 },
    { location: 'Mombasa', expenditure: 3000, Sales: 4900, Profit: 1900 },
    { location: 'Kisumu', expenditure: 3200, Sales: 4700, Profit: 1500 },
    { location: 'Eldoret', expenditure: 2800, Sales: 4500, Profit: 1700 },
    { location: 'Nakuru', expenditure: 3600, Sales: 5200, Profit: 1600 },
  ];

export default function AriaChart() {
    const handleButtonClick = () => {
        console.log('Button clicked');
      };
  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative'>
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Area Chart</h2>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Sales" fill="#8884d8" />
          <Area type="monotone" dataKey="expenditure" fill="green" />
          <Area type="monotone" dataKey="Profit" fill="purple" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 right-4">
        <ChartButton 
          label="Violations"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  )
}
