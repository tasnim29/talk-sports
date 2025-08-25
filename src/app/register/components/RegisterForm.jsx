"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterForm = () => {
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registered successfully!");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data.data.url);
      setImageURL(data.data.url);
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/auth-bg.png')" }} // Background image
    >
      <div className="w-full max-w-7xl p-10 lg:p-16 rounded-2xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="John Doe"
              className="w-full px-5 py-4 border border-gray-400 rounded-xl bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Profile Image */}
          <div className="flex flex-col">
            <label className="block text-white mb-2">Profile Picture</label>
            <label className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-500 rounded-xl bg-transparent hover:border-indigo-500 hover:bg-gray-800/30 transition">
              <span className="text-gray-300">Click to upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {imageURL && (
              <img
                src={imageURL}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover rounded-full border border-gray-500"
              />
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full px-5 py-4 border border-gray-400 rounded-xl bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="********"
              className="w-full px-5 py-4 border border-gray-400 rounded-xl bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit */}
          <div>
            <Button className="w-full py-6" variant="button1">
              Register
            </Button>
          </div>
        </form>

        {/* Link */}
        <p className="text-gray-300 mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-400 font-medium cursor-pointer hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
