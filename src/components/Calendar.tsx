import React from 'react';
import { FaBook } from 'react-icons/fa';

const Calendar: React.FC = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // Note: January is 0!
  const currentYear = today.getFullYear();

  // Calculate start day of the month
  const startDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const getDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`calendar-day text-center py-2 rounded-full ${
            i === currentDay
              ? 'bg-blue-100 text-blue-600 font-semibold'
              : 'text-gray-700'
          }`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-lg font-semibold text-gray-700">
        {today.toLocaleString('default', { month: 'long' })} {currentYear}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-4 text-sm">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className="calendar-day header font-medium text-gray-500 text-center"
          >
            {day}
          </div>
        ))}
        {getDays()}
      </div>
      <div className="mt-4 flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
          <FaBook />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-semibold">Assignment 04</p>
          <p className="text-xs text-gray-500">Due Date: Oct 02, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
