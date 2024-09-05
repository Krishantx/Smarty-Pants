"use client";

import React, { useState } from 'react';
import { HeaderLogin } from '@/sections/Header_login';
import { FooterLogin } from '@/sections/Footer_login';
import Sidebar from '@/components/Sidebar';

const NoteGenerator: React.FC = () => {
  const [videoLink, setVideoLink] = useState('');
  const [notes, setNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNotes = async () => {
    if (!videoLink) {
      alert('Please enter a YouTube link');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generateSummary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ youtubeLink: videoLink }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }

      const data = await response.json();
      setNotes(data.summary);  // Assuming summary is returned as plain text
    } catch (error) {
      console.error('Error fetching notes:', error);
      setError('Failed to generate notes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderNotes = (summary: string) => {
    const formattedNotes = summary.split('\n').map((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '') {
        return null;  // Skip empty lines
      }

      // Assuming headings start with uppercase letters and no leading bullet points or numbers
      if (trimmedLine.match(/^[A-Z]/)) {
        return <h3 key={index} className="text-lg font-bold text-gray-800 mt-6 mb-2">{trimmedLine}</h3>;
      }

      // Treat lines starting with dashes (-) or numbers as bullet points
      if (trimmedLine.startsWith('-') || trimmedLine.match(/^\d+\./)) {
        return <li key={index} className="list-disc ml-5 mb-1">{trimmedLine.substring(1).trim()}</li>;
      }

      // Render other lines as paragraphs
      return <p key={index} className="mb-2">{trimmedLine}</p>;
    });

    return (
      <div className="bg-white p-6 rounded-lg shadow-inner">
        <h4 className="font-bold mb-4 text-gray-800 text-lg">Generated Notes</h4>
        <ul className="font-sans text-base text-gray-700 space-y-2">
          {formattedNotes}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-100 min-h-screen flex flex-col">
      <HeaderLogin />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Generate Your Notes<br />with One Single Click
              </h1>
              <p className="text-cyan-700 text-lg">
                SMARTYPANTS offers a tool that generates smart notes from any video you give to it, so that<br />
                when you need, you have the best notes summarized for you with a single click!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">ENTER VIDEO LINK</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="Your video link here"
                  className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={generateNotes}
                  className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition duration-300"
                  disabled={loading}
                >
                  {loading ? 'Generating...' : 'GENERATE NOTES'}
                </button>
              </div>
            </div>

            {error && (
              <div className="mt-4 text-red-500">
                <p>{error}</p>
              </div>
            )}

            {notes && (
              <div className="mt-8 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8 transition duration-500 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-cyan-700 mb-6">Here are the Summarized Notes for You!</h3>
                {renderNotes(notes)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteGenerator;