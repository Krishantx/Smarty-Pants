'use client';
import { useState, useRef } from 'react';
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const handleGetStarted = async () => {
    // setLoading(true);
    setError(null);

    try {
      // Simulating an API call or some async operation
      // You can replace this with actual logic if needed
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you can handle successful response
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to start. Please try again later.');
    } finally {
      // setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-10 justify-center items-center">
          <button
            className="btn btn-primary"
            onClick={handleGetStarted}
            // disabled={loading}
          >
            Get Started

          </button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </button>
        </div>
        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};
