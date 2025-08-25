"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import { Activity, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSlider() {
  return (
    <div className="relative h-screen lg:h-[650px] ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full "
      >
        {/* First Slide - All Sports News */}
        <SwiperSlide>
          <div className="relative h-screen lg:h-[650px]  bg-[url('/uclbanner.jpg')] bg-cover bg-center flex items-center ">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col items-start text-white px-20 w-full">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl lg:text-8xl  mb-4 font-heading"
              >
                All Football <br />
                News
              </motion.h1>
              <p className="text-lg lg:text-xl mb-6 ">
                Stay updated with the latest news from your favorite sports.
              </p>
              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {/* Fixtures Button */}
                <button className="flex items-center gap-3 font-semibold hover:text-gray-200">
                  <div className="bg-white p-3 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-black" />
                  </div>
                  Fixtures
                </button>

                {/* Live Scores Button */}
                <button className="flex items-center gap-3 font-semibold hover:text-gray-200">
                  <div className="border border-white p-3 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  Live Scores
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide - Tournaments You Can Join */}
        <SwiperSlide>
          <div className="relative h-screen lg:h-[650px] bg-[url('/tournament.png')] bg-cover bg-center flex items-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-start text-white px-20 w-full">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl lg:text-8xl  mb-4 font-heading"
              >
                Play Local <br /> Tournaments
              </motion.h1>
              <p className="text-lg lg:text-xl mb-6">
                Join local and online tournaments. Show your skills to the
                world!
              </p>
              <div className="flex gap-4">
                <Button variant="button1">Join Now</Button>
                <Button variant="button2">Explore</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
