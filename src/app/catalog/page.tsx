"use client";
import React from "react";
import { HeaderLogin } from '@/sections/Header_login';
import { FooterLogin } from '@/sections/Footer_login';
import Sidebar from '@/components/Sidebar';

const Catalog: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      {/* Sidebar */}
      <div className="min-h-screen bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderLogin />

        {/* Main Section */}
        <div className="p-6 bg-white shadow-lg rounded-lg m-6 flex-grow">
          {/* Filters */}
          <div className="mb-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
              All
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105">
              AI/ML
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105">
              Web Development
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105">
              Cloud and DE
            </button>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Uber-Clone End to End Project Course',
                description: 'Build an Uber Clone End to End includes backend.',
                creator: 'Js Mastery',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/kmy_YNhl0mw'
              },
              {
                title: 'Data Engineering AWS Course',
                description: 'Cloud + Data Enginnering playlist',
                creator: 'Code with Yu',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/LSlt6iVI_9Y?list=PL_Ct8Cox2p8WjETeFftZePYTvuTRDx5h-'
              },
              {
                title: 'Advanced Web Development Course',
                description: 'Three.js and Advanced Web Development Concepts',
                creator: 'Js Mastery',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/kRQbRAJ4-Fs?list=PL6QREj8te1P6CkO_4OIK1-nwG5OxCD5tR'
              },
              {
                title: 'AI Course Text to Speech',
                description: 'API Implementation and model training',
                creator: 'Nicholas Renotte',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/8k8S5ruFAUs?list=PLgNJO2hghbmjJv0tSpfiDGQhdLgKb-ZmU'
              },
              {
                title: 'Competitive Programming Roadmap',
                description: 'Advanced C++ Course and CP',
                creator: 'Priyansh Agarwal',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/n-Xkbqcfi9w'
              },
              {
                title: 'Crew AI Course Advanced Gen AI Course',
                description: 'Model Training and Finetuning',
                creator: 'Krish Naik',
                lessons: '12 lessons · 7 quiz',
                src: 'https://www.youtube.com/embed/bFB4zqkcatU?list=PLZoTAELRMXVO_NfdHEBQylsAY2y789pXA'
              }
            ].map((course, index) => (
              <a 
                key={index}
                href="https://example.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow block hover:translate-y-[-4px]"
              >
                <div className="bg-gradient-to-br from-cyan-800 to-blue-500 h-48 rounded-md mb-4 overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={course.src} 
                    title={`YouTube video player - ${course.title}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-500 mb-2">{course.description}</p>
                <p className="text-gray-400">{course.creator}</p>
                <p className="text-gray-400">{course.lessons}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <FooterLogin />
      </div>
    </div>
  );
};

export default Catalog;
