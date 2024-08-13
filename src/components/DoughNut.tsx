import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  // Data for the Doughnut chart
  const data = {
    labels: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Nakuru'],
    datasets: [
      {
        label: 'Sales',
        data: [5400, 4900, 4700, 4500, 5200],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-blue-50 rounded-lg p-6 m-4 shadow-lg'>
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Business Metrics by Location</h2>
      <div className="flex justify-center items-center">
        <div className="w-auto h-auto">
             <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
