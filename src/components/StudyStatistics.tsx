import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudyStatistics: React.FC = () => {
  const data = {
    labels: ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
    datasets: [
      {
        label: 'Study Hours',
        data: [2, 3, 4, 5, 7, 4, 3],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-gray-600 text-sm mb-4">STUDY STATISTICS</h3>
      <Bar data={data} />
    </div>
  );
};

export default StudyStatistics;
