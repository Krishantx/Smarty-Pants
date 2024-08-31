"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { HeaderLogin } from "@/sections/Header_login";
import { FooterLogin } from "@/sections/Footer_login";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState<number>(25 * 60);
  const [activeButton, setActiveButton] = useState<string>("pomodoro");
  const [buttonState, setButtonState] = useState<'start' | 'pause' | 'reset'>('start');

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setButtonState('start');
      timerIntervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerIntervalRef.current!);
            setIsRunning(false);
            setButtonState('reset');
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
    setButtonState('reset');
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setButtonState('pause');
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      <HeaderLogin />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]">
        <div className="flex space-x-2 mb-8">
          <Button
            variant={activeButton === "pomodoro" ? "default" : "secondary"}
            size="default"
            className={`rounded-full font-bold px-6 py-2 text-sm tracking-wide ${
              activeButton === "pomodoro"
                ? "bg-[#4DD0E1] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => {
              setActiveButton("pomodoro");
              resetTimer();
            }}
          >
            POMODORO TIMER
          </Button>
          <Button
            variant={activeButton === "stopwatch" ? "default" : "secondary"}
            size="default"
            className={`rounded-full font-bold px-6 py-2 text-sm tracking-wide ${
              activeButton === "stopwatch"
                ? "bg-[#4DD0E1] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => {
              setActiveButton("stopwatch");
            }}
          >
            STOPWATCH
          </Button>
        </div>

        <div className="text-sm text-gray-600 mb-4 font-medium">1 of 4</div>

        <div className="flex items-center mb-8">
          <div className="w-48 h-48 flex items-center justify-center bg-[#263238] text-white text-8xl rounded-lg font-['Roboto_Mono'] font-bold">
            {Math.floor(time / 60) < 10 ? "0" : ""}{Math.floor(time / 60)}
          </div>
          <div className="text-8xl mx-4 text-[#263238] font-['Roboto_Mono'] font-bold">:</div>
          <div className="w-48 h-48 flex items-center justify-center bg-[#263238] text-white text-8xl rounded-lg font-['Roboto_Mono'] font-bold">
            {time % 60 < 10 ? "0" : ""}{time % 60}
          </div>
        </div>

        <div className="flex justify-between w-[calc(2*12rem+2rem)] mb-8">
          <div className="text-sm text-gray-600 font-medium tracking-wide">MINUTES</div>
          <div className="text-sm text-gray-600 font-medium tracking-wide">SECONDS</div>
        </div>

        <div className="flex space-x-4">
          <Button
            size="lg"
            variant="secondary"
            className={`rounded-md transform transition-all w-36 h-16 text-xl font-bold tracking-wide ${
              buttonState === 'pause' ? 'bg-[#4DD0E1] text-white' : 'bg-white text-[#263238]'
            }`}
            onClick={pauseTimer}
          >
            PAUSE
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className={`rounded-md transform transition-all w-36 h-16 text-xl font-bold tracking-wide ${
              buttonState === 'start' ? 'bg-[#4DD0E1] text-white' : 'bg-white text-[#263238]'
            }`}
            onClick={startTimer}
          >
            START
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className={`rounded-md transform transition-all w-36 h-16 text-xl font-bold tracking-wide ${
              buttonState === 'reset' ? 'bg-[#4DD0E1] text-white' : 'bg-white text-[#263238]'
            }`}
            onClick={resetTimer}
          >
            RESET
          </Button>
        </div>
      </div>
      <FooterLogin />
    </>
  );
}