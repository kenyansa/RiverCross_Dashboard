import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  // Data for the Doughnut chart
  const data = {
    labels: ['In 1000km', 'Overdue', 'In 5000km', 'In 25000km'],
    datasets: [
      {
        label: 'Sales',
        data: [45, 50, 615, 610],
        backgroundColor: [
          '#bfef4f',
          '#930606',
          '#faac35',
          '#f22d11',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-blue-50 rounded-lg p-4 m-2 relative'>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Assets Service Summary</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="w-full flex justify-end">
          <select
            id="service"
            name="service"
            defaultValue="Service"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Service">Service</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Repair">Repair</option>
            <option value="Replacement">Replacement</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-auto h-200">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
