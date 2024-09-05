"use client";

import { Transcribe } from '@/sections/Transcribe'; // Adjust the import path as needed
import { HeaderLogin } from '@/sections/Header_login';
import { FooterLogin } from '@/sections/Footer_login';
import Sidebar from '@/components/Sidebar';

export default function Transcriber() {
  return (
    <>
      <HeaderLogin />
      <Sidebar />
      <main>
        <Transcribe />
      </main>
      <FooterLogin />
    </>
  );
}
