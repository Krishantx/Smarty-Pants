"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { HeaderLogin } from "@/sections/Header_login";
import { FooterLogin } from "@/sections/Footer_login";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import smartyPantsLogo from "@/assets/smarty_pants_text.png";
import { motion } from "framer-motion";

type Video = {
  id: number;
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  externalLink?: string; // External link for each video
  description?: string;  // Short description field
};

const RecursionIntro = () => {
  const [completed, setCompleted] = useState(false);

  const handleMarkAsDone = () => {
    setCompleted(true);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        
        body {
          font-family: 'Roboto', sans-serif;
        }

        .bubbles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          opacity: 0.6;
          animation: bubbleUp 15s infinite ease-in-out;
        }

        @keyframes bubbleUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-300px) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-600px) scale(1.5);
            opacity: 0;
          }
        }

        .bubble:nth-child(1) {
          width: 80px;
          height: 80px;
          left: 10%;
          animation-duration: 20s;
        }
        .bubble:nth-child(2) {
          width: 120px;
          height: 120px;
          left: 30%;
          animation-duration: 25s;
          animation-delay: 2s;
        }
        .bubble:nth-child(3) {
          width: 100px;
          height: 100px;
          left: 50%;
          animation-duration: 18s;
          animation-delay: 4s;
        }
        .bubble:nth-child(4) {
          width: 140px;
          height: 140px;
          left: 70%;
          animation-duration: 22s;
          animation-delay: 6s;
        }
        .bubble:nth-child(5) {
          width: 90px;
          height: 90px;
          left: 90%;
          animation-duration: 20s;
          animation-delay: 8s;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-gray-100 flex flex-col relative">
        <div className="bubbles-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <HeaderLogin />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {/* Breadcrumb */}

            {/* Video Section */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-600 text-white p-6 flex items-center space-x-6">
                <Image
                  src={smartyPantsLogo}
                  alt="SMARTYPANTS Logo"
                  className="w-40 h-auto"
                  width={160}
                  height={40}
                />
                <div>
                  <h2 className="text-xl font-semibold">INTRODUCTION TO RECURSION</h2>
                  <p className="text-sm">Your complete guide to DSA</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative mb-4" style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/yVdKa8dnKiE"
                    title="Introduction to Recursion"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <motion.button
                  onClick={handleMarkAsDone}
                  className={`px-4 py-2 rounded ${completed ? "bg-green-600" : "bg-blue-600"} text-white hover:opacity-90 transition-transform transform-gpu duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  {completed ? "MARKED AS DONE" : "MARK AS DONE"}
                </motion.button>
              </div>
            </motion.div>

            {/* Related Videos */}
            <h3 className="text-xl font-semibold mb-4">RELATED VIDEOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {relatedVideos.map(({ id, ...video }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <VideoCard {...video} />
                </motion.div>
              ))}
            </div>
          </main>
        </div>

      </div>
    </>
  );
};

type VideoCardProps = {
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  externalLink?: string;
  description?: string; // Added description field
};

const VideoCard = ({ title, thumbnail, videoUrl, externalLink, description }: VideoCardProps) => {
  const CardContent = (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-lg duration-300">
      {videoUrl ? (
        <div className="relative" style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        thumbnail && (
          <Image src={thumbnail} alt={title} className="w-full h-32 object-cover" width={500} height={128} />
        )
      )}
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        {description && <p className="text-sm text-gray-600 mt-2">{description}</p>} {/* Description with smaller font */}
      </div>
    </div>
  );

  return externalLink ? (
    <a href={externalLink} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

const relatedVideos: Video[] = [
  {
    id: 1,
    title: "How to improve coding skills",
    videoUrl: "https://www.youtube.com/embed/UwHqsX2JIYA",
    externalLink: "https://codeforces.com/blog/entry/119084",
    description: "Learn tips to enhance your coding skills.",
  },
  {
    id: 2,
    title: "Leetcode tips and tricks",
    videoUrl: "https://www.youtube.com/embed/GPIuPRqDGG8",
    externalLink: "https://leetcode.com/discuss/career/450215/How-to-use-LeetCode-to-help-yourself-efficiently-and-effectively-(for-beginners)",
    description: "Essential Leetcode strategies for beginners.",
  },
  {
    id: 3,
    title: "Understanding dynamic programming",
    videoUrl: "https://www.youtube.com/embed/PttgNGRyYQg",
    externalLink: "https://www.geeksforgeeks.org/dynamic-programming/",
    description: "Master the fundamentals of dynamic programming.",
  },
  {
    id: 4,
    title: "Basic DSA Concepts",
    videoUrl: "https://www.youtube.com/embed/5T0SiJocPCI",
    externalLink: "https://www.geeksforgeeks.org/time-complexity-and-space-complexity/",
    description: "Understand key DSA concepts and their complexities.",
  },
];

export default RecursionIntro;
