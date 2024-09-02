import React from 'react';

interface Course {
  title: string;
  instructor: string;
}

const MyCourses: React.FC = () => {
  const courses: Course[] = [
    { title: 'Introduction to lorem ipsum...', instructor: 'Shams Tabrez' },
    { title: 'English for today', instructor: 'Shams Tabrez' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">MY COURSES</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="text-md font-semibold">{course.title}</h4>
            <p className="text-sm text-gray-500">{course.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
