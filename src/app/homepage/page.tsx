"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { HeaderLogin } from '@/sections/Header_login';
import { FooterLogin } from '@/sections/Footer_login';
import Sidebar from '@/components/Sidebar';
import ProgressBar from '@/components/ProgressBar';
import Stats from '@/components/Stats';
import CourseList from '@/components/CourseList';
import FeaturedBlog from '@/components/FeatureBlog';
import Calendar from '@/components/Calendar';
import Image from 'next/image';
import book from "@/assets/school.png"; // Assuming this is the book logo path

const BlankPage: React.FC = () => {
  const router = useRouter();

  const handleCourseCatalogClick = () => {
    router.push('/catalog'); // Replace with the actual path you want to navigate to
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="-72" /> {/* Adjust width as needed */}

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderLogin />

        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* New Heading for Roadmap */}
            {/* <h2 className="text-3xl font-semibold">Roadmap</h2> */}
            {/* Add your Roadmap component or content here */}
            {/* For example: <Roadmap /> */}

            {/* Heading above ProgressBar */}
            <h2 className="text-3xl font-semibold">Your Progress</h2>
            <ProgressBar />

            {/* Heading above Stats */}
            <h2 className="text-3xl font-semibold">Statistics Overview</h2>
            <Stats />

            {/* Heading and Button Row */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Available Courses</h2>
              <button
                onClick={handleCourseCatalogClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <Image src={book} alt="Book Logo" width={20} height={20} className="mr-2" />
                Course Catalog
              </button>
            </div>

            <CourseList />
          </div>

          <div className="flex flex-col space-y-6">
            {/* Heading above Calendar */}
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <Calendar />

            {/* Heading above FeaturedBlog */}
            <h2 className="text-2xl font-semibold">Featured Blog</h2>
            <FeaturedBlog />
          </div>
        </div>

        {/* Footer */}
        <FooterLogin />
      </div>
    </div>
  );
};

export default BlankPage;
