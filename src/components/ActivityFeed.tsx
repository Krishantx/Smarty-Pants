import React from 'react';

interface Activity {
  name: string;
  action: string;
  title: string;
  time: string;
}

const ActivityFeed: React.FC = () => {
  const activities: Activity[] = [
    { name: 'Felix', action: 'replied on', title: 'At aliquam enim in cras arcu', time: '25th Sep, 11:00 am' },
    { name: 'Ludwig', action: 'invited you to', title: 'Imperdiet enim est, varius faucibus', time: '25th Sep, 11:00 am' },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4">ACTIVITY</h3>
      {activities.map((activity, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm">
            <strong>{activity.name}</strong> {activity.action} <strong>{activity.title}</strong>
          </p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
