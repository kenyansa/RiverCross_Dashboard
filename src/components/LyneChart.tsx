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
    const handleButtonClick = () => {
        console.log('Button clicked');
      };
  return (
    <div className='bg-blue-50 rounded-lg p-6 m-4 relative'>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Line Chart Data by Location</h2>
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
  )
}
