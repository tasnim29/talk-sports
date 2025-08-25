"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50 ">
        <div className="flex justify-between items-center px-20 py-6 w-full">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">TalkFootball</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <a href="/" className="hover:text-blue-400">
              Home
            </a>
            <a href="#results" className="hover:text-blue-400">
              Results
            </a>
            <a href="#table" className="hover:text-blue-400">
              Table
            </a>
            <a href="#teams" className="hover:text-blue-400">
              Teams
            </a>
            <a href="#videos" className="hover:text-blue-400">
              Videos
            </a>
            <a href="#news" className="hover:text-blue-400">
              News
            </a>
          </nav>

          {/* Right-side Icons + Login */}
          <div className="hidden lg:block">
            <Link href="/login">
              {" "}
              <Button variant="button2">Log In</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-80 px-6 py-4 space-y-4 text-white">
            <a href="#fixtures" className="block">
              Fixtures
            </a>
            <a href="#results" className="block">
              Results
            </a>
            <a href="#table" className="block">
              Table
            </a>
            <a href="#teams" className="block">
              Teams
            </a>
            <a href="#videos" className="block">
              Videos
            </a>
            <a href="#news" className="block">
              News
            </a>
            <Link href="/login">
              {" "}
              <Button variant="button2">Log In</Button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
