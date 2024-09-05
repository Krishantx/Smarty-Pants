import React from 'react';
import Image from 'next/image';
import book1 from "@/assets/book1.png"; // Assuming these are the paths to your book logos
import book2 from "@/assets/book2.png";

const CourseList: React.FC = () => {
  const courses = [
    { name: 'Competitive Programming Templates and Vectors', progress: 20, modules: 2, quizzes: 3 },
    { name: 'Introduction to Web Development', progress: 0, modules: 0, quizzes: 0 },
    { name: 'Basic Data Structure & Algorithm', progress: 100, completed: true, modules: 2, quizzes: 5 },
    { name: 'Java Course', progress: 10, modules: 2, quizzes: 10 },
    { name: 'Advanced Python Programming', progress: 50, modules: 5, quizzes: 8 },
    // { name: 'Introduction to Databases', progress: 75, modules: 6, quizzes: 4 },
    // { name: 'Machine Learning Basics', progress: 40, modules: 4, quizzes: 6 },
    // { name: 'Cybersecurity Fundamentals', progress: 30, modules: 3, quizzes: 2 },
    // { name: 'Cloud Computing Essentials', progress: 60, modules: 7, quizzes: 9 },
    // { name: 'Mobile App Development', progress: 80, modules: 8, quizzes: 10 },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow mb-6">
      {courses.map((course, index) => (
        <div key={index} className={`mb-6 ${index !== courses.length - 1 ? 'pb-6 border-b' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="text-gray-700 font-semibold">{course.name}</div>
            <div className="text-sm text-gray-500">
              {course.completed ? 'Completed' : `${course.progress}%`}
            </div>
          </div>
          <div className="flex items-center mt-2 mb-2">
            {/* Add logo at the start of the progress bar with increased size */}
            <Image
              src={index % 2 === 0 ? book1 : book2}
              alt={`Book Logo ${index % 2 === 0 ? '1' : '2'}`}
              width={32}
              height={32}
              className="mr-2"
            />
            <div className="flex-grow bg-gray-300 h-2 rounded-full">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{course.modules}/10 Modules</span>
            <span>{course.quizzes}/5 Quizzes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
