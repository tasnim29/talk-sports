"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/abc.png')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center  px-6 max-w-7xl w-full">
        {/* Left: Headings & buttons */}
        <div className="text-white lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-4"
          >
            Your Game, Your Glory!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-6"
          >
            Discover live matches, join tournaments, and showcase your skills.
          </motion.p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Join a Tournament
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Explore Matches
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Live Score
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Statistics
            </motion.button>
          </div>
        </div>

        {/* Right: Image */}
        {/* <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            src="/ney.png" // replace with your player image
            alt="Player"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
