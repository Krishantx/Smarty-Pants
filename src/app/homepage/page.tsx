import React from 'react';
import { HeaderLogin } from "@/sections/Header_login";
import {FooterLogin} from '@/sections/Footer_login';
import Sidebar from '@/components/Sidebar';


const BlankPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <HeaderLogin />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

      </div>

      {/* Footer */}
      <FooterLogin />
    </div>
  );
};

export default BlankPage;
