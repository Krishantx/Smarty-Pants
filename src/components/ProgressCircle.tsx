import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
      <h3 className="text-gray-600 text-sm mb-4">PROGRESS</h3>
      <CircularProgressbar
        value={45}
        text={`${45}%`}
        styles={buildStyles({
          textColor: '#3b82f6',
          pathColor: '#3b82f6',
          trailColor: '#e5e7eb',
        })}
      />
      <p className="text-sm text-gray-500 mt-4">Courses</p>
      <p className="text-sm text-gray-500">Prototypes</p>
    </div>
  );
};

export default ProgressCircle;
