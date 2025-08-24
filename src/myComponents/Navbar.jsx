"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Qwin</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#fixtures" className="hover:text-blue-400">
              Fixtures
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

          {/* Icons (Search + Profile) */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <button className="hover:text-blue-400">
              <i className="fas fa-search"></i>
            </button>
            <button className="hover:text-blue-400">
              <i className="fas fa-user-circle"></i>
            </button>
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
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
