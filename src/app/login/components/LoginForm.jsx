"use client";
import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "@/assets/lottie.json";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-32 max-w-7xl mx-auto">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="********"
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <Button className="w-full" variant="button1">
                Log In
              </Button>
            </div>
          </form>

          <p className="text-gray-500 mt-6 text-center">
            Don't have an account?{" "}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-full h-full max-w-xl max-h-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
