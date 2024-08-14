import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartButton from './ChartButton';

const data = [
  { location: 'Nairobi', expenditure: 4000, Sales: 5400, Profit: 1400 },
  { location: 'Mombasa', expenditure: 3000, Sales: 4900, Profit: 1900 },
  { location: 'Kisumu', expenditure: 3200, Sales: 4700, Profit: 1500 },
  { location: 'Eldoret', expenditure: 2800, Sales: 4500, Profit: 1700 },
  { location: 'Nakuru', expenditure: 3600, Sales: 5200, Profit: 1600 },
];

export default function BaChart() {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative flex flex-col items-center'>
      <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">Sample Bar Chart</h2>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
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
      <div className="w-full flex justify-end mt-4">
        <ChartButton 
          label="Current Status"
          onClick={handleButtonClick}
          className="px-4 py-2 text-sm md:text-base"
        />
      </div>
    </div>
  );
}
