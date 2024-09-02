"use client";
import React from 'react';
import Overview from '@/sections/Overview';
import StudyStatistics from '@/components/StudyStatistics';
import MyCourses from '@/components/MyCourses';
import ProgressCircle from '@/components/ProgressCircle';
import ActivityFeed from '@/components/ActivityFeed';
import {HeaderLogin} from '@/sections/Header_login';  // Import header_login.tsx
import {FooterLogin} from '@/sections/Footer_login';  // Import footer_login.tsx
import Sidebar from '@/components/Sidebar';      // Import sidebar.tsx

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLogin />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <Overview />
              <StudyStatistics />
              <MyCourses />
            </div>
            <div className="space-y-6">
              <ProgressCircle />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
      <FooterLogin />
    </div>
  );
};

export default Dashboard;
